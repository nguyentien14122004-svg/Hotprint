(() => {
 const samples=window.HOTPRINT_PRODUCTS.filter(p=>p.group===(document.body.dataset.productGroup||'folding'));
 const en=document.documentElement.lang!=='vi';
 const tr=(vi,english)=>en?(document.documentElement.lang.startsWith('zh')?HOTPRINT_I18N.translate(english):english):vi;
 const dialog=document.querySelector('#fold-detail');
 let selected=null,index=0;
 const photoURL=id=>`/assets/products/${id}-large.webp`;
 function renderPhoto(){
  const im=document.querySelector('#fold-detail-image');im.hidden=false;im.src=photoURL(selected.images[index]);im.alt=selected[document.documentElement.lang.startsWith('zh')?'zh':en?'en':'vi']+` — ${index+1}/${selected.images.length}`;
  document.querySelector('#fold-photo-count').textContent=`${index+1} / ${selected.images.length}`;
  for(const id of ['fold-photo-prev','fold-photo-next'])document.getElementById(id).disabled=selected.images.length===1;
  document.querySelector('#fold-original-link').href=im.src;
  const thumbs=document.querySelector('#fold-detail-thumbs');thumbs.replaceChildren();
  selected.images.forEach((id,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',tr('Góc ảnh ','View ')+(i+1));b.setAttribute('aria-pressed',String(i===index));const image=document.createElement('img');image.src=photoURL(id);image.alt='';image.width=120;image.height=80;b.append(image);b.onclick=()=>{index=i;renderPhoto();document.querySelectorAll('#fold-detail-thumbs button')[i].focus();};thumbs.append(b);});
 }
 document.addEventListener('click',event=>{
  const trigger=event.target.closest('[data-fold-detail]');if(!trigger)return;
  selected=samples.find(p=>p.id===trigger.dataset.foldDetail);if(!selected)return;
  index=0;document.querySelector('#fold-detail-title').textContent=selected[document.documentElement.lang.startsWith('zh')?'zh':en?'en':'vi'];document.querySelector('#fold-detail-reference').textContent=tr('Mã ảnh tham khảo: ','Photo reference: ')+selected.id;
  for(const id of ['fold-detail-quote','fold-detail-sample'])document.getElementById(id).dataset.model=selected.id;
  renderPhoto();openDialog(dialog,trigger);
 });
 document.querySelector('#fold-photo-prev').onclick=()=>{index=(index-1+selected.images.length)%selected.images.length;renderPhoto();};
 document.querySelector('#fold-photo-next').onclick=()=>{index=(index+1)%selected.images.length;renderPhoto();};
 const filters=[...document.querySelectorAll('[data-fold-filter]')];
 function applyFilter(use){
  if(!filters.some(b=>b.dataset.foldFilter===use))use='all';
  let count=0;document.querySelectorAll('.fold-sample').forEach(el=>{el.hidden=use!=='all'&&el.dataset.use!==use;if(!el.hidden)count++;});
  filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.foldFilter===use)));
  document.querySelector('#fold-result-count').textContent=`${count} ${tr('mẫu tham khảo','reference samples')}`;
 }
 filters.forEach(button=>button.onclick=()=>{const url=new URL(location.href);const value=button.dataset.foldFilter;if(value==='all')url.searchParams.delete('use');else url.searchParams.set('use',value);history.pushState(null,'',url);applyFilter(value);document.querySelectorAll('[data-lang]').forEach(a=>{const target=new URL(a.href);target.search=url.search;a.href=target;});});
 window.addEventListener('popstate',()=>applyFilter(new URL(location.href).searchParams.get('use')||'all'));
 applyFilter(new URL(location.href).searchParams.get('use')||'all');
 document.addEventListener('error',e=>{const im=e.target;if(im.tagName!=='IMG'||!im.closest('.fold-page,.fold-detail'))return;im.hidden=true;const parent=im.parentElement;if(!parent.querySelector('.fold-image-error')){const message=document.createElement('p');message.className='fold-image-error';message.textContent=tr('Ảnh chưa tải được. Vui lòng thử lại hoặc liên hệ HotPrint.','This photo could not load. Please retry or contact HotPrint.');parent.append(message);}},true);
})();
