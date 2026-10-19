(() => {
 const dialog=document.getElementById('factory-journal-dialog');if(!dialog)return;
 document.querySelectorAll('[data-journal-photo]').forEach(button=>button.addEventListener('click',()=>{
  const id=button.dataset.journalPhoto;if(!['prepress','automation','diecut','inspection'].includes(id))return;
  const title=document.documentElement.lang.startsWith('zh')?HOTPRINT_I18N.translate(button.dataset.caption):button.dataset.caption;
  const image=document.getElementById('fj-dialog-image');image.src='/assets/factory-journal/'+id+'.webp';image.alt=title;
  document.getElementById('fj-dialog-title').textContent=title;document.getElementById('fj-dialog-original').href='/assets/factory-journal/'+id+'-original.webp';openDialog(dialog,button);
 }));
})();
