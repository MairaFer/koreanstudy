// The audio check also installs the TS/React render harness and checks every
// lesson stage for readable Korean and invalid nested controls.
require('./check-lesson-audio.cjs');
const assert=require('node:assert/strict'),fs=require('node:fs'),React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx'),{ArmyPractice,ArmyMemberNames}=require('../components/army-lesson.tsx');
const {armyMembers,armyLessons}=require('../lib/army-lab.ts'),{joinSyllable,splitSyllable}=require('../lib/syllable-lab.ts');
assert.deepEqual(armyMembers.map(m=>m.real),['김남준','김석진','민윤기','정호석','박지민','김태형','전정국']);
assert.deepEqual(armyMembers.map(m=>m.ko),['알엠','진','슈가','제이홉','지민','뷔','정국']);
const render=(node,locale)=>renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},node));
for(const locale of ['pt','eng']){
 for(let i=0;i<7;i++)for(const real of [false,true]){
  const member=armyMembers[i],name=real?member.real:member.ko,html=render(React.createElement(ArmyMemberNames,{initialMember:i,initialReal:real}),locale);
  assert.ok(html.includes('>'+name+'<'),'Whole name missing: '+name);
  assert.ok(html.includes('>'+member.artist+'<'),'Artist name changed');
  for(const block of name){const parts=splitSyllable(block);assert.ok(parts);assert.equal(joinSyllable(parts),block);}
  assert.ok(html.includes(locale==='eng'?'Listen to the whole name':'Ouvir o nome inteiro'));
  assert.ok(html.includes('aria-label="'+(locale==='eng'?'Blocks to assemble':'Blocos para montar')+'"'));
  assert.ok(!html.includes('SUCKS'));
 }
 for(let lesson=1;lesson<=5;lesson++)for(let selected=0;selected<3;selected++){
  const data=armyLessons[lesson-1],word=data.words[selected].ko,html=render(React.createElement(ArmyPractice,{lesson,initialSelected:selected}),locale);
  assert.ok(html.includes('>'+word+'<'));
  if(lesson!==3)assert.ok(data.options.includes(data.answers[selected]));
  if(lesson<3)for(const block of word)assert.equal(splitSyllable(block).final,'','Early lesson should use open syllables');
 }
}
for(const [i,name] of ['vowel','consonant','syllable','batchim','greetings'].entries()){
 const file=fs.readFileSync('components/'+name+'-lesson.tsx','utf8');assert.ok(file.includes('step===3&&<ArmyPractice lesson={'+(i+1)+'}'));
 if(i===3)assert.ok(file.includes('<ArmyMemberNames/>'));
}
console.log('PASS: all 7 members, 14 stage/real names, Hangul block roundtrips, 15 level-appropriate fandom examples, and bilingual render/audio integration.');
