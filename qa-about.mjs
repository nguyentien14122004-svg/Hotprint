import {assertConsult} from './qa-quote-link.mjs';
import {assertQuote} from './qa-quote-link.mjs';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile,mkdir} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
await mkdir('qa',{recursive:true});
const browser=await chromium.launch({headless:true,channel:'chrome'}),page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
const origin='http://127.0.0.1:4174';
for(const [lang,route]of [['vi','/ve-chung-toi/'],['en','/en/about/']])for(const width of [1672,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto(origin+route,{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('main img')].map(im=>{im.loading='eager';return im.decode()}))});
 assert.equal(await page.locator('main>section').count(),6);assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('html').getAttribute('lang'),lang);
 assert.equal(await page.title(),lang==='vi'?'Về HotPrint | HotPrint':'About HotPrint | HotPrint');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} overflow`);
 assert.equal(await page.locator('head>link[href="/natural-theme.css"]').count(),1);
 assert.equal(await page.locator('.ap-reference').count(),3);assert.equal(await page.locator('.ap-timeline li').count(),2);
 for(const a of await page.locator('.ap-index a').all()){const target=await a.getAttribute('href');assert.equal(await page.locator(target).count(),1)}
 await assertConsult(page,'.ap-hero [data-request=consult]');
 await assertConsult(page,'[data-about-topic=documents]','documents');
 await assertQuote(page,'.ap-connect [data-request=quote]');
 assert.equal(await page.locator('[data-lang=en]').getAttribute('href'),'/en/about/');assert.equal(await page.locator('[data-lang=vi]').getAttribute('href'),'/ve-chung-toi/');
 await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(150);
 if(width===1440){await page.screenshot({path:`qa/about-${lang}-desktop.png`,fullPage:true});await page.screenshot({path:`qa/about-${lang}-hero.png`})}
 if(width===390)await page.screenshot({path:`qa/about-${lang}-mobile.png`,fullPage:true});
 checks.push({lang,width});
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/ve-chung-toi/');await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/about/');assert.equal(await page.locator('h1').textContent(),'About HotPrint.');await page.locator('[data-lang=vi]').click();await page.waitForURL('**/ve-chung-toi/');
await page.locator('#product-trigger').click();assert.ok(await page.locator('#product-menu').isVisible());await page.keyboard.press('Escape');assert.ok(await page.locator('#product-menu').isHidden());
await page.setViewportSize({width:390,height:844});await page.goto(origin+'/');await page.locator('#mobile-trigger').click();await page.locator('#mobile-menu [data-about]').click();await page.waitForURL('**/ve-chung-toi/');assert.equal(await page.locator('h1').textContent(),'Về HotPrint.');
for(const route of ['/','/en/','/san-pham/','/nha-may/','/en/paper-bags/']){await page.goto(origin+route);const target=route.startsWith('/en/')?'/en/about/':'/ve-chung-toi/';assert.equal(await page.locator('.site-header [data-about]').getAttribute('href'),target)}
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/about-report.json',JSON.stringify({passed:true,checks,errors,failed},null,2));console.log(JSON.stringify({passed:true,viewports:checks.length,errors,failed}));await browser.close();
