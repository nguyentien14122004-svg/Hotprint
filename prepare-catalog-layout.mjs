import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),sharp=require('sharp');
const products=JSON.parse(fs.readFileSync('dist/product-data.js','utf8').replace(/^window.HOTPRINT_PRODUCTS = /,'').replace(/;\s*$/,'')).filter(p=>p.group==='catalog');
const css=[],manifest=[];
fs.mkdirSync('dist/assets/catalog-shadows-v2',{recursive:true});
for(const p of products){
 const maskPath=`dist/assets/${p.officialId?'official-masks':'tag-masks'}/${p.id}.svg`,mask=fs.readFileSync(maskPath,'utf8');
 const size=mask.match(/viewBox="0 0 (\d+) (\d+)"/),w=+size[1],h=+size[2];
 const {data:raw,info}=await sharp(Buffer.from(mask)).resize(w,h).ensureAlpha().raw().toBuffer({resolveWithObject:true});
 let minx=w,miny=h,maxx=0,maxy=0;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(raw[(y*w+x)*info.channels+info.channels-1]>100){minx=Math.min(minx,x);miny=Math.min(miny,y);maxx=Math.max(maxx,x);maxy=Math.max(maxy,y)}
 // A shared 1000 x 900 stage: fit the real silhouette, retain source geometry and margins.
 const scale=Math.min(850/(maxx-minx),740/(maxy-miny)),iw=w*scale,ih=h*scale,left=500-(minx+maxx)/2*scale,top=820-maxy*scale;
 css.push(`.catalog-photo[data-photo="${p.id}"] .catalog-object{width:${iw/10}%;height:${ih/9}%;left:${left/10}%;top:${top/9}%}.catalog-photo[data-photo="${p.id}"] .catalog-source{mask:url('/assets/${p.officialId?'official-masks':'tag-masks'}/${p.id}.svg') 0 0/100% 100% no-repeat;mask-mode:luminance}`);
 fs.copyFileSync(`dist/assets/library-shadows/${p.id}.svg`,`dist/assets/catalog-shadows-v2/${p.id}.svg`);
 manifest.push({id:p.id,source:`dist/assets/products/${p.id}-large.webp`,mask:maskPath,width:w,height:h,bounds:{minx,miny,maxx,maxy},productRetouch:false});
}
fs.writeFileSync('dist/catalog-photo-placement.css',css.join('\n')+'\n');
fs.writeFileSync('catalog-photo-layout.json',JSON.stringify(manifest,null,2)+'\n');
