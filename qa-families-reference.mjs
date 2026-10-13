import assert from 'node:assert/strict';import{createRequire}from'node:module';import{writeFile,mkdir}from'node:fs/promises';const require=createRequire(import.meta.url),{chromium}=require('playwright');
const origin=process.env.HOTPRINT_QA_ORIGIN||'http://127.0.0.1:4174';const browser=await chromium.launch({headless:true,channel:'chrome'}),page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});await mkdir('qa',{recursive:true});
const routes=['/san-pham/','/en/products/','/zh/products/'];
for(const route of routes){for(const width of [1672,1440,1024,768,390,320]){
await page.setViewportSize({width,height:1100});await page.goto(origin+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);const section=page.locator('#nhom-san-pham');await section.scrollIntoViewIfNeeded();await section.locator('img').evaluateAll(ims=>Promise.all(ims.map(im=>im.decode())));
assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,route+' horizontal overflow '+width);assert.equal(await section.locator('.family-card:visible').count(),6);assert.equal(await section.locator('[data-family-filter]').count(),6);
assert.deepEqual(await section.locator('.family-total').allTextContents(),route.startsWith('/zh/')?['8 个样品','4 个样品','9 个样品','8 个样品','3 个样品','4 个样品']:route.startsWith('/en/')?['8 samples','4 samples','9 samples','8 samples','3 samples','4 samples']:['8 mẫu','4 mẫu','9 mẫu','8 mẫu','3 mẫu','4 mẫu']);
assert.equal(await section.locator('.family-cast-shadow').count(),6);
const images=await section.locator('.family-card img').evaluateAll(ims=>ims.map(im=>im.getAttribute('src')));assert.deepEqual(images,['032A5315','032A5366','032A5293','032A5331','032A5339','032A5353'].map(id=>'/assets/products/'+id+'-large.webp'));
checks.push({route,width});
if(route==='/san-pham/'&&[1672,390].includes(width))await section.screenshot({path:`qa/families-reference-${width}.png`,style:'.site-header,.mobile-contact-bar,.skip-link{visibility:hidden!important}'});
}
for(const [key,count]of [['boxes',3],['paper',4],['bags',1],['labels',1],['print',1],['all',6]]){await page.locator(`[data-family-filter=${key}]`).click();assert.equal(await page.locator('.family-card:visible').count(),count);assert.equal(await page.locator(`[data-family-filter=${key}]`).getAttribute('aria-pressed'),'true');}
await page.locator('[data-family-filter=boxes]').click();await page.reload();assert.equal(await page.locator('.family-card:visible').count(),3);await page.locator('[data-family-filter=bags]').click();await page.goBack();assert.equal(await page.locator('.family-card:visible').count(),3);
await page.locator('[data-family-filter=all]').click();const links=await page.locator('.family-card').evaluateAll(cards=>cards.map(a=>a.getAttribute('href')));for(const link of links){const response=await page.request.get(origin+link);assert.equal(response.status(),200);}
}
await page.goto(origin+'/san-pham/?family=labels#nhom-san-pham');await page.locator('[data-lang=en]').first().click();assert.equal(await page.locator('.family-card:visible').count(),1);await page.locator('[data-lang=zh]').first().click();assert.equal(await page.locator('.family-card:visible').count(),1);assert.equal(await page.locator('[data-family-filter=labels]').textContent(),'标签与贴纸');
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/families-reference-report.json',JSON.stringify({origin,checks,errors,failed,passed:true},null,2));console.log(JSON.stringify({passed:true,viewports:checks.length,languages:3,filterPersistence:true,originalPhotos:true,errors,failed}));await browser.close();
