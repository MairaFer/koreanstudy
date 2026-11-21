Exit code: 0
Wall time: 16.5 seconds
Output:
import type {Song} from './songs';
type Grammar={expression:string;meaning:string;note:string};
type Line={original:string;translation:string;grammar?:Grammar[]};
type Section={title:string;lines:Line[];exercises:{prompt:string;answer:string}[]};
const g=(expression:string,meaning:string,note:string):Grammar=>({expression,meaning,note});
const line=(original:string,translation:string,grammar:Grammar[]=[]):Line=>({original,translation,grammar});

export const eightSong:Song={id:'eight-iu',title:'eight (에잇)',artist:'IU feat. SUGA',album:'eight',year:2020,cover:'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6b/65/4d/6b654d71-ed85-c6c4-8fe2-ef3d8e9f2ee0/cover_-.jpg/600x600bb.jpg',color:'from-orange-400 to-violet-700',lyrics:[]};

export const eightSections:Section[]=[
 {title:'Depois de perder: estado e recusa',lines:[
  line('뭐 그대로야 난','Bem, eu continuo igual.',[g('그대로','do mesmo jeito','Indica que um estado permanece sem mudança.'),g('-야','é / estou','Forma informal da cópula.')]),
  line('다 잃어버린 것 같아','Parece que perdi tudo.',[g('다','tudo','Abrange a totalidade.'),g('잃어버리다','perder por completo','잃다 + -아/어 버리다 enfatiza resultado e perda.'),g('-ㄴ 것 같아','parece que','Inferência ou impressão sobre uma ação passada.')]),
  line('모든 게 맘대로 왔다가 인사도 없이 떠나','Tudo vem quando quer e depois parte sem nem se despedir.',[g('맘대로','como quer','Contração coloquial de 마음대로.'),g('-았다가','fez e depois mudou','Liga uma ação anterior a outra contrastante.'),g('인사도 없이','sem nem se despedir','도 enfatiza; 없이 indica ausência.')]),
  line('이대로는 무엇도 사랑하고 싶지 않아','Desse jeito, não quero amar mais nada.',[g('이대로는','assim, nessas condições','는 cria contraste com outras possibilidades.'),g('무엇도','nada / coisa alguma','도 com negação produz sentido de “nada”.'),g('-고 싶지 않다','não querer fazer','Negação de -고 싶다.')]),
  line('다 해질 대로 해져버린 기억 속을 여행해','Viajo por lembranças gastas até o limite.',[g('해지다','ficar gasto','Desgastar-se com o tempo.'),g('-ㄹ 대로','até onde / tanto quanto','Indica que algo chegou ao grau máximo esperado.'),g('-아/어 버리다','acabar ficando','Resultado completo, aqui com nuance de desgaste.'),g('기억 속을','pelo interior das lembranças','속 + 을 marca o espaço atravessado.')])
 ],exercises:[{prompt:'O que -ㄴ 것 같아 expressa em 잃어버린 것 같아?',answer:'Uma impressão ou inferência: “parece que perdi”.'},{prompt:'Como 무엇도 funciona com a negação?',answer:'Forma “nada” ou “coisa alguma”.'}]},
 {title:'O lugar preservado na memória',lines:[
  line('우리는 오렌지 태양 아래 그림자 없이 함께 춤을 춰','Nós dançamos juntos sob o sol laranja, sem sombras.',[g('태양 아래','sob o sol','아래 indica posição inferior.'),g('그림자 없이','sem sombra','없이 expressa ausência.'),g('함께','juntos','Ação compartilhada.'),g('춤을 추다','dançar','Expressão com substantivo + verbo.')]),
  line('정해진 이별 따위는 없어','Não existe uma despedida predeterminada dessas.',[g('정해진','determinado','정해지다 no modificador passado.'),g('이별','despedida, separação','Rompimento entre pessoas.'),g('따위는','coisa como / esse tipo de','Desdenha ou rejeita a categoria mencionada.'),g('없어','não existe','Negação existencial informal.')]),
  line('아름다웠던 그 기억에서 만나','Encontre-me naquela lembrança que foi bonita.',[g('아름다웠던','que era bonita','-았/었던 recorda um estado passado encerrado ou distante.'),g('기억에서','na lembrança','에서 marca o cenário do encontro.'),g('만나','encontre / nos encontramos','Forma informal de 만나다; o sujeito depende do contexto.')]),
  line('이런 악몽이라면 영영 깨지 않을게','Se este for um pesadelo assim, nunca vou acordar.',[g('-(이)라면','se for','Condição hipotética com substantivo.'),g('영영','para sempre / nunca mais','Com negação, reforça “nunca”.'),g('깨다','acordar','Sair do sono.'),g('-지 않을게','não vou; prometo não','Compromisso ou decisão do falante.')])
 ],exercises:[{prompt:'Que nuance 따위는 acrescenta?',answer:'Rejeita ou trata com desdém “algo como” a despedida.'},{prompt:'O que -(이)라면 marca?',answer:'Uma condição hipotética com substantivo: “se for…”.'}]},
 {title:'A ilha de SUGA e a fragilidade do eterno',lines:[
  line('섬 그래 여긴 섬 서로가 만든 작은 섬','Uma ilha, sim, aqui é uma ilha — uma pequena ilha que criamos um para o outro.',[g('여긴','aqui (tópico)','Contração de 여기는.'),g('서로가','um ao outro / ambos','서로 com partícula de sujeito.'),g('만든','que criamos','Modificador passado de 만들다.')]),
  line('영원이란 말은 모래성','A palavra “eternidade” é um castelo de areia.',[g('영원이란','chamado eternidade','Contração de 영원이라는; cita ou define o termo.'),g('말은','quanto à palavra','은 estabelece o tópico.'),g('모래성','castelo de areia','Metáfora de algo belo e frágil.')]),
  line('작별은 마치 재난문자 같지','A despedida é como uma mensagem de alerta de desastre.',[g('작별','despedida','Ato de se separar.'),g('마치','como se / tal qual','Reforça uma comparação.'),g('재난문자','alerta de emergência','Mensagem pública de desastre.'),g('같지','é como, não é?','같다 + 지, tom de constatação compartilhada.')]),
  line('그리움과 같이 맞이하는 아침','Uma manhã recebida junto com a saudade.',[g('그리움','saudade','Sentimento por alguém ausente.'),g('-과 같이','junto com','Companhia ou simultaneidade.'),g('맞이하는','que recebe / ao receber','Modificador presente de 맞이하다.')]),
  line('서로가 이 영겁을 지나 꼭 이 섬에서 다시 만나','Depois de atravessarmos esta eternidade, vamos nos encontrar novamente nesta ilha.',[g('영겁','eternidade, tempo imenso','Período inconcebivelmente longo.'),g('지나','atravessando / depois de passar','Forma conectiva de 지나다.'),g('꼭','com certeza','Enfatiza determinação.'),g('다시 만나','encontremo-nos de novo','Desejo ou promessa informal, conforme o contexto.')])
 ],exercises:[{prompt:'Qual metáfora descreve 영원?',answer:'모래성, um castelo de areia.'},{prompt:'O que 마치…같다 constrói?',answer:'Uma comparação: “como / tal qual”.'}]},
 {title:'O tempo passa, a lembrança segura',lines:[
  line('지나듯 날 위로하던 누구의 말대로 고작','Como nas palavras de alguém que me consolava de passagem, seria apenas…',[g('지나듯','como se passasse','-듯 indica aparência ou modo comparável.'),g('위로하던','que costumava consolar','-던 recupera uma ação passada habitual ou incompleta.'),g('말대로','conforme as palavras','대로 = de acordo com.'),g('고작','apenas, no máximo','Minimiza a quantidade, preparando contraste.')]),
  line('한 뼘짜리 추억을 잊는 게 참 쉽지 않아','Esquecer uma lembrança do tamanho de um palmo realmente não é fácil.',[g('한 뼘짜리','do tamanho de um palmo','짜리 indica valor, tamanho ou categoria.'),g('잊는 게','o ato de esquecer','Contração de 잊는 것이.'),g('쉽지 않아','não é fácil','Negação com -지 않다.')]),
  line('시간이 지나도 여전히 날 붙드는 그곳에','Naquele lugar que ainda me prende, mesmo com o passar do tempo.',[g('-아/어도','mesmo que / embora','Concessão: o resultado permanece.'),g('여전히','ainda, como antes','Continuidade de estado.'),g('날','me','Contração de 나를.'),g('붙드는','que segura','Modificador presente de 붙들다.')]),
  line('우리는 서로를 베고 누워 슬프지 않은 이야기를 나눠','Deitamos apoiados um no outro e compartilhamos histórias que não são tristes.',[g('서로를 베고','apoiando a cabeça um no outro','베다 aqui é usar algo como travesseiro.'),g('-고 누워','deitar fazendo…','-고 conecta ações simultâneas ou encadeadas.'),g('슬프지 않은','que não é triste','Negação modificadora de 슬프다.'),g('이야기를 나누다','compartilhar histórias','Expressão lexical.')]),
  line('난 영원히 널 이 기억에서 만나','Eu encontro você para sempre nesta lembrança.',[g('영원히','eternamente','Advérbio de 영원하다.'),g('널','você (objeto)','Contração de 너를.'),g('기억에서','na lembrança','A memória funciona como lugar do reencontro.')])
 ],exercises:[{prompt:'Que sentido -아/어도 tem em 시간이 지나도?',answer:'Concessão: “mesmo que o tempo passe”.'},{prompt:'O que -던 mostra em 위로하던?',answer:'Uma ação passada recordada, habitual ou ainda aberta na memória.'}]}
];

export const eightVocabulary=[
 {word:'잃어버리다',reading:'ireobeorida',meaning:'perder por completo'},
 {word:'해지다',reading:'haejida',meaning:'ficar gasto'},
 {word:'그림자',reading:'geurimja',meaning:'sombra'},
 {word:'이별',reading:'ibyeol',meaning:'separação, despedida'},
 {word:'모래성',reading:'moraeseong',meaning:'castelo de areia'},
 {word:'재난문자',reading:'jaenanmunja',meaning:'mensagem de alerta de desastre'},
 {word:'그리움',reading:'geurium',meaning:'saudade'},
 {word:'붙들다',reading:'butdeulda',meaning:'segurar, prender'}
];


