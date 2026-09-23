"use client";
import {useState} from 'react';
import {Music2} from 'lucide-react';
import {songs,Song} from '@/lib/songs';
import {springDaySections,springDayVocabulary,StudyLine} from '@/lib/spring-day';
import {ExerciseCard} from './exercise';
import {KoreanText,AudioButton,useKoreanSpeech} from './korean-audio';

export function MusicStudy({initialSongId='spring-day'}:{initialSongId?:string}){
 const [songId,setSongId]=useState(songs.some(s=>s.id===initialSongId)?initialSongId:songs[0].id);
 const {stop}=useKoreanSpeech();
 const song=songs.find(s=>s.id===songId)!;
 return <><div className="intro"><div><p className="eyebrow">PALAVRAS, FRASES E DESCOBERTAS</p><h1>Aprenda coreano com BTS<span>.</span></h1><p>Toque nas palavras para ouvir uma voz sintetizada em coreano.</p></div><Music2 size={42}/></div><div className="song-tabs" role="group" aria-label="Escolha uma música">{songs.map(s=><button key={s.id} aria-pressed={songId===s.id} onClick={()=>{stop();setSongId(s.id)}}>{s.title}</button>)}</div><SongLesson key={song.id} song={song}/><p className="music-reference">Traduções e explicações preparadas para estudo. Este projeto não é afiliado ao BTS.</p></>;
}
function SongLesson({song}:{song:Song}){
 const complete=song.id==='spring-day';
 const sections=complete?springDaySections:[{title:'Trecho de estudo',lines:song.clips}];
 return <div className="music-layout"><aside className="player-panel"><span className="eyebrow">ESTUDO COM VOZ SINTETIZADA</span><h2>{song.title}</h2><p><KoreanText text={song.koTitle}/></p><p>{complete?'Uma canção sobre saudade, passagem do tempo e a esperança de um reencontro. Explore as imagens de inverno e primavera, os pedidos e as hipóteses.':song.intro}</p><p>Ouça palavras isoladas tocando nelas. O alto-falante lê a frase inteira.</p><p>Abra “Ver explicação” para revelar a tradução e a gramática de cada frase.</p><span className="pill">{complete?'Letra completa · estudo preparado':'Trecho · estudo preparado'}</span></aside><section className="music-content"><span className="pill">{song.level}</span><h2>{complete?'Spring Day · letra e significado':song.topic}</h2>{complete&&<p className="muted">Tradução contextual em português. As imagens poéticas podem admitir mais de uma leitura.</p>}{sections.map((section,sectionIndex)=><section className="lyric-section" key={sectionIndex}><h3>{section.title}</h3>{section.lines.map((line,index)=><Line key={index} id={song.id+'-'+sectionIndex+'-'+index} line={line}/>)}</section>)}<Vocabulary {...(complete?springDayVocabulary:snippetVocabulary[song.id])}/><StreamLinks title={song.title} videoId={song.videoId}/>{complete&&<p className="music-reference">Referências de gramática: <a href="https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=6412&mn_id=62&pageIndex=1" target="_blank" rel="noreferrer">contração -고파</a> · <a href="https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?qna_seq=320384" target="_blank" rel="noreferrer">construção -(으)ㄹ 텐데</a> · <a href="https://krdict.korean.go.kr/" target="_blank" rel="noreferrer">Dicionário Básico de Coreano</a>.</p>}<div className="music-original"><p className="eyebrow">EXEMPLO ORIGINAL PARA PRATICAR</p><strong><KoreanText text={song.example.ko}/></strong><p>{song.example.pt}</p><p><KoreanText text={song.example.explanation}/></p></div><h2>Agora é com você</h2>{song.exercises.map((e,i)=><ExerciseCard key={e.id} exercise={e} index={i} onAnswer={()=>{}}/>)}</section></div>;
}
 function Line({id,line}:{id:string;line:StudyLine}){
 const [show,setShow]=useState(false);
 const english=Boolean(line.english);
 return <article className="lyric-card"><div className="lyric-speech"><KoreanText text={line.text} phrase={false}/><AudioButton text={line.text}/></div><button className="text-button reveal" aria-expanded={show} aria-controls={id+'-explanation'} onClick={()=>setShow(!show)}>{show?'Ocultar explicação':english?'Ver tradução':'Ver explicação'}</button>{show&&<div className="explanation" id={id+'-explanation'}><strong>Tradução</strong><p>{line.translation}</p>{line.entries&&line.entries.length>0?<><strong>Gramática · palavra a palavra</strong><ul className="word-analysis">{line.entries.map((entry,index)=><li key={index}><p className="term"><em><KoreanText text={entry.term} phrase={false}/></em><span> = <KoreanText text={entry.meaning} phrase={false}/></span></p>{entry.notes&&entry.notes.map((note,noteIndex)=><p className="note" key={noteIndex}><KoreanText text={note} phrase={false}/></p>)}{entry.card&&<CuriosityCard text={entry.card}/>}</li>)}</ul></>:line.grammar?<><strong>Por dentro da gramática</strong><p><KoreanText text={line.grammar}/></p></>:null}</div>}</article>;
}
function CuriosityCard({text}:{text:string}){
 return <div className="post-it"><span className="post-it-label">Card de curiosidade</span><p><KoreanText text={text} phrase={false}/></p></div>;
}
function StreamLinks({title,videoId}:{title:string;videoId:string}){
 const q=encodeURIComponent('BTS '+title);
 return <div className="stream-links"><h3>Ouvir “{title}” nas plataformas</h3><p className="muted">Escolha onde ouvir a música original.</p><div className="stream-buttons"><a href={'https://www.youtube.com/watch?v='+videoId} target="_blank" rel="noreferrer">YouTube ↗</a><a href={'https://open.spotify.com/search/'+q} target="_blank" rel="noreferrer">Spotify ↗</a><a href={'https://music.apple.com/us/search?term='+q} target="_blank" rel="noreferrer">Apple Music ↗</a></div></div>;
}
type Words={verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]};
function Vocabulary({verbs,nouns}:Words){return <section className="song-vocabulary"><h2>Palavras importantes</h2><p>Os verbos aparecem na forma de dicionário. Os verbos descritivos estão identificados nas definições.</p><div className="word-columns">{[{title:'Verbos',words:verbs},{title:'Substantivos',words:nouns}].map(group=><div key={group.title}><h3>{group.title}</h3>{group.words.length?group.words.map(w=><p key={w.ko}><KoreanText text={w.ko}/><span> — {w.pt}</span></p>):<p>Nenhum neste trecho.</p>}</div>)}</div></section>}
const snippetVocabulary:Record<string,Words>={
'spring-day':{verbs:[{ko:'보다',pt:'ver'},{ko:'싶다',pt:'querer; auxiliar de desejo'}],nouns:[]},
'life-goes-on':{verbs:[{ko:'멈추다',pt:'parar'}],nouns:[{ko:'세상',pt:'mundo'}]},
'boy-with-luv':{verbs:[{ko:'궁금하다',pt:'ter curiosidade; verbo descritivo'}],nouns:[{ko:'것',pt:'coisa; substantivo dependente'}]},
'dna':{verbs:[{ko:'알아보다',pt:'reconhecer'},{ko:'되다',pt:'tornar-se; auxiliar de mudança'}],nouns:[]},
'idol':{verbs:[{ko:'자유롭다',pt:'ser livre; verbo descritivo'}],nouns:[]}};
