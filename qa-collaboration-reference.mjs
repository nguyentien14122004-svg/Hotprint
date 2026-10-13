import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const base=process.env.QA_ORIGIN||'http://127.0.0.1:4174';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
try{
 for(const route of ['/san-pham/','/en/products/','/zh/products/'])for(const width of [1920,1440,1024,768,390,320]){
  await page.setViewportSize({width,height:1100});await page.goto(base+route+'#cung-phat-trien',{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${route} ${width}: overflow`);
  assert.equal(await page.locator('.process-reference ol>li').count(),3);
  const columns=await page.locator('.catalog-steps').evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length);assert.equal(columns,width<=760?1:3);
  for(const scope of ['.process-reference','.consult-reference']){
   assert(!/undefined/.test(await page.locator(scope).innerText()));
   assert(await page.locator(scope+' h2').isVisible());
   for(const button of await page.locator(scope+' button').all())assert((await button.boundingBox()).height>=44);
   assert(await page.locator(scope).evaluate(el=>{const r=el.getBoundingClientRect();return [...el.querySelectorAll('h2,h3,p,button')].every(n=>{const b=n.getBoundingClientRect();return b.left>=r.left-1&&b.right<=r.right+1&&b.top>=r.top-1&&b.bottom<=r.bottom+1})}),`${scope}: clipped content`);
  }
  const headings=await page.locator('.process-reference h2,.consult-reference h2').allTextContents();
  if(route.startsWith('/zh'))assert(headings.every(t=>!/[a-zA-Z]/.test(t)),headings.join(' '));
  if(route.startsWith('/en'))assert(headings[0].includes('an idea.'));
  assert.match(await page.locator('.consult-reference-art').getAttribute('aria-label'),/HotPrint/);
  checks.push({route,width,columns});
 }
 for(const [route,sample,consult] of [['/san-pham/','/yeu-cau-mau/','/dat-lich-tu-van/'],['/en/products/','/en/request-a-sample/','/en/request-a-consultation/'],['/zh/products/','/zh/request-a-sample/','/zh/request-a-consultation/']]){
  await page.goto(base+route+'#cung-phat-trien');await page.locator('.process-sample').click();await page.waitForURL('**'+sample+'**');
  await page.goto(base+route+'#lien-he');assert.equal(await page.locator('.consult-reference [data-call]').getAttribute('href'),'tel:+84903032686');assert.equal(await page.locator('.consult-reference a[target=_blank]').getAttribute('href'),'https://zalo.me/0903032686');
  await page.locator('.consult-reference [data-request=consult]').click();await page.waitForURL('**'+consult+'**');
 }
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await mkdir('qa',{recursive:true});await writeFile('qa/collaboration-reference-report.json',JSON.stringify({passed:true,checks,errors,failed},null,2));console.log(JSON.stringify({passed:true,layouts:checks.length,requestRoutes:6,errors,failed}));
}finally{await browser.close()}
