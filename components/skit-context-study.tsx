"use client";
import type {Song} from '@/lib/songs';
import {skitContext as data} from '@/lib/skit-context';
import {Localized} from './localization';
import {KoreanText} from './korean-audio';
import {ExerciseCard} from './exercise';
import {useProgress} from '@/lib/progress';

export function SkitContextStudy({song}:{song:Song}){
 const {progress,setProgress}=useProgress();
 return <Localized><div className="intro"><div><p className="eyebrow">Guia de escuta e interpretação</p><h1>{song.title}</h1><p>{data.intro}</p><span className="pill">Análise de conversa · exemplos originais</span></div></div><div className="music-content">
 <div className="stream-buttons"><a href="https://open.spotify.com/intl-pt/track/0DaHIESJEC4d0RRpwbgcau" target="_blank" rel="noreferrer">Ouvir no Spotify ↗</a></div>
 <h2>Resumo e leitura da cena</h2>{data.scenes.map(s=><section className="lyric-card" key={s.title}><h3>{s.title}</h3><p>{s.text}</p><a href={s.source} target="_blank" rel="noreferrer">Consultar referência ↗</a></section>)}
 <h2>Contexto e linguagem</h2>{data.cards.map(c=><div className="post-it" key={c.title}><span className="post-it-label">Card de curiosidade</span><h3><KoreanText text={c.title}/></h3><p><KoreanText text={c.text}/></p></div>)}
 <h2>Pratique com frases novas</h2><p>As frases abaixo foram criadas para este estudo; não são falas da faixa.</p>{data.examples.map(e=><section className="lyric-card" key={e.ko}><p className="eyebrow">EXEMPLO ORIGINAL PARA PRATICAR</p><strong><KoreanText text={e.ko} localize={false}/></strong><p>{e.pt}</p><details><summary>Revelar explicação do exemplo</summary><p><KoreanText text={e.note}/></p></details></section>)}
 <section className="song-vocabulary"><h2>Palavras importantes</h2>{data.vocabulary.map(w=><p key={w.ko}><KoreanText text={w.ko}/><span> — {w.pt}</span></p>)}</section>
 <h2>Agora é com você</h2>{song.exercises.map((e,i)=><ExerciseCard key={e.id} exercise={e} index={i} saved={progress.answers[e.id]} onAnswer={(value,correct)=>setProgress(p=>({...p,answers:{...p.answers,[e.id]:{value,correct}}}))}/>)}
 <section className="music-reference"><h2>Referências e créditos</h2><p>O álbum é documentado pela BIGHIT. Para o conteúdo da conversa, consultamos transcrições e traduções de fãs; a leitura interpretativa é do BoraLang.</p>{data.sources.map(s=><p key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a></p>)}</section>
 </div></Localized>;
}
