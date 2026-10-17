"use client";
/* localized-returns */
import {useLocale,Localized} from '@/components/localization';
import {useEffect,useState} from 'react';
import catalog from '@/lib/discography.json';
import hidden from '@/lib/catalog-hidden.json';
const hiddenAlbums=new Set(hidden.albums.map(a=>a.artist+':'+a.id));
const hiddenTracks=new Set(hidden.tracks.map(t=>t.artist+':'+t.id));
import {createPortal} from 'react-dom';
import {MusicStudy} from './music-study';
import {KoreanText} from './korean-audio';

type Album=(typeof catalog)[number];
const artists=['BTS','RM','Jin','SUGA','j-hope','Jimin','V','Jung Kook'];
const artistSlug=(a:string)=>a.toLowerCase().replaceAll(' ','-');
const normalized=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function studyFor(title:string){const s=title.toLowerCase().replace(/[’‘]/g,"'");if(/japanese|remix|instrumental|live/.test(s))return;return ({'ugh!':'ugh','inner child':'inner-child','ugh':'ugh','욱':'ugh','ugh! (욱)':'ugh','louder than bombs':'louder-than-bombs','my time':'my-time','시차':'my-time','my time (시차)':'my-time','시차 (my time)':'my-time','black swan':'black-swan','interlude: shadow':'interlude-shadow','interlude : shadow':'interlude-shadow','shadow':'interlude-shadow','dionysus':'dionysus','make it right':'make-it-right','dis-ease':'dis-ease','병':'dis-ease','dis-ease (병)':'dis-ease','telepathy':'telepathy','잠시':'telepathy','telepathy (잠시)':'telepathy','blue & grey':'blue-grey','blue and grey':'blue-grey','fly to my room':'fly-to-my-room','내 방을 여행하는 법':'fly-to-my-room','fly to my room (내 방을 여행하는 법)':'fly-to-my-room','burning up (fire)':'fire','fire':'fire','불타오르네':'fire','run':'run','i need u':'i-need-u','danger':'danger','born singer':'born-singer','into the sun':'into-the-sun','please':'please','one more night':'one-more-night',"they don't know 'bout us":'they-dont-know-bout-us',"they don't know bout us":'they-dont-know-bout-us','merry go round':'merry-go-round','fya':'fya','aliens':'aliens','2.0':'two-point-zero','hooligan':'hooligan','body to body':'body-to-body','no more dream':'no-more-dream','n.o':'n-o','boy in luv':'boy-in-luv','상남자':'boy-in-luv','fake love':'fake-love','blood sweat and tears':'blood-sweat-tears','blood sweat & tears':'blood-sweat-tears','피 땀 눈물':'blood-sweat-tears','spring day':'spring-day','life goes on':'life-goes-on','boy with luv (feat. halsey)':'boy-with-luv','on':'on','yet to come':'yet-to-come','dna':'dna','idol':'idol','run bts':'run-bts','intro : persona':'intro-persona','intro: persona':'intro-persona','trivia 轉 : seesaw':'seesaw','trivia 轉: seesaw':'seesaw','trivia: seesaw':'seesaw','bts cypher pt.3 : killer (feat. supreme boi)':'cypher-pt3','bts cypher, pt. 3: killer (feat. supreme boi)':'cypher-pt3','bts cypher pt.3 : killer':'cypher-pt3','bts cypher pt. 3: killer':'cypher-pt3','outro : ego':'ego','outro: ego':'ego',"00:00 (zero o'clock)":'zero-oclock',"zero o'clock":'zero-oclock','for youth':'for-youth','dimple':'dimple','보조개':'dimple','보조개 (dimple)':'dimple','just dance':'just-dance','trivia 起: just dance':'just-dance','trivia 起 : just dance':'just-dance','trivia: just dance':'just-dance','euphoria':'euphoria','euphoria: theme of love yourself wonder':'euphoria','euphoria : theme of love yourself wonder':'euphoria','singularity':'singularity','intro: singularity':'singularity','intro : singularity':'singularity','her':'her','outro: her':'her','outro : her':'her','filter':'filter','friends':'friends','친구':'friends','ego':'ego','seesaw':'seesaw','moon':'moon','jamais vu':'jamais-vu','stay':'stay'} as Record<string,string>)[s]}
const remixOrInstrumental=/(instrumental|remix)/i;
const blockedTitles=['PERMISSION TO DANCE ON STAGE (LIVE)','SWIM - Single','Dreamers (Music from the','Yet To Come (Hyundai Ver.)','Bad Decisions','My Universe (Supernova 7 Mix)','Permission to Dance - Single','Butter - Single','Who (feat. BTS)','FAKE LOVE (Rocking Vibe Mix)'];
const isBlocked=(title:string)=>blockedTitles.some(b=>normalized(title).includes(normalized(b)));
const discography:Album[]=catalog.filter(a=>!hiddenAlbums.has(a.artist+':'+a.id)&&!remixOrInstrumental.test(a.title)&&!isBlocked(a.title)).map(a=>({...a,tracks:a.tracks.filter(t=>!hiddenTracks.has(a.artist+':'+t.id)&&!remixOrInstrumental.test(t.title)&&!isBlocked(t.title))})).filter(a=>a.tracks.length>0);
const isSingle=(a:Album)=>/ - single$/i.test(a.title);
const sc=(q:string)=>'https://soundcloud.com/search?q='+encodeURIComponent(q);
const soundCloudOnly=[
 {id:'sc-sea',title:'SEA',artist:'BTS',url:sc('BTS SEA')},
 {id:'sc-4-oclock',title:"4 O'Clock",artist:'RM, V · BTS',url:sc("BTS 4 O'Clock")},
 {id:'sc-scenery',title:'Scenery (풍경)',artist:'V · BTS',url:sc('V Scenery BTS')},
];
type ListenItem={title:string;artist:string;apple:string;soundcloud?:string};
type Listen=(item:ListenItem)=>void;
function platformLinks(item:ListenItem){return [
 ...(item.soundcloud?[{label:'SoundCloud',href:item.soundcloud}]:[]),
 {label:'YouTube',href:'https://www.youtube.com/results?search_query='+encodeURIComponent(item.artist+' '+item.title+' official audio')},
 {label:'Spotify',href:'https://open.spotify.com/search/'+encodeURIComponent(item.artist+' '+item.title)},
 {label:'Apple Music',href:item.apple}
];}
function ListenModal({item,onClose}:{item:ListenItem;onClose:()=>void}){
 return createPortal(<div className="listen-overlay" onClick={onClose}><div className="listen-box" role="dialog" aria-modal="true" aria-label="Escolher plataforma" onClick={e=>e.stopPropagation()}><button type="button" className="listen-close" aria-label="Fechar" onClick={onClose}>×</button><p className="eyebrow">ESCOLHA A PLATAFORMA</p><h3>Ouvir “{item.title}”</h3><p className="listen-artist">{item.artist}</p><ul className="listen-platforms">{platformLinks(item).map(p=><li key={p.label}><a href={p.href} target="_blank" rel="noreferrer">{p.label} ↗</a></li>)}</ul></div></div>,document.body);
}
function AlbumCard({album,query,onListen}:{album:Album;query:string;onListen:Listen}){const {locale}=useLocale();
 return <Localized>{<details className="album" open={query.trim()?true:undefined}>
  <summary><img src={album.artwork} width="72" height="72" alt="" loading="lazy"/><span><strong translate="no">{album.title}</strong><small>{new Date(album.date+'T12:00:00Z').toLocaleDateString(locale==='eng'?'en-US':'pt-BR',{timeZone:'UTC'})} · {album.tracks.length} faixas</small></span><span className="album-expand" aria-hidden="true">＋</span></summary>
  <div className="album-tracks"><button type="button" className="text-button" onClick={()=>onListen({title:album.title,artist:album.artist,apple:album.url})}>Ouvir álbum ↗</button><ol>{album.tracks.filter(t=>!query||normalized(album.title).includes(normalized(query))||normalized(t.title).includes(normalized(query))).map(track=><li key={track.id}><span className="track-number">{track.disc>1?track.disc+'.':''}{String(track.number).padStart(2,'0')}</span><span className="track-title"><span translate="no"><KoreanText text={track.title} localize={false}/></span>{track.artist!=='BTS'&&<small translate="no">{track.artist}</small>}</span><span className="track-actions">{studyFor(track.title)&&<a href={'#bts/estudos/'+studyFor(track.title)}>Estudar</a>}<button type="button" onClick={()=>onListen({title:track.title,artist:track.artist,apple:track.url})} aria-label={'Ouvir '+track.title+' em outra plataforma'}>Ouvir ↗</button></span></li>)}</ol></div>
 </details>}</Localized>;
}
export function BtsCatalog(){
 const [study,setStudy]=useState(''),[query,setQuery]=useState(''),[artist,setArtist]=useState('BTS');
 const [listen,setListen]=useState<ListenItem|null>(null);
 useEffect(()=>{const read=()=>{const parts=location.hash.split('/');setStudy(parts[1]==='estudos'?(parts[2]||'spring-day'):'');setArtist(artists.find(a=>artistSlug(a)===parts[1])||'BTS');setQuery('')};read();addEventListener('hashchange',read);return()=>removeEventListener('hashchange',read)},[]);
 const match=(a:Album)=>normalized(a.title+' '+a.tracks.map(t=>t.title).join(' ')).includes(normalized(query));
 const found=discography.filter(a=>a.artist===artist).filter(match);
 const albums=found.filter(a=>!isSingle(a));
 const singles=found.filter(a=>isSingle(a));
 const others=(artist==='BTS'?soundCloudOnly:[]).filter(s=>!query||normalized(s.title+' '+s.artist).includes(normalized(query)));
 return <Localized>{<><nav className="artist-tabs" aria-label="Escolher artista">{artists.map(a=><a key={a} className={a===artist?'selected':''} aria-current={a===artist?'page':undefined} href={a==='BTS'?'#bts':'#bts/'+artistSlug(a)}><span translate="no">{a}</span> Músicas</a>)}</nav>{!study&&<div className="intro"><div><p className="eyebrow">SUA MÚSICA, SUAS DESCOBERTAS</p><h1>{artist==='BTS'?'Aprenda coreano com BTS':<><span translate="no">{artist}</span> Músicas</>}<span>.</span></h1><p>{artist==='BTS'?'Escolha um álbum, encontre a música e clique em “Estudar” para descobrir a tradução, a gramática e as palavras em coreano. O botão aparece nas músicas com estudo preparado.':'Explore os lançamentos do mais recente ao mais antigo e descubra suas faixas favoritas.'}</p></div></div>}{study&&<a className="text-button back" href="#bts">← Voltar à discografia</a>}{study?<MusicStudy key={study} initialSongId={study}/>:<>
 <div className="catalog-search"><label htmlFor="music-search">Buscar álbum ou música</label><input id="music-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Nome da música ou do álbum…"/><p>{found.length} lançamentos no Apple Music{others.length?` · ${others.length} só no SoundCloud`:''} · álbuns, singles e colaborações creditadas a {artist}</p></div>
 <p className="muted">Ao clicar em “Ouvir” abre um seletor de plataforma: SoundCloud (quando existir), YouTube, Spotify e Apple Music. Versões instrumentais e remixes não são exibidos — só as originais e as versões oficiais (por exemplo, a versão coreana). Uma música pode aparecer em vários álbuns. Os estudos disponíveis têm um botão próprio; as demais faixas ainda não têm tradução ou explicação no BoraLang.</p>
 {albums.length>0&&<><h2 className="discography-heading">Álbuns</h2><div className="album-list">{albums.map(album=><AlbumCard key={album.id} album={album} query={query} onListen={setListen}/>)}</div></>}
 {singles.length>0&&<><h2 className="discography-heading">Singles</h2><div className="album-list">{singles.map(album=><AlbumCard key={album.id} album={album} query={query} onListen={setListen}/>)}</div></>}
 {others.length>0&&<><h2 className="discography-heading">Outros</h2><div className="album-list"><div className="soundcloud-list">{others.map(song=><div className="soundcloud-song" key={song.id}><span><strong translate="no">{song.title}</strong><small><span translate="no">{song.artist}</span> · só no SoundCloud</small></span><span className="track-actions"><button type="button" onClick={()=>setListen({title:song.title,artist:song.artist,apple:'https://music.apple.com/us/search?term='+encodeURIComponent(song.artist+' '+song.title),soundcloud:song.url})}>Ouvir ↗</button></span></div>)}</div></div></>}
 {listen&&<ListenModal item={listen} onClose={()=>setListen(null)}/>}
 {!found.length&&!others.length&&<p className="empty-state">Nenhuma música encontrada. Tente outro título.</p>}
 <p className="music-reference">Catálogo digital consultado em 22/09/2026. Lançamentos japoneses não incluídos; versões instrumentais e remixes removidas. Edições regionais podem variar; faixas exclusivas de discos físicos e lançamentos fora das plataformas não estão incluídos. Fontes: <a href="https://music.apple.com/us/artist/bts/883131348" target="_blank" rel="noreferrer">Apple Music</a>, <a href="https://bts.ibighit.com/eng/discography/" target="_blank" rel="noreferrer">BIGHIT MUSIC</a>, os catálogos oficiais dos integrantes no Apple Music e o <a href="https://soundcloud.com/search?q=BTS" target="_blank" rel="noreferrer">SoundCloud</a>.</p>
</>}</>}</Localized>;
}