'use client';
import {Children,cloneElement,createContext,isValidElement,useContext,useEffect,useState,type ReactNode} from 'react';
import {translate,type Locale} from '@/lib/localization';
import {ThemeToggle} from './theme';
const Context=createContext<{locale:Locale;setLocale:(locale:Locale)=>void}>({locale:'pt',setLocale:()=>{}});
const storageKey='boralang.language.v1';
export function LocaleProvider({children,initialLocale='pt'}:{children:ReactNode;initialLocale?:Locale}){
 const [locale,setLocaleState]=useState<Locale>(initialLocale);
 useEffect(()=>{let saved:Locale='pt';try{const value=localStorage.getItem(storageKey);if(value==='eng')saved='eng';}catch{/* Study remains available without storage. */}const requested=new URLSearchParams(location.search).get('lang');if(requested==='eng'||requested==='pt')saved=requested;setLocaleState(saved);},[]);
 useEffect(()=>{document.documentElement.lang=locale==='eng'?'en':'pt-BR';document.title=locale==='eng'?'BoraLang · Learn Korean with BTS':'BoraLang · Bora aprender coreano com o BTS';const description=document.querySelector('meta[name=description]');if(description)description.setAttribute('content',locale==='eng'?'Learn Korean through 30 lessons, flashcards, quizzes, and BTS song studies.':'Aprenda coreano em português: 30 aulas, flashcards, quizzes e músicas do BTS.');},[locale]);
 const setLocale=(value:Locale)=>{setLocaleState(value);try{localStorage.setItem(storageKey,value);}catch{/* Language still works for the current visit. */}const url=new URL(location.href);if(url.searchParams.has('lang')){url.searchParams.set('lang',value);history.replaceState(null,'',url);}};
 return <Context.Provider value={{locale,setLocale}}>{children}</Context.Provider>;
}
export function useLocale(){const value=useContext(Context);return {...value,t:(text:string)=>translate(text,value.locale)};}
// Translate React text and accessible labels, while keeping data, event handlers,
// option values, IDs, routes and Korean text intact. Nothing mutates the DOM.
function localize(node:ReactNode,locale:Locale):ReactNode{
 if(typeof node==='string')return translate(node,locale);
 if(Array.isArray(node))return Children.map(node,child=>localize(child,locale));
 if(!isValidElement<Record<string,unknown>>(node))return node;
 if(node.props.translate==='no'||node.props['data-no-localize'])return node;
 const props:Record<string,unknown>={};
 for(const key of ['aria-label','title','placeholder','alt'])if(typeof node.props[key]==='string')props[key]=translate(node.props[key] as string,locale);
 if(node.props.lang==='pt-BR'&&locale==='eng')props.lang='en';
 if(node.props.children!==undefined)props.children=localize(node.props.children as ReactNode,locale);
 return cloneElement(node,props);
}
export function Localized({children}:{children:ReactNode}){const {locale}=useLocale();return <>{locale==='pt'?children:localize(children,locale)}</>;}
export function LanguageSwitcher(){const {locale,setLocale}=useLocale();return <div className="site-preferences"><div className="language-switcher" role="group" aria-label={locale==='eng'?'Site language':'Idioma do site'}>{(['pt','eng'] as const).map(value=><button type="button" key={value} lang={value==='pt'?'pt-BR':'en'} aria-label={value==='pt'?'Português':'English'} aria-pressed={locale===value} onClick={()=>setLocale(value)}>{value.toUpperCase()}</button>)}</div><ThemeToggle/></div>;}
