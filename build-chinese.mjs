import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
import vm from 'node:vm';
import {articles,topics} from './knowledge-content.mjs';
const dictionary=JSON.parse(await readFile('locales/zh-Hans.json','utf8'));
await writeFile('dist/zh-dictionary.js','window.HOTPRINT_ZH_DICTIONARY = '+JSON.stringify(dictionary)+';\n');
const normalize=s=>s.replace(/\s+/g,' ').trim();
const ctx={};vm.createContext(ctx);
const app=(await readFile('dist/app.js','utf8')).split('const {translate:zhTranslate')[0];
vm.runInContext(app+';this.base={translations,categories};',ctx);
const prod=(await readFile('dist/products.js','utf8')).split('  copy.zh=')[0].replace('(() => {','');
vm.runInContext(prod+';this.product=copy;',ctx);
const viToEn={};
for(const collection of [ctx.base.translations,ctx.product])for(const [key,v]of Object.entries(collection.vi)){
 const en=collection.en[key];if(typeof v==='string'&&typeof en==='string')viToEn[normalize(v)]=en;
}
const translate=source=>{
 const key=normalize(source),english=normalize(viToEn[key]||''),target=Object.hasOwn(dictionary,key)?dictionary[key]:Object.hasOwn(dictionary,english)?dictionary[english]:undefined;
 return target===undefined?source:(source.match(/^\s*/)?.[0]||'')+target+(source.match(/\s*$/)?.[0]||'');
};
const pairs=[['/','/en/'],['/san-pham/','/en/products/'],['/danh-muc/hop-giay-mem/','/en/folding-cartons/'],['/danh-muc/hop-carton-in-mau/','/en/printed-corrugated-boxes/'],['/danh-muc/hop-cung-cao-cap/','/en/premium-rigid-boxes/'],['/danh-muc/tui-giay/','/en/paper-bags/'],['/danh-muc/nhan-dan-decal/','/en/adhesive-labels/'],['/danh-muc/nhan-hang-catalog/','/en/hang-tags-catalogues/'],['/nha-may/','/en/factory/'],['/ve-chung-toi/','/en/about/'],['/lien-he/','/en/contact/'],['/yeu-cau-bao-gia/','/en/request-a-quote/'],['/yeu-cau-mau/','/en/request-a-sample/'],['/dat-lich-tu-van/','/en/request-a-consultation/'],['/kien-thuc/','/en/packaging-insights/'],['/chinh-sach-rieng-tu/','/en/privacy/'],['/dieu-kien-gui-yeu-cau/','/en/request-terms/'],['/da-gui-yeu-cau/','/en/request-status/']];
const files=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const p=dir+'/'+e.name;if(e.isDirectory())await walk(p);else if(e.name==='index.html')files.push(p)}}
await walk('dist/en');
for(const file of files){
 const en='/'+file.slice(5,-10),zh=en.replace(/^\/en\//,'/zh/');
 let html=await readFile(file,'utf8');
 const vi=pairs.find(p=>p[1]===en)?.[0]||html.match(/data-article-vi="([^"]+)"/)?.[1];
 if(!vi)throw new Error('No Vietnamese counterpart for '+en);
 if(!pairs.some(p=>p[1]===en))pairs.push([vi,en]);
 // Resolve source templates which use runtime copy keys, before translating plain text.
 html=html.replace(/(<([\w-]+)\b[^>]*data-(i18n|c)="([^"]+)"[^>]*>)[^<]*(<\/\2>)/g,(whole,start,tag,kind,key,end)=>{
  const value=(kind==='i18n'?ctx.base.translations.en:ctx.product.en)[key];return typeof value==='string'?start+translate(value)+end:whole;
 });
 const protectedBlocks=[];
 html=html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g,block=>'@@PROTECTED'+(protectedBlocks.push(block)-1)+'@@');
 html=html.replace(/(?<=>)([^<]+)(?=<)/g,translate);
 html=html.replace(/\b(alt|aria-label|aria-roledescription|placeholder|title)="([^"]*)"/g,(m,key,value)=>key+'="'+translate(value)+'"');
 html=html.replace(/<meta name="description"[^>]*>/,m=>m.replace(/content="([^"]*)"/,(_,v)=>'content="'+translate(v)+'"'));
 html=html.replace(/href="(\/[^\"]*)"/g,(whole,value)=>{
  const [pathname]=value.split(/[?#]/),pair=pairs.find(p=>p.includes(pathname));
  return pair?'href="'+pair[1].replace(/^\/en\//,'/zh/')+value.slice(pathname.length)+'"':whole;
 }).replace(/href="\/en\//g,'href="/zh/').replace('<html lang="en">','<html lang="zh-Hans">');
 html=html.replace(/@@PROTECTED(\d+)@@/g,(_,n)=>protectedBlocks[Number(n)]);
 // Split editorial headlines need idiomatic Chinese, rather than English word order.
 const headings={
  '/zh/hang-tags-catalogues/':'产品吊牌<br>与目录。',
  '/zh/premium-rigid-boxes/':'高档<br><em>精品硬盒</em>',
  '/zh/adhesive-labels/':'不干胶<br>标签<span class="fold-title-dot">。</span>',
  '/zh/printed-corrugated-boxes/':'彩印<br><em>瓦楞纸盒</em>',
  '/zh/packaging-insights/':'读懂每个细节。<br><em>选对产品包装。</em>',
  '/zh/request-terms/':'提交申请前，<br><em>请先了解。</em>',
  '/zh/contact/':'联系<br><em>HotPrint。</em>'
 };
 if(headings[zh])html=html.replace(/(<h1\b[^>]*>)[\s\S]*?(<\/h1>)/,(_,a,b)=>a+headings[zh]+b);
 if(zh==='/zh/about/'){
  const aboutHeadings={'ap-story-title':'源于对印刷的热爱<br><em>与越南品牌<br>携手同行。</em>','ap-values-title':'塑造 <em>HotPrint</em> 的价值观','ap-people-title':'打造 HotPrint 的<br><em>每一位伙伴</em>'};
  for(const [id,copy]of Object.entries(aboutHeadings))html=html.replace(new RegExp('(<h2 id="'+id+'">)[\\s\\S]*?(</h2>)'),(_,a,b)=>a+copy+b);
 }
 await mkdir('dist'+zh,{recursive:true});await writeFile('dist'+zh+'index.html',html);
}
// Static links work without JavaScript; controller updates preserve query and anchor in the browser.
for(const [vi,en]of pairs)for(const [lang,url]of [['vi',vi],['en',en],['zh',en.replace(/^\/en\//,'/zh/')]]){
 const file='dist'+url+'index.html';let html=await readFile(file,'utf8');
 html=html.replace(/(<script id="knowledge-data" type="application\/json">)([\s\S]*?)(<\/script>)/,(_,start,json,end)=>start+JSON.stringify(JSON.parse(json).map(entry=>{
  const a=articles.find(a=>a.id===entry.id);
  const values=[a.title[1],a.summary[1],a.intro[1],topics.find(t=>t[0]===a.topic)[2],...a.sections.flatMap(s=>[s.title[1],s.body[1],...s.items.map(item=>item[1])]),a.takeaway[1]];
  return {...entry,search:[...entry.search.slice(0,2),values.map(translate).join(' ')]};
 }))+end);
 html=html.replace(/<nav class="language-switch"[\s\S]*?<\/nav>/,`<nav class="language-switch" aria-label="Ngôn ngữ / Language / 语言">${[['vi',vi,'VI','Tiếng Việt'],['en',en,'EN','English'],['zh',en.replace(/^\/en\//,'/zh/'),'中文','简体中文']].map(([code,path,label,name])=>`<a href="${path}" data-lang="${code}" lang="${code==='zh'?'zh-Hans':code}" aria-label="${name}"${code===lang?' aria-current="page"':''}>${label}</a>`).join('<span aria-hidden="true">|</span>')}</nav>`);
 await writeFile(file,html);
}
await writeFile('dist/language-routes.json',JSON.stringify(pairs.map(([vi,en])=>({vi,en,zh:en.replace(/^\/en\//,'/zh/')})),null,2)+'\n');
console.log('Simplified Chinese: '+files.length+' additional routes generated.');
