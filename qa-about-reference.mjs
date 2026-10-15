import {assertConsult,assertQuote} from './qa-quote-link.mjs';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile,mkdir} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
await mkdir('qa',{recursive:true});
const browser=await chromium.launch({headless:true,channel:'chrome'}),page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';
for(const[lang,route]of[['vi','/ve-chung-toi/'],['en','/en/about/'],['zh','/zh/about/']])for(const width of [1920,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto(origin+route,{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('main img')].map(im=>{im.loading='eager';return im.decode()}))});
 assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('main>section').count(),8);
 if(lang!=='zh')assert.ok(await page.evaluate(()=>[...document.fonts].some(f=>f.family==='HotPrint About Editorial'&&f.status==='loaded')),'Editorial font must load for Vietnamese diacritics');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} horizontal overflow`);
 assert.equal(await page.locator('.ap-value-grid article').count(),4);assert.equal(await page.locator('.ap-factory-grid a').count(),4);assert.equal(await page.locator('.ap-card').count(),6);
 assert.equal(await page.locator('.ap-card:visible').count(),width>650?3:1);assert.equal(await page.locator('#ap-dots button').count(),width>650?2:6);
 assert.deepEqual(await page.locator('.ap-stat-grid strong').allTextContents(),['2004','2018','6','67']);
 const images=await page.locator('main img:not(.ap-product-shadow)').evaluateAll(els=>els.filter(e=>e.clientWidth>0).map(e=>({src:e.getAttribute('src'),ratio:Math.abs((e.clientWidth/e.clientHeight)/(e.naturalWidth/e.naturalHeight)-1)})));
 assert.ok(images.every(i=>i.ratio<.02),'Image proportions changed: '+JSON.stringify(images));
 assert.equal(await page.locator('main img[src^="/assets/factory/"]').count(),7);assert.match(await page.locator('.site-header .brand img').getAttribute('src'),/logo-original/);assert.equal(await page.locator('#footer-categories a').count(),6);
 const pages=width>650?2:6,seen=new Set();for(let i=0;i<pages;i++){for(const id of await page.locator('.ap-card:visible').evaluateAll(els=>els.map(e=>e.dataset.product)))seen.add(id);await page.locator('#ap-next').click()}
 assert.equal(seen.size,6);assert.equal(await page.locator('#ap-dots button[aria-pressed=true]').count(),1);
 await page.locator('#ap-prev').click();assert.equal(await page.locator('#ap-dots button').last().getAttribute('aria-pressed'),'true');await page.locator('#ap-dots button').first().click();
 await page.locator('.ap-story-more summary').focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.ap-story-more').getAttribute('open'),'');assert.equal(await page.locator('.ap-story-more li').count(),2);await page.keyboard.press('Enter');
 if(width===1440||width===390){await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(100);await page.screenshot({path:`qa/about-v2-${lang}-${width}.png`,fullPage:true});await page.screenshot({path:`qa/about-v2-hero-${lang}-${width}.png`})}
 checks.push({lang,width,images:images.length,carousel:true});console.log(`About ${lang} ${width} passed`);
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/ve-chung-toi/',{waitUntil:'networkidle'});
await assertConsult(page,'.ap-hero [data-request=consult]');await assertConsult(page,'[data-about-topic=documents]','documents');await assertQuote(page,'.ap-connect [data-request=quote]');
await page.locator('.ap-hero a[href="#cau-chuyen"]').click();await page.waitForURL('**/#cau-chuyen');await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/about/#cau-chuyen');await page.locator('[data-lang=zh]').click();await page.waitForURL('**/zh/about/#cau-chuyen');assert.equal(await page.locator('h1').textContent(),'关于 HotPrint');
await page.locator('#product-trigger').click();assert.ok(await page.locator('#product-menu').isVisible());await page.keyboard.press('Escape');assert.ok(await page.locator('#product-menu').isHidden());
for(const href of await page.locator('.ap-page a[href^="/"],.site-footer a[href^="/"]').evaluateAll(els=>[...new Set(els.map(e=>e.getAttribute('href')))]))assert.equal((await page.request.get(origin+href)).status(),200,href);
await page.setViewportSize({width:390,height:844});await page.goto(origin+'/');await page.locator('#mobile-trigger').click();await page.locator('#mobile-menu [data-about]').click();await page.waitForURL('**/ve-chung-toi/');assert.equal(await page.locator('h1').textContent(),'Về chúng tôi');
await page.locator('#ap-dots button').nth(4).click();await page.setViewportSize({width:1440,height:1000});assert.equal(await page.locator('.ap-card:visible').count(),3);assert.equal(await page.locator('#ap-dots button').last().getAttribute('aria-pressed'),'true');
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/about-v2-report.json',JSON.stringify({origin,passed:true,checks,errors,failed,carousel:true,requests:true,realCompanyPhotos:true,originalLogo:true},null,2));await browser.close();console.log('About passed: 18 responsive views, real photographs, six sample families, carousel, history disclosure, languages, request links and navigation.');
