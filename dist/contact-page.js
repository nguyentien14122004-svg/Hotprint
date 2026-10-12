document.querySelectorAll('[data-contact-copy]').forEach(button=>button.addEventListener('click',async()=>{
 const lang=document.documentElement.lang,container=button.closest('.cp-copy'),status=container.querySelector('.cp-copy-status'),fallback=container.querySelector('.cp-copy-fallback');
 fallback.hidden=true;
 try{await navigator.clipboard.writeText(button.dataset.contactCopy);status.textContent=lang==='vi'?'Đã sao chép.':lang.startsWith('zh')?'已复制。':'Copied.';}
 catch{status.textContent=lang==='vi'?'Chọn và sao chép nội dung bên dưới.':lang.startsWith('zh')?'请选择并复制下面的内容。':'Select and copy the text below.';fallback.value=button.dataset.contactCopy;fallback.hidden=false;fallback.focus();fallback.select();}
}));
