import {readFile, writeFile} from 'node:fs/promises';
const registry=JSON.parse(await readFile('home-partners-data.json','utf8'));
export const partnerLogos=registry.records.filter(r=>r.kind==='logo'&&r.status==='verified').sort((a,b)=>a.displayPriority-b.displayPriority);
if(!partnerLogos.length)throw Error('No verified standalone partner logos');
export const partnerCopy={
  vi:{title:'Khách hàng & đối tác',previous:'Các thương hiệu trước',next:'Các thương hiệu tiếp theo',list:'Các thương hiệu trên bao bì và ấn phẩm HotPrint'},
  en:{title:'Clients & partners',previous:'Previous brands',next:'Next brands',list:'Brands featured on HotPrint packaging and printed materials'},
  zh:{title:'客户与合作伙伴',previous:'前面的品牌',next:'后面的品牌',list:'HotPrint 包装与印刷品上的品牌'}
};
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
function logoGroup(copy,clone=false){
  return `<ul class="partners-group"${clone?' aria-hidden="true" inert':` aria-label="${escape(copy.list)}"`}>${partnerLogos.map(logo=>`<li class="partners-logo" data-partner="${logo.id}"><img class="partners-mark ${(logo.size||'wide').split(' ').map(x=>'partners-mark--'+x).join(' ')}" src="/assets/partners/${logo.file}" alt="${clone?'':escape(logo.name)}" width="230" height="110" loading="lazy" decoding="async" draggable="false"></li>`).join('')}</ul>`;
}
export function renderHomePartners(lang){
  const c=partnerCopy[lang];
  return `<!-- hotprint-partners:start -->
    <link rel="stylesheet" href="/home-partners.css">
    <section class="home-partners" id="doi-tac" aria-labelledby="partners-title" data-running="false">
      <div class="partners-heading page-width"><h2 id="partners-title" data-partner-copy="title">${c.title}</h2></div>
      <div class="partners-carousel page-width">
        <button class="partners-step" data-partner-step="-1" type="button" aria-label="${c.previous}" hidden><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12 4-6 6 6 6"/></svg></button>
        <div class="partners-ribbons" id="partners-ribbon" tabindex="0" role="region" aria-label="${c.list}"><div class="partners-track">${logoGroup(c,true)}${logoGroup(c)}${logoGroup(c,true)}</div></div>
        <button class="partners-step" data-partner-step="1" type="button" aria-label="${c.next}" hidden><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 4 6 6-6 6"/></svg></button>
      </div>
      <script type="application/json" id="partners-copy">${JSON.stringify(partnerCopy).replaceAll('<','\\u003c')}</script>
    </section>
    <script src="/home-partners.js" defer></script>
    <!-- hotprint-partners:end -->`;
}
for(const [file,lang] of [['dist/index.html','vi'],['dist/en/index.html','en'],['dist/zh/index.html','zh']]){
  let html=await readFile(file,'utf8');
  html=html.replace(/\s*<!-- hotprint-partners:start -->[\s\S]*?<!-- hotprint-partners:end -->/g,'');
  const target='    <section class="contact-section connection-studio connection-reference"';
  if(!html.includes(target))throw Error('Missing homepage contact anchor: '+file);
  await writeFile(file,html.replace(target,'    '+renderHomePartners(lang)+'\n\n'+target));
}
console.log(`Homepage partners: ${partnerLogos.length} verified standalone logos, one horizontal row, VI/EN/ZH.`);

