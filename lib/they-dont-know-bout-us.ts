// Texto fornecido pela usuária. Traduções contextuais e análise preparada.
import type {StudyLine,StudyEntry} from './spring-day';
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const question=l('대체 뭐가 달랐냐고 자꾸 물어','Vivem perguntando o que, afinal, foi diferente.',[
 e('대체','afinal; afinal de contas','Advérbio que reforça a pergunta, frequentemente com impaciência ou perplexidade.','Aqui não significa substituir: o sentido vem da construção interrogativa.'),
 e('뭐가','o que (sujeito)','뭐 é a forma curta de 무엇; 가 marca o sujeito.','A pergunta original seria 뭐가 달랐어?, o que foi diferente?'),
 e('달랐냐고','perguntando se/como foi diferente','다르다, ser diferente, tem alternância 르: 달라; com passado, 달랐다.','-냐고 introduz uma pergunta relatada. Não é uma afirmação direta; 물어 indica o ato de perguntar.'),
 e('자꾸','repetidamente; sem parar','Advérbio que indica repetição de uma ação.','Com 물어, transmite a insistência das perguntas.'),
 e('물어','perguntam','Forma informal de 묻다, perguntar: o ㄷ muda para ㄹ antes de vogal, 묻- + -어 → 물어.','O sujeito é omitido. O contexto favorece pessoas de fora perguntando, não uma ordem para perguntar.')
]);
const answer=l('나는 대답해, 나도 몰라','Eu respondo: eu também não sei.',[
 e('나는','eu, quanto a mim','나 é eu informal; 는 marca o tópico.','Coloca a resposta do narrador em contraste com as perguntas dos outros.'),
 e('대답해','respondo','Forma informal de 대답하다, responder. 하여 se contrai em 해.','Nesta oração é uma declaração; a mesma forma pode ser pedido em outro contexto.'),
 e('나도','eu também','나 + 도: a partícula acrescenta a ideia de também.','Indica que nem o próprio narrador tem a resposta que esperam.'),
 e('몰라','não sei','Forma informal de 모르다: 모르- + -아 → 몰라, com alternância 르.','O sentido negativo já pertence ao verbo; não é necessário acrescentar 안.')
]);
const first=[question,answer,
 en('Everybody hears the story that they wanna','Todo mundo ouve a história que quer ouvir.'),
 l('쟤넨 이거 땜에 떴어, 내가 맞어','“Eles fizeram sucesso por causa disso; eu estou certo.”',[
  e('쟤넨','eles, aqueles lá','Forma coloquial contraída de 쟤네는. 쟤네 aponta para aquele grupo de pessoas.','O tom pode ser distante ou depreciativo. A tradução marca a fala atribuída a terceiros.'),
  e('이거','isto; isso','Contração coloquial de 이것.','Aponta para a suposta explicação do sucesso, sem especificá-la.'),
  e('땜에','por causa de','Redução coloquial de 때문에, que introduz causa.','이거 땜에 equivale em registro mais neutro a 이것 때문에.'),
  e('떴어','ficaram famosos; fizeram sucesso','Passado informal de 뜨다: 뜨- + -었어 → 떴어.','Além de flutuar ou nascer, 뜨다 pode indicar ganhar notoriedade. Esse é o sentido contextual.'),
  e('내가','eu (sujeito)','나 com a partícula de sujeito 가 aparece como 내가.','Aqui destaca a pessoa que insiste em estar certa.'),
  e('맞어','estou certo (grafia coloquial)','O verbo é 맞다, estar correto. A forma padrão correspondente é 맞아.','A grafia enviada, 맞어, foi preservada como expressão coloquial da fala citada.')
 ]),
 l("We're just big boys, AKA 촌놈",'Somos só garotos crescidos, também conhecidos como caras do interior.',[
  e('촌놈','cara do interior; caipira','촌 remete ao interior e 놈 é um termo informal e potencialmente depreciativo para um homem.','Aqui aparece como autodescrição. Não é um tratamento respeitoso para usar indiscriminadamente com outras pessoas.')
 ]),
 l('그냥 뭐 기세지 just shut up, shut up','É só, sei lá, atitude e embalo; cala a boca, cala a boca.',[
  e('그냥','simplesmente; só','Advérbio que reduz a necessidade de uma justificativa elaborada.','Combina com 뭐 para construir uma resposta casual.'),
  e('뭐','bem; sei lá','Originalmente significa o que, mas também funciona como expressão de hesitação ou comentário.','Aqui não constitui uma pergunta independente.'),
  e('기세지','é atitude/embalo, né','기세 significa ímpeto, força ou impulso. A cópula com -지 aparece reduzida após vogal: 기세(이)지.','-지 dá tom de constatação. “Atitude e embalo” é uma tradução contextual, não uma promessa de equivalência em todos os usos.')
 ])
];
const second=[
 l('항상 쉬운 길만 찾기 바빠, 괜시리 (ayy)','Sempre ocupados procurando só o caminho fácil, à toa (ayy).',[
  e('항상','sempre','Advérbio de frequência.','Caracteriza a procura de atalhos como recorrente.'),
  e('쉬운','fácil (que modifica um nome)','쉽다 tem alternância ㅂ: 쉽- + -은 → 쉬운.','Modifica 길; não é uma forma de 쉬다, descansar.'),
  e('길만','só o caminho','길 significa caminho; 만 restringe a escolha a apenas esse caminho.','A imagem pode ser figurada: uma maneira fácil de obter algo.'),
  e('찾기','o ato de procurar','찾다 + -기 nominaliza a ação.','Em 찾기 바쁘다, descreve estar ocupado ou absorvido em procurar.'),
  e('바빠','ocupados','Forma informal de 바쁘다: 바쁘- + -아 → 바빠, com queda de ㅡ.','Aqui caracteriza a concentração nessa busca; não aparece -기 바쁘게, que teria outro funcionamento.'),
  e('괜시리','à toa; sem razão (coloquial)','Forma expressiva coloquial relacionada a 괜스레/괜히.','O verso sugere que esse esforço é desnecessário; preservamos a grafia enviada.')
 ]),
 l('오지랖들은 태평양쯤 뺀질이','A intromissão de vocês é do tamanho do Pacífico, seus folgados.',[
  e('오지랖들은','quanto à intromissão de vocês','오지랖 literalmente nomeia a parte da frente de uma veste; em 오지랖이 넓다, refere-se a intrometer-se demais.','들 acrescenta plural e 은 marca tópico. A imagem transfere a largura para o excesso de intromissão; “de vocês” é contextual.'),
  e('태평양쯤','mais ou menos um oceano Pacífico','태평양 é o Pacífico; 쯤 indica aproximação de quantidade ou extensão.','A comparação exagerada sugere uma intromissão imensa; a frase omite um predicado explícito.'),
  e('뺀질이','folgado; quem se esquiva do trabalho','Nome depreciativo para alguém que evita fazer o que deveria ou age de modo escorregadio.','Aqui funciona como rótulo dirigido aos criticados. “Folgados” é uma adaptação contextual do insulto, sem plural obrigatório em coreano.')
 ]),
 l('알기 쉽게 설명해 줄까 baby?','Quer que eu explique de um jeito fácil de entender, baby?',[
  e('알기','entender; o ato de saber','알다 + -기 transforma o verbo em expressão nominal.','Em 알기 쉽다, indica algo fácil de compreender.'),
  e('쉽게','de modo fácil','쉽다 + -게 transforma a descrição em modo de agir.','알기 쉽게 modifica 설명해: explicar de uma maneira compreensível.'),
  e('설명해','explicar','Forma de 설명하다 com 하여 → 해.','Conecta-se ao auxiliar 주다 no segmento seguinte.'),
  e('줄까','quer que eu faça por você?','주다 + -(으)ㄹ까: uma pergunta que, neste contexto, oferece uma ação.','-아/어 주다 apresenta o ato como feito em benefício de alguém; o tom do verso pode ser irônico.')
 ]),
 l('몰라도 돼, 뭘 또 굳이 알려 하니?','Tudo bem não saber; por que tentar tanto descobrir mais?',[
  e('몰라도','mesmo sem saber','모르다 + -아도 → 몰라도, com alternância 르.','-아/어도 introduz uma concessão: mesmo que não saiba.'),
  e('돼','tudo bem; é permitido','Forma informal de 되다: 되어 → 돼.','Com 몰라도, a construção -아/어도 되다 permite não saber; não manda permanecer ignorante.'),
  e('뭘','o que (objeto)','Contração de 무엇을.','Literalmente pergunta o que se quer saber; a tradução idiomática expressa a crítica à insistência.'),
  e('또','de novo; mais','Advérbio de repetição ou acréscimo.','Reforça a ideia de continuar perguntando.'),
  e('굳이','fazendo questão; insistindo sem necessidade','Advérbio que realça esforço deliberado ou insistência.','Na pergunta negativa ou crítica, sugere que não é preciso se dar esse trabalho.'),
  e('알려','tentando saber','Aqui a leitura é 알다 + -(으)려: 알- + -려 → 알려. O ㄹ final se mantém diante de ㄹ.','Com 하니 forma 알려 하니, ter intenção de saber. Não é aqui 알려 de 알리다, informar alguém.'),
  e('하니','você tenta?; você faz?','하다 com a terminação interrogativa informal -니.','Completa -(으)려 하다, intenção ou tentativa. A leitura interrogativa vem da frase; não é aqui a conexão causal -니.')
 ]),
 l('"걔넨 특별해 (ay) Asian 중에"','“Eles são especiais (ay), entre os asiáticos.”',[
  e('걔넨','eles','Contração coloquial de 걔네는, aquele grupo + tópico 는.','Apresenta novamente a voz de terceiros; não é uma referência neutra a qualquer pessoa.'),
  e('특별해','são especiais','Forma informal de 특별하다, ser especial.','O sujeito é o grupo mencionado; a palavra não marca singular ou plural.'),
  e('중에','entre; dentre','중 indica um conjunto e 에 localiza algo dentro dele.','Aqui se liga ao termo inglês Asian. A análise descreve a frase citada, não endossa o estereótipo.')
 ]),
 l('Ay "영웅스러운 존재 (재) too hard to break"','Ay, “uma presença heroica, difícil demais de derrubar”.',[
  e('영웅스러운','com características de herói; heroico','영웅 significa herói. -스럽다 forma um descritivo de aparência ou característica; -스러운 modifica um nome.','O ㅂ de 스럽다 alterna: 스럽- + -은 → 스러운. Qualifica 존재.'),
  e('존재','ser; existência; presença','Substantivo que pode indicar a existência ou um ser existente.','“Presença heroica” mantém a imagem da frase; não é um verbo conjugado.'),
  e('재','eco da sílaba final de 존재','A letra enviada coloca 재 entre parênteses como repetição sonora.','Não analisamos esse eco como uma palavra independente com outro significado.')
 ]),
 l("Uh, we can't relate ('late) 그냥 사람 일곱인데",'Uh, não nos identificamos com isso; somos apenas sete pessoas.',[
  e('그냥','simplesmente; apenas','Advérbio que reduz a descrição ao essencial.','Contrasta pessoas comuns com os rótulos grandiosos citados antes.'),
  e('사람','pessoa; pessoas','Substantivo que pode ser interpretado no plural sem 들.','사람 일곱 conta sete pessoas; uma forma com classificador seria 일곱 명.'),
  e('일곱인데','são sete, mas; sendo apenas sete','일곱 é o numeral nativo sete; 이다 com -ㄴ데 produz 인데.','A terminação fornece contexto ou contraste. Aqui contrapõe sete pessoas à expectativa de seres extraordinários.')
 ]),
 en('Ah, you said we changed? (Changed?)','Ah, você disse que mudamos? (Mudamos?)'),
 en('We feel the same, shit','Nos sentimos os mesmos, porra.')
];
const chorus=(adlibs:string[])=>adlibs.map(a=>en("They don't know 'bout us"+a,'Eles não sabem nada sobre nós'+a+'.'));
export const theyDontKnowSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura · a voz que acalma',lines:[en("They don't know about us",'Eles não sabem nada sobre nós.'),en('How your voice','Como sua voz'),en('Can calm the sea-ea-ea','Pode acalmar o mar.'),en("They don't",'Eles não sabem.')]},
 {title:'Primeiro verso · as histórias dos outros',lines:[en('I can show you love, I can show you','Posso te mostrar amor, posso te mostrar.'),en('If you wanna know me','Se quiser me conhecer,'),en("What can I do for you? (They don't)",'O que posso fazer por você? (Eles não sabem.)'),...first]},
 {title:'Pré-refrão · tentar explicar',lines:[en('Hold up, chill, and take a bubble bath, bae (hey)','Espera, relaxa e toma um banho de espuma, amor (hey).'),en('Do the math and go, just say what you say','Faça as contas e vá em frente, diga o que quiser.'),en("Oh, it's hard and that we cannot explain (hey)",'Oh, é difícil, e isso não conseguimos explicar (hey).'),en("Every time we tryna, tryna explain, we find",'Toda vez que tentamos, tentamos explicar, percebemos…')]},
 {title:'Refrão · eles não sabem',lines:chorus(['',' (mm-mm)','',' (ah)','',' (yeah, yeah)','',''])},
 {title:'Pós-refrão',lines:Array.from({length:4},(_,i)=>en("Yeah, damn, ooh, damn right, ooh, damn right"+(i<3?" (they don't know)":''),'É, droga, exatamente, exatamente'+(i<3?' (eles não sabem).':'.')))},
 {title:'Retomada · eu também não sei',lines:[en('I can show you love, I can show you','Posso te mostrar amor, posso te mostrar.'),en('If you wanna know me, what can I do for you?','Se quiser me conhecer, o que posso fazer por você?'),question,answer,en("(They don't)",'(Eles não sabem.)')]},
 {title:'Segundo verso · apenas sete pessoas',lines:second},
 {title:'Refrão · repetição',lines:chorus(['',' (mm-hmm)','',' (ah)','',' (ah-ooh)','',''])},
 {title:'Pós-refrão final',lines:Array.from({length:4},(_,i)=>[en("Yeah, damn, ooh, damn right (they don't know 'bout us, they don't know 'bout us)",'É, droga, exatamente (eles não sabem nada sobre nós, eles não sabem nada sobre nós).'),en("Ooh, damn right (they don't"+(i<3?' know':'')+')','Oh, exatamente (eles não sabem).')]).flat()},
 {title:'Final · o mar',lines:[en('Us, how your voice','Nós, como sua voz'),en('Can calm the sea-ea-ea-ea-ea','Pode acalmar o mar.')]} 
];
export const theyDontKnowVocabulary={verbs:[
 {ko:'다르다',pt:'ser diferente (descritivo)'},{ko:'묻다',pt:'perguntar'},{ko:'대답하다',pt:'responder'},{ko:'모르다',pt:'não saber'},
 {ko:'뜨다',pt:'ganhar notoriedade; fazer sucesso (neste contexto)'},{ko:'맞다',pt:'estar correto'},{ko:'쉽다',pt:'ser fácil (descritivo)'},{ko:'찾다',pt:'procurar; encontrar'},
 {ko:'바쁘다',pt:'estar ocupado (descritivo)'},{ko:'알다',pt:'saber; conhecer'},{ko:'설명하다',pt:'explicar'},{ko:'주다',pt:'dar; fazer algo por alguém (auxiliar)'},{ko:'되다',pt:'tornar-se; ser permitido em -아/어도 되다'},{ko:'하다',pt:'fazer'},{ko:'특별하다',pt:'ser especial (descritivo)'},{ko:'영웅스럽다',pt:'ter características de herói (descritivo)'}
 ],nouns:[{ko:'촌놈',pt:'cara do interior; caipira (pode ser depreciativo)'},{ko:'기세',pt:'ímpeto; força; embalo'},{ko:'길',pt:'caminho'},{ko:'오지랖',pt:'frente de uma veste; intromissão (sentido figurado)'},{ko:'태평양',pt:'oceano Pacífico'},{ko:'뺀질이',pt:'folgado; pessoa que se esquiva de suas tarefas'},{ko:'중',pt:'meio; interior de um conjunto'},{ko:'영웅',pt:'herói'},{ko:'존재',pt:'existência; ser; presença'},{ko:'사람',pt:'pessoa'}]};
