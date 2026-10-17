'use client';
/* localized-returns */
import {LanguageSwitcher,Localized} from '@/components/localization';
import {useState} from 'react';
import {ArrowLeft,ArrowRight,Bookmark,Heart,Highlighter,Leaf,LoaderCircle,LogOut,TrendingUp} from 'lucide-react';

/** Botanical illustration: decorative, without adding focus targets. */
function LoginGarden(){
 return <Localized><div className="auth-garden" aria-hidden="true">
  <svg viewBox="0 0 420 320" fill="none" focusable="false">
   <circle cx="217" cy="147" r="122" fill="url(#auth-halo)"/>
   <ellipse cx="212" cy="290" rx="107" ry="10" fill="#a887c7" fillOpacity=".12"/>
   <g stroke="#9270b2" strokeWidth="3" strokeLinecap="round">
    <path d="M208 283C201 229 222 181 212 125C208 101 216 81 229 58"/>
    <path d="M207 244C173 229 154 204 143 175M214 211C250 194 267 169 277 143M216 173C181 159 167 137 163 111M213 132C244 115 259 94 262 73"/>
   </g>
   <g className="auth-tree-leaves">
    {[[225,65,-8,1],[258,80,38,.9],[263,125,35,1],[164,117,-65,.9],[180,160,-68,1],[278,149,29,.9],[251,197,43,1],[145,182,-65,1],[169,230,-60,.9],[220,244,36,.8]].map(([x,y,r,s],i)=><g key={i} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}><path d="M0 6C-20-7-22-29-8-48C13-38 19-15 0 6Z" fill={i%3===0?'#8553ad':i%3===1?'#b193cc':'#c6acd9'}/><path d="M0 3L-7-34" stroke="white" strokeOpacity=".42" strokeWidth="1.2"/></g>)}
   </g>
   <g fill="#9b6cbe"><path className="auth-heart-one" d="M112 115C95 104 95 92 104 90C109 88 112 91 114 94C119 85 129 87 129 96C129 104 120 110 112 115Z"/><path className="auth-heart-two" d="M306 217C293 208 294 199 301 197C305 196 308 198 309 201C313 194 321 196 321 203C321 209 314 214 306 217Z" fill="#bd9dd3"/></g>
   <path d="M101 251C89 246 87 235 93 226C106 229 111 240 101 251Z" fill="#c0a1d7" transform="rotate(-30 101 251)"/>
   <path d="M329 113C320 109 318 101 322 94C333 97 337 105 329 113Z" fill="#c6afd9"/>
   <defs><radialGradient id="auth-halo"><stop stopColor="#fff" stopOpacity=".8"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient></defs>
  </svg>
  <span className="auth-garden-caption"><Leaf size={14}/>Um pouquinho por dia.</span>
 </div></Localized>;
}
function GoogleMark(){return <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65Z"/><path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.87 23.87 0 0 0 0 24c0 3.87.93 7.54 2.56 10.78l7.97-6.19Z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"/></svg>;}
export function GoogleLogin({logout=false}:{logout?:boolean}) {
 const [busy,setBusy]=useState(false),[error,setError]=useState('');
 async function submit(){setBusy(true);setError('');try{
  const raw=new URLSearchParams(location.search).get('return_to')||'/';
  const url=new URL(raw,location.origin);
  const callbackURL=url.origin===location.origin && !url.pathname.startsWith('/api/') && !['/entrar','/sair'].includes(url.pathname)?url.href:location.origin;
  const response=await fetch(logout?'/api/auth/sign-out':'/api/auth/sign-in/social',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logout?{}:{provider:'google',callbackURL}),credentials:'same-origin'});
  const data=await response.json() as {url?:string};if(!response.ok)throw Error('Não foi possível acessar sua conta. Tente novamente.');
  if(logout)location.assign('/');else if(typeof data.url==='string' && new URL(data.url).origin==='https://accounts.google.com')location.assign(data.url);else throw Error('Não foi possível abrir o Google.');
 }catch(e){setError(e instanceof Error?e.message:'Falha ao entrar.');setBusy(false);}}
 return <Localized><div className="auth-page">
  <header className="auth-header"><a href="/" aria-label="BoraLang, início"><img className="brand-logo" src="/brand/boralang-logo.png" alt="BoraLang" width="160" height="75"/></a><LanguageSwitcher/></header>
  <main className="auth-shell" id="main">
   <section className="auth-story" aria-labelledby="auth-story-title">
    <div className="auth-story-copy"><span className="auth-kicker"><Leaf size={15} aria-hidden="true"/>Bora aprender coreano com o BTS</span><h2 id="auth-story-title">Seu coreano.<br/><span>No seu tempo.</span></h2><p>Cada descoberta é uma nova folha na sua jornada.</p></div>
    <LoginGarden/>
    <div className="auth-story-note"><Heart size={16} aria-hidden="true"/><span>Um espaço para aprender e florescer.</span></div>
   </section>
   <section className="auth-card" aria-labelledby="auth-title">
    <div className="auth-card-icon" aria-hidden="true">{logout?<LogOut size={25}/>:<Heart size={25}/>}<Leaf size={16}/></div>
    <p className="auth-eyebrow">{logout?'Até a próxima sessão':'Seu espaço de estudos'}</p>
    <h1 id="auth-title">{logout?'Sair da sua conta':'Entrar no BoraLang'}</h1>
    <p className="auth-description">{logout?'Confirme para encerrar sua sessão neste navegador.':'Guarde cada descoberta e continue de onde parou.'}</p>
    {!logout&&<ul className="auth-benefits">
     <li><span><TrendingUp size={18} aria-hidden="true"/></span><div><strong>Seu progresso, sempre por perto</strong><p>Retome suas aulas e acompanhe cada passo.</p></div></li>
     <li><span><Bookmark size={18} aria-hidden="true"/></span><div><strong>Palavras para levar com você</strong><p>Salve o que aprender e revise quando quiser.</p></div></li>
     <li><span><Highlighter size={18} aria-hidden="true"/></span><div><strong>Deixe o estudo com a sua cor</strong><p>Destaque palavras e organize suas descobertas.</p></div></li>
    </ul>}
    <button type="button" className="auth-submit" data-logout={logout} disabled={busy} aria-busy={busy} onClick={()=>void submit()}>{busy?<LoaderCircle className="auth-spinner" size={20} aria-hidden="true"/>:logout?<LogOut size={19} aria-hidden="true"/>:<GoogleMark/>}<span>{busy?'Aguarde…':logout?'Sair':'Continuar com Google'}</span></button>
    {error&&<p className="auth-error" role="alert">{error}</p>}
    {!logout&&<p className="auth-account-note">Primeira visita? Sua conta é criada ao entrar com Google.</p>}
    <div className="auth-divider"><span>{logout?'Seu próximo capítulo espera por você':'Prefere explorar primeiro?'}</span></div>
    <a className="auth-guest" href="/">{logout?<ArrowLeft size={16} aria-hidden="true"/>:null}Continuar estudando{!logout&&<ArrowRight size={16} aria-hidden="true"/>}</a>
    {!logout&&<p className="auth-guest-note">As aulas e análises estão abertas, mesmo sem login.</p>}
   </section>
  </main>
  <p className="auth-footer"><Leaf size={13} aria-hidden="true"/>Aprender também é criar raízes.</p>
 </div></Localized>;
}
