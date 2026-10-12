import {assertQuote} from './qa-quote-link.mjs';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
const origin='http://127.0.0.1:4174';
for(const lang of ['vi','en'])for(const width of [1672,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1050});
 await page.goto(origin+(lang==='vi'?'/danh-muc/hop-cung-cao-cap/':'/en/premium-rigid-boxes/'),{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('.fold-page img')].map(im=>{im.loading='eager';return im.decode();}));});
 assert.equal(await page.locator('main>section').count(),6);assert.equal(await page.locator('.fold-sample').count(),9);assert.equal(await page.locator('h1').count(),1);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} overflow`);
 checks.push({lang,width});
 if(width===1440)await page.screenshot({path:`qa/rigid-${lang}-desktop.png`,fullPage:true});
 if(width===390)await page.screenshot({path:`qa/rigid-${lang}-mobile.png`,fullPage:true});
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/danh-muc/hop-cung-cao-cap/');
for(const [use,count] of [['brand',2],['gift',3],['occasion',4],['all',9]]){await page.locator(`[data-fold-filter=${use}]`).click();assert.equal(await page.locator('.fold-sample:visible').count(),count);}
await page.locator('[data-fold-filter=brand]').click();await page.reload();assert.equal(await page.locator('.fold-sample:visible').count(),2);
await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/premium-rigid-boxes/**');assert.equal(await page.locator('.fold-sample:visible').count(),2);assert.match(await page.title(),/Premium rigid boxes/);
await page.locator('[data-lang=vi]').click();await page.waitForURL('**/danh-muc/hop-cung-cao-cap/**');
await page.locator('.fold-sample:visible [data-fold-detail="032A5308"]').first().click();assert.ok(await page.locator('#fold-detail').isVisible());assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5308/);
await page.locator('#fold-photo-next').click();assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5286/);
await assertQuote(page,'#fold-detail-quote','hop-cao-cap','032A5308');
await assertQuote(page,'.fold-hero [data-request=quote]','hop-cao-cap');
await page.locator('.fold-faq summary').first().focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.fold-faq details[open]').count(),1);
await page.goto(origin+'/san-pham/');await page.locator('.family-card').nth(2).click();await page.waitForURL('**/danh-muc/hop-cung-cao-cap/');assert.ok(await page.locator('.fold-hero').isVisible());
await page.goto(origin+'/');await page.locator('#category-links a').nth(2).click();await page.waitForURL('**/danh-muc/hop-cung-cao-cap/');
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
await writeFile('qa/rigid-report.json',JSON.stringify({checks,errors,failed,filters:true,gallery:true,prefill:true,faqKeyboard:true,navigation:true},null,2));
console.log('Premium rigid page: 12 responsive views, real images, filters, gallery, VI/EN, quote context, keyboard FAQ and navigation passed.');await browser.close();
