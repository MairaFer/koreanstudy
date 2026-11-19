Exit code: 0
Wall time: 26.8 seconds
Output:
import type { Song } from './songs'

type Grammar = { expression: string; meaning: string; note: string }
type Line = { original: string; translation: string; grammar?: Grammar[] }
type Section = { title: string; lines: Line[]; exercises: { prompt: string; answer: string }[] }

const g = (expression: string, meaning: string, note: string): Grammar => ({ expression, meaning, note })
const line = (original: string, translation: string, grammar: Grammar[] = []): Line => ({ original, translation, grammar })

export const loserSong: Song = {
  id: 'loser',
  title: 'Loser',
  artist: 'Jin',
  album: 'Echo',
  year: 2025,
  cover: 'https://i.scdn.co/image/ab67616d0000b273a99cb48ce5e2f0f7f4bf3eb6',
  color: 'from-rose-500 to-red-800',
  lyrics: [],
}

export const loserSections: Section[] = [
  {
    title: 'Uma relaÃ§Ã£o que ameaÃ§a acabar',
    lines: [
      line('ìŠµê´€ì²˜ëŸ¼ ë§¤ë²ˆ ë„Œ ë±‰ì–´ ëë‚´ìžëŠ” ë§', 'Como um hÃ¡bito, vocÃª solta sempre as palavras de que quer terminar.', [g('-ì²˜ëŸ¼', 'como, tal qual', 'Compara algo a outra coisa.'), g('ë§¤ë²ˆ', 'toda vez', 'AdvÃ©rbio formado por ë§¤ (cada) + ë²ˆ (vez).'), g('-ìžëŠ” ë§', 'a fala de â€œvamosâ€¦â€', 'CitaÃ§Ã£o de uma proposta: ëë‚´ìž = â€œvamos terminarâ€.')]),
      line('í›„íšŒí•  í…ë° ë„Œ ì‰½ê²Œ ë‚˜ë¥¼ ëª» ë– ë‚˜ê°€', 'VocÃª vai se arrepender, mas nÃ£o consegue me deixar tÃ£o facilmente.', [g('-ã„¹ í…ë°', 'deve/vaiâ€¦, mas', 'SuposiÃ§Ã£o ou previsÃ£o que prepara contraste.'), g('-ì§€ ëª»í•˜ë‹¤', 'nÃ£o conseguir', 'Incapacidade; ë– ë‚˜ê°€ì§€ ëª»í•˜ë‹¤ = nÃ£o conseguir ir embora.')]),
      line('ë„ˆì˜ ê¸°ì¤€ ê·¸ê²Œ ë°”ë¡œ ë‚˜ì•¼', 'Para os seus padrÃµes, esse alguÃ©m sou exatamente eu.', [g('ë°”ë¡œ', 'exatamente, justamente', 'DÃ¡ Ãªnfase Ã  identificaÃ§Ã£o.'), g('-ì•¼', 'Ã©', 'Forma informal deì´ë‹¤.')]),
      line('ë‚  ë†“ì¹˜ê¸°ì—” ë„ˆë¬´ ì•„ê¹Œì›Œ', 'Ã‰ bom demais para vocÃª me perder.', [g('-ê¸°ì—ëŠ” / -ê¸°ì—”', 'para fazerâ€¦, Ã©', 'Forma contraÃ­da; avalia uma aÃ§Ã£o.'), g('ì•„ê¹ë‹¤', 'ser uma pena, ser precioso demais', 'Aqui: â€œseria desperdÃ­cio/perdaâ€.')]),
    ],
    exercises: [
      { prompt: 'Qual Ã© a forma completa de ë†“ì¹˜ê¸°ì—”?', answer: 'ë†“ì¹˜ê¸°ì—ëŠ”.' },
      { prompt: 'Complete: ëë‚´___ ë§.', answer: 'ìžëŠ”' },
    ],
  },
  {
    title: 'DiscussÃ£o, orgulho e provocaÃ§Ã£o',
    lines: [
      line('ë­ë¼ê³  í•´ë´¤ìž ì‹œë„ëŸ½ê²Œë§Œ ë“¤ë¦´ ë¿ì´ì•¼', 'Mesmo que vocÃª diga algo, vai soar apenas barulhento.', [g('-ì•„/ì–´ ë´¤ìž', 'mesmo que tente/faÃ§a', 'Indica que o resultado nÃ£o mudarÃ¡.'), g('-ã„¹ ë¿ì´ë‹¤', 'ser apenas', 'Limita a ideia a uma Ãºnica consequÃªncia.')]),
      line('ì²˜ìŒë¶€í„° ë¨¼ì € ì¢‹ë‹¨ ê²Œ ëˆ„êµ¬ì§€', 'Quem foi que gostou primeiro desde o comeÃ§o?', [g('ì²˜ìŒë¶€í„°', 'desde o inÃ­cio', 'ì²˜ìŒ + ë¶€í„° = a partir do comeÃ§o.'), g('-ë‹¨ ê²Œ', 'a coisa de queâ€¦', 'ContraÃ§Ã£o de -ë‹¤ëŠ” ê²ƒì´; cita uma afirmaÃ§Ã£o.')]),
      line('ê²°êµ­ ë‚  ë†“ì¹˜ë©´ í›„íšŒí• ê±¸', 'No fim, se me perder, vocÃª vai se arrepender.', [g('-ë©´', 'se/quando', 'CondiÃ§Ã£o.'), g('-ã„¹ê±¸', 'vaiâ€¦, aposto', 'PrevisÃ£o firme, por vezes com desafio ou aviso.')]),
      line('ë‚  ë†“ì¹˜ë©´ Loser', 'Se me perder, serÃ¡ o perdedor.', [g('ë‚ ', 'me', 'Forma contraÃ­da de ë‚˜ë¥¼.')]),
    ],
    exercises: [
      { prompt: 'Traduza -ì•„/ì–´ ë´¤ìž.', answer: 'Mesmo que tente/faÃ§a; ainda assim.' },
      { prompt: 'O que -ã„¹ê±¸ acrescenta ao aviso?', answer: 'Uma previsÃ£o confiante: â€œvai se arrepender, pode apostarâ€.' },
    ],
  },
  {
    title: 'Escolher perdoar',
    lines: [
      line('ì´ë²ˆ í•œ ë²ˆë§Œ ëˆˆê°ì•„ì¤„ê²Œ', 'Desta vez, sÃ³ uma vez, vou deixar passar.', [g('í•œ ë²ˆë§Œ', 'somente uma vez', 'ë§Œ restringe: â€œapenasâ€.'), g('ëˆˆê°ì•„ì£¼ë‹¤', 'fazer vista grossa', 'Literalmente â€œfechar os olhos para alguÃ©mâ€; -ì£¼ë‹¤ marca benefÃ­cio/concessÃ£o.')]),
      line('ì„œë¡œ ë†“ì¹˜ê¸°ì—” ë„ˆë¬´ ì•„ê¹Œì›Œ', 'NÃ³s dois somos preciosos demais para nos perdermos.', [g('ì„œë¡œ', 'um ao outro', 'Indica reciprocidade.'), g('-ê¸°ì—”', 'para fazerâ€¦, Ã©', 'AvaliaÃ§Ã£o: perder um ao outro seria uma pena.')]),
      line('ìš°ë¦¬ í›„íšŒí•  ì§“ í•˜ì§€ ë§ìž', 'NÃ£o vamos fazer algo de que nos arrependamos.', [g('ì§“', 'ato, coisa feita', 'Pode ter tom crÃ­tico dependendo do contexto.'), g('-ì§€ ë§ìž', 'nÃ£o vamos', 'Proposta negativa inclusiva: falante + ouvinte.')]),
      line('I don\'t wanna let you go', 'Eu nÃ£o quero deixar vocÃª ir.', []),
    ],
    exercises: [
      { prompt: 'Qual expressÃ£o significa â€œfazer vista grossaâ€?', answer: 'ëˆˆê°ì•„ì£¼ë‹¤.' },
      { prompt: 'Transforme â€œvamos fazerâ€ em â€œnÃ£o vamos fazerâ€.', answer: 'í•˜ìž â†’ í•˜ì§€ ë§ìž.' },
    ],
  },
]

export const loserVocabulary = [
  { word: 'ìŠµê´€', reading: 'seupgwan', meaning: 'hÃ¡bito' },
  { word: 'ë§¤ë²ˆ', reading: 'maebeon', meaning: 'toda vez' },
  { word: 'í›„íšŒí•˜ë‹¤', reading: 'huhoehada', meaning: 'arrepender-se' },
  { word: 'ë– ë‚˜ê°€ë‹¤', reading: 'tteonagada', meaning: 'partir, ir embora' },
  { word: 'ë†“ì¹˜ë‹¤', reading: 'nochida', meaning: 'perder, deixar escapar' },
  { word: 'ì•„ê¹ë‹¤', reading: 'akkapda', meaning: 'ser uma pena; ser precioso demais para desperdiÃ§ar' },
  { word: 'ëˆˆê°ì•„ì£¼ë‹¤', reading: 'nungamajuda', meaning: 'fazer vista grossa, relevar' },
  { word: 'ì„œë¡œ', reading: 'seoro', meaning: 'um ao outro; mutuamente' },
]

