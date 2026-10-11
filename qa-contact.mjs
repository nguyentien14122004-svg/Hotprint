import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url);
const {chromium}=require('playwright');await mkdir('qa',{recursive:true});
const browser=await chromium.launch({headless:true,channel:'chrome'});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));const results=[];
for(const lang of ['vi','en'])for(const width of [1920,1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:4174'+(lang==='vi'?'/':'/en/'),{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async im=>{im.loading='eager';await im.decode();}));});
 await page.locator('#lien-he').scrollIntoViewIfNeeded();await page.waitForTimeout(250);
 const r=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,lang:document.documentElement.lang,categories:document.querySelectorAll('.category-link').length,brokenImages:[...document.images].filter(im=>!im.naturalWidth).length,contactHeight:document.querySelector('#lien-he').offsetHeight,box:document.querySelector('.connection-desk').getBoundingClientRect().toJSON()}));
 if(r.width!==r.scrollWidth||r.categories!==6||r.brokenImages)throw Error(JSON.stringify(r));results.push(r);
 if([1440,390,1024].includes(width))await page.locator('#lien-he').screenshot({path:`qa/contact-${lang}-${width}.png`});
 for(const type of ['quote','consult','sample']){await page.locator(`#lien-he [data-request=${type}]`).click();if(!await page.locator('#request-dialog').isVisible())throw Error('Dialog '+type);if(type==='consult'&&!await page.locator('.consult-field').isVisible())throw Error('Consult date missing');await page.keyboard.press('Escape');}
}
await page.setViewportSize({width:1440,height:1000});await page.goto('http://127.0.0.1:4174/');await page.locator('.studio-phone').click();if(!await page.locator('#info-dialog').isVisible())throw Error('Phone dialog');await page.keyboard.press('Escape');
await page.locator('[data-lang=en]').click();if(!await page.locator('.sample-note-bottom').innerText().then(s=>s.includes('Request a sample')))throw Error('Translation');
await page.locator('#product-trigger').click();if(!await page.locator('#product-menu').isVisible())throw Error('Menu');await page.keyboard.press('Escape');
await writeFile('qa/contact-report.json',JSON.stringify({results,errors,ctasPassed:true},null,2));console.log(JSON.stringify({viewports:results.length,errors,noOverflow:true,allImagesLoaded:true,quoteConsultSamplePassed:true,phonePassed:true,translationsPassed:true}));await browser.close();
