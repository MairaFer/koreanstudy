'use client';
import {Children,Fragment,cloneElement,isValidElement,type ReactNode} from 'react';
import {Localized} from './localization';
import {KoreanText} from './korean-audio';
import {koreanPattern} from '@/lib/audio-text';

// Interactive controls already have their own actions. Never insert a word
// button inside another button, link, label, or a decorative diagram.
const excludedTags=new Set(['button','a','label','input','select','textarea','option','summary','svg','math','script','style']);
const interactiveRoles=new Set(['button','link','checkbox','radio','switch','tab','option','menuitem','slider','textbox','combobox']);
function audibleText(node:ReactNode):ReactNode{
 if(typeof node==='string')return koreanPattern.test(node)?<KoreanText text={node} phrase={false}/>:node;
 if(Array.isArray(node))return Children.map(node,audibleText);
 if(!isValidElement<Record<string,unknown>>(node))return node;
 if(node.type===Fragment)return cloneElement(node,{children:audibleText(node.props.children as ReactNode)});
 // A parent cannot inspect a component's rendered output. Custom lessons and
 // text-only helpers each use this boundary around their own native elements.
 if(typeof node.type!=='string')return node;
 const props=node.props;
 if(excludedTags.has(node.type)||interactiveRoles.has(String(props.role))||props['aria-hidden']===true||props['aria-hidden']==='true'||props['data-audio-ignore']!==undefined||props.onClick||props.onKeyDown)return node;
 return props.children===undefined?node:cloneElement(node,{children:audibleText(props.children as ReactNode)});
}
export function LessonText({children}:{children:ReactNode}){return <Localized>{audibleText(children)}</Localized>;}
