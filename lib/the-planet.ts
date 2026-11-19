import type {Song} from '@/lib/songs';
import type {StudyLine} from '@/lib/spring-day';

type Entry={term:string;meaning:string;notes?:string[];card?:string};
const e=(term:string,meaning:string,notes?:string[],card?:string):Entry=>({term,meaning,notes,card});
const line=(text:string,translation:string,entries:Entry[]=[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});

export const thePlanetSong:Song={id:'the-planet',title:'The Planet',koTitle:'The Planet',videoId:'',level:'IntermediÃ¡rio',topic:'UniÃ£o, esperanÃ§a, natureza, viagem e proteÃ§Ã£o',intro:'Uma canÃ§Ã£o de uniÃ£o: duas pessoas encontram forÃ§a para recuperar a cor do mundo e proteger aquilo que importa.',clips:[],example:{ko:'ìš°ë¦¬ í•¨ê»˜ í•´ë³¼ê¹Œ?',pt:'Vamos tentar juntos?',explanation:'ìš°ë¦¬ significa â€œnÃ³sâ€; í•¨ê»˜ Ã© â€œjuntosâ€; -ì•„/ì–´ ë³´ë‹¤ propÃµe tentar uma aÃ§Ã£o; -ã„¹ê¹Œ? faz um convite suave.'},exercises:[{id:'music-the-planet-1',kind:'choice',prompt:'O que -ì•„/ì–´ì ¸ expressa em ì–´ë‘ì›Œì ¸?',answer:['MudanÃ§a: fica escuro'],options:['Uma ordem para escurecer','MudanÃ§a: fica escuro','Uma aÃ§Ã£o passada'],explanation:'ì–´ë‘¡ë‹¤ Ã© â€œser escuroâ€; -ì•„/ì–´ì§€ë‹¤ mostra uma mudanÃ§a de estado.'},{id:'music-the-planet-2',kind:'choice',prompt:'Como interpretar í•´ë³¼ê¹Œ?',answer:['Vamos tentar fazer?'],options:['NÃ£o faÃ§a isso','Vamos tentar fazer?','JÃ¡ tentamos ontem'],explanation:'-ì•„/ì–´ ë³´ë‹¤ Ã© â€œtentarâ€; -(ìœ¼)ã„¹ê¹Œ? propÃµe algo ao interlocutor.'},{id:'music-the-planet-3',kind:'choice',prompt:'O que -(ìœ¼)ã„¹ ìˆ˜ ìžˆì–´ expressa?',answer:['Possibilidade ou capacidade'],options:['Possibilidade ou capacidade','Uma proibiÃ§Ã£o','Uma lembranÃ§a'],explanation:'í•  ìˆ˜ ìžˆì–´ significa â€œpode/consegue fazerâ€.'},{id:'music-the-planet-4',kind:'choice',prompt:'O que ì§€í‚¤ê³  ì‹¶ì€ ê±¸ comunica?',answer:['Algo que quero proteger'],options:['Algo que preciso abandonar','Algo que quero proteger','Algo que jÃ¡ foi perdido'],explanation:'ì§€í‚¤ë‹¤ Ã© proteger; -ê³  ì‹¶ë‹¤ expressa desejo; ê²ƒ/ê±¸ nominaliza a ideia.'}]};

export const thePlanetSections:{title:string;lines:StudyLine[]}[]=[
{title:'Abertura: forÃ§a compartilhada',lines:[en("We'll get it done",'NÃ³s vamos conseguir.'),en("We'll work as one",'Vamos agir como um sÃ³.'),line('ë„ˆì™€ ë‚˜ì˜ ìž‘ì€ ë³„','A pequena estrela sua e minha.',[e('ë„ˆì™€ ë‚˜ì˜','sua e minha',['ë„ˆì™€ = com/vocÃª e; ë‚˜ì˜ = minha; a construÃ§Ã£o une os dois lados']),e('ìž‘ì€','pequena',['ìž‘ë‹¤ = ser pequeno; -ì€ modifica ë³„']),e('ë³„','estrela')]),line('ì§€ê¸ˆ ì•„íŒŒí•˜ê³  ìžˆì–´','Agora estÃ¡ sofrendo.',[e('ì§€ê¸ˆ…23388 tokens truncated…ê³ ë…ì˜ ëìžë½ì— í™€ë¡œ ì„œ ìžˆëŠ” ë‚´ê²Œ', 'Para mim, que estou sÃ³ na beira da solidÃ£o.', [g('-ì—', 'em, na', 'Marca lugar/posiÃ§Ã£o.'), g('-ëŠ” ë‚´ê²Œ', 'para mim queâ€¦', 'ë‚´ê²Œ Ã© â€œa mimâ€; a oraÃ§Ã£o anterior descreve o falante.')]),
    ],
    exercises: [
      { prompt: 'Traduza ì ì  ë” ì»¤ì ¸ê°€.', answer: 'Vai ficando cada vez maior.' },
      { prompt: 'O que significa ë‚´ê²Œ?', answer: 'Para mim / a mim.' },
    ],
  },
  {
    title: 'Voz que acolhe e esperanÃ§a compartilhada',
    lines: [
      line('ì–´ë””ë¡œ ê°€ì•¼ í• ì§€ ëª¨ë¥´ëŠ” ë‚´ê²Œ', 'Para mim, que nÃ£o sei para onde devo ir.', [g('-ì•„/ì–´ì•¼ í•˜ë‹¤', 'ter de/dever', 'ObrigaÃ§Ã£o ou necessidade.'), g('-ã„¹ì§€ ëª¨ë¥´ë‹¤', 'nÃ£o saber se/para onde', 'Expressa incerteza em uma pergunta indireta.')]),
      line('ì°¨ê°‘ê²Œ ì–¼ì–´ë¶™ì€ ì¹¨ë¬µ ì†ì—ì„œ ë„¤ ë”°ìŠ¤í•œ ì†ì‚­ìž„ ë‚  ìž¡ì•„ì¤€ ëª©ì†Œë¦¬', 'No silÃªncio congelado e frio, sua voz quente, que sussurrou e me segurou.', [g('-ì•„/ì–´ ì£¼ë‹¤', 'fazer para alguÃ©m', 'ìž¡ì•„ì¤€ = â€œsegurou por mimâ€, com ideia de cuidado.'), g('ì†ì—ì„œ', 'dentro de', 'ì† + ì—ì„œ situa uma aÃ§Ã£o no interior de algo.')]),
      line('ìž”ìž”í•œ í•˜ëŠ˜ ì†ì„ ë– ë„ëŠ” ìš°ë¦¬ ë‘˜ì´', 'NÃ³s dois, vagando no cÃ©u sereno.', [g('ìš°ë¦¬ ë‘˜', 'nÃ³s dois', 'ë‘˜ Ã© o contador nativo para duas pessoas.'), g('ë– ëŒë‹¤', 'vagar, andar sem rumo', 'Aqui reforÃ§a a imagem de viagem incerta.')]),
      line('ì–¸ì  ê°„ ë°ì€ ë‚ ì„ í•¨ê»˜ ê¿ˆê¾¸ê¸°ë¡œ í•´ ì˜ì›ížˆ', 'Vamos decidir sonhar juntos, para sempre, com dias claros algum dia.', [g('ì–¸ì  ê°„', 'algum dia', 'ContraÃ§Ã£o de ì–¸ì  ê°€ëŠ”.'), g('-ê¸°ë¡œ í•˜ë‹¤', 'decidir combinar fazer', 'Expressa decisÃ£o ou acordo.'), g('í•¨ê»˜', 'juntos', 'AdvÃ©rbio de companhia.')]),
    ],
    exercises: [
      { prompt: 'Complete: í•¨ê»˜ ê¿ˆê¾¸___ í•´.', answer: 'ê¸°ë¡œ' },
      { prompt: 'Qual expressÃ£o significa â€œnÃ£o saber para onde irâ€?', answer: 'ì–´ë””ë¡œ ê°€ì•¼ í• ì§€ ëª¨ë¥´ë‹¤.' },
    ],
  },
  {
    title: 'Promessa e proteÃ§Ã£o',
    lines: [
      line('ì„œíˆ´ê²Œ ì†ì„ ëŒ€ë©´ ì‚¬ë¼ì§ˆê¹Œ ê²ì„ ë‚¸ ì•„ì´ì•¼', 'CrianÃ§a que teme que, se tocar desajeitadamente, isso desapareÃ§a.', [g('-ë©´', 'se/quando', 'Cria condiÃ§Ã£o.'), g('-ã„¹ê¹Œ', 'serÃ¡ queâ€¦?', 'Pergunta/dÃºvida usada aqui como temor.'), g('ê²ì„ ë‚´ë‹¤', 'sentir medo', 'ExpressÃ£o: literalmente â€œproduzir medoâ€.')]),
      line('ì˜ì›ížˆ ì†Œë©¸ë˜ì§€ ì•ŠëŠ” ì•½ì†ì˜ ë‹¨ì–´ë¥¼ ë§Œë“¤ìž', 'Vamos criar palavras de promessa que nunca desaparecem.', [g('-ì§€ ì•Šë‹¤', 'nÃ£o', 'NegaÃ§Ã£o.'), g('-ëŠ”', 'queâ€¦', 'Modificador presente: â€œque nÃ£o desaparecemâ€.'), g('-ìž', 'vamos', 'Proposta inclusiva e Ã­ntima.')]),
      line('ë„¤ ìŠ¬í””ì´ ë‹´ê¸´ ëˆˆë¬¼ì´ ë¹„ë¼ë©´ ê¸°êº¼ì´ ì ì…” ë‹¤ ê°€ì ¸ê°ˆê²Œ', 'Se as lÃ¡grimas que contÃªm sua tristeza forem chuva, eu vou me molhar de bom grado e levÃ¡-las todas.', [g('-ã„´/ì€ ëˆˆë¬¼', 'lÃ¡grimas queâ€¦', 'ë‹´ê¸´ Ã© o modificador de ë‹´ê¸°ë‹¤: â€œestar contidoâ€.'), g('-ë¼ë©´', 'se for', 'CondiÃ§Ã£o hipotÃ©tica, forma de ì´ë¼ë©´.'), g('ê¸°êº¼ì´', 'de bom grado', 'Mostra disposiÃ§Ã£o voluntÃ¡ria.'), g('-ã„¹ê²Œ', 'eu vou', 'Promessa/intenÃ§Ã£o assumida pelo falante.')]),
      line('ìƒˆí•˜ì–€ ë„¤ ë§ˆìŒì´ ê²€ê²Œ ë¬¼ë“¤ì§€ ì•Šë„ë¡ ì‹œìž‘ì˜ ê·¸ë‚ ì²˜ëŸ¼', 'Para que seu coraÃ§Ã£o branco e puro nÃ£o seja tingido de preto, como naquele dia do comeÃ§o.', [g('-ì§€ ì•Šë„ë¡', 'para que nÃ£o', 'Finalidade com prevenÃ§Ã£o.'), g('-ì²˜ëŸ¼', 'como', 'ComparaÃ§Ã£o: â€œcomo no dia do inÃ­cioâ€.')]),
    ],
    exercises: [
      { prompt: 'Traduza -ì§€ ì•Šë„ë¡.', answer: 'Para que nÃ£o / de modo que nÃ£o.' },
      { prompt: 'Em ë¹„ë¼ë©´, qual Ã© a condiÃ§Ã£o?', answer: 'â€œSe (as lÃ¡grimas) forem chuvaâ€.' },
    ],
  },
]

export const withTheCloudsVocabulary = [
  { word: 'êµ¬ë¦„', reading: 'gureum', meaning: 'nuvem' },
  { word: 'ëì—†ì´', reading: 'kkeuteopsi', meaning: 'sem fim' },
  { word: 'ë‘ê·¼ê±°ë¦¼', reading: 'dugeungeorim', meaning: 'palpitaÃ§Ã£o, expectativa' },
  { word: 'ê³ ë…', reading: 'godok', meaning: 'solidÃ£o' },
  { word: 'ì†ì‚­ìž„', reading: 'soksagim', meaning: 'sussurro' },
  { word: 'í”ì ', reading: 'heunjeok', meaning: 'vestÃ­gio, marca' },
  { word: 'ì„œíˆ´ë‹¤', reading: 'seotulda', meaning: 'ser desajeitado, inexperiente' },
  { word: 'ì†Œë©¸ë˜ë‹¤', reading: 'somyeoldoeda', meaning: 'desaparecer, extinguir-se' },
]

