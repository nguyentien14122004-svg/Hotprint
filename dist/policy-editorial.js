(()=>{
 const root=document.querySelector('.pl-page');if(!root)return;
 const links=[...root.querySelectorAll('.pv-toc a')],sections=links.map(a=>document.getElementById(a.hash.slice(1))).filter(Boolean);
 function update(){const line=(document.getElementById('site-header')?.getBoundingClientRect().bottom||88)+60;let active=sections[0];for(const section of sections)if(section.getBoundingClientRect().top<=line)active=section;for(const a of links){if(a.hash==='#'+active?.id)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')}}
 let pending=false;window.addEventListener('scroll',()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{update();pending=false})},{passive:true});update();
 function languageLinks(){document.querySelectorAll('[data-lang]').forEach(a=>{const url=new URL(a.href);url.hash=location.hash;a.href=url.href})}window.addEventListener('hashchange',languageLinks);languageLinks();
 if(location.hash==='#mau-va-lich'&&document.getElementById('lich-tu-van')){history.replaceState(null,'',location.pathname+location.search+'#lich-tu-van');document.getElementById('lich-tu-van').scrollIntoView();languageLinks()}
})();
