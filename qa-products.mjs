import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require('playwright');await mkdir('qa',{recursive:true});
const browser=await chromium.launch({headless:true,channel:'chrome'});const page=await browser.newPage({reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';const results=[];
for(const lang of ['vi','en'])for(const width of [1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto(origin+(lang==='vi'?'/san-pham/':'/en/products/'),{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async im=>{im.loading='eager';await im.decode();}));});
 const r=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,lang:document.documentElement.lang,categories:document.querySelectorAll('.family-card').length,cards:document.querySelectorAll('.product-card').length,sections:document.querySelectorAll('main>section').length,broken:[...document.images].filter(im=>!im.naturalWidth).map(im=>im.src)}));
 assert.equal(r.width,r.scrollWidth,JSON.stringify(r));assert.equal(r.lang,lang);assert.equal(r.categories,6);assert.equal(r.cards,12);assert.equal(r.sections,5);assert.equal(r.broken.length,0);results.push(r);
 if([1440,390].includes(width)){await page.screenshot({path:`qa/products-${lang}-${width}.png`,fullPage:true});await page.locator('.catalog-hero').screenshot({path:`qa/products-hero-${lang}-${width}.png`});}
}
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/san-pham/');
await page.locator('#catalog-pagination [data-page="2"]').first().click();assert.match(page.url(),/page=2/);assert.equal(await page.locator('.product-card').count(),12);assert.match(await page.locator('.product-card').first().innerText(),/032A5246/);
await page.reload();assert.match(await page.locator('.product-card').first().innerText(),/032A5246/);
await page.locator('#catalog-query').fill('hoa tiet thuc vat');await page.locator('#catalog-search').evaluate(el=>el.requestSubmit());assert.equal(await page.locator('.product-card').count(),1);
await page.locator('.product-photo').click();assert.ok(await page.locator('#product-detail').isVisible());assert.equal(await page.locator('#detail-thumbs button').count(),3);
await page.locator('#gallery-next').click();assert.match(await page.locator('#detail-image').getAttribute('src'),/032A5292/);
await page.locator('#detail-sample').click();assert.ok(await page.locator('#request-dialog').isVisible());assert.equal(await page.locator('#form-category').inputValue(),'hop-cao-cap');assert.match(await page.locator('#request-form textarea[name=message]').inputValue(),/032A5293/);
await page.keyboard.press('Escape');await page.locator('#clear-filters').click();
await page.locator('#catalog-group').selectOption('tui-giay');assert.equal(await page.locator('.product-card').count(),8);assert.match(page.url(),/group=tui-giay/);
await page.locator('[data-lang=en]').click();assert.match(page.url(),/en\/products\/\?group=tui-giay/);assert.equal(await page.locator('.product-card').count(),8);assert.match(await page.locator('h1').innerText(),/Packaging/);
await page.goBack();assert.equal(await page.locator('html').getAttribute('lang'),'vi');assert.equal(await page.locator('.product-card').count(),8);
await page.locator('#catalog-query').fill('khongtimthay123');await page.locator('#catalog-search').evaluate(el=>el.requestSubmit());assert.ok(await page.locator('#catalog-empty').isVisible());await page.locator('#empty-clear').click();assert.equal(await page.locator('.product-card').count(),12);
await page.setViewportSize({width:390,height:850});await page.locator('#mobile-filter').click();await page.locator('#filter-options input[value=nhan-dan-decal]').check();await page.keyboard.press('Escape');assert.equal(await page.locator('.product-card').count(),12);
await page.locator('#mobile-filter').click();await page.locator('#filter-options input[value=nhan-dan-decal]').check();await page.locator('#filter-form [type=submit]').click();assert.equal(await page.locator('.product-card').count(),3);
await page.locator('#mobile-filter').click();await page.locator('#reset-mobile-filter').click();await page.locator('#filter-form [type=submit]').click();assert.equal(await page.locator('.product-card').count(),12);
await page.locator('.product-photo').first().click();await page.locator('#detail-image').evaluate(im=>im.decode());await page.locator('#product-detail').screenshot({path:'qa/products-detail-mobile.png'});await page.keyboard.press('Escape');
await page.goto(origin+'/san-pham/?q=032A5331');assert.equal(await page.locator('.product-card').count(),1);await page.locator('.product-photo').click();assert.ok(await page.locator('#gallery-next').isHidden());await page.keyboard.press('Escape');assert.ok(await page.locator('.product-photo').evaluate(el=>el===document.activeElement));
await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/');assert.equal(await page.locator('.category-link').count(),6);await page.locator('#product-trigger').click();await page.locator('.menu-overview').click();assert.match(page.url(),/san-pham/);await page.locator('[data-factory]').first().click();assert.match(page.url(),/\/#nha-may/);await page.locator('.sample-note').click();assert.ok(await page.locator('#request-dialog').isVisible());await page.keyboard.press('Escape');
assert.deepEqual(errors,[]);await writeFile('qa/products-report.json',JSON.stringify({results,errors,features:'pagination reload search diacritics gallery contextual request group language back empty mobile filters homepage navigation passed'},null,2));
console.log(JSON.stringify({viewports:results.length,errors,allImagesLoaded:true,featuresPassed:true}));await browser.close();
