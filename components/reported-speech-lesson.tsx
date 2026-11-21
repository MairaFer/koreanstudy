'use client';
import {useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,CheckCircle2,Lightbulb,MessageSquareQuote,MessagesSquare,RotateCcw,Volume2} from 'lucide-react';
import {LessonText} from './lesson-text';
import {useKoreanSpeech} from './korean-audio';

const predicates=[
 {label:'Ação presente',source:'오다',meaning:'vir',quote:'온다고 해요',sentence:'친구가 내일 온다고 해요.',pt:'Meu amigo diz que vem amanhã.',rule:'Verbo de ação: -ㄴ/는다고 해요.'},
 {label:'Descrição',source:'좋다',meaning:'ser bom',quote:'좋다고 해요',sentence:'이 노래가 좋다고 해요.',pt:'Diz que esta música é boa.',rule:'Adjetivo descritivo: -다고 해요.'},
 {label:'Substantivo',source:'학생이다',meaning:'ser estudante',quote:'학생이라고 해요',sentence:'민수 씨는 학생이라고 해요.',pt:'Dizem que Minsu é estudante.',rule:'Substantivo: -(이)라고 해요.'},
 {label:'Ação passada',source:'가다',meaning:'ir',quote:'갔다고 해요',sentence:'어제 학교에 갔다고 해요.',pt:'Diz que foi à escola ontem.',rule:'Passado: -았/었다고 해요.'},
 {label:'Plano futuro',source:'갈 거예요',meaning:'vai ir',quote:'갈 거라고 해요',sentence:'다음 주에 갈 거라고 해요.',pt:'Diz que vai na próxima semana.',rule:'Futuro com 거예요: -(으)ㄹ 거라고 해요.'},
];
const speakers=[
 {speaker:'친구가',content:'오늘 바빠요.',reported:'친구가 오늘 바쁘다고 해요.',pt:'Meu amigo diz que está ocupado hoje.'},
 {speaker:'지민 씨가',content:'내일 와요.',reported:'지민 씨가 내일 온다고 해요.',pt:'Jimin diz que vem amanhã.'},
 {speaker:'선생님이',content:'시험이 있어요.',reported:'선생님이 시험이 있다고 해요.',pt:'O professor diz que haverá/tem uma prova.'},
];
const times=[
 {label:'Presente',direct:'“지금 공부해요.”',reported:'지금 공부한다고 해요.',pt:'Diz que está estudando agora.'},
 {label:'Passado',direct:'“어제 공부했어요.”',reported:'어제 공부했다고 해요.',pt:'Diz que estudou ontem.'},
 {label:'Futuro',direct:'“내일 공부할 거예요.”',reported:'내일 공부할 거라고 해요.',pt:'Diz que vai estudar amanhã.'},
];
const challenges=[
 {prompt:'Relate 좋다 no presente',options:['좋는다고 해요','좋다고 해요','좋이라고 해요'],answer:'좋다고 해요',feedback:'Adjetivos descritivos usam -다고 해요.'},
 {prompt:'Relate 먹다 no presente',options:['먹는다고 해요','먹다고 해요','먹이라고 해요'],answer:'먹는다고 해요',feedback:'Verbo de ação com base terminada em consoante usa -는다고.'},
 {prompt:'Relate 학생이다',options:['학생는다고 해요','학생다고 해요','학생이라고 해요'],answer:'학생이라고 해요',feedback:'Substantivo terminado em consoante recebe 이라고 해요.'},
 {prompt:'Relate 가다 no passado',options:['간다고 해요','갔다고 해요','갈 거라고 해요'],answer:'갔다고 해요',feedback:'A forma passada 갔다 recebe 고 해요.'},
 {prompt:'Relate “vai vir”',options:['온다고 해요','왔다고 해요','올 거라고 해요'],answer:'올 거라고 해요',feedback:'O futuro com -(으)ㄹ 거예요 vira -(으)ㄹ 거라고 해요.'},
];
const steps=['Classifique','Transforme a fala','Ajuste o tempo','Oficina'];

export function ReportedSpeechLesson(){
 const [step,setStep]=useState(0),[predicate,setPredicate]=useState(0),[speaker,setSpeaker]=useState(0),[revealed,setRevealed]=useState(false),[time,setTime]=useState(0),[round,setRound]=useState(0),[answer,setAnswer]=useState(''),[checked,setChecked]=useState(false),[wins,setWins]=useState<number[]>([]);
 const root=useRef<HTMLDivElement>(null),speech=useKoreanSpeech(),form=predicates[predicate],report=speakers[speaker],moment=times[time],task=challenges[round],correct=answer===task.answer;
 function go(next:number){speech.stop();setStep(next);requestAnimationFrame(()=>{root.current?.focus({preventScroll:true});root.current?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});}
 function nextChallenge(next:number){setRound(next);setAnswer('');setChecked(false);speech.stop();}
 return <LessonText><div className="vowel-lab routine-lab" tabIndex={-1} ref={root}>
  <div className="vl-welcome"><div><span className="vl-kicker"><MessageSquareQuote size={15}/>UMA VOZ DENTRO DE OUTRA</span><h2>O que essa pessoa disse?</h2><p>No discurso indireto, a forma depende do tipo de predicado e do tempo. Primeiro classifique; depois transforme.</p></div><div className="vl-welcome-art" aria-hidden="true"><span>고</span><MessagesSquare/></div></div>
  <nav className="vl-steps" aria-label="Etapas da primeira aula avançada">{steps.map((label,index)=><button type="button" key={label} aria-current={step===index?'step':undefined} onClick={()=>go(index)}><span>{index+1}</span>{label}</button>)}</nav>
  <div className="vl-panel" key={step}>
   {step===0?<><p className="vl-kicker">01 · QUE TIPO DE PREDICADO?</p><h3>A classificação escolhe a forma citativa.</h3><div className="rl-rules"><div><strong>Ação</strong><p>-ㄴ/는다고</p></div><div><strong>Descrição</strong><p>-다고</p></div><div><strong>Substantivo</strong><p>-(이)라고</p></div></div><div className="rl-choice-grid" role="group" aria-label="Escolha o tipo e o tempo">{predicates.map((item,index)=><button type="button" key={item.label} aria-pressed={predicate===index} onClick={()=>{setPredicate(index);speech.stop();}}><strong>{item.label}</strong><small>{item.source} · {item.meaning}</small></button>)}</div><div className="rl-path"><span lang="ko">{form.source}<small>forma original</small></span><ArrowRight/><span lang="ko">{form.quote}<small>fala relatada</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{form.sentence}</strong><p>{form.pt}</p><p>{form.rule}</p><button type="button" className="secondary" onClick={()=>speech.speak(form.sentence)}><Volume2 size={17}/>Ouvir</button></div></>:
   step===1?<><p className="vl-kicker">02 · DA FALA DIRETA AO RELATO</p><h3>Mantenha a mensagem e encaixe-a em 해요.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha quem falou">{speakers.map((item,index)=><button type="button" key={item.speaker} aria-pressed={speaker===index} onClick={()=>{setSpeaker(index);setRevealed(false);speech.stop();}}><strong>{item.speaker}</strong><small>{item.content}</small></button>)}</div><div className="rl-context"><span className="vl-kicker">FALA DIRETA</span><strong lang="ko">{report.content}</strong><button type="button" className="primary" onClick={()=>setRevealed(true)}>Transformar em relato</button>{revealed&&<div className="st-feedback st-correct" role="status"><strong lang="ko">{report.reported}</strong><p>{report.pt}</p><button type="button" className="text-button" onClick={()=>speech.speak(report.reported)}><Volume2 size={17}/>Ouvir o relato</button></div>}</div><div className="vl-note"><Lightbulb size={20}/><p>O discurso indireto não precisa repetir exatamente as mesmas palavras. Pessoas, lugar e tempo podem mudar conforme quem relata e quando relata.</p></div></>:
   step===2?<><p className="vl-kicker">03 · A MESMA AÇÃO EM TRÊS TEMPOS</p><h3>O tempo fica dentro da forma citativa.</h3><div className="st-example-tabs" role="group" aria-label="Escolha o tempo da fala">{times.map((item,index)=><button type="button" key={item.label} aria-pressed={time===index} onClick={()=>setTime(index)}>{item.label}</button>)}</div><div className="rl-context" aria-live="polite"><span className="vl-kicker">DIRETO</span><strong lang="ko">{moment.direct}</strong><span>↓</span><span className="vl-kicker">RELATADO</span><strong lang="ko">{moment.reported}</strong><p>{moment.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(moment.reported)}><Volume2 size={17}/>Ouvir</button></div><div className="rl-rules"><div><strong>Presente</strong><p>공부한다고 해요</p></div><div><strong>Passado</strong><p>공부했다고 해요</p></div><div><strong>Futuro</strong><p>공부할 거라고 해요</p></div></div></>:
   <><p className="vl-kicker">04 · CLASSIFIQUE ANTES DE RELATAR</p><h3>Ação, descrição, substantivo ou outro tempo?</h3><p>Resolva cinco desafios e siga para os exercícios que registram seu progresso.</p><div className="st-challenge"><span>{round+1} / {challenges.length}</span><h4>{task.prompt}</h4><div className="st-answer-options rl-challenge-options" role="group" aria-label="Respostas da oficina de discurso indireto">{task.options.map(option=><button type="button" key={option} lang="ko" aria-pressed={answer===option} onClick={()=>{setAnswer(option);setChecked(false);speech.speak(option);}}>{option}</button>)}</div><button type="button" className="primary" disabled={!answer} onClick={()=>{setChecked(true);if(correct)setWins(current=>current.includes(round)?current:[...current,round]);}}>Conferir minha resposta</button></div>{checked&&<div className={'st-feedback '+(correct?'st-correct':'')} role="status"><strong>{correct?'Isso! A forma citativa combina com o predicado.':'Classifique o predicado e confira o tempo antes de escolher.'}</strong><p>{correct?task.feedback:'Ação presente usa -ㄴ/는다고; descrição -다고; substantivo -(이)라고; passado -았/었다고.'}</p></div>}<div className="st-inline-actions"><span>{wins.length} / {challenges.length} <span>descobertas</span></span><button type="button" className="secondary" onClick={()=>nextChallenge((round+1)%challenges.length)}>Próximo desafio<ArrowRight size={17}/></button><button type="button" className="text-button" onClick={()=>{nextChallenge(0);setWins([]);}}><RotateCcw size={16}/>Recomeçar</button></div><ul className="vl-takeaways"><li><CheckCircle2/>A classe do predicado vem antes da terminação.</li><li><CheckCircle2/>O tempo permanece dentro da fala relatada.</li><li><CheckCircle2/>Referências podem ser ajustadas ao novo contexto.</li></ul></>}
  </div>
  <div className="vl-step-footer"><span>{step+1} / 4</span><div><button type="button" className="text-button" disabled={step===0} onClick={()=>go(step-1)}><ArrowLeft size={16}/>Anterior</button>{step<3?<button type="button" className="primary" onClick={()=>go(step+1)}>Continuar<ArrowRight size={16}/></button>:<a className="primary" href="#reported-speech-practice" onClick={event=>{event.preventDefault();const el=document.getElementById('reported-speech-practice');el?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}>Ir para os exercícios<ArrowRight size={16}/></a>}</div></div>
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}

