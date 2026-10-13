import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const origin=process.env.HOTPRINT_QA_ORIGIN||'http://127.0.0.1:4174';
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
await mkdir('qa',{recursive:true});
const routes=[['/','vi','/yeu-cau-bao-gia/','/dat-lich-tu-van/','/yeu-cau-mau/'],['/en/','en','/en/request-a-quote/','/en/request-a-consultation/','/en/request-a-sample/'],['/zh/','zh-Hans','/zh/request-a-quote/','/zh/request-a-consultation/','/zh/request-a-sample/']];
for(const [route,lang,quote,consult,sample] of routes){
 for(const width of [1968,1440,1024,768,390,320]){
  await page.setViewportSize({width,height:1000});await page.goto(origin+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
  const section=page.locator('#lien-he');await section.scrollIntoViewIfNeeded();await section.locator('.sample-photo img').evaluate(im=>im.decode());
  assert.equal(await page.locator('html').getAttribute('lang'),lang);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,route+' horizontal overflow '+width);
  assert.equal(await section.locator('.studio-route').count(),3);
  const bad=await section.evaluate(el=>[...el.querySelectorAll('h2, .studio-phone, .studio-route, .sample-note, .connection-intro')].filter(e=>e.scrollWidth>e.clientWidth+1).map(e=>e.className));assert.deepEqual(bad,[],route+' text overflow '+width);
  assert.equal(await section.locator('.studio-phone').getAttribute('href'),'tel:+84903032686');assert.equal(await section.locator('.studio-email').getAttribute('href'),'mailto:info@hotprint.vn');
  assert.equal(await section.locator('a.studio-route').getAttribute('href'),'https://zalo.me/0903032686');
  const asset=await section.locator('.direct-note').evaluate(el=>getComputedStyle(el).backgroundImage);assert.ok(asset.includes('contact-direct-reference.webp'));
  checks.push({route,width});
  if(route==='/'&&[1968,390].includes(width))await section.screenshot({path:`qa/contact-reference-${width}.png`,style:'.site-header,.mobile-contact-bar,.skip-link{display:none!important}'});
 }
 await page.setViewportSize({width:1440,height:1000});
 for(const [selector,dest] of [['.connection-intro [data-request=quote]',quote],['.studio-routes [data-request=quote]',quote],['.studio-routes [data-request=consult]',consult],['.sample-note',sample]]){
  await page.goto(origin+route);await page.locator('#lien-he '+selector).click();await page.waitForURL(u=>u.pathname===dest);assert.equal(new URL(page.url()).pathname,dest);
 }
}
await page.goto(origin+'/');await page.locator('[data-lang=zh]').first().click();assert.equal(await page.locator('#lien-he [data-i18n=detailedQuote]').innerText(),'获取详细报价');
await page.locator('[data-lang=en]').first().click();assert.equal(await page.locator('#lien-he [data-i18n=detailedQuote]').innerText(),'Get a detailed quote');
await page.locator('[data-lang=vi]').first().click();assert.equal(await page.locator('#lien-he [data-i18n=detailedQuote]').innerText(),'Nhận báo giá chi tiết');
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
await writeFile('qa/contact-reference-report.json',JSON.stringify({origin,checks,errors,failed,passed:true},null,2));console.log(JSON.stringify({passed:true,viewportChecks:checks.length,linkChecks:12,languages:3,errors,failed}));await browser.close();
