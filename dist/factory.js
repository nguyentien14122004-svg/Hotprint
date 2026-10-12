(() => {
 const tabs=[...document.querySelectorAll('.fp-tabs [role=tab]')];
 function selectTab(tab){tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});}
 tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();selectTab(tabs[next]);tabs[next].focus();}});});
 const photos=JSON.parse(document.getElementById('factory-gallery-data').textContent),dialog=document.getElementById('factory-gallery');
 let index=0;
 function showPhoto(value){index=(value+photos.length)%photos.length;const photo=photos[index],image=document.getElementById('factory-photo-image');image.src='/assets/factory/'+photo.id+'-large.webp';image.alt=(document.documentElement.lang.startsWith('zh')?HOTPRINT_I18N.translate(photo.caption):photo.caption);document.getElementById('factory-photo-title').textContent=(document.documentElement.lang.startsWith('zh')?HOTPRINT_I18N.translate(photo.caption):photo.caption);document.getElementById('factory-photo-count').textContent=`${index+1} / ${photos.length}`;document.getElementById('factory-original').href=image.src;document.querySelectorAll('[data-factory-thumb]').forEach((t,i)=>t.setAttribute('aria-current',String(i===index)));}
 document.querySelectorAll('[data-factory-photo]').forEach(button=>button.addEventListener('click',()=>{showPhoto(Number(button.dataset.factoryPhoto));openDialog(dialog,button);}));
 document.querySelectorAll('[data-factory-thumb]').forEach(button=>button.addEventListener('click',()=>showPhoto(Number(button.dataset.factoryThumb))));
 document.getElementById('factory-photo-prev').addEventListener('click',()=>showPhoto(index-1));document.getElementById('factory-photo-next').addEventListener('click',()=>showPhoto(index+1));
 dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();showPhoto(index+(e.key==='ArrowRight'?1:-1));}});
 document.querySelectorAll('[data-factory]').forEach(link=>link.setAttribute('aria-current','page'));
})();
