import {lessons} from './course';
import {springDaySections,springDayVocabulary} from './spring-day';
import {bodyToBodySections,bodyToBodyVocabulary} from './body-to-body';
import {hooliganSections,hooliganVocabulary} from './hooligan';
import {twoPointZeroSections,twoPointZeroVocabulary} from './two-point-zero';
import {aliensSections,aliensVocabulary} from './aliens';

import {fyaSections,fyaVocabulary} from './fya';

import {merryGoRoundSections,merryGoRoundVocabulary} from './merry-go-round';

import {theyDontKnowSections,theyDontKnowVocabulary} from './they-dont-know-bout-us';

const studies=[
  {id:'they-dont-know-bout-us',sections:theyDontKnowSections,vocabulary:theyDontKnowVocabulary},
  {id:'merry-go-round',sections:merryGoRoundSections,vocabulary:merryGoRoundVocabulary},
  {id:'fya',sections:fyaSections,vocabulary:fyaVocabulary},
  {id:'spring-day',sections:springDaySections,vocabulary:springDayVocabulary},
  {id:'body-to-body',sections:bodyToBodySections,vocabulary:bodyToBodyVocabulary},
  {id:'hooligan',sections:hooliganSections,vocabulary:hooliganVocabulary},
  {id:'two-point-zero',sections:twoPointZeroSections,vocabulary:twoPointZeroVocabulary},
  {id:'aliens',sections:aliensSections,vocabulary:aliensVocabulary},
];
const tokens=(text:string):string[]=>text.normalize('NFC').match(/[0-9]*[가-힣ㄱ-ㅎㅏ-ㅣ]+/gu)??[];
const exact=(term:string,word:string)=>tokens(term).join(' ')===word;
export function wordTranslation(word:string,context:string,source:string):{meaning:string;expression?:string}|null {
  const chosen=studies.find(s=>source.split('/')[2]===s.id);
  const ordered=chosen?[chosen,...studies.filter(s=>s!==chosen)]:studies;
  const lines=ordered.flatMap(s=>s.sections.flatMap(section=>section.lines));
  const contextual=lines.filter(line=>line.text===context||line.entries?.some(e=>e.term===context));
  for(const line of contextual){const entry=line.entries?.find(e=>exact(e.term,word));if(entry)return {meaning:entry.meaning};}
  const lesson=lessons.find(l=>source==='#aulas/'+l.id);
  const cards=[...(lesson?.cards??[]),...ordered.flatMap(s=>[...s.vocabulary.verbs,...s.vocabulary.nouns]),...lessons.flatMap(l=>l.cards)];
  // Keep meanings tied to the selected line when the token is part of an expression.
  for(const line of contextual){const entry=line.entries?.find(e=>tokens(e.term).includes(word));if(entry){const card=cards.find(c=>exact(c.ko,word));if(card)return {meaning:card.pt};return {meaning:entry.meaning,expression:entry.term};}}
  const card=cards.find(c=>exact(c.ko,word));if(card)return {meaning:card.pt};
  for(const line of lines){const entry=line.entries?.find(e=>exact(e.term,word));if(entry)return {meaning:entry.meaning};}
  return null;
}
