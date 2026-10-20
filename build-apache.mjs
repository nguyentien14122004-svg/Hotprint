import {readFile,writeFile} from 'node:fs/promises';
const config=JSON.parse(await readFile('vercel.json','utf8'));
const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const lines=['DirectoryIndex index.html','ErrorDocument 404 /404.html','<IfModule mod_rewrite.c>','RewriteEngine On','RewriteCond %{HTTP_HOST} ^www\\.hotprint\\.vn$ [NC]','RewriteRule ^ https://hotprint.vn%{REQUEST_URI} [R=301,L,NE]'];
for(const r of config.redirects){
 if(r.has?.some(t=>t.type==='query'&&t.key==='s')){lines.push('RewriteCond %{QUERY_STRING} (^|&)post_type=product(&|$) [NC]','RewriteCond %{QUERY_STRING} (^|&)s=([^&]+)','RewriteRule ^$ /san-pham/?q=%2 [R=301,L,NE]');continue;}
 if(r.has?.length){for(const t of r.has)lines.push('RewriteCond %{QUERY_STRING} (^|&)'+escape(t.key)+'='+escape(t.value)+'(&|$)');lines.push('RewriteRule ^$ '+r.destination+'? [R=301,L,NE]');}
 else lines.push('RewriteRule ^'+escape(r.source.replace(/^\/|\/$/g,''))+'/?$ '+r.destination+' [R=301,L,NE]');
}
lines.push('</IfModule>','<IfModule mod_setenvif.c>','SetEnvIfNoCase Host "^(www\\.)?hotprint\\.vn(:[0-9]+)?$" hotprint_company=1','<IfModule mod_headers.c>','Header always set X-Robots-Tag "noindex, nofollow" env=!hotprint_company','Header always set X-Content-Type-Options "nosniff"','</IfModule>','</IfModule>');
await writeFile('dist/.htaccess',lines.join('\n')+'\n');
console.log('Apache/LiteSpeed static routing generated; actual hosting configuration still requires validation.');
