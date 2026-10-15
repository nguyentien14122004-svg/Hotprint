import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {articles} from './knowledge-content.mjs';
const require=createRequire(import.meta.url),{chromium}=require('playwright'),origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';
await mkdir('qa',{recursive:true});const browser=await chromium.launch({headless:true,channel:'chrome'});
const context=await browser.newContext({reducedMotion:'reduce',permissions:['clipboard-read','clipboard-write']}),page=await context.newPage(),errors=[],failed=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
const ready=()=>page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('main img')].map(im=>{im.loading='eager';return im.decode()}));});
try{
for(const [lang,hub,slugIndex]of [['vi','/kien-thuc/',0],['en','/en/packaging-insights/',1],['zh','/zh/packaging-insights/',1]]){
 for(const width of [1440,1024,768,390,320]){
  await page.setViewportSize({width,height:1000});await page.goto(origin+hub);await ready();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width);
  assert.equal(await page.locator('.kp-library .kd-tags').count(),6);assert.equal(await page.locator('.kp-library .kd-cover-icon').count(),6);
  assert.match(await page.locator('.ke-feature-image img').getAttribute('src'),/knowledge-photos-v3/);
  if(lang==='vi'&&[1440,390].includes(width))await page.screenshot({path:`qa/knowledge-v3-hub-${width}.png`,fullPage:true});
 }
 for(const a of articles){
  await page.goto(origin+hub+a.slug[slugIndex]+'/');await ready();assert.equal(await page.locator('.kd-checks input').count(),3);assert.equal(await page.locator('.kd-intro-nav a').count(),3);
  assert.ok((await page.request.get(await page.locator('.kd-original').getAttribute('href')?origin+await page.locator('.kd-original').getAttribute('href'):origin)).ok());
  for(const width of [1440,390,320]){await page.setViewportSize({width,height:1000});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${a.id} overflow`);}
 }
 await page.goto(origin+hub+articles[0].slug[slugIndex]+'/');await page.setViewportSize({width:1440,height:1000});await ready();
 await page.locator('[data-copy-checklist]').click();assert.ok((await page.locator('.kd-copy-status').innerText()).length>0);
 await page.locator('.kd-checks input').first().focus();await page.keyboard.press('Space');await page.locator('.kd-checks input').nth(2).check();assert.match(await page.locator('.kd-check-count').innerText(),/2 \/ 3/);
 await page.locator('[data-copy-checklist]').click();const clipboard=await page.evaluate(()=>navigator.clipboard.readText());assert.ok(clipboard.includes(await page.locator('.kd-checks label span').first().innerText()));assert.ok(!clipboard.includes(await page.locator('.kd-checks label span').nth(1).innerText()));
 await page.locator('.kd-intro-nav a').last().click();assert.equal(new URL(page.url()).hash,'#muc-3');await page.waitForTimeout(150);assert.equal(await page.locator('.ka-toc a[aria-current=location]').getAttribute('href'),'#muc-3');
 if(lang==='vi'){await page.screenshot({path:'qa/knowledge-v3-article-desktop.png',fullPage:true});await page.locator('.kd-checklist').screenshot({path:'qa/knowledge-v3-checklist.png'});await page.setViewportSize({width:390,height:1000});await page.screenshot({path:'qa/knowledge-v3-article-mobile.png',fullPage:true});}
}
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/knowledge-details-report.json',JSON.stringify({origin,hubViews:15,articles:18,articleViews:54,checklists:3,clipboard:true,originalPhotoLinks:true,toc:true,errors,failed},null,2));console.log('PASS: 15 hub views, 54 article views, original photo links, keyboard checklist, clipboard and active contents in VI/EN/ZH.');
}finally{await browser.close();}
