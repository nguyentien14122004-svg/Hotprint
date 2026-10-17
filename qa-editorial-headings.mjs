import {createRequire} from 'node:module';import {readFile,writeFile,mkdir} from 'node:fs/promises';import {spawn} from 'node:child_process';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const server=spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:'4188'},stdio:'pipe'});await new Promise(r=>server.stdout.once('data',r));
const browser=await chromium.launch({headless:true,channel:'chrome'});const page=await browser.newPage({reducedMotion:'reduce'}),errors=[],results=[];page.on('pageerror',e=>errors.push(e.message));
const routes=JSON.parse(await readFile('dist/language-routes.json','utf8'));
const samples=new Set(['/','/lien-he/','/danh-muc/hop-giay-mem/','/danh-muc/tui-giay/','/danh-muc/nhan-hang-catalog/','/ve-chung-toi/','/san-pham/','/nha-may/','/yeu-cau-bao-gia/','/kien-thuc/']);
await mkdir('qa/headings',{recursive:true});
try{
for(const entry of routes)for(const lang of ['vi','en','zh'])for(const width of [1440,1024,390,320]){
const path=entry[lang];await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:4188'+path,{waitUntil:'domcontentloaded'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(60);
const result=await page.evaluate(()=>{
 const headings=[...document.querySelectorAll('main h1,main h2,main h3')].filter(e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden');
 const issues=[];for(const h of headings){const r=document.createRange();r.selectNodeContents(h);const rect=r.getBoundingClientRect(),style=getComputedStyle(h);if((rect.left< -2||rect.right>innerWidth+2)&&!h.closest('[class*=carousel],[class*=slider],[hidden]'))issues.push({text:h.textContent.trim().slice(0,75),left:Math.round(rect.left),right:Math.round(rect.right)});if(!/HotPrint Sans/.test(style.fontFamily))issues.push({font:style.fontFamily,text:h.textContent.slice(0,30)});}
 const lightPanels=[...document.querySelectorAll('.factory-content h2,.fold-showcase-copy h2,.rigid-cta h2,.ap-connect-panel h2,.qr-connect h2,.kp-connect h2,.fp-process h2,.fp-final h2,.cp-channel-phone h3')];
for(const h of lightPanels)if(h.getClientRects().length&&!getComputedStyle(h).color.startsWith('rgb(255,'))issues.push({contrast:h.textContent.slice(0,40),color:getComputedStyle(h).color});
for(const h of headings){const section=h.closest('main>section');if(section&&h.getBoundingClientRect().bottom>section.getBoundingClientRect().bottom+5)issues.push({outsideSection:h.textContent.slice(0,40)});}
return {overflow:document.documentElement.scrollWidth>innerWidth,headings:headings.length,issues,h1:getComputedStyle(document.querySelector('h1')).fontFamily};
});results.push({path,lang,width,...result});
if(lang==='vi'&&samples.has(path)&&[1440,390].includes(width)){await page.evaluate(async()=>{await Promise.all([...document.querySelectorAll('main img')].map(i=>{i.loading='eager';return i.decode().catch(()=>{})}))});await page.screenshot({path:'qa/headings/'+(path==='/'?'home':path.replaceAll('/',''))+'-'+width+'.png',fullPage:true});}
}
await writeFile('qa/headings/report.json',JSON.stringify({results,errors},null,2));console.log(JSON.stringify({views:results.length,errors,issues:results.filter(r=>r.overflow||r.issues.length)},null,2));
if(errors.length||results.some(r=>r.overflow||r.issues.length))process.exitCode=1;
}finally{await browser.close();server.kill();}
