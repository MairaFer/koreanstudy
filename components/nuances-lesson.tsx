'use client';
import {useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,CheckCircle2,Eye,Lightbulb,MessageCircle,RotateCcw,Volume2} from 'lucide-react';
import {LessonText} from './lesson-text';
import {useKoreanSpeech} from './korean-audio';

const discoveries=[
 {before:'쉬울 거라고 생각했어요.',after:'생각보다 어렵네요.',pt:'Pensei que seria fácil. É mais difícil do que eu imaginava.',clue:'A dificuldade é percebida agora.'},
 {before:'밖을 봤어요.',after:'눈이 많이 오네요.',pt:'Olhei para fora. Está nevando bastante!',clue:'O falante observa a neve neste momento.'},
 {before:'노래를 처음 들었어요.',after:'목소리가 정말 좋네요.',pt:'Ouvi a música pela primeira vez. A voz é realmente boa!',clue:'A avaliação nasce da experiência imediata.'},
];
const realizations=[
 {type:'adjective',base:'조용하다',form:'조용하군요.',pt:'Entendo, então é silencioso.'},
 {type:'action',base:'한국어를 공부하다',form:'한국어를 공부하는군요.',pt:'Ah, então você estuda coreano.'},
 {type:'past',base:'벌써 끝나다',form:'벌써 끝났군요.',pt:'Entendo, então já terminou.'},
 {type:'noun',base:'학생이다',form:'학생이군요.',pt:'Ah, então é estudante.'},
];
const backgrounds=[
 {question:'왜 일찍 가요?',answer:'내일 시험이 있거든요.',pt:'Por que vai cedo? É que tenho uma prova amanhã.',role:'explicação de fundo'},
 {question:'이 식당에 자주 와요?',answer:'음식이 정말 맛있거든요.',pt:'Vem sempre a este restaurante? É que a comida é muito gostosa.',role:'razão que o ouvinte talvez não saiba'},
 {question:'한국어를 잘하시네요.',answer:'한국에서 오래 살았거든요.',pt:'Você fala coreano muito bem. É que morei bastante tempo na Coreia.',role:'contexto que explica a situação'},
];
const challenges=[
 {prompt:'Você prova o prato e percebe que está delicioso.',options:['정말 맛있네요.','정말 맛있거든요.','정말 맛있는군요만.'],answer:'정말 맛있네요.',feedback:'-네요 combina com uma percepção imediata após provar.'},
 {prompt:'Complete o verbo de ação: 공부하다 → 공부___군요',options:['하는','한','하다'],answer:'하는',feedback:'Verbos de ação no presente usam -는군요: 공부하는군요.'},
 {prompt:'Qual terminação introduz informação de fundo?',options:['-거든요','-네요','-지만'],answer:'-거든요',feedback:'-거든요 fornece contexto ou explicação relevante ao interlocutor.'},
 {prompt:'“Ah, então você é estudante.”',options:['학생이군요.','학생는군요.','학생거든요?'],answer:'학생이군요.',feedback:'Substantivo com batchim recebe -이군요.'},
 {prompt:'Por que não há tradução fixa para -네요?',options:['O sentido depende da situação e da percepção','Ela sempre significa surpresa extrema','Ela marca somente o passado'],answer:'O sentido depende da situação e da percepção',feedback:'Entonação, conhecimento anterior e contexto definem a nuance.'},
];
const steps=['Descoberta','Constatação','Informação de fundo','Laboratório'];

export function NuancesLesson(){
 const [step,setStep]=useState(0),[discovery,setDiscovery]=useState(0),[realization,setRealization]=useState(0),[background,setBackground]=useState(0),[round,setRound]=useState(0),[answer,setAnswer]=useState(''),[checked,setChecked]=useState(false),[wins,setWins]=useState<number[]>([]);
 const root=useRef<HTMLDivElement>(null),speech=useKoreanSpeech(),seen=discoveries[discovery],understood=realizations[realization],context=backgrounds[background],task=challenges[round],correct=answer===task.answer;
 function go(next:number){speech.stop();setStep(next);requestAnimationFrame(()=>{root.current?.focus({preventScroll:true});root.current?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});}
 function nextChallenge(next:number){setRound(next);setAnswer('');setChecked(false);speech.stop();}
 return <LessonText><div className="vowel-lab routine-lab" tabIndex={-1} ref={root}>
  <div className="vl-welcome"><div><span className="vl-kicker"><MessageCircle size={15}/>O CONTEXTO MUDA O TOM</span><h2>Percebi agora, entendi ou estou explicando?</h2><p>As terminações não são emoções prontas. Elas mostram como a informação entra na conversa: como descoberta, constatação ou contexto compartilhado.</p></div><div className="vl-welcome-art" aria-hidden="true"><span>네</span><Eye/></div></div>
  <nav className="vl-steps" aria-label="Etapas da nona aula avançada">{steps.map((label,index)=><button type="button" key={label} aria-current={step===index?'step':undefined} onClick={()=>go(index)}><span>{index+1}</span>{label}</button>)}</nav>
  <div className="vl-panel" key={step}>
   {step===0?<><p className="vl-kicker">01 · -네요</p><h3>Uma percepção ganha voz no momento.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha uma descoberta">{discoveries.map((item,index)=><button type="button" key={item.after} aria-pressed={discovery===index} onClick={()=>setDiscovery(index)}><strong lang="ko">{item.after}</strong><small>{item.clue}</small></button>)}</div><div className="rl-path"><span lang="ko">{seen.before}<small>expectativa ou situação anterior</small></span><ArrowRight/><span lang="ko">{seen.after}<small>percepção atual</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{seen.after}</strong><p>{seen.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(seen.before+' '+seen.after)}><Volume2 size={17}/>Ouvir a cena</button></div><div className="vl-note"><Lightbulb size={20}/><p><b>-네요</b> pode soar admirado, impressionado ou apenas observador. A situação e a entonação indicam a emoção, não a terminação isolada.</p></div></>:
   step===1?<><p className="vl-kicker">02 · -군요 / -는군요</p><h3>O falante organiza uma nova compreensão.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha uma constatação">{realizations.map((item,index)=><button type="button" key={item.form} aria-pressed={realization===index} onClick={()=>setRealization(index)}><strong lang="ko">{item.form}</strong><small>{item.type}</small></button>)}</div><div className="rl-path"><span lang="ko">{understood.base}<small>informação recebida</small></span><ArrowRight/><span lang="ko">{understood.form}<small>nova constatação</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{understood.form}</strong><p>{understood.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(understood.form)}><Volume2 size={17}/>Ouvir</button></div><div className="rl-rules"><div><strong>-군요</strong><p>adjetivos e constatações</p></div><div><strong>-는군요</strong><p>ação no presente</p></div><div><strong>-(이)군요</strong><p>substantivos</p></div></div></>:
   step===2?<><p className="vl-kicker">03 · -거든요</p><h3>Acrescente a peça que explica a situação.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha um diálogo">{backgrounds.map((item,index)=><button type="button" key={item.answer} aria-pressed={background===index} onClick={()=>setBackground(index)}><strong lang="ko">{item.question}</strong><small>{item.role}</small></button>)}</div><div className="rl-context" aria-live="polite"><p className="vl-kicker">PERGUNTA</p><strong lang="ko">{context.question}</strong><p className="vl-kicker">RESPOSTA</p><strong lang="ko">{context.answer}</strong><p>{context.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(context.question+' '+context.answer)}><Volume2 size={17}/>Ouvir o diálogo</button></div><details className="vl-reference"><summary>-거든요 é sempre “porque”?</summary><p>Não. Muitas vezes a tradução causal funciona, mas a função central é oferecer informação de fundo que ajuda o interlocutor a interpretar a situação. O tom pode também preparar uma continuação.</p></details></>:
   <><p className="vl-kicker">04 · LEIA A SITUAÇÃO</p><h3>Escolha a nuance, não apenas a tradução.</h3><div className="st-challenge"><span>{round+1} / {challenges.length}</span><h4>{task.prompt}</h4><div className="st-answer-options rl-challenge-options" role="group" aria-label="Respostas do laboratório de nuances">{task.options.map(option=><button type="button" key={option} lang="ko" aria-pressed={answer===option} onClick={()=>{setAnswer(option);setChecked(false);speech.speak(option);}}>{option}</button>)}</div><button type="button" className="primary" disabled={!answer} onClick={()=>{setChecked(true);if(correct)setWins(current=>current.includes(round)?current:[...current,round]);}}>Conferir minha resposta</button></div>{checked&&<div className={'st-feedback '+(correct?'st-correct':'')} role="status"><strong>{correct?'Isso! Você leu a relação entre informação e contexto.':'Observe se a fala descobre, constata ou explica.'}</strong><p>{correct?task.feedback:'Revise o que o falante sabia antes e o que está acrescentando agora.'}</p></div>}<div className="st-inline-actions"><span>{wins.length} / {challenges.length} <span>descobertas</span></span><button type="button" className="secondary" onClick={()=>nextChallenge((round+1)%challenges.length)}>Próximo desafio<ArrowRight size={17}/></button><button type="button" className="text-button" onClick={()=>{nextChallenge(0);setWins([]);}}><RotateCcw size={16}/>Recomeçar</button></div><ul className="vl-takeaways"><li><CheckCircle2/>-네요 apresenta uma percepção atual.</li><li><CheckCircle2/>-군요 organiza uma constatação.</li><li><CheckCircle2/>-거든요 oferece informação de fundo.</li></ul></>}
  </div>
  <div className="vl-step-footer"><span>{step+1} / 4</span><div><button type="button" className="text-button" disabled={step===0} onClick={()=>go(step-1)}><ArrowLeft size={16}/>Anterior</button>{step<3?<button type="button" className="primary" onClick={()=>go(step+1)}>Continuar<ArrowRight size={16}/></button>:<a className="primary" href="#nuances-practice" onClick={event=>{event.preventDefault();const el=document.getElementById('nuances-practice');el?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}>Ir para os exercícios<ArrowRight size={16}/></a>}</div></div>
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}


