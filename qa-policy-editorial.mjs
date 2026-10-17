import {createRequire} from 'node:module';
import {spawn} from 'node:child_process';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const server=spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:'4196'},stdio:'pipe'});
await new Promise(r=>server.stdout.once('data',r));
const browser=await chromium.launch({headless:true,channel:'chrome'}),page=await browser.newPage({reducedMotion:'reduce'});
const errors=[],checks=[],routes=['/chinh-sach-rieng-tu/','/en/privacy/','/zh/privacy/','/dieu-kien-gui-yeu-cau/','/en/request-terms/','/zh/request-terms/'];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url())});
await mkdir('qa/policy',{recursive:true});
try{
 for(const path of routes)for(const [width,height] of [[1920,1080],[1440,1000],[1024,900],[768,1024],[390,844],[320,700],[812,375]]){
  await page.setViewportSize({width,height});await page.goto('http://127.0.0.1:4196'+path);await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('main section').count(),5);assert.equal(await page.locator('.pl-summary').count(),3);
  const state=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,img:document.querySelector('.pl-photo img').naturalWidth,font:getComputedStyle(document.querySelector('.pv-content p')).fontFamily,retired:document.body.innerText.match(/yêu cầu mẫu|nhận mẫu|request a sample|sample request|sample arrangements|样品申请|申请样品/gi),size:parseFloat(getComputedStyle(document.querySelector('.pv-content p')).fontSize)}));
  assert.equal(state.overflow,false,path+' '+width);assert.ok(state.img>0);assert.equal(state.retired,null);assert.ok(state.font.includes('HotPrint Ampersand'));assert.ok(state.size>=17);
  if(width===1440||width===390){const name=path.replaceAll('/','-')+width;await page.screenshot({path:'qa/policy/'+name+'.png',fullPage:true})}
  checks.push({path,width,height});
 }
 await page.setViewportSize({width:1440,height:1000});
 for(const path of routes){
  await page.goto('http://127.0.0.1:4196'+path);
  for(const link of await page.locator('.pv-toc a').all()){
   const hash=await link.getAttribute('href');await link.click();await page.waitForFunction(hash=>document.querySelector('.pv-toc a[aria-current=true]')?.getAttribute('href')===hash,hash);
   assert.ok(await page.locator(hash).evaluate(e=>e.getBoundingClientRect().top>=document.getElementById('site-header').getBoundingClientRect().bottom));
  }
  await page.locator('.pl-hero .pl-button').focus();await page.keyboard.press('Enter');assert.ok(new URL(page.url()).hash);
 }
 // At 200% browser zoom the available CSS viewport is halved; check readable reflow.
 await page.setViewportSize({width:720,height:450});await page.goto('http://127.0.0.1:4196/zh/request-terms/');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),720);
 assert.ok((await page.locator('h1').textContent()).includes('清晰的申请'));
 await page.goto('http://127.0.0.1:4196/dieu-kien-gui-yeu-cau/#mau-va-lich');await page.waitForURL('**/#lich-tu-van');
 assert.deepEqual(errors,[]);await writeFile('qa/policy/report.json',JSON.stringify({passed:true,checks,errors,contentsNavigation:true,legacyAnchor:true,keyboardNavigation:true},null,2));
 console.log(JSON.stringify({passed:true,views:checks.length,errors}));
}finally{await browser.close();server.kill()}
