import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import {spawn} from 'node:child_process';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const {chromium}=createRequire(import.meta.url)('playwright');
// Captured before the presentation-only redesign on 25 October 2026.
// Update these only when the owner explicitly authorizes a content change.
const fingerprints={
 vi:'4f39a19ae7c2c157529a15cb6ea19ff910ea67cd8f48f7123169291134124880',
 en:'4872186a9cec257553f450ec501beaa1e282129cb626f85aba09c398162a502c',
 zh:'339a5cb04eed275c1b7765d979fc01595532845aa0a845f6939fd454b1717c7c'
};
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4230';
const server=process.env.QA_ORIGIN?null:spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:'4230'},stdio:['ignore','pipe','pipe']});
if(server)await new Promise((resolve,reject)=>{server.stdout.once('data',resolve);server.once('error',reject)});
let browser;
try{
 await mkdir('qa',{recursive:true});
 browser=await chromium.launch({channel:'chrome',headless:true});
 const page=await browser.newPage({reducedMotion:'reduce'}),issues=[],checks=[];
 page.on('pageerror',e=>issues.push(e.message));page.on('response',r=>{if(r.status()>=400)issues.push(r.status()+' '+r.url())});
 for(const [lang,route] of [['vi','/nha-may/'],['en','/en/factory/'],['zh','/zh/factory/']])for(const width of [1920,1440,1024,768,390,320]){
  await page.setViewportSize({width,height:1000});await page.goto(origin+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
  const data=await page.evaluate(()=>({
   text:document.querySelector('main').textContent.replace(/\s+/g,' ').trim(),
   images:[...document.querySelectorAll('main img')].map(e=>({src:e.getAttribute('src'),srcset:e.getAttribute('srcset'),alt:e.alt})),
   links:[...document.querySelectorAll('main a,main button')].map(e=>({text:e.textContent.trim(),href:e.getAttribute('href'),request:e.dataset.request,photo:e.dataset.journalPhoto,tab:e.id}))
  }));
  assert.equal(createHash('sha256').update(JSON.stringify(data)).digest('hex'),fingerprints[lang],`${lang}: original text, image or action changed`);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${lang} ${width}: overflow`);
  await page.locator('main img').evaluateAll(async es=>{await Promise.all(es.map(e=>{e.loading='eager';return e.decode()}))});
  for(const [selector,count] of [['main>section',8],['.fp-sla-table tbody tr',8],['.fp-steps>li',6],['.fp-gallery-item',8],['[data-journal-photo]',4]])assert.equal(await page.locator(selector).count(),count);
  const geometry=await page.evaluate(()=>({header:document.querySelector('.site-header').getBoundingClientRect().height,cta:[...document.querySelectorAll('.fp-final .fp-button')].map(e=>e.getBoundingClientRect().height),h1:getComputedStyle(document.querySelector('h1')).fontFamily}));
  assert.equal(geometry.header,width<=650?72:88);assert.equal(geometry.cta[0],geometry.cta[1]);assert.ok(geometry.cta[0]>=54);assert.match(geometry.h1,/HotPrint Sans/);
  if(lang==='vi'&&(width===1440||width===390))await page.screenshot({path:`qa/factory-editorial-${width}-hero.png`});
  checks.push({lang,width,contentPreserved:true,imagesLoaded:true,...geometry});console.log(lang,width,'passed');
 }
 await page.setViewportSize({width:844,height:390});await page.goto(origin+'/nha-may/',{waitUntil:'networkidle'});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),844);
 await page.setViewportSize({width:390,height:844});await page.goto(origin+'/nha-may/',{waitUntil:'networkidle'});
 await page.evaluate(()=>{
  const elements=[...document.querySelectorAll('main :is(h1,h2,h3,h4,p,button,td,th,figcaption,address,small),main a')];
  const sizes=elements.map(e=>parseFloat(getComputedStyle(e).fontSize)*2);
  elements.forEach((e,i)=>e.style.setProperty('font-size',sizes[i]+'px','important'));
 });
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),390,'200% text overflow');
 const clipped=await page.evaluate(()=>[...document.querySelectorAll('main :is(h1,h2,h3,h4,p,button,td,th,figcaption,address,small),main a')].filter(e=>e.checkVisibility()&&e.clientWidth&&e.scrollWidth>e.clientWidth+3&&getComputedStyle(e).display!=='inline').map(e=>e.className||e.tagName));
 assert.deepEqual(clipped,[],'Text must remain fully available at 200% size');
 assert.deepEqual(issues,[]);
 await writeFile('qa/factory-editorial-report.json',JSON.stringify({origin,passed:true,checks,landscape:true,doubleText:true,issues},null,2));
}finally{await browser?.close();server?.kill()}
