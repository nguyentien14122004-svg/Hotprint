(() => {
 const root=document.querySelector('.ap-samples');if(!root)return;
 const cards=[...root.querySelectorAll('.ap-card')],dots=document.querySelector('#ap-dots'),status=document.querySelector('#ap-carousel-status');
 const lang=document.documentElement.lang.startsWith('zh')?'zh':document.documentElement.lang==='vi'?'vi':'en';
 const tr=(vi,en,zh)=>({vi,en,zh})[lang],mobile=matchMedia('(max-width:650px)');
 function languageLinks(){document.querySelectorAll('[data-lang]').forEach(a=>{const url=new URL(a.href);url.hash=location.hash;url.search=location.search;a.href=url.href})}
 window.addEventListener('hashchange',languageLinks);languageLinks();
 let perPage=mobile.matches?1:3,index=0;
 function render(){
  const pages=Math.ceil(cards.length/perPage);index=Math.min(index,pages-1);
  cards.forEach((card,i)=>card.hidden=Math.floor(i/perPage)!==index);
  [...dots.children].forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
  status.textContent=tr('Nhóm mẫu','Sample group','样品组')+' '+(index+1)+' / '+pages;
 }
 function rebuild(){const first=index*perPage;perPage=mobile.matches?1:3;index=Math.floor(first/perPage);dots.replaceChildren();for(let i=0;i<Math.ceil(cards.length/perPage);i++){const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',tr('Nhóm mẫu','Sample group','样品组')+' '+(i+1));b.onclick=()=>{index=i;render()};dots.append(b)}render()}
 document.querySelector('#ap-prev').onclick=()=>{index=(index-1+Math.ceil(cards.length/perPage))%Math.ceil(cards.length/perPage);render()};
 document.querySelector('#ap-next').onclick=()=>{index=(index+1)%Math.ceil(cards.length/perPage);render()};
 mobile.addEventListener('change',rebuild);rebuild();
})();
