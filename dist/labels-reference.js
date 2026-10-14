(() => {
const root=document.querySelector('[data-label-library]');if(!root)return;
const lang=document.documentElement.lang.startsWith('zh')?'zh':document.documentElement.lang==='vi'?'vi':'en';const tr=(vi,en,zh)=>({vi,en,zh})[lang];
const cards=[...root.querySelectorAll('.label-card')],buttons=[...root.querySelectorAll('[data-label-filter]')],allowed=new Set(buttons.map(b=>b.dataset.labelFilter));
const read=()=>{const u=new URL(location.href).searchParams.get('use');return allowed.has(u)?u:'all'};let filter=read();
function links(){document.querySelectorAll('[data-lang]').forEach(a=>{const u=new URL(a.href);u.search=location.search;u.hash=location.hash;a.href=u.href})}
function render(){let n=0;cards.forEach(c=>{c.hidden=filter!=='all'&&c.dataset.use!==filter;if(!c.hidden)n++});buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.labelFilter===filter)));document.querySelector('#fold-result-count').textContent=n+' '+tr('mẫu nhãn','label samples','款标签');links()}
buttons.forEach(b=>b.onclick=()=>{filter=b.dataset.labelFilter;const u=new URL(location.href);filter==='all'?u.searchParams.delete('use'):u.searchParams.set('use',filter);history.pushState(null,'',u);render()});window.addEventListener('popstate',()=>{filter=read();render()});window.addEventListener('hashchange',links);render();
const ids=['032A5328','032A5339','032A5337'];let slide=0;
function show(i){slide=(i+ids.length)%ids.length;document.querySelectorAll('[data-label-panel]').forEach(p=>p.hidden=Number(p.dataset.labelPanel)!==slide);document.querySelectorAll('[data-label-slide]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.labelSlide)===slide)));const p=window.HOTPRINT_PRODUCTS.find(p=>p.id===ids[slide]),name=p[lang]||(lang==='zh'?window.HOTPRINT_I18N.translate(p.en):p.en);document.querySelector('#label-slide-name').textContent=name;document.querySelector('#label-slide-open').dataset.foldDetail=p.id;document.querySelector('.label-real [data-request=sample]').dataset.model=p.id;document.querySelector('#label-slide-status').textContent=`${slide+1} / ${ids.length}: ${name}`;}
document.querySelector('#label-slide-prev').onclick=()=>show(slide-1);document.querySelector('#label-slide-next').onclick=()=>show(slide+1);document.querySelectorAll('[data-label-slide]').forEach(b=>b.onclick=()=>show(Number(b.dataset.labelSlide)));show(0);
})();
