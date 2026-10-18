"use client";
/* localized-returns */
import {Localized} from '@/components/localization';
import {useState} from 'react';
import {groupWordsByColor,colorNames,type SavedWord,type WordColor} from '@/lib/study-data';
import {ArrowLeft,ChevronRight,Folder,FolderOpen} from 'lucide-react';
import {useStudy,closeAccount,signInHref,importLegacy,retryStudy,changeWord} from '@/lib/study-store';
import {Sheet,SheetContent,SheetHeader,SheetTitle,SheetDescription} from '@/components/ui/sheet';
import {KoreanText} from '@/components/korean-audio';
export function AccountBar(){
  const state=useStudy();
  return <Localized>{<><section className="account-bar" aria-label="Sua conta"><div><strong>{state.user?`Olá, ${state.user.name}`:'Estude à vontade, no seu ritmo'}</strong><p role="status">{state.loaded?state.status:'Aulas e análises abertas. Verificando sua conta…'}</p></div><div className="account-actions"><a className="secondary" href="#palavras">Minhas palavras</a>{state.user?<a className="text-button" aria-disabled={state.pending>0} href={state.pending?undefined:(process.env.NEXT_PUBLIC_AUTH_PROVIDER==='google'?'/sair':'/signout-with-chatgpt?return_to=%2F')} target="_top" onClick={e=>{if(state.pending)e.preventDefault();}}>Sair</a>:<a className="primary" href={signInHref()} target="_top">Entrar / Criar conta</a>}</div></section>{state.warning&&<div className="storage-warning" role="alert">{state.warning} <button className="text-button" onClick={()=>void retryStudy()}>Tentar novamente</button></div>}{state.user&&state.legacy&&<div className="import-banner"><p>Encontramos progresso antigo neste navegador. Importe para a sua conta; dados já salvos nela serão preservados.</p><button className="secondary" disabled={!!state.pending||state.loadFailed||state.status==='Importando progresso…'} onClick={()=>void importLegacy()}>Importar meu progresso antigo</button></div>}<Sheet open={state.gate} onOpenChange={open=>{if(!open)closeAccount();}}><SheetContent className="study-sheet"><SheetHeader><SheetTitle>Guarde suas descobertas</SheetTitle><SheetDescription>Entre ou crie sua conta para salvar progresso, palavras e destaques. Aulas e análises continuam abertas para todos.</SheetDescription></SheetHeader><p>Use sua conta {process.env.NEXT_PUBLIC_AUTH_PROVIDER==='google'?'Google':'ChatGPT'} para entrar e guardar seus estudos.</p><a className="primary" href={signInHref()} target="_top">Continuar com {process.env.NEXT_PUBLIC_AUTH_PROVIDER==='google'?'Google':'ChatGPT'}</a><button className="text-button" onClick={closeAccount}>Continuar como visitante</button></SheetContent></Sheet></>}</Localized>;
}
export function SavedWords(){
  const {user,words,loaded,loadFailed}=useStudy();
  if(!loaded)return <Localized>{<p>Carregando suas palavras…</p>}</Localized>;
  if(!user)return <Localized>{<section className="empty-state"><h1>Suas palavras, sempre com você.</h1><p>Crie sua conta para guardar vocabulário e destacar palavras em todas as aulas e análises.</p><a className="primary" href={signInHref()} target="_top">Entrar / Criar conta</a><p><a href="#bts">Continuar explorando as músicas</a></p></section>}</Localized>;
  if(loadFailed)return <Localized>{<p>Não foi possível carregar suas palavras. Use “Tentar novamente” acima.</p>}</Localized>;
  return <SavedWordsNotebook key={user.key} words={words}/>;
}
export function SavedWordsNotebook({words}:{words:Record<string,SavedWord>}){
  const [filter,setFilter]=useState('saved');
  const [folder,setFolder]=useState<WordColor|'none'|null>(null);
  const list=Object.values(words).filter(w=>filter==='highlighted'?!!w.color:filter==='review'?(w.saved||!!w.color)&&!w.reviewed:(w.saved||!!w.color));
  const groups=groupWordsByColor(list);
  const selected=groups.find(group=>(group.color??'none')===folder);
  const folderLabel=folder==='none'?'Sem destaque':folder?colorNames[folder]:'';
  return <Localized>{<section className="saved-words">
    <p className="eyebrow">SEU CADERNO DE COREANO</p><h1>Minhas palavras<span>.</span></h1>
    <p>Suas palavras, organizadas em pastas por cor. Cada card mostra a última palavra salva; abra uma pasta para revisar as outras.</p>
    <div className="word-filters" aria-label="Filtrar palavras">{[['saved','Todas as salvas'],['review','Para revisar'],['highlighted','Com destaque']].map(([id,label])=><button className="secondary" key={id} aria-pressed={filter===id} onClick={()=>{setFilter(id);setFolder(null);}}>{label}</button>)}</div>
    {folder===null?<>
      <p>{list.length} palavra(s)</p>
      <div className="word-folder-grid">{groups.map(group=><button type="button" className="word-folder" key={group.color??'none'} onClick={()=>setFolder(group.color??'none')}>
        <span className="word-folder-top"><span className={'word-folder-icon '+(group.color?'highlight-'+group.color:'no-color-dot')}><Folder size={25} aria-hidden="true"/></span><span className="word-folder-count">{group.words.length} palavra(s)</span></span>
        <span className="word-folder-label">{group.label}</span><span className="word-folder-caption">Última palavra salva</span>
        <span className="word-folder-preview" lang="ko" translate="no">{group.words[0].word}</span>
        <span className="word-folder-open">Abrir pasta <ChevronRight size={18} aria-hidden="true"/></span>
      </button>)}</div>
    </>:<section className="word-color-group" aria-label={folderLabel}>
      <button className="text-button back" onClick={()=>setFolder(null)}><ArrowLeft size={17} aria-hidden="true"/>Todas as pastas</button>
      <h2 className="word-color-group-title"><FolderOpen size={23} aria-hidden="true"/><span aria-hidden="true" className={'group-color-dot '+(folder!=='none'?'highlight-'+folder:'no-color-dot')}/>{folderLabel}<small>{selected?.words.length??0} palavra(s)</small></h2>
      <div className="word-grid">{selected?.words.map(w=><article className="saved-word" key={w.word}><h2><KoreanText text={w.word}/></h2><p className="word-context"><KoreanText text={w.context}/></p><a href={w.source}>Ver no contexto →</a><div className="word-actions">{w.saved&&<button className="secondary" aria-pressed={w.reviewed} onClick={()=>changeWord({...w,reviewed:!w.reviewed},w.word)}>{w.reviewed?'Aprendida · revisar de novo':'Marcar como aprendida'}</button>}<button className="text-button" onClick={()=>changeWord(null,w.word)}>{w.color?'Remover destaque e dos salvos':'Retirar da revisão'}</button></div></article>)}</div>
      {!selected&&<div className="empty-state"><h3>Esta pasta está vazia</h3><p>Suas próximas palavras desta cor aparecerão aqui.</p></div>}
    </section>}
    {folder===null&&!list.length&&<div className="empty-state"><h2>{filter==='review'?'Nenhuma palavra pendente de revisão':'Seu caderno começa com uma palavra'}</h2><p>Escolha uma aula ou música e salve as palavras que você quer lembrar.</p><a className="primary" href="#bts">Explorar músicas</a></div>}
  </section>}</Localized>;
}
