import type { Song } from './songs'
type Grammar={expression:string;meaning:string;note:string}
type Line={original:string;translation:string;grammar?:Grammar[]}
type Section={title:string;lines:Line[];exercises:{prompt:string;answer:string}[]}
const g=(expression:string,meaning:string,note:string):Grammar=>({expression,meaning,note})
const line=(original:string,translation:string,grammar:Grammar[]=[]):Line=>({original,translation,grammar})

export const toMeTodaySong:Song={id:'to-me-today',title:'To Me, Today (ì˜¤ëŠ˜ì˜ ë‚˜ì—ê²Œ)',artist:'Jin',album:'Happy',year:2024,cover:'https://i.scdn.co/image/ab67616d0000b27336d6f3a0bcb6cf6f2cf69e00',color:'from-amber-400 to-sky-700',lyrics:[]}

export const toMeTodaySections:Section[]=[
 {title:'Deixar o ontem e viver o hoje',lines:[
  line('í–‡ì‚´ ë¹„ì¶˜ ì•„ì¹¨ ê·¸ìŠ¬ë¦° ì–´ì œì˜ ë‚˜','Uma manhÃ£ iluminada pelo sol; eu, marcado pelo ontem.',[g('ë¹„ì¶˜','que iluminou','Modificador passado de ë¹„ì¶”ë‹¤, iluminar.'),g('ê·¸ìŠ¬ë¦¬ë‹¤','ficar chamuscado/marcado','Imagem de um eu ferido pelo dia anterior.')]),
  line('ì“¸ë°ì—†ëŠ” ìƒê° ë‘ë ¤ì›Œí•˜ì§€ëŠ” ë§ˆ','NÃ£o tenha medo de pensamentos inÃºteis.',[g('-ì§€ ë§ˆ','nÃ£o faÃ§a','Imperativo negativo informal.'),g('ë‘ë ¤ì›Œí•˜ë‹¤','ter medo','O objeto Ã© aquilo que causa medo.')]),
  line('ë‚œ ë‚´ì¼ì˜ ë‚˜ì—ê²Œ ë§¡ê²¨ë†“ê³  ê°€','Eu deixo isso confiado ao eu de amanhÃ£ e sigo.',[g('-ì—ê²Œ','a/para','Marca destinatÃ¡rio: para o eu de amanhÃ£.'),g('-ì•„/ì–´ ë†“ë‹¤','deixar feito/preparado','Mostra uma aÃ§Ã£o realizada e mantida.'),g('-ê³  ê°€ë‹¤','fazer e ir','AÃ§Ã£o seguida de seguir em frente.')]),
  line('ìž ê±±ì •ì„ ë–¼ì–´ë‚´ ì§€ê¸ˆì„ ì‚´ì•„ê°€','Vamos retirar as preocupaÃ§Ãµes e viver o presente.',[g('ë–¼ì–´ë‚´ë‹¤','tirar, desprender','ë–¼ë‹¤ + ë‚´ë‹¤ reforÃ§a remover por completo.'),g('ì§€ê¸ˆ','agora, presente','Usado como substantivo: o agora.'),g('-ì•„/ì–´ ê°€ë‹¤','ir vivendo','Processo contÃ­nuo rumo ao futuro.')])],exercises:[{prompt:'Complete: ê±±ì •ì„ ë–¼ì–´___ .',answer:'ë‚´'},{prompt:'O que significa -ì•„/ì–´ ë†“ë‹¤?',answer:'Deixar uma aÃ§Ã£o feita/preparada para que seu resultado permaneÃ§a.'}]},
 {title:'Voar guiado pelo prÃ³prio coraÃ§Ã£o',lines:[
  line('ì–´ê¹¨ë¥¼ íŽ´ê³  ë‚ ì•„ì˜¬ë¼ ì§€ê¸ˆ ì´ ìˆœê°„','Endireite os ombros e levante voo, neste momento.',[g('-ê³ ','e, entÃ£o','Conecta aÃ§Ãµes em sequÃªncia.'),g('ë‚ ì•„ì˜¤ë¥´ë‹¤','voar para cima','Combina ë‚ ë‹¤ (voar) e ì˜¤ë¥´ë‹¤ (subir).')]),
  line('ë– ë‚˜ìž í•˜ëŠ˜ ì € ìœ„ë¡œ ë‚˜ë¥¼ ë¯¿ê³ ','Vamos partir para lÃ¡ em cima, no cÃ©u, acreditando em mim.',[g('-ìž','vamos','Proposta inclusiva.'),g('ìœ„ë¡œ','para cima','DireÃ§Ã£o: ìœ„ + ë¡œ.'),g('ë¯¿ê³ ','acreditando e','ë¯¿ë‹¤ + -ê³ , ligaÃ§Ã£o de aÃ§Ãµes.')]),
  line('ë§˜ ì´ë„ëŠ” ê³³ì— ë‚˜ë¥¼ ë˜ì ¸','Eu me lanÃ§o ao lugar para onde o coraÃ§Ã£o me conduz.',[g('ë§˜','coraÃ§Ã£o','Forma abreviada de ë§ˆìŒ.'),g('-ëŠ” ê³³','lugar onde/para onde','O verbo modifica ê³³, â€œlugarâ€.'),g('ë˜ì§€ë‹¤','lanÃ§ar','MetÃ¡fora de se entregar a uma direÃ§Ã£o.')]),
  line('ë‹¨ í•œ ë²ˆ ë¿ì¸ ì´ ìˆœê°„ ë‚´ ë§ˆìŒì„ ì—´ì–´','Abra meu coraÃ§Ã£o neste momento que existe apenas uma vez.',[g('ë¿ì´ë‹¤','ser apenas','ë¿ì¸ = â€œque Ã© apenasâ€.'),g('-ã„´/ì€','que Ã©','Modificador do substantivo: í•œ ë²ˆ ë¿ì¸ ìˆœê°„.')])],exercises:[{prompt:'Qual expressÃ£o significa â€œvamos partirâ€?',answer:'ë– ë‚˜ìž.'},{prompt:'Traduza ë§˜ ì´ë„ëŠ” ê³³.',answer:'O lugar para onde o coraÃ§Ã£o conduz.'}]},
 {title:'A vida que quero escolher',lines:[
  line('ë³„ë¹› ì•„ëž˜ ë¹›ì„ ë¹„ì¶° ë§˜ ê¹Šì´ ë¶ˆê½ƒì„ í”¼ì›Œ','Sob a luz das estrelas, ilumine e acenda uma chama no fundo do coraÃ§Ã£o.',[g('ì•„ëž˜','embaixo de','Substantivo de posiÃ§Ã£o.'),g('ê¹Šì´','profundamente','AdvÃ©rbio de ê¹Šë‹¤.'),g('í”¼ìš°ë‹¤','acender/fazer florescer','Usado para fogo, flores e metÃ¡foras de paixÃ£o.')]),
  line('í•˜ê³  ì‹¶ì€ ê±´ ë‹¤ í•˜ëŠ” ê±°ì•¼','O que eu quero fazer, eu faÃ§o tudo.',[g('-ê³  ì‹¶ì€','querer fazer','Desejo.'),g('-ëŠ” ê±´','a coisa de fazer','ContraÃ§Ã£o de -ëŠ” ê²ƒì€.'),g('ë‹¤','tudo','Totalidade.')]),
  line('ê°€ìž¥ ì‚´ê³  ì‹¶ì€ í•˜ë£¨ë¥¼ ì‚´ì•„','Viva o dia que vocÃª mais quer viver.',[g('ê°€ìž¥','o mais','Superlativo.'),g('-ê³  ì‹¶ì€ í•˜ë£¨','dia que se quer viver','Verbo + desejo modifica í•˜ë£¨.')]),
  line('ë‹¤ì‹  ì—†ì„ ì§€ê¸ˆ ì´ ìˆœê°„ì„ ê¸°ì–µí•´','Lembre-se deste instante de agora que nÃ£o existirÃ¡ novamente.',[g('ë‹¤ì‹ ','nunca mais','ContraÃ§Ã£o de ë‹¤ì‹œëŠ”.'),g('-ã„¹ ìˆœê°„','momento que vaiâ€¦','Modificador futuro/possibilidade.'),g('ê¸°ì–µí•˜ë‹¤','lembrar','Guardar na memÃ³ria.')]),
  line('ì°¬ëž€ížˆ ë¹›ë‚  ê±°ì•¼ í•˜ë‚˜ë¿ì¸ ì˜¤ëŠ˜ ë‚˜ì—ê²Œ','Vou brilhar radiantemente, para mim, o Ãºnico eu de hoje.',[g('ì°¬ëž€ížˆ','radiantemente','AdvÃ©rbio de ì°¬ëž€í•˜ë‹¤.'),g('-ã„¹ ê±°ì•¼','vou/serÃ¡','IntenÃ§Ã£o ou previsÃ£o informal.'),g('í•˜ë‚˜ë¿ì¸','Ãºnico','í•˜ë‚˜ + ë¿, â€œapenas umâ€.')])],exercises:[{prompt:'Como se diz â€œnunca maisâ€ no verso?',answer:'ë‹¤ì‹  (ë‹¤ì‹œëŠ”).'}, {prompt:'Traduza í•˜ë‚˜ë¿ì¸.',answer:'Ãšnico; o Ãºnico que existe.'}]}]

export const toMeTodayVocabulary=[
 {word:'í–‡ì‚´',reading:'haetsal',meaning:'luz do sol'}, {word:'ê±±ì •',reading:'geokjeong',meaning:'preocupaÃ§Ã£o'}, {word:'ë§¡ê¸°ë‹¤',reading:'matgida',meaning:'confiar, deixar a cargo de'}, {word:'ì–´ê¹¨',reading:'eokkae',meaning:'ombro'}, {word:'ì´ëŒë‹¤',reading:'ikkeulda',meaning:'conduzir, guiar'}, {word:'ë¶ˆê½ƒ',reading:'bulkkot',meaning:'chama'}, {word:'ì°¬ëž€í•˜ë‹¤',reading:'challanhada',meaning:'ser radiante, brilhante'}]

