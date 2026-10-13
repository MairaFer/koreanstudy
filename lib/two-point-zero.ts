// Letra fornecida pela usuária; análise coreana preparada e reutilizada nas repetições.
import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,notes:string[],card?:string):StudyEntry=>({term,meaning,notes,card});
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const fire:StudyLine={text:'불을 붙여 brand new, 붙여 brand new',translation:'Acende o fogo, tudo novo; acende, tudo novo.',entries:[
 e('불을','o fogo',['불 é fogo. 을 é a partícula de objeto, usada porque 불 termina em consoante.','O objeto mostra o que se acende: 불을 붙이다, acender o fogo. A imagem pode sugerir dar início a uma nova fase.']),
 e('붙여','acende; põe fogo',['Forma informal de 붙이다: 붙이- + -어 → 붙여. 이 + 어 se contrai em 여.','붙이다 é transitivo neste uso: alguém faz o fogo pegar. Compare 불이 붙다, “o fogo pega”, com 불을 붙이다, “acender o fogo”.','A forma pode funcionar como comando ou declaração, conforme o contexto. A tradução escolhe o tom de chamada “acende”. Na segunda ocorrência, 불을 não é repetido, mas pode ser recuperado pelo contexto.'],'Brand new vem em inglês e reforça a ideia de novidade. A letra não explicita uma ligação gramatical coreana entre essa expressão e o verbo.')
]};
const verse:StudyLine[]=[
 {text:"그래, 기분 마치 brand new (let's go)",translation:'É, a sensação é de algo totalmente novo (vamos nessa).',entries:[
  e('그래','é; isso mesmo',['Forma ligada a 그렇다, “ser assim”, que aqui funciona como uma confirmação informal.','Abre o verso com concordância ou afirmação, sem precisar de um complemento.']),
  e('기분','sensação; estado de espírito',['Substantivo que indica como alguém se sente. O sujeito e a partícula não são explicitados.','A leitura “a sensação é…” completa em português uma construção abreviada da letra; esse “é” não aparece como verbo coreano escrito.']),
  e('마치','como se; como',['Advérbio que introduz uma comparação. Em frases inteiramente coreanas, costuma aparecer com expressões como 처럼 ou 같다.','Aqui a comparação continua em inglês, brand new. A mistura de idiomas deixa a construção mais curta e rítmica.'])
 ]},
 {text:'Spec 다른 step, 뛰지 않는 step two (step two)',translation:'Um passo de outra categoria; um segundo passo sem correr (segundo passo).',entries:[
  e('다른','diferente; de outro tipo',['Vem do adjetivo descritivo 다르다. A forma que modifica um substantivo é 다르- + -ㄴ → 다른.','Na combinação Spec 다른 step, a leitura é “um passo cuja especificação é diferente”. Pode-se recuperar uma relação como 스펙이 다른, com a partícula 이 omitida.','Spec e step são palavras inglesas. “De outra categoria” é uma adaptação contextual, não uma tradução literal de uma partícula coreana.']),
  e('뛰지','correr/pular + ligação para a negação',['뛰다 pode significar correr ou saltar. -지 liga a base verbal ao auxiliar negativo 않다.','뛰지 não encerra a negação sozinho neste verso: precisa ser lido junto de 않는.']),
  e('않는','que não…',['않다 recebe -는 para modificar o substantivo seguinte: 뛰지 않는 step two.','O conjunto caracteriza step two como algo que não corre ou não salta. A tradução escolhe “sem correr”; o jogo com passos também permite uma associação a saltar.','O texto não contém uma palavra explícita para “etapa” ou “pular etapas”. Essa seria uma interpretação adicional, não uma equivalência literal.'],'다른 modifica um nome a partir de uma qualidade; 뛰지 않는 modifica outro nome a partir de uma ação negada. As duas formas terminam antes dos substantivos ingleses.')
 ]},
 {text:'Two, two point, oh, update된 후 (uh-huh)',translation:'Dois, dois ponto zero, depois de ser atualizado (uh-huh).',entries:[
  e('update된','atualizado; que passou por atualização',['A palavra inglesa update se combina com 되다, formando uma construção híbrida correspondente a 업데이트되다.','되다 apresenta a atualização como algo que acontece ao sujeito. Compare 업데이트하다, atualizar algo, e 업데이트되다, ser atualizado.','되- + -ㄴ → 된: a forma em -ㄴ apresenta a atualização como concluída em relação ao momento de 후. O sujeito não aparece explicitamente.']),
  e('후','depois; após',['Substantivo de tempo. Na construção verbal -(으)ㄴ 후, indica que uma ação ocorre depois de outra.','update된 후 significa “depois de ser atualizado”. Também se pode dizer 업데이트된 후에, com 에, numa frase inteiramente coreana.','Não confunda 후 com 전에: 후 indica depois; 전에, antes.'])
 ]},
 {text:'여기저기 또 한 번 일냈네, ten out of ten, ten (whoa, whoa)',translation:'Por toda parte, fizemos acontecer mais uma vez — dez de dez, dez (whoa, whoa).',entries:[
  e('여기저기','aqui e ali; por toda parte',['Expressão de lugar formada por 여기, aqui, e 저기, ali/lá.','Nesta linha, amplia o alcance da ação: ela não se limita a um lugar.']),
  e('또','de novo; mais uma vez',['Advérbio que indica repetição.','Junto de 한 번, destaca uma nova ocorrência: 또 한 번, mais uma vez.']),
  e('한 번','uma vez',['하나, um, assume a forma 한 antes do contador 번, vez.','A grafia separada 한 번 corresponde aqui à contagem de uma ocorrência.']),
  e('일냈네','fez acontecer; aprontou mais uma',['A expressão se relaciona a 일(을) 내다: provocar um acontecimento, fazer algo que chama atenção. A letra escreve 일냈네, com a partícula omitida.','내다 + -었- → 냈-. Depois vem -네, que dá tom de constatação, descoberta ou exclamação.','일을 내다 pode indicar causar um problema ou realizar algo marcante. “Dez de dez” favorece a leitura de um feito celebrado neste contexto.','“Fizemos” é uma escolha contextual da tradução: o coreano não escreve um pronome de sujeito nesta linha.'],'A terminação -네 acrescenta atitude à fala. Não basta traduzir só o passado de 냈-; a linha também comenta o feito com ênfase.')
 ]},
 {text:'이젠 버려 못 쓸 폐품 수거하러 가, ay',translation:'Agora descarta: vou recolher o que já não serve, ay.',entries:[
  e('이젠','agora; a partir de agora',['Contração de 이제는: 이제, agora, + 는, partícula de tópico/contraste.','O contraste sugere uma mudança em relação à situação anterior.']),
  e('버려','joga fora; descarta',['버리다 + -어 → 버려. Aqui o verbo tem o sentido lexical de descartar.','Não é o auxiliar -아/어 버리다 ligado a outro verbo, como em 잊어 버리다. O verso usa 버려 de forma independente.','Sem sujeito expresso, a forma informal pode ser declaração ou comando. A tradução adota um chamado direto no início da linha.']),
  e('못 쓸','que não se pode usar; imprestável',['못 expressa impossibilidade ou incapacidade. 쓰다, neste contexto, significa usar.','쓰- + -ㄹ → 쓸: a forma em -(으)ㄹ modifica 폐품. Com 못, caracteriza algo como sem possibilidade de uso.','쓰다 também pode significar escrever, mas “objetos descartados” favorece claramente a leitura usar.']),
  e('폐품','material descartado; objetos sem utilidade',['Substantivo que designa coisas que já não servem para o uso original.','É aquilo que se recolhe com 수거하다. A partícula de objeto 을 está omitida. Não há um alvo humano identificado no texto.']),
  e('수거하러','para recolher',['수거하다 significa recolher ou coletar, especialmente objetos dispersos ou descartados.','수거하- + -러 → 수거하러. -(으)러 indica o objetivo de um deslocamento, e a base 하- termina em vogal.']),
  e('가','vai; vou',['Forma informal de 가다, ir. 수거하러 가 significa ir para recolher.','A tradução usa “vou”, mas o sujeito não está escrito; “vai recolher” também seria possível conforme a interpretação da voz do verso.'],'O verso encadeia duas formas informais e omite sujeitos e partículas. A pontuação e os sujeitos adicionados em português servem à leitura, não são palavras extras da letra coreana.')
 ]},
 {text:'여유 있게 다시 수고하러 (stop, ride)',translation:'Com tranquilidade, de volta ao trabalho (para, segue).',entries:[
  e('여유','folga; tranquilidade; margem',['Substantivo ligado a ter tempo, espaço ou recursos suficientes, sem aperto.','Aqui favorece uma postura tranquila e confiante diante do trabalho.']),
  e('있게','de modo a ter; com…',['있다 recebe -게, que transforma a qualidade ou estado em maneira de agir.','여유 있게 corresponde a agir com folga ou tranquilidade; pode-se recuperar 여유가 있다, ter margem.','-게 não indica passado nem ordem educada. Nesta combinação, descreve como a ação é realizada.']),
  e('다시','de novo; novamente',['Advérbio de repetição ou retomada.','Aqui acompanha a volta à atividade de trabalhar e se esforçar.']),
  e('수고하러','para trabalhar; para se esforçar',['수고하다 significa empregar esforço em uma tarefa, dar-se ao trabalho de fazê-la.','수고하- + -러 indica finalidade de deslocamento, como 수거하러 na linha anterior.','Não aparece um novo 가 depois de 수고하러. A ação de ir fica subentendida pela sequência anterior; o verso termina de forma abreviada.'],'수거하러 e 수고하러 soam parecidos, mas são palavras diferentes: a primeira fala de coleta; a segunda, de esforço. A proximidade sonora ajuda a ligar os versos.')
 ]}
];
const intro:StudyLine[]=[
 en('Yuh, yuh, yuh, yuh, yeah','Yuh, yuh, yuh, yuh, yeah.'),
 en('Pull up at your block','Chego na sua área.'),
 en("We gon' knock, knock, knock, knock, yeah",'A gente vai bater, bater, bater, bater, é.'),
 en('Had your little fun, fella?','Já se divertiu um pouco, parceiro?'),
 en('Pop, pop, pop, pop, yeah','Pá, pá, pá, pá, é.'),
 en("Came back for what's mine, we don't stop, ride",'Voltei pelo que é meu; a gente não para, segue.')
];
const hook=(adlibs=false):StudyLine[]=>[
 en('You know how I do, do, do, do, do, do','Você sabe como eu faço, faço, faço, faço, faço, faço.'),
 en('You know how I do, do, do, do, do','Você sabe como eu faço, faço, faço, faço, faço.'),fire,
 en('Yeah, we on that brand new, you know how we do'+(adlibs?' (ay, ay, ay)':''),'É, estamos numa fase totalmente nova; você sabe como a gente faz.'+(adlibs?' (ay, ay, ay)':''))
];
export const twoPointZeroSections:{title:string;lines:StudyLine[]}[]=[
 {title:"Abertura",lines:intro},
 {title:"Refrão",lines:hook(true)},
 {title:"Verso 1",lines:verse},
 {title:"Abertura",lines:intro},
 {title:"Refrão",lines:hook()},
 {title:"Verso 2",lines:[
  en('Pop, pop, pop, pop, pop, pop, pop, pop, pop, pop, uh','Pá, pá, pá, pá, pá, pá, pá, pá, pá, pá, uh.'),
  en("Baby, gettin' too lit, rah, rah, rah, rah, rah, rah (yeah)",'Baby, está ficando intenso demais, rah, rah, rah, rah, rah, rah (é).'),
  en("Hit 'em up like pop (ha), hit 'em with the truth, like rah, uh",'Ataca com um pá (ha), manda a verdade na cara deles, tipo rah, uh.'),
  en('Time to pay your debt, uh, fear me or fear me not?','Hora de pagar sua dívida, uh; você me teme ou não?'),
  en('Let it be, let it bleed, uh','Deixa acontecer, deixa sangrar, uh.'),
  en('Hit a lick, uh, in a split (stop, ride)','Faço um golpe, uh, num instante (para, segue).')
 ]},
 {title:"Abertura",lines:intro},
 {title:"Refrão",lines:[...hook(),...hook()]}
];
export const twoPointZeroVocabulary={
 verbs:[{ko:'붙이다',pt:'acender; fazer pegar; fixar'},{ko:'다르다',pt:'ser diferente; verbo descritivo'},{ko:'뛰다',pt:'correr; pular'},{ko:'않다',pt:'auxiliar de negação'},{ko:'되다',pt:'tornar-se; sofrer uma mudança'},{ko:'내다',pt:'produzir; provocar'},{ko:'버리다',pt:'descartar; jogar fora'},{ko:'쓰다',pt:'usar, neste contexto'},{ko:'수거하다',pt:'recolher; coletar'},{ko:'가다',pt:'ir'},{ko:'있다',pt:'existir; ter, em 여유가 있다'},{ko:'수고하다',pt:'trabalhar com esforço'}],
 nouns:[{ko:'불',pt:'fogo'},{ko:'기분',pt:'sensação; estado de espírito'},{ko:'후',pt:'depois; período posterior'},{ko:'번',pt:'vez; contador de ocorrências'},{ko:'일',pt:'acontecimento; trabalho'},{ko:'폐품',pt:'objetos descartados ou sem utilidade'},{ko:'수거',pt:'coleta; recolhimento'},{ko:'여유',pt:'folga; tranquilidade; margem'},{ko:'수고',pt:'esforço; trabalho empregado'}]
};
