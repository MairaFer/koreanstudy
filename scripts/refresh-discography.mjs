import fs from 'node:fs';
const root='work/catalog-sources/';fs.mkdirSync(root,{recursive:true});
const artists=[['BTS',883131348],['RM',1439549457],['Jin',1191850724],['SUGA',1633387333],['SUGA',80159541],['j-hope',1354883995],['Jimin',1620160561],['V',1191852113],['Jung Kook',785052275]];
const output=[];
const wait=()=>new Promise(r=>setTimeout(r,3500));
async function get(url,file){if(fs.existsSync(file))return JSON.parse(fs.readFileSync(file));let r=await fetch(url);if(!r.ok)throw Error(r.status);const j=await r.json();fs.writeFileSync(file,JSON.stringify(j));await wait();return j}
const japanese=/japanese|japan edition|wake up|youth|face yourself|the journey|bts, the best|lights\s*\/\s*boy|for you|film out|crystal snow|blood sweat & tears - single|fake love\s*\/\s*airplane|防弾/i;
for(const [artist,id] of artists){
 const data=await get('https://itunes.apple.com/lookup?id='+id+'&entity=album&limit=200&country=US',root+'artist-'+id+'.json');
 const albums=data.results.filter(x=>x.wrapperType==='collection'&&!/Alternate Cover/.test(x.collectionName)&&!(artist==='BTS'&&japanese.test(x.collectionName)));
 console.log(artist+': '+albums.length+' releases');
 for(let i=0;i<albums.length;i+=5){
 const batch=albums.slice(i,i+5);const data=await get('https://itunes.apple.com/lookup?id='+batch.map(x=>x.collectionId).join(',')+'&entity=song&limit=200&country=US',root+'us-'+id+'-'+i+'.json');
 for(const a of batch){const tracks=data.results.filter(t=>t.wrapperType==='track'&&t.collectionId===a.collectionId&&!/japanese ver/i.test(t.trackName));if(!tracks.length){console.log('Unavailable: '+a.collectionName);continue}
 output.push({artist,id:String(a.collectionId),title:a.collectionName,date:a.releaseDate.slice(0,10),url:a.collectionViewUrl,artwork:a.artworkUrl100,tracks:tracks.map(t=>({id:String(t.trackId),title:t.trackName,disc:t.discNumber,number:t.trackNumber,url:t.trackViewUrl||a.collectionViewUrl,artist:t.artistName}))});}
 }
 fs.writeFileSync('lib/discography.json',JSON.stringify(output.sort((a,b)=>b.date.localeCompare(a.date)),null,2)+'\n');
}
const seen=new Set();const unique=output.sort((a,b)=>b.date.localeCompare(a.date)||b.tracks.length-a.tracks.length).filter(a=>{const key=a.artist+'|'+a.title.toLowerCase()+'|'+a.tracks.map(t=>t.title.toLowerCase()).join('|');if(seen.has(key))return false;seen.add(key);return true});
fs.writeFileSync('lib/discography.json',JSON.stringify(unique,null,2)+'\n');console.log(unique.length+' releases, '+unique.reduce((n,a)=>n+a.tracks.length,0)+' tracks');
