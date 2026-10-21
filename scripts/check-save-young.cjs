const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');const cat=fs.readFileSync('components/bts-catalog.tsx','utf8').match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
const save=`난 숨쉬고 싶어 이 밤이 싫어
이젠 깨고 싶어 꿈속이 싫어
내 안에 갇혀서 난 죽어있어
Don't wanna be lonely
Just wanna be yours
왜 이리 깜깜한 건지
니가 없는 이 곳은
위험하잖아 망가진 내 모습
구해줘 날 나도 날 잡을 수 없어
내 심장소릴 들어봐
제멋대로 널 부르잖아
이 까만 어둠 속에서
너는 이렇게 빛나니까
그 손을 내밀어줘 save me save me
I need your love before I fall fall
그 손을 내밀어줘 save me save me
I need your love before I fall fall
그 손을 내밀어줘 save me save me
그 손을 내밀어줘 save me save me
Save me save me
오늘따라 달이 빛나 내 기억 속의 빈칸
날 삼켜버린 이 lunatic
Please save me tonight
Please save me tonight
Please save me tonight
이 치기 어린 광기 속
나를 구원해줄 이 밤
난 알았지 너란 구원이
내 삶의 일부며 아픔을
감싸줄 유일한 손길
The best of me 난 너밖에 없지
나 다시 웃을 수 있도록 더 높여줘
니 목소릴
Play on
내 심장소릴 들어봐
제멋대로 널 부르잖아
이 까만 어둠 속에서
너는 이렇게 빛나니까
그 손을 내밀어줘 save me save me
I need your love before I fall fall
그 손을 내밀어줘 save me save me
I need your love before I fall fall
그 손을 내밀어줘 save me save me
그 손을 내밀어줘 save me save me
고마워 내가 나이게 해줘서
이 내가 날게 해줘서
이런 내게 날갤 줘서
꼬깃하던 날 개 줘서
답답하던 날 깨줘서
꿈 속에만 살던 날 깨워줘서
널 생각하면 날 개어서
슬픔 따윈 나 개 줬어
Thank you 우리가 돼 줘서
그 손을 내밀어줘 save me save me
I need your love before I fall fall
그 손을 내밀어줘 save me save me
I need your love before I fall fall`.split('\n');
const young=`막이 내리고 나는 숨이 차
복잡해진 마음 숨을 내쉰다
오늘 뭐 실수는 없었었나
관객들의 표정은 어땠던가
그래도 행복해 난 이런 내가 돼서
누군가 소리지르게 만들 수가 있어서
채 가시지 않은 여운들을 품에 안고
아직도 더운 텅 빈 무대에 섰을 때
더운 텅 빈 무대에 섰을 때
괜한 공허함에 난 겁을 내
복잡한 감정 속에서
삶의 사선 위에서
괜시리 난 더 무딘 척을 해
처음도 아닌데 익숙해질 법한데
숨기려 해도 그게 안 돼
텅 빈 무대가 식어갈 때쯤
빈 객석을 뒤로 하네
지금 날 위로하네
완벽한 세상은 없다고
자신에게 말해 난
점점 날 비워가네
언제까지 내 것일 순 없어
큰 박수갈채가
이런 내게 말을 해 뻔뻔히
니 목소릴 높여 더 멀리
영원한 관객은 없대도 난 노래할거야
오늘의 나로 영원하고파
영원히 소년이고 싶어 나
Aah
Forever we are young
나리는 꽃잎 비 사이로
헤매어 달리네 이 미로
Forever we are young
넘어져 다치고 아파도
끝없이 달리네 꿈을 향해
Forever ever ever ever
꿈 희망 전진 전진
Forever ever ever ever
We are young
Forever ever ever ever
꿈 희망 전진 전진
Forever ever ever ever
We are young
Forever we are young
나리는 꽃잎 비 사이로
헤매어 달리네 이 미로
Forever we are young
넘어져 다치고 아파도
끝없이 달리네 꿈을 향해
Forever we are young
나리는 꽃잎 비 사이로
헤매어 달리네 이 미로
Forever we are young
넘어져 다치고 아파도
끝없이 달리네 꿈을 향해`.split('\n');
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
for(const [id,v,expected,aliases]of [['save-me','saveMe',save,['Save Me','SAVE ME']],['young-forever','youngForever',young,['Epilogue: Young Forever','EPILOGUE : Young Forever','Young Forever']]]){
const d=require('../lib/'+id+'.ts'),sections=d[v+'Sections'],vocab=d[v+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);assert.deepEqual(all.map(l=>l.text),expected);assert.equal(song.exercises.length,5);assert.ok(vocab.verbs.length>=19&&vocab.nouns.length>=12);
for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/g)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else assert.ok(l.english);}
for(const x of [...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),song.intro,song.topic,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation]),...Object.values(vocab).flat().map(w=>w.pt)]){const en=translate(x,'eng');if(/[A-Za-zÀ-ÿ]{2}/.test(x)&&x!=='Ah...')assert.notEqual(en,x,'Missing adaptation: '+x);assert.deepEqual((en.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x);}
const enhanced=addMusicCuriosities(id,sections);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Instrumental)',' (Remix)'])assert.equal(lookup(alias+suffix),undefined);}for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3);}
if(id==='save-me'){assert.equal(all.filter(l=>l.text==='그 손을 내밀어줘 save me save me').length,10);const fold=all.find(l=>l.text==='꼬깃하던 날 개 줘서');assert.match(fold.entries[0].notes.join(' '),/não significa literalmente desdobrar/);assert.equal(translate(fold.translation,'eng'),'For putting this crumpled self back in order.');assert.ok(all.find(l=>l.text==='슬픔 따윈 나 개 줬어').entries[0].notes[0].includes('leitura possível'));}else{assert.equal(all.filter(l=>l.text==='나리는 꽃잎 비 사이로').length,3);assert.equal(all.filter(l=>l.text==='꿈 희망 전진 전진').length,2);assert.ok(all.find(l=>l.text==='나리는 꽃잎 비 사이로').entries[0].notes[0].includes('내리다'));assert.ok(musicCuriosities[id].some(c=>c.source?.includes('/proof/')));}
}
assert.ok(songs.length>=117);console.log('PASS: Save Me 57 lines and Young Forever 55 lines; exact lyrics, repeats, wordplay and spelling cautions; adapted PT/ENG, 16 unique cards, vocabulary, catalog links and 10 exercises.');
