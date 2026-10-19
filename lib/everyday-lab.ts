import {countingNumber} from './number-lab';
export const dailyItems=[
 {noun:'물',counter:'잔',label:'Água',kind:'water'},
 {noun:'커피',counter:'잔',label:'Café',kind:'coffee'},
 {noun:'포토카드',counter:'장',label:'Photocard',kind:'card'},
 {noun:'응원봉',counter:'개',label:'Lightstick',kind:'lightstick'}
] as const;
export function dailyRequest(item:number,quantity:number){const v=dailyItems[item];return `${v.noun} ${countingNumber(quantity)} ${v.counter} 주세요.`;}
export const dailyPlaces=[
 {noun:'카페',label:'Café',answer:'왼쪽에 있어요.',meaning:'Fica à esquerda.',clue:'왼쪽 significa “lado esquerdo”. Aqui 에 marca a localização, como na aula 7.'},
 {noun:'출구',label:'Saída',answer:'저기예요.',meaning:'É ali.',clue:'저기 aponta para um lugar distante de quem fala e de quem ouve. A pessoa também pode apontar com um gesto.'},
 {noun:'화장실',label:'Banheiro',answer:'오른쪽에 있어요.',meaning:'Fica à direita.',clue:'오른쪽 significa “lado direito”. Observe o lado direito do mapa a partir da sua posição na parte de baixo.'}
] as const;
export function dailyWhere(place:number){const noun=dailyPlaces[place].noun,last=noun.charCodeAt(noun.length-1)-0xac00;return noun+(last%28===0?'가':'이')+' 어디예요?';}
export const dailyPrices=[
 {noun:'포토카드',label:'Photocard',tag:'₩3,000',ko:'삼천 원이에요.',meaning:'São 3.000 won.',build:'3 × 1000 → 삼천'},
 {noun:'앨범',label:'Álbum',tag:'₩20,000',ko:'이만 원이에요.',meaning:'São 20.000 won.',build:'2 × 10000 → 이만'},
 {noun:'커피',label:'Café',tag:'₩4,000',ko:'사천 원이에요.',meaning:'São 4.000 won.',build:'4 × 1000 → 사천'}
] as const;
export const dailyRepairs=[
 {label:'A fala está rápida',ko:'천천히 말씀해 주세요.',meaning:'Pode falar mais devagar, por favor?',note:'천천히 significa “devagar”. 말씀해 주세요 é uma forma respeitosa de pedir que a outra pessoa fale. Você também encontrará 천천히 말해 주세요.'},
 {label:'Preciso ouvir outra vez',ko:'다시 말씀해 주세요.',meaning:'Pode repetir, por favor?',note:'다시 significa “novamente”. Este pedido serve para ouvir a informação outra vez; não significa automaticamente que a pessoa deve falar mais devagar.'},
 {label:'Não tenho certeza',ko:'잘 모르겠어요.',meaning:'Não sei bem / não entendi bem.',note:'Esta expressão pode indicar falta de certeza ou compreensão, conforme o contexto. Se precisar de uma repetição, faça também esse pedido de maneira explícita.'},
 {label:'Quero chamar a atenção',ko:'저기요.',meaning:'Com licença…',note:'Use 저기요 para chamar a atenção de alguém antes de uma pergunta ou pedido. Não é o mesmo que pedir desculpas por um erro.'}
] as const;
export const okayScenes=[
 {label:'Depois de uma desculpa',context:'Alguém esbarrou em você e se desculpou. Você quer tranquilizar a pessoa.',other:'죄송해요.',otherMeaning:'Desculpe.',you:'괜찮아요.',youMeaning:'Tudo bem. / Sem problema.',note:'Aqui 괜찮아요 tranquiliza a pessoa: você está dizendo que está tudo bem.'},
 {label:'Ao recusar uma oferta',context:'Você já tem água e não quer mais. A outra pessoa oferece uma quantidade extra.',other:'물 더 필요해요?',otherMeaning:'Você precisa de mais água?',you:'아니요, 괜찮아요. 감사합니다.',youMeaning:'Não, obrigado(a). Está tudo bem assim.',note:'Aqui 괜찮아요 ajuda a recusar. 아니요 deixa a recusa clara e 감사합니다 acrescenta agradecimento. A mesma expressão não significa sempre “sim”.'}
] as const;
export const dailyChallenges=[
 {place:'cafe',situation:'No café, peça uma xícara de água.',npc:'안녕하세요.',npcMeaning:'Olá.',options:['물 한 잔 주세요.','물 어디예요?','물 얼마예요?'],answer:'물 한 잔 주세요.',feedback:'Você quer receber um item: nome, quantidade, contador e 주세요. 잔 conta a porção de bebida.',follow:'네, 여기 있어요.',followMeaning:'Sim, aqui está.'},
 {place:'shop',situation:'Antes de pedir, pergunte se há lightsticks disponíveis.',npc:'안녕하세요.',npcMeaning:'Olá.',options:['응원봉 없어요.','응원봉 있어요?','응원봉 어디예요?'],answer:'응원봉 있어요?',feedback:'있어요? pergunta se algo está disponível. A interrogação transforma esta forma em pergunta; 없어요. afirmaria ausência.',follow:'네, 있어요.',followMeaning:'Sim, temos.'},
 {place:'venue',situation:'No local do encontro ARMY, pergunte onde fica o banheiro.',npc:'안녕하세요.',npcMeaning:'Olá.',options:['화장실 얼마예요?','화장실 주세요.','화장실이 어디예요?'],answer:'화장실이 어디예요?',feedback:'Para localização, use 어디예요?. 화장실 termina em consoante, por isso aparece com 이 nesta frase.',follow:'오른쪽에 있어요.',followMeaning:'Fica à direita.'},
 {place:'shop',situation:'A pessoa aponta para um photocard. Pergunte o preço dele.',npc:'이거요?',npcMeaning:'Este aqui?',options:['이거 얼마예요?','이거 어디예요?','천천히 말씀해 주세요.'],answer:'이거 얼마예요?',feedback:'이거 indica “isto / este aqui”. 얼마예요? pergunta o preço, não a localização.',follow:'삼천 원이에요.',followMeaning:'São 3.000 won.'},
 {place:'shop',situation:'O item está indisponível. Encerre a tentativa com um agradecimento.',npc:'죄송해요. 지금 없어요.',npcMeaning:'Desculpe. Não temos no momento.',options:['감사합니다.','지금 있어요.','얼마예요?'],answer:'감사합니다.',feedback:'A resposta informa ausência com 없어요. Você pode agradecer e encerrar esta tentativa, sem confundir a informação com uma confirmação de disponibilidade.',follow:'안녕히 가세요.',followMeaning:'Vá em paz. / Até logo, para quem está saindo.'},
 {place:'venue',situation:'A informação veio rápida demais. Peça que falem mais devagar.',npc:'출구는 저기예요.',npcMeaning:'A saída é ali.',options:['응원봉 주세요.','천천히 말씀해 주세요.','출구 얼마예요?'],answer:'천천히 말씀해 주세요.',feedback:'천천히 pede um ritmo mais lento. Você está ajustando a conversa, não pedindo um objeto.',follow:'네. 출구는 저기예요.',followMeaning:'Sim. A saída é ali.'},
 {place:'venue',situation:'Você não ouviu a informação e precisa de uma repetição.',npc:'오른쪽에 있어요.',npcMeaning:'Fica à direita.',options:['다시 말씀해 주세요.','물 두 잔 주세요.','잘 있어요.'],answer:'다시 말씀해 주세요.',feedback:'다시 pede que a informação seja dita novamente. É diferente de pedir apenas mais lentidão.',follow:'오른쪽에 있어요.',followMeaning:'Fica à direita.'},
 {place:'cafe',situation:'Você já tem água. Recuse a oferta extra com clareza e gentileza.',npc:'물 더 필요해요?',npcMeaning:'Você precisa de mais água?',options:['네, 물 주세요.','물 어디예요?','아니요, 괜찮아요. 감사합니다.'],answer:'아니요, 괜찮아요. 감사합니다.',feedback:'아니요 sinaliza “não”; 괜찮아요 indica que você está bem sem a oferta. O agradecimento mantém o tom gentil.',follow:'네.',followMeaning:'Tudo bem.'}
] as const;
