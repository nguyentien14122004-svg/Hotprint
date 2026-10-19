import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
import {writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const {chromium}=createRequire(import.meta.url)('playwright');
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4196';
const server=process.env.QA_ORIGIN?null:spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:'4196'},stdio:['ignore','pipe','pipe']});
if(server)await new Promise(r=>server.stdout.once('data',r));let browser;
try{
 browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage({reducedMotion:'reduce'}),issues=[],checks=[];
 page.on('pageerror',e=>issues.push(e.message));page.on('response',r=>{if(r.status()>=400)issues.push(r.status()+' '+r.url())});
 for(const [lang,route]of [['vi','/nha-may/'],['en','/en/factory/'],['zh','/zh/factory/']])for(const width of [1440,1024,768,390,320]){
  await page.setViewportSize({width,height:1000});await page.goto(origin+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('[data-journal-photo]').count(),4);assert.equal(await page.locator('main>section').count(),8);assert.equal(await page.locator('.fp-gallery-item').count(),8);assert.equal(await page.locator('.fp-sla-table tbody tr').count(),8);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,lang+width+' horizontal overflow');
  await page.locator('.fj-photo img').evaluateAll(async es=>{await Promise.all(es.map(e=>{e.loading='eager';return e.decode()}))});
  const heading=await page.locator('#fj-title').innerText();if(lang==='zh'){assert.ok(heading.includes('技术操作'));assert.doesNotMatch(await page.locator('#cong-doan-thuc-te').innerText(),/View larger|View original|PRODUCTION|Preparing|Working with|Die-cutting|Inspecting/i);assert.ok((await page.locator('[data-journal-photo]').first().getAttribute('aria-label')).includes('查看大图'))}
  for(const id of ['prepress','automation','diecut','inspection']){
   const button=page.locator(`[data-journal-photo=${id}]`);await button.click();assert.ok(await page.locator('#factory-journal-dialog').isVisible());
   await page.locator('#fj-dialog-image').evaluate(e=>e.decode());assert.ok((await page.locator('#fj-dialog-image').getAttribute('src')).endsWith(id+'.webp'));assert.ok((await page.locator('#fj-dialog-original').getAttribute('href')).endsWith(id+'-original.webp'));
   if(id==='prepress'&&width===390)await page.locator('#factory-journal-dialog').screenshot({path:`qa/factory-journal-${lang}-modal.png`});
   await page.keyboard.press('Escape');assert.ok(await page.locator('#factory-journal-dialog').isHidden());assert.ok(await button.evaluate(e=>e===document.activeElement));
  }
  if(width===1440||width===390)await page.locator('#cong-doan-thuc-te').screenshot({path:`qa/factory-journal-${lang}-${width}.png`,style:'.site-header,.mobile-contact-bar,.skip-link{visibility:hidden!important}'});
  checks.push({lang,width});console.log(lang,width,'passed');
 }
 for(const id of ['prepress','automation','diecut','inspection']){const r=await page.request.get(origin+'/assets/factory-journal/'+id+'-original.webp');assert.ok(r.ok());assert.ok((await r.body()).length>10000)}
 assert.deepEqual(issues,[]);await writeFile('qa/factory-journal-report.json',JSON.stringify({origin,passed:true,checks,issues,photoDialogs:60,originalPhotos:4},null,2));
}finally{await browser?.close();server?.kill()}
