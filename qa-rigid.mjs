import {assertQuote,assertSample,assertConsult} from './qa-quote-link.mjs';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const browser=await chromium.launch({headless:true,channel:'chrome'}),page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174',path={vi:'/danh-muc/hop-cung-cao-cap/',en:'/en/premium-rigid-boxes/',zh:'/zh/premium-rigid-boxes/'};
for(const lang of ['vi','en','zh'])for(const width of [1920,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto(origin+path[lang],{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('main img')].map(im=>{im.loading='eager';return im.decode()}))});
 assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('.rigid-card').count(),13);assert.equal(await page.locator('.rigid-benefits article').count(),5);assert.equal(await page.locator('.rigid-finish-list article').count(),4);assert.equal(await page.locator('.rigid-faq details').count(),5);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} overflow`);
 const columns=await page.locator('.rigid-grid').evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length);assert.equal(columns,width>900?4:width>650?3:width>360?2:1);
 assert.equal(await page.locator('#footer-categories a').count(),6);
 if(width===1440||width===390){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`qa/rigid-v2-${lang}-${width}.png`,fullPage:true})}
 checks.push({lang,width,columns});console.log(`Rigid ${lang} ${width} passed`);
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+path.vi,{waitUntil:'networkidle'});
for(const [use,n] of [['brand',4],['gift',5],['occasion',4],['all',13]]){await page.selectOption('#rigid-use',use);assert.equal(await page.locator('.rigid-card:visible').count(),n)}
await page.fill('#rigid-query','MAROU');await page.locator('.rigid-search-submit').click();assert.equal(await page.locator('.rigid-card:visible').count(),1);assert.equal(await page.locator('.rigid-card:visible').getAttribute('data-model'),'032A5316');
await page.fill('#rigid-query','mau cam');await page.locator('.rigid-search-submit').click();assert.equal(await page.locator('.rigid-card:visible').getAttribute('data-model'),'032A5363');
await page.reload();assert.equal(await page.locator('.rigid-card:visible').count(),1);await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/premium-rigid-boxes/**');assert.equal(await page.locator('.rigid-card:visible').getAttribute('data-model'),'032A5363');
await page.fill('#rigid-query','NO_MATCH_12345');await page.locator('.rigid-search-submit').click();assert.ok(await page.locator('#rigid-empty').isVisible());await page.locator('[data-rigid-reset]').click();assert.equal(await page.locator('.rigid-card:visible').count(),13);
await page.goto(origin+path.vi+'?use=brand#máu',{waitUntil:'networkidle'});await page.selectOption('#rigid-use','gift');await page.goBack();assert.equal(await page.locator('.rigid-card:visible').count(),4);
await page.goto(origin+path.vi,{waitUntil:'networkidle'});const ids=await page.locator('.rigid-card').evaluateAll(els=>els.map(e=>e.dataset.model));
for(const id of ids){await page.locator(`.rigid-card[data-model="${id}"] .rigid-card-photo`).click();assert.ok(await page.locator('#fold-detail').isVisible());assert.match(await page.locator('#fold-detail-image').getAttribute('src'),new RegExp(id));await page.locator('#fold-detail-image').evaluate(im=>im.decode());await page.keyboard.press('Escape');assert.ok(!await page.locator('#fold-detail').isVisible());}
await page.locator('.rigid-hero [data-fold-detail]').click();await page.locator('#fold-photo-next').click();assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5254/);await assertQuote(page,'#fold-detail-quote','hop-cao-cap','032A5309');
await page.locator('.rigid-hero [data-fold-detail]').click();await assertSample(page,'#fold-detail-sample','hop-cao-cap','032A5309');await assertQuote(page,'.rigid-cta [data-request=quote]','hop-cao-cap');await assertConsult(page,'.rigid-finishing [data-request=consult]');
await page.locator('.rigid-faq summary').first().focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.rigid-faq details[open]').count(),1);
await page.locator('#product-trigger').click();assert.equal(await page.locator('#menu-categories a').count(),6);await page.locator('#product-trigger').click();
for(const href of await page.locator('.site-footer a[href^="/"]').evaluateAll(els=>[...new Set(els.map(e=>e.getAttribute('href')))])){const r=await page.request.get(origin+href);assert.equal(r.status(),200,href)}
await page.goto(origin+'/san-pham/');await page.locator('.family-card').nth(2).click();await page.waitForURL('**/danh-muc/hop-cung-cao-cap/');assert.ok(await page.locator('.rigid-hero').isVisible());
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/rigid-report.json',JSON.stringify({origin,checks,errors,failed,productCount:13,filters:true,search:true,history:true,galleries:true,requestContext:true,faqKeyboard:true,navigation:true},null,2));
await browser.close();console.log('Rigid reference passed: 18 responsive VI/EN/ZH views, 13 genuine galleries, search/filter/history, quotation/sample/consultation context, FAQ and navigation.');
