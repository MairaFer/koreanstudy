import type { Song } from './songs'

type Grammar={expression:string;meaning:string;note:string}
type Line={original:string;translation:string;grammar?:Grammar[]}
type Section={title:string;lines:Line[];exercises:{prompt:string;answer:string}[]}
const g=(expression:string,meaning:string,note:string):Grammar=>({expression,meaning,note})
const line=(original:string,translation:string,grammar:Grammar[]=[]):Line=>({original,translation,grammar})

export const illBeThereSong:Song={id:'ill-be-there',title:"I'll Be There",artist:'Jin',album:'Happy',year:2024,cover:'https://i.scdn.co/image/ab67616d0000b27336d6f3a0bcb6cf6f2cf69e00',color:'from-orange-400 to-rose-700',lyrics:[]}

export const illBeThereSections:Section[]=[
 {title:'Uma promessa de presenÃ§a',lines:[
  line('ì´ë¦¬ì €ë¦¬ ë°”ì˜ê²Œ ì‚° ì‚¬ëžŒë“¤','Pessoas que vivem ocupadas, indo de um lado para outro.',[g('ì´ë¦¬ì €ë¦¬','para lÃ¡ e para cÃ¡','AdvÃ©rbio que descreve movimento ou situaÃ§Ãµes variadas.'),g('-ê²Œ','de modoâ€¦','ë°”ì˜ê²Œ: â€œde modo ocupadoâ€.'),g('ì‚´ë‹¤','viver','ì‚° Ã© o modificador passado de ì‚´ë‹¤.')]),
  line('íž˜ë“  ì„¸ìƒ ì–´ë–»ê²Œ ë§‰ ì‚´ì•„ ë“¤','Como vocÃªs vivem de qualquer jeito neste mundo difÃ­cil?',[g('íž˜ë“ ','difÃ­cil, cansativo','Modificador de íž˜ë“¤ë‹¤.'),g('ì–´ë–»ê²Œ','como','Pergunta sobre maneira.'),g('ë§‰','sem cuidado/de qualquer jeito','Intensifica um modo impulsivo ou livre de agir.')]),
  line('ìž‘ì€ ê²ƒë³´ë‹¨ í° ê±¸ ë” ì£¼ëŠ” ì¼ ê·¸ê±¸ ìœ„í•´ ë‚˜ëŠ” ì‚´ì•„ê°€','Dar coisas maiores em vez das pequenas â€” Ã© para isso que eu vivo.',[g('-ë³´ë‹¤ëŠ” â†’ -ë³´ë‹¨','em vez de/mais do que','Forma contraÃ­da de comparaÃ§Ã£o.'),g('ê²ƒì„ â†’ ê±¸','a coisaâ€¦ (objeto)','ContraÃ§Ã£o comum na fala.'),g('-ê¸° ìœ„í•´','para, com a finalidade de','Indica propÃ³sito.'),g('-ì•„/ì–´ ê°€ë‹¤','ir vivendo','Mostra continuidade ao longo do tempo.')]),
  line('ë‚œ ë³€í•˜ì§€ ì•Šì•„, I\'ll be there for you','Eu nÃ£o vou mudar; estarei aqui para vocÃª.',[g('ë‚˜+ëŠ” â†’ ë‚œ','eu, quanto a mim','ContraÃ§Ã£o falada.'),g('-ì§€ ì•Šë‹¤','nÃ£o','NegaÃ§Ã£o de ë³€í•˜ë‹¤, mudar.')])],exercises:[{prompt:'Qual Ã© a forma completa de ìž‘ì€ ê²ƒë³´ë‹¨?',answer:'ìž‘ì€ ê²ƒë³´ë‹¤ëŠ”.'},{prompt:'Traduza -ê¸° ìœ„í•´.',answer:'Para; com a finalidade de.'}]},
 {title:'Cantar para alcanÃ§ar alguÃ©m',lines:[
  line('ë„¤ê²Œ ì „í• ê²Œ ì´ ë…¸ëž˜ë¡œ','Vou transmitir isso a vocÃª por meio desta canÃ§Ã£o.',[g('ë„¤ê²Œ','a vocÃª','Forma contraÃ­da de ë„ˆì—ê²Œ.'),g('-ã„¹ê²Œ','eu vou','Promessa ou intenÃ§Ã£o assumida pelo falante.'),g('-ë¡œ','por meio de','Marca instrumento/maneira: â€œcom esta canÃ§Ã£oâ€.')]),
  line('I swear that I will always sing for you','Eu juro que sempre cantarei para vocÃª.',[]),
  line('ê·¸ì € ì›ƒìœ¼ë©´ ë¼','VocÃª sÃ³ precisa sorrir.',[g('ê·¸ì €','simplesmente','â€œapenas, sÃ³â€.'),g('-ìœ¼ë©´ ë˜ë‹¤','basta seâ€¦','Indica que uma condiÃ§Ã£o Ã© suficiente.')]),
  line('í™˜í•˜ê²Œ ì›ƒì–´ì¤˜ ë‹¤ í–‰ë³µí•  ìˆ˜ ìžˆê²Œ','Sorria brilhantemente para que todos possam ser felizes.',[g('-ì•„/ì–´ ì£¼ë‹¤','fazer para alguÃ©m','Pedido gentil: â€œsorria para nÃ³s/por nÃ³sâ€.'),g('-ã„¹ ìˆ˜ ìžˆë‹¤','poder','Possibilidade.'),g('-ê²Œ','para que','Expressa finalidade/resultando em algo.')]),
  line('íŠ¹ë³„í•˜ì§€ ì•Šì€ ê±¸ ë” íŠ¹ë³„í•˜ê²Œ','Tornar ainda mais especial aquilo que nÃ£o Ã© especial.',[g('-ì§€ ì•Šì€','que nÃ£o Ã©','NegaÃ§Ã£o usada como modificador.'),g('ë”','mais','Intensifica um grau.'),g('-ê²Œ','de modoâ€¦','íŠ¹ë³„í•˜ê²Œ: â€œde forma especialâ€.')])],exercises:[{prompt:'Como se diz â€œbasta sorrirâ€?',answer:'ì›ƒìœ¼ë©´ ë¼.'},{prompt:'Qual Ã© a forma completa de ë„¤ê²Œ?',answer:'ë„ˆì—ê²Œ.'}]},
 {title:'Estar presente nos dias difÃ­ceis',lines:[
  line('ê¸°ë¶„ì´ ìš¸ì í•  ë•Œ','Quando o humor estiver triste.',[g('-ã„¹ ë•Œ','quando','Marca o momento em que algo acontece.'),g('ìš¸ì í•˜ë‹¤','estar melancÃ³lico','Descreve um estado de tristeza leve ou abatimento.')]),
  line('í˜¼ìžë¼ê³  ëŠë‚„ ë•Œ','Quando vocÃª sentir que estÃ¡ sozinho.',[g('-ë¼ê³ ','que Ã©â€¦','CitaÃ§Ã£o de pensamento: â€œsentir que sou sozinhoâ€.'),g('ëŠë¼ë‹¤','sentir','Perceber uma emoÃ§Ã£o ou sensaÃ§Ã£o.')]),
  line('ê¸°ëŒ€ê³  ì‹¶ì–´ì§ˆ ë•Œ','Quando comeÃ§ar a querer se apoiar em alguÃ©m.',[g('ê¸°ëŒ€ë‹¤','apoiar-se','Pode ser apoio fÃ­sico ou emocional.'),g('-ê³  ì‹¶ì–´ì§€ë‹¤','passar a querer','Desejo que surge ou se intensifica.')]),
  line('I will be there forever','Eu estarei aqui para sempre.',[]),
  line('It don\'t matter the time, it don\'t matter the place','NÃ£o importa a hora, nÃ£o importa o lugar.',[])],exercises:[{prompt:'Traduza ê¸°ëŒ€ê³  ì‹¶ì–´ì§ˆ ë•Œ.',answer:'Quando comeÃ§ar a querer se apoiar em alguÃ©m.'},{prompt:'O que -ê³  ì‹¶ì–´ì§€ë‹¤ acrescenta a -ê³  ì‹¶ë‹¤?',answer:'A ideia de passar a sentir esse desejo.'}]}]

export const illBeThereVocabulary=[
 {word:'ì´ë¦¬ì €ë¦¬',reading:'irijeori',meaning:'para lÃ¡ e para cÃ¡'}, {word:'ë³€í•˜ë‹¤',reading:'byeonhada',meaning:'mudar'}, {word:'ì „í•˜ë‹¤',reading:'jeonhada',meaning:'transmitir, comunicar'}, {word:'í™˜í•˜ë‹¤',reading:'hwanhada',meaning:'ser brilhante, radiante'}, {word:'ìš¸ì í•˜ë‹¤',reading:'uljeokhada',meaning:'estar melancÃ³lico'}, {word:'ê¸°ëŒ€ë‹¤',reading:'gidaeda',meaning:'apoiar-se'}, {word:'ì˜ì›ížˆ',reading:'yeongwonhi',meaning:'para sempre'}]

