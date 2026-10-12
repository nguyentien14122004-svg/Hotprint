import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const origin=process.env.HOTPRINT_QA_ORIGIN||'http://127.0.0.1:4174';
const routes=JSON.parse(await readFile('dist/language-routes.json','utf8'));
const browser=await chromium.launch({headless:true,channel:'chrome'}),context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage(),errors=[],failed=[],checks=[];
await context.addInitScript(()=>document.addEventListener('click',e=>{if(e.target.closest('a[href^="mailto:"]'))e.preventDefault()},true));
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
await mkdir('qa',{recursive:true});
for(const width of [1440,390,320]){
 await page.setViewportSize({width,height:900});
 for(const r of routes){
  const response=await page.goto(origin+r.zh);assert.equal(response.status(),200);
  assert.equal(await page.locator('html').getAttribute('lang'),'zh-Hans');
  assert.match(await page.locator('h1').innerText(),/[\u3400-\u9fff]/);
  assert.equal(await page.locator('[data-lang=zh][aria-current=page]').count(),1);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  for(const [code,url]of Object.entries(r))assert.equal(new URL(await page.locator(`[data-lang=${code}]`).getAttribute('href'),origin).pathname,url);
  await page.waitForFunction(()=>[...document.images].filter(im=>im.getAttribute('src')&&im.getBoundingClientRect().width&&im.getBoundingClientRect().top<innerHeight).every(im=>im.complete&&im.naturalWidth>0));
  checks.push({route:r.zh,width});
 }
}
await page.setViewportSize({width:1440,height:900});
// Navigation within Chinese, and switches from the existing languages.
for(const code of ['vi','en']){await page.goto(origin+routes[1][code]);await page.locator('[data-lang=zh]').click();assert.equal(new URL(page.url()).pathname,'/zh/products/');assert.equal(await page.locator('html').getAttribute('lang'),'zh-Hans');assert.match(await page.locator('#family-grid').innerText(),/折叠纸盒/);}
await page.locator('#catalog-query').fill('植物');await page.locator('#catalog-search').evaluate(el=>el.requestSubmit());assert.match(await page.locator('#catalog-status').innerText(),/1–1 \/ 1/);
await page.locator('[data-detail]').first().click();assert.match(await page.locator('#detail-title').innerText(),/植物/);await page.locator('#detail-sample').click();await page.waitForURL('**/zh/request-a-sample/**');assert.match(await page.locator('#sample-selected').innerText(),/植物/);
for(const [route,button]of [['/zh/folding-cartons/','[data-fold-detail]'],['/zh/printed-corrugated-boxes/','[data-fold-detail]'],['/zh/premium-rigid-boxes/','[data-fold-detail]'],['/zh/paper-bags/','[data-fold-detail]'],['/zh/adhesive-labels/','[data-fold-detail]'],['/zh/hang-tags-catalogues/','[data-fold-detail]']]){
 await page.goto(origin+route);await page.locator(button).first().click();assert.match(await page.locator('#fold-detail-title').innerText(),/[\u3400-\u9fff]/);await page.locator('#fold-detail-quote').click();await page.waitForURL('**/zh/request-a-quote/**');assert.ok((await page.locator('#q-reference').inputValue()).includes('032A'));
}
// Keep personal input, consent and selected files across all three languages; email labels follow the current locale.
for(const mode of ['quote','sample','consultation']){
 await page.goto(origin+'/zh/request-a-'+mode+'/');await page.locator('.qp-submit').click();assert.match(await page.locator('#q-error-name').innerText(),/姓名/);
 await page.locator('#q-name').fill('测试客户');await page.locator('#q-company').fill('测试公司');await page.locator('#q-phone').fill('+86 138 0013 8000');await page.locator('#q-category').selectOption('unknown');await page.locator('#q-message').fill('我们希望讨论包装结构、品牌设计和材料，请联系采购团队。');await page.locator('#q-consent').check();
 if(mode==='sample')await page.locator('[name=kind][value=advice]').check();
 if(mode==='consultation'){await page.locator('#q-topic').selectOption('materials');await page.locator('#q-timezone').selectOption('Asia/Shanghai');await page.locator('#q-format').selectOption('online');}
 await page.locator('.qp-additional summary').click();await page.locator('#q-files').setInputFiles({name:'参考.pdf',mimeType:'application/pdf',buffer:Buffer.from('QA only')});
 for(const code of ['en','vi','zh']){await page.locator(`[data-lang=${code}]`).click();assert.equal(await page.locator('#q-name').inputValue(),'测试客户');assert.ok(await page.locator('#q-consent').isChecked());assert.equal(await page.locator('#q-file-list li').count(),1);}
 await page.locator('.qp-submit').click();assert.ok(await page.locator('#qp-ready').isVisible());const email=new URL(await page.locator('#qp-email-link').getAttribute('href')),body=email.searchParams.get('body');assert.match(body,/姓名: 测试客户/);assert.match(body,/参考.pdf/);assert.match(body,/来源：HotPrint/);assert.match(body,/(产品类别|包装类别): 不确定/);assert.ok((await page.locator('#qp-status-guide').getAttribute('href')).startsWith('/zh/request-status/'));
 if(mode==='consultation')assert.match(body,/Asia\/Shanghai/);
 await page.locator('#q-company').fill('修改后的公司');assert.ok(await page.locator('#qp-ready').isHidden());
}
await page.goto(origin+'/zh/packaging-insights/');await page.locator('#knowledge-query').fill('材料');await page.locator('#knowledge-search').evaluate(el=>el.requestSubmit());assert.match(await page.locator('#knowledge-result').innerText(),/篇指南/);assert.ok(await page.locator('[data-entry]:visible').count()>0);assert.ok((await page.locator('[data-lang=zh]').getAttribute('href')).includes('/zh/packaging-insights/'));
await page.goto(origin+'/zh/request-status/?type=consult&name=private&success=1');assert.equal(new URL(page.url()).search,'?type=consult');assert.match(await page.locator('#rs-type').innerText(),/咨询/);assert.ok((await page.locator('#rs-new-form').getAttribute('href')).startsWith('/zh/'));
await page.goto(origin+'/zh/');await page.screenshot({path:'qa/chinese-home-desktop.png'});await page.goto(origin+'/zh/products/');await page.screenshot({path:'qa/chinese-products-desktop.png'});await page.setViewportSize({width:390,height:844});await page.screenshot({path:'qa/chinese-products-mobile.png'});
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/chinese-report.json',JSON.stringify({passed:true,pages:routes.length,checks,errors,failed,languagePreservesForm:true,chineseSearch:true,emailPreparedOnly:true},null,2));console.log(JSON.stringify({passed:true,pages:routes.length,viewportChecks:checks.length,errors,failed}));await browser.close();
