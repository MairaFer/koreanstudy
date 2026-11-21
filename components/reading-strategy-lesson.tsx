Exit code: 0
Wall time: 16.8 seconds
Output:
'use client';
import {useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,BookOpenCheck,CheckCircle2,Highlighter,Lightbulb,RotateCcw,Volume2} from 'lucide-react';
import {LessonText} from './lesson-text';
import {useKoreanSpeech} from './korean-audio';

const sentences=[
 {ko:'온라인 수업은 편리하다.',pt:'Aulas on-line são convenientes.',role:'vantagem',signal:'Ponto de partida',color:'benefit'},
 {ko:'그러나 혼자 공부하면 집중하기 어려울 수 있다.',pt:'Entretanto, ao estudar sozinho, pode ser difícil se concentrar.',role:'limitação',signal:'그러나 · contraste',color:'contrast'},
 {ko:'따라서 자신에게 맞는 학습 방법을 찾는 것이 중요하다.',pt:'Portanto, é importante encontrar um método de aprendizagem adequado a si.',role:'conclusão',signal:'따라서 · conclusão',color:'conclusion'},
];
const connectors=[
 {word:'그러나',function:'contraste',before:'온라인 수업은 편리하다.',after:'혼자 공부하면 집중하기 어려울 수 있다.',pt:'É conveniente, mas estudar sozinho pode dificultar a concentração.'},
 {word:'따라서',function:'conclusão',before:'혼자서는 집중하기 어려울 수 있다.',after:'자신에게 맞는 방법을 찾아야 한다.',pt:'Pode haver dificuldade; portanto, é preciso encontrar um método adequado.'},
 {word:'-(으)면',function:'condição',before:'혼자 공부하다',after:'집중하기 어려울 수 있다',pt:'Se estudar sozinho, pode ser difícil se concentrar.'},
 {word:'-는 것이',function:'transformar ação em tópico',before:'방법을 찾다',after:'찾는 것이 중요하다',pt:'Encontrar um método é importante.'},
];
const claims=[
 {text:'O texto afirma que aulas on-line são convenientes.',status:'Afirmado',why:'A primeira frase diz isso diretamente.'},
 {text:'O texto reconhece uma dificuldade possível ao estudar sozinho.',status:'Afirmado',why:'어려울 수 있다 indica possibilidade, não uma regra absoluta.'},
 {text:'O autor rejeita completamente as aulas on-line.',status:'Não afirmado',why:'Há uma vantagem explícita e a conclusão recomenda adaptar o método.'},
 {text:'Todos devem usar exatamente o mesmo método.',status:'Contradito',why:'자신에게 맞는 significa adequado à própria pessoa.'},
];
const challenges=[
 {prompt:'Qual é a ideia principal do texto?',options:['É importante encontrar um método adequado a si','Aulas on-line devem ser abandonadas','Estudar sozinho é sempre impossível'],answer:'É importante encontrar um método adequado a si',feedback:'A conclusão com 따라서 reúne vantagem e limitação numa recomendação.'},
 {prompt:'Que relação 그러나 introduz?',options:['Contraste','Causa','Exemplo'],answer:'Contraste',feedback:'그러나 contrapõe a conveniência à possível dificuldade de concentração.'},
 {prompt:'O que -을 수 있다 expressa em 어려울 수 있다?',options:['Possibilidade','Certeza absoluta','Ordem'],answer:'Possibilidade',feedback:'A frase diz que pode ser difícil, não que será sempre difícil.'},
 {prompt:'Qual conclusão acrescenta algo que o texto não diz?',options:['O autor rejeita aulas on-line','É preciso adaptar o método','Estudar sozinho pode dificultar a concentração'],answer:'O autor rejeita aulas on-line',feedback:'Essa rejeição é uma inferência indevida; o texto reconhece conveniência.'},
 {prompt:'따라서 sinaliza...',options:['uma conclusão decorrente das ideias anteriores','uma lembrança passada','uma pergunta indireta'],answer:'uma conclusão decorrente das ideias anteriores',feedback:'따라서 orienta o leitor para a recomendação final.'},
];
const steps=['Mapeie o texto','Siga os sinais','Prove com evidências','Síntese'];

export function ReadingStrategyLesson(){
 const [step,setStep]=useState(0),[focus,setFocus]=useState(0),[connector,setConnector]=useState(0),[claim,setClaim]=useState(0),[round,setRound]=useState(0),[answer,setAnswer]=useState(''),[checked,setChecked]=useState(false),[wins,setWins]=useState<number[]>([]);
 const root=useRef<HTMLDivElement>(null),speech=useKoreanSpeech(),line=sentences[focus],link=connectors[connector],evidence=claims[claim],task=challenges[round],correct=answer===task.answer;
 function go(next:number){speech.stop();setStep(next);requestAnimationFrame(()=>{root.current?.focus({preventScroll:true});root.current?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});}
 function nextChallenge(next:number){setRound(next);setAnswer('');setChecked(false);speech.stop();}
 return <LessonText><div className="vowel-lab routine-lab" tabIndex={-1} ref={root}>
  <div className="vl-welcome"><div><span className="vl-kicker"><BookOpenCheck size={15}/>LEIA AS RELAÇÕES</span><h2>O sentido não mora em palavras isoladas.</h2><p>Uma leitura avançada acompanha o caminho do autor: ponto inicial, contraste, conclusão e evidências que sustentam cada interpretação.</p></div><div className="vl-welcome-art" aria-hidden="true"><span>글</span><Highlighter/></div></div>
  <nav className="vl-steps" aria-label="Etapas da décima aula avançada">{steps.map((label,index)=><button type="button" key={label} aria-current={step===index?'step':undefined} onClick={()=>go(index)}><span>{index+1}</span>{label}</button>)}</nav>
  <div className="vl-panel" key={step}>
   {step===0?<><p className="vl-kicker">01 · MAPA DO PARÁGRAFO</p><h3>Cada frase cumpre uma função.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha uma frase do texto">{sentences.map((item,index)=><button type="button" key={item.ko} aria-pressed={focus===index} onClick={()=>setFocus(index)}><strong>{index+1}. {item.role}</strong><small>{item.signal}</small></button>)}</div><div className="rl-context" aria-live="polite"><strong lang="ko">{line.ko}</strong><p>{line.pt}</p><span className="pill">FUNÇÃO · {line.role}</span><button type="button" className="secondary" onClick={()=>speech.speak(line.ko)}><Volume2 size={17}/>Ouvir a frase</button></div><div className="rl-path"><span>VANTAGEM<small>apresenta o tema</small></span><ArrowRight/><span>LIMITAÇÃO<small>corrige uma leitura simples</small></span><ArrowRight/><span>CONCLUSÃO<small>propõe adaptação</small></span></div><div className="vl-note"><Lightbulb size={20}/><p>Antes de traduzir tudo, identifique o papel de cada frase. Isso impede que uma limitação seja confundida com a tese inteira.</p></div></>:
   step===1?<><p className="vl-kicker">02 · SINAIS DE NAVEGAÇÃO</p><h3>Conectores dizem como juntar as ideias.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha um conector">{connectors.map((item,index)=><button type="button" key={item.word} aria-pressed={connector===index} onClick={()=>setConnector(index)}><strong lang="ko">{item.word}</strong><small>{item.function}</small></button>)}</div><div className="rl-path"><span lang="ko">{link.before}<small>ideia anterior</small></span><ArrowRight/><span lang="ko">{link.word}<small>{link.function}</small></span><ArrowRight/><span lang="ko">{link.after}<small>ideia ligada</small></span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{link.word}</strong><p>{link.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(link.before+'. '+link.word+'. '+link.after)}><Volume2 size={17}/>Ouvir a relação</button></div><details className="vl-reference"><summary>Por que não basta consultar cada palavra?</summary><p>O dicionário ajuda com vocabulário, mas a direção do argumento aparece nas relações. <b>그러나</b> muda a expectativa; <b>따라서</b> mostra o que o autor conclui.</p></details></>:
   step===2?<><p className="vl-kicker">03 · AFIRMAÇÃO OU INVENÇÃO?</p><h3>Volte ao texto para testar cada leitura.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha uma interpretação">{claims.map((item,index)=><button type="button" key={item.text} aria-pressed={claim===index} onClick={()=>setClaim(index)}><strong>{item.status}</strong><small>{item.text}</small></button>)}</div><div className="rl-context" aria-live="polite"><span className="pill">{evidence.status.toUpperCase()}</span><strong>{evidence.text}</strong><p>{evidence.why}</p></div><div className="rl-rules"><div><strong>Afirmado</strong><p>há apoio direto no texto</p></div><div><strong>Inferido</strong><p>decorre de pistas, sem frase direta</p></div><div><strong>Não afirmado</strong><p>foi acrescentado pelo leitor</p></div></div><div className="vl-note"><Lightbulb size={20}/><p>Preste atenção a limites como <b>-을 수 있다</b>, “pode”. Transformar possibilidade em certeza altera o argumento.</p></div></>:
   <><p className="vl-kicker">04 · SÍNTESE COM EVIDÊNCIA</p><h3>Reconstrua a leitura sem exagerar.</h3><div className="st-challenge"><span>{round+1} / {challenges.length}</span><h4>{task.prompt}</h4><div className="st-answer-options rl-challenge-options" role="group" aria-label="Respostas do laboratório de leitura">{task.options.map(option=><button type="button" key={option} aria-pressed={answer===option} onClick={()=>{setAnswer(option);setChecked(false);}}>{option}</button>)}</div><button type="button" className="primary" disabled={!answer} onClick={()=>{setChecked(true);if(correct)setWins(current=>current.includes(round)?current:[...current,round]);}}>Conferir minha resposta</button></div>{checked&&<div className={'st-feedback '+(correct?'st-correct':'')} role="status"><strong>{correct?'Leitura precisa! Você preservou os limites do texto.':'Volte à estrutura e procure a frase que sustenta sua escolha.'}</strong><p>{correct?task.feedback:'Diferencie ideia principal, contraste e conclusões acrescentadas pelo leitor.'}</p></div>}<div className="st-inline-actions"><span>{wins.length} / {challenges.length} <span>evidências</span></span><button type="button" className="secondary" onClick={()=>nextChallenge((round+1)%challenges.length)}>Próximo desafio<ArrowRight size={17}/></button><button type="button" className="text-button" onClick={()=>{nextChallenge(0);setWins([]);}}><RotateCcw size={16}/>Recomeçar</button></div><ul className="vl-takeaways"><li><CheckCircle2/>Mapeie a função de cada frase.</li><li><CheckCircle2/>Use conectores para seguir o argumento.</li><li><CheckCircle2/>Separe evidência textual de conclusão pessoal.</li></ul></>}
  </div>
  <div className="vl-step-footer"><span>{step+1} / 4</span><div><button type="button" className="text-button" disabled={step===0} onClick={()=>go(step-1)}><ArrowLeft size={16}/>Anterior</button>{step<3?<button type="button" className="primary" onClick={()=>go(step+1)}>Continuar<ArrowRight size={16}/></button>:<a className="primary" href="#reading-strategy-practice" onClick={event=>{event.preventDefault();const el=document.getElementById('reading-strategy-practice');el?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}>Ir para os exercícios<ArrowRight size={16}/></a>}</div></div>
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}


