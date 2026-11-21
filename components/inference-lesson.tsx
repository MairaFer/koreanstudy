'use client';
import {useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,CheckCircle2,Eye,Lightbulb,RotateCcw,Search,Volume2} from 'lucide-react';
import {LessonText} from './lesson-text';
import {useKoreanSpeech} from './korean-audio';

const seemForms=[
 {label:'Ação presente',source:'오다',form:'오는 것 같아요',sentence:'친구가 오는 것 같아요.',pt:'Parece que meu amigo está vindo.',rule:'Verbo de ação presente: -는 것 같아요.'},
 {label:'Descrição',source:'좋다',form:'좋은 것 같아요',sentence:'이 방법이 좋은 것 같아요.',pt:'Acho que este método é bom.',rule:'Adjetivo presente: -(으)ㄴ 것 같아요.'},
 {label:'Ação passada',source:'가다',form:'간 것 같아요',sentence:'친구가 이미 간 것 같아요.',pt:'Parece que meu amigo já foi.',rule:'Ação passada: -(으)ㄴ 것 같아요.'},
 {label:'Previsão',source:'오다',form:'올 것 같아요',sentence:'내일 비가 올 것 같아요.',pt:'Parece que vai chover amanhã.',rule:'Previsão: -(으)ㄹ 것 같아요.'},
];
const evidence=[
 {clue:'As pessoas estão com guarda-chuvas molhados.',ko:'밖에 비가 오나 봐요.',pt:'Parece que está chovendo lá fora.',type:'ação / indício'},
 {clue:'A sala está vazia e as luzes estão apagadas.',ko:'수업이 끝났나 봐요.',pt:'Parece que a aula terminou.',type:'ação passada / indício'},
 {clue:'Ela não responde e tem muitos livros na mesa.',ko:'바쁜가 봐요.',pt:'Parece que ela está ocupada.',type:'descrição / indício'},
];
const degrees=[
 {label:'Avaliação suave',ko:'이 방법이 좋은 것 같아요.',pt:'Acho que este método é bom.',note:'것 같아요 suaviza uma avaliação ou apresenta uma impressão.'},
 {label:'Inferência',ko:'비가 오나 봐요.',pt:'Parece que está chovendo.',note:'-나 봐요 sugere conclusão a partir de indícios.'},
 {label:'Certeza',ko:'비가 와요.',pt:'Está chovendo.',note:'A afirmação simples apresenta a informação sem marcar suposição.'},
];
const challenges=[
 {prompt:'좋다 no presente com 것 같아요',options:['좋는 것 같아요','좋은 것 같아요','좋았는 것 같아요'],answer:'좋은 것 같아요',feedback:'Adjetivo presente recebe -(으)ㄴ: 좋은 것 같아요.'},
 {prompt:'오다 como ação presente',options:['오는 것 같아요','온 것 같아요','올 것 같아요'],answer:'오는 것 같아요',feedback:'Ação presente usa -는 것 같아요.'},
 {prompt:'가다 como ação passada',options:['가는 것 같아요','간 것 같아요','갈 것 같아요'],answer:'간 것 같아요',feedback:'Ação passada usa -(으)ㄴ 것 같아요.'},
 {prompt:'Previsão: “parece que virá”',options:['오는 것 같아요','온 것 같아요','올 것 같아요'],answer:'올 것 같아요',feedback:'Previsão usa -(으)ㄹ 것 같아요.'},
 {prompt:'Inferência a partir de sinais de chuva',options:['비가 오나 봐요.','비가 오고 싶어요.','비가 오더라도요.'],answer:'비가 오나 봐요.',feedback:'-나 봐요 apresenta uma inferência baseada em indícios.'},
];
const steps=['Escolha o tempo','Siga os indícios','Ajuste a certeza','Oficina'];

export function InferenceLesson(){
 const [step,setStep]=useState(0),[seem,setSeem]=useState(0),[clue,setClue]=useState(0),[degree,setDegree]=useState(0),[round,setRound]=useState(0),[answer,setAnswer]=useState(''),[checked,setChecked]=useState(false),[wins,setWins]=useState<number[]>([]);
 const root=useRef<HTMLDivElement>(null),speech=useKoreanSpeech(),shape=seemForms[seem],sign=evidence[clue],stance=degrees[degree],task=challenges[round],correct=answer===task.answer;
 function go(next:number){speech.stop();setStep(next);requestAnimationFrame(()=>{root.current?.focus({preventScroll:true});root.current?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});}
 function nextChallenge(next:number){setRound(next);setAnswer('');setChecked(false);speech.stop();}
 return <LessonText><div className="vowel-lab routine-lab" tabIndex={-1} ref={root}>
  <div className="vl-welcome"><div><span className="vl-kicker"><Search size={15}/>ENTRE O INDÍCIO E A CERTEZA</span><h2>Parece, acho ou provavelmente?</h2><p>Você vai marcar avaliações e suposições sem apresentá-las como fatos, escolhendo a forma pelo tipo de predicado, tempo e evidência.</p></div><div className="vl-welcome-art" aria-hidden="true"><span>것</span><Eye/></div></div>
  <nav className="vl-steps" aria-label="Etapas da quinta aula avançada">{steps.map((label,index)=><button type="button" key={label} aria-current={step===index?'step':undefined} onClick={()=>go(index)}><span>{index+1}</span>{label}</button>)}</nav>
  <div className="vl-panel" key={step}>
   {step===0?<><p className="vl-kicker">01 · O TEMPO ANTES DE 것 같아요</p><h3>A forma modificadora carrega a pista.</h3><div className="rl-rules"><div><strong>Ação presente</strong><p>-는 것 같아요</p></div><div><strong>Ação passada</strong><p>-(으)ㄴ 것 같아요</p></div><div><strong>Previsão</strong><p>-(으)ㄹ 것 같아요</p></div></div><div className="rl-choice-grid" role="group" aria-label="Escolha tipo e tempo">{seemForms.map((item,index)=><button type="button" key={item.label} aria-pressed={seem===index} onClick={()=>{setSeem(index);speech.stop();}}><strong>{item.label}</strong><small>{item.source} → {item.form}</small></button>)}</div><div className="rl-path"><span lang="ko">{shape.source}</span><ArrowRight/><span lang="ko">{shape.form}</span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{shape.sentence}</strong><p>{shape.pt}</p><p>{shape.rule}</p><button type="button" className="secondary" onClick={()=>speech.speak(shape.sentence)}><Volume2 size={17}/>Ouvir</button></div><div className="vl-note"><Lightbulb size={20}/><p>A mesma forma <b>-(으)ㄴ</b> pode ser adjetivo presente ou ação passada. Classifique primeiro: <b>좋은 것 같아요</b> versus <b>간 것 같아요</b>.</p></div></>:
   step===1?<><p className="vl-kicker">02 · -나 봐요: LEIA OS SINAIS</p><h3>A conclusão nasce de uma evidência contextual.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha um conjunto de indícios">{evidence.map((item,index)=><button type="button" key={item.ko} aria-pressed={clue===index} onClick={()=>setClue(index)}><strong>{item.type}</strong><small>{item.clue}</small></button>)}</div><div className="rl-path"><span><Eye size={18}/><small>indícios</small>{sign.clue}</span><ArrowRight/><span lang="ko">{sign.ko}<small>inferência</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{sign.ko}</strong><p>{sign.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(sign.ko)}><Volume2 size={17}/>Ouvir</button></div><div className="vl-note"><Lightbulb size={20}/><p>A evidência não precisa ser visual. Sons, comportamento, contexto anterior ou informações disponíveis também podem sustentar a inferência.</p></div><details className="vl-reference"><summary>Adjetivos com -나 봐요</summary><p>Em descrições presentes, é comum <b>-(으)ㄴ가 봐요</b>: 바쁘다 → 바쁜가 봐요. Na fala, também aparecem variações; nesta aula, pratique primeiro os padrões apresentados.</p></details></>:
   step===2?<><p className="vl-kicker">03 · CONTROLE DE COMPROMISSO</p><h3>Quanto você assume como certo?</h3><div className="st-example-tabs" role="group" aria-label="Escolha o grau de certeza">{degrees.map((item,index)=><button type="button" key={item.label} aria-pressed={degree===index} onClick={()=>setDegree(index)}>{item.label}</button>)}</div><div className="rl-context" aria-live="polite"><strong lang="ko">{stance.ko}</strong><p>{stance.pt}</p><p>{stance.note}</p><button type="button" className="secondary" onClick={()=>speech.speak(stance.ko)}><Volume2 size={17}/>Ouvir</button></div><div className="rl-rules"><div><strong>것 같아요</strong><p>impressão / avaliação suavizada</p></div><div><strong>-나 봐요</strong><p>inferência a partir de sinais</p></div><div><strong>Forma simples</strong><p>afirmação sem marcador de dúvida</p></div></div></>:
   <><p className="vl-kicker">04 · QUE PISTA A FORMA CARREGA?</p><h3>Classe, tempo e evidência decidem juntos.</h3><p>Resolva cinco desafios e siga para os exercícios que registram seu progresso.</p><div className="st-challenge"><span>{round+1} / {challenges.length}</span><h4>{task.prompt}</h4><div className="st-answer-options rl-challenge-options" role="group" aria-label="Respostas da oficina de inferências">{task.options.map(option=><button type="button" key={option} lang="ko" aria-pressed={answer===option} onClick={()=>{setAnswer(option);setChecked(false);speech.speak(option);}}>{option}</button>)}</div><button type="button" className="primary" disabled={!answer} onClick={()=>{setChecked(true);if(correct)setWins(current=>current.includes(round)?current:[...current,round]);}}>Conferir minha resposta</button></div>{checked&&<div className={'st-feedback '+(correct?'st-correct':'')} role="status"><strong>{correct?'Isso! A forma marca a suposição corretamente.':'Confira se é ação ou descrição e localize-a no tempo.'}</strong><p>{correct?task.feedback:'Ação presente usa -는; passada -(으)ㄴ; previsão -(으)ㄹ; -나 봐요 destaca inferência.'}</p></div>}<div className="st-inline-actions"><span>{wins.length} / {challenges.length} <span>descobertas</span></span><button type="button" className="secondary" onClick={()=>nextChallenge((round+1)%challenges.length)}>Próximo desafio<ArrowRight size={17}/></button><button type="button" className="text-button" onClick={()=>{nextChallenge(0);setWins([]);}}><RotateCcw size={16}/>Recomeçar</button></div><ul className="vl-takeaways"><li><CheckCircle2/>A forma antes de 것 marca classe e tempo.</li><li><CheckCircle2/>-나 봐요 sugere inferência por indícios.</li><li><CheckCircle2/>Essas formas evitam apresentar suposição como certeza.</li></ul></>}
  </div>
  <div className="vl-step-footer"><span>{step+1} / 4</span><div><button type="button" className="text-button" disabled={step===0} onClick={()=>go(step-1)}><ArrowLeft size={16}/>Anterior</button>{step<3?<button type="button" className="primary" onClick={()=>go(step+1)}>Continuar<ArrowRight size={16}/></button>:<a className="primary" href="#inference-practice" onClick={event=>{event.preventDefault();const el=document.getElementById('inference-practice');el?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}>Ir para os exercícios<ArrowRight size={16}/></a>}</div></div>
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}

