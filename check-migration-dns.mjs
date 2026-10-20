import dns from 'node:dns/promises';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const queries=[['hotprint.vn','A'],['www.hotprint.vn','CNAME'],['hotprint.vn','NS'],['hotprint.vn','MX'],['hotprint.vn','TXT'],['_dmarc.hotprint.vn','TXT']];
const records={};for(const [name,type]of queries){try{records[name+'/'+type]=await dns.resolve(name,type)}catch(e){records[name+'/'+type]={error:e.code}}}
const snapshot={checkedAt:new Date().toISOString(),domain:'hotprint.vn',records,dkim:'Unknown selector/zone; must be confirmed from domain administration or an actual email header before changing nameservers.',webCutoverApplied:false};
if(process.argv.includes('--record')){await mkdir('migration',{recursive:true});await writeFile('migration/dns-baseline.json',JSON.stringify(snapshot,null,2)+'\n');console.log('Recorded public DNS baseline; no DNS writes.');}
else{
 const baseline=JSON.parse(await readFile('migration/dns-baseline.json','utf8'));
 const normalized=x=>JSON.stringify(Array.isArray(x)?x.map(v=>JSON.stringify(v)).sort():x);
 const changes=queries.map(([n,t])=>n+'/'+t).filter(key=>normalized(records[key])!==normalized(baseline.records[key]));
 const emailChanges=changes.filter(key=>!key.endsWith('/A')&&!key.endsWith('/CNAME'));
 const result={...snapshot,passed:emailChanges.length===0&&(process.argv.includes('--allow-web-change')||changes.length===0),changes,emailRecordsMatchBaseline:emailChanges.length===0,mailDeliveryVerified:false,fullDnsZoneVerified:false};
 await mkdir('qa',{recursive:true});await writeFile('qa/migration-dns-report.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));if(!result.passed)process.exitCode=1;
}
