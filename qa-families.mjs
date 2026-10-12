import {createRequire} from 'node:module';
import {writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';const checks=[];
for(const lang of ['vi','en'])for(const width of [1672,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1200});await page.goto(origin+(lang==='vi'?'/san-pham/':'/en/products/'),{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('.family-card img')].map(im=>{im.loading='eager';return im.decode();}));});
 const data=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,count:document.querySelectorAll('.family-card').length,totals:[...document.querySelectorAll('.family-total')].map(el=>parseInt(el.textContent,10)),overflow:[...document.querySelectorAll('.family-card')].filter(el=>el.scrollWidth>el.clientWidth+1).length}));
 assert.equal(data.width,data.scroll);assert.equal(data.count,6);assert.deepEqual(data.totals,[8,4,9,8,3,4]);assert.ok(await page.locator('.family-card').evaluateAll(els=>els.every(el=>{const r=el.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth+1})));checks.push({lang,...data});
 if(width===1672){await page.evaluate(()=>scrollTo(0,document.querySelector('#nhom-san-pham').offsetTop-110));await page.locator('#nhom-san-pham').screenshot({path:`qa/families-reference-${lang}.png`});}
 if(width===390){await page.evaluate(()=>scrollTo(0,document.querySelector('#nhom-san-pham').offsetTop-85));await page.screenshot({path:`qa/families-mobile-${lang}.png`});}
}
await page.setViewportSize({width:1440,height:1100});
const vi=['hop-giay-mem','hop-carton-in-mau','hop-cung-cao-cap','tui-giay','nhan-dan-decal','nhan-hang-catalog'];
const en=['folding-cartons','printed-corrugated-boxes','premium-rigid-boxes','paper-bags','adhesive-labels','hang-tags-catalogues'];
for(const lang of ['vi','en'])for(let i=0;i<6;i++){
 await page.goto(origin+(lang==='vi'?'/san-pham/':'/en/products/'));await page.locator('.family-card').nth(i).focus();await page.keyboard.press('Enter');
 const route=lang==='vi'?'/danh-muc/'+vi[i]+'/':'/en/'+en[i]+'/';await page.waitForURL(origin+route);assert.ok(await page.locator('.fold-hero').isVisible());
}
assert.deepEqual(errors,[]);await writeFile('qa/families-report.json',JSON.stringify({checks,errors,allSixLinks:true,keyboard:true,languageState:true},null,2));
console.log('Six family links, real counts, keyboard, language and 12 responsive combinations passed.');await browser.close();
