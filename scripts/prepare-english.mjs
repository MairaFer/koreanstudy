// One-time editorial source preparation. The deployed site never calls a translation service.
import fs from 'node:fs';
const source=JSON.parse(fs.readFileSync('locales/source.json','utf8'));
const target='locales/en.json';const done=fs.existsSync(target)?JSON.parse(fs.readFileSync(target,'utf8')):{};
const korean=/[\u1100-\u11ff\u3130-\u318f\uac00-\ud7af]+/gu;
const pending=source.filter(s=>!Object.hasOwn(done,s));
let completed=0;
const batches=[];let batch=[],size=0;
for(const s of pending){if(size+s.length>3200&&batch.length){batches.push(batch);batch=[];size=0;}batch.push(s);size+=s.length+30;}if(batch.length)batches.push(batch);
const pause=ms=>new Promise(r=>setTimeout(r,ms));
async function translate(items){
 const ko=[];
 const protect=s=>s.replace(korean,k=>{const i=ko.push(k)-1;return 'KZQ'+i+'QZK';});
 const q=items.map((s,i)=>'IXQ'+i+'QXI '+protect(s)).join('\n');
 const url=new URL('https://translate.googleapis.com/translate_a/single');url.search=new URLSearchParams({client:'gtx',sl:'pt',tl:'en',dt:'t',q});
 const r=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!r.ok)throw Error('Translation HTTP '+r.status);
 const data=await r.json();const text=data[0].map(s=>s[0]).join('');
 const markers=[...text.matchAll(/IXQ\s*(\d+)\s*QXI/gi)];if(markers.length!==items.length)throw Error('Batch boundaries changed');
 return items.map((s,i)=>{
  let translated=text.slice(markers[i].index+markers[i][0].length,markers[i+1]?.index??text.length).trim();
  translated=translated.replace(/KZQ\s*(\d+)\s*QZK/gi,(_,n)=>ko[Number(n)]??'');
  if(!translated.trim())throw Error('Empty translation');
  if(/KZQ|QZK|IXQ|QXI/.test(translated))throw Error('Protected token changed');
  const before=s.match(korean)||[],after=translated.match(korean)||[];
  if(before.join('|')!==after.join('|'))throw Error('Korean changed');
  // Use clause, not the homonym prayer, when discussing syntax.
  if(/oração|orações/i.test(s)&&!/orar|Deus|oração religiosa|prece|기도/.test(s))translated=translated.replace(/\bprayers\b/gi,'clauses').replace(/\bprayer\b/gi,'clause');
  if(/sujeito/.test(s))translated=translated.replace(/\bguy\b/gi,'subject');
  return translated;
 });
}
function save(){fs.writeFileSync(target,JSON.stringify(Object.fromEntries(Object.entries(done).sort(([a],[b])=>a.localeCompare(b))),null,2)+'\n');}
let cursor=0,failed=[];
async function worker(){while(cursor<batches.length){const b=batches[cursor++];let values;
 for(let attempt=0;attempt<4;attempt++){try{values=await translate(b);break;}catch{await pause(900*(attempt+1));}}
 if(!values){for(const item of b){try{const [v]=await translate([item]);done[item]=v;completed++;}catch{failed.push(item);}}}else{b.forEach((s,i)=>done[s]=values[i]);completed+=b.length;}
 save();if(completed%100< b.length)console.log('English prepared:',Object.keys(done).length,'/',source.length);await pause(200);
}}
await Promise.all([worker(),worker(),worker()]);save();
console.log(JSON.stringify({total:source.length,prepared:Object.keys(done).length,missing:failed.length}));
if(failed.length){fs.writeFileSync('locales/missing.json',JSON.stringify(failed,null,2));process.exitCode=1;}
