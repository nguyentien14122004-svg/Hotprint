import {createRequire} from 'node:module';
import {spawn} from 'node:child_process';
import {writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const {chromium}=createRequire(import.meta.url)('playwright');
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4199';
const server=process.env.QA_ORIGIN?null:spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:'4199'},stdio:['ignore','pipe','pipe']});
if(server)await new Promise(r=>server.stdout.once('data',r));let browser;
try{
browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage({reducedMotion:'reduce'}),errors=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));
for(const [lang,route]of [['vi','/nha-may/'],['en','/en/factory/'],['zh','/zh/factory/']])for(const width of [1920,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto(origin+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 assert.equal(await page.locator('main>section').count(),8);assert.equal(await page.locator('.fp-sla-table tbody tr').count(),8);assert.equal(await page.locator('.fp-index a').count(),6);assert.equal(await page.locator('.fp-gallery-item').count(),8);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,lang+width);
 const text=await page.locator('#cam-ket-sla').innerText();assert.ok(text.includes('98%'));assert.ok(text.includes('1%'));assert.ok(!text.includes('[98]'));
 if(lang==='zh'){assert.ok(text.includes('清晰承诺'));assert.ok(!text.includes('Clear commitments'));assert.ok(!text.includes('Shared standards'));}
 const buttons=await page.locator('.fp-final .fp-button').evaluateAll(es=>es.map(e=>{let r=e.getBoundingClientRect(),s=getComputedStyle(e);return {width:r.width,height:r.height,radius:s.borderRadius,padding:s.paddingLeft,decoration:s.textDecorationLine}}));
 assert.equal(buttons[0].height,buttons[1].height);assert.ok(buttons[1].height>=54);assert.equal(buttons[1].radius,'999px');assert.equal(buttons[1].decoration,'none');
 if(width===1440||width===390){const style='.site-header,.skip-link,.mobile-contact-bar{visibility:hidden!important}';await page.locator('#cam-ket-sla').screenshot({path:`qa/factory-sla-${lang}-${width}.png`,style});await page.locator('.fp-final').screenshot({path:`qa/factory-cta-${lang}-${width}.png`,style})}
 checks.push({lang,width,buttons});
 console.log(lang,width,'SLA/CTA passed');
}
for(const [route,quote,consult]of [['/nha-may/','/yeu-cau-bao-gia/','/dat-lich-tu-van/'],['/en/factory/','/en/request-a-quote/','/en/request-a-consultation/'],['/zh/factory/','/zh/request-a-quote/','/zh/request-a-consultation/']]){
 await page.goto(origin+route,{waitUntil:'networkidle'});await page.locator('.fp-index a[href="#cam-ket-sla"]').click();assert.ok(page.url().endsWith('#cam-ket-sla'));
 await page.locator('.fp-final [data-request=quote]').click();await page.waitForURL(u=>u.pathname===quote);assert.ok(await page.locator('#quote-form').isVisible());
 await page.goto(origin+route);await page.locator('.fp-final [data-request=consult]').click();await page.waitForURL(u=>u.pathname===consult);assert.ok(await page.locator('#quote-form').isVisible());
}
await page.goto(origin+'/nha-may/');await page.locator('#fp-tab-0').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('#fp-tab-1').getAttribute('aria-selected'),'true');await page.locator('[data-factory-photo]').first().click();assert.ok(await page.locator('#factory-gallery').isVisible());await page.keyboard.press('Escape');assert.ok(!await page.locator('#factory-gallery').isVisible());
assert.deepEqual(errors,[]);await writeFile('qa/factory-sla-report.json',JSON.stringify({origin,passed:true,checks,errors,navigation:true,originalGalleryAndTabs:true},null,2));
}finally{await browser?.close();server?.kill()}
