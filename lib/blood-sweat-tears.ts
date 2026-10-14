// Blood Sweat and Tears — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Refrão de abertura — entrega total.
const opening=[
 line('내 피 땀 눈물','Meu sangue, suor e lágrimas.',[
  e('내','meu, minha',['Contração de 나의']),
  e('피 땀 눈물','sangue, suor e lágrimas',['피 = sangue','땀 = suor','눈물 = lágrima','Tríade do título: o que se entrega'])]),
 line('내 마지막 춤을','Minha última dança (objeto).',[
  e('내 마지막 춤을','minha última dança',['마지막 = último','춤 = dança','을 = objeto'])]),
 line('다 가져가 가','Leve tudo, vá.',[
  e('다 가져가','leve tudo',['다 = tudo','가져가다 = levar consigo']),
  e('가','vá',['가다 = ir','Forma curta e cantada de 가라 / 가'])]),
 line('내 피 땀 눈물','Meu sangue, suor e lágrimas.',[
  e('내 피 땀 눈물','meu sangue, suor e lágrimas',['Refrão repetido: a oferta se renova'])]),
 line('내 차가운 숨을','Meu sopro frio (objeto).',[
  e('내 차가운 숨을','meu sopro frio',['차갑다 = ser frio','숨 = respiração, sopro','을 = objeto'])]),
 line('다 가져가 가','Leve tudo, vá.',[
  e('다 가져가 가','leve tudo, vá',['Reprise do comando de entrega'])]),
 line('내 피 땀 눈물','Meu sangue, suor e lágrimas.',[
  e('내 피 땀 눈물','meu sangue, suor e lágrimas',['Fecho da estrofe de abertura'])])];
// Verso 1 — corpo, alma e feitiço.
const verse=[
 line('내 피 땀 눈물도','Até meu sangue, suor e lágrimas.',[
  e('내 피 땀 눈물도','até meu sangue, suor e lágrimas',['도 = também, até','Estende a entrega além do esperado'])]),
 line('내 몸 마음 영혼도','Meu corpo, coração e alma também.',[
  e('내 몸 마음 영혼도','meu corpo, coração e alma também',['몸 = corpo','마음 = coração, mente','영혼 = alma'])]),
 line('너의 것인 걸 잘 알고 있어','Sei bem que são teus.',[
  e('너의 것인 걸','que são teus',['너의 = teu','것 = coisa','인 = que é','걸 contrai 것을']),
  e('잘 알고 있어','sei bem',['알다 = saber','-고 있다 = estado presente'])]),
 line('이건 나를 벌받게 할 주문','Isto é um feitiço que me fará ser punido.',[
  e('이건','isto (tópico)',['Contração de 이것은']),
  e('나를 벌받게 할','que me fará ser punido',['벌받다 = ser punido','-게 하다 = fazer ficar']),
  e('주문','feitiço, encantamento',['Ordem mágica: o amor como magia'])]),
 en('Peaches and cream','Pêssegos com creme.'),
 en('Sweeter than sweet','Mais doce que o doce.'),
 en('Chocolate cheeks','Bochechas de chocolate.'),
 en('Chocolate wings','Asas de chocolate.'),
 line('But 너의 날개는 악마의 것','Mas tuas asas são coisa do demônio.',[
  e('너의 날개는','tuas asas (tópico)',['날개 = asa','는 = tópico']),
  e('악마의 것','coisa do demônio',['악마 = demônio','의 = de','것 = coisa'])]),
 line('너의 그 sweet 앞엔 bitter bitter','Diante desse teu doce há amargo, amargo.',[
  e('너의 그 sweet 앞엔','diante desse teu doce',['앞 = frente, diante','엔 contrai 에는']),
  e('bitter bitter','amargo, amargo',['Em inglês na letra: o contraste do doce'])])];
// Pré-refrão — beijo, dor e vertigem.
const pre=[
 line('Kiss me 아파도 돼','Beije-me, pode doer.',[
  e('아파도 돼','pode doer',['아프다 = doer','-어도 되다 = pode, é permitido mesmo que'])]),
 line('어서 날 조여줘','Venha, aperte-me.',[
  e('어서','venha, depressa',['Advérbio de urgência']),
  e('날 조여줘','aperte-me',['조이다 = apertar','-어 줘 = faça por mim'])]),
 line('더 이상 아플 수도 없게','A ponto de eu não poder mais doer.',[
  e('더 이상','mais, de agora em diante',['Limite: além disso']),
  e('아플 수도 없게','a ponto de nem poder doer',['-(으)ㄹ 수 없다 = não conseguir','-게 = a ponto de'])]),
 line('Baby 취해도 돼 이제 널 들이켜','Baby, posso ficar bêbado, agora bebo você.',[
  e('취해도 돼','posso ficar bêbado',['취하다 = embriagar-se','-어도 되다 = permissão']),
  e('이제 널 들이켜','agora bebo você',['이제 = agora','들이키다 = beber de gole'])]),
 line('목 깊숙이 너란 위스키','Garganta adentro, você como uísque.',[
  e('목 깊숙이','garganta adentro',['목 = garganta, pescoço','깊숙이 = profundamente']),
  e('너란 위스키','você como uísque',['너란 contrai 너라는: chamado você','위스키 = empréstimo'])]),
 line('내 피 땀 눈물','Meu sangue, suor e lágrimas.',[
  e('내 피 땀 눈물','meu sangue, suor e lágrimas',['Retorno ao refrão'])]),
 line('내 마지막 춤을','Minha última dança.',[
  e('내 마지막 춤을','minha última dança (objeto)',['Reprise da oferta'])]),
 line('다 가져가 가','Leve tudo, vá.',[
  e('다 가져가 가','leve tudo, vá',['Comando repetido'])]),
 line('내 피 땀 눈물','Meu sangue, suor e lágrimas.',[
  e('내 피 땀 눈물','meu sangue, suor e lágrimas',['Segunda metade do refrão'])]),
 line('내 차가운 숨을','Meu sopro frio.',[
  e('내 차가운 숨을','meu sopro frio (objeto)',['차갑다 = ser frio'])]),
 line('다 가져가 가','Leve tudo, vá.',[
  e('다 가져가 가','leve tudo, vá',['Fecho do refrão'])]),
 line('원해 많이 많이 많이 많이','Quero muito, muito, muito, muito.',[
  e('원해','quero',['원하다 = querer, desejar','Forma informal']),
  e('많이 많이 많이 많이','muito, muito, muito, muito',['많다 = ser muito','-이 = adverbial','Repetição do desejo'])]),
 line('원해 많이 많이 많이 많이 많이 많이','Quero muito, muito, muito, muito, muito, muito.',[
  e('원해 많이 많이 많이 많이 많이 많이','quero muitíssimo',['Repetição alongada: desejo sem medida'])]),
 line('원해 많이 많이 많이 많이','Quero muito, muito, muito, muito.',[
  e('원해 많이','quero muito',['Reprise do pedido'])]),
 line('원해 많이 많이 많이 많이 많이 많이','Quero muito, muito, muito, muito, muito, muito.',[
  e('원해 많이 많이','quero muitíssimo',['Fecho do gancho'])])];
// Rap — prisão doce e cálice envenenado.
const rap=[
 line('아파도 돼 날 묶어줘','Pode doer, amarre-me.',[
  e('아파도 돼','pode doer',['-어도 되다 = permissão mesmo com dor']),
  e('날 묶어줘','amarre-me',['묶다 = amarrar','-어 줘 = faça por mim'])]),
 line('내가 도망칠 수 없게','Para eu não poder fugir.',[
  e('내가 도망칠 수 없게','para eu não poder fugir',['도망치다 = fugir','-(으)ㄹ 수 없다','-게 = finalidade'])]),
 line('꽉 쥐고 날 흔들어줘','Segure firme e sacuda-me.',[
  e('꽉 쥐고','segurando firme',['꽉 = firmemente','쥐다 = segurar','-고 = e']),
  e('날 흔들어줘','sacuda-me',['흔들다 = sacudir','-어 줘 = pedido'])]),
 line('내가 정신 못 차리게','Para eu não recuperar o juízo.',[
  e('내가 정신 못 차리게','para eu não recobrar o juízo',['정신 = consciência','차리다 = recobrar','못 = não conseguir'])]),
 en('Kiss me on the lips lips','Beije-me nos lábios, lábios.'),
 line('둘만의 비밀','Um segredo só nosso.',[
  e('둘만의','só dos dois',['둘 = dois','-만의 = só de']),
  e('비밀','segredo',['O que só os dois sabem'])]),
 line('너란 감옥에 중독돼 깊이','Estou fundo viciado na prisão chamada você.',[
  e('너란 감옥에','na prisão chamada você',['감옥 = prisão','-에 = em']),
  e('중독돼 깊이','viciado fundo',['중독되다 = viciar-se','깊이 = profundamente'])]),
 line('니가 아닌 다른 사람 섬기지 못해','Não consigo servir outra pessoa que não você.',[
  e('니가 아닌','que não seja você',['니 = forma de 네, você','아니다 = não ser']),
  e('다른 사람 섬기지 못해','não consigo servir outra pessoa',['섬기다 = servir','못 = não conseguir'])]),
 line('알면서도 삼켜버린 독이 든 성배','O cálice com veneno que engoli mesmo sabendo.',[
  e('알면서도','mesmo sabendo',['알다 = saber','-면서도 = mesmo com']),
  e('삼켜버린','que engoli',['삼키다 = engolir','-어 버리다 = acabar com pesar']),
  e('독이 든 성배','o cálice com veneno',['독 = veneno','성배 = cálice sagrado'])])];
// Ponte — morte suave e doçura.
const bridge=[
 line('나를 부드럽게 죽여줘','Mate-me suavemente.',[
  e('나를','a mim (objeto)',['나 + 를']),
  e('부드럽게 죽여줘','mate suavemente',['부드럽다 = ser suave','죽이다 = matar','-어 줘 = pedido'])]),
 line('너의 손길로 눈 감겨줘','Com teu toque, fecha meus olhos.',[
  e('너의 손길로','com teu toque',['손길 = toque da mão','-로 = com']),
  e('눈 감겨줘','fecha meus olhos',['감기다 = fechar-se','-어 줘 = faça por mim'])]),
 line('어차피 거부할 수조차 없어','De todo modo, nem recusar consigo.',[
  e('어차피','de todo modo',['Advérbio: de qualquer jeito']),
  e('거부할 수조차 없어','nem recusar consigo',['거부하다 = recusar','-조차 = nem mesmo'])]),
 line('더는 도망갈 수조차 없어','Nem fugir mais consigo.',[
  e('더는','mais, além disso',['더 + 는: limite']),
  e('도망갈 수조차 없어','nem fugir consigo',['Mesma estrutura de impossibilidade'])]),
 line('니가 너무 달콤해 너무 달콤해','Você é tão doce, tão doce.',[
  e('니가','você (sujeito)',['Forma de 네가']),
  e('너무 달콤해','é tão doce',['달콤하다 = ser doce','Repetição da doçura'])]),
 line('너무 달콤해서','Tão doce que.',[
  e('너무 달콤해서','tão doce que',['-어서 = e então, por isso','Liga à entrega final'])]),
 line('내 피 땀 눈물','Meu sangue, suor e lágrimas.',[
  e('내 피 땀 눈물','meu sangue, suor e lágrimas',['Fecho suspenso'])]),
 line('내 피 땀 눈물','Meu sangue, suor e lágrimas.',[
  e('내 피 땀 눈물','meu sangue, suor e lágrimas',['Última oferta, sem verbo'])])];
export const bstSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Verso 1',lines:verse},
 {title:'Pré-refrão',lines:pre},
 {title:'Rap',lines:rap},
 {title:'Pré-refrão',lines:pre},
 {title:'Ponte',lines:bridge}];
export const bstVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'가져가다',pt:'levar consigo'},
  {ko:'가다',pt:'ir'},
  {ko:'알다',pt:'saber, conhecer'},
  {ko:'벌받다',pt:'ser punido'},
  {ko:'아프다',pt:'doer (descritivo)'},
  {ko:'조이다',pt:'apertar'},
  {ko:'취하다',pt:'embriagar-se'},
  {ko:'들이키다',pt:'beber de gole'},
  {ko:'원하다',pt:'querer, desejar'},
  {ko:'많다',pt:'ser muito (descritivo)'},
  {ko:'묶다',pt:'amarrar'},
  {ko:'도망치다',pt:'fugir'},
  {ko:'쥐다',pt:'segurar'},
  {ko:'흔들다',pt:'sacudir'},
  {ko:'차리다',pt:'recobrar, arrumar'},
  {ko:'중독되다',pt:'viciar-se'},
  {ko:'섬기다',pt:'servir'},
  {ko:'삼키다',pt:'engolir'},
  {ko:'죽이다',pt:'matar'},
  {ko:'감기다',pt:'fechar-se'},
  {ko:'거부하다',pt:'recusar'},
  {ko:'차갑다',pt:'ser frio (descritivo)'},
  {ko:'부드럽다',pt:'ser suave (descritivo)'},
  {ko:'달콤하다',pt:'ser doce (descritivo)'}],
 nouns:[
  {ko:'피',pt:'sangue'},
  {ko:'땀',pt:'suor'},
  {ko:'눈물',pt:'lágrima'},
  {ko:'춤',pt:'dança'},
  {ko:'숨',pt:'respiração, sopro'},
  {ko:'몸',pt:'corpo'},
  {ko:'마음',pt:'coração, mente'},
  {ko:'영혼',pt:'alma'},
  {ko:'것',pt:'coisa'},
  {ko:'주문',pt:'feitiço, encantamento'},
  {ko:'날개',pt:'asa'},
  {ko:'악마',pt:'demônio'},
  {ko:'앞',pt:'frente, diante'},
  {ko:'목',pt:'garganta, pescoço'},
  {ko:'위스키',pt:'uísque'},
  {ko:'정신',pt:'consciência, juízo'},
  {ko:'비밀',pt:'segredo'},
  {ko:'감옥',pt:'prisão'},
  {ko:'사람',pt:'pessoa'},
  {ko:'독',pt:'veneno'},
  {ko:'성배',pt:'cálice sagrado'},
  {ko:'손길',pt:'toque da mão'},
  {ko:'눈',pt:'olho'}]};