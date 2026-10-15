import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({reducedMotion:'reduce'}),errors=[],results=[];
page.on('pageerror',e=>errors.push(e.message));
await mkdir('qa',{recursive:true});
try{
for(const width of [1672,1440,1100,1024,768,390,320])for(const route of ['/san-pham/','/en/products/','/zh/products/']){
 await page.setViewportSize({width,height:941});
 assert.equal((await page.goto(origin+route)).status(),200);
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('.botanical-hero img')].map(im=>im.decode()));});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`Overflow ${route} ${width}`);
 const boxes=await page.locator('.botanical-copy h1,.botanical-lead,.botanical-actions,.botanical-benefits').evaluateAll(es=>es.map(e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,right:r.right,bottom:r.bottom}}));
 for(const b of boxes)assert.ok(b.x>=0&&b.right<=width+1,`Copy bounds ${route} ${width}`);
 for(let i=1;i<boxes.length;i++)assert.ok(boxes[i].y>=boxes[i-1].bottom-2,`Overlapping copy ${route} ${width}: ${JSON.stringify(boxes)}`);
 if([1672,390].includes(width))await page.screenshot({path:`qa/hero-v3-${route.split('/').filter(Boolean).join('-')}-${width}.png`});
 results.push({route,width});
}
for(const width of [1672,390])for(const route of ['/san-pham/','/en/products/','/zh/products/']){
 await page.setViewportSize({width,height:941});await page.goto(origin+route);
 await page.locator('.botanical-primary').click();assert.equal(new URL(page.url()).hash,'#nhom-san-pham');
 await page.goto(origin+route);await page.locator('.botanical-quote').click();assert.match(new URL(page.url()).pathname,/yeu-cau-bao-gia|request-a-quote/);
 await page.goto(origin+route);await page.locator('.botanical-inspect').click();assert.ok(await page.locator('#product-detail').isVisible());assert.match(await page.locator('#detail-image').getAttribute('src'),/032A5293/);await page.keyboard.press('Escape');assert.ok(!(await page.locator('#product-detail').isVisible()));
}
assert.deepEqual(errors,[]);await writeFile('qa/hero-v3-report.json',JSON.stringify({origin,results,actions:6,errors},null,2));console.log('PASS: 21 viewport/language combinations; 6 explore, quote and original-photo flows.');
}finally{await browser.close();}
