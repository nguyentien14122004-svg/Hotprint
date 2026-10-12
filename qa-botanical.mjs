import {createRequire} from 'node:module';
import {writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({reducedMotion:'reduce'}),errors=[];
page.on('pageerror',e=>errors.push(e.message));
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';
for(const width of [1440,1024,768,390,320])for(const route of ['/san-pham/','/en/products/']){
 await page.setViewportSize({width,height:1000});
 assert.equal((await page.goto(origin+route)).status(),200);
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('.botanical-hero img')].map(im=>im.decode()));});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width);
 assert.ok(await page.evaluate(()=>document.fonts.check('600 48px "Playfair Display"')));
 if(width===1440&&route==='/san-pham/')await page.screenshot({path:'qa/botanical-preview-desktop.png'});
 if(width===390&&route==='/san-pham/')await page.screenshot({path:'qa/botanical-preview-mobile.png'});
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/san-pham/');
await page.locator('.botanical-primary').click();assert.equal(new URL(page.url()).hash,'#nhom-san-pham');
await page.locator('.botanical-quote').click();assert.ok(await page.locator('#request-dialog').isVisible());await page.keyboard.press('Escape');
await page.locator('.botanical-inspect').click();assert.ok(await page.locator('#product-detail').isVisible());assert.match(await page.locator('#detail-image').getAttribute('src'),/032A5293/);await page.keyboard.press('Escape');
await page.locator('.site-header .brand').click();assert.equal(new URL(page.url()).pathname,'/');assert.ok(await page.locator('.hero').isVisible());
await page.goto(origin+'/en/');assert.ok(await page.locator('.hero').isVisible());
assert.deepEqual(errors,[]);
await writeFile('qa/botanical-report.json',JSON.stringify({errors,viewports:10,homeVI:true,homeEN:true,heroActions:true,originalProduct:true},null,2));
console.log('Botanical hero: 10 viewports, VI/EN, original photo, quote, explore and both home routes passed.');
await browser.close();
