// ON — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — sombra que cresce a cada passo.
const opening=[
 en("I can not understand what people are saying", "Não consigo entender o que dizem."),
 line('어느 장단에 맞춰야 될지', 'A qual ritmo devo me ajustar.', [
  e('어느 장단에', 'a qual ritmo', ['어느 = qual', '장단 = ritmo', '에 = a']),
  e('맞춰야 될지', 'se devo ajustar', ['맞추다 = ajustar', '-어야 되다 = precisar', '-ㄹ지 = se'])]),
 line('한 발자국 떼면 한 발자국 커지는 shadow', 'A cada passo dado, a sombra cresce um passo.', [
  e('한 발자국 떼면', 'se dou um passo', ['발자국 = passo', '떼다 = dar', '-면 = se']),
  e('한 발자국 커지는', 'que cresce um passo', ['크다 = crescer', '-는 = relativo']),
  e('shadow', 'sombra em inglês na letra', ['A sombra que acompanha'])]),
 line('잠에서 눈을 뜬 여긴 또 어디', 'Acordei, onde é aqui de novo.', [
  e('잠에서 눈을 뜬', 'que abriu os olhos do sono', ['잠 = sono', '눈을 뜨다 = abrir os olhos', '-ㄴ = relativo']),
  e('여긴 또 어디', 'aqui é onde de novo', ['여기 = aqui', '또 = de novo', '어디 = onde'])]),
 line('어쩜 서울 또 New York or Paris', 'Talvez Seul, ou New York ou Paris.', [
  e('어쩜', 'talvez', ['Forma de 어쩌면']),
  e('서울', 'Seul', ['A cidade de partida'])]),
 line('일어나니 휘청이는 몸', 'Levanto e o corpo balança.', [
  e('일어나니', 'levanto e', ['일어나다 = levantar', '-니 = e então']),
  e('휘청이는 몸', 'corpo que balança', ['휘청이다 = balançar', '-는 = relativo'])]),
 line('Look at my feet, look down', 'Olhe meus pés, olhe para baixo.', []),
 line('날 닮은 그림자', 'A sombra que se parece comigo.', [
  e('날 닮은', 'que se parece comigo', ['닮다 = parecer', '-은 = relativo']),
  e('그림자', 'sombra', ['O duplo que segue'])]),
 line('흔들리는 건 이놈인가', 'O que balança é esse cara.', [
  e('흔들리는 건', 'o que balança', ['흔들리다 = balançar', '건 contrai 것은']),
  e('이놈인가', 'é esse cara', ['이놈 = esse cara', '-인가 = será'])]),
 line('아니면 내 작은 발끝인가', 'Ou são meus pequenos pés.', [
  e('아니면', 'ou então', ['Alternativa']),
  e('내 작은 발끝인가', 'são meus pequenos pés', ['발끝 = ponta do pé', '-인가 = será'])]),
 line('두렵잖을 리 없잖아', 'Claro que tenho medo.', [
  e('두렵잖을 리 없잖아', 'claro que tem medo', ['두렵다 = ter medo', '-잖아 = como sabe', '-ㄹ 리 없다 = impossível não'])]),
 line('다 괜찮을 리 없잖아', 'Claro que nem tudo está bem.', [
  e('다 괜찮을 리 없잖아', 'claro que nem tudo está bem', ['괜찮다 = estar bem', 'Mesma estrutura de negação'])]),
 line('그래도 I know', 'Mesmo assim eu sei.', []),
 line('서툴게 I flow', 'Desajeitado eu fluo.', [
  e('서툴게', 'desajeitadamente', ['서툴다 = ser desajeitado', '-게 = modo'])]),
 line('저 까만 바람과 함께 날아', 'Voo com aquele vento negro.', [
  e('저 까만 바람과', 'com aquele vento negro', ['까맣다 = ser negro', '바람 = vento', '과 = com']),
  e('함께 날아', 'voo junto', ['날다 = voar', '아 forma informal'])])];
// Refrão — enlouquecer para não enlouquecer.
const chorus=[
 en('Hey na na na', 'Hey na na na.'),
 line('미치지 않으려면 미쳐야 해', 'Para não enlouquecer, preciso enlouquecer.', [
  e('미치지 않으려면', 'para não enlouquecer', ['미치다 = enlouquecer', '-지 않으려면 = para não']),
  e('미쳐야 해', 'preciso enlouquecer', ['-어야 하다 = precisar'])]),
 en('Hey na na na', 'Hey na na na.'),
 line('나를 다 던져 이 두 쪽 세상에', 'Jogo tudo de mim neste mundo de dois lados.', [
  e('나를 다 던져', 'jogo tudo de mim', ['던지다 = jogar', '져 forma informal']),
  e('이 두 쪽 세상에', 'neste mundo de dois lados', ['쪽 = lado', '세상 = mundo', '에 = em'])]),
 en('Hey na na na', 'Hey na na na.'),
 en("Can not hold me down cuz you know I am a fighter", "Não pode me segurar porque sou lutador."),
 line('제 발로 들어온 아름다운 감옥', 'Prisão bonita onde entrei com meus pés.', [
  e('제 발로', 'com meus próprios pés', ['제 = próprio', '발 = pé', '로 = com']),
  e('들어온', 'onde entrei', ['들다 = entrar', '-온 = relativo passado']),
  e('아름다운 감옥', 'prisão bonita', ['아름답다 = ser bonito', '감옥 = prisão'])]),
 line('Find me and I am gonna live with ya', 'Encontre-me e vou viver com você.', []),
 en('(Eh-oh)', '(Eh-oh).'),
 line('가져와 bring the pain oh yeah', 'Traga, traga a dor, oh yeah.', [
  e('가져와', 'traga', ['가져오다 = trazer', '와 forma informal'])]),
 en('(Eh-oh)', '(Eh-oh).'),
 line('올라타봐 bring the pain oh yeah', 'Suba e encare, traga a dor, oh yeah.', [
  e('올라타봐', 'suba e encare', ['올라타다 = subir', '-아 봐 = tente'])]),
 en('Rain be pouring', 'Chuva caindo.'),
 en('Sky keep falling', 'Céu desabando.'),
 en('Everyday oh na na na', 'Todo dia, oh na na na.'),
 en('(Eh-oh)', '(Eh-oh).'),
 line('가져와 bring the pain oh yeah', 'Traga, traga a dor, oh yeah.', [
  e('가져와', 'traga', ['Reprise do chamado'])])];
// Verso 2 — dor que vira força.
const verse=[
 en('Bring the pain', 'Traga a dor.'),
 line('모두 내 피와 살이 되겠지', 'Tudo vai virar meu sangue e carne.', [
  e('모두', 'tudo', ['Advérbio de totalidade']),
  e('내 피와 살이', 'meu sangue e carne (sujeito)', ['피 = sangue', '살 = carne', '와 = e', '이 = sujeito']),
  e('되겠지', 'vai virar', ['되다 = tornar-se', '-겠- = futuro', '-지 = né'])]),
 en('Bring the pain', 'Traga a dor.'),
 line('No fear, 방법을 알겠으니', 'Sem medo, pois já sei o jeito.', [
  e('방법을', 'o jeito (objeto)', ['방법 = jeito', '을 = objeto']),
  e('알겠으니', 'pois já sei', ['알다 = saber', '-겠- = já', '-으니 = pois'])]),
 line('작은 것에 breathe', 'Respire nas pequenas coisas.', [
  e('작은 것에', 'nas pequenas coisas', ['작다 = ser pequeno', '것 = coisa', '에 = em'])]),
 line('그건 어둠 속 내 산소와 빛', 'Isso é meu oxigênio e luz na escuridão.', [
  e('그건', 'isso (tópico)', ['Contração de 그것은']),
  e('어둠 속', 'dentro da escuridão', ['어둠 = escuridão', '속 = dentro']),
  e('내 산소와 빛', 'meu oxigênio e luz', ['산소 = oxigênio', '빛 = luz'])]),
 line('내가 나이게 하는 것들의 힘', 'A força do que me faz ser eu.', [
  e('내가 나이게 하는', 'que me faz ser eu', ['-게 하다 = fazer ficar', '-는 = relativo']),
  e('것들의 힘', 'a força das coisas', ['들 = plural', '힘 = força'])]),
 line('넘어져도 다시 일어나 scream', 'Mesmo caindo, levanto de novo, grito.', [
  e('넘어져도', 'mesmo caindo', ['넘어지다 = cair', '-어도 = mesmo que']),
  e('다시 일어나', 'levanto de novo', ['다시 = de novo', '일어나다 = levantar'])]),
 line('넘어져도 다시 일어나 scream', 'Mesmo caindo, levanto de novo, grito.', [
  e('넘어져도 다시 일어나', 'mesmo caindo, levanto de novo', ['Reprise da queda e volta'])]),
 line('언제나 우린 그랬으니', 'Pois sempre fomos assim.', [
  e('언제나', 'sempre', ['Advérbio de tempo']),
  e('우린 그랬으니', 'pois fomos assim', ['그렇다 = ser assim', '-었- = passado', '-으니 = pois'])]),
 line('설령 내 무릎이 땅에 닿을지언정', 'Ainda que meus joelhos toquem o chão.', [
  e('설령', 'ainda que', ['Conjunção de concessão']),
  e('내 무릎이 땅에 닿을지언정', 'mesmo que meus joelhos toquem o chão', ['무릎 = joelho', '닿다 = tocar', '-지언정 = ainda que'])]),
 line('파묻히지 않는 이상', 'Enquanto não ficar enterrado.', [
  e('파묻히지 않는 이상', 'enquanto não ficar enterrado', ['파묻히다 = ser enterrado', '-는 이상 = enquanto'])]),
 line('그저 그런 해프닝쯤 될 거란 걸', 'Vai ser só um incidente qualquer.', [
  e('그저 그런', 'só qualquer', ['그저 = apenas']),
  e('해프닝쯤 될 거란 걸', 'vai ser só um incidente', ['쯤 = cerca de', '-ㄹ 거다 = futuro', '걸 contrai 것을'])]),
 en('Win no matter what', 'Vença a qualquer custo.'),
 en('Win no matter what', 'Vença a qualquer custo.'),
 en('Win no matter what', 'Vença a qualquer custo.'),
 line('네가 뭐라던 누가 뭐라던', 'Diga você o que disser, diga quem disser.', [
  e('네가 뭐라던', 'diga você o que disser', ['뭐라 = algo', '-던 = seja']),
  e('누가 뭐라던', 'diga quem disser', ['누구 = quem', 'Mesma concessão'])]),
 en("I do not give a uhh", "Não dou a mínima."),
 en("I do not give a uhh", "Não dou a mínima."),
 en("I do not give a uhh", "Não dou a mínima.")];
// Ponte — onde há dor, há fôlego.
const bridge=[
 line('나의 고통이 있는 곳에', 'Onde está minha dor.', [
  e('나의 고통이', 'minha dor (sujeito)', ['고통 = dor, sofrimento', '이 = sujeito']),
  e('있는 곳에', 'no lugar onde há', ['있다 = haver', '곳 = lugar', '에 = em'])]),
 line('내가 숨 쉬게 하소서', 'Deixe-me respirar.', [
  e('내가', 'eu (sujeito)', ['나 + 가']),
  e('숨 쉬게 하소서', 'deixe respirar', ['숨 쉬다 = respirar', '-게 하다 = fazer', '-소서 = pedido formal'])]),
 en("My everything", "Meu tudo."),
 en("My blood and tears", "Meu sangue e lágrimas."),
 en("Got no fears", "Sem medos."),
 en("I am singing ohhhhh", "Estou cantando."),
 en("Oh I am taking over", "Oh, estou assumindo."),
 en("You should know yeah", "Você devia saber."),
 en("Can not hold me down cuz you know I am a fighter", "Não pode me segurar porque sou lutador."),
 line('깜깜한 심연 속 기꺼이 잠겨', 'Mergulho de bom grado no abismo escuro.', [
  e('깜깜한 심연 속', 'dentro do abismo escuro', ['깜깜하다 = ser escuro', '심연 = abismo', '속 = dentro']),
  e('기꺼이 잠겨', 'mergulho de bom grado', ['기꺼이 = de bom grado', '잠기다 = mergulhar'])]),
 line("Find me and I am gonna bleed with ya", "Encontre-me e vou sangrar com você.", []),
 en('(Eh-oh)', '(Eh-oh).'),
 line('가져와 bring the pain oh yeah', 'Traga, traga a dor, oh yeah.', [
  e('가져와', 'traga', ['Reprise do chamado'])]),
 en('(Eh-oh)', '(Eh-oh).'),
 line('올라타봐 bring the pain oh yeah', 'Suba e encare, traga a dor, oh yeah.', [
  e('올라타봐', 'suba e encare', ['Reprise do convite'])]),
 en('All that I know', 'Tudo que sei.'),
 en("Is just going on and on and on and on", "É só continuar sem parar."),
 en('(Eh-oh)', '(Eh-oh).'),
 line('가져와 bring the pain oh yeah', 'Traga, traga a dor, oh yeah.', [
  e('가져와', 'traga', ['Fecho da música'])]),
 line("Find me and I am gonna bleed with ya", "Encontre-me e vou sangrar com você.", [])];
export const onSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Refrão',lines:chorus},
 {title:'Verso 2',lines:verse},
 {title:'Refrão',lines:chorus},
 {title:'Ponte',lines:bridge},
 {title:'Refrão',lines:chorus}];
export const onVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'맞추다',pt:'ajustar'},
  {ko:'떼다',pt:'dar (passo), soltar'},
  {ko:'크다',pt:'ser grande, crescer'},
  {ko:'눈을 뜨다',pt:'abrir os olhos'},
  {ko:'일어나다',pt:'levantar-se'},
  {ko:'휘청이다',pt:'balançar-se'},
  {ko:'닮다',pt:'parecer-se'},
  {ko:'흔들리다',pt:'balançar-se (intransitivo)'},
  {ko:'두렵다',pt:'ter medo'},
  {ko:'괜찮다',pt:'estar bem'},
  {ko:'날다',pt:'voar'},
  {ko:'미치다',pt:'enlouquecer'},
  {ko:'던지다',pt:'jogar'},
  {ko:'들다',pt:'entrar'},
  {ko:'아름답다',pt:'ser bonito (descritivo)'},
  {ko:'가져오다',pt:'trazer'},
  {ko:'올라타다',pt:'subir, montar'},
  {ko:'되다',pt:'tornar-se'},
  {ko:'알다',pt:'saber'},
  {ko:'넘어지다',pt:'cair'},
  {ko:'그렇다',pt:'ser assim'},
  {ko:'닿다',pt:'tocar, alcançar'},
  {ko:'파묻히다',pt:'ser enterrado'},
  {ko:'있다',pt:'haver, existir'},
  {ko:'숨 쉬다',pt:'respirar'},
  {ko:'잠기다',pt:'mergulhar, afundar'},
  {ko:'깜깜하다',pt:'ser escuro (descritivo)'}],
 nouns:[
  {ko:'장단',pt:'ritmo'},
  {ko:'발자국',pt:'passo, pegada'},
  {ko:'잠',pt:'sono'},
  {ko:'눈',pt:'olho'},
  {ko:'서울',pt:'Seul'},
  {ko:'몸',pt:'corpo'},
  {ko:'그림자',pt:'sombra'},
  {ko:'발끝',pt:'ponta do pé'},
  {ko:'바람',pt:'vento'},
  {ko:'쪽',pt:'lado'},
  {ko:'세상',pt:'mundo'},
  {ko:'발',pt:'pé'},
  {ko:'감옥',pt:'prisão'},
  {ko:'피',pt:'sangue'},
  {ko:'살',pt:'carne'},
  {ko:'방법',pt:'jeito, método'},
  {ko:'것',pt:'coisa'},
  {ko:'어둠',pt:'escuridão'},
  {ko:'속',pt:'interior'},
  {ko:'산소',pt:'oxigênio'},
  {ko:'빛',pt:'luz'},
  {ko:'힘',pt:'força'},
  {ko:'무릎',pt:'joelho'},
  {ko:'땅',pt:'terra, chão'},
  {ko:'고통',pt:'dor, sofrimento'},
  {ko:'곳',pt:'lugar'},
  {ko:'숨',pt:'respiração'},
  {ko:'심연',pt:'abismo'}]};