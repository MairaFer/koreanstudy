import type { Song } from './songs'

type Grammar = { expression: string; meaning: string; note: string }
type Line = { original: string; translation: string; grammar?: Grammar[] }
type Section = { title: string; lines: Line[]; exercises: { prompt: string; answer: string }[] }
const g = (expression: string, meaning: string, note: string): Grammar => ({ expression, meaning, note })
const line = (original: string, translation: string, grammar: Grammar[] = []): Line => ({ original, translation, grammar })

export const backgroundSong: Song = { id: 'background', title: 'Background', artist: 'Jin', album: 'Happy', year: 2024, cover: 'https://i.scdn.co/image/ab67616d0000b27336d6f3a0bcb6cf6f2cf69e00', color: 'from-slate-500 to-indigo-950', lyrics: [] }

export const backgroundSections: Section[] = [
  {
    title: 'Preso em uma estaÃ§Ã£o do passado',
    lines: [
      line('ì•„ì§ ë‚œ ê±°ê¸° ì‚´ì•„', 'Eu ainda vivo lÃ¡.', [g('ì•„ì§', 'ainda', 'Mostra que um estado continua.'), g('ê±°ê¸°', 'ali, naquele lugar', 'TambÃ©m pode representar um momento emocional do passado.')]),
      line('ë„ˆì˜ ì„¸ìƒì´ ë‹¤ ë‚˜ì˜€ë˜ ê³„ì ˆì—', 'Na estaÃ§Ã£o em que todo o seu mundo era eu.', [g('-ì—ˆë˜', 'que era/foi', 'Modificador retrospectivo para uma lembranÃ§a concluÃ­da.'), g('ê³„ì ˆì—', 'na estaÃ§Ã£o', 'ì— marca tempo ou lugar.')]),
      line('ë‚˜ í™€ë¡œ ë˜ë‡ŒëŠ” ë§', 'Palavras que repito sozinho.', [g('í™€ë¡œ', 'sozinho', 'AdvÃ©rbio mais poÃ©tico de í˜¼ìž.'), g('ë˜ë‡Œë‹¤', 'repetir para si', 'Verbo usado para ruminar palavras ou pensamentos.')]),
      line('ë‹¤ì‹œ ëŒì•„ê°„ë‹¤ë©´ ë¬´ìŠ¨ ë§ì„ í• ê¹Œ', 'Se eu pudesse voltar, o que eu diria?', [g('-ã„´/ëŠ”ë‹¤ë©´', 'se', 'CondiÃ§Ã£o hipotÃ©tica.'), g('-ã„¹ê¹Œ', 'o que serÃ¡ queâ€¦?', 'Pergunta reflexiva ou dÃºvida do falante.')]),
    ],
    exercises: [
      { prompt: 'O que -ì—ˆë˜ transmite em ë‚˜ì˜€ë˜?', answer: 'Uma lembranÃ§a passada: â€œque era euâ€.' },
      { prompt: 'Traduza ëŒì•„ê°„ë‹¤ë©´.', answer: 'Se (eu) voltasse / pudesse voltar.' },
    ],
  },
  {
    title: 'Eco, espera e uma noite sem luz',
    lines: [
      line('ë„ ë¶ˆëŸ¬ë„ ë‹¤ì‹œ ë©”ì•„ë¦¬ì²˜ëŸ¼ ìš¸ë ¤ ë‚  í•´ì³', 'Mesmo que eu chame vocÃª, isso volta a soar como um eco e me machuca.', [g('-ì•„/ì–´ë„', 'mesmo que', 'ConcessÃ£o: a aÃ§Ã£o nÃ£o muda o resultado.'), g('-ì²˜ëŸ¼', 'como', 'ComparaÃ§Ã£o: â€œcomo um ecoâ€.'), g('í•´ì¹˜ë‹¤', 'ferir, prejudicar', 'Aqui tem sentido emocional.')]),
      line('ê¸°ë‹¤ë¦¼ë„ ë‚´ê² ì‚¬ëž‘ì´ë¼ê³  ì• ì¨', 'Eu me esforÃ§o para chamar atÃ© a espera de amor, para mim.', [g('ë‚´ê²', 'para mim', 'ContraÃ§Ã£o de ë‚´ê²ŒëŠ”.'), g('-ë¼ê³ ', 'que Ã©â€¦', 'CitaÃ§Ã£o direta de uma definiÃ§Ã£o ou pensamento.'), g('ì• ì¨', 'com esforÃ§o', 'AdvÃ©rbio de ì• ì“°ë‹¤, esforÃ§ar-se.')]),
      line('ë³„ í•˜ë‚˜ ì—†ëŠ” ì´ ê¹Œë§Œ ë°¤', 'Esta noite preta sem uma Ãºnica estrela.', [g('í•˜ë‚˜ ì—†ëŠ”', 'sem nem uma', 'í•˜ë‚˜ enfatiza â€œuma sequerâ€; ì—†ëŠ” modifica o substantivo.')]),
      line('ë¶ˆ êº¼ì§„ ë¬´ëŒ€ ìœ„ë¡œ ëŠ¦ì€ ìž”ìƒì²˜ëŸ¼ ë‚¨ì•„', 'PermaneÃ§o sobre o palco apagado como uma imagem residual tardia.', [g('-ã„´/ì€', 'que estÃ¡/foi', 'ë¶ˆ êº¼ì§„ = cuja luz se apagou.'), g('-ì²˜ëŸ¼', 'como', 'Cria a metÃ¡fora do vestÃ­gio visual.')]),
    ],
    exercises: [
      { prompt: 'Qual expressÃ£o equivale a â€œmesmo que eu chameâ€?', answer: 'ë„ ë¶ˆëŸ¬ë„.' },
      { prompt: 'Qual Ã© a forma completa de ë‚´ê²?', answer: 'ë‚´ê²ŒëŠ”.' },
    ],
  },
  {
    title: 'Outra hora, outro lugar',
    lines: [
      line('Maybe in another place, another time', 'Talvez em outro lugar, em outro tempo.', []),
      line('ë˜ëŒë¦´ ìˆ˜ ìžˆë‹¤ë©´ ê·¸ë• ê³ì— ë‚´ê°€ ìžˆì„ê¹Œ', 'Se pudesse voltar atrÃ¡s, serÃ¡ que eu estaria ao seu lado entÃ£o?', [g('-ã„¹ ìˆ˜ ìžˆë‹¤', 'poder/conseguir', 'Expressa possibilidade ou capacidade.'), g('ê·¸ë•', 'entÃ£o, naquela hora', 'ContraÃ§Ã£o de ê·¸ë•ŒëŠ”.'), g('ê³ì—', 'ao lado de', 'ê³ indica proximidade fÃ­sica ou afetiva.')]),
      line('ë‹¤ë¥¸ ìƒ‰ê¹”ë¡œ ê·¸ë¦° ì„œë¡œ ë¬¼ë“  ì±„ ë’¤ì„žì—¬ ê°€ë˜ ê¿ˆ', 'O sonho que desenhamos em outras cores, tingindo-nos um do outro enquanto se misturava.', [g('-ã„´ ì±„', 'mantendo o estado de', 'ì±„ preserva uma condiÃ§Ã£o durante outra aÃ§Ã£o.'), g('-ì•„/ì–´ ê°€ë‹¤', 'ir ficando', 'MudanÃ§a progressiva; ë’¤ì„žì—¬ ê°€ë‹¤ = ir se misturando.'), g('-ë˜', 'que costumava', 'MemÃ³ria de uma aÃ§Ã£o ou estado repetido/em curso no passado.')]),
      line('ì ì  ìžŠí˜€ì§„ë‹¤ëŠ” ê²Œ ë•Œë¡  ë¯¸ì¹  ê²ƒ ê°™ì§€ But I still choose you', 'O fato de ir sendo esquecido Ã s vezes parece enlouquecedor, mas ainda escolho vocÃª.', [g('ì ì ', 'gradualmente', 'Marca mudanÃ§a aos poucos.'), g('-ë‹¤ëŠ” ê²Œ', 'o fato de que', 'Forma citada/nominalizada para avaliar uma situaÃ§Ã£o.'), g('-ã„¹ ê²ƒ ê°™ë‹¤', 'parecer que', 'Expressa impressÃ£o ou suposiÃ§Ã£o.')]),
      line('ë˜ ë„ í—¤ë§¤ê³  ìžˆì–´', 'Ainda estou vagando Ã  sua procura.', [g('ë˜', 'de novo, ainda', 'Aqui indica repetiÃ§Ã£o.'), g('-ê³  ìžˆë‹¤', 'estar fazendo', 'AÃ§Ã£o em progresso.')]),
    ],
    exercises: [
      { prompt: 'Traduza ê³ì—.', answer: 'Ao lado de; perto de.' },
      { prompt: 'O que -ã„´ ì±„ indica em ë¬¼ë“  ì±„?', answer: 'Manter um estado enquanto outra aÃ§Ã£o acontece.' },
    ],
  },
]

export const backgroundVocabulary = [
  { word: 'ë˜ë‡Œë‹¤', reading: 'doenoeda', meaning: 'repetir para si mesmo' },
  { word: 'ë©”ì•„ë¦¬', reading: 'me-ari', meaning: 'eco' },
  { word: 'ê¸°ë‹¤ë¦¼', reading: 'gidarim', meaning: 'espera' },
  { word: 'ìž”ìƒ', reading: 'jansang', meaning: 'imagem residual, vestÃ­gio visual' },
  { word: 'ë˜ëŒë¦¬ë‹¤', reading: 'doedollida', meaning: 'voltar atrÃ¡s, reverter' },
  { word: 'ë’¤ì„žì´ë‹¤', reading: 'dwiseokkida', meaning: 'misturar-se' },
  { word: 'ìžŠí˜€ì§€ë‹¤', reading: 'ijhyeojida', meaning: 'ser esquecido' },
  { word: 'í—¤ë§¤ë‹¤', reading: 'hemaeda', meaning: 'vagar, procurar sem encontrar' },
]

