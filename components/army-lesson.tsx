'use client';
import {useState} from 'react';
import {Heart,Leaf,Volume2,RotateCcw,Undo2,CheckCircle2} from 'lucide-react';
import {LessonText} from './lesson-text';
import {useKoreanSpeech} from './korean-audio';
import {armyLessons,armyMembers} from '@/lib/army-lab';
import {splitSyllable} from '@/lib/syllable-lab';

function BlockBuilder({word}:{word:string}){
 const [picked,setPicked]=useState<number[]>([]),speech=useKoreanSpeech();
 const blocks=[...word],written=picked.map(i=>blocks[i]).join(''),complete=picked.length===blocks.length;
 return <LessonText><div className="army-builder">
  <p>Toque nos blocos para escrever. Você também pode copiar o modelo no papel, mantendo as letras dentro de cada bloco.</p>
  <div className="army-written" aria-label="Sua montagem" aria-live="polite">{written||'…'}</div>
  <div className="army-pieces" role="group" aria-label="Blocos para montar">{blocks.map((_,i)=>blocks.length-1-i).map(i=><button type="button" key={i} disabled={picked.includes(i)} onClick={()=>{setPicked(p=>[...p,i]);speech.speak(blocks[i]);}} lang="ko">{blocks[i]}</button>)}</div>
  <div className="army-actions"><button type="button" className="text-button" disabled={!picked.length} onClick={()=>setPicked(p=>p.slice(0,-1))}><Undo2 size={16}/>Apagar último bloco</button><button type="button" className="text-button" onClick={()=>{setPicked([]);speech.stop();}}><RotateCcw size={16}/>Tentar de novo</button></div>
  {complete&&<p role="status" className="army-feedback">{written===word?'Isso! Os blocos formam o nome ou a palavra do modelo.':'Compare com o modelo, da esquerda para a direita. Apague um bloco e tente novamente.'}</p>}
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}

export function ArmyPractice({lesson,initialSelected=0}:{lesson:1|2|3|4|5;initialSelected?:number}){
 const data=armyLessons[lesson-1],speech=useKoreanSpeech();
 const [selected,setSelected]=useState(initialSelected),[answer,setAnswer]=useState('');
 const word=data.words[selected],blocks=[...word.ko];
 const block=lesson===2?blocks[0]:blocks[blocks.length-1],parts=splitSyllable(block)!;
 return <LessonText><section className="army-practice">
  <span className="vl-kicker"><Heart size={16} aria-hidden="true"/>COREANO NO SEU MUNDO ARMY</span><h3>{data.title}</h3><p>{data.intro}</p>
  <div className="army-word-tabs" role="group" aria-label="Escolha um exemplo do fandom">{data.words.map((item,i)=><button type="button" key={item.ko} aria-pressed={selected===i} onClick={()=>{setSelected(i);setAnswer('');speech.speak(item.ko);}}><strong lang="ko">{item.ko}</strong><small>{item.meaning}</small><Volume2 size={16} aria-hidden="true"/></button>)}</div>
  <div className="army-focus"><div><strong lang="ko" className="army-model">{word.ko}</strong><p>{word.meaning}</p><button type="button" className="secondary" onClick={()=>speech.speak(word.ko)}><Volume2 size={17}/>Ouvir a palavra inteira</button></div>{lesson<5&&<div className="army-block-focus"><span>{lesson===2?'PRIMEIRO BLOCO':'ÚLTIMO BLOCO'}</span><strong lang="ko">{block}</strong><p>{lesson===1?'Procure a vogal.':lesson===2?'Procure a consoante inicial.':lesson===4?'Procure a consoante na base.':'Um bloco, uma sílaba.'}</p>{lesson===3&&<p>{parts.initial} + {parts.vowel}{parts.final?' + '+parts.final:''}</p>}</div>}</div>
  <h4>{data.prompt}</h4>
  {lesson===3?<BlockBuilder key={word.ko} word={word.ko}/>:<><div className="army-pieces" role="group" aria-label="Escolha sua resposta">{data.options.map(option=><button type="button" key={option} aria-pressed={answer===option} lang="ko" onClick={()=>{setAnswer(option);speech.speak(option);}}>{option}</button>)}</div>{answer&&<div className="army-feedback" role="status"><strong>{answer===data.answers[selected]?'Isso! Você encontrou.':'Observe o cartão e tente novamente.'}</strong>{answer===data.answers[selected]&&<p>{data.feedback}</p>}</div>}</>}
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </section></LessonText>;
}

function MemberName({name}:{name:string}){
 const [active,setActive]=useState(0),speech=useKoreanSpeech(),blocks=[...name],parts=splitSyllable(blocks[active])!;
 return <LessonText><div className="army-name-detail">
  <div className="army-name-model"><strong lang="ko">{name}</strong><button type="button" className="secondary" onClick={()=>speech.speak(name)}><Volume2 size={17}/>Ouvir o nome inteiro</button></div>
  <p>Leia da esquerda para a direita. Toque num bloco para explorar suas letras; depois ouça o nome inteiro para perceber como os sons se encontram.</p>
  <div className="army-pieces" role="group" aria-label="Explore os blocos do nome">{blocks.map((block,i)=><button type="button" key={i} lang="ko" aria-pressed={active===i} onClick={()=>{setActive(i);speech.speak(block);}}>{block}</button>)}</div>
  <div className="army-name-parts"><div><small>Consoante inicial</small><strong lang="ko">{parts.initial}</strong></div><div><small>Vogal</small><strong lang="ko">{parts.vowel}</strong></div><div><small>Consoante final · 받침</small><strong lang="ko">{parts.final||'—'}</strong></div></div>
  <p>{parts.final?'Este bloco tem 받침: copie a consoante final na base.':'Este bloco não tem 받침: bastam a consoante inicial e a vogal.'}</p>
  <h4>Agora escreva com os blocos</h4><BlockBuilder word={name}/>
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}

export function ArmyMemberNames({initialMember=0,initialReal=false}:{initialMember?:number;initialReal?:boolean}={}){
 const [member,setMember]=useState(initialMember),[real,setReal]=useState(initialReal),speech=useKoreanSpeech(),person=armyMembers[member];
 return <LessonText><section className="army-names" id="army-member-names">
  <span className="vl-kicker"><Leaf size={16} aria-hidden="true"/>UM ENCONTRO COM OS SETE</span><h3>Leia e escreva os nomes dos integrantes</h3>
  <p>Do nome artístico ao nome real: escolha um integrante, explore os blocos e monte o nome. Nos nomes reais abaixo, o sobrenome vem primeiro e ocupa o primeiro bloco; escrevemos o nome completo sem espaços.</p>
  <div className="vl-note"><Heart size={20} aria-hidden="true"/><p>Esta é uma exploração guiada. Vogais como ㅐ, ㅔ e ㅟ aparecem em alguns nomes e serão aprofundadas depois. O som de um nome inteiro pode mudar na junção das sílabas: não use a soma de áudios isolados como pronúncia definitiva.</p></div>
  <div className="army-roster" role="group" aria-label="Escolha um integrante do BTS">{armyMembers.map((item,i)=><button type="button" key={item.id} aria-pressed={member===i} onClick={()=>{setMember(i);speech.speak(real?item.real:item.ko);}}><span translate="no">{item.artist}</span><strong lang="ko">{item.ko}</strong><small lang="ko">{item.real}</small></button>)}</div>
  <div className="army-name-heading"><h4 translate="no">{person.artist}</h4><span translate="no">{person.latin}</span></div>
  <div className="army-actions" role="group" aria-label="Tipo de nome"><button type="button" className="secondary" aria-pressed={!real} onClick={()=>{setReal(false);speech.stop();}}>Nome artístico</button><button type="button" className="secondary" aria-pressed={real} onClick={()=>{setReal(true);speech.stop();}}>Nome real</button></div>
  <MemberName key={person.id+String(real)} name={real?person.real:person.ko}/>
  <p className="army-caption">As grafias latinas ajudam a reconhecer a pessoa; não são uma transcrição exata da pronúncia coreana. O nome artístico de RM é escrito em letras latinas; 알엠 mostra sua leitura em Hangul.</p>
  <p className="army-caption"><CheckCircle2 size={16} aria-hidden="true"/>Esta oficina é para explorar. Os exercícios de progresso da aula continuam abaixo.</p>
  <a className="text-button" href="https://bts.ibighit.com/eng/profile/" target="_blank" rel="noreferrer">Integrantes · perfil oficial do BTS ↗</a><p className="vl-audio-status" role="status">{speech.status}</p>
 </section></LessonText>;
}
