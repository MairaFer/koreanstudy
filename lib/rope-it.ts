Exit code: 0
Wall time: 21.9 seconds
Output:
import type { Song } from './songs'

type Grammar = { expression: string; meaning: string; note: string }
type Line = { original: string; translation: string; grammar?: Grammar[] }
type Section = { title: string; lines: Line[]; exercises: { prompt: string; answer: string }[] }

const g = (expression: string, meaning: string, note: string): Grammar => ({ expression, meaning, note })
const line = (original: string, translation: string, grammar: Grammar[] = []): Line => ({ original, translation, grammar })

export const ropeItSong: Song = {
  id: 'rope-it',
  title: 'Rope It',
  artist: 'Jin',
  album: 'Echo',
  year: 2025,
  cover: 'https://i.scdn.co/image/ab67616d0000b273a99cb48ce5e2f0f7f4bf3eb6',
  color: 'from-sky-500 to-indigo-800',
  lyrics: [],
}

export const ropeItSections: Section[] = [
  {
    title: 'Saltar e confiar no movimento',
    lines: [
      line('ë‘ ë°œë¡œ ë›°ì–´ë„˜ì–´ ê°„ ìˆœê°„', 'No momento em que atravessei saltando com os dois pÃ©s.', [g('ë‘ ë°œë¡œ', 'com os dois pÃ©s', 'PartÃ­cula -ë¡œ indica meio ou maneira.'), g('-ì–´/ì•„ ê°€ë‹¤', 'ir fazendo', 'Mostra movimento ou continuidade para longe do ponto inicial.')]),
      line('ì¤„ ìœ„ë¡œ ë†’ê²Œ ì¶¤ì·„ì–´ ë‚œ', 'Eu dancei alto sobre a corda.', [g('ìœ„ë¡œ', 'para/em cima de', 'ìœ„ (parte de cima) + ë¡œ, direÃ§Ã£o ou posiÃ§Ã£o.'), g('-ì—ˆì–´', 'passado informal', 'ì¶¤ì·„ì–´ Ã© o passado de ì¶¤ì¶”ë‹¤, â€œdanÃ§arâ€.')]),
      line('ëª©í‘œëŠ” ëª¸ì´ ë§¡ì•„', 'Deixe o corpo assumir o objetivo.', [g('ë§¡ë‹¤', 'assumir, encarregar-se de', 'Usado para aceitar uma responsabilidade ou tarefa.')]),
      line('ì‰½ê²Œ ìƒê°í•˜ëŠ” ê±°ì•¼', 'Ã‰ uma questÃ£o de pensar de modo simples.', [g('-ëŠ” ê±°ì•¼', 'Ã© o ato deâ€¦', 'Forma falada de -ëŠ” ê²ƒì´ì•¼; explica ou reforÃ§a uma ideia.')]),
    ],
    exercises: [
      { prompt: 'O que -ë¡œ indica em ë‘ ë°œë¡œ?', answer: 'O meio/maneira: â€œcom os dois pÃ©sâ€.' },
      { prompt: 'Qual Ã© a forma completa de ìƒê°í•˜ëŠ” ê±°ì•¼?', answer: 'ìƒê°í•˜ëŠ” ê²ƒì´ì•¼.' },
    ],
  },
  {
    title: 'Escolhas e desapego',
    lines: [
      line('í¬ê¸°ë¥¼ ì•„ëŠ” ê±´ ì‚¬ëŠ” ë²• ê¸°ë³¸ì´ì•¼', 'Saber desistir Ã© bÃ¡sico para saber viver.', [g('-ëŠ” ê±´', 'o ato/coisa deâ€¦', 'ContraÃ§Ã£o de -ëŠ” ê²ƒì€.'), g('ì‚¬ëŠ” ë²•', 'modo de viver', 'Verbo + ëŠ” ë²• cria â€œa maneira de fazer algoâ€.')]),
      line('ì„ íƒì„ í•˜ëŠ” ê±´ ë§ˆìŒì† ê¸°ë¶„ì´ë‹¤', 'Fazer uma escolha Ã© um sentimento dentro do coraÃ§Ã£o.', [g('ë§ˆìŒì†', 'dentro do coraÃ§Ã£o/mente', 'ì† significa â€œinteriorâ€.')]),
      line('ì¸ìƒì˜ ë‘ ê°ˆëž˜ ê¸¸ ì¤‘ì— ë‚´ë”›ê³  í”ë“¤ë¦¬ëŠ” ë•Œì—”', 'Entre os dois caminhos da vida, quando vocÃª dÃ¡ um passo e vacila.', [g('ì¤‘ì—', 'entre, no meio de', 'Marca um item dentro de um grupo.'), g('-ëŠ” ë•Œì—ëŠ” / -ëŠ” ë•Œì—”', 'quando', 'ë•Œ indica momento; ì—” Ã© contraÃ§Ã£o falada de ì—ëŠ”.')]),
      line('ë¯¸ë ¨ ë”°ìœˆ ë”±ížˆ í›„íšŒ ë”°ìœˆ ë”±ížˆ ë„ì›€ ì•ˆ ë¼', 'Apego e arrependimento nÃ£o ajudam em nada.', [g('ë”°ìœ„ â†’ ë”°ìœˆ', 'coisas como; esse tipo de', 'Pode reduzir ou desdenhar o item citado.'), g('ì•ˆ ë˜ë‹¤', 'nÃ£o funcionar/nÃ£o ajudar', 'NegaÃ§Ã£o de ë˜ë‹¤.')]),
    ],
    exercises: [
      { prompt: 'Traduza ì‚¬ëŠ” ë²•.', answer: 'Modo de viver / como viver.' },
      { prompt: 'Em ê¸¸ ì¤‘ì—, qual Ã© o sentido de ì¤‘ì—?', answer: 'Entre/dentro de um conjunto.' },
    ],
  },
  {
    title: 'Ir alto e agir pelo sentimento',
    lines: [
      line('When they go low, we go high', 'Quando eles vÃ£o baixo, nÃ³s vamos alto.', []),
      line('ëŠë‚Œ ì¢‹ìœ¼ë‹ˆê¹Œ ëŠë‚€ ê·¸ëŒ€ë¡œ ê°€', 'Como a sensaÃ§Ã£o Ã© boa, siga exatamente o que vocÃª sentiu.', [g('-ìœ¼ë‹ˆê¹Œ', 'porque/jÃ¡ que', 'Indica razÃ£o para a aÃ§Ã£o seguinte.'), g('-ã„´/ì€ ê·¸ëŒ€ë¡œ', 'exatamente como', 'ê·¸ëŒ€ë¡œ preserva o estado original; ëŠë‚€ ê·¸ëŒ€ë¡œ = como foi sentido.')]),
      line('ë•Œê°€ ì™”ì–´', 'A hora chegou.', [g('ë•Œ', 'hora, momento', 'Substantivo comum para ocasiÃ£o ou tempo certo.'), g('ì˜¤ë‹¤ â†’ ì™”ì–´', 'vir â†’ veio', 'Passado informal irregular de ì˜¤ë‹¤.')]),
      line('íž˜ê» ë˜ì ¸, íž˜ê» ë‹¹ê²¨', 'Jogue com toda a forÃ§a; puxe com toda a forÃ§a.', [g('íž˜ê»', 'com todas as forÃ§as', 'AdvÃ©rbio: íž˜ (forÃ§a) + ê» (ao mÃ¡ximo).')]),
      line('ìž ê¹ ë©ˆì¶”ê³  ì†Œë¦´ ë†’ì—¬ì¤˜', 'Pare um instante e aumente o som.', [g('-ê³ ', 'e, entÃ£o', 'Conecta aÃ§Ãµes em sequÃªncia.'), g('ì†Œë¦¬ â†’ ì†Œë¦´', 'som', 'ContraÃ§Ã£o de ì†Œë¦¬ë¥¼, objeto direto.'), g('-ì•„/ì–´ ì£¼ë‹¤', 'fazer para alguÃ©m', 'Pedido/aÃ§Ã£o feita em benefÃ­cio de alguÃ©m.')]),
    ],
    exercises: [
      { prompt: 'Complete: ëŠë‚Œ ì¢‹ìœ¼___ ëŠë‚€ ê·¸ëŒ€ë¡œ ê°€.', answer: 'ë‹ˆê¹Œ' },
      { prompt: 'Como se diz â€œcom toda a forÃ§aâ€?', answer: 'íž˜ê».' },
    ],
  },
]

export const ropeItVocabulary = [
  { word: 'ë›°ì–´ë„˜ë‹¤', reading: 'ttwieoneomda', meaning: 'saltar por cima, superar' },
  { word: 'ì¤„', reading: 'jul', meaning: 'corda, linha' },
  { word: 'ëª©í‘œ', reading: 'mokpyo', meaning: 'objetivo, meta' },
  { word: 'í¬ê¸°', reading: 'pogi', meaning: 'desistÃªncia, abrir mÃ£o' },
  { word: 'ì„ íƒ', reading: 'seontaek', meaning: 'escolha' },
  { word: 'í”ë“¤ë¦¬ë‹¤', reading: 'heundeullida', meaning: 'balanÃ§ar, vacilar' },
  { word: 'ë¯¸ë ¨', reading: 'miryeon', meaning: 'apego, arrependimento persistente' },
  { word: 'íž˜ê»', reading: 'himkkeot', meaning: 'com toda a forÃ§a' },
]

