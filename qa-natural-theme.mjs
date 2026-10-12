import {assertQuote,assertSample} from './qa-quote-link.mjs';
import{createRequire}from'node:module';import{writeFile}from'node:fs/promises';import assert from'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const browser=await chromium.launch({headless:true,channel:'chrome'}),page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
const origin='http://127.0.0.1:4174',routes=[['/','/en/'],['/san-pham/','/en/products/'],['/danh-muc/hop-giay-mem/','/en/folding-cartons/'],['/danh-muc/hop-carton-in-mau/','/en/printed-corrugated-boxes/'],['/danh-muc/hop-cung-cao-cap/','/en/premium-rigid-boxes/'],['/danh-muc/tui-giay/','/en/paper-bags/'],['/danh-muc/nhan-dan-decal/','/en/adhesive-labels/'],['/danh-muc/nhan-hang-catalog/','/en/hang-tags-catalogues/'],['/nha-may/','/en/factory/']];
for(const [group,pair]of routes.entries())for(const [lang,route]of pair.entries())for(const width of [1440,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto(origin+route,{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('main img')].map(im=>{im.loading='eager';return im.decode()}))});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,route+' overflow '+width);
 assert.equal(await page.locator('head>link[href="/natural-theme.css"]').count(),1);
 const palette=await page.evaluate(()=>{const css=getComputedStyle(document.documentElement);return ['green','beige','earth'].map(n=>css.getPropertyValue('--tone-'+n).trim())});assert.deepEqual(palette,['#5e7d5a','#e7dfd1','#8a6a55']);
 assert.equal(await page.locator('html').getAttribute('lang'),lang?'en':'vi');assert.equal(await page.locator('h1').count(),1);
 await assertQuote(page,'.site-header [data-request=quote]');
 const buttonColour=await page.locator('#request-form button[type=submit]').evaluate(el=>getComputedStyle(el).backgroundColor);assert.equal(buttonColour,'rgb(138, 106, 85)');
 checks.push({route,width});
 if(!lang&&width===1440)await page.screenshot({path:`qa/natural-page-${group}-desktop.png`,fullPage:true});
 if(!lang&&width===390)await page.screenshot({path:`qa/natural-page-${group}-mobile.png`,fullPage:true});
}
await page.goto(origin+'/');assert.equal(await page.locator('.category-link').count(),6);assert.equal(await page.locator('.brand img').first().getAttribute('src'),'/assets/logo-original.png');assert.equal(await page.locator('.brand img').first().evaluate(el=>getComputedStyle(el).filter),'url("#brand-natural-color")');
await assertSample(page,'.sample-note');
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/natural-theme-report.json',JSON.stringify({checks,errors,failed,palette:'Natural Green #5E7D5A, Warm Beige #E7DFD1, Earthy Brown #8A6A55',passed:true},null,2));console.log(JSON.stringify({viewports:checks.length,errors,failed,passed:true}));await browser.close();
