'use client';
import {useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,CheckCircle2,Gauge,Lightbulb,RotateCcw,Scale,Star,Volume2} from 'lucide-react';
import {LessonText} from './lesson-text';
import {useKoreanSpeech} from './korean-audio';

const comparisons=[
 {reference:'차',referencePt:'chá',preferred:'커피',preferredPt:'café',quality:'좋아해요',degree:'더',sentence:'차보다 커피를 더 좋아해요.',pt:'Gosto mais de café do que de chá.'},
 {reference:'버스',referencePt:'ônibus',preferred:'지하철',preferredPt:'metrô',quality:'빨라요',degree:'더',sentence:'버스보다 지하철이 더 빨라요.',pt:'O metrô é mais rápido do que o ônibus.'},
 {reference:'여름',referencePt:'verão',preferred:'겨울',preferredPt:'inverno',quality:'좋아해요',degree:'더',sentence:'여름보다 겨울을 더 좋아해요.',pt:'Gosto mais do inverno do que do verão.'},
];
const scales=[
 {degree:'더',sentence:'이 음식이 더 매워요.',pt:'Esta comida é mais picante.',note:'더 aumenta o grau.'},
 {degree:'덜',sentence:'이 음식이 덜 매워요.',pt:'Esta comida é menos picante.',note:'덜 reduz o grau.'},
 {degree:'가장',sentence:'이 음식이 가장 매워요.',pt:'Esta comida é a mais picante.',note:'가장 marca o grau máximo em um conjunto.'},
];
const rankings=[
 {set:'Livros',ko:'이 책이 가장 재미있어요.',pt:'Este livro é o mais interessante.'},
 {set:'Estações',ko:'봄을 제일 좋아해요.',pt:'Gosto mais da primavera.'},
 {set:'Músicas',ko:'이 노래를 가장 자주 들어요.',pt:'Ouço esta música com mais frequência.'},
];
const challenges=[
 {prompt:'Em 차보다 커피를 더 좋아해요, qual é a preferência?',options:['차','커피','Os dois igualmente'],answer:'커피',feedback:'차 é a referência marcada por 보다; 커피 é o item preferido.'},
 {prompt:'“O metrô é mais rápido que o ônibus.”',options:['지하철보다 버스가 더 빨라요.','버스보다 지하철이 더 빨라요.','버스가 가장 빨라요.'],answer:'버스보다 지하철이 더 빨라요.',feedback:'버스보다 estabelece o ônibus como referência; 지하철 recebe a comparação.'},
 {prompt:'Palavra para “menos”',options:['더','덜','가장'],answer:'덜',feedback:'덜 indica um grau menor.'},
 {prompt:'“Este livro é o mais interessante.”',options:['이 책이 더 재미있어요.','이 책이 덜 재미있어요.','이 책이 가장 재미있어요.'],answer:'이 책이 가장 재미있어요.',feedback:'가장 marca o grau máximo dentro de um conjunto.'},
 {prompt:'Nesta frase, 보다 é partícula: 사과보다 바나나가 더 달아요.',options:['do que','ver','tentar'],answer:'do que',feedback:'Após um nome, 보다 marca a referência da comparação; não é o verbo 보다, “ver”.'},
];
const steps=['Ache a referência','Ajuste o grau','Monte um ranking','Oficina'];

export function ComparisonsLesson(){
 const [step,setStep]=useState(0),[comparison,setComparison]=useState(0),[flipped,setFlipped]=useState(false),[scale,setScale]=useState(0),[ranking,setRanking]=useState(0),[round,setRound]=useState(0),[answer,setAnswer]=useState(''),[checked,setChecked]=useState(false),[wins,setWins]=useState<number[]>([]);
 const root=useRef<HTMLDivElement>(null),speech=useKoreanSpeech(),item=comparisons[comparison],intensity=scales[scale],top=rankings[ranking],task=challenges[round],correct=answer===task.answer;
 function go(next:number){speech.stop();setStep(next);requestAnimationFrame(()=>{root.current?.focus({preventScroll:true});root.current?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});}
 function nextChallenge(next:number){setRound(next);setAnswer('');setChecked(false);speech.stop();}
 const compared=flipped?item.preferred+'보다 '+item.reference+(item.quality==='좋아해요'?'를':'이')+' 더 '+item.quality+'.':item.sentence;
 return <LessonText><div className="vowel-lab routine-lab" tabIndex={-1} ref={root}>
  <div className="vl-welcome"><div><span className="vl-kicker"><Scale size={15}/>UMA REFERÊNCIA MUDA A LEITURA</span><h2>Qual você prefere?</h2><p>Com <b>보다</b>, um item vira a referência. Depois, <b>더</b>, <b>덜</b>, <b>가장</b> e <b>제일</b> mostram o grau da comparação.</p></div><div className="vl-welcome-art" aria-hidden="true"><span>더</span><Gauge/></div></div>
  <nav className="vl-steps" aria-label="Etapas da oitava aula intermediária">{steps.map((label,index)=><button type="button" key={label} aria-current={step===index?'step':undefined} onClick={()=>go(index)}><span>{index+1}</span>{label}</button>)}</nav>
  <div className="vl-panel" key={step}>
   {step===0?<><p className="vl-kicker">01 · NOME + 보다 = REFERÊNCIA</p><h3>O item com 보다 não é automaticamente o preferido.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha uma comparação">{comparisons.map((entry,index)=><button type="button" key={entry.sentence} aria-pressed={comparison===index} onClick={()=>{setComparison(index);setFlipped(false);speech.stop();}}><strong>{entry.reference} ↔ {entry.preferred}</strong><small>{entry.referencePt} e {entry.preferredPt}</small></button>)}</div><div className="rl-path"><span>{flipped?item.preferred:item.reference}<b>보다</b><small>referência</small></span><ArrowRight/><span>{flipped?item.reference:item.preferred}<small>comparado</small></span><ArrowRight/><span>더 {item.quality}</span></div><div className="rl-context" aria-live="polite"><strong lang="ko">{compared}</strong><p>{flipped?'A ordem foi invertida: agora '+item.preferredPt+' é a referência.':item.pt}</p><div className="st-inline-actions"><button type="button" className="secondary" onClick={()=>speech.speak(compared)}><Volume2 size={17}/>Ouvir</button><button type="button" className="text-button" onClick={()=>setFlipped(!flipped)}>Inverter a comparação</button></div></div><div className="vl-note"><Lightbulb size={20}/><p>Não traduza apenas pela ordem. Primeiro marque mentalmente o nome com <b>보다</b> como “em comparação com...”.</p></div></>:
   step===1?<><p className="vl-kicker">02 · CONTROLE DE INTENSIDADE</p><h3>Mais, menos ou o máximo?</h3><div className="rl-rules"><div><strong>더</strong><p>mais</p></div><div><strong>덜</strong><p>menos</p></div><div><strong>가장 / 제일</strong><p>o mais</p></div></div><div className="st-example-tabs" role="group" aria-label="Escolha o grau">{scales.map((entry,index)=><button type="button" key={entry.degree} aria-pressed={scale===index} onClick={()=>setScale(index)}>{entry.degree}</button>)}</div><div className="rl-context" aria-live="polite"><strong lang="ko">{intensity.sentence}</strong><p>{intensity.pt}</p><p>{intensity.note}</p><button type="button" className="secondary" onClick={()=>speech.speak(intensity.sentence)}><Volume2 size={17}/>Ouvir</button></div><details className="vl-reference"><summary>가장 ou 제일?</summary><p>As duas palavras podem indicar o grau máximo. 제일 é muito frequente na fala; 가장 também é comum e neutro. O conjunto comparado pode estar explícito ou ser recuperado pelo contexto.</p></details></>:
   step===2?<><p className="vl-kicker">03 · PÓDIO DE PREFERÊNCIAS</p><h3>Escolha um conjunto e veja o primeiro lugar.</h3><div className="rl-choice-grid" role="group" aria-label="Escolha um ranking">{rankings.map((entry,index)=><button type="button" key={entry.set} aria-pressed={ranking===index} onClick={()=>setRanking(index)}><strong>{entry.set}</strong><small>{entry.pt}</small></button>)}</div><div className="rl-context" aria-live="polite"><Star size={30}/><strong lang="ko">{top.ko}</strong><p>{top.pt}</p><button type="button" className="secondary" onClick={()=>speech.speak(top.ko)}><Volume2 size={17}/>Ouvir o primeiro lugar</button></div><h4>보다: partícula ou verbo?</h4><div className="rl-rules"><div><strong>차보다 커피가...</strong><p>partícula: “do que chá”</p></div><div><strong>영화를 봐요.</strong><p>verbo 보다: “assisto ao filme”</p></div><div><strong>위치를 확인해요.</strong><p>A posição revela a função.</p></div></div></>:
   <><p className="vl-kicker">04 · QUEM É A REFERÊNCIA?</p><h3>Leia a estrutura, não apenas as palavras.</h3><p>Resolva cinco desafios e prossiga aos exercícios que salvam seu progresso.</p><div className="st-challenge"><span>{round+1} / {challenges.length}</span><h4>{task.prompt}</h4><div className="st-answer-options rl-challenge-options" role="group" aria-label="Respostas da oficina de comparações">{task.options.map(option=><button type="button" key={option} lang="ko" aria-pressed={answer===option} onClick={()=>{setAnswer(option);setChecked(false);speech.speak(option);}}>{option}</button>)}</div><button type="button" className="primary" disabled={!answer} onClick={()=>{setChecked(true);if(correct)setWins(current=>current.includes(round)?current:[...current,round]);}}>Conferir minha resposta</button></div>{checked&&<div className={'st-feedback '+(correct?'st-correct':'')} role="status"><strong>{correct?'Isso! Você encontrou a referência e o grau.':'Localize primeiro o nome seguido de 보다.'}</strong><p>{correct?task.feedback:'O termo com 보다 é a referência; depois observe 더, 덜 ou 가장/제일.'}</p></div>}<div className="st-inline-actions"><span>{wins.length} / {challenges.length} <span>descobertas</span></span><button type="button" className="secondary" onClick={()=>nextChallenge((round+1)%challenges.length)}>Próximo desafio<ArrowRight size={17}/></button><button type="button" className="text-button" onClick={()=>{nextChallenge(0);setWins([]);}}><RotateCcw size={16}/>Recomeçar</button></div><ul className="vl-takeaways"><li><CheckCircle2/>O nome com 보다 é a referência.</li><li><CheckCircle2/>더 aumenta; 덜 reduz o grau.</li><li><CheckCircle2/>가장 e 제일 marcam o grau máximo.</li></ul></>}
  </div>
  <div className="vl-step-footer"><span>{step+1} / 4</span><div><button type="button" className="text-button" disabled={step===0} onClick={()=>go(step-1)}><ArrowLeft size={16}/>Anterior</button>{step<3?<button type="button" className="primary" onClick={()=>go(step+1)}>Continuar<ArrowRight size={16}/></button>:<a className="primary" href="#comparisons-practice" onClick={event=>{event.preventDefault();const el=document.getElementById('comparisons-practice');el?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}>Ir para os exercícios<ArrowRight size={16}/></a>}</div></div>
  <p className="vl-audio-status" role="status">{speech.status}</p>
 </div></LessonText>;
}

