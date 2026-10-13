/* Ground-plane footprints traced in the coordinate system of the ORIGINAL photographs.
   This creates only decorative SVG shadows. It never reads or writes product bitmaps. */
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const feet={
 '032A5293':[[21.5,47.7],[40,18],[81.9,60],[63.5,92]],
 '032A5315':[[26.7,86.8],[71.4,41],[77.7,49.7],[33,95.5]],
 '032A5331':[[28,81],[56.2,47.4],[69.3,60.8],[41.1,94.4]],
 '032A5366':[[34.6,84],[57.9,50.8],[66.8,62.3],[43.5,95.5]],
 '032A5308':[[29.7,77.7],[58,42],[77.3,59.8],[48.6,95.1]],
 '032A5316':[[35.2,85],[60.9,65.8],[65.5,74.5],[39.8,93.7]],
 '032A5355':[[27.2,74.3],[49.9,39.7],[69.2,57.3],[46.4,91.8]],
 '032A5358':[[30.56,78.8],[63.3,42.4],[74.17,56.75],[41.44,93.17]],
 '032A5364':[[31.1,65.9],[60.8,43],[76.9,69.8],[47.2,96.4]],
 '032A5246':[[10,76.4],[12.4,40],[48.6,40],[48.6,76.25]],
 '032A5267':[[19,51],[48.6,30.1],[80.3,72.8],[50.7,93.7]],
 '032A5311':[[25,83],[70,45],[78,56],[33,94]],
 '032A5326':[[21.3,78.7],[66.4,42.7],[75.8,58.3],[30.7,94.3]],
 '032A5255':[[14,60],[88.5,60],[87,81.25],[15.4,81.7]],
 '032A5320':[[39.4,87.6],[60.8,63.7],[66.9,71.5],[45.5,95.4]],
 '032A5336':[[33.5,87],[58.5,54],[65,61],[40,94]],
 '032A5361':[[22.8,62.4],[60.6,25.4],[83.8,56.4],[46,93.4]],
 '032A5309':[[21.7,69.6],[28.5,59],[79,73.5],[72.2,84.1]],
 '032A5268':[[25.3,46.8],[45.9,22.8],[76.2,68.5],[55.6,92.5]],
 '032A5332':[[36,87],[59.5,70],[65.5,77],[42,94]],
 '032A5257':[[10.9,65],[90.1,65],[90.5,79.3],[10.7,79.6]],
 '032A5318':[[40,81],[55.3,69.1],[65.6,82.5],[50.3,94.4]],
 '032A5329':[[34.5,82],[60.3,58.5],[68.5,71],[42.7,94.5]],
 '032A5356':[[32.7,85.8],[64.8,57.9],[71.4,67.8],[39.3,95.8]],
 '032A5312':[[24.7,84],[63.8,51.6],[70.9,61.2],[31.8,93.6]],
 '032A5357':[[35.5,85],[60.5,57],[68.5,68],[43.5,96]],
 '032A5282':[[35.1,81.7],[39.4,76.6],[66.1,83.4],[61.8,88.5]],
 '032A5313':[[37.6,77.3],[59.7,62.3],[69,78.5],[46.9,93.5]],
 '032A5321':[[32.5,85],[61,49],[70,58],[41.5,94]],
 '032A5363':[[30.6,85],[68.6,51.3],[75.2,62],[37.2,95.7]]
};
const curved={
 '032A5339':'M17.2 88.7L20 72L40 60Q59 50 68 62Q68 74 58 82Q52 87 44 88Z',
 '032A5328':'M13.7 77.8L39.2 57Q55 54 71.5 62Q73 72 63 76L27.2 94.8Z',
 '032A5337':'M7 83.2L9.3 74L34.5 73.7Q29 70 28 64Q46 53 73 63Q80 63 75.6 68.8C72 80 57 86 36 86Z'
};
const flat=['032A5353','032A5323','032A5325'];
const low=new Set(['032A5293','032A5267','032A5255','032A5309','032A5268','032A5257','032A5361']);
const hull=points=>{const p=[...points].sort((a,b)=>a[0]-b[0]||a[1]-b[1]);const cross=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);const half=ps=>{const h=[];for(const v of ps){while(h.length>1&&cross(h.at(-2),h.at(-1),v)<=0)h.pop();h.push(v)}return h.slice(0,-1)};return [...half(p),...half([...p].reverse())]};
const polygon=pts=>`M${pts.map(p=>p.map(n=>n.toFixed(2)).join(' ')).join('L')}Z`;
mkdirSync('dist/assets/library-shadows',{recursive:true});
for(const id of [...Object.keys(feet),...Object.keys(curved),...flat]){
 let content;
 if(flat.includes(id)){
  const inner=readFileSync(`dist/assets/tag-masks/${id}.svg`,'utf8').replace(/^[\s\S]*?<svg[^>]*>/,'').replace(/<\/svg>[\s\S]*$/,'');
  content=`<defs><mask id="paper" maskUnits="userSpaceOnUse" x="0" y="0" width="1800" height="1200">${inner}</mask><filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6"/></filter></defs><g transform="scale(.05555556 .08333333)"><g transform="translate(13 14)" filter="url(#soft)"><path d="M0 0H1800V1200H0Z" mask="url(#paper)" fill="#483c2d" opacity=".22"/></g></g>`;
 }else{
  const path=curved[id]||polygon(feet[id]),dx=low.has(id)?3.7:7.5,dy=low.has(id)?2.4:4.5;
  const cast=feet[id]?polygon(hull([...feet[id],...feet[id].map(([x,y])=>[x+dx,y+dy])])):path;
  // Separate penumbra, directional cast and close contact; none follows the upper silhouette.
  content=`<defs><filter id="ambient" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.7"/></filter><filter id="cast" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.1"/></filter><filter id="contact" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation=".35"/></filter></defs><g fill="#514333"><path d="${path}" opacity=".18" filter="url(#ambient)" transform="translate(.5 .9)"/><path d="${cast}" opacity=".15" filter="url(#cast)" ${curved[id]?'transform="translate(2.3 1.8)"':''}/><path d="${path}" opacity=".3" filter="url(#contact)" transform="translate(.3 .45)"/></g>`;
  if(id==='032A5246')content+='<path d="M49 53L52 51L83 76L81.8 78Z" fill="#514333" opacity=".2" filter="url(#cast)"/>';
 }
 writeFileSync(`dist/assets/library-shadows/${id}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">${content}</svg>\n`);
}
console.log('36 independent ground shadows written; original photographs untouched.');
