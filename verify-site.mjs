import {readdir,readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
const root=path.resolve('dist'),htmlFiles=[],cssFiles=[],issues=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())await walk(f);else if(e.name.endsWith('.html'))htmlFiles.push(f);else if(e.name.endsWith('.css'))cssFiles.push(f)}}
await walk(root);
const checked=new Set();
async function checkURL(raw,from){const url=raw.replaceAll('&amp;','&');if(!url.startsWith('/')||url.startsWith('//'))return;let filename;try{filename=path.resolve(root,'.'+decodeURIComponent(url.split(/[?#]/)[0]||'/'))}catch{issues.push(`${from}: invalid URL`);return}if(filename!==root&&!filename.startsWith(root+path.sep)){issues.push(`${from}: reference outside dist`);return}if(checked.has(filename))return;checked.add(filename);try{let info=await stat(filename);if(info.isDirectory()){filename=path.join(filename,'index.html');await stat(filename)}}catch{issues.push(`${path.relative(root,from)}: missing ${url}`)}}
for(const file of htmlFiles){const html=await readFile(file,'utf8');if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)issues.push(`${file}: expected one H1`);if(!/<html lang="(?:vi|en)"/.test(html))issues.push(`${file}: missing language`);if((html.match(/href="\/natural-theme\.css"/g)||[]).length!==1)issues.push(`${file}: theme missing/duplicated`);for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g))await checkURL(m[1],file);for(const m of html.matchAll(/srcset="([^"]+)"/g))for(const entry of m[1].split(','))await checkURL(entry.trim().split(/\s+/)[0],file)}
for(const file of cssFiles){const css=await readFile(file,'utf8');for(const m of css.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g))await checkURL(m[1],file)}
const products=JSON.parse((await readFile('dist/product-data.js','utf8')).replace(/^window\.HOTPRINT_PRODUCTS\s*=\s*/,'').trim().replace(/;$/,''));
for(const p of products)for(const id of p.images)for(const suffix of ['.webp','-large.webp'])await checkURL('/assets/products/'+id+suffix,'product-data.js');
for(const [name,expected]of [['hero-hotprint-v3.webp','CF37490E3863C4E2A9B0807C18F6D1DA1D112FDF4C4C791D567BC035AB44F85C'],['hero-hotprint-v3-small.webp','57CC6A6AA322B320812BCF7C8BCB012A7A73DB0CF52B924C7950802FAC7F6897']]){const actual=createHash('sha256').update(await readFile(path.join(root,'assets',name))).digest('hex').toUpperCase();if(actual!==expected)issues.push(`${name}: approved hero changed`)}
if(htmlFiles.length!==48)issues.push(`Expected 48 current pages, found ${htmlFiles.length}; update the inventory when adding pages.`);
if(issues.length){console.error(issues.join('\n'));process.exitCode=1}else console.log(JSON.stringify({passed:true,pages:htmlFiles.length,products:products.length,localReferences:checked.size,approvedHeroPreserved:true}));
