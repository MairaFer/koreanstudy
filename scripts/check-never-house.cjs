const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');const cat=fs.readFileSync('components/bts-catalog.tsx','utf8').match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
const never=`앞만 보고 달렸지
주위를 둘러 볼 틈 없이
어느새 나는 가족의 자랑이 됐고
어느 정도 성공을 했어
사춘기라 말하는 그쯤
생각이 나네 문득
그 당시 나는 어렸고 무서울 게 없었지
몇 번의 좌절 그건 아무것도 아녀
달라진 거라곤 그때에 비해 조금 커진 키와
동 나이대에 비해 조금 성숙해진 시야
남산동의 지하 작업실에서부터
압구정까지 깔아 놓은 내 beat 청춘의 출처
주위 모두 말했지 오버하지마
음악 한답시고 깝치면 집안 거덜내니까
그때부터 신경 안 썼지 누가 뭐라든지
그저 내 꼴린대로 내 소신대로 살아갈 뿐
니가 보기엔 지금 난 어떨 것 같냐
내가 보기엔 어떨 것 같아?
내가 망하길 기도했던 몇몇 놈에게 물을게
집안 거덜 낸 것 같냐 새꺄
I don't give a shit, I don't give a fuck
하루 수백 번 입버릇처럼 말했던
'내게서 신경 꺼'
실패나 좌절 맛보고 고개 숙여도 돼
우리는 아직 젊고 어려 걱정 붙들어매
구르지 않는 돌에는
필시 끼기 마련이거든 이끼
돌아갈 수 없다면 직진
실수 따윈 모두 다 잊길
Never mind
쉽진 않지만 가슴에 새겨놔
부딪힐 것 같으면 더 세게 밟아 임마
Never mind, never mind
그 어떤 가시밭 길이라도 뛰어가
Never mind, never mind
세상엔 니가 어쩔 수 없는 일도 많아
You better
Never mind, never mind
부딪힐 것 같으면 더 세게 밟아 임마
Never mind, never mind
포기하기에는 우린 아직 젊고 어려 임마
Never mind
부딪힐 것 같으면 더 세게 밟아 임마
부딪힐 것 같으면 더 세게 밟아 임마
Never mind`.split('\n');
const house=`또 위태로워 또 위험해
So bad (why) 우린 yeah
더 버티기도 지탱하기도
So hard (hard) 안 돼
이미 알고 있어도
멈출 수가 없었어
No way, no way, no way 쓰러져
시간이 지나갈수록
더 망가져가기만 해
No way, no way 또 무너지는 걸
카드로 만든 집 그 속에서 우린
끝이 보인대도 곧 쓰러진대도
카드로 만든 집 바보같이 우린
헛된 꿈이래도 이대로 조금 더 stay
내일이란 게 없듯이
다음이란 건 없듯이
지금 내겐 눈 앞에 너를 뺀 모든 게
지독히 깜깜한 어둠이지
입버릇처럼 말해
우린 결국엔 안 돼
그래도 난 계속 바래
마지막도 너와 함께라면 I'm okay
이미 알고 있어도
멈출 수가 없었어
No way, no way, no way 쓰러져
시간이 지나갈수록
더 망가져 가기만 해
No way, no way 또 무너지는 걸
카드로 만든 집 그 속에서 우린
끝이 보인대도 곧 쓰러진대도
카드로 만든 집 바보같이 우린
헛된 꿈이래도 이대로 조금 더 stay
시간을 Slow down
조금만 더, 머물러 줘 oh
Please baby. Calm down
조금만 더
더 위태로워 더 위험해
So bad (so bad) 우린 yeah
더 버티기도 지탱하기도
So hard 또 무너지는 걸 ah
카드로 만든 집 그 속에서 우린
끝이 보인대도 곧 쓰러진대도
카드로 만든 집 바보같이 우린
헛된 꿈이래도 이대로 조금 더 stay`.split('\n');
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
for(const [id,v,expected,aliases]of [['never-mind','neverMind',never,['Intro: Never Mind','INTRO : Never Mind','Nevermind']],['house-of-cards','houseOfCards',house,['Outro: House Of Cards','OUTRO : House Of Cards','House of Cards (Full Length Edition)']]]){
const d=require('../lib/'+id+'.ts'),sections=d[v+'Sections'],vocab=d[v+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);assert.deepEqual(all.map(l=>l.text),expected);assert.equal(song.exercises.length,5);assert.ok(vocab.verbs.length>=19&&vocab.nouns.length>=12);
for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/g)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else assert.ok(l.english);}
for(const x of [...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),song.intro,song.topic,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation]),...Object.values(vocab).flat().map(w=>w.pt)]){const en=translate(x,'eng');if(/[A-Za-zÀ-ÿ]{2}/.test(x))assert.notEqual(en,x,'Missing adaptation: '+x);assert.deepEqual((en.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x);}
const enhanced=addMusicCuriosities(id,sections);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Instrumental)',' (Remix)'])assert.equal(lookup(alias+suffix),undefined);}for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3);}
if(id==='never-mind'){assert.equal(all.filter(l=>l.text==='부딪힐 것 같으면 더 세게 밟아 임마').length,4);assert.equal(all.filter(l=>l.text==='Never mind').length,3);}else{assert.deepEqual(sections[3].lines,sections[7].lines);assert.deepEqual(sections[3].lines,sections[10].lines);assert.notEqual(sections[2].lines[1].text,sections[6].lines[1].text);assert.ok(song.intro.includes('Full Length Edition'));assert.notEqual(translate('Letra enviada · inclui trechos da edição completa','eng'),'Letra enviada · inclui trechos da edição completa');}
}
assert.ok(songs.length>=115);console.log('PASS: Never Mind 45 lines and supplied House of Cards 44 lines; exact lyrics/repeats/variants, explicit extended-edition note, PT/ENG notes, 16 unique cards, vocabulary and 10 exercises.');
