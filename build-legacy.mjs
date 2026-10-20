import {readFile,writeFile,mkdir} from 'node:fs/promises';
import sanitize from 'sanitize-html';
import {decodeHTML} from 'entities';
const data=JSON.parse(await readFile('migration/legacy-content.json','utf8'));
const media=JSON.parse(await readFile('migration/media-manifest.json','utf8')).records;
const audit=JSON.parse(await readFile('official-catalog-audit.json','utf8')).records;
const models=JSON.parse((await readFile('dist/product-data.js','utf8')).replace(/^window\.HOTPRINT_PRODUCTS\s*=\s*/,'').trim().replace(/;$/,''));
const source=await readFile('dist/index.html','utf8');
const esc=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const text=s=>decodeHTML(sanitize(s||'',{allowedTags:[],allowedAttributes:{}})).replace(/\s+/g,' ').trim();
const aliases={'/danh-muc-san-pham/':'/san-pham/','/danh-muc/hop-carton/':'/danh-muc/hop-carton-in-mau/','/danh-muc/hop-cao-cap/':'/danh-muc/hop-cung-cao-cap/'};
const core=new Set(['/','/san-pham/','/ve-chung-toi/','/lien-he/','/danh-muc/hop-giay-mem/','/danh-muc/tui-giay/','/danh-muc/nhan-dan-decal/','/danh-muc/nhan-hang-catalog/']);
const paths=new Set([...core,...Object.keys(aliases),...data.pages.map(p=>new URL(p.link).pathname),...data.posts.map(p=>new URL(p.link).pathname),...data.products.map(p=>new URL(p.permalink).pathname),...data.categories.map(p=>new URL(p.permalink).pathname),...data.postCategories.map(p=>new URL(p.link).pathname),'/nha-may/','/dat-lich-tu-van/','/yeu-cau-bao-gia/','/kien-thuc/','/chinh-sach-rieng-tu/','/dieu-kien-gui-yeu-cau/']);
const localMedia=new Map(media.filter(m=>!m.error).map(m=>[decodeURIComponent(m.path),m.path]));
function localURL(raw){if(!raw)return '';try{const u=new URL(raw,'https://hotprint.vn/');if(!['hotprint.vn','www.hotprint.vn'].includes(u.hostname))return raw;if(u.pathname.startsWith('/wp-content/uploads/'))return localMedia.get(decodeURIComponent(u.pathname))||'';const route=aliases[u.pathname]||u.pathname;return paths.has(u.pathname)?route+u.search+u.hash:''}catch{return ''}}
function clean(raw){return sanitize(raw||'',{
 allowedTags:[...sanitize.defaults.allowedTags,'img','figure','figcaption','picture','source'],
 allowedAttributes:{a:['href','target','rel'],img:['src','alt','width','height','loading','decoding'],th:['colspan','rowspan','scope'],td:['colspan','rowspan'],ol:['start'],li:['value']},
 allowedSchemes:['https','http','mailto','tel'],allowProtocolRelative:false,
 nonTextTags:['style','script','textarea','form','iframe','button','select','input','noscript'],
 transformTags:{h1:'h2',a:(tag,a)=>({tagName:tag,attribs:{href:localURL(a.href),...(a.target==='_blank'?{target:'_blank',rel:'noopener'}:{})}}),img:(tag,a)=>({tagName:tag,attribs:{src:localURL(a['data-src']||a.src),alt:a.alt||'',...(a.width&&/^\d+$/.test(a.width)?{width:a.width}:{}),...(a.height&&/^\d+$/.test(a.height)?{height:a.height}:{}),loading:'lazy',decoding:'async'}})},
 exclusiveFilter:frame=>frame.tag==='img'&&!frame.attribs.src
 }).replace(/\binfo@hotprint\.vn\b/gi,'Info@HotPrint.vn')}
const manifest={checkedAt:data.checkedAt,pages:[],redirects:Object.entries(aliases).map(([source,destination])=>({source,destination,statusCode:301})),products:{}};
const categories={293:{vi:'/danh-muc/hop-giay-mem/',en:'/en/folding-cartons/',zh:'/zh/folding-cartons/'},294:{vi:'/danh-muc/hop-carton-in-mau/',en:'/en/printed-corrugated-boxes/',zh:'/zh/printed-corrugated-boxes/'},295:{vi:'/danh-muc/hop-cung-cao-cap/',en:'/en/premium-rigid-boxes/',zh:'/zh/premium-rigid-boxes/'},296:{vi:'/danh-muc/tui-giay/',en:'/en/paper-bags/',zh:'/zh/paper-bags/'},297:{vi:'/danh-muc/nhan-dan-decal/',en:'/en/adhesive-labels/',zh:'/zh/adhesive-labels/'},298:{vi:'/danh-muc/nhan-hang-catalog/',en:'/en/hang-tags-catalogues/',zh:'/zh/hang-tags-catalogues/'}};
const action=(label,href)=>`<a class="legacy-button" href="${esc(href)}">${label}<span aria-hidden="true">↗</span></a>`;
function img(raw,alt){const url=localURL(raw);return url?`<figure><a href="${esc(url)}" target="_blank" rel="noopener" aria-label="Xem ảnh đầy đủ: ${esc(alt)}"><img src="${esc(url)}" alt="${esc(alt)}" loading="lazy" decoding="async"></a></figure>`:''}
async function save(route,{title,kicker,description,body,type='page',id,modified,image,translations,modelId}){
 const main=`<main id="main" class="legacy-page"><header class="legacy-hero legacy-wrap"><nav class="legacy-breadcrumb" aria-label="Đường dẫn"><a href="/">HotPrint</a><span aria-hidden="true">/</span><span>${esc(kicker)}</span></nav><p class="legacy-kicker">HOTPRINT / ${esc(kicker)}</p><h1>${esc(title)}</h1>${description?`<p class="legacy-intro">${esc(description)}</p>`:''}</header>${body}<section class="legacy-connect"><div class="legacy-wrap"><div><p class="legacy-kicker">CÙNG BẮT ĐẦU</p><h2>Trao đổi từ nhu cầu<br>của bạn.</h2><p>Chia sẻ sản phẩm, quy cách và điều bạn muốn làm rõ cùng HotPrint.</p></div><div class="legacy-actions">${action('Yêu cầu báo giá','/yeu-cau-bao-gia/'+(modelId?'?model='+encodeURIComponent(modelId):''))}${action('Đặt lịch tư vấn','/dat-lich-tu-van/'+(modelId?'?model='+encodeURIComponent(modelId):''))}</div></div></section></main>`;
 let html=source.replace(/<main id="main"[\s\S]*?<\/main>/,()=>main).replace('<body>',`<body data-page="legacy" data-legacy-title="${esc(title+' | HotPrint')}" data-legacy-en="${translations?.en||'/en/packaging-insights/'}" data-legacy-zh="${translations?.zh||'/zh/packaging-insights/'}">`).replace(/<title>.*?<\/title>/,()=>`<title>${esc(title)} | HotPrint</title>`).replace(/<meta name="description"[^>]+>/,()=>`<meta name="description" content="${esc(description||title+' — HotPrint')}">`).replace(/<link rel="preload" as="image"[^>]*>/g,'').replace('<script src="/app.js" defer></script>','<link rel="stylesheet" href="/legacy.css"><script src="/product-data.js" defer></script><script src="/app.js" defer></script>');
 await mkdir('dist'+route,{recursive:true});await writeFile('dist'+route+'index.html',html);
 manifest.pages.push({route,title,description:description||title+' — HotPrint',type,id,modified,image:localURL(image),modelId});
}
function cards(entries){return `<div class="legacy-cards">${entries.map(e=>`<article><h2><a href="${esc(e.route)}">${esc(e.title)}</a></h2>${e.description?`<p>${esc(e.description)}</p>`:''}<a class="legacy-read" href="${esc(e.route)}">Xem chi tiết <span aria-hidden="true">↗</span></a></article>`).join('')}</div>`}
for(const p of data.products){
 const route=new URL(p.permalink).pathname,title=text(p.name),mapped=audit.find(a=>a.officialId===p.id),model=models.find(m=>m.id===mapped?.modelId),cat=p.categories.find(c=>categories[c.id]),catPaths=categories[cat?.id],description=text(p.short_description)||`${title}. Xem hình ảnh và trao đổi yêu cầu bao bì cùng HotPrint.`;
 const photos=`<div class="legacy-product-photos">${p.images.map(im=>img(im.src,im.alt||title)).join('')}</div>`;
 const copy=`<div class="legacy-product-copy"><p class="legacy-kicker">${esc(cat?text(cat.name):'SẢN PHẨM')}</p><h2>Chi tiết sản phẩm</h2><div class="legacy-content">${clean(p.description||p.short_description)||`<p>Trao đổi cùng HotPrint về yêu cầu cho ${esc(title)}.</p>`}</div>${catPaths?`<a class="legacy-read" href="${catPaths.vi}">Khám phá cùng nhóm sản phẩm ↗</a>`:''}</div>`;
 await save(route,{title,kicker:'SẢN PHẨM',description,body:`<section class="legacy-wrap legacy-product">${photos}${copy}</section>`,type:'product',id:p.id,image:p.images[0]?.src,translations:catPaths,modelId:model?.id});
 if(model)manifest.products[model.id]=route;
}
for(const p of data.posts){const title=text(p.title.rendered),description=text(p.excerpt.rendered).slice(0,260),route=new URL(p.link).pathname;
 await save(route,{title,kicker:p.categories.includes(292)?'TUYỂN DỤNG / BÀI ĐĂNG LƯU TRỮ':p.categories.includes(291)?'DỊCH VỤ':'KIẾN THỨC BAO BÌ',description,body:`<article class="legacy-wrap legacy-article"><div class="legacy-content">${clean(p.content.rendered)}</div><p class="legacy-back"><a href="${p.categories.includes(292)?'/tuyen-dung/':p.categories.includes(291)?'/dich-vu/':'/tin-tuc/'}">← Xem các bài cùng chuyên mục</a></p></article>`,type:'article',id:p.id,modified:p.modified});
}
for(const p of data.pages){const route=new URL(p.link).pathname;if(core.has(route)||aliases[route])continue;const title=text(p.title.rendered);
 await save(route,{title,kicker:'THƯ VIỆN HÌNH ẢNH',description:'Hình ảnh sản phẩm và hoạt động tại HotPrint.',body:`<section class="legacy-wrap legacy-album"><div class="legacy-content">${clean(p.content.rendered)}</div></section>`,id:p.id,modified:p.modified,translations:{en:'/en/factory/',zh:'/zh/factory/'}});
}
for(const c of data.categories){const route=new URL(c.permalink).pathname;if(core.has(route)||aliases[route])continue;const entries=data.products.filter(p=>p.categories.some(cat=>cat.id===c.id)).map(p=>({route:new URL(p.permalink).pathname,title:text(p.name),description:text(p.short_description).slice(0,180)}));
 await save(route,{title:text(c.name),kicker:'DANH MỤC SẢN PHẨM',description:text(c.description)||'Các sản phẩm tham khảo từ HotPrint.',body:`<section class="legacy-wrap">${entries.length?cards(entries):'<p>Hiện chưa có sản phẩm công khai trong nhóm này.</p><a class="legacy-read" href="/san-pham/">Xem các nhóm sản phẩm ↗</a>'}</section>`,type:entries.length?'archive':'empty-archive',id:c.id,translations:{en:'/en/products/',zh:'/zh/products/'}});
}
for(const c of data.postCategories){const entries=data.posts.filter(p=>p.categories.includes(c.id)).map(p=>({route:new URL(p.link).pathname,title:text(p.title.rendered),description:text(p.excerpt.rendered).slice(0,180)}));if(!entries.length)continue;const route=new URL(c.link).pathname;
 await save(route,{title:text(c.name),kicker:'HOTPRINT / BÀI VIẾT',description:c.id===288?'Các bài viết và kiến thức về bao bì từ HotPrint.':c.id===292?'Thông tin tuyển dụng đã được HotPrint đăng tải. Vui lòng liên hệ để xác nhận nhu cầu hiện tại.':'Thông tin dịch vụ và hoạt động sản xuất của HotPrint.',body:`<section class="legacy-wrap">${cards(entries)}</section>`,type:'archive',id:c.id});
}
const blockAliases={'block-san-pham':'/san-pham/','block-dau-trang':'/','block-lien-he':'/lien-he/','block-dang-ky-tu-van':'/dat-lich-tu-van/','block-widget':'/lien-he/'};
for(const [slug,destination]of Object.entries(blockAliases))manifest.redirects.push({source:'/blocks/'+slug+'/',destination,statusCode:301});
// Shortlinks remain usable without exposing or retaining form data in redirects.
for(const p of [...data.pages,...data.posts,...data.products]){const route=aliases[new URL(p.link||p.permalink).pathname]||new URL(p.link||p.permalink).pathname;if(route==='/')continue;for(const key of ['p','page_id'])manifest.redirects.push({source:'/',has:[{type:'query',key,value:String(p.id)}],destination:route,statusCode:301});}
for(const m of data.media){const destination=localURL(m.source_url);if(destination)manifest.redirects.push({source:'/',has:[{type:'query',key:'attachment_id',value:String(m.id)}],destination,statusCode:301});}
manifest.redirects.push({source:'/',has:[{type:'query',key:'s',value:'(?<legacySearch>.+)'},{type:'query',key:'post_type',value:'product'}],destination:'/san-pham/?q=:legacySearch',statusCode:301});
await writeFile('migration/route-manifest.json',JSON.stringify(manifest,null,2)+'\n');
for(const model of models){if(manifest.products[model.id])model.legacyUrl=manifest.products[model.id];else delete model.legacyUrl;}
await writeFile('dist/product-data.js','window.HOTPRINT_PRODUCTS = '+JSON.stringify(models,null,2)+';\n');
const config=JSON.parse(await readFile('vercel.json','utf8'));config.redirects=[...config.redirects.filter(r=>r.source.includes('yeu-cau-mau')||r.source.includes('request-a-sample')), ...manifest.redirects];
// Only the company domain may be indexed; Vercel previews keep their noindex header.
config.headers=[{source:'/(.*)',missing:[{type:'host',value:'(www\\.)?hotprint\\.vn'}],headers:[{key:'X-Robots-Tag',value:'noindex, nofollow'}]}];
await writeFile('vercel.json',JSON.stringify(config,null,2)+'\n');
console.log(`Legacy migration: ${manifest.pages.length} pages, ${manifest.redirects.length} redirects, ${Object.keys(manifest.products).length} product mappings.`);
