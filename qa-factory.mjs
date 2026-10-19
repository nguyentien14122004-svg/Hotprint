import {assertConsult} from './qa-quote-link.mjs';
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
 await page.goto(origin+(lang==='vi'?'/nha-may/':'/en/factory/'),{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('.fp-page img')].map(im=>{im.loading='eager';return im.decode();}));});
 assert.equal(await page.locator('main>section').count(),8);assert.equal(await page.locator('.fp-gallery-item').count(),8);assert.equal(await page.locator('h1').count(),1);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} overflow`);
 checks.push({lang,width});
 if(width===1440){await page.screenshot({path:`qa/factory-${lang}-desktop.png`,fullPage:true});await page.screenshot({path:`qa/factory-${lang}-hero.png`});}
 if(width===390)await page.screenshot({path:`qa/factory-${lang}-mobile.png`,fullPage:true});
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/nha-may/');
await page.locator('.fp-hero a[href="#quy-trinh"]').click();assert.match(page.url(),/#quy-trinh/);
await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/factory/#quy-trinh');assert.match(await page.title(),/Company profile/i);
await page.locator('[data-lang=vi]').click();await page.waitForURL('**/nha-may/#quy-trinh');
await page.locator('#fp-tab-0').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('#fp-tab-1').getAttribute('aria-selected'),'true');assert.ok(await page.locator('#fp-panel-1').isVisible());assert.ok(await page.locator('#fp-panel-0').isHidden());
await page.keyboard.press('End');assert.ok(await page.locator('#fp-panel-2').isVisible());await page.keyboard.press('Home');assert.ok(await page.locator('#fp-panel-0').isVisible());
await page.locator('.fp-gallery-item').first().click();assert.ok(await page.locator('#factory-gallery').isVisible());await page.locator('#factory-photo-image').evaluate(im=>im.decode());assert.match(await page.locator('#factory-photo-image').getAttribute('src'),/032A4965/);
await page.locator('#factory-photo-next').click();assert.match(await page.locator('#factory-photo-image').getAttribute('src'),/032A4938/);
await page.keyboard.press('ArrowLeft');assert.match(await page.locator('#factory-photo-image').getAttribute('src'),/032A4965/);await page.locator('[data-factory-thumb="7"]').click();assert.match(await page.locator('#factory-photo-image').getAttribute('src'),/032A5101/);
await page.locator('#factory-photo-next').click();assert.match(await page.locator('#factory-photo-image').getAttribute('src'),/032A4965/);await page.screenshot({path:'qa/factory-gallery.png'});await page.keyboard.press('Escape');assert.ok(await page.locator('.fp-gallery-item').first().evaluate(e=>e===document.activeElement));
await assertConsult(page,'[data-factory-topic=quality]','quality');
await assertQuote(page,'.fp-final [data-request=quote]');
await assertConsult(page,'.fp-final [data-request=consult]');
await page.goto(origin+'/');await page.locator('.factory-content [data-factory]').click();await page.waitForURL('**/nha-may/');
await page.goto(origin+'/danh-muc/nhan-hang-catalog/');await page.locator('.fold-factory-link').click();await page.waitForURL('**/nha-may/');
await page.setViewportSize({width:390,height:850});await page.goto(origin+'/en/factory/');await page.locator('#mobile-trigger').click();await page.locator('#mobile-menu [data-factory]').click();await page.waitForURL('**/en/factory/');assert.ok(await page.locator('#mobile-menu').isHidden());
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
await writeFile('qa/factory-report.json',JSON.stringify({checks,errors,failed,features:'8 sections, 12 responsive language combinations, images, tabs keyboard, gallery controls and focus, consultation context, quotes, home/category/mobile links passed'},null,2));
console.log(JSON.stringify({viewports:checks.length,errors,failed,passed:true}));await browser.close();
