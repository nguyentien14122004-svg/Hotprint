(() => {
 const data=JSON.parse(document.getElementById('request-status-data').textContent),i=document.documentElement.lang==='en'?1:0,type=new URLSearchParams(location.search).get('type'),entry=Object.hasOwn(data.types,type)?data.types[type]:null;
 // Only a known type is carried. Query parameters cannot establish receipt or expose a customer's brief.
 const url=new URL(location.href);url.search='';if(entry)url.searchParams.set('type',type);history.replaceState({},'',url.pathname+url.search+url.hash);
 if(entry){document.getElementById('rs-type').textContent=entry.labels[i];document.getElementById('rs-state-title').textContent=data.copy.state[i];document.getElementById('rs-context-note').textContent=data.copy.context[i];const note=document.getElementById('rs-type-note');note.textContent=entry.notes[i];note.hidden=false;document.getElementById('rs-form-links').hidden=true;const link=document.getElementById('rs-new-form');link.href=entry.paths[i];link.hidden=false}
 document.querySelectorAll('[data-lang]').forEach(a=>a.href=(a.dataset.lang==='en'?'/en/request-status/':'/da-gui-yeu-cau/')+url.search+url.hash);
})();
