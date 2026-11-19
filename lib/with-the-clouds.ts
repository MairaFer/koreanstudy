Exit code: 0
Wall time: 24.8 seconds
Output:
import type { Song } from './songs'

type Grammar = { expression: string; meaning: string; note: string }
type Line = { original: string; translation: string; grammar?: Grammar[] }
type Section = { title: string; lines: Line[]; exercises: { prompt: string; answer: string }[] }

const g = (expression: string, meaning: string, note: string): Grammar => ({ expression, meaning, note })
const line = (original: string, translation: string, grammar: Grammar[] = []): Line => ({ original, translation, grammar })

export const withTheCloudsSong: Song = {
  id: 'with-the-clouds',
  title: 'With The Clouds (êµ¬ë¦„ê³¼ ë– ë‚˜ëŠ” ì—¬í–‰)',
  artist: 'Jin',
  album: 'Happy',
  year: 2024,
  cover: 'https://i.scdn.co/image/ab67616d0000b27336d6f3a0bcb6cf6f2cf69e00',
  color: 'from-sky-400 to-violet-700',
  lyrics: [],
}

export const withTheCloudsSections: Section[] = [
  {
    title: 'A viagem pelo cÃ©u',
    lines: [
      line('êµ¬ë¦„ì€ ì˜¤ëŠ˜ë„ ë‚´ ì „ë¶€ë¥¼ ë‹´ì•„ ëì—†ì´ ì´ì–´ì§€ëŠ” í•˜ëŠ˜ ì—¬í–‰í•´', 'As nuvens, hoje tambÃ©m, levam todo o meu ser em uma viagem pelo cÃ©u que continua sem fim.', [g('ì˜¤ëŠ˜ë„', 'hoje tambÃ©m', 'ë„ acrescenta â€œtambÃ©m/atÃ©â€.'), g('ì „ë¶€', 'tudo, totalidade', 'ë‚´ ì „ë¶€ = todo o meu ser.'), g('-ì•„/ì–´ì§€ë‹¤', 'tornar-se', 'ì´ì–´ì§€ë‹¤ significa â€œcontinuar, conectar-seâ€.')]),
      line('ì„ì–‘ì§„ ë…¸ì„ ë³„ì´ ë¹›ë‚˜ëŠ” ì´ ë°¤', 'Nesta noite em que o pÃ´r do sol e as estrelas brilham.', [g('-ã„´/ì€', 'queâ€¦', 'Forma que transforma um verbo em modificador do substantivo.'), g('ë¹›ë‚˜ë‹¤', 'brilhar', 'ë¹›ë‚˜ëŠ” ë³„ = estrelas brilhantes.')]),
      line('ìž‘ì€ ë‘ê·¼ê±°ë¦¼ ì ì  ë” ì»¤ì ¸ê°€', 'A pequena palpitaÃ§Ã£o cresce cada vez mais.', [g('ì ì  ë”', 'cada vez mais', 'Expressa aumento gradual.'), g('ì»¤ì ¸ ê°€ë‹¤', 'ir ficando maior', 'MudanÃ§a progressiva: ì»¤ì§€ë‹¤ + ê°€ë‹¤.')]),
      line('ê³ ë…ì˜ ëìžë½ì— í™€ë¡œ ì„œ ìžˆëŠ” ë‚´ê²Œ', 'Para mim, que estou sÃ³ na beira da solidÃ£o.', [g('-ì—', 'em, na', 'Marca lugar/posiÃ§Ã£o.'), g('-ëŠ” ë‚´ê²Œ', 'para mim queâ€¦', 'ë‚´ê²Œ Ã© â€œa mimâ€; a oraÃ§Ã£o anterior descreve o falante.')]),
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

