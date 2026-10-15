(() => {
 const lang=document.documentElement.lang,zh=lang.startsWith('zh'),vi=lang==='vi';
 const tr=(v,e,z)=>vi?v:zh?z:e;
 const checks=[...document.querySelectorAll('.kd-checks input')],count=document.querySelector('.kd-check-count'),status=document.querySelector('.kd-copy-status');
 function update(){count.textContent=tr('Đã chuẩn bị','Prepared','已准备')+' '+checks.filter(c=>c.checked).length+' / '+checks.length;status.textContent='';}
 checks.forEach(c=>c.addEventListener('change',update));update();
 document.querySelector('[data-copy-checklist]').addEventListener('click',async()=>{
  const lines=checks.filter(c=>c.checked).map(c=>'• '+c.nextElementSibling.textContent);
  if(!lines.length){status.textContent=tr('Chọn các mục bạn đã chuẩn bị trước khi sao chép.','Select the items you have prepared before copying.','请先选择已准备的项目，再复制。');return;}
  try{await navigator.clipboard.writeText(document.querySelector('h1').textContent+'\n\n'+lines.join('\n'));status.textContent=tr('Đã sao chép ghi chú.','Notes copied.','笔记已复制。');}
  catch{status.textContent=tr('Chưa sao chép được. Bạn có thể chọn và sao chép các dòng bên trên.','Copy is unavailable. You can select and copy the notes above.','暂时无法复制。您可以选中并复制上方文字。');}
 });
 const links=[...document.querySelectorAll('.ka-toc a')],parts=[...document.querySelectorAll('.ka-part')];
 const progress=document.querySelector('.kd-reading-progress span');
 let queued=false;
 function sync(){queued=false;const top=window.scrollY,prose=document.querySelector('.ka-prose'),start=prose.getBoundingClientRect().top+top-120,end=start+prose.offsetHeight-window.innerHeight+120;progress.style.transform=`scaleX(${Math.max(0,Math.min(1,(top-start)/Math.max(1,end-start)))})`;let current=parts[0];for(const part of parts)if(part.getBoundingClientRect().top<=160)current=part;links.forEach(l=>{if(l.hash==='#'+current.id)l.setAttribute('aria-current','location');else l.removeAttribute('aria-current');});}
 function schedule(){if(!queued){queued=true;requestAnimationFrame(sync);}}addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);sync();
})();
