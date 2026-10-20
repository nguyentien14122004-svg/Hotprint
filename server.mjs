import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {resolveRedirect} from './migration-routing.mjs';
const config=JSON.parse(await readFile(new URL('./vercel.json',import.meta.url),'utf8'));
const root=path.resolve(fileURLToPath(new URL('./dist/',import.meta.url)));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.pdf':'application/pdf','.svg':'image/svg+xml','.woff2':'font/woff2','.ttf':'font/ttf'};
const server=http.createServer(async(req,res)=>{try{
  const requestURL=new URL(req.url,'http://'+(req.headers.host||'localhost'));
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});return res.end();}
  if(!['hotprint.vn','www.hotprint.vn'].includes(requestURL.hostname))res.setHeader('X-Robots-Tag','noindex, nofollow');
  const redirect=resolveRedirect(config,requestURL);if(redirect){res.writeHead(redirect.status,{'Location':redirect.location});return res.end();}
  const pathname=decodeURIComponent(requestURL.pathname);
  let target=path.resolve(root,'.'+pathname);
  if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
  const info=await stat(target);if(info.isDirectory())target=path.join(target,'index.html');
  const body=await readFile(target);res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:body);
}catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8','X-Robots-Tag':'noindex, follow'});try{res.end(req.method==='HEAD'?undefined:await readFile(path.join(root,'404.html')))}catch{res.end('Không tìm thấy trang / Page not found')}}});
const port=Number(process.env.PORT)||4174;
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
