"use client";
import {useStudy,setProgress} from './study-store';
export {STORAGE_KEY,freshProgress,parseProgress} from './study-data';
export type {ProgressState} from './study-data';
export {setProgress};
export function useProgress(){const state=useStudy();return {progress:state.progress,setProgress,ready:true,warning:state.warning};}
