Exit code: 0
Wall time: 22.1 seconds
Output:
import type { Song } from './songs'

type Grammar = { expression: string; meaning: string; note: string }
type Line = { original: string; translation: string; grammar?: Grammar[] }
type Section = { title: string; lines: Line[]; exercises: { prompt: string; answer: string }[] }

const g = (expression: string, meaning: string, note: string): Grammar => ({ expression, meaning, note })
const line = (original: string, translation: string, grammar: Grammar[] = []): Line => ({ original, translation, grammar })

export const gajahSong: Song = {
  id: 'gajah',
  title: 'Gajah (feat. RM)',
  artist: 'Gaeko feat. RM',
  album: 'Gajah',
  year: 2017,
  cover: 'https://i.scdn.co/image/ab67616d0000b273ed54a51c6dbd607461a9df6b',
  color: 'from-amber-500 to-orange-700',
  lyrics: [],
}

export const gajahSections: Section[] = [
  {
    title: 'CansaÃ§o, objetivos e autonomia',
    lines: [
      line('ë¬´ê¸°ë ¥í•œ í•˜ë£¨ í•´ì¹˜ìš´ ë‹¤ìŒ', 'Depois de enfrentar um dia sem energia.', [g('-(ìœ¼)ã„´ ë‹¤ìŒ', 'depois de', 'ë‹¤ìŒ vem apÃ³s uma aÃ§Ã£o concluÃ­da.')]),
      line('ì™œ ë‚œ í•˜ì—¼ì—†ì´ ëª©í‘œë§Œì„ ì°¾ë‚˜', 'Por que procuro apenas objetivos sem parar?', [g('-ë‚˜', 'pergunta reflexiva', 'Forma usada para se perguntar algo com tom introspectivo.')]),
      line('ë‚œ ë‚´ ê¸¸ì„ ê°ˆê±°ë¼ê³ ', 'Eu vou seguir o meu prÃ³prio caminho.', [g('-ã„¹ ê±°ë¼ê³ ', 'que vouâ€¦', 'ContraÃ§Ã£o de ê²ƒì´ë‹¤ + citaÃ§Ã£o indireta.')]),
      line('ë„ˆë„ ë§ì„¤ì´ì§€ ë§ê³  ê·¸ëƒ¥ í•˜ê³  ì‹¶ì€ê±° í•´', 'VocÃª tambÃ©m, sem hesitar, faÃ§a o que quiser fazer.', [g('-ì§€ ë§ê³ ', 'sem fazer', 'Liga uma proibiÃ§Ã£o a uma aÃ§Ã£o seguinte.'), g('-ê³  ì‹¶ë‹¤', 'querer fazer', 'Expressa desejo; ì‹¶ì€ ê±° Ã© â€œa coisa que se querâ€.')]),
    ],
    exercises: [
      { prompt: 'Complete: ë§ì„¤ì´ì§€ ___ í•˜ê³  ì‹¶ì€ ê±° í•´.', answer: 'ë§ê³ ' },
      { prompt: 'Qual expressÃ£o significa â€œdepois deâ€?', answer: '-(ìœ¼)ã„´ ë‹¤ìŒ' },
    ],
  },
  {
    title: 'O passo do elefante',
    lines: [
      line('ì‚¬ëžŒì¼ì´ ë§ì•¼ ë‹¹ìž¥ ë‚´ì¼ë„ ë§ì•¼ ì–´ì°Œë ì§€ ëª¨ë¥´ë‹ˆê¹Œ', 'Quanto Ã s coisas da vida, nem sabemos o que acontecerÃ¡ amanhÃ£.', [g('-ã„¹ì§€ ëª¨ë¥´ë‹¤', 'nÃ£o saber se/o que', 'Expressa incerteza sobre um resultado futuro.')]),
      line('ê·¸ëƒ¥ ì½”ë¼ë¦¬ìŠ¤í… ë¼ë¦¬ë¼ë¦¬ìŠ¤í…ìœ¼ë¡œ ê°€ì•¼ì§€', 'EntÃ£o devemos seguir, simplesmente, no passo do elefante.', [g('-ì•„/ì–´ì•¼ì§€', 'devo/devemos', 'DecisÃ£o ou resoluÃ§Ã£o assumida pelo falante.')]),
      line('You don\'t choose life, life chose you', 'VocÃª nÃ£o escolhe a vida; a vida escolheu vocÃª.', []),
      line('ì„¸ìƒì€ ì»¬ëŸ¬ì¸ ì²™í•˜ëŠ” ëª¨ë…¸ì•¼', 'O mundo Ã© monocromÃ¡tico, fingindo ser colorido.', [g('-ëŠ” ì²™í•˜ë‹¤', 'fingir que', 'Descreve uma aparÃªncia ou atitude nÃ£o verdadeira.')]),
    ],
    exercises: [
      { prompt: 'Em -ã„¹ì§€ ëª¨ë¥´ë‹ˆê¹Œ, qual Ã© a ideia principal?', answer: 'Incerteza: â€œporque nÃ£o sabemos o que acontecerÃ¡â€.' },
      { prompt: 'Traduza -ëŠ” ì²™í•˜ë‹¤.', answer: 'Fingir que / agir como se.' },
    ],
  },
  {
    title: 'Identidade e respeito prÃ³prio',
    lines: [
      line('í™•ì‹¤í•œ ê±´ ë„ˆ ì—­ì‹œ í”¼ì•„ë…¸ì˜ ì¼ë¶€', 'O certo Ã© que vocÃª tambÃ©m Ã© parte do piano.', [g('ê²ƒì€ â†’ ê±´', 'o que Ã©â€¦', 'ContraÃ§Ã£o comum na fala: ê²ƒì€ vira ê±´.'), g('ì—­ì‹œ', 'tambÃ©m', 'Enfatiza que algo igualmente se aplica.')]),
      line('ë„ˆëŠ” ë„ˆë¥¼ ìœ„í•´ ì‹¸ì›Œ ë„ˆëŠ” ë„ˆë¥¼ ìœ„í•´ ë‚ ì„ ì„¸ì›Œ', 'Lute por vocÃª; afie-se por vocÃª.', [g('ìœ„í•´', 'por/para', 'Forma de ìœ„í•˜ë‹¤, indicar propÃ³sito ou benefÃ­cio.')]),
      line('ì‹¤íŒ¨ë³´ë‹¤ ë” ì‹¤ë¡€í•´ì•¼ ë  ê±´ ì´ê±°ì•¼: self disrespect myself', 'Mais grave do que falhar Ã© desrespeitar a si mesmo.', [g('-ì•„/ì–´ì•¼ ë˜ë‹¤', 'ter de', 'Necessidade ou obrigaÃ§Ã£o.')]),
      line('ë‚´ì„±ì ì¸ ë‚´ê²Œ ë„¤íŠ¸ì›Œí¬ ê°•ìš”í•˜ì§€ ë§ˆë¼', 'NÃ£o imponha networking a mim, que sou introvertido.', [g('-ì§€ ë§ˆë¼', 'nÃ£o faÃ§a', 'Imperativo negativo, direto e forte.')]),
      line('ë‚˜ë„ ëˆ„êµ°ê°€ì˜ ì‚¶ì— BGMìœ¼ë¡œ ìš°ì—°ížˆ ìŠ¤ë©°ë“¤ê¸°ë¥¼ ì›í•´', 'TambÃ©m quero me infiltrar por acaso na vida de alguÃ©m como uma trilha sonora.', [g('-ê¸°ë¥¼ ì›í•˜ë‹¤', 'querer que', 'Desejo por uma aÃ§Ã£o; forma nominalizada com -ê¸°.')]),
    ],
    exercises: [
      { prompt: 'O que significa ì—­ì‹œ?', answer: 'TambÃ©m, igualmente.' },
      { prompt: 'Transforme â€œnÃ£o imponhaâ€ usando o verso.', answer: 'ê°•ìš”í•˜ì§€ ë§ˆë¼.' },
    ],
  },
]

export const gajahVocabulary = [
  { word: 'ë¬´ê¸°ë ¥í•˜ë‹¤', reading: 'mugiryeokhada', meaning: 'estar sem energia ou motivaÃ§Ã£o' },
  { word: 'ë§ì„¤ì´ë‹¤', reading: 'mangseorida', meaning: 'hesitar' },
  { word: 'í˜¸ë¶ˆí˜¸', reading: 'hobulho', meaning: 'gostos e aversÃµes; opiniÃµes divididas' },
  { word: 'ìš´ëª…', reading: 'unmyeong', meaning: 'destino' },
  { word: 'ë¶ˆí˜‘í™”ìŒ', reading: 'bulhyeop-hwaeum', meaning: 'dissonÃ¢ncia' },
  { word: 'ê°•ìš”í•˜ë‹¤', reading: 'gangyohada', meaning: 'impor, forÃ§ar' },
  { word: 'ìŠ¤ë©°ë“¤ë‹¤', reading: 'seumyeodeulda', meaning: 'penetrar, infiltrar-se aos poucos' },
]

