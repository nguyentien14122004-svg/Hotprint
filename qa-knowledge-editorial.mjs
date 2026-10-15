import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {articles} from './knowledge-content.mjs';
const require=createRequire(import.meta.url),{chromium}=require('playwright'),origin=process.env.QA_ORIGIN||'http://127.0.0.1:4174';
await mkdir('qa',{recursive:true});
const browser=await chromium.launch({headless:true,channel:'chrome'}),page=await browser.newPage({reducedMotion:'reduce'}),errors=[],failed=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url())});
try{
 for(const route of ['/kien-thuc/','/en/packaging-insights/','/zh/packaging-insights/']){
  for(const width of [1440,1024,768,390,320]){
   await page.setViewportSize({width,height:1000});await page.goto(origin+route);await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('main img')].map(im=>{im.loading='eager';return im.decode()}));});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width);
   assert.equal(await page.locator('.ke-paths a').count(),3);assert.equal(await page.locator('#knowledge-cards .kp-card').count(),6);
   const copy=await page.locator('.kp-hero-copy').boundingBox(),art=await page.locator('.ke-hero-art').boundingBox();if(width<801)assert.ok(art.y>=copy.y+copy.height-1);
   assert.ok((await page.locator('.ke-hero-art img').getAttribute('src')).includes('knowledge-atelier-v2'));
   if(route.startsWith('/zh/')&&[1440,390].includes(width))await page.screenshot({path:`qa/knowledge-editorial-zh-${width}.png`,fullPage:true});
  }
  for(const n of [0,1,2]){await page.goto(origin+route);await page.locator('.ke-paths a').nth(n).click();assert.equal(await page.locator('body').getAttribute('data-page'),'knowledge-article');}
  await page.goto(origin+route);await page.locator('.ke-feature').click();assert.match(page.url(),/prepare-a-packaging-brief|thong-tin-truoc-khi-hoi-bao-gia/);
 }
 for(const a of articles){await page.goto(origin+'/zh/packaging-insights/'+a.slug[1]+'/');assert.equal(await page.locator('.ka-part').count(),3);assert.match(await page.locator('h1').innerText(),/[\u3400-\u9fff]/);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),320);}
 await page.goto(origin+'/zh/packaging-insights/');await page.locator('#knowledge-query').fill('材料');await page.locator('#knowledge-query').press('Enter');assert.ok(await page.locator('[data-entry]:visible').count()>0);assert.ok(!(await page.locator('#knowledge-empty').isVisible()));
 await page.locator('#knowledge-reset').click();assert.equal(await page.locator('[data-entry]:visible').count(),6);
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await writeFile('qa/knowledge-editorial-report.json',JSON.stringify({origin,viewports:15,journeyLinks:9,featuredLinks:3,chineseArticles:6,chineseSearch:true,errors,failed},null,2));console.log('PASS: editorial layout 15 views, 9 journey links, 3 featured links, 6 Chinese articles and Chinese search.');
}finally{await browser.close();}
