import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,a:string,b:string):StudyEntry=>({term,meaning,notes:[a,b]});
const l=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const burning=l('불타오르네','Está ardendo em chamas.',[e('불타오르네','arde em chamas','불타오르다 = arder intensamente, inflamar-se; 불 = fogo.','-네 marca constatação ou exclamação; a imagem expressa também energia e intensidade.')]);
const burn=l('싹 다 불태워라','Queime tudo, por completo.',[e('싹 다','tudo, por completo','싹 é advérbio de totalidade; 다 = tudo.','Juntos intensificam a ausência de exceções.'),e('불태워라','queime','불태우다 é transitivo: queimar algo, ao contrário de 불타오르다, arder.','-어라 é imperativo direto; o fogo funciona como imagem de intensidade e libertação na letra.')]);
const intro=[burning,...Array.from({length:4},()=>en('Fire','Fogo.'))];
const verse1=[
en('When I wake up in my room (room)','Quando acordo no meu quarto (quarto).'),
l('난 뭣도 없지 (뭣도 없지)','Eu não tenho nada (não tenho nada).',[
e('난','eu','Contração de 나는, com partícula de tópico 는.','O narrador apresenta sua própria situação.'),e('뭣도 없지','não tenho nada','뭣 é variante de 무엇; 도 com 없다 reforça nem uma coisa.','-지 dá tom de constatação informal; nada é a tradução contextual da construção negativa.')]),
l('해가 지고 난 후 (후)','Depois que o sol se põe (depois).',[
e('해가','o sol','해 = sol; 가 = sujeito.','Aqui não é 해 de 하다, fazer.'),e('지고 난 후','depois de se pôr','지다 = pôr-se (sol); -고 나다 marca conclusão; 후 = depois.','난 modifica 후: após a ação ter acabado. A oração principal vem depois.')]),
l('비틀대며 걷지 (비틀대며 걷지)','Ando cambaleando (ando cambaleando).',[
e('비틀대며','cambaleando','비틀대다 = cambalear repetidamente.','-며 indica ação simultânea ou modo: andar enquanto se cambaleia.'),e('걷지','ando','걷다 = andar; -지 é final informal de constatação.','Não há irregularidade ㄷ nesta forma porque a terminação começa em consoante.')]),
l('다 만신창이로 취했어, 취했어','Todo acabado, fiquei bêbado, bêbado.',[
e('다 만신창이로','todo acabado','다 = completamente; 만신창이 = estado de estar todo ferido ou arrasado.','로 apresenta o estado em que a pessoa se encontra; a tradução é coloquial e contextual.'),e('취했어','fiquei bêbado','취하다 = embriagar-se; -했어 marca passado informal.','O contexto de cambalear favorece esse sentido; 취하다 tem outros usos fora desta frase.')]),
l('막 욕해 길에서, 길에서','Solto palavrões sem freio na rua, na rua.',[
e('막 욕해','xingo sem freio','막 = sem cuidado/restrição neste contexto; 욕하다 = xingar.','욕해 é informal e aqui descreve a conduta do narrador.'),e('길에서','na rua','길 = caminho/rua; 에서 marca o lugar de uma ação.','A repetição mantém o cenário urbano.')]),
l('나 맛이 갔지, 미친놈 같지','Eu perdi a linha, pareço um maluco.',[
e('나','eu','Pronome informal de primeira pessoa.','O sujeito é retomado sem partícula.'),e('맛이 갔지','perdi a linha','맛이 가다 é expressão coloquial para estragar ou perder o funcionamento/juízo.','Literalmente o gosto se foi; não se traduz literalmente quando se refere a uma pessoa.'),e('미친놈 같지','pareço um maluco','미친 vem de 미치다; 놈 é modo depreciativo de se referir a um homem; 같다 = parecer.','Expressão ríspida e autodepreciativa, não uma descrição clínica; -지 mantém o tom informal.')]),
l("다 엉망진창 livin' like 삐이",'Tudo uma bagunça, vivendo como... biiip.',[
e('다 엉망진창','tudo uma bagunça','다 = tudo; 엉망진창 = completa desordem.','A cópula é omitida na sequência rítmica.'),e('삐이','biiip','Representação sonora de um apito/bipe.','Neste contexto, sugere uma censura sonora; não se inventa a palavra omitida.')])];
const pre=[
l('니 멋대로 살어 (살어)','Viva do seu jeito (viva).',[
e('니 멋대로','do seu jeito','니 é forma coloquial de 네, seu; 멋대로 = à própria vontade.','Pode significar arbitrariamente em outros contextos; aqui transmite autonomia.'),e('살어','viva','Forma coloquial/não padrão correspondente a 살아, de 살다, viver.','A letra foi preservada; para a forma padrão de estudo, use 살아.')]),
l('어차피 니 거야 (니 거야)','De todo modo, é sua (é sua).',[
e('어차피','de todo modo','Advérbio que apresenta algo como certo independentemente das alternativas.','Aqui sustenta o incentivo à autonomia.'),e('니 거야','é sua','니 = 네; 거 é redução de 것, coisa; 야 é cópula informal.','A vida é entendida pelo contexto, embora não esteja nomeada nesta linha.')]),
l('애쓰지 좀 말어 (말어)','Não se desgaste tanto (não se desgaste).',[
e('애쓰지','esforçar-se','애쓰다 = esforçar-se, empenhar-se; -지 prepara a negação imperativa.','O contexto sugere não se cobrar excessivamente, não uma proibição de qualquer esforço.'),e('좀 말어','por favor, não','좀 pode suavizar um pedido; 말어 é forma coloquial de 말아.','-지 말다 forma a proibição; a versão padrão seria 애쓰지 좀 말아.')]),
l('져도 괜찮아 (져도 괜찮아)','Tudo bem perder (tudo bem perder).',[
e('져도','mesmo que perca','지다 = perder; 지 + 어도 → 져도.','É diferente de 지다 na expressão 해가 지다, o sol se pôr.'),e('괜찮아','tudo bem','괜찮다 = estar bem, não haver problema.','A frase acolhe uma derrota sem tratá-la como fim definitivo.')]),
en('Errbody say, la-la-la-la-la (la-la-la-la-la)','Todo mundo diga: lá-lá-lá-lá-lá (lá-lá-lá-lá-lá).'),en('Say, la-la-la-la-la (la-la-la-la-la)','Diga: lá-lá-lá-lá-lá (lá-lá-lá-lá-lá).'),
l('손을 들어, 소리 질러 burn it up','Levantem as mãos, gritem, incendeiem tudo.',[
e('손을 들어','levantem as mãos','손 = mão; 을 = objeto; 들다 = levantar.','들어 é imperativo informal no contexto da chamada ao público.'),e('소리 질러','gritem','소리 = som/voz; 지르다 = soltar um grito.','지르다 → 질러 apresenta irregularidade 르; a partícula de objeto foi omitida.')])];
const chorus=[burning,en('Eh','Ê!'),en('Eh-oh, eh-oh','Ê-ô, ê-ô!'),burn,en('Bow-wow-wow','Au-au-au! (vocalização rítmica)'),en('Eh','Ê!'),en('Eh-oh, eh-oh','Ê-ô, ê-ô!'),burn,en('Bow-wow-wow','Au-au-au! (vocalização rítmica)')];
const verse2=[
en('Hey (hey), burn it up (burn it up)','Ei (ei), incendeie tudo (incendeie tudo).'),
l('전부 다 태울 것 같이 (이)','Como se fosse queimar absolutamente tudo.',[
e('전부 다','tudo, por inteiro','전부 = totalidade; 다 = tudo.','A combinação é enfática, não uma soma de dois objetos.'),e('태울 것 같이','como se fosse queimar','태우다 = queimar; -ㄹ 것 같이 indica aparência/comparação.','O fragmento descreve a intensidade; não afirma que algo foi literalmente incendiado.'),e('이','eco vocal','A sílaba entre parênteses é uma extensão/eco do canto.','Não exerce aqui o papel de partícula de sujeito.')]),
en('Hey (hey), turn it up (turn it up)','Ei (ei), aumente o volume (aumente o volume).'),
l('새벽이 다 갈 때까지 (so what?)','Até a madrugada inteira passar (e daí?).',[
e('새벽이','a madrugada','새벽 = madrugada/amanhecer; 이 = sujeito.','Indica o período que vai se esgotando.'),e('다 갈 때까지','até passar por completo','다 = inteiramente; 가다 = ir/passar; -ㄹ 때 = quando.','까지 marca o limite temporal: até esse momento.')]),
l('그냥 살아도 돼, 우린 젊기에','Você pode simplesmente viver, porque somos jovens.',[
e('그냥 살아도 돼','pode simplesmente viver','그냥 = simplesmente; 살다 + -아도 되다 expressa permissão.','Não é só concessão: com 돼, o conjunto significa pode/está tudo bem fazer.'),e('우린 젊기에','porque somos jovens','우린 = 우리는; 젊다 = ser jovem; -기에 apresenta razão.','O registro explicativo contrasta com o imperativo informal do refrão.')]),
l('그 말하는 넌 뭔 수저길래?','Você que diz isso, nasceu com que tipo de colher?',[
e('그 말하는 넌','você que fala isso','그 말 = essa fala; 하는 modifica 너; 넌 = 너는.','A pergunta confronta quem julga ou dá conselhos de uma posição social.'),e('뭔','que tipo de','Redução de 무슨.','Pergunta qual categoria seria atribuída ao interlocutor.'),e('수저길래','que colher é você para...','수저 literalmente é colher e pauzinhos; aqui evoca rótulos de origem social, como 금수저 e 흙수저.','-(이)길래 pergunta pelo motivo/base da conduta: que condição você tem para falar assim? A tradução mantém a metáfora.')]),
l('수저, 수저 거려? 난 사람인데','Por que fica falando em colher, colher? Eu sou uma pessoa.',[
e('수저, 수저 거려','fica falando em colher, colher?','A repetição de 수저 e 거려 evoca uma fala insistente sobre esses rótulos.','A formulação rítmica não deve ser aprendida como um substantivo cotidiano novo; seu alvo é a classificação social.'),e('난 사람인데','mas eu sou uma pessoa','난 = 나는; 사람 = pessoa; 이다 + -ㄴ데 → 인데.','O final indica contraste: a identidade humana não se reduz à origem econômica.')]),en('So what?','E daí?')];
const bridge=[
l('겁 많은 자여, 여기로','Vocês que têm medo, venham para cá.',[
e('겁 많은 자여','ó pessoa que tem muito medo','겁 = medo; 많다 + -은 → 많은; 자 = pessoa; 여 = vocativo literário.','O português usa plural pelo convite coletivo, embora o coreano não marque número.'),e('여기로','para cá','여기 = aqui; 로 = direção.','O verbo vir é implícito no chamado.')]),
l('(Fire) 괴로운 자여, 여기로','(Fogo) Vocês que sofrem, venham para cá.',[
e('괴로운 자여','ó pessoa que sofre','괴롭다 → 괴로운, com alternância ㅂ; 자여 é um vocativo solene.','괴롭다 descreve sofrimento ou aflição, não apenas dor física.'),e('여기로','para cá','여기 + 로 indica direção.','Repete o convite da linha anterior.')]),
l('(Fire) 맨주먹을 들고 all night long','(Fogo) Com os punhos nus erguidos, a noite toda.',[
e('맨주먹을','os punhos nus','맨- = sem cobertura/equipamento; 주먹 = punho; 을 = objeto.','A imagem sugere enfrentar a situação com os próprios recursos.'),e('들고','erguendo, com erguidos','들다 = levantar; -고 liga a ação à continuação.','O fragmento se conecta à marcha da próxima linha.')]),
l('진군하는 발걸음으로','Com passos de quem marcha adiante.',[
e('진군하는','que avança em marcha','진군하다 = avançar em marcha, originalmente militar.','-는 modifica 발걸음; na canção, cria uma imagem coletiva de avanço.'),e('발걸음으로','com passos','발걸음 = passo; 으로 = meio/modo.','A terminação indica a maneira de seguir adiante.')]),
l('(Fire) 뛰어봐 (oh-ooh-whoa)','(Fogo) Vamos, tente pular/correr (oh-ooh-whoa).',[
e('뛰어봐','experimente pular/correr','뛰다 pode significar saltar ou correr; -어 보다 convida a tentar.','No contexto da festa, estimula movimento; não há um único equivalente português obrigatório.')]),
l('미쳐버려, 다 (ah-ooh)','Soltem-se completamente, todos (ah-ooh).',[
e('미쳐버려','enlouqueçam, soltem-se','미치다 = enlouquecer; -어 버리다 intensifica a conclusão/entrega à ação.','É uma hipérbole de liberdade e energia, não uma avaliação clínica.'),e('다','todos, completamente','Pode abranger todas as pessoas ou a totalidade da ação.','A posição final reforça o chamado coletivo.')])];
const final=[en('Hot, hot, hot, hotter','Quente, quente, quente, mais quente.'),burn,en('Bow-wow-wow','Au-au-au! (vocalização rítmica)'),en('Hot, hot, hot, hotter','Quente, quente, quente, mais quente.'),burn,en('Bow-wow-wow','Au-au-au! (vocalização rítmica)'),en('hot, hot, hot, hotter','Quente, quente, quente, mais quente.'),{...burn,text:'(Fire) 싹 다 불태워라',translation:'(Fogo) Queime tudo, por completo.'},en('Bow-wow-wow','Au-au-au! (vocalização rítmica)'),en('(Fire) hot, hot, hot, hotter','(Fogo) Quente, quente, quente, mais quente.'),{...burn,text:'(Fire) 싹 다 불태워라',translation:'(Fogo) Queime tudo, por completo.'},en('Bow-wow-wow','Au-au-au! (vocalização rítmica)')];
const ending=[l('용서해 줄게','Eu vou te perdoar.',[e('용서해','perdoar','용서하다 = perdoar; 용서해 liga-se ao auxiliar seguinte.','A ação principal é perdoar alguém, cujo objeto fica implícito.'),e('줄게','vou fazer isso por você','-아/어 주다 indica benefício ao outro; -(으)ㄹ게 marca compromisso do falante.','A promessa é dirigida ao interlocutor; não se trata de uma ordem para perdoar.')])];
// A mensagem repetia a letra inteira duas vezes. Uma execução completa é suficiente;
// repetições musicais internas permanecem exatamente na ordem enviada.
export const fireSections=[{title:'Abertura',lines:intro},{title:'Verso 1',lines:verse1},{title:'Pré-refrão',lines:pre},{title:'Refrão',lines:chorus},{title:'Verso 2',lines:verse2},{title:'Pré-refrão',lines:pre},{title:'Refrão',lines:chorus},{title:'Ponte',lines:bridge},{title:'Refrão',lines:final},{title:'Final',lines:ending}];
export const fireVocabulary={verbs:[{ko:'불타오르다',pt:'arder intensamente'},{ko:'불태우다',pt:'queimar algo'},{ko:'없다',pt:'não ter, não existir'},{ko:'지다',pt:'pôr-se (sol); perder'},{ko:'비틀대다',pt:'cambalear'},{ko:'걷다',pt:'andar'},{ko:'취하다',pt:'embriagar-se'},{ko:'욕하다',pt:'xingar'},{ko:'살다',pt:'viver'},{ko:'애쓰다',pt:'esforçar-se'},{ko:'괜찮다',pt:'estar bem'},{ko:'들다',pt:'levantar'},{ko:'소리 지르다',pt:'gritar'},{ko:'태우다',pt:'queimar'},{ko:'젊다',pt:'ser jovem'},{ko:'말하다',pt:'falar'},{ko:'많다',pt:'ser muito/numeroso'},{ko:'괴롭다',pt:'sofrer, estar aflito'},{ko:'진군하다',pt:'avançar em marcha'},{ko:'뛰다',pt:'pular, correr'},{ko:'미치다',pt:'enlouquecer'},{ko:'용서하다',pt:'perdoar'}],nouns:[{ko:'불',pt:'fogo'},{ko:'해',pt:'sol'},{ko:'후',pt:'depois'},{ko:'만신창이',pt:'estado de estar todo ferido/arrasado'},{ko:'길',pt:'rua, caminho'},{ko:'맛',pt:'gosto, sabor'},{ko:'엉망진창',pt:'desordem completa'},{ko:'손',pt:'mão'},{ko:'소리',pt:'som, voz'},{ko:'새벽',pt:'madrugada'},{ko:'말',pt:'fala, palavra'},{ko:'수저',pt:'colher e pauzinhos; metáfora de origem social'},{ko:'사람',pt:'pessoa'},{ko:'겁',pt:'medo'},{ko:'맨주먹',pt:'punho nu'},{ko:'발걸음',pt:'passo'}]};
