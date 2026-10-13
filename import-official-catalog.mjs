// Repeatable, offline import of the official catalog snapshot; never scrapes at build time.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url), sharp=require('sharp');
const official=JSON.parse(readFileSync('qa/official-inventory-0.txt','utf8'));
const existing={7120:'5320',7116:'5312',7109:'5268',7108:'5255',7104:'5366',7103:'5326',7102:'5308',7092:'5363',7091:'5356',7090:'5316',7089:'5309',7088:'5293',7087:'5257',7078:'5246',7077:'5311',7072:'5357',7065:'5355',7062:'5328',7060:'5337',7058:'5364',7056:'5323',7054:'5325',7052:'5353'};
// English / Simplified Chinese names keep the official identity, without invented specifications.
const names={
7119:['Folding carton — 004','折叠纸盒 — 004','food'],7117:['Folding carton — 003','折叠纸盒 — 003','food'],
7107:['Printed corrugated box — 006','彩印瓦楞盒 — 006','kitchen'],7106:['Printed corrugated box — 005','彩印瓦楞盒 — 005','other'],7094:['Printed corrugated box — 001','彩印瓦楞盒 — 001','food'],
7093:['Premium rigid box — 008','高档硬盒 — 008','gift'],7076:['Paper bag — 005','纸袋 — 005','retail'],7075:['Paper bag — 004','纸袋 — 004','gift'],7073:['Paper bag — 003','纸袋 — 003','gift'],
6435:['Hardcover catalogue','精装目录','print'],6433:['Hang tags','吊牌','tags'],6431:['Product labels','产品标签','tags'],6429:['Catalogues, brochures and magazines','目录、宣传册与杂志','print'],
6427:['Thermal printed labels','热敏打印标签','barcode'],6425:['Satin and ribbon labels','缎面与织带标签','information'],6423:['Continuous adhesive labels','连续不干胶标签','symbol'],6420:['Adhesive label roll','不干胶标签卷','barcode'],
6418:['Paper bag with handle and flap','带手提孔与翻盖的纸袋','gift'],6416:['Wine paper bag','葡萄酒纸袋','gift'],6414:['Gift paper bag','礼品纸袋','gift'],6412:['LNKK paper bag','LNKK 纸袋','retail'],
6410:['Mooncake box','月饼盒','food'],6408:['Birthday cake box','生日蛋糕盒','food'],6406:['Pizza carton','披萨纸盒','food'],6404:['Corrugated shoe box','瓦楞鞋盒','footwear'],
6400:['Pierre Cardin shoe box','Pierre Cardin 鞋盒','brand'],6398:['MARC O’POLO shoe box','MARC O’POLO 鞋盒','brand'],6394:['L’evinia cosmetic packaging','L’evinia 化妆品包装','fragrance'],6392:['Pharmaceutical packaging','药品包装','health'],6390:['Varogel pharmaceutical carton','Varogel 药品纸盒','health'],6388:['Ampha 3B pharmaceutical carton','Ampha 3B 药品纸盒','health']};
const groups={'hop-giay-mem':'folding','hop-carton':'carton','hop-cao-cap':'rigid','tui-giay':'bag','nhan-dan-decal':'label','nhan-hang-catalog':'catalog'};
const decode=s=>s.replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&amp;/g,'&');
const readData=()=>JSON.parse(readFileSync('dist/product-data.js','utf8').replace(/^window.HOTPRINT_PRODUCTS = /,'').replace(/;\s*$/,''));
const base=readData().filter(p=>!p.officialId);
const marou=base.find(p=>p.id==='032A5316');marou.group='rigid';marou.vi='Hộp cứng Maison Marou';marou.en='Maison Marou rigid box';
const imported=[],audit=[];
mkdirSync('dist/assets/products',{recursive:true});
for(const p of official){
 if(!p.images.length){audit.push({officialId:p.id,name:decode(p.name),source:p.permalink,status:'held-no-image-per-owner'});continue;}
 if(existing[p.id]){audit.push({officialId:p.id,name:decode(p.name),source:p.permalink,status:'already-present',modelId:'032A'+existing[p.id]});continue;}
 if(!names[p.id])throw Error('Unreviewed official product '+p.id);
 const [en,zh,use]=names[p.id],id='HP'+p.id,group=groups[p.categories.find(c=>groups[c.slug])?.slug];if(!group)throw Error('Missing group '+p.id);
 const src='qa/official-photos/'+p.id+'.png',info=await sharp(src).metadata();
 for(const [suffix,width]of [['',720],['-large',1800]])await sharp(src).rotate().resize({width,withoutEnlargement:true}).webp({quality:94}).toFile(`dist/assets/products/${id}${suffix}.webp`);
 imported.push({id,group,vi:decode(p.name),en,zh,images:[id],officialId:p.id,sourceUrl:p.permalink,sourceImage:p.images[0].src,imageWidth:info.width,imageHeight:info.height,use});
 audit.push({officialId:p.id,name:decode(p.name),source:p.permalink,sourceImage:p.images[0].src,status:'added',modelId:id,group,use});
}
writeFileSync('official-products.json',JSON.stringify(imported,null,2)+'\n');
writeFileSync('official-catalog-audit.json',JSON.stringify({checked:'2026-10-14',endpoint:'https://hotprint.vn/wp-json/wc/store/v1/products?per_page=100',records:audit},null,2)+'\n');
writeFileSync('dist/product-data.js','window.HOTPRINT_PRODUCTS = '+JSON.stringify([...base,...imported],null,2)+';\n');
const sources=JSON.parse(readFileSync('product-image-sources.json','utf8')).filter(p=>!p.officialId);
const oldMarou=sources.find(p=>p.id==='032A5316');Object.assign(oldMarou,{group:marou.group,vi:marou.vi,en:marou.en});
writeFileSync('product-image-sources.json',JSON.stringify([...sources,...imported.map(p=>({...p,processing:'Official source image preserved; size-limited WebP encoding only. Presentation masks and floor shadows are separate CSS/SVG assets. Source may be a photograph or a published mockup; no claim of a new commissioned photograph.'}))],null,2)+'\n');
const dictionary=JSON.parse(readFileSync('locales/zh-Hans.json','utf8'));
for(const p of imported)dictionary[p.en]=p.zh;
Object.assign(dictionary,{'Maison Marou rigid box':'Maison Marou 硬盒','Health & pharmaceutical':'健康与药品','Food packaging':'食品包装','Other structures':'其他结构','Image from the HotPrint website':'图片来自 HotPrint 官网','Original published image; product design and branding preserved.':'保留官网原图中的产品设计和品牌标识。','Premium Durian presents its identity on a continuous front.':'Premium Durian 在完整盒面上展示品牌形象。'});
writeFileSync('locales/zh-Hans.json',JSON.stringify(dictionary,null,2)+'\n');
console.log({added:imported.length,existing:base.length,total:base.length+imported.length});

