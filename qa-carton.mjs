import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const origin=(process.env.QA_ORIGIN||'http://127.0.0.1:4174').replace(/\/$/,'');
const routes={vi:'/danh-muc/hop-carton-in-mau/',en:'/en/printed-corrugated-boxes/',zh:'/zh/printed-corrugated-boxes/'};
const ids=['032A5366','032A5358','032A5326','032A5361','HP7107','HP7106','HP7094','HP6410','HP6408','HP6406','HP6404'];
const key='hotprint-sample-selection';
const browser=await chromium.launch({headless:true,channel:'chrome'}),context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage();
const errors=[],failed=[],checks=[];
function monitor(target){target.on('pageerror',e=>errors.push({url:target.url(),message:e.message}));target.on('response',r=>{if(r.status()>=400)failed.push({url:r.url(),status:r.status()});});}
monitor(page);
const visible=()=>page.locator('#carton-grid .fold-sample:visible');
const save=id=>page.locator(`[data-carton-save="${id}"]`);
const goto=(lang='vi',query='')=>page.goto(origin+routes[lang]+query,{waitUntil:'networkidle'});
async function state(){const u=new URL(page.url());return{q:u.searchParams.get('q')||'',use:u.searchParams.get('use')||'all',scope:u.searchParams.get('scope')||'all',sort:u.searchParams.get('sort')||'default',hash:u.hash};}
async function query(value){await page.locator('#carton-query').fill(value);await page.locator('#carton-search button[type="submit"]').click();}
async function request(lang,type,selector,model){
 const back=page.url(),route=lang==='vi'?(type==='consult'?'/dat-lich-tu-van/':type==='sample'?'/yeu-cau-mau/':'/yeu-cau-bao-gia/'):`/${lang}/${type==='consult'?'request-a-consultation':type==='sample'?'request-a-sample':'request-a-quote'}/`;
 await page.locator(selector).click();await page.waitForURL(u=>u.pathname===route);
 assert.equal(new URL(page.url()).searchParams.get('category'),'hop-carton',`${lang} ${type} URLcategory`);
 assert.equal(await page.locator('#q-category').inputValue(),'hop-carton',`${lang} ${type} formcategory`);
 if(model){assert.equal(new URL(page.url()).searchParams.get('model'),model);assert.match(await page.locator('#q-reference').inputValue(),new RegExp(model));}
 await page.goto(back,{waitUntil:'networkidle'});
}
await mkdir('qa',{recursive:true});
try{
 for(const lang of ['vi','en','zh'])for(const width of [1920,1440,1024,768,390,320]){
  await page.setViewportSize({width,height:1050});await goto(lang);
  const images=await page.evaluate(async()=>{await document.fonts.ready;const ims=[...document.querySelectorAll('.carton-reference img')];await Promise.all(ims.map(async im=>{im.loading='eager';await im.decode();}));return ims.map(im=>({src:new URL(im.currentSrc).pathname,width:im.naturalWidth,height:im.naturalHeight}));});
  assert.equal(await page.locator('main>section').count(),4,`${lang} ${width}: sections`);assert.equal(await page.locator('h1').count(),1);
  assert.deepEqual((await page.locator('#carton-grid .fold-sample').evaluateAll(cs=>cs.map(c=>c.dataset.model))).sort(),[...ids].sort(),`${lang} ${width}: all classified IDs`);
  assert.equal(await visible().count(),11);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width}: overflow`);
  assert.equal(await page.locator('.fold-sample[data-use="undefined"]').count(),0);assert.equal(await page.locator('.carton-reference').filter({hasText:'undefined'}).count(),0);
  assert(images.every(im=>im.width>0&&im.height>0),`${lang} ${width}: image and shadow decode`);
  for(const id of ids){const im=images.find(im=>im.src===`/assets/carton-studio-v3/${id}.webp`);assert(im&&im.width===1440&&im.height===1080,`${id}: registered 4:3 photograph`);}
  assert.equal(await page.locator('.carton-hero .carton-studio-photo').getAttribute('src'),'/assets/carton-studio-v3/HP7107.webp');
  assert.equal(await page.locator('.carton-family-nav a').count(),6);
  assert.equal(await page.locator('.site-footer #footer-categories a').count(),6);
  for(const selector of ['.footer-locations','.footer-company [data-quote-page]','.footer-company [data-sample-page]','.footer-company [data-consult-page]','.footer-company [data-knowledge]','.footer-bottom a[href="#main"]'])assert(await page.locator(selector).isVisible(),selector+' restored');
  assert.equal(await page.locator('.carton-final [data-request]').count(),3);
  checks.push({lang,width,products:11,images:images.length});
  if(width===1440)await page.screenshot({path:`qa/carton-${lang}-desktop.png`,fullPage:true});if(width===390)await page.screenshot({path:`qa/carton-${lang}-mobile.png`,fullPage:true});
  console.log(`Responsive ${lang} ${width} passed`);
 }
 await page.setViewportSize({width:1440,height:1000});
 for(const lang of ['vi','en','zh']){
  await goto(lang);await query('hop banh');assert.equal(await visible().count(),2,`${lang}: accentsearch`);
  await query('no-such-carton-reference');assert.equal(await visible().count(),0);assert(await page.locator('#carton-empty').isVisible());await page.locator('[data-carton-reset]').click();assert.equal(await visible().count(),11);
  for(const [use,count]of [['kitchen',3],['footwear',3],['food',4],['other',1],['all',11]]){await page.locator('#carton-use').selectOption(use);assert.equal(await visible().count(),count,`${lang}: ${use} classification`);}
  const named=await page.locator('#carton-grid .fold-sample').evaluateAll(cs=>cs.map(c=>({id:c.dataset.model,name:c.querySelector('h3').textContent.trim()}))),collator=new Intl.Collator(lang==='zh'?'zh-Hans':lang,{numeric:true,sensitivity:'base'});
  const sorted=[...named].sort((a,b)=>collator.compare(a.name,b.name)).map(p=>p.id);await page.locator('#carton-sort').selectOption('name');assert.deepEqual(await page.locator('#carton-grid .fold-sample').evaluateAll(cs=>cs.map(c=>c.dataset.model)),sorted,`${lang}: localized sorting`);
  await goto(lang);await page.locator('.fold-sample-photo[data-fold-detail="032A5366"]').click();assert(await page.locator('#fold-detail').isVisible());await page.locator('#fold-detail-image').evaluate(im=>im.decode());assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5366-large\.webp$/);
  await page.locator('#fold-photo-next').click();await page.locator('#fold-detail-image').evaluate(im=>im.decode());assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5367-large\.webp$/);await page.keyboard.press('Escape');assert(!await page.locator('#fold-detail').isVisible());
  await page.locator('.fold-sample-photo[data-fold-detail="032A5366"]').click();await request(lang,'quote','#fold-detail-quote','032A5366');await page.locator('.fold-sample-photo[data-fold-detail="032A5366"]').click();await request(lang,'sample','#fold-detail-sample','032A5366');await request(lang,'quote','.carton-final [data-request="quote"]');await request(lang,'sample','.carton-final [data-request="sample"]');await request(lang,'consult','.carton-final [data-request="consult"]');
  const links=await page.locator('.site-footer a[href^="/"]').evaluateAll(as=>[...new Set(as.map(a=>a.href))]);for(const href of links){const r=await page.request.get(href);assert.equal(r.status(),200,'footer route '+href);}
 }
 await goto('vi');await page.evaluate(k=>localStorage.setItem(k,JSON.stringify(['032A5293'])),key);await page.reload({waitUntil:'networkidle'});assert.equal(await page.locator('#carton-selection-count').innerText(),'1','existing out-of-category selection');
 for(const id of ids.slice(0,5))await save(id).click();assert.deepEqual(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key),['032A5293',...ids.slice(0,5)],'preserve cross-category samples');
 await save(ids[5]).click();assert.equal(await page.locator('#carton-selection-count').innerText(),'6');assert.equal(await save(ids[5]).getAttribute('aria-pressed'),'false');assert(await page.locator('#carton-status').isVisible());assert((await page.locator('#carton-status').innerText()).includes('6'));assert((await page.locator('#carton-selection-link').getAttribute('href')).includes('models=032A5293'),'sample URL includes allfamilies');
 const writer=await context.newPage();monitor(writer);await writer.goto(origin+routes.vi,{waitUntil:'networkidle'});await writer.evaluate(k=>localStorage.setItem(k,JSON.stringify(['032A5293','HP6408'])),key);await page.waitForFunction(()=>document.querySelector('#carton-selection-count').textContent==='2');assert.equal(await save('HP6408').getAttribute('aria-pressed'),'true','actual crosstab storage event');
 await page.locator('#carton-sort').selectOption('selected');assert.equal(await page.locator('#carton-grid .fold-sample').first().getAttribute('data-model'),'HP6408');await page.locator('#carton-scope').selectOption('selected');assert.equal(await visible().count(),1);await save('HP6408').click();assert.equal(await visible().count(),0);assert(await page.locator('#carton-empty').isVisible());assert.deepEqual(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key),['032A5293']);
 await page.locator('[data-carton-reset]').click();assert.equal(await visible().count(),11);assert.deepEqual(await state(),{q:'',use:'all',scope:'all',sort:'default',hash:''});await writer.close();
 await page.evaluate(k=>{localStorage.setItem(k,JSON.stringify(['HP6410','HP6408']));window.dispatchEvent(new StorageEvent('storage',{key:k}));},key);
 await query('hop banh');await page.locator('#carton-use').selectOption('food');await page.locator('#carton-scope').selectOption('selected');await page.locator('#carton-sort').selectOption('name');await page.evaluate(()=>{location.hash='mau-tham-khao';});
 const combined={q:'hop banh',use:'food',scope:'selected',sort:'name',hash:'#mau-tham-khao'};assert.deepEqual(await state(),combined);
 for(const lang of ['en','zh','vi']){
  const href=new URL(await page.locator(`[data-lang="${lang}"]`).getAttribute('href'));for(const field of ['q','use','scope','sort'])assert.equal(href.searchParams.get(field),combined[field],`${lang}: href ${field}`);assert.equal(href.hash,combined.hash);
  await page.locator(`[data-lang="${lang}"]`).click();await page.waitForURL(u=>u.pathname===routes[lang]);assert.deepEqual(await state(),combined,`${lang}: language preserves allfilters`);assert.equal(await visible().count(),2);
 }
 await page.reload({waitUntil:'networkidle'});assert.equal(await visible().count(),2);for(const field of ['q','use','scope','sort'])assert.equal(await page.locator(field==='q'?'#carton-query':`#carton-${field}`).inputValue(),combined[field]);
 await page.locator('#carton-use').selectOption('kitchen');assert.equal(await visible().count(),0);await page.goBack({waitUntil:'networkidle'});assert.deepEqual(await state(),combined,'back restores allfilterstate');assert.equal(await visible().count(),2);
 await page.evaluate(k=>{localStorage.removeItem(k);window.dispatchEvent(new StorageEvent('storage',{key:k,newValue:null}));},key);
 await page.goto(origin+'/san-pham/',{waitUntil:'networkidle'});await page.locator('.family-card').nth(1).click();await page.waitForURL(u=>u.pathname===routes.vi);assert(await page.locator('.carton-hero').isVisible());await page.goto(origin+'/',{waitUntil:'networkidle'});await page.locator('#category-links a').nth(1).click();await page.waitForURL(u=>u.pathname===routes.vi);assert(await page.locator('.carton-hero').isVisible());
 assert.deepEqual(errors,[],'script errors');assert.deepEqual(failed,[],'HTTP failures');
 await writeFile('qa/carton-report.json',JSON.stringify({origin,checks,errors,failed,products:ids,search:true,filters:true,sort:true,selection:true,maxSix:true,crossTabStorage:true,selectedScope:true,URLHistory:true,languageState:true,gallery:true,quoteAndSampleContext:true,navigation:true},null,2)+'\n');
 console.log('Carton reference: 18 responsive VI/EN/ZH views, 11 genuine samples, decoded photos/shadows, search/filter/sort, cross-category and cross-tab shortlist, URL/history/languages, original gallery, request context and navigation passed.');
}finally{await browser.close();}
