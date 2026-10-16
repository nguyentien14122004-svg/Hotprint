import {assertQuote,assertSample,assertConsult} from './qa-quote-link.mjs';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const browser=await chromium.launch({headless:true,channel:'chrome'}),page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174',path={vi:'/danh-muc/tui-giay/',en:'/en/paper-bags/',zh:'/zh/paper-bags/'};
for(const lang of ['vi','en','zh'])for(const width of [1920,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto(origin+path[lang],{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('main img')].map(im=>{im.loading='eager';return im.decode()}))});
 assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('.bag-card').count(),15);assert.equal(await page.locator('.bag-style-grid article').count(),3);assert.equal(await page.locator('.bag-craft-notes article').count(),3);assert.equal(await page.locator('.bag-faq details').count(),6);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} overflow`);
 const columns=await page.locator('.bag-grid').evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length);assert.equal(columns,width>900?5:width>650?3:width>360?2:1);
 const distortion=await page.locator('.bag-source').evaluateAll(els=>els.filter(e=>e.getBoundingClientRect().width>0).map(e=>{const r=e.getBoundingClientRect();return Math.abs((r.width/r.height)/(e.naturalWidth/e.naturalHeight)-1)}));assert.ok(Math.max(...distortion)<.01,`Product geometry distorted ${lang} ${width}: ${Math.max(...distortion)}`);
 assert.equal(await page.locator('#footer-categories a').count(),6);assert.match(await page.locator('.site-header .brand img').getAttribute('src'),/logo-original/);
 if(width===1440||width===390){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`qa/bags-v2-${lang}-${width}.png`,fullPage:true});if(width===1440)await page.screenshot({path:`qa/bags-hero-${lang}.png`})}
 checks.push({lang,width,columns,maxRatioError:Math.max(...distortion)});console.log(`Bags ${lang} ${width} passed`);
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+path.vi,{waitUntil:'networkidle'});
for(const [use,n] of [['retail',6],['gift',8],['wide',1],['all',15]]){await page.locator(`[data-bag-filter="${use}"]`).click();assert.equal(await page.locator('.bag-card:visible').count(),n)}
await page.fill('#bag-query','Karl');assert.equal(await page.locator('.bag-card:visible').count(),1);assert.equal(await page.locator('.bag-card:visible').getAttribute('data-model'),'032A5331');
await page.fill('#bag-query','hoa tiet chim');assert.equal(await page.locator('.bag-card:visible').getAttribute('data-model'),'032A5311');
await page.reload();assert.equal(await page.locator('.bag-card:visible').count(),1);await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/paper-bags/**');assert.equal(await page.locator('.bag-card:visible').getAttribute('data-model'),'032A5311');
await page.fill('#bag-query','NO_MATCH_12345');assert.ok(await page.locator('#bag-empty').isVisible());await page.locator('[data-bag-reset]').click();assert.equal(await page.locator('.bag-card:visible').count(),15);
await page.goto(origin+path.vi+'?use=retail#mau-tham-khao',{waitUntil:'networkidle'});await page.locator('[data-bag-filter=gift]').click();await page.goBack();assert.equal(await page.locator('.bag-card:visible').count(),6);
await page.goto(origin+path.vi,{waitUntil:'networkidle'});const ids=await page.locator('.bag-card').evaluateAll(els=>els.map(e=>e.dataset.model));
for(const id of ids){await page.locator(`.bag-card[data-model="${id}"] .bag-card-photo`).click();assert.ok(await page.locator('#fold-detail').isVisible());assert.match(await page.locator('#fold-detail-image').getAttribute('src'),new RegExp(id));await page.locator('#fold-detail-image').evaluate(im=>im.decode());await page.keyboard.press('Escape');assert.ok(!await page.locator('#fold-detail').isVisible());}
await page.locator('.bag-hero [data-fold-detail]').click();await assertQuote(page,'#fold-detail-quote','tui-giay','032A5336');
await page.locator('.bag-hero [data-fold-detail]').click();await assertSample(page,'#fold-detail-sample','tui-giay','032A5336');await assertQuote(page,'.bag-hero [data-request=quote]','tui-giay');await assertConsult(page,'.bag-craft [data-request=consult]');
await assertSample(page,'.bag-card[data-model=HP6418] .bag-sample-link','tui-giay','HP6418');
await page.locator('.bag-faq summary').first().focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.bag-faq details[open]').count(),1);
for(const id of ['032A5355','032A5311','032A5357','032A5331']){await page.locator('#bag-slide-next').click();assert.equal(await page.locator('#bag-slide-open').getAttribute('data-fold-detail'),id);assert.equal(await page.locator('[data-bag-panel]:visible').count(),1)}
await page.locator('#bag-slide-prev').click();assert.equal(await page.locator('#bag-slide-open').getAttribute('data-fold-detail'),'032A5357');await page.locator('[data-bag-slide="1"]').click();assert.equal(await page.locator('#bag-slide-open').getAttribute('data-fold-detail'),'032A5355');await page.locator('#bag-slide-open').click();assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5355/);await page.keyboard.press('Escape');
await page.locator('#product-trigger').click();assert.equal(await page.locator('#menu-categories a').count(),6);await page.locator('#product-trigger').click();
for(const href of await page.locator('.site-footer a[href^="/"]').evaluateAll(els=>[...new Set(els.map(e=>e.getAttribute('href')))])){const r=await page.request.get(origin+href);assert.equal(r.status(),200,href)}
await page.goto(origin+'/san-pham/');await page.locator('.family-card').nth(3).click();await page.waitForURL('**/danh-muc/tui-giay/');assert.ok(await page.locator('.bag-hero').isVisible());
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/bags-report.json',JSON.stringify({origin,checks,errors,failed,productCount:15,filters:true,search:true,history:true,galleries:true,requestContext:true,faqKeyboard:true,carousel:true,navigation:true,originalLogo:true},null,2));
await browser.close();console.log('Paper bags passed: 18 responsive VI/EN/ZH views, 15 original galleries, undistorted images, filters/search/history, requests, FAQ, carousel, original logo and navigation.');
