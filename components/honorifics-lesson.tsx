'use client';
import {useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,CheckCircle2,Lightbulb,RotateCcw,ShieldCheck,Volume2} from 'lucide-react';
import {LessonText} from './lesson-text';
import {useKoreanSpeech} from './korean-audio';

const audiences=[
 {plain:'선생님이 와요.',honorific:'선생님이 오세요.',formal:'선생님이 오십니다.',pt:['O professor vem.','O professor vem — sujeito respeitado.','O professor vem — sujeito respeitado e estilo formal.']},
 {plain:'할머니가 먹어요.',honorific:'할머니가 드세요.',formal:'할머니가 드십니다.',pt:['A avó come.','A avó come — forma honorífica.','A avó come — honorífico e formal.']},
 {plain:'사장님이 있어요.',honorific:'사장님이 계세요.',formal:'사장님이 계십니다.',pt:['O diretor está aqui.','O diretor está aqui — forma honorífica.','O diretor está aqui — honorífico e formal.']},
];
const formalForms=[
 {verb:'가다',statement:'갑니다',question:'갑니까?',rule:'Base em vogal: -ㅂ니다 / -ㅂ니까?'},
 {verb:'먹다',statement:'먹습니다',question:'먹습니까?',rule:'Base em consoante: -습니다 / -습니까?'},
 {verb:'공부하다',statement:'공부합니다',question:'공부합니까?',rule:'하다 → 합니다 / 합니까?'},
 {verb:'읽다',statement:'읽습니다',question:'읽습니까?',rule:'Base em consoante: -습니다 / -습니까?'},
];
const special=[
 {ordinary:'있다',respectful:'계시다',pt:'estar / existir',sentence:'교수님이 연구실에 계세요.',translation:'O professor está na sala de pesquisa.'},
 {ordinary:'먹다',respectful:'드시다',pt:'comer / beber',sentence:'할아버지가 식사하세요.',translation:'O avô faz a refeição.'},
 {ordinary:'말',respectful:'말씀',pt:'palavra / fala',sentence:'말씀해 주세요.',translation:'Por favor, fale.'},
 {ordinary:'이름',respectful:'성함',pt:'nome',sentence:'성함이 어떻게 되세요?',translation:'Qual é o seu nome?'},
];
const challenges=[
 {prompt:'Qual forma respeita o sujeito?',options:['선생님이 오세요.','제가 오세요.','선생님이 와.'],answer:'선생님이 오세요.',feedback:'오세요 contém -(으)시- e respeita 선생님, o sujeito.'},
 {prompt:'Forma formal declarativa de 먹다',options:['먹습니다','먹ㅂ니다','먹으세요만'],answer:'먹습니다',feedback:'A base 먹 termina em consoante e recebe -습니다.'},
 {prompt:'Pergunta formal de 가다',options:['갑니까?','가습니다?','가세요니까?'],answer:'갑니까?',feedback:'가 + -ㅂ니까? resulta em 갑니까?'},
 {prompt:'Forma honorífica de 있다',options:['계시다','있으시다만','드리다'],answer:'계시다',feedback:'계시다 é a forma honorífica lexical mais comum de 있다 para pessoas.'},
 {prompt:'O que 드리다 normalmente marca?',options:['Dar humildemente','Comer respeitosamente','Estar formalmente'],answer:'Dar humildemente',feedback:'드리다 rebaixa respeitosamente o ato de quem dá diante de quem recebe.'},
];
const steps=['Duas escolhas','Estilo formal','Palavras especiais','Laboratório'];

export function HonorificsLesson(){
 const [step,setStep]=useState(0),[audience,setAudience]=useState(0),[tone,setTone]=useState(0),[form,setForm]=useState(0),[word,setWord]=useState(0),[round,setRound]=useState(0),[answer,setAnswer]=useState(''),[checked,setChecked]=useState(false),[wins,setWins]=useState<number[]>([]);
 const root=useRef<HTMLDivElement>(null),speech=useKoreanSpeech(),scene=audiences[audience],formal=formalForms[form],specialWord=special[word],task=challenges[round],correct=answer===task.answer;
 const sentence=[scene.plain,scene.honorific,scene.formal][tone],translation=scene.pt[tone];
 function go(next:number){speech.stop();setStep(next);requestAnimationFrame(()=>{root.current?.focus({preventScroll:true});root.current?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});}
 function nextChallenge(next:number){setRound(next);setAnswer('');setChecked(false);speech.stop();}
 return <LessonText><div className="vowel-lab routine-lab" tabIndex={-1} ref={root}>
  <div className="vl-welcome"><div><span className="vl-kicker"><ShieldCheck size={15}/>RESPEITO TEM DUAS DIREÇÕES</span><h2>De quem você fala e com quem você fala?</h2><p>O coreano separa o respeito dado ao sujeito do nível de formalidade usado com o ouvinte. As duas escolhas podem aparecer juntas, mas não são iguais.</p></div><div className="vl-welcome-art" aria-hidden="true"><span>시</span><ShieldCheck/></div></div>
  <nav className="vl-steps" aria-label="Etapas da oitava aula avançada">{steps.map((label,index)=><button type="button" key={label} aria-current={step===index?'step':undefined} onClick={()=>go(index)}><span>{index+1}</span>{label}</button>)}</nav>
  <div className="vl-panel" key={step}>
   {step===0?<><p className="vl-kicker">01 · SUJEITO × OUVINTE</p><h3>Aumente o respeito sem trocar os papéis.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha a pessoa da frase">{audiences.map((item,index)=><button type="button" key={item.plain} aria-pressed={audience===index} onClick={()=>{setAudience(index);setTone(0);speech.stop();}}><strong lang="ko">{item.plain.split('이 ')[0]}</strong><small>{item.pt[0]}</small></button>)}</div><div className="st-example-tabs" role="group" aria-label="Escolha o nível de respeito"><button type="button" aria-pressed={tone===0} onClick={()=>setTone(0)}>Educado comum</button><button type="button" aria-pressed={tone===1} onClick={()=>setTone(1)}>Respeito ao sujeito</button><button type="button" aria-pressed={tone===2} onClick={()=>setTone(2)}>Respeito + formal</button></div><div className="rl-context" aria-live="polite"><strong lang="ko">{sentence}</strong><p>{translation}</p><button type="button" className="secondary" onClick={()=>speech.speak(sentence)}><Volume2 size={17}/>Ouvir</button></div><div className="rl-path"><span>SUJEITO<small>{tone>0?'respeitado com -(으)시-':'sem marca honorífica'}</small></span><ArrowRight/><span>OUVINTE<small>{tone===2?'estilo formal':'estilo educado 해요체'}</small></span></div><div className="vl-note"><Lightbulb size={20}/><p>Evite honorificar a si mesmo. Em <b>제가 오세요</b>, o falante estaria elevando a própria ação de modo inadequado.</p></div></>:
   step===1?<><p className="vl-kicker">02 · ESTILO FORMAL</p><h3>Declaração e pergunta mudam o final.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha um verbo formal">{formalForms.map((item,index)=><button type="button" key={item.verb} aria-pressed={form===index} onClick={()=>setForm(index)}><strong lang="ko">{item.verb}</strong><small>{item.rule}</small></button>)}</div><div className="rl-rules"><div><strong lang="ko">{formal.statement}</strong><p>declaração formal</p></div><div><strong lang="ko">{formal.question}</strong><p>pergunta formal</p></div><div><strong>base verbal</strong><p>{formal.rule}</p></div></div><div className="rl-context" aria-live="polite"><strong lang="ko">{formal.statement} {formal.question}</strong><p>Compare a entonação e a terminação.</p><button type="button" className="secondary" onClick={()=>speech.speak(formal.statement+'. '+formal.question)}><Volume2 size={17}/>Ouvir as duas formas</button></div><details className="vl-reference"><summary>E quando há -(으)시-?</summary><p>O marcador honorífico entra antes da terminação: 오다 → 오시다 → <b>오십니다</b>. Assim, uma frase pode respeitar o sujeito e também usar estilo formal.</p></details></>:
   step===2?<><p className="vl-kicker">03 · VOCABULÁRIO HONORÍFICO</p><h3>Algumas palavras mudam por inteiro.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha uma palavra honorífica">{special.map((item,index)=><button type="button" key={item.respectful} aria-pressed={word===index} onClick={()=>setWord(index)}><strong lang="ko">{item.ordinary} → {item.respectful}</strong><small>{item.pt}</small></button>)}</div><div className="rl-path"><span lang="ko">{specialWord.ordinary}<small>forma comum</small></span><ArrowRight/><span lang="ko">{specialWord.respectful}<small>forma respeitosa</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{specialWord.sentence}</strong><p>{specialWord.translation}</p><button type="button" className="secondary" onClick={()=>speech.speak(specialWord.ordinary+'. '+specialWord.respectful+'. '+specialWord.sentence)}><Volume2 size={17}/>Ouvir no contexto</button></div><div className="vl-note"><Lightbulb size={20}/><p><b>드리다</b> é diferente: é uma forma humilde de “dar”. Ela apresenta o falante ou agente com humildade diante de quem recebe.</p></div></>:
   <><p className="vl-kicker">04 · ESCOLHA O RESPEITO CERTO</p><h3>Observe sujeito, ouvinte e situação.</h3><div className="st-challenge"><span>{round+1} / {challenges.length}</span><h4>{task.prompt}</h4><div className="st-answer-options rl-challenge-options" role="group" aria-label="Respostas do laboratório de honoríficos">{task.options.map(option=><button type="button" key={option} lang="ko" aria-pressed={answer===option} onClick={()=>{setAnswer(option);setChecked(false);speech.speak(option);}}>{option}</button>)}</div><button type="button" className="primary" disabled={!answer} onClick={()=>{setChecked(true);if(correct)setWins(current=>current.includes(round)?current:[...current,round]);}}>Conferir minha resposta</button></div>{checked&&<div className={'st-feedback '+(correct?'st-correct':'')} role="status"><strong>{correct?'Perfeito! Você separou respeito e formalidade.':'Identifique primeiro quem é o sujeito e depois o estilo dirigido ao ouvinte.'}</strong><p>{correct?task.feedback:'Revise -(으)시-, -ㅂ니다/습니다 e o vocabulário honorífico.'}</p></div>}<div className="st-inline-actions"><span>{wins.length} / {challenges.length} <span>descobertas</span></span><button type="button" className="secondary" onClick={()=>nextChallenge((round+1)%challenges.length)}>Próximo desafio<ArrowRight size={17}/></button><button type="button" className="text-button" onClick={()=>{nextChallenge(0);setWins([]);}}><RotateCcw size={16}/>Recomeçar</button></div><ul className="vl-takeaways"><li><CheckCircle2/>-(으)시- respeita o sujeito.</li><li><CheckCircle2/>-ㅂ니다/습니다 define o estilo formal.</li><li><CheckCircle2/>계시다, 드시다 e 성함 precisam ser aprendidos em contexto.</li></ul></>}
  </div>
  <div className="vl-step-footer"><span>{step+1} / 4</span><div><button type="button" className="text-button" disabled={step===0} onClick={()=>go(step-1)}><ArrowLeft size={16}/>Anterior</button>{step<3?<button type="button" className="primary" onClick={()=>go(step+1)}>Continuar<ArrowRight size={16}/></button>:<a className="primary" href="#honorifics-practice" onClick={event=>{event.preventDefault();const el=document.getElementById('honorifics-practice');el?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}>Ir para os exercícios<ArrowRight size={16}/></a>}</div></div>
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}


