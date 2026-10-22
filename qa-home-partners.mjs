import {createRequire} from 'node:module';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require('playwright');
const registry=JSON.parse(await readFile('home-partners-data.json','utf8'));
const expected=registry.records.filter(r=>r.status==='verified'&&r.kind==='logo').length;
const browser=await chromium.launch({headless:true,channel:'chrome'});
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4174',errors=[],views=[];
await mkdir('qa/partners',{recursive:true});
const watch=p=>p.on('pageerror',e=>errors.push(e.message));
const settle=async p=>{
 await p.locator('#doi-tac').scrollIntoViewIfNeeded();await p.mouse.move(1,1);
 await p.evaluate(()=>{document.querySelectorAll('#doi-tac img').forEach(i=>i.loading='eager');return document.fonts.ready});
 await p.waitForFunction(()=>[...document.querySelectorAll('#doi-tac img')].every(i=>i.complete&&i.naturalWidth>0));
};
const state=p=>p.evaluate(()=>{
 const s=document.querySelector('#doi-tac'),t=s.querySelector('.partners-track'),g=t.querySelector('.partners-group:not([aria-hidden])');
 return {index:Number(s.dataset.index),moving:s.dataset.stepping==='true',x:new DOMMatrixReadOnly(getComputedStyle(t).transform).m41,pitch:g.children[1].offsetLeft-g.children[0].offsetLeft};
});
const finished=p=>p.waitForFunction(()=>document.querySelector('#doi-tac').dataset.stepping==='false');
try{
 const page=await browser.newPage({reducedMotion:'no-preference'});watch(page);
 for(const width of [1440,768,390,320]){
  await page.setViewportSize({width,height:1000});
  for(const [route,lang,title]of[['/','vi','Khách hàng & đối tác'],['/en/','en','Clients & partners'],['/zh/','zh','客户与合作伙伴']]){
   await page.goto(base+route);await settle(page);
   const view=await page.evaluate(()=>{
    const s=document.querySelector('#doi-tac'),groups=[...s.querySelectorAll('.partners-group')],g=s.querySelector('.partners-group:not([aria-hidden])'),r=[...g.children].map(e=>e.getBoundingClientRect());
    return {count:g.children.length,oneRow:r.every(x=>Math.abs(x.top-r[0].top)<1),sameWidth:groups.every(x=>Math.abs(x.clientWidth-g.clientWidth)<1),title:s.querySelector('h2').innerText,overflow:document.documentElement.scrollWidth>innerWidth+1,order:!!(document.querySelector('#nha-may').compareDocumentPosition(s)&4)&&!!(s.compareDocumentPosition(document.querySelector('#lien-he'))&4),duplicates:document.querySelectorAll('#doi-tac').length,onlyLogos:[...s.querySelectorAll('img')].every(i=>i.getAttribute('src').startsWith('/assets/partners/')&&!/source-|products/.test(i.src)&&getComputedStyle(i).objectFit==='contain'),toggle:s.querySelector('.partners-toggle')!==null};
   });
   assert.equal(view.count,expected);assert.ok(view.oneRow&&view.sameWidth&&view.onlyLogos&&view.order);assert.equal(view.title,title);assert.equal(view.overflow,false);assert.equal(view.duplicates,1);assert.equal(view.toggle,false);
   assert.deepEqual(await page.locator('.partners-group:not([aria-hidden]) li').evaluateAll(items=>items.slice(0,6).map(i=>i.dataset.partner)),['orion','kinhdo','thienlong','bitis','levis','gap']);
   views.push({width,lang,...view});
   if(lang==='vi'&&[1440,390].includes(width))await page.locator('#doi-tac').screenshot({path:`qa/partners/v6-section-${width}.png`});
  }
 }
 await page.setViewportSize({width:1440,height:1000});await page.goto(base+'/');await settle(page);
 // Actual dwell, automatic single-slot motion, and a settled dwell after it.
 let before=await state(page);await page.waitForTimeout(400);assert.equal((await state(page)).x,before.x);
 await page.waitForFunction(()=>document.querySelector('#doi-tac').dataset.stepping==='true');
 await page.waitForTimeout(100);const midway=await state(page);assert.ok(midway.x<before.x&&midway.x>before.x-before.pitch,'Visible intermediate position during auto slide');
 await finished(page);const after=await state(page);assert.equal(after.index,(before.index+1)%expected);assert.ok(Math.abs(before.x-after.x-before.pitch)<1);
 await page.waitForTimeout(400);assert.equal((await state(page)).x,after.x,'Pause between slides');
 await page.locator('.partners-ribbons').hover();await page.waitForTimeout(2800);assert.equal((await state(page)).index,after.index,'Hover pauses like reference');
 const checkStep=async(direction,action)=>{
  const a=await state(page);await action();await finished(page);const b=await state(page);
  assert.equal(b.index,(a.index+direction+expected)%expected);
  const shifted=((a.x-b.x)*direction%(a.pitch*expected)+a.pitch*expected)%(a.pitch*expected);
  assert.ok(Math.abs(shifted-a.pitch)<1,'One click replaces only one logo');
 };
 await checkStep(1,()=>page.locator('[data-partner-step="1"]').click());
 await checkStep(-1,()=>page.locator('[data-partner-step="-1"]').click());
 before=await state(page);await page.locator('[data-partner-step="1"]').click({clickCount:3,delay:30});await finished(page);assert.equal((await state(page)).index,(before.index+3)%expected);
 await page.locator('.partners-ribbons').focus();await checkStep(-1,()=>page.keyboard.press('ArrowLeft'));
 // Reach both real boundaries through controls, inspecting all visible artwork.
 await page.evaluate(()=>{const p=document.querySelector('[data-partner-step="-1"]');for(let i=0,n=Number(document.querySelector('#doi-tac').dataset.index);i<n;i++)p.click()});await finished(page);
 const visible=()=>page.evaluate(()=>{
  const r=document.querySelector('.partners-ribbons').getBoundingClientRect();
  return [...document.querySelectorAll('.partners-logo')].map(e=>({id:e.dataset.partner,x:e.getBoundingClientRect().left,w:e.getBoundingClientRect().width})).filter(e=>e.x>=r.left-1&&e.x+e.w<=r.right+1);
 });
 const initial=await visible();assert.equal(initial[0].id,'orion');
 await checkStep(-1,()=>page.keyboard.press('ArrowLeft'));assert.equal((await visible())[0].id,'shb');
 await checkStep(1,()=>page.keyboard.press('ArrowRight'));assert.deepEqual(await visible(),initial);
 for(const [lang,title]of[['en','Clients & partners'],['zh','客户与合作伙伴'],['vi','Khách hàng & đối tác']]){await page.locator(`#site-header [data-lang="${lang}"]`).first().click();assert.equal(await page.locator('#partners-title').innerText(),title)}
 await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(100);before=await state(page);await page.waitForTimeout(2800);assert.equal((await state(page)).index,before.index,'Offscreen stops autoplay');
 const touch=await browser.newPage({viewport:{width:390,height:844},hasTouch:true,isMobile:true,reducedMotion:'reduce'});watch(touch);await touch.goto(base+'/');await settle(touch);
 before=await state(touch);await touch.waitForFunction(()=>document.querySelector('#doi-tac').dataset.index!=='0');assert.equal((await state(touch)).index,1,'Autoplay also works in user preview reduced-motion mode');
 await touch.locator('.partners-ribbons').dispatchEvent('pointerdown',{pointerType:'touch',clientX:280});await touch.locator('.partners-ribbons').dispatchEvent('pointerup',{pointerType:'touch',clientX:100});await finished(touch);assert.equal((await state(touch)).index,2,'Swipe changes one logo');await touch.close();
 const plain=await browser.newPage({viewport:{width:320,height:900},javaScriptEnabled:false});watch(plain);await plain.goto(base+'/');
 const fallback=await plain.evaluate(()=>{const r=document.querySelector('.partners-ribbons');r.scrollLeft=400;return {scroll:r.scrollLeft,clones:[...document.querySelectorAll('.partners-group[aria-hidden]')].every(g=>getComputedStyle(g).display==='none'),overflow:document.documentElement.scrollWidth>innerWidth+1}});
 assert.ok(fallback.scroll>0&&fallback.clones&&!fallback.overflow);await plain.close();
 assert.deepEqual(errors,[]);
 await writeFile('qa/partners/report.json',JSON.stringify({passed:true,brands:expected,views,errors,behaviors:['no play/pause button','2500ms cadence with dwell','animated one-slot autoplay','one-slot arrows and keyboard','queued rapid clicks','both loop boundaries','hover pause','offscreen pause','touch swipe','reduced-motion preview autoplay','translations','no-JS scroll']},null,2));
 console.log(JSON.stringify({passed:true,views:views.length,brands:expected,errors}));
}finally{await browser.close()}
