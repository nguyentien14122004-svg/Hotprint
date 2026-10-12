(() => {
 const data=JSON.parse(document.getElementById('request-status-data').textContent),i=document.documentElement.lang==='vi'?0:1,type=new URLSearchParams(location.search).get('type'),entry=Object.hasOwn(data.types,type)?data.types[type]:null;
 const local=s=>document.documentElement.lang.startsWith('zh')?HOTPRINT_I18N.translate(s):s;
 // Only a known type is carried. Query parameters cannot establish receipt or expose a customer's brief.
 const url=new URL(location.href);url.search='';if(entry)url.searchParams.set('type',type);history.replaceState({},'',url.pathname+url.search+url.hash);
 if(entry){document.getElementById('rs-type').textContent=local(entry.labels[i]);document.getElementById('rs-state-title').textContent=local(data.copy.state[i]);document.getElementById('rs-context-note').textContent=local(data.copy.context[i]);const note=document.getElementById('rs-type-note');note.textContent=local(entry.notes[i]);note.hidden=false;document.getElementById('rs-form-links').hidden=true;const link=document.getElementById('rs-new-form');link.href=HOTPRINT_I18N.path(entry.paths[1],entry.paths[0]);link.hidden=false}
 document.querySelectorAll('[data-lang]').forEach(a=>a.href=HOTPRINT_I18N.path('/en/request-status/','/da-gui-yeu-cau/',a.dataset.lang)+url.search+url.hash);
})();
