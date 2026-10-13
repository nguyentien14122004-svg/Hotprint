import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
await mkdir('qa',{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({reducedMotion:'reduce'});
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174',errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
try{
 for(const route of ['/san-pham/','/en/products/','/zh/products/'])for(const width of [1920,1440,1056,768,390,320]){
  await page.setViewportSize({width,height:950});await page.goto(origin+route+'#thu-vien',{waitUntil:'networkidle'});
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('#thu-vien img')].map(im=>{im.loading='eager';return im.decode()}));});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,`${route} ${width}`);
  assert.equal(await page.locator('#product-grid .product-card').count(),12);
  assert.equal(await page.locator('#thu-vien .primary-photo').evaluateAll(images=>images.filter(im=>im.naturalWidth&&getComputedStyle(im).objectFit==='contain').length),12);
  assert.equal(await page.locator('#thu-vien').evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(231, 223, 209)');
  assert.equal(await page.locator('#thu-vien .library-stage-shadow').evaluateAll(nodes=>nodes.every(el=>getComputedStyle(el).filter==='none')),true,'No silhouette halo on original photographs');
  const columns=await page.locator('#product-grid').evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length);
  assert.equal(columns,width<=540?1:width<=800?2:3);
  const copy=await page.locator('.library-reference-head').innerText();assert(!copy.includes('undefined'));
  if(route.startsWith('/zh'))assert(!copy.includes('Every sample')&&!copy.includes('Find inspiration'));
  if(route==='/san-pham/'&&[1056,390].includes(width))await page.locator('#thu-vien').screenshot({path:`qa/library-reference-${width}.png`});
  checks.push({route,width,columns});
 }
 await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/san-pham/#thu-vien');
 await page.evaluate(()=>localStorage.removeItem('hotprint-sample-selection'));await page.reload();
 const allIds=new Set();for(let number=1;number<=3;number++){
  if(number>1)await page.locator(`#catalog-pagination [data-page="${number}"]`).first().click();
  await page.locator('.primary-photo').evaluateAll(images=>Promise.all(images.map(im=>{im.loading='eager';return im.decode()})));
  await page.locator('.library-ground-shadow').evaluateAll(images=>Promise.all(images.map(im=>{im.loading='eager';return im.decode()})));
  assert.equal(await page.locator('.product-photo').evaluateAll(cards=>cards.every(card=>{
   const photo=card.querySelector('.primary-photo'),shadow=card.querySelector('.library-ground-shadow'),a=photo.getBoundingClientRect(),b=shadow.getBoundingClientRect(),style=getComputedStyle(photo);
   return photo.naturalWidth===1800&&style.filter==='none'&&style.opacity==='1'&&style.mixBlendMode==='normal'&&shadow.naturalWidth>0&&Math.abs(a.width/a.height-1.5)<.01&&Math.abs(a.left-b.left)<1&&Math.abs(a.top-b.top)<1&&Math.abs(a.width-b.width)<1&&Math.abs(a.height-b.height)<1;
  })),true,'All 36 original photos and their separate floor shadows stay registered');
  for(const id of await page.locator('.product-card').evaluateAll(cards=>cards.map(c=>c.dataset.product)))allIds.add(id);
 }
 assert.equal(allIds.size,36);
 await page.locator('#catalog-query').fill('hoa tiet thuc vat');await page.locator('#catalog-search').evaluate(el=>el.requestSubmit());assert.equal(await page.locator('.product-card').count(),1);
 await page.locator('.sample-save').click();assert.equal(await page.locator('.product-card [aria-pressed=true]').count(),2);
 await page.locator('.product-photo').click();assert(await page.locator('#product-detail').isVisible());assert.match(await page.locator('#detail-original').getAttribute('href'),/032A5293-large.webp/);await page.keyboard.press('Escape');
 await page.locator('#clear-filters').click();await page.locator('#catalog-sort').selectOption('name');assert.match(page.url(),/sort=name/);
 let titles=await page.locator('.product-caption h3').allTextContents();assert.deepEqual(titles,[...titles].sort((a,b)=>a.localeCompare(b,'vi')));
 await page.reload();assert.equal(await page.locator('#catalog-sort').inputValue(),'name');
 await page.locator('#catalog-sort').selectOption('selected');assert.equal(await page.locator('.product-card').first().getAttribute('data-product'),'032A5293');
 await page.locator('#catalog-group').selectOption('tui-giay');assert.equal(await page.locator('.product-card').count(),8);
 await page.locator('[data-lang=zh]').first().click();assert.match(page.url(),/zh\/products/);assert.equal(await page.locator('#catalog-sort').inputValue(),'selected');assert.equal(await page.locator('.product-card').count(),8);
 await page.locator('#open-shortlist').click();assert.equal(await page.locator('.shortlist-item').count(),1);await page.keyboard.press('Escape');
 await page.goto(origin+'/san-pham/#thu-vien');await page.locator('.sample-save').first().click();
 for(let i=0;i<7;i++)await page.locator('.sample-save').nth(i).click();
 assert.equal(await page.locator('.sample-save[aria-pressed=true]').count(),6);
 await page.setViewportSize({width:390,height:850});await page.locator('#mobile-filter').click();await page.locator('#filter-options input[value=nhan-dan-decal]').check();await page.locator('#filter-form [type=submit]').click();assert.equal(await page.locator('.product-card').count(),3);
 await page.locator('#catalog-query').fill('no-such-sample-092341');await page.locator('#catalog-search').evaluate(el=>el.requestSubmit());assert(await page.locator('#catalog-empty').isVisible());
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
 await writeFile('qa/library-reference-report.json',JSON.stringify({passed:true,checks,products:allIds.size,errors,failed,features:'search, sort, pagination, original gallery, dual sample buttons, six-sample limit, persistence, Chinese switch, mobile filters, empty state'},null,2));
 console.log(JSON.stringify({passed:true,viewports:checks.length,products:allIds.size,errors,failed}));
}finally{await browser.close();}
