import {readFile,writeFile,mkdir} from 'node:fs/promises';
const html=await readFile('dist/index.html','utf8');
await mkdir('dist/en',{recursive:true});
await writeFile('dist/en/index.html',html.replace('<html lang="vi">','<html lang="en">').replace('<title>HotPrint — Ý tưởng phẳng. Ấn tượng đa chiều.</title>','<title>HotPrint — From flat ideas. To lasting impressions.</title>'));
console.log('Vietnamese and English entry points ready.');
