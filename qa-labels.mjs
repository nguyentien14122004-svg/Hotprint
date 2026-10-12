import {assertQuote,assertSample} from './qa-quote-link.mjs';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
const origin='http://127.0.0.1:4174';
for(const lang of ['vi','en'])for(const width of [1672,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1050});
 await page.goto(origin+(lang==='vi'?'/danh-muc/nhan-dan-decal/':'/en/adhesive-labels/'),{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('.fold-page img')].map(im=>{im.loading='eager';return im.decode();}));});
 assert.equal(await page.locator('main>section').count(),6);
 assert.equal(await page.locator('.fold-sample').count(),3);
 assert.equal(await page.locator('h1').count(),1);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} overflow`);
 assert.equal(await page.locator('[data-fold-filter]').count(),0,'Three samples do not require a filter');
 checks.push({lang,width});
 if(width===1440)await page.screenshot({path:`qa/labels-${lang}-desktop.png`,fullPage:true});
 if(width===390)await page.screenshot({path:`qa/labels-${lang}-mobile.png`,fullPage:true});
}
await page.setViewportSize({width:1440,height:1000});
await page.goto(origin+'/danh-muc/nhan-dan-decal/#mau-tham-khao');
await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/adhesive-labels/**');
assert.match(await page.title(),/Adhesive labels/);assert.equal(new URL(page.url()).hash,'#mau-tham-khao');
await page.locator('[data-lang=vi]').click();await page.waitForURL('**/danh-muc/nhan-dan-decal/**');
for(const id of ['032A5339','032A5328','032A5337']){
 const trigger=page.locator(`.fold-sample-photo[data-fold-detail="${id}"]`);
 await trigger.click();assert.ok(await page.locator('#fold-detail').isVisible());
 assert.match(await page.locator('#fold-detail-image').getAttribute('src'),new RegExp(id));
 assert.ok(await page.locator('#fold-photo-next').isDisabled());
 assert.ok(await page.locator('#fold-photo-prev').isDisabled());
 assert.match(await page.locator('#fold-original-link').getAttribute('href'),new RegExp(id));
 await page.keyboard.press('Escape');assert.ok(await trigger.evaluate(el=>el===document.activeElement));
}
await page.locator('.fold-sample-photo[data-fold-detail="032A5328"]').click();
await assertQuote(page,'#fold-detail-quote','nhan-dan-decal','032A5328');
await assertQuote(page,'.fold-hero [data-request=quote]','nhan-dan-decal');
await assertSample(page,'.fold-sample [data-request=sample] >> nth=0','nhan-dan-decal','032A5339');
await page.locator('.fold-faq summary').first().focus();await page.keyboard.press('Enter');
assert.equal(await page.locator('.fold-faq details[open]').count(),1);
for(const route of ['/san-pham/','/']){
 await page.goto(origin+route);await page.locator(route==='/'?'#category-links a':'.family-card').nth(4).click();
 await page.waitForURL('**/danh-muc/nhan-dan-decal/');
}
await page.goto(origin+'/en/paper-bags/');await page.locator('.fold-group-nav a').nth(4).click();
await page.waitForURL('**/en/adhesive-labels/');
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
await writeFile('qa/labels-report.json',JSON.stringify({checks,errors,failed,gallery:true,prefill:true,sampleRequest:true,faqKeyboard:true,navigation:true},null,2));
console.log('Adhesive labels: 12 responsive views, original gallery, VI/EN, requests, keyboard and category navigation passed.');
await browser.close();
