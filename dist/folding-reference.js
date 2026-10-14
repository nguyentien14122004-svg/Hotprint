// A manual carousel: no timer, no unsolicited motion, and no duplicate model data.
(() => {
 const section=document.querySelector('.fold-reference .fold-showcase');
 if(!section)return;
 const slides=[...section.querySelectorAll('[data-showcase-slide]')];
 let current=0;
 function show(index){
  current=(index+slides.length)%slides.length;
  slides.forEach((slide,i)=>{slide.hidden=i!==current;});
  const selected=slides[current];
  section.querySelectorAll('[data-showcase-quote],[data-showcase-sample]').forEach(button=>{button.dataset.model=selected.dataset.showcaseSlide;});
  section.querySelector('[data-showcase-status]').textContent=selected.querySelector('figcaption').textContent;
 }
 section.querySelectorAll('[data-showcase-step]').forEach(button=>button.addEventListener('click',()=>show(current+Number(button.dataset.showcaseStep))));
 section.addEventListener('keydown',event=>{
  if(!event.target.matches('[data-showcase-step]'))return;
  if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();show(current+(event.key==='ArrowLeft'?-1:1));}
 });
})();
