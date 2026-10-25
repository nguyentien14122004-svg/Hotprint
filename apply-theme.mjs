import{readdir,readFile,writeFile}from'node:fs/promises';
async function apply(directory){for(const entry of await readdir(directory,{withFileTypes:true})){const file=directory+'/'+entry.name;if(entry.isDirectory())await apply(file);else if(entry.name.endsWith('.html')){let html=await readFile(file,'utf8');html=html.replace(/[ \t]*<link rel="stylesheet" href="\/natural-theme\.css">\s*/g,'').replace('</head>','  <link rel="stylesheet" href="/natural-theme.css">\n</head>').replace(/<meta name="theme-color"[^>]*>/,'<meta name="theme-color" content="#5E7D5A">');await writeFile(file,html.replace(/^[ \t]+(?=\r?$)/gm,''));}}}
await apply('dist');
async function applyLanguageStyles(directory){for(const e of await readdir(directory,{withFileTypes:true})){const file=directory+'/'+e.name;if(e.isDirectory())await applyLanguageStyles(file);else if(e.name.endsWith('.html')){let html=await readFile(file,'utf8');html=html.replace(/[ \t]*<link rel="stylesheet" href="\/chinese\.css">\s*/g,'').replace('</head>','  <link rel="stylesheet" href="/chinese.css">\n</head>');await writeFile(file,html);}}}
await applyLanguageStyles('dist');
async function applyEditorialHeadings(directory){for(const entry of await readdir(directory,{withFileTypes:true})){const file=directory+'/'+entry.name;if(entry.isDirectory())await applyEditorialHeadings(file);else if(entry.name.endsWith('.html')){let html=await readFile(file,'utf8');html=html.replace(/[ \t]*<link rel="stylesheet" href="\/editorial-headings\.css">\s*/g,'').replace('</head>','  <link rel="stylesheet" href="/editorial-headings.css">\n</head>');await writeFile(file,html);}}}
await applyEditorialHeadings('dist');console.log('Natural Green / Warm Beige / Earthy Brown and language styles applied to all routes.');

async function applyReadingStyles(directory){for(const e of await readdir(directory,{withFileTypes:true})){const file=directory+'/'+e.name;if(e.isDirectory())await applyReadingStyles(file);else if(e.name.endsWith('.html')){let html=await readFile(file,'utf8');html=html.replace(/<link rel="stylesheet" href="\/editorial-content\.css">\s*/g,'').replace('</head>','<link rel="stylesheet" href="/editorial-content.css">\n</head>');await writeFile(file,html);}}}
await applyReadingStyles('dist');

async function applySharedHeader(directory){for(const e of await readdir(directory,{withFileTypes:true})){const file=directory+'/'+e.name;if(e.isDirectory())await applySharedHeader(file);else if(e.name.endsWith('.html')){let html=await readFile(file,'utf8');html=html.replace(/<link rel="stylesheet" href="\/shared-header\.css">\s*/g,'').replace('</head>','<link rel="stylesheet" href="/shared-header.css">\n</head>');await writeFile(file,html);}}}
await applySharedHeader('dist');
async function applySharedFooter(directory){for(const e of await readdir(directory,{withFileTypes:true})){const file=directory+'/'+e.name;if(e.isDirectory())await applySharedFooter(file);else if(e.name.endsWith('.html')){let html=await readFile(file,'utf8');html=html.replace(/<link rel="stylesheet" href="\/shared-footer\.css">\s*/g,'').replace('</head>','<link rel="stylesheet" href="/shared-footer.css">\n</head>');await writeFile(file,html);}}}
await applySharedFooter('dist');

// Company-profile presentation only; all authored content and shared chrome stay intact.
for(const route of ['nha-may','en/factory','zh/factory']){
 const file=`dist/${route}/index.html`;
 let html=await readFile(file,'utf8');
 html=html.replace(/<link rel="stylesheet" href="\/factory-editorial\.css">\s*/g,'');
 await writeFile(file,html.replace('</head>','<link rel="stylesheet" href="/factory-editorial.css">\n</head>'));
}
