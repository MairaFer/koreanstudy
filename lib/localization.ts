import english from '@/locales/en.json';
import overrides from '@/locales/en-overrides.json';
export type Locale='pt'|'eng';
const dictionary:Record<string,string>=Object.assign(Object.create(null),english,overrides);
const normalize=(s:string)=>s.replace(/\s+/g,' ').trim();
const resolved=new Map<string,string>();
const escape=(s:string)=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const templates=Object.entries(dictionary).filter(([key])=>/\{\d+\}/.test(key)).map(([key,value])=>{
 const indices:number[]=[];let end=0,pattern='^';
 for(const m of key.matchAll(/\{(\d+)\}/g)){pattern+=escape(key.slice(end,m.index))+'(.*?)';indices.push(Number(m[1]));end=m.index!+m[0].length;}
 return {pattern:new RegExp(pattern+escape(key.slice(end))+'$'),indices,value,preserveValues:key==='Olá, {0}'};
});
export function translate(text:string,locale:Locale):string{
 if(locale==='pt'||!text.trim()||!/[a-zA-ZÀ-ÿ]/.test(text))return text;
 const key=normalize(text);let result=dictionary[key]??resolved.get(key);
 if(result===undefined){
  for(const template of templates){const match=template.pattern.exec(key);if(!match)continue;const values:Record<number,string>={};template.indices.forEach((n,i)=>values[n]=template.preserveValues?match[i+1]:translate(match[i+1],'eng'));result=template.value.replace(/\{(\d+)\}/g,(_,n)=>values[Number(n)]??'');break;}
 }
 if(result===undefined&&key.includes(' / '))result=key.split(' / ').map(part=>translate(part,locale)).join(' / ');
 if(result===undefined){if(resolved.size<20000)resolved.set(key,key);return text;}
 if(resolved.size<20000)resolved.set(key,result);
 return (text.match(/^\s*/)?.[0]??'')+result+(text.match(/\s*$/)?.[0]??'');
}
