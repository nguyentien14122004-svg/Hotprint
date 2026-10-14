/* Reproducible, non-generative compositing. Product colour/artwork is never retouched.
   Requires sharp for asset preparation only; not part of the website build. */
const fs=require('node:fs'), path=require('node:path'), sharp=require('sharp');
const W=1440,H=1080,dir='dist/assets/carton-studio-v3';
const data=JSON.parse(fs.readFileSync('dist/product-data.js','utf8').replace(/^window.HOTPRINT_PRODUCTS = /,'').replace(/;\s*$/,''));
const css=fs.readFileSync('dist/carton.css','utf8');
const old=['032A5366','032A5358','032A5326','032A5361'];
const local=['HP7107','HP7106'];
const svg=(body)=>Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${body}</svg>`);
function hull(points){points=points.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);const cross=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);let a=[],b=[];for(let p of points){while(a.length>1&&cross(a.at(-2),a.at(-1),p)<=0)a.pop();a.push(p);}for(let p of points.reverse()){while(b.length>1&&cross(b.at(-2),b.at(-1),p)<=0)b.pop();b.push(p);}return a.slice(0,-1).concat(b.slice(0,-1));}
function points(d){return [...d.matchAll(/([ML])\s*(-?[\d.]+)[ ,]+(-?[\d.]+)/g)].map(m=>[+m[2],+m[3]]);}
function polygon(p){return 'M'+p.map(v=>v.map(n=>n.toFixed(3)).join(' ')).join('L')+'Z';}
(async()=>{
 fs.mkdirSync(dir,{recursive:true});
 const bg=await sharp('dist/assets/carton-studio-empty-v3.webp').resize(W,H).png().toBuffer();
 let manifest=[];
 for(const p of data.filter(p=>p.group==='carton')){
  const source=local.includes(p.id)?`dist/assets/carton-photo-sources/${p.id}.webp`:`dist/assets/products/${p.id}-large.webp`;
  const meta=await sharp(source).metadata();let mw,mh,outline,floor;
  if(old.includes(p.id)){
   mw=1800;mh=1200;
   const fragment=css.match(new RegExp('\\.fold-photo\\[data-photo="'+p.id+'"\\]\\{--photo-clip:polygon\\(([^)]+)\\)'))[1];
   outline=polygon(fragment.split(',').map(v=>v.trim().split(/\s+/).map((n,i)=>parseFloat(n)*(i?mh:mw)/100)));
   const f=fs.readFileSync(`dist/assets/carton-shadows/${p.id}.svg`,'utf8').match(/<path d="([^"]+)"/)[1];
   floor=points(f).map(([x,y])=>[x*mw/100,y*mh/100]);
  }else{
   const mask=fs.readFileSync(local.includes(p.id)?`dist/assets/carton-masks/${p.id}.svg`:`dist/assets/official-masks/${p.id}.svg`,'utf8');
   const v=mask.match(/viewBox="0 0 (\d+) (\d+)"/);mw=+v[1];mh=+v[2];outline=mask.match(/\sd="([^"]+)"/)[1];
   const sh=fs.readFileSync(local.includes(p.id)?`dist/assets/carton-shadows/${p.id}.svg`:`dist/assets/library-shadows/${p.id}.svg`,'utf8');
   floor=points(sh.match(/<path d="([^"]+)"/)[1]);
  }
  // Correct physical notches, handle opening and source edge halos in the imported photographs.
  const precise={
   HP6406:'M134 267L371 188L402 200L487 177L525 247L580 268L579 316L648 457L643 506L391 630L175 502L171 450L265 416L237 366L137 316Z',
   HP6408:'M128 283L248 243Q247 219 273 214L312 210Q335 186 380 181Q450 178 503 185Q552 191 555 230L651 236Q659 238 660 246L655 508L530 632L138 584Z M374 212Q450 210 497 222L506 232L469 227Q432 214 374 212Z',
   HP6404:'M125 199L145 176L452 128L533 338L500 358L499 364L568 393Q568 411 590 419L595 405L671 439L663 551L377 681L217 566L212 451L174 339Q181 325 168 307L158 304Z M449 249C447 232 470 231 473 250C477 273 453 276 449 249Z'
  };
  if(precise[p.id]){floor=floor.map(([x,y])=>[x*800/mw,y*800/mh]);mw=mh=800;outline=precise[p.id];}
  if(p.id==='HP7106'){
   outline=outline.replace('L1266 838L1239 855L1045 978L816 1101L809 1104','L1261 825L1205 857L1123 905L1044 953L983 993L863 1076L810 1102');
   floor=[[520,833],[986,537],[1279,838],[813,1134]];
  }
  if(p.id==='HP6404')floor=[[217,566],[503,436],[663,551],[377,681]];
  if(p.id==='HP6408')floor=[[138,584],[263,460],[655,508],[530,632]];
  if(p.id==='HP6406')floor=[[175,502],[426,377],[643,506],[391,630]];
  const coordinates=outline.match(/-?[\d.]+/g).map(Number),pts=coordinates.reduce((a,n,i)=>{if(i%2===0)a.push([n,coordinates[i+1]]);return a;},[]),xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);
  const bounds={x:Math.min(...xs),y:Math.min(...ys),w:Math.max(...xs)-Math.min(...xs),h:Math.max(...ys)-Math.min(...ys)};
  const scale=Math.min(1000/bounds.w,760/bounds.h),left=Math.round(W/2-(bounds.x+bounds.w/2)*scale),top=Math.round(870-(bounds.y+bounds.h)*scale);
  const rw=Math.round(mw*scale),rh=Math.round(mh*scale);
  const mask=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${rw}" height="${rh}" viewBox="0 0 ${mw} ${mh}"><path d="${outline}" fill="white" fill-rule="evenodd" stroke="black" stroke-width="${mw/900}"/></svg>`);
  const alpha=await sharp(mask).flatten({background:'#000'}).greyscale().raw().toBuffer();
  const object=await sharp(source).resize(rw,rh,{fit:'fill'}).removeAlpha().joinChannel(alpha,{raw:{width:rw,height:rh,channels:1}}).png().toBuffer();
  const fp=floor.map(([x,y])=>[left+x*scale,top+y*scale]);
  const castLength=old.includes(p.id)||local.includes(p.id)?140:85;
  const cast=hull([...fp,...fp.map(([x,y])=>[x+castLength,y+castLength*.36])]);
  const shadow=svg(`<defs><filter id="far" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="20"/></filter><filter id="near" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8"/></filter><filter id="contact" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.6"/></filter></defs><path d="${polygon(cast)}" fill="#433b30" opacity=".24" filter="url(#far)"/><path d="${polygon(fp)}" fill="#433b30" opacity=".36" filter="url(#near)" transform="translate(5 4)"/><path d="${polygon(fp)}" fill="#38332c" stroke="#38332c" stroke-width="3" opacity=".66" filter="url(#contact)" transform="translate(1 1)"/>`);
  // Crop only transparent margins of resized source if the original canvas exceeds output.
  const trimLeft=Math.max(0,-left),trimTop=Math.max(0,-top),outLeft=Math.max(0,left),outTop=Math.max(0,top);
  const fitted=await sharp(object).extract({left:trimLeft,top:trimTop,width:Math.min(rw-trimLeft,W-outLeft),height:Math.min(rh-trimTop,H-outTop)}).png().toBuffer();
  await sharp(bg).composite([{input:shadow},{input:fitted,left:outLeft,top:outTop}]).webp({quality:94,effort:6}).toFile(`${dir}/${p.id}.webp`);
  manifest.push({id:p.id,source,width:W,height:H,productBounds:{left:left+bounds.x*scale,top:top+bounds.y*scale,width:bounds.w*scale,height:bounds.h*scale},shadow:'source-coordinate floor polygon, narrow contact, near occlusion, soft directional cast',productRetouch:false});
 }
 fs.writeFileSync(`${dir}/manifest.json`,JSON.stringify(manifest,null,2)+'\n');
 console.log('Prepared '+manifest.length+' carton photographs with registered product/contact/cast shadows.');
})();
