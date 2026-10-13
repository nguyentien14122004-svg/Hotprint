// Shared catalog rendering keeps imported items in every matching category.
export function completeUses(products,uses){
 for(const p of products){
  if(p.id==='032A5316'&&p.group==='rigid')(uses.gift??=[]).push(p.id);
  if(p.use)(uses[p.use]??=[]).push(p.id);
 }
 for(const p of products)if(!Object.values(uses).some(ids=>ids.includes(p.id)))throw Error('Unclassified product '+p.id);
 return uses;
}
export function extraUseLabels(products,tr){
 const labels={health:['Y tế & dược phẩm','Health & pharmaceutical'],food:['Bao bì thực phẩm','Food packaging'],other:['Cấu trúc khác','Other structures']};
 return Object.fromEntries(Object.entries(labels).filter(([key])=>products.some(p=>p.use===key)).map(([key,text])=>[key,tr(...text)]));
}
export function officialScene(product){
 return `<span class="official-stage" data-official="${product.id}"><span class="official-placement"><img class="official-ground" src="/assets/library-shadows/${product.id}.svg" alt="" aria-hidden="true" loading="lazy"><img class="official-product" src="/assets/products/${product.id}-large.webp" width="${product.imageWidth}" height="${product.imageHeight}" alt="" loading="lazy"></span></span>`;
}
