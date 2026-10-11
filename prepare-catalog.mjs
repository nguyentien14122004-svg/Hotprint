import {mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const sourceDirectory=process.argv[2];
if(!sourceDirectory)throw new Error('Provide the original photo directory: node prepare-catalog.mjs "path/to/photos"');
const entries=[
 ['5293','rigid','Hộp quà họa tiết thực vật','Botanical gift box',['5293','5292','5360']],
 ['5315','folding','Hộp giấy Bitter Melon Artichoke','Bitter Melon Artichoke carton',['5315']],
 ['5331','bag','Túi giấy Karl Lagerfeld','Karl Lagerfeld paper bag',['5331']],
 ['5366','carton','Hộp carton bộ chảo','Cookware packaging box',['5366','5367']],
 ['5339','label','Nhãn mã vạch dạng cuộn','Barcode label roll',['5339']],
 ['5353','catalog','Thẻ treo họa tiết rừng','Woodland hang tags',['5353','5283','5284']],
 ['5308','rigid','Hộp nắp rời Eton / Tretorn','Eton / Tretorn lift-off box',['5308','5286']],
 ['5316','folding','Hộp giấy Maison Marou','Maison Marou carton',['5316']],
 ['5355','bag','Túi giấy Socola','Socola paper bag',['5355']],
 ['5358','carton','Hộp carton USPA Sport','USPA Sport corrugated box',['5358']],
 ['5328','label','Nhãn in đỏ dạng cuộn','Red printed label roll',['5328']],
 ['5364','catalog','Lịch để bàn 2025','2025 desk calendar',['5364']],
 ['5246','rigid','Hộp quà NMN Nano Collagen','NMN Nano Collagen gift box',['5246','5244']],
 ['5267','folding','Hộp nước hoa Lévinia màu hồng','Pink Lévinia perfume carton',['5267']],
 ['5337','label','Nhãn khuyến mại dạng cuộn','Promotional label roll',['5337']],
 ['5311','bag','Túi quà họa tiết chim','Bird-pattern gift bag',['5311','5248']],
 ['5326','carton','Hộp bao bì Milk Pan','Milk Pan packaging box',['5326']],
 ['5323','catalog','Nhãn hàng dạng thẻ dài','Long-format product tags',['5323']],
 ['5255','rigid','Hộp nắp rời GANT','GANT lift-off box',['5255']],
 ['5320','folding','Hộp giấy GE UltraPro','GE UltraPro carton',['5320','5259']],
 ['5336','bag','Túi quà họa tiết hoa','Floral gift bag',['5336']],
 ['5361','carton','Hộp giày DC Shoes','DC Shoes box',['5361']],
 ['5325','catalog','Nhãn hàng minh họa màu vàng','Yellow illustrated product tags',['5325']],
 ['5309','rigid','Hộp quà nâu viền vàng','Brown gift box with gold border',['5309','5254']],
 ['5268','folding','Hộp nước hoa Lévinia màu vàng','Yellow Lévinia perfume carton',['5268','5298']],
 ['5332','bag','Túi giấy XXS','XXS paper bag',['5332']],
 ['5257','rigid','Hộp quà kỷ niệm 30 năm','30th anniversary gift box',['5257']],
 ['5318','folding','Hộp giấy cửa sổ MP','MP window carton',['5318']],
 ['5329','bag','Túi giấy Levi’s','Levi’s paper bag',['5329']],
 ['5356','rigid','Hộp quà họa tiết rồng','Dragon-pattern gift box',['5356']],
 ['5312','folding','Hộp giấy Premium Durian','Premium Durian carton',['5312','5249']],
 ['5357','bag','Túi giấy GAP','GAP paper bag',['5357']],
 ['5282','rigid','Hộp quà 2024','2024 gift box',['5282']],
 ['5313','folding','Hộp giấy đồ họa số 6','Number 6 graphic carton',['5313']],
 ['5321','bag','Túi giấy Kim Hỷ','Kim Hỷ paper bag',['5321']],
 ['5363','rigid','Hộp quà màu cam','Orange gift box',['5363']]
];
const data=entries.map(([id,group,vi,en,images])=>({id:'032A'+id,group,vi,en,images:images.map(i=>'032A'+i)}));
await mkdir('dist/assets/products',{recursive:true});
for(const id of new Set(data.flatMap(p=>p.images))){const src=path.join(sourceDirectory,`${id}.JPG`);await sharp(src).rotate().resize({width:720,withoutEnlargement:true}).webp({quality:85}).toFile(`dist/assets/products/${id}.webp`);await sharp(src).rotate().resize({width:1800,withoutEnlargement:true}).webp({quality:91}).toFile(`dist/assets/products/${id}-large.webp`);}
await writeFile('dist/product-data.js','window.HOTPRINT_PRODUCTS = '+JSON.stringify(data,null,2)+';\n');
await writeFile('product-image-sources.json',JSON.stringify(data.map(p=>({...p,sourceFiles:p.images.map(id=>`HÌnh sản phẩm/${id}.JPG`),processing:'EXIF orientation, resize and WebP encoding only. No retouching, recoloring, background removal or generative edits.'})),null,2));
console.log(JSON.stringify({models:data.length,originalPhotos:new Set(data.flatMap(p=>p.images)).size}));
