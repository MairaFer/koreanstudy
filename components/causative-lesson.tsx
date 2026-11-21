'use client';
import {useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,CheckCircle2,Lightbulb,PlayCircle,RotateCcw,Users,Volume2} from 'lucide-react';
import {LessonText} from './lesson-text';
import {useKoreanSpeech} from './korean-audio';

const scenes=[
 {subject:'선생님이',doer:'학생들을',action:'읽게 했어요.',whole:'선생님이 학생들을 읽게 했어요.',pt:'O professor fez os alunos lerem.',cause:'professor',execute:'alunos'},
 {subject:'엄마가',doer:'아이를',action:'웃게 했어요.',whole:'엄마가 아이를 웃게 했어요.',pt:'A mãe fez a criança rir.',cause:'mãe',execute:'criança'},
 {subject:'친구가',doer:'저를',action:'기다리게 했어요.',whole:'친구가 저를 기다리게 했어요.',pt:'Meu amigo me fez esperar.',cause:'amigo',execute:'eu'},
];
const builders=[
 {verb:'읽다',stem:'읽',result:'읽게 하다',sentence:'학생들을 읽게 했어요.',pt:'Fiz os alunos lerem.'},
 {verb:'웃다',stem:'웃',result:'웃게 하다',sentence:'아이를 웃게 했어요.',pt:'Fiz a criança rir.'},
 {verb:'기다리다',stem:'기다리',result:'기다리게 하다',sentence:'친구를 기다리게 했어요.',pt:'Fiz o amigo esperar.'},
 {verb:'쉬다',stem:'쉬',result:'쉬게 하다',sentence:'동생을 쉬게 했어요.',pt:'Deixei meu irmão mais novo descansar.'},
];
const lexical=[
 {base:'먹다',cause:'먹이다',meaning:'comer → alimentar',sentence:'아기에게 우유를 먹였어요.',pt:'Dei leite ao bebê / alimentei o bebê.'},
 {base:'웃다',cause:'웃기다',meaning:'rir → fazer rir',sentence:'그 이야기가 저를 웃겼어요.',pt:'Aquela história me fez rir.'},
 {base:'자다',cause:'재우다',meaning:'dormir → pôr para dormir',sentence:'아기를 재웠어요.',pt:'Coloquei o bebê para dormir.'},
 {base:'입다',cause:'입히다',meaning:'vestir-se → vestir alguém',sentence:'아이에게 코트를 입혔어요.',pt:'Vesti o casaco na criança.'},
];
const challenges=[
 {prompt:'Complete: 읽다 → 읽___ 하다',options:['게','히','는'],answer:'게',feedback:'A base recebe 게 e depois 하다: 읽게 하다.'},
 {prompt:'Quem realiza a leitura em 선생님이 학생들을 읽게 했어요?',options:['학생들','선생님','ninguém'],answer:'학생들',feedback:'O professor provoca a situação; os estudantes executam 읽다.'},
 {prompt:'Qual é o causativo lexical de 자다?',options:['재우다','자게다','자이다'],answer:'재우다',feedback:'자다 → 재우다 deve ser aprendido como um par lexical.'},
 {prompt:'“Deixei meu irmão descansar.”',options:['동생을 쉬게 했어요.','동생이 쉬었게 해요.','동생을 쉬기 했어요.'],answer:'동생을 쉬게 했어요.',feedback:'쉬다 perde 다 e recebe 게 하다; o contexto permite a leitura “deixei”.'},
 {prompt:'Qual frase significa “alimentei o bebê”?',options:['아기가 먹었어요.','아기에게 우유를 먹였어요.','아기를 먹게 받았어요.'],answer:'아기에게 우유를 먹였어요.',feedback:'먹이다 é o causativo lexical de 먹다; 아기에게 marca quem recebe o leite.'},
];
const steps=['Veja os papéis','Monte a forma','Aprenda os pares','Laboratório'];

export function CausativeLesson(){
 const [step,setStep]=useState(0),[scene,setScene]=useState(0),[builder,setBuilder]=useState(0),[pair,setPair]=useState(0),[round,setRound]=useState(0),[answer,setAnswer]=useState(''),[checked,setChecked]=useState(false),[wins,setWins]=useState<number[]>([]);
 const root=useRef<HTMLDivElement>(null),speech=useKoreanSpeech(),current=scenes[scene],form=builders[builder],word=lexical[pair],task=challenges[round],correct=answer===task.answer;
 function go(next:number){speech.stop();setStep(next);requestAnimationFrame(()=>{root.current?.focus({preventScroll:true});root.current?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});}
 function nextChallenge(next:number){setRound(next);setAnswer('');setChecked(false);speech.stop();}
 return <LessonText><div className="vowel-lab routine-lab" tabIndex={-1} ref={root}>
  <div className="vl-welcome"><div><span className="vl-kicker"><Users size={15}/>DUAS PESSOAS, DOIS PAPÉIS</span><h2>Quem provoca e quem faz a ação?</h2><p>Os causativos mostram que alguém faz, permite ou ajuda outra pessoa a realizar uma ação. Primeiro, descubra os papéis; depois, escolha a forma.</p></div><div className="vl-welcome-art" aria-hidden="true"><span>게</span><PlayCircle/></div></div>
  <nav className="vl-steps" aria-label="Etapas da sétima aula avançada">{steps.map((label,index)=><button type="button" key={label} aria-current={step===index?'step':undefined} onClick={()=>go(index)}><span>{index+1}</span>{label}</button>)}</nav>
  <div className="vl-panel" key={step}>
   {step===0?<><p className="vl-kicker">01 · MAPA DA AÇÃO</p><h3>Não confunda quem causa com quem executa.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha uma situação">{scenes.map((item,index)=><button type="button" key={item.whole} aria-pressed={scene===index} onClick={()=>{setScene(index);speech.stop();}}><strong lang="ko">{item.whole}</strong><small>{item.pt}</small></button>)}</div><div className="rl-context" aria-live="polite"><strong lang="ko">{current.whole}</strong><p>{current.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(current.whole)}><Volume2 size={17}/>Ouvir</button></div><div className="rl-path"><span lang="ko">{current.subject}<small>{current.cause} provoca</small></span><ArrowRight/><span lang="ko">{current.doer}<small>{current.execute} executa</small></span><ArrowRight/><span lang="ko">{current.action}<small>ação causada</small></span></div><div className="vl-note"><Lightbulb size={20}/><p>O primeiro participante causa a situação. O segundo continua sendo quem realiza o verbo dentro de <b>-게 하다</b>.</p></div></>:
   step===1?<><p className="vl-kicker">02 · CONSTRUTOR</p><h3>Retire 다 e acrescente -게 하다.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha um verbo">{builders.map((item,index)=><button type="button" key={item.verb} aria-pressed={builder===index} onClick={()=>setBuilder(index)}><strong lang="ko">{item.verb}</strong><small>{item.pt}</small></button>)}</div><div className="rl-path"><span lang="ko">{form.verb}<small>forma de dicionário</small></span><ArrowRight/><span lang="ko">{form.stem} + 게 하다<small>estrutura</small></span><ArrowRight/><span lang="ko">{form.result}<small>causar / permitir</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{form.sentence}</strong><p>{form.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(form.result+'. '+form.sentence)}><Volume2 size={17}/>Ouvir a construção</button></div><div className="rl-rules"><div><strong>-게 하다</strong><p>forma básica</p></div><div><strong>-게 했어요</strong><p>passado educado</p></div><div><strong>contexto</strong><p>fazer, deixar ou permitir</p></div></div></>:
   step===2?<><p className="vl-kicker">03 · CAUSATIVOS LEXICAIS</p><h3>Alguns verbos têm um parceiro próprio.</h3><p>Esses pares não são produzidos por uma única regra confiável. Aprenda cada causativo junto com uma frase.</p><div className="rl-choice-grid" role="group" aria-label="Escolha um par causativo">{lexical.map((item,index)=><button type="button" key={item.cause} aria-pressed={pair===index} onClick={()=>setPair(index)}><strong lang="ko">{item.base} → {item.cause}</strong><small>{item.meaning}</small></button>)}</div><div className="rl-path"><span lang="ko">{word.base}<small>ação simples</small></span><ArrowRight/><span lang="ko">{word.cause}<small>causativo lexical</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{word.sentence}</strong><p>{word.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(word.base+'. '+word.cause+'. '+word.sentence)}><Volume2 size={17}/>Ouvir o par</button></div><details className="vl-reference"><summary>Quando usar -게 하다 ou um verbo lexical?</summary><p>Os causativos lexicais são muito frequentes com verbos comuns e podem ter significado especializado. <b>-게 하다</b> é mais transparente e produtivo. Observe o uso natural de cada verbo em contexto.</p></details></>:
   <><p className="vl-kicker">04 · QUEM FEZ O QUÊ?</p><h3>Resolva os papéis e escolha a forma natural.</h3><div className="st-challenge"><span>{round+1} / {challenges.length}</span><h4>{task.prompt}</h4><div className="st-answer-options rl-challenge-options" role="group" aria-label="Respostas do laboratório de causativos">{task.options.map(option=><button type="button" key={option} lang="ko" aria-pressed={answer===option} onClick={()=>{setAnswer(option);setChecked(false);speech.speak(option);}}>{option}</button>)}</div><button type="button" className="primary" disabled={!answer} onClick={()=>{setChecked(true);if(correct)setWins(currentWins=>currentWins.includes(round)?currentWins:[...currentWins,round]);}}>Conferir minha resposta</button></div>{checked&&<div className={'st-feedback '+(correct?'st-correct':'')} role="status"><strong>{correct?'Muito bem! Os dois papéis ficaram claros.':'Volte ao mapa: uma pessoa provoca e outra executa a ação.'}</strong><p>{correct?task.feedback:'Confira a base verbal, a forma -게 하다 e os pares lexicais.'}</p></div>}<div className="st-inline-actions"><span>{wins.length} / {challenges.length} <span>descobertas</span></span><button type="button" className="secondary" onClick={()=>nextChallenge((round+1)%challenges.length)}>Próximo desafio<ArrowRight size={17}/></button><button type="button" className="text-button" onClick={()=>{nextChallenge(0);setWins([]);}}><RotateCcw size={16}/>Recomeçar</button></div><ul className="vl-takeaways"><li><CheckCircle2/>-게 하다 liga quem provoca à ação realizada.</li><li><CheckCircle2/>O contexto decide entre fazer, deixar e permitir.</li><li><CheckCircle2/>먹이다, 웃기다 e 재우다 são pares lexicais.</li></ul></>}
  </div>
  <div className="vl-step-footer"><span>{step+1} / 4</span><div><button type="button" className="text-button" disabled={step===0} onClick={()=>go(step-1)}><ArrowLeft size={16}/>Anterior</button>{step<3?<button type="button" className="primary" onClick={()=>go(step+1)}>Continuar<ArrowRight size={16}/></button>:<a className="primary" href="#causative-practice" onClick={event=>{event.preventDefault();const el=document.getElementById('causative-practice');el?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}>Ir para os exercícios<ArrowRight size={16}/></a>}</div></div>
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}


