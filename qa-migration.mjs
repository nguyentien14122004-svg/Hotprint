import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
import http from 'node:http';
import assert from 'node:assert/strict';
const {chromium}=createRequire(import.meta.url)('playwright');
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4210';
const server=process.env.QA_ORIGIN?null:spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:'4210'},stdio:['ignore','pipe','pipe']});
if(server)await new Promise(r=>server.stdout.once('data',r));
const manifest=JSON.parse(await readFile('migration/route-manifest.json','utf8'));
const source=JSON.parse(await readFile('migration/legacy-content.json','utf8'));
const seo=JSON.parse(await readFile('migration/seo-inventory.json','utf8'));
const media=JSON.parse(await readFile('migration/media-manifest.json','utf8')).records;
let browser;const checks=[],errors=[];
try{
 const oldRoutes=[...new Set([...source.pages.map(p=>new URL(p.link).pathname),...source.posts.map(p=>new URL(p.link).pathname),...source.products.map(p=>new URL(p.permalink).pathname),...source.categories.map(p=>new URL(p.permalink).pathname),...source.postCategories.filter(c=>source.posts.some(p=>p.categories.includes(c.id))).map(c=>new URL(c.link).pathname)])];
 for(const route of oldRoutes){const r=await fetch(origin+route);assert.equal(r.status,200,route);const html=await r.text();assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,route);assert.ok(html.includes('HotPrint'));}
 checks.push({oldRoutes:oldRoutes.length,working:true});
 console.log('Old public URLs passed: '+oldRoutes.length);
 // Check each query redirect, including all public attachment IDs and old WP shortlinks.
 const redirectQueue=[...manifest.redirects];async function redirectWorker(){while(redirectQueue.length){const rule=redirectQueue.pop(),url=new URL(rule.source,origin);for(const t of rule.has||[])url.searchParams.set(t.key,t.value.includes('legacySearch')?'Hộp carton':t.value);const r=await fetch(url,{redirect:'manual'});assert.equal(r.status,301,url.href);const location=new URL(r.headers.get('location'),origin);if(rule.destination.includes('legacySearch'))assert.equal(location.searchParams.get('q'),'Hộp carton');else assert.equal(location.pathname,new URL(rule.destination,origin).pathname,url.href);const target=await fetch(location,{method:'HEAD'});assert.equal(target.status,200,location.href);}}
 await Promise.all([redirectWorker(),redirectWorker(),redirectWorker(),redirectWorker()]);
 checks.push({redirects:manifest.redirects.length,working:true});
 console.log('Redirects passed: '+manifest.redirects.length);
 for(const key of ['p','page_id']){const home=await fetch(origin+'/?'+key+'=3957',{redirect:'manual'});assert.equal(home.status,200,'Homepage shortlink must not redirect to itself');}
 const sitemap=await(await fetch(origin+'/sitemap.xml')).text();assert.equal((sitemap.match(/<url>/g)||[]).length,seo.indexable);assert.ok(!sitemap.includes('request-status'));assert.ok(!sitemap.includes('da-gui-yeu-cau'));
 for(const item of seo.pages){const r=await fetch(origin+item.route);assert.equal(r.status,200);assert.ok((r.headers.get('x-robots-tag')||'').includes('noindex'),'preview host must be blocked');const h=await r.text();assert.equal((h.match(/rel="canonical"/g)||[]).length,1,item.route);assert.ok(h.includes('rel="canonical" href="'+item.canonical+'"'),item.route+' canonical mismatch '+h.match(/<link rel="canonical"[^>]*>/)?.[0]);assert.ok(h.includes('content="'+(item.indexable?'index,follow,max-image-preview:large':'noindex,nofollow')+'"'));const structured=JSON.parse(h.match(/<script type="application\/ld\+json" data-seo="true">([\s\S]*?)<\/script>/)[1]);assert.ok(structured['@graph'].some(n=>n['@type']==='Organization'));if(item.alternates)for(const route of Object.values(item.alternates))assert.ok(h.includes('href="https://hotprint.vn'+route+'"'));}
 if(server){const headers=await new Promise((resolve,reject)=>{http.get(origin+'/',{headers:{host:'hotprint.vn'}},r=>{r.resume();resolve(r.headers)}).on('error',reject)});assert.equal(headers['x-robots-tag'],undefined);}
 assert.equal((await fetch(origin+'/this-page-must-not-exist/')).status,404);
 checks.push({seoPages:seo.pages.length,sitemapPages:seo.indexable,previewNoindex:true,unknownRoute404:true});
 console.log('Canonical, sitemap and preview indexing passed: '+seo.pages.length);
 // All old public media URLs are independent of the old origin.
 let n=0;const queue=[...media];async function mediaWorker(){while(queue.length){const item=queue.pop();const r=await fetch(origin+item.path,{method:'HEAD'});assert.equal(r.status,200,item.path);n++;}}
 await Promise.all([mediaWorker(),mediaWorker(),mediaWorker(),mediaWorker()]);checks.push({media:n,working:true});
 browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage({reducedMotion:'reduce'});page.on('pageerror',e=>errors.push(e.message));
 for(const route of ['/san-pham/hop-giay-hop-giay-pierre-cardin/','/phan-loai-cac-chat-lieu-chuyen-dung-trong-san-xuat-bao-bi/','/albums-in-an-bao-bi/','/tin-tuc/'])for(const width of [1440,390,320]){await page.setViewportSize({width,height:1000});await page.goto(origin+route,{waitUntil:'networkidle'});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,route+' overflow '+width);assert.equal(await page.title(),(await page.locator('body').getAttribute('data-legacy-title')));await page.locator('main img').evaluateAll(async es=>Promise.all(es.map(e=>{e.loading='eager';return e.decode()})));if(width!==320)await page.screenshot({path:`qa/migration-${route.split('/').filter(Boolean).pop()}-${width}.png`});}
 const product=manifest.pages.find(p=>p.type==='product'&&p.modelId);await page.goto(origin+product.route);await page.locator('.legacy-connect a[href^="/yeu-cau-bao-gia/"]').click();await page.waitForURL(u=>u.pathname==='/yeu-cau-bao-gia/');assert.equal(new URL(page.url()).searchParams.get('model'),product.modelId);assert.ok((await page.locator('#q-reference').inputValue()).includes(product.modelId));checks.push({legacyProductToQuote:true,model:product.modelId});
 assert.deepEqual(errors,[]);await mkdir('qa',{recursive:true});await writeFile('qa/migration-report.json',JSON.stringify({origin,passed:true,checks,responsiveViews:12,errors,mailDeliveryVerified:false,backendStorageVerified:false,dnsCutoverApplied:false},null,2));console.log(JSON.stringify({passed:true,checks,responsiveViews:12}));
}finally{await browser?.close();server?.kill()}
