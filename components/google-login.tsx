'use client';
/* localized-returns */
import {LanguageSwitcher,Localized} from '@/components/localization';
import {useState} from 'react';
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
 return <Localized>{<main className="empty-state"><LanguageSwitcher/><h1>{logout?'Sair da sua conta':'Entrar no BoraLang'}</h1><p>{logout?'Confirme para encerrar sua sessão neste navegador.':'Entre com Google para salvar progresso, palavras e destaques.'}</p><button className="primary" disabled={busy} onClick={()=>void submit()}>{busy?'Aguarde…':logout?'Sair':'Continuar com Google'}</button>{error&&<p role="alert">{error}</p>}<p><a href="/">Continuar estudando</a></p></main>}</Localized>;
}
