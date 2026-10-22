const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
const specs=[
['outro-circle-room-cypher','outroCircleRoomCypher',179,[51,19,20,14,15,16,28,16],8,['Outro: Circle Room Cypher','Outro : Circle Room Cypher','Circle Room Cypher']],
['skit-on-the-start-line','skitOnTheStartLine',39,[7,8,12,12],8,['Skit: On The Start Line','Skit: On The Start Line (Hidden Track)']],
['seoul','seoul',66,[7,10,4,19,8,5,8,5],8,['seoul','seoul (prod. HONNE)','서울']],
['moonchild','moonchild',57,[6,13,8,12,11,7],8,['moonchild']],
['badbye','badbye',24,[9,4,4,7],3,['badbye','badbye (with eAeon)']],
['uhgood','uhgood',51,[9,7,4,8,11,4,8],8,['uhgood','uhgood (어긋)','어긋']],
['everythingoes','everythingoes',72,[3,25,17,27],8,['everythingoes','everythingoes (with Nell)','지나가']],
['forever-rain','foreverRain',38,[11,11,10,6],8,['forever rain']]];
const labels=new Set(['[Suga:]','[RM:]','[V:]','[Jungkook:]','[J-Hope:]','[Jin:]','[Jimin:]','[BTS:]','Cypher?','Cypher~!','Suga, uh, yo, uh.','(Uh, uh, yo, uh, yo.)','Comme des, Rolex, Dior, Hermès.','Gwangju','Daegu','trainee','ideal','Plural']);
for(const[id,name,count,lengths,cards,aliases]of specs){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count,id);assert.deepEqual(sections.map(s=>s.lines.length),lengths);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text,'Source changed: '+l.text);}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');if(!labels.has(x))assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,cards,id);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 const has=t=>assert.ok(all.some(l=>l.text===t),id+' missing '+t),note=t=>all.find(l=>l.text===t).entries[0].notes.join(' '),freq=t=>all.filter(l=>l.text===t).length;
 if(id==='outro-circle-room-cypher'){has('RM: 야 500원 줄게 600원 남겨와라');has('BTS: Go 전진, Go 전진, Go 전진');has('Jin: 잘했어용~');has('Others: 알았어 았았어~');assert.ok(note('뭐가 떨려 가서 김장하고 있어').includes('não homófonos'));assert.ok(note('But 최근 들어 따가 빠졌지 Yeah').includes('찐, não 진'));assert.ok(note('Jungkook: 야 슈가가 랍스터 쏜대 가자').includes('pagar'));assert.equal(all.at(-1).text,'Jin: 잘했어용~');}
 if(id==='skit-on-the-start-line'){has('네가 데뷔를 하더라도');assert.ok(note('네가 데뷔를 하더라도').includes('Não se corrige'));assert.equal(all.at(-1).text,'나는 연습생이니까');const cat=JSON.parse(fs.readFileSync('lib/discography.json','utf8'));assert.equal(cat.find(a=>a.title==='2 COOL 4 SKOOL').tracks.filter(t=>t.id==='bonus-skit-on-the-start-line').length,1);}
 if(id==='seoul'){assert.equal(freq('사랑과 미움이 같은 말이면 I love you Seoul'),10);assert.equal(freq('사랑과 미움이 같은 말이면 I hate you Seoul'),10);assert.equal(freq("I'm leavin' you, I'm livin' you"),4);for(const t of ['무슨 영혼을 겨졌길래','ㄴ의 맨날 똑같은 잿빛 표정','다뜻한 척 하는 차가운 공원들'])has(t);}
 if(id==='moonchild'){assert.equal(freq('우린 서로의 야경 서로의 달'),4);for(const t of ['저유를 말허는 순간 자유는 없어','분명 누 군가 너의 가시를 보며 의로받겠지','생각하지 말란 생각조차 생각이잖아'])has(t);}
 if(id==='badbye'){assert.deepEqual(sections[1],sections[2]);assert.equal(freq('Kill me, kill me softly'),6);assert.equal(freq('날 산산 조각 내줘'),2);assert.equal(freq('Bad bad bye'),5);}
 if(id==='uhgood'){for(const t of ['술을 나를 짓밟네 (나를 짓밟네)','살다보면 비를 받을 수도 있어','그래야 너도 비를 받을 수가 있어'])has(t);assert.equal(freq('진짜 네게'),6);has('너무 멀고 먼 그 두 다리 건너 내게 닿고 싶어 (yeah yeah)');}
 if(id==='everythingoes'){assert.equal(freq('(Everything everything everything goes)'),32);assert.equal(freq('지나가'),17);assert.equal(freq('비가 와'),2);assert.equal(all.at(-1).text,'모든 건 지나 가');}
 if(id==='forever-rain'){assert.equal(freq('Forever rain Forever rain'),2);assert.equal(all.at(-1).text,'영원따위 없는걸 알고선');has('고개를 밑으로 내 발뒷꿈치로');}
 console.log('PASS',id,count+' supplied lines; repetitions, context, PT/ENG, vocabulary, cards and exercises.');
}
