'use client';
import {useEffect,useState,type ReactNode} from 'react';
import {ThemeProvider as NextThemeProvider,useTheme} from 'next-themes';
import {Moon,Sun} from 'lucide-react';
import {useLocale} from './localization';

export function ThemeProvider({children}:{children:ReactNode}){
 return <NextThemeProvider attribute="data-theme" storageKey="boralang.theme.v1" defaultTheme="light" enableSystem={false} disableTransitionOnChange>{children}</NextThemeProvider>;
}

export function ThemeToggle(){
 const {theme,setTheme}=useTheme(),{locale}=useLocale();
 const [mounted,setMounted]=useState(false);
 useEffect(()=>setMounted(true),[]);
 const dark=mounted&&theme==='dark';
 const label=locale==='eng'?'Night mode':'Modo noturno';
 const action=locale==='eng'?(dark?'Switch to light mode':'Switch to night mode'):(dark?'Ativar modo claro':'Ativar modo noturno');
 return <button type="button" className="theme-toggle" aria-label={label} aria-pressed={dark} title={action} onClick={()=>setTheme(dark?'light':'dark')}>
  {dark?<Sun size={18} aria-hidden="true"/>:<Moon size={18} aria-hidden="true"/>}<span>{label}</span>
 </button>;
}
