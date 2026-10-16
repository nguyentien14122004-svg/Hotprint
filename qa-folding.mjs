import {assertQuote,assertSample} from './qa-quote-link.mjs';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';
for(const lang of ['vi','en','zh'])for(const width of [1672,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1050});
 await page.goto(origin+(lang==='vi'?'/danh-muc/hop-giay-mem/':`/${lang}/folding-cartons/`),{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('.fold-page img')].map(im=>{im.loading='eager';return im.decode();}));});
 assert.equal(await page.locator('main>section').count(),7);assert.equal(await page.locator('.fold-sample').count(),13);assert.equal(await page.locator('h1').count(),1);
 assert.equal(await page.locator('[data-fold-detail="032A5316"]').count(),0,'Maison Marou belongs to rigid boxes');
 const cropped=await page.locator('.fold-object:visible').evaluateAll(images=>images.flatMap(im=>{
  const frame=im.closest('.fold-hero-visual,.fold-sample-photo,.fold-structure-photo,.fold-showcase-photo').getBoundingClientRect();
  const box=im.getBoundingClientRect(),points=[...getComputedStyle(im).clipPath.matchAll(/([\d.]+)% ([\d.]+)%/g)].map(m=>[box.left+Number(m[1])*box.width/100,box.top+Number(m[2])*box.height/100]);
  return points.some(([x,y])=>x<frame.left-2||x>frame.right+2||y<frame.top-2||y>frame.bottom+2)?[im.src]:[];
 }));
 assert.deepEqual(cropped,[],`${lang} ${width}: product outline must stay inside its photo frame`);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width} overflow`);
 checks.push({lang,width});
 if(width===1440)await page.screenshot({path:`qa/folding-${lang}-desktop.png`,fullPage:true});
 if(width===390)await page.screenshot({path:`qa/folding-${lang}-mobile.png`,fullPage:true});
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/danh-muc/hop-giay-mem/');
for(const [use,count] of [['food',4],['fragrance',3],['consumer',3],['health',3],['all',13]]){await page.locator(`[data-fold-filter=${use}]`).click();assert.equal(await page.locator('.fold-sample:visible').count(),count);}
await page.locator('[data-fold-filter=fragrance]').click();await page.reload();assert.equal(await page.locator('.fold-sample:visible').count(),3);
await page.locator('[data-lang=en]').click();await page.waitForURL('**/en/folding-cartons/**');assert.equal(await page.locator('.fold-sample:visible').count(),3);assert.match(await page.title(),/Folding cartons/);
await page.locator('[data-lang=vi]').click();await page.waitForURL('**/danh-muc/hop-giay-mem/**');
await page.locator('.fold-sample:visible [data-fold-detail="032A5268"]').first().click();assert.ok(await page.locator('#fold-detail').isVisible());assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5268/);
await page.locator('#fold-photo-next').click();assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/032A5298/);
await assertQuote(page,'#fold-detail-quote','hop-giay-mem','032A5268');
await page.setViewportSize({width:390,height:900});
await assertQuote(page,'.fold-hero [data-request=quote]','hop-giay-mem');
await page.setViewportSize({width:1440,height:1000});
await page.locator('.fold-faq summary').first().focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.fold-faq details[open]').count(),1);
const next=page.locator('[data-showcase-step="1"]');await next.click();assert.equal(await page.locator('[data-showcase-slide]:visible').getAttribute('data-showcase-slide'),'032A5315');assert.equal(await page.locator('[data-showcase-quote]').getAttribute('data-model'),'032A5315');
await next.focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('[data-showcase-slide]:visible').getAttribute('data-showcase-slide'),'032A5268');
await assertQuote(page,'[data-showcase-quote]','hop-giay-mem','032A5268');
await assertSample(page,'[data-showcase-sample]','hop-giay-mem','HP6388');
await page.locator('.fold-showcase [data-fold-detail=HP6388]').click();assert.match(await page.locator('#fold-detail-image').getAttribute('src'),/HP6388-large.webp/);await page.keyboard.press('Escape');
await assertQuote(page,'[data-showcase-quote]','hop-giay-mem','HP6388');
await page.goto(origin+'/san-pham/');await page.locator('.family-card').first().click();await page.waitForURL('**/danh-muc/hop-giay-mem/');assert.ok(await page.locator('.fold-hero').isVisible());
await page.goto(origin+'/');await page.locator('#category-links a').first().click();await page.waitForURL('**/danh-muc/hop-giay-mem/');
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
await writeFile('qa/folding-report.json',JSON.stringify({checks,errors,failed,filters:true,gallery:true,prefill:true,faqKeyboard:true,navigation:true},null,2));
console.log('Folding page: 18 responsive views, uncropped real products, 13 classified samples, VI/EN/ZH, filters, original-photo dialog, keyboard carousel and quote context passed.');await browser.close();
