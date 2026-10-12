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
 await page.goto(origin+(lang==='vi'?'/danh-muc/hop-giay-mem/':'/en/folding-cartons/'),{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('.fold-page img')].map(im=>{im.loading='eager';return im.decode();}));});
 assert.equal(await page.locator('main>section').count(),6);assert.equal(await page.locator('.fold-sample').count(),8);assert.equal(await page.locator('h1').count(),1);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} overflow`);
 checks.push({lang,width});
 if(width===1440)await page.screenshot({path:`qa/folding-${lang}-desktop.png`,fullPage:true});
 if(width===390)await page.screenshot({path:`qa/folding-${lang}-mobile.png`,fullPage:true});
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/danh-muc/hop-giay-mem/');
for(const [use,count] of [['food',3],['fragrance',2],['consumer',3],['all',8]]){await page.locator(`[data-fold-filter=${use}]`).click();assert.equal(await page.locator('.fold-sample:visible').count(),count);}
await page.locator('[data-fold-filter=fragrance]').click();await page.reload();assert.equal(await page.locator('.fold-sample:visible').count(),2);
await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/folding-cartons/**');assert.equal(await page.locator('.fold-sample:visible').count(),2);assert.match(await page.title(),/Folding cartons/);
await page.locator('[data-lang=vi]').click();await page.waitForURL('**/danh-muc/hop-giay-mem/**');
await page.locator('.fold-sample:visible [data-fold-detail="032A5268"]').first().click();assert.ok(await page.locator('#fold-detail').isVisible());assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5268/);
await page.locator('#fold-photo-next').click();assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5298/);
await assertQuote(page,'#fold-detail-quote','hop-giay-mem','032A5268');
await assertQuote(page,'.fold-hero [data-request=quote]','hop-giay-mem');
await page.locator('.fold-faq summary').first().focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.fold-faq details[open]').count(),1);
await page.goto(origin+'/san-pham/');await page.locator('.family-card').first().click();await page.waitForURL('**/danh-muc/hop-giay-mem/');assert.ok(await page.locator('.fold-hero').isVisible());
await page.goto(origin+'/');await page.locator('#category-links a').first().click();await page.waitForURL('**/danh-muc/hop-giay-mem/');
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
await writeFile('qa/folding-report.json',JSON.stringify({checks,errors,failed,filters:true,gallery:true,prefill:true,faqKeyboard:true,navigation:true},null,2));
console.log('Folding page: 12 responsive views, real images, filters, gallery, VI/EN, quote context, keyboard FAQ and navigation passed.');await browser.close();
