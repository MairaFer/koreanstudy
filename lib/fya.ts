// Texto fornecido pela usuária. Traduções contextuais; repetições preservadas.
import type {StudyLine,StudyEntry} from './spring-day';
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const e=(term:string,meaning:string,notes:string[],card?:string):StudyEntry=>({term,meaning,notes,card});
const refrain=(yeah=false):StudyLine[]=>[
 en("Everything lit, it's fire, everything big, it's fire",'Tudo no auge, tá pegando fogo; tudo grandioso, tá pegando fogo.'),
 en("Everything lit, it's fire, everything big, it's fire",'Tudo no auge, tá pegando fogo; tudo grandioso, tá pegando fogo.'),
 en("She wanna dance on fire, "+(yeah?'yeah, ':'')+"everything gas, it's fire",'Ela quer dançar em chamas; '+(yeah?'é, ':'')+'tudo é combustível, tá pegando fogo.'),
 en("Don't stand too close, too close to fire",'Não fique perto demais, perto demais do fogo.')
];
const pre=(ah=false):StudyLine[]=>[
 en('Club go psycho, might take you viral','A balada enlouquece; pode fazer você viralizar.'),
 en('I go full thriller tonight (ah)','Hoje à noite eu entro de vez no suspense (ah).'),
 en('Club go crazy like Britney, baby','A balada enlouquece como Britney, baby.'),
 en('Hit me with it one more time'+(ah?' (ah)':''),'Manda essa mais uma vez'+(ah?' (ah).':'.'))
];
const korean:StudyLine[]=[
 {text:'뜨거워, 뜨거워 vibin\', 완전 핫뜨 뜨거워 (oh, whoa)',translation:'Tá quente, tá quente, curtindo a vibe; quente demais, tá pegando fogo (oh, whoa).',entries:[
  e('뜨거워','está quente; está fervendo',['Forma informal de 뜨겁다, ser/estar quente. É um adjetivo descritivo que se conjuga em coreano.','Na conjugação irregular em ㅂ, 뜨겁- passa a 뜨거우- antes da terminação vocálica: 뜨거우- + -어 → 뜨거워. Não se conjuga como 뜨겁어.','A repetição intensifica a sensação. No contexto de festa, o calor também sugere animação e energia, não apenas temperatura.']),
  e('완전','totalmente; muito',['A palavra se relaciona à ideia de completude. Na fala coloquial, aparece como intensificador: “totalmente”, “super”.','Aqui intensifica o calor da sequência seguinte. Não é uma marca de tempo verbal nem uma partícula.']),
  e('핫뜨','“quente!”, uma exclamação brincalhona',['A letra usa uma forma expressiva curta junto de 뜨거워. A tradução a trata como uma exclamação de calor.','Pode-se ouvir um jogo com hot e com a reação coreana a algo quente; essa é uma leitura contextual da sonoridade, não uma regra de conjugação.','Não confunda esta grafia expressiva com a forma de dicionário 뜨겁다. Em uma frase comum, prefira 뜨거워요 para dizer “está quente”.'],'Vibin’ permanece em inglês e significa curtir a atmosfera. A linha alterna idiomas para reforçar a energia do refrão.')
 ]},
 {text:'무서워, 무서워, 한겨울에도 엉뜨 필요 없어 (hoo)',translation:'É de assustar, é de assustar; até no auge do inverno, não preciso de banco aquecido (hoo).',entries:[
  e('무서워','dá medo; é assustador',['Forma informal de 무섭다. A irregularidade em ㅂ produz 무서우- + -어 → 무서워.','Sem sujeito expresso, pode significar “estou com medo” ou “isso é assustador”. Aqui a tradução escolhe a intensidade da cena: “é de assustar”.']),
  e('한겨울에도','mesmo no auge do inverno',['한겨울 designa o pleno inverno, a fase mais intensa do frio. Não significa aqui “um inverno” contado com 한.','에 situa algo no tempo; 도 acrescenta “também” ou, neste contraste, “até/mesmo”. 한겨울 + 에 + 도 → 한겨울에도.','A oposição entre inverno e calor prepara a brincadeira com o assento aquecido.']),
  e('엉뜨','banco ou assento aquecido (gíria)',['Apelido coloquial para o aquecimento do assento, especialmente o banco de um carro.','A graça contextual é que a cena está tão quente que nem no inverno seria necessário aquecimento extra. Não é uma palavra geral para qualquer aquecedor.']),
  e('필요','necessidade',['Substantivo que aparece na construção 필요(가) 없다: não haver necessidade, não precisar.','A partícula 가 está omitida, algo frequente na fala informal e nas letras. A forma mais explícita seria 엉뜨가 필요 없어.']),
  e('없어','não há; não é necessário aqui',['Forma informal de 없다: 없- + -어 → 없어. Com 필요, forma a expressão “não precisar”.','필요 없어 não significa uma proibição de usar: afirma que não há necessidade. O português “não preciso” recupera um sujeito que não foi escrito.'],'Compare 필요해요, “é necessário”, com 필요 없어요, “não é necessário”. A negativa deste verso usa 없다, e não 안 antes de 필요하다.')
 ]},
 {text:"We ragin', 확 돌아 춤을 춰, 쭈뼛쭈뼛은 괴로워",translation:'Estamos enlouquecendo; gira de uma vez e dança — ficar hesitando é uma tortura.',entries:[
  e('확','de uma vez; bruscamente; com força',['Advérbio que dá intensidade ou rapidez à mudança ou ao movimento.','Aqui acompanha 돌아. “De uma vez” é uma escolha contextual; 확 não é uma partícula de objeto.']),
  e('돌아','gira; vira',['Forma informal de 돌다, girar ou virar: 돌- + -아 → 돌아. O ㄹ se mantém nesta conjugação.','Perto de 춤을 춰, a leitura de girar o corpo combina com a dança. 돌다 também pode participar de usos figurados ligados a perder o controle; a linha permite essa associação.']),
  e('춤을','a dança (objeto)',['춤 é o substantivo dança; 을 marca o objeto depois de uma consoante final.','춤을 추다 é a combinação para dançar: literalmente, executar uma dança. Também existe o verbo 춤추다.']),
  e('춰','dança; dance (informal)',['Vem de 추다: 추- + -어 → 추어 → 춰. 우 + 어 se contrai em 워.','Nesta chamada à festa, a forma informal funciona como convite ou comando. Uma forma educada de pedido seria 춤을 추세요.']),
  e('쭈뼛쭈뼛은','quanto a ficar hesitando, sem jeito',['쭈뼛쭈뼛 descreve, entre outros sentidos, agir com hesitação por timidez ou constrangimento. Esse sentido combina com o convite para dançar.','은 apresenta essa postura como tópico ou contraste. A letra trata a expressão mimética como algo sobre o qual faz um comentário: “esse ficar sem jeito…”.','A repetição faz parte da palavra expressiva. Não é uma conjugação nem uma marca de plural.']),
  e('괴로워','é penoso; é uma tortura',['Forma informal de 괴롭다, sentir sofrimento ou desconforto. Outra irregularidade em ㅂ: 괴로우- + -어 → 괴로워.','O verso diz que ficar hesitando é incômodo; “é uma tortura” é uma tradução enfática, não uma referência literal a violência.'],'Três formas da letra seguem o mesmo padrão: 뜨겁다 → 뜨거워, 무섭다 → 무서워 e 괴롭다 → 괴로워. São adjetivos descritivos, embora funcionem como predicados conjugados.')
 ]},
 {text:'뭘 고민해? 걍 끼어들어, 번지 뛰어들어 (we go right now)',translation:'Tá pensando tanto em quê? Só entra no meio, se joga como num salto de bungee jump (vamos agora).',entries:[
  e('뭘','o quê (objeto)',['Contração de 무엇을: 무엇, o que, + 을, partícula de objeto.','Marca aquilo em que a pessoa fica pensando. A pergunta tem tom de incentivo a parar de hesitar.']),
  e('고민해','pensa com preocupação; fica em dúvida',['Forma informal de 고민하다: 고민하- + -여 → 고민해. 하여 se contrai em 해.','고민하다 envolve preocupação ou reflexão sobre uma dificuldade ou escolha. Neste contexto, “pensar demais” comunica a hesitação antes de participar.','A interrogação vem da entonação e do ponto de pergunta; 해 não é, por si só, uma terminação exclusivamente interrogativa.']),
  e('걍','só; simplesmente (coloquial)',['Redução informal de 그냥, sem uma razão especial ou simplesmente.','A grafia imita uma pronúncia abreviada. Em escrita mais neutra, use 그냥.']),
  e('끼어들어','entre no meio; junte-se',['Forma informal de 끼어들다: 끼어들- + -어 → 끼어들어.','O verbo pode significar intrometer-se, entrar numa conversa ou se inserir entre pessoas. Aqui o convite à dança favorece a leitura “junte-se”.','Nem toda ocorrência de 끼어들다 é negativa: o contexto define se a entrada é uma intromissão ou uma participação desejada.']),
  e('번지','bungee, referência ao salto',['Neste verso, a leitura contextual é uma referência abreviada a 번지 점프, bungee jump.','A linha não escreve “como”: a comparação é explicitada na tradução para tornar a imagem natural em português. Não se trata aqui do homônimo 번지 usado em endereços.']),
  e('뛰어들어','salte para dentro; se jogue',['Forma informal de 뛰어들다: 뛰어들- + -어 → 뛰어들어.','O verbo descreve entrar correndo ou saltando e também pode indicar envolver-se com ímpeto em algo.','Ao lado de 번지, evoca o salto; no convite à festa, a leitura figurada é participar sem hesitar. É uma interpretação da imagem do verso.'])
 ]}
];
export const fyaSections:{title:string;lines:StudyLine[]}[]=[
 {title:"Abertura",lines:[...refrain().slice(0,3),en("Oh, oh, oh, I see what you're saying, man",'Oh, oh, oh, entendo o que você está dizendo, cara.')]},
 {title:"Refrão",lines:refrain()},
 {title:"Verso 1",lines:[
  en('Gimme that gasoline, gimme that, make me fiend','Me dá essa gasolina, me dá isso, me deixa querendo mais.'),
  en("Gimme that, make me sweat, something I can't forget",'Me dá isso, me faz suar, algo que eu não consiga esquecer.'),
  en("Burnin' out with my slime, we in a flame, go wild",'Queimando tudo com meu parceiro, estamos em chamas, vamos à loucura.'),
  en("It's 200 degrees",'São 200 graus.')
 ]},
 {title:"Pré-refrão",lines:pre()},
 {title:"Refrão",lines:refrain(true)},
 {title:"Pós-refrão",lines:[en("It's fire",'Tá pegando fogo.'),en("It's fire",'Tá pegando fogo.')]},
 {title:"Verso 2",lines:korean},
 {title:"Pré-refrão",lines:pre(true)},
 {title:"Refrão",lines:refrain()},
 {title:"Pós-refrão",lines:[en("It's fire",'Tá pegando fogo.')]},
 {title:"Refrão",lines:refrain(true)}
];
export const fyaVocabulary={verbs:[
 {ko:'뜨겁다',pt:'estar quente (descritivo)'},{ko:'무섭다',pt:'ser assustador; sentir medo (descritivo)'},
 {ko:'없다',pt:'não haver; não existir (descritivo)'},{ko:'돌다',pt:'girar; virar'},
 {ko:'추다',pt:'dançar, em 춤을 추다'},{ko:'괴롭다',pt:'ser penoso; sentir sofrimento (descritivo)'},
 {ko:'고민하다',pt:'preocupar-se; refletir sobre uma dificuldade'},{ko:'끼어들다',pt:'entrar no meio; intrometer-se; juntar-se'},
 {ko:'뛰어들다',pt:'saltar para dentro; envolver-se com ímpeto'}
 ],nouns:[
 {ko:'한겨울',pt:'pleno inverno'},{ko:'엉뜨',pt:'assento aquecido (gíria)'},{ko:'필요',pt:'necessidade'},
 {ko:'춤',pt:'dança'},{ko:'고민',pt:'preocupação; dilema'},{ko:'번지',pt:'bungee, referência contextual a 번지 점프'}
 ]};
