// Linhas com coreano da letra fornecida pela usuária no chat.
// As traduções são contextuais; não preenchem as elipses como se fossem texto original.
import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,notes:string[],card?:string):StudyEntry=>({term,meaning,notes,card});
const koreanSections:{title:string;lines:StudyLine[]}[]=[
 {title:"Verso 1",lines:[
  {text:'통제 불능 머리 춤 (yeah)',translation:'Uma dança de cabeça fora de controle (yeah).',entries:[
   e('통제','controle; contenção',['Substantivo de origem sino-coreana. O verbo correspondente é 통제하다: controlar.','Aqui se combina com 불능 para caracterizar algo que não se consegue controlar.']),
   e('불능','impossibilidade; incapacidade',['통제 불능 significa “impossível de controlar”, ou, mais naturalmente, “fora de controle”.','불능 não é a negação verbal 안. É um substantivo que indica impossibilidade.']),
   e('머리','cabeça',['Neste contexto corporal, refere-se à cabeça, não a cabelo ou inteligência.','A letra aproxima 머리 e 춤 sem explicitar partículas ou uma ligação como 의.']),
   e('춤','dança',['Substantivo. “Dançar” costuma ser 춤을 추다: 춤 (dança) + 을 (objeto) + 추다.','A linha é um fragmento nominal, sem verbo final expresso. A tradução conserva essa imagem; “a cabeça dança sem controle” seria uma paráfrase interpretativa.'],'Letras podem empilhar substantivos para acompanhar a batida. Isso não torna a sequência um modelo de frase completa para qualquer conversa.')
  ]},
  {text:'뛰어 미친놈인 듯 (uh)',translation:'Pula como um louco (uh).',entries:[
   e('뛰어','pula; salta',['뛰다 pode significar correr ou saltar. A leitura “pular” combina com a chamada à dança neste contexto.','뛰- + -어 → 뛰어. A forma informal pode ser afirmação ou comando; aqui foi traduzida como um incentivo ao movimento.']),
   e('미친놈인','sendo um louco; como alguém enlouquecido',['미치다 → 미친: a forma em -ㄴ modifica o substantivo seguinte e descreve o estado de estar fora de si.','놈 é uma maneira rude de se referir a alguém. 미친놈 tem força maior que o neutro “uma pessoa agitada”.','미친놈 + 이다 → 미친놈인. O -ㄴ de 인 permite ligar essa expressão nominal a 듯.']),
   e('듯','como se; como quem',['É um substantivo dependente nesta construção: 미친놈인 듯, “como se fosse um louco”.','O grupo inteiro descreve a maneira de 뛰어. A ordem mais usual em uma explicação seria 미친놈인 듯 뛰어; a letra desloca a comparação para depois do verbo.'],'O tom é provocativo e informal. Entender 놈 na música não significa que ele seja uma forma neutra de chamar outra pessoa.')
  ]},
  {text:'Me everywhere, 얼쑤',translation:'Eu por toda parte — ê, isso aí!',entries:[
   e('얼쑤','ê!; isso aí!',['Interjeição de animação ou aprovação, associada também a apresentações de música e dança tradicionais coreanas.','Não tem sujeito, objeto nem conjugação: funciona como uma exclamação que acompanha a performance.','“Ê!” e “isso aí!” são aproximações do efeito em português, não equivalentes literais únicos.'],'Uma interjeição pode carregar ritmo e identidade cultural sem acrescentar uma informação descritiva à frase.')
  ]},
  {text:'다들 모여 하나 둘 (uh)',translation:'Juntem-se todos, um, dois (uh).',entries:[
   e('다들','todos; todo mundo',['다 transmite “todos/tudo”; 들 acrescenta aqui uma referência plural às pessoas envolvidas.','Nesta chamada, 다들 abrange o público: “todo mundo”. Não é um marcador de objeto como 를.']),
   e('모여','juntem-se; reúnam-se',['Vem de 모이다, reunir-se: 모이- + -어 → 모여, com contração de 이 + 어 em 여.','É uma forma informal, entendida aqui como convocação ao público. 모이세요 seria uma maneira educada de pedir que as pessoas se reúnam.','Não confunda 모이다, “reunir-se”, com 모으다, “juntar/reunir alguma coisa”.']),
   e('하나 둘','um, dois',['São numerais nativos coreanos usados numa contagem independente.','Antes de certos classificadores, tornam-se 한 e 두: 한 명, uma pessoa; 두 명, duas pessoas. Aqui a contagem mantém 하나 e 둘.'])
  ]},
  {text:"Beat drop, 우린 dancin'",translation:'A batida entra, a gente está dançando.',entries:[
   e('우린','nós; a gente',['Contração de 우리는: 우리 (nós) + 는 (partícula de tópico).','A redução preserva o papel de tópico: “quanto a nós…”.','O predicado vem em inglês, dancin’. Não há um verbo coreano conjugado depois de 우린; é uma frase com alternância de idiomas.'],'Para reconhecer contrações semelhantes: 나는 → 난 e 너는 → 넌. Em todas, a partícula de tópico continua fazendo parte do sentido.')
  ]}
 ]},
 {title:"Verso 2",lines:[
  {text:'Like El Cucuy, 굳이 말 안 해도 알잖아',translation:'Como El Cucuy, mesmo sem eu precisar dizer, você já sabe, né?',entries:[
   e('굳이','fazendo questão; dando-se ao trabalho',['Advérbio. Com uma expressão negativa, pode transmitir que não é necessário insistir em fazer algo.','Aqui, 굳이 말 안 해도 sugere “mesmo sem me dar ao trabalho de dizer”. Não é simplesmente “com força”.']),
   e('말','fala; palavras',['Faz parte de 말하다, “falar/dizer”. No uso coloquial, é comum a sequência 말 안 하다.','Pode-se entender a relação como 말(을) 안 하다: o conteúdo nominal vem antes de 안 하다, com a partícula omitida.']),
   e('안 해도','mesmo que não faça; mesmo sem fazer',['안 é a negação curta, colocada antes de 해도.','하다 + -아/어도 → 해도. A construção -아/어도 expressa concessão: o resultado continua válido apesar da condição.','Com 말, forma “mesmo sem dizer”. 안 해도 não equivale a 못 해도: 안 indica não fazer; 못, não conseguir fazer.']),
   e('알잖아','você já sabe, né?',['알다 significa saber. A base 알- recebe -잖아, usada para lembrar ou apresentar ao interlocutor algo como conhecido.','Aqui não significa “não sabe”. O sentido é afirmativo: “você sabe, afinal”.','O sujeito não está escrito. “Eu” em “sem eu dizer” e “você” em “você sabe” são uma leitura contextual possível da tradução. A forma educada correspondente é 알잖아요.'],'Duas funções diferentes: 안 해도 nega a ação de dizer; 알잖아 reforça que a outra pessoa já sabe.')
  ]},
  {text:'Hooligan, like hooligan, 때려 부숴 like hooligan',translation:'Hooligan, como um hooligan: bate e quebra, como um hooligan.',entries:[
   e('때려','bate; golpeia',['Vem de 때리다: 때리- + -어 → 때려, com 이 + 어 → 여.','Na sequência, apresenta a ação de golpear associada ao resultado expresso por 부숴. Não há objeto explícito: a letra não especifica o que é atingido.']),
   e('부숴','quebra; despedaça',['Vem de 부수다: 부수- + -어 → 부수어 → 부숴. O encontro 우 + 어 se contrai em 워.','Não é uma irregularidade em ㅅ: o 수 da base permanece.','때려 부숴 pode ser entendido como “quebra a golpes”, com efeito enfático. O imperativo em português é uma leitura do tom de chamada; essas formas informais também podem aparecer em declarações.'],'A imagem de destruição é parte da linguagem intensa da performance. “Arrasa” seria uma adaptação figurada; “bate e quebra” deixa a composição dos verbos visível.')
  ]},
  {text:'시간 됐으니 좀 비켜 좀, all clear, 이상 무',translation:'Já está na hora, então dá licença, vai — tudo livre, nada de anormal.',entries:[
   e('시간','hora; tempo',['Substantivo. A leitura natural aqui é 시간(이) 됐다, “chegou a hora”.','A partícula de sujeito 이 foi omitida, algo frequente na fala informal e nas letras.']),
   e('됐으니','já que chegou; como já é',['되다 + -었- → 되었- → 됐-. A contração inclui a marca -었-, que indica uma mudança já ocorrida.','A terminação -(으)니 apresenta a razão para o que vem depois. Após o 받침 ㅆ, aparece -으니: 됐으니.','시간 됐으니 liga “chegou a hora” ao pedido de abrir passagem: “já está na hora, então…”.']),
   e('좀','um pouco; por favor; vai',['Forma reduzida de 조금. Em pedidos, frequentemente ajusta o tom, em vez de medir uma pequena quantidade.','Aqui aparece antes e depois de 비켜. A repetição pode dar insistência: “dá licença, vai”. Não garante delicadeza; o tom da voz e o contexto importam.']),
   e('비켜','sai da frente; dá passagem',['비키다 → 비키- + -어 → 비켜. É uma forma informal e direta.','비켜 주세요, “dê passagem, por favor”, é uma alternativa mais educada em um pedido cotidiano.']),
   e('이상','anormalidade; problema',['Nesta expressão significa uma alteração ou algo fora do normal, de origem 異常.','Não é 이상 no sentido de “acima de/pelo menos”, que pertence a outro uso da palavra.']),
   e('무','nenhum; ausência',['Aqui representa 無, ausência, e não o substantivo 무 que significa rabanete.','이상 무 é uma fórmula curta de relatório: “nenhuma anormalidade”. 이상이 없다 expressa a mesma ideia numa construção com verbo.','A expressão retoma all clear: passagem livre, sem problema detectado.'])
  ]}
 ]}
];
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const ko=koreanSections.flatMap(section=>section.lines);
const laugh=en('Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha-ha-ha-ha-ha, hooligan','Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha-ha-ha-ha-ha, hooligan.');
const watch=(ooh=false)=>en("Watch this, watch this beat goin’ hooligan".replace('’',"'")+(ooh?' (ooh)':''),'Olha só, olha essa batida ficando selvagem.'+(ooh?' (ooh)':''));
const hook=(ooh=false):StudyLine[]=>[watch(),en("We pop out, we actin' a fool again"+(ooh?' (ooh)':''),'A gente chega e volta a fazer loucuras.'+(ooh?' (ooh)':'')),laugh,watch(ooh)];
const bass:StudyLine[]=[en("Why this bassline slappin' so rude?",'Por que essa linha de baixo bate tão pesado?'),en('Drop it lower than chopped and screwed (screwed, screwed, screwed)','Desce ainda mais que o chopped and screwed (screwed, screwed, screwed).'),laugh,watch()];
export const hooliganSections:{title:string;lines:StudyLine[]}[]=[
 {title:"Abertura",lines:hook(true)},
 {title:"Abertura",lines:bass},
 {title:"Verso 1",lines:[
  en("Man, I'm 'bout to blow a fuse (yeah)",'Cara, estou prestes a perder a cabeça (yeah).'),ko[0],ko[1],ko[2],
  en('Somebody move, somebody move','Alguém se mexe, alguém se mexe.'),ko[3],
  en('I can never ever choose (yeah)','Eu nunca consigo escolher (yeah).'),en("Every one o' you a muse",'Cada um de vocês é uma inspiração.'),
  en("Crowd lookin' like a campus",'A multidão parece um campus.'),ko[4]
 ]},
 {title:"Refrão",lines:[...hook(),...bass]},
 {title:"Verso 2",lines:[
  en('I go cuckoo, crazy, loco, save me','Eu enlouqueço, fico maluco, louco — me salva.'),ko[5],ko[6],ko[7],
  en('Take you out, take you out','Vou te tirar de cena, vou te tirar de cena.'),en("What's the future? Where's the now?",'O que é o futuro? Onde está o agora?'),en('This is international','Isso é internacional.'),en('Make it unforgettable','Faça isso ser inesquecível.')
 ]},
 {title:"Refrão",lines:hook(true)},
 {title:"Ponte",lines:[
  en('Yeah, we the mess, gonna get a bigger mop here (bigger mop)','É, a bagunça somos nós; vai precisar de um esfregão maior aqui (um esfregão maior).'),
  en('This that K, gotta get a better pop here (better pop)','Isso é aquele K; tem que ter um pop melhor aqui (um pop melhor).'),
  en("You gon' hear this one playin' round the clock, yeah (round the clock)",'Você vai ouvir essa tocando o dia inteiro, é (o dia inteiro).'),
  en('Round the clock, clock, clock, clock','O dia inteiro, inteiro, inteiro, inteiro.')
 ]},
 {title:"Refrão",lines:[...bass,...bass]}
];
export const hooliganVocabulary={
 verbs:[{ko:'통제하다',pt:'controlar'},{ko:'춤추다',pt:'dançar'},{ko:'뛰다',pt:'pular; correr'},{ko:'미치다',pt:'enlouquecer; ficar fora de si'},{ko:'모이다',pt:'reunir-se'},{ko:'말하다',pt:'falar; dizer'},{ko:'하다',pt:'fazer'},{ko:'알다',pt:'saber'},{ko:'때리다',pt:'bater; golpear'},{ko:'부수다',pt:'quebrar; despedaçar'},{ko:'되다',pt:'tornar-se; chegar a uma situação'},{ko:'비키다',pt:'sair da frente; dar passagem'}],
 nouns:[{ko:'통제',pt:'controle'},{ko:'불능',pt:'impossibilidade; incapacidade'},{ko:'머리',pt:'cabeça'},{ko:'춤',pt:'dança'},{ko:'놈',pt:'sujeito; termo rude para uma pessoa'},{ko:'말',pt:'fala; palavras'},{ko:'시간',pt:'tempo; hora'},{ko:'이상',pt:'anormalidade; problema, nesta expressão'}]
};
