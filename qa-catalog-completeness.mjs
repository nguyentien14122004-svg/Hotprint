import {createRequire} from 'node:module';
import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const data=JSON.parse(readFileSync('dist/product-data.js','utf8').replace(/^window.HOTPRINT_PRODUCTS = /,'').replace(/;\s*$/,''));
const audit=JSON.parse(readFileSync('official-catalog-audit.json','utf8')).records;
assert.equal(data.length,67);assert.equal(new Set(data.map(p=>p.id)).size,67);
assert.equal(audit.filter(p=>p.status==='added').length,31);assert.equal(audit.filter(p=>p.status==='already-present').length,23);
assert(audit.filter(p=>p.status!=='held-no-image-per-owner').every(p=>data.some(d=>d.id===p.modelId)));
assert.equal(data.find(p=>p.id==='032A5316').group,'rigid');
const routes=[['folding','hop-giay-mem','folding-cartons'],['carton','hop-carton-in-mau','printed-corrugated-boxes'],['rigid','hop-cung-cao-cap','premium-rigid-boxes'],['bag','tui-giay','paper-bags'],['label','nhan-dan-decal','adhesive-labels'],['catalog','nhan-hang-catalog','hang-tags-catalogues']];
const b=await chromium.launch({channel:'chrome',headless:true});const p=await b.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';const checked=[];
try{
 for(const lang of ['vi','en','zh'])for(const [group,vi,en]of routes){
  const route=lang==='vi'?'/danh-muc/'+vi+'/':'/'+lang+'/'+en+'/';console.log(route);await p.goto(origin+route+'#mau-tham-khao');
  const cards=p.locator('.fold-sample'),expected=data.filter(x=>x.group===group);
  assert.equal(await cards.count(),expected.length,route);
  assert.deepEqual((await cards.locator('.fold-sample-photo').evaluateAll(nodes=>nodes.map(n=>n.dataset.foldDetail))).sort(),expected.map(x=>x.id).sort());
  assert.equal(await cards.filter({hasText:'undefined'}).count(),0);
  assert.equal(await cards.locator('[data-use=undefined]').count(),0);
  await cards.locator('img').evaluateAll(async ims=>{for(const im of ims){im.loading='eager';await im.decode();}});
  for(const button of await p.locator('[data-fold-filter]').all()){
   const use=await button.getAttribute('data-fold-filter');console.log('filter',use);await button.click();
   const wanted=use==='all'?await cards.count():await p.locator('.fold-sample[data-use="'+use+'"]').count();assert.equal(await p.locator('.fold-sample:not([hidden])').count(),wanted);assert(wanted>0,route+' empty filter '+use);
  }
  if(group==='carton'){
   for(const use of await p.locator('#carton-use option').evaluateAll(options=>options.map(o=>o.value))){
    await p.locator('#carton-use').selectOption(use);
    const wanted=use==='all'?expected.length:await p.locator('.fold-sample[data-use="'+use+'"]').count();
    assert.equal(await p.locator('.fold-sample:not([hidden])').count(),wanted);assert(wanted>0);
   }
   await p.locator('#carton-use').selectOption('all');
  }else await p.locator('[data-fold-filter=all]').click();
  if(group==='folding')assert.equal(await p.locator('[data-fold-detail="032A5316"]').count(),0);
  if(group==='rigid')assert(await p.locator('[data-fold-detail="032A5316"]').count()>0);
  const newItem=expected.find(x=>x.officialId);await p.locator('.fold-sample-photo[data-fold-detail="'+newItem.id+'"]').click();assert(await p.locator('#fold-detail').isVisible());await p.locator('#fold-detail-image').evaluate(im=>im.decode());await p.keyboard.press('Escape');
  await p.setViewportSize({width:390,height:844});assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),390,route+' overflow');await p.setViewportSize({width:1440,height:1000});checked.push({route,products:expected.length});
 }
 for(const lang of ['vi','en','zh'])for(const width of [1440,768,390,320]){
  await p.setViewportSize({width,height:950});await p.goto(origin+(lang==='vi'?'/san-pham/':'/'+lang+'/products/')+'?q=HP7119#thu-vien');
  await p.locator('.product-photo').click();await p.locator('#detail-image').evaluate(im=>im.decode());assert((await p.locator('#detail-title').textContent()).length>0);
  assert.equal(await p.locator('#detail-title').evaluate(el=>getComputedStyle(el).fontFamily.includes('Playfair')),true);
  assert(await p.locator('.detail-proof-icon').isVisible());assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),width);
  assert.equal(await p.locator('#product-detail').evaluate(el=>el.scrollWidth<=el.clientWidth+1),true);
  await p.locator('#detail-save').click();assert.equal(await p.locator('#detail-save').getAttribute('aria-pressed'),'true');await p.locator('#detail-save').click();
  await p.locator('#detail-sample').click();assert.match(p.url(),/model=HP7119/);assert.match(p.url(),/category=hop-giay-mem/);
 }
 // Corrected model passes the rigid category to the quotation form.
 await p.goto(origin+'/san-pham/?q=032A5316#thu-vien');await p.locator('.product-photo').click();await p.locator('#detail-quote').click();assert.match(p.url(),/category=hop-cao-cap/);
 assert.deepEqual(errors,[]);writeFileSync('qa/catalog-completeness.json',JSON.stringify({passed:true,products:data.length,officialPictured:54,added:31,checked,modalLayouts:12,errors},null,2));console.log(JSON.stringify({passed:true,products:data.length,categoryRoutes:checked.length,modalLayouts:12}));
}finally{await b.close()}

