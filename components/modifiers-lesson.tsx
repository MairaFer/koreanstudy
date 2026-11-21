'use client';
import {useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,BookOpen,CheckCircle2,Clock3,Lightbulb,RotateCcw,Tags,Volume2} from 'lucide-react';
import {LessonText} from './lesson-text';
import {useKoreanSpeech} from './korean-audio';

const forms=[
 {label:'Descrição',source:'작다',modifier:'작은',noun:'집',phrase:'작은 집',pt:'casa pequena',rule:'Adjetivo descritivo no presente: -(으)ㄴ.'},
 {label:'Ação presente',source:'읽다',modifier:'읽는',noun:'사람',phrase:'읽는 사람',pt:'pessoa que lê / está lendo',rule:'Verbo de ação no presente: -는.'},
 {label:'Ação passada',source:'읽다',modifier:'읽은',noun:'책',phrase:'읽은 책',pt:'livro que li',rule:'Verbo de ação no passado: -(으)ㄴ.'},
 {label:'Ação futura',source:'읽다',modifier:'읽을',noun:'책',phrase:'읽을 책',pt:'livro que vou ler',rule:'Verbo de ação no futuro: -(으)ㄹ.'},
];
const timelines=[
 {time:'Agora / hábito',modifier:'읽는',phrase:'제가 읽는 책이에요.',pt:'É o livro que estou lendo.'},
 {time:'Já aconteceu',modifier:'읽은',phrase:'제가 읽은 책이에요.',pt:'É o livro que li.'},
 {time:'Ainda vai acontecer',modifier:'읽을',phrase:'제가 읽을 책이에요.',pt:'É o livro que vou ler.'},
];
const builders=[
 {modifier:'예쁜',noun:'꽃',phrase:'예쁜 꽃',pt:'flor bonita'},
 {modifier:'재미있는',noun:'영화',phrase:'재미있는 영화',pt:'filme interessante'},
 {modifier:'한국에 사는',noun:'친구',phrase:'한국에 사는 친구',pt:'amigo que mora na Coreia'},
 {modifier:'어제 만난',noun:'사람',phrase:'어제 만난 사람',pt:'pessoa que encontrei ontem'},
];
const challenges=[
 {prompt:'“pessoa que lê”',options:['읽은 사람','읽는 사람','읽을 사람'],answer:'읽는 사람',feedback:'Verbo de ação no presente recebe -는.'},
 {prompt:'“livro que li”',options:['읽는 책','읽은 책','읽을 책'],answer:'읽은 책',feedback:'Ação concluída usa -(으)ㄴ antes do substantivo.'},
 {prompt:'“livro que vou ler”',options:['읽을 책','읽은 책','읽는 책'],answer:'읽을 책',feedback:'Ação futura usa -(으)ㄹ antes do substantivo.'},
 {prompt:'“casa pequena”',options:['작는 집','작은 집','작을 집'],answer:'작은 집',feedback:'Adjetivo descritivo no presente usa -(으)ㄴ.'},
 {prompt:'“filme interessante” com 재미있다',options:['재미있는 영화','재미있은 영화','재미있을 영화'],answer:'재미있는 영화',feedback:'있다 e 없다 usam -는 em formas como 재미있는 e 없는.'},
];
const steps=['Veja a posição','Viaje no tempo','Monte a expressão','Oficina'];

export function ModifiersLesson(){
 const [step,setStep]=useState(0),[form,setForm]=useState(0),[timeline,setTimeline]=useState(0),[builder,setBuilder]=useState(0),[round,setRound]=useState(0),[answer,setAnswer]=useState(''),[checked,setChecked]=useState(false),[wins,setWins]=useState<number[]>([]);
 const root=useRef<HTMLDivElement>(null),speech=useKoreanSpeech(),shape=forms[form],moment=timelines[timeline],built=builders[builder],task=challenges[round],correct=answer===task.answer;
 function go(next:number){speech.stop();setStep(next);requestAnimationFrame(()=>{root.current?.focus({preventScroll:true});root.current?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});}
 function nextChallenge(next:number){setRound(next);setAnswer('');setChecked(false);speech.stop();}
 return <LessonText><div className="vowel-lab routine-lab" tabIndex={-1} ref={root}>
  <div className="vl-welcome"><div><span className="vl-kicker"><Tags size={15}/>A DESCRIÇÃO VEM PRIMEIRO</span><h2>Que pessoa? Qual livro?</h2><p>Em coreano, a informação que identifica ou descreve vem antes do substantivo. A terminação mostra se é qualidade ou ação e quando ela acontece.</p></div><div className="vl-welcome-art" aria-hidden="true"><span>는</span><BookOpen/></div></div>
  <nav className="vl-steps" aria-label="Etapas da nona aula intermediária">{steps.map((label,index)=><button type="button" key={label} aria-current={step===index?'step':undefined} onClick={()=>go(index)}><span>{index+1}</span>{label}</button>)}</nav>
  <div className="vl-panel" key={step}>
   {step===0?<><p className="vl-kicker">01 · MODIFICADOR + SUBSTANTIVO</p><h3>A informação fica imediatamente antes do nome.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha um tipo de modificador">{forms.map((item,index)=><button type="button" key={item.label} aria-pressed={form===index} onClick={()=>{setForm(index);speech.stop();}}><strong>{item.label}</strong><small>{item.phrase}</small></button>)}</div><div className="rl-path"><span lang="ko">{shape.source}<small>forma de dicionário</small></span><ArrowRight/><span lang="ko">{shape.modifier}<small>modificador</small></span><ArrowRight/><span lang="ko">{shape.noun}<small>substantivo</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{shape.phrase}</strong><p>{shape.pt}</p><p>{shape.rule}</p><button type="button" className="secondary" onClick={()=>speech.speak(shape.phrase)}><Volume2 size={17}/>Ouvir</button></div><div className="vl-note"><Lightbulb size={20}/><p>Não use uma frase separada depois do nome. “Casa pequena” é <b>작은 집</b>: a descrição já prepara o substantivo que vem em seguida.</p></div></>:
   step===1?<><p className="vl-kicker">02 · UM VERBO, TRÊS MOMENTOS</p><h3>읽다 muda conforme a relação temporal.</h3><div className="rl-rules"><div><strong>읽는 책</strong><p>livro que leio / estou lendo</p></div><div><strong>읽은 책</strong><p>livro que li</p></div><div><strong>읽을 책</strong><p>livro que vou ler</p></div></div><div className="st-example-tabs" role="group" aria-label="Escolha o momento da ação">{timelines.map((item,index)=><button type="button" key={item.time} aria-pressed={timeline===index} onClick={()=>setTimeline(index)}>{item.time}</button>)}</div><div className="rl-context" aria-live="polite"><Clock3/><strong lang="ko">{moment.phrase}</strong><p>{moment.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(moment.phrase)}><Volume2 size={17}/>Ouvir</button></div><div className="vl-note"><Lightbulb size={20}/><p>A mesma forma <b>-(으)ㄴ</b> pode marcar um adjetivo presente ou uma ação passada. Classifique primeiro o predicado: <b>작은 집</b> descreve; <b>읽은 책</b> relata uma ação concluída.</p></div></>:
   step===2?<><p className="vl-kicker">03 · CONSTRUTOR DE ETIQUETAS</p><h3>Escolha uma expressão que identifica algo.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha uma expressão modificadora">{builders.map((item,index)=><button type="button" key={item.phrase} aria-pressed={builder===index} onClick={()=>setBuilder(index)}><strong>{item.modifier}</strong><small>+ {item.noun}</small></button>)}</div><div className="rl-path"><span lang="ko">{built.modifier}<small>o que sabemos</small></span><ArrowRight/><span lang="ko">{built.noun}<small>quem / o quê</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{built.phrase}</strong><p>{built.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(built.phrase)}><Volume2 size={17}/>Ouvir a expressão</button></div><details className="vl-reference"><summary>O caso de 있다 e 없다</summary><p>Embora expressem estado ou existência, <b>있다</b> e <b>없다</b> aparecem com -는: 재미있는 영화 (“filme interessante”), 시간이 없는 사람 (“pessoa sem tempo”). Aprenda essas formas como um padrão importante.</p></details></>:
   <><p className="vl-kicker">04 · QUAL FORMA VEM ANTES DO NOME?</p><h3>Classifique e localize a ação no tempo.</h3><p>Resolva cinco desafios. Depois, siga para os exercícios que salvam seu progresso.</p><div className="st-challenge"><span>{round+1} / {challenges.length}</span><h4>{task.prompt}</h4><div className="st-answer-options rl-challenge-options" role="group" aria-label="Respostas da oficina de modificadores">{task.options.map(option=><button type="button" key={option} lang="ko" aria-pressed={answer===option} onClick={()=>{setAnswer(option);setChecked(false);speech.speak(option);}}>{option}</button>)}</div><button type="button" className="primary" disabled={!answer} onClick={()=>{setChecked(true);if(correct)setWins(current=>current.includes(round)?current:[...current,round]);}}>Conferir minha resposta</button></div>{checked&&<div className={'st-feedback '+(correct?'st-correct':'')} role="status"><strong>{correct?'Isso! O modificador combina com a classe e o tempo.':'Primeiro decida: descrição ou ação? Depois localize a ação no tempo.'}</strong><p>{correct?task.feedback:'Adjetivo presente usa -(으)ㄴ; ação presente -는; passada -(으)ㄴ; futura -(으)ㄹ.'}</p></div>}<div className="st-inline-actions"><span>{wins.length} / {challenges.length} <span>descobertas</span></span><button type="button" className="secondary" onClick={()=>nextChallenge((round+1)%challenges.length)}>Próximo desafio<ArrowRight size={17}/></button><button type="button" className="text-button" onClick={()=>{nextChallenge(0);setWins([]);}}><RotateCcw size={16}/>Recomeçar</button></div><ul className="vl-takeaways"><li><CheckCircle2/>A expressão modificadora vem antes do substantivo.</li><li><CheckCircle2/>Ações presentes, passadas e futuras usam formas diferentes.</li><li><CheckCircle2/>A classe da palavra vem antes da escolha da terminação.</li></ul></>}
  </div>
  <div className="vl-step-footer"><span>{step+1} / 4</span><div><button type="button" className="text-button" disabled={step===0} onClick={()=>go(step-1)}><ArrowLeft size={16}/>Anterior</button>{step<3?<button type="button" className="primary" onClick={()=>go(step+1)}>Continuar<ArrowRight size={16}/></button>:<a className="primary" href="#modifiers-practice" onClick={event=>{event.preventDefault();const el=document.getElementById('modifiers-practice');el?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}>Ir para os exercícios<ArrowRight size={16}/></a>}</div></div>
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}

