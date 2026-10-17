import {assertConsult} from './qa-quote-link.mjs';
import {assertQuote,assertSample} from './qa-quote-link.mjs';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile,mkdir} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
await mkdir('qa',{recursive:true});
const browser=await chromium.launch({headless:true,channel:'chrome'}),context=await browser.newContext({reducedMotion:'reduce',permissions:['clipboard-read','clipboard-write']}),page=await context.newPage(),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';
for(const [lang,route]of [['vi','/lien-he/'],['en','/en/contact/'],['zh','/zh/contact/']])for(const width of [1920,1440,1024,768,390,375,320]){
 await page.setViewportSize({width,height:1000});await page.goto(origin+route,{waitUntil:'networkidle'});await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('main img')].map(im=>{im.loading='eager';return im.decode()}))});
 assert.equal(await page.locator('main>section').count(),4);assert.equal(await page.locator('h1').count(),1);assert.equal(await page.title(),lang==='vi'?'Liên hệ | HotPrint':lang==='zh'?'联系我们 | HotPrint':'Contact | HotPrint');assert.equal(await page.locator('html').getAttribute('lang'),lang==='zh'?'zh-Hans':lang);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} overflow`);
 assert.equal(await page.locator('.cp-channel').count(),3);assert.equal(await page.locator('.cp-address').count(),2);assert.equal(await page.locator('.cp-need').count(),3);
 assert.equal(await page.locator('.cp-channel-phone>a').getAttribute('href'),'tel:+84903032686');assert.equal(await page.locator('.cp-channel a[href^="https://zalo.me"]').getAttribute('href'),'https://zalo.me/0903032686');assert.equal(await page.locator('.cp-channel a[href^="mailto:"]').getAttribute('href'),'mailto:info@hotprint.vn');
 for(const map of await page.locator('.cp-address a[href^="https://www.google.com/maps"]').all()){const u=new URL(await map.getAttribute('href'));assert.ok(u.searchParams.get('query').includes('HotPrint'));assert.ok(u.searchParams.get('query').includes('Đồng Nai'))}
 if(width===1440){
 if(lang!=='zh'){
 for(const type of ['quote','sample','consult']){if(type==='quote'){await assertQuote(page,'.cp-need [data-request=quote]');continue;}if(type==='sample'){await assertSample(page,'.cp-need [data-request=sample]');continue;}await assertConsult(page,'.cp-need [data-request=consult]');}
 await assertConsult(page,'[data-contact-topic=visit]','visit');
 }else{
 for(const [type,slug] of [['quote','request-a-quote'],['sample','request-a-sample'],['consult','request-a-consultation']]){await page.locator('.cp-need [data-request='+type+']').click();await page.waitForURL('**/zh/'+slug+'/');assert.ok(await page.locator('#quote-form').isVisible());await page.goto(origin+route);}
 await page.locator('[data-contact-topic=visit]').click();await page.waitForURL(u=>u.pathname==='/zh/request-a-consultation/');assert.equal(await page.locator('#q-topic').inputValue(),'visit');await page.goto(origin+route);
 }
 }
 await page.locator('[data-contact-copy="0903032686"]').click();assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),'0903032686');assert.equal(await page.locator('#cp-phone-status').textContent(),lang==='vi'?'Đã sao chép.':lang==='zh'?'已复制。':'Copied.');
 await page.locator('[data-contact-copy="info@hotprint.vn"]').click();assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),'info@hotprint.vn');
 assert.equal(await page.locator('.cp-route-index a').count(),3);
 assert.equal(await page.locator('.cp-scene img').evaluate(im=>im.naturalWidth>0),true);
 assert.equal(await page.locator('[data-lang=en]').getAttribute('href'),'/en/contact/');assert.equal(await page.locator('[data-lang=vi]').getAttribute('href'),'/lien-he/');
 await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(150);if(width===1440){await page.screenshot({path:`qa/contact-page-${lang}-desktop.png`,fullPage:true});await page.screenshot({path:`qa/contact-page-${lang}-hero.png`})}if(width===390)await page.screenshot({path:`qa/contact-page-${lang}-mobile.png`,fullPage:true});checks.push({lang,width});
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/lien-he/#dia-diem');await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/contact/#dia-diem');assert.ok((await page.locator('h1').textContent()).includes('Connect'));await page.locator('[data-lang=vi]').click();await page.waitForURL('**/lien-he/#dia-diem');
await page.locator('.cp-channel-phone>a').click();assert.ok(await page.locator('#info-dialog').isVisible());assert.ok((await page.locator('#info-content').textContent()).includes('0903.032.686'));await page.keyboard.press('Escape');
const [privacy]=await Promise.all([page.waitForEvent('popup'),page.locator('.cp-before-send [data-privacy-page]').click()]);await privacy.waitForLoadState();assert.ok(privacy.url().endsWith('/chinh-sach-rieng-tu/'));await privacy.close();
await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:()=>Promise.reject(new Error('Clipboard unavailable'))}}));await page.locator('.cp-address [data-contact-copy]').first().click();const fallback=page.locator('.cp-address .cp-copy-fallback').first();assert.ok(await fallback.isVisible());assert.ok((await fallback.inputValue()).includes('9B'));
await page.locator('.cp-need [data-request=quote]').click();await page.waitForURL('**/yeu-cau-bao-gia/');await page.locator('#q-name').fill('');await page.locator('.qp-submit').click();assert.equal(await page.locator('#q-name').getAttribute('aria-invalid'),'true');
await page.setViewportSize({width:390,height:844});await page.goto(origin+'/');await page.locator('#mobile-trigger').click();await page.locator('#mobile-menu [data-contact-page]').click();await page.waitForURL('**/lien-he/');
for(const route of ['/','/en/','/san-pham/','/nha-may/','/ve-chung-toi/','/en/paper-bags/']){await page.goto(origin+route);assert.equal(await page.locator('.footer-company [data-contact-page]').getAttribute('href'),route.startsWith('/en/')?'/en/contact/':'/lien-he/')}
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/contact-page-report.json',JSON.stringify({passed:true,checks,errors,failed,clipboardFallback:true},null,2));console.log(JSON.stringify({passed:true,viewports:checks.length,errors,failed,clipboardFallback:true}));await browser.close();
