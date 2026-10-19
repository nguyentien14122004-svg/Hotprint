import {createRequire} from 'node:module';
import {spawn} from 'node:child_process';
import {readdir,readFile,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require('playwright'),routes=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const p=dir+'/'+e.name;if(e.isDirectory())await walk(p);else if(e.name==='index.html')routes.push(p.slice(4,-10))}}
await walk('dist');
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4196';
const server=process.env.QA_ORIGIN?null:spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:'4196'},stdio:['ignore','pipe','pipe']});
if(server)await new Promise(r=>server.stdout.once('data',r));
let browser;
try{
 browser=await chromium.launch({channel:'chrome',headless:true});
 const page=await browser.newPage({reducedMotion:'reduce'}),baseline={},checks=[],errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 for(const route of routes){
  await page.goto(origin+route,{waitUntil:'domcontentloaded'});
  await page.evaluate(()=>document.fonts.ready);
  const emails=await page.locator('a[href^="mailto:"]').evaluateAll(es=>es.map(e=>e.getAttribute('href').split('?')[0]));
  assert.ok(emails.length>0);assert.ok(emails.every(e=>e==='mailto:Info@HotPrint.vn'),route);
  assert.equal(await page.locator('.note-signature').count(),0,route);
  for(const width of [1920,1440,768,390,320]){
   await page.setViewportSize({width,height:1000});
   const state=await page.locator('.site-footer').evaluate(el=>{
    const size=e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return {width:Math.round(r.width*100)/100,height:Math.round(r.height*100)/100,font:s.fontSize,line:s.lineHeight,padding:s.padding}};
    return {lang:document.documentElement.lang,footer:size(el),inner:size(el.firstElementChild),logo:size(el.querySelector('.footer-brand')),title:size(el.querySelector('h3')),link:size(el.querySelector('.footer-company>a')),columns:getComputedStyle(el.querySelector('.footer-grid')).gridTemplateColumns,overflow:document.documentElement.scrollWidth>innerWidth};
   });
   assert.equal(state.overflow,false,route+' '+width);
   assert.equal(state.logo.width,width<=650?160:176,route);
   assert.equal(state.link.font,'14px',route);
   assert.equal(state.title.font,width<=650?'17px':'18px',route);
   const key=state.lang+width,signature={footer:state.footer,inner:state.inner,logo:state.logo,columns:state.columns};
   if(baseline[key])assert.deepEqual(signature,baseline[key],route+' footer sizing '+width);else baseline[key]=signature;
   if(['/','/danh-muc/hop-cung-cao-cap/'].includes(route)&&[1440,390].includes(width)){
    await page.locator('.site-footer').scrollIntoViewIfNeeded();
    await page.locator('.site-footer').screenshot({path:`qa/footer-${route==='/'?'home':'rigid'}-${width}.png`});
   }
   checks.push({route,width});
  }
  console.log(route+' footer/email passed');
 }
 await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/',{waitUntil:'networkidle'});
 await page.locator('.direct-note').screenshot({path:'qa/direct-note-email.png'});
 assert.deepEqual(errors,[]);
 await writeFile('qa/shared-footer-report.json',JSON.stringify({origin,pages:routes.length,views:checks.length,baseline,errors},null,2));
 console.log('PASS',routes.length,'pages;',checks.length,'responsive views; consistent footer dimensions and email.');
}finally{await browser?.close();server?.kill()}
