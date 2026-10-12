import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
const config=JSON.parse(await readFile('vercel.json','utf8'));
assert.equal(config.framework,null,'Vercel must deploy this as Other/static');
assert.equal(config.buildCommand,'npm run build');
assert.equal(config.outputDirectory,'dist');
assert.equal(config.trailingSlash,true);
assert.ok(!config.builds&&!config.functions&&!config.rewrites,'No server function or blanket rewrite is needed');
await import('./verify-site.mjs');
if(process.exitCode)process.exit(process.exitCode);
const root=path.resolve(config.outputDirectory),files=new Set();
async function walk(dir){for(const item of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())await walk(file);else files.add(path.relative(root,file).split(path.sep).join('/'))}}
await walk(root);
// Windows tolerates wrong case; production Linux/CDN paths must match exactly.
for(const name of files){if(!/\.(html|css)$/.test(name))continue;const contents=await readFile(path.join(root,name),'utf8');const references=name.endsWith('.html')?[...contents.matchAll(/(?:src|href)="(\/[^"?#]+)(?:[?#][^"]*)?"/g)].map(m=>m[1]):[...contents.matchAll(/url\(['"]?(\/[^)'"?#]+)['"]?\)/g)].map(m=>m[1]);for(let url of references){if(url.startsWith('//'))continue;url=decodeURIComponent(url.slice(1));if(!url||url.endsWith('/'))url+='index.html';if(!files.has(url)){const info=await stat(path.join(root,url));assert.ok(info.isDirectory()&&files.has(url+'/index.html'),`Missing or incorrectly cased deployment path: ${url} in ${name}`)}}}
assert.ok(files.has('index.html'));
assert.ok(![...files].some(n=>/^(?:\.git|\.codex|\.openai|node_modules)\//.test(n)));
console.log(JSON.stringify({passed:true,framework:'Other',outputDirectory:config.outputDirectory,staticFiles:files.size,caseSensitiveReferences:true}));
