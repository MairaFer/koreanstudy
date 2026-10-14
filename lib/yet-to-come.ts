// Yet To Come — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — o melhor ainda vem.
const opening=[
 en('Was it honestly the best', 'Foi honestamente o melhor?'),
 en('Because I just wanna see the next', 'Porque só quero ver o próximo.'),
 line('부지런히 지나온', 'Que passei com dedicação.', [
  e('부지런히', 'com dedicação', ['부지런하다 = ser diligente', '히 = modo']),
  e('지나온', 'que passei', ['지나다 = passar', '온 = relativo de 오다'])]),
 line('어제들 속에 참 아름답게', 'Dentro dos ontens, de modo tão bonito.', [
  e('어제들 속에', 'dentro dos ontens', ['어제 = ontem', '들 = plural', '속 = dentro', '에 = em']),
  e('참 아름답게', 'de modo tão bonito', ['참 = tão', '아름답다 = ser bonito', '게 = modo'])]),
 en('Yeah, the past was honestly the best', 'É, o passado foi honestamente o melhor.'),
 en('But my best is what comes next', 'Mas meu melhor é o que vem a seguir.'),
 en('I am not playing, nah, for sure', 'Não estou brincando, não, com certeza.'),
 line('그날을 향해 숨이 벅차게', 'Em direção àquele dia, até sem fôlego.', [
  e('그날을 향해', 'em direção àquele dia', ['날 = dia', '을 = objeto', '향하다 = dirigir-se']),
  e('숨이 벅차게', 'até sem fôlego', ['숨 = fôlego', '벅차다 = ser intenso', '게 = a ponto de'])]),
 en('You and I, best moment is yet to come', 'Você e eu, o melhor momento ainda vem.'),
 en('Moment is yet to come, yeah', 'O momento ainda vem, é.')];
// Verso 1 — o peso de ser chamado de melhor.
const verse=[
 line('다들 언제부턴가', 'Todos, desde quando.', [
  e('다들', 'todos', ['다 = tudo', '들 = plural de pessoas']),
  e('언제부턴가', 'desde quando', ['언제 = quando', '부터 = desde', 'ㄴ가 = será'])]),
 line('말하네 우릴 최고라고', 'Dizem que somos os melhores.', [
  e('말하네', 'dizem', ['말하다 = dizer', '네 = constatação']),
  e('우릴 최고라고', 'que somos os melhores', ['우리 = nós', '를 = objeto', '최고 = melhor', '라고 = que'])]),
 line('온통 알 수 없는 names', 'Só nomes desconhecidos por tudo.', [
  e('온통', 'por tudo', ['Advérbio de totalidade']),
  e('알 수 없는', 'desconhecidos', ['알다 = saber', '수 없다 = não conseguir'])]),
 line('이젠 무겁기만 해', 'Agora só pesa.', [
  e('이젠', 'agora', ['Contração de 이제는']),
  e('무겁기만 해', 'só pesa', ['무겁다 = ser pesado', '기만 = só', '해 = faz'])]),
 line('노래가 좋았다고', 'Que a música era boa.', [
  e('노래가 좋았다고', 'que a música era boa', ['노래 = música', '좋다 = ser bom', '었다고 = que era'])]),
 line('그저 달릴 뿐이라고', 'Que só corri.', [
  e('그저', 'apenas', ['Advérbio de limitação']),
  e('달릴 뿐이라고', 'que só corri', ['달리다 = correr', '뿐 = apenas', '라고 = que'])]),
 en('Promise that we will keep on coming back for more', 'Prometo que vamos voltar por mais.'),
 line('너의 마음속 깊은 어딘가', 'Em algum lugar fundo do teu coração.', [
  e('너의 마음속', 'dentro do teu coração', ['마음 = coração', '속 = dentro']),
  e('깊은 어딘가', 'em algum lugar fundo', ['깊다 = ser fundo', '어딘가 = em algum lugar'])]),
 line('여전한 소년이 있어', 'Há um menino igual a antes.', [
  e('여전한', 'igual a antes', ['여전하다 = continuar igual']),
  e('소년이 있어', 'há um menino', ['소년 = menino', '있다 = haver'])]),
 en('My moment is yet to come', 'Meu momento ainda vem.'),
 en('Yet to come', 'Ainda vem.'),
 line('(Uh 당신은 꿈꾸는가, 그 길의 끝은 무엇일까?)', '(Você sonha, qual é o fim desse caminho?)', [
  e('당신은 꿈꾸는가', 'você sonha', ['당신 = você', '꿈꾸다 = sonhar', '는가 = pergunta']),
  e('그 길의 끝은 무엇일까?', 'qual é o fim desse caminho', ['길 = caminho', '끝 = fim', '무엇 = o quê', '일까 = será'])]),
 en('Moment is yet to come, yeah', 'O momento ainda vem, é.'),
 line('(Uh 모두가 숨죽인 밤, 우린 발을 멈추지 않아)', '(Na noite em que todos prendem o fôlego, não paramos os pés.)', [
  e('모두가 숨죽인 밤', 'na noite em que todos prendem o fôlego', ['모두 = todos', '숨죽이다 = prender o fôlego', '밤 = noite']),
  e('우린 발을 멈추지 않아', 'não paramos os pés', ['발 = pé', '멈추다 = parar', '지 않다 = não'])]),
 en('Yet to come', 'Ainda vem.'),
 en("(Uh, we gonna touch the sky, before the day we die)", "Vamos tocar o céu antes de morrer."),
 en('Moment is yet to come, yeah', 'O momento ainda vem, é.'),
 line('(Uh 자 이제 시작이야 the best yet to come)', '(Agora começa, o melhor ainda vem.)', [
  e('자 이제 시작이야', 'agora começa', ['이제 = agora', '시작 = começo', '이야 = é'])])];
// Rap — música boa, capítulo novo.
const rap=[
 line('언젠가부터 붙은 불편한 수식어', 'Desde quando grudou esse rótulo estranho.', [
  e('언젠가부터', 'desde quando', ['언젠가 = em algum momento', '부터 = desde']),
  e('붙은 불편한 수식어', 'rótulo estranho grudado', ['붙다 = grudar', '불편하다 = ser estranho', '수식어 = rótulo'])]),
 line('최고란 말은 아직까지 낯간지러워', 'A palavra melhor ainda me envergonha.', [
  e('최고란 말은', 'a palavra melhor (tópico)', ['최고 = melhor', '란 = chamado', '말 = palavra']),
  e('아직까지 낯간지러워', 'ainda me envergonha', ['낯간지럽다 = dar vergonha', '워 forma informal'])]),
 line('난, 난 말야 걍 음악이 좋은 걸', 'Eu, eu só gosto de música.', [
  e('난 말야', 'eu, eu', ['Reprise enfática de 나는']),
  e('걍 음악이 좋은 걸', 'só gosto de música', ['걍 = só, forma de 그냥', '좋다 = gostar', '걸 contrai 것을'])]),
 line('여전히 그때와 다른 게 별로 없는걸', 'Ainda não há quase nada diferente de antes.', [
  e('여전히', 'ainda', ['Advérbio de continuidade']),
  e('그때와 다른 게', 'o que é diferente de antes', ['다르다 = ser diferente', '게 contrai 것이']),
  e('별로 없는걸', 'quase não há', ['별로 = quase não', '없다 = não haver'])]),
 line('아마 다른 게 별로 없다면', 'Se talvez quase nada mudou.', [
  e('아마', 'talvez', ['Advérbio de dúvida']),
  e('다른 게 별로 없다면', 'se quase nada mudou', ['-다면 = se'])]),
 en("You will say it is all a lie, yeah", "Você dirá que é mentira."),
 line('난 변화는 많았지만', 'Mudei muito, mas.', [
  e('난', 'eu (tópico)', ['Contração de 나는']),
  e('변화는 많았지만', 'mudança foi muita, mas', ['변화 = mudança', '많다 = ser muito', '지만 = mas'])]),
 line('변함은 없었다 해', 'Digo que não mudei na essência.', [
  e('변함은 없었다', 'não mudou na essência', ['변함 = mudança essencial', '없다 = não haver']),
  e('해', 'digo', ['하다 = dizer', 'Forma curta de 해요'])]),
 en('A new chapter', 'Um capítulo novo.'),
 line('매 순간이 새로운 최선', 'Cada instante é um novo melhor.', [
  e('매 순간이', 'cada instante (sujeito)', ['매 = cada', '순간 = instante', '이 = sujeito']),
  e('새로운 최선', 'um novo melhor', ['새롭다 = ser novo', '최선 = melhor'])]),
 line('지금 난 마치 열세 살', 'Agora sou como aos treze.', [
  e('지금', 'agora', ['Tempo presente']),
  e('난 마치 열세 살', 'sou como aos treze', ['마치 = como', '열세 살 = treze anos'])]),
 line('그때의 나처럼 뱉어 huh', 'Cuspo como eu de antes, huh.', [
  e('그때의 나처럼', 'como eu de antes', ['처럼 = como']),
  e('뱉어 huh', 'cuspo, huh', ['뱉다 = cuspir', 'Interjeição'])]),
 line('아직도 배울 게 많고', 'Ainda há muito a aprender.', [
  e('아직도', 'ainda', ['아직 = ainda', '도 = também']),
  e('배울 게 많고', 'há muito a aprender', ['배우다 = aprender', '많다 = ser muito', '고 = e'])]),
 line('나의 인생 채울 게 많어', 'Há muito para encher minha vida.', [
  e('나의 인생', 'minha vida', ['인생 = vida']),
  e('채울 게 많어', 'há muito a encher', ['채우다 = encher', '많어 forma de 많아'])]),
 line('그 이유를 물어본다면', 'Se perguntarem o motivo.', [
  e('그 이유를', 'o motivo (objeto)', ['이유 = motivo', '를 = objeto']),
  e('물어본다면', 'se perguntarem', ['물어보다 = perguntar', '다면 = se'])]),
 line('내 심장이 말하잖어', 'Meu coração é quem diz.', [
  e('내 심장이', 'meu coração (sujeito)', ['심장 = coração', '이 = sujeito']),
  e('말하잖어', 'é quem diz', ['말하다 = dizer', '잖아 = como sabe'])]),
 en("We are not about it, this world expectations", "Não somos sobre as expectativas do mundo."),
 en("We are not about it, the standard of best", "Não somos sobre o padrão de melhor."),
 line('왕관과 꽃, 수많은 트로피', 'Coroa e flores, tantos troféus.', [
  e('왕관과 꽃', 'coroa e flores', ['왕관 = coroa', '꽃 = flor', '과 = e']),
  e('수많은 트로피', 'tantos troféus', ['수많다 = ser numeroso'])]),
 en("(We are not about it)", "(Não somos sobre isso.)"),
 en("Dream and hope and going forward", "Sonho e esperança e seguir em frente."),
 en("(We so about it)", "(Somos sobre isso.)"),
 line('긴긴 원을 돌아 결국 또 제자리', 'Após longa volta, de volta ao início.', [
  e('긴긴 원을 돌아', 'dando longa volta', ['기다 = ser longo', '원 = círculo', '돌다 = girar']),
  e('결국 또 제자리', 'no fim de novo ao início', ['결국 = no fim', '제자리 = lugar original'])]),
 en('Back to one', 'De volta ao um.'),
 line('So was it honestly the best', 'Então foi honestamente o melhor?', []),
 en("Because I just wanna see the next (because I just wanna see the next)", "Porque só quero ver o próximo."),
 line('눈부시게 지나온', 'Que passei deslumbrante.', [
  e('눈부시게', 'deslumbrante', ['눈부시다 = ser deslumbrante', '게 = modo']),
  e('지나온', 'que passei', ['지나다 = passar'])]),
 line('기억들 속에 참 아름답게', 'Dentro das memórias, tão bonito.', [
  e('기억들 속에', 'dentro das memórias', ['기억 = memória', '들 = plural', '속 = dentro']),
  e('참 아름답게', 'tão bonito', ['Reprise da beleza'])]),
 en('Yeah, the past was honestly the best (the best)', 'É, o passado foi o melhor.'),
 en('But my best is what comes next (but my best is what comes next)', 'Mas meu melhor é o que vem.'),
 en("We will be singing till the morn", "Vamos cantar até de manhã."),
 line('그날을 향해 더 우리답게', 'Em direção àquele dia, mais como nós.', [
  e('그날을 향해', 'em direção àquele dia', ['Reprise da direção']),
  e('더 우리답게', 'mais como nós', ['우리답다 = ser como nós', '게 = modo'])]),
 en('You and I, best moment is yet to come', 'Você e eu, o melhor momento ainda vem.')];
export const ytcSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Verso 1',lines:verse},
 {title:'Rap',lines:rap},
 {title:'Verso 1',lines:verse},
 {title:'Final',lines:rap}];
export const ytcVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'지나다',pt:'passar'},
  {ko:'향하다',pt:'dirigir-se'},
  {ko:'벅차다',pt:'ser intenso, transbordar'},
  {ko:'말하다',pt:'dizer'},
  {ko:'알다',pt:'saber'},
  {ko:'무겁다',pt:'ser pesado (descritivo)'},
  {ko:'좋다',pt:'ser bom; gostar'},
  {ko:'달리다',pt:'correr'},
  {ko:'여전하다',pt:'continuar igual'},
  {ko:'있다',pt:'haver, existir'},
  {ko:'꿈꾸다',pt:'sonhar'},
  {ko:'숨죽이다',pt:'prender o fôlego'},
  {ko:'멈추다',pt:'parar'},
  {ko:'시작하다',pt:'começar'},
  {ko:'붙다',pt:'grudar'},
  {ko:'불편하다',pt:'ser estranho, desconfortável'},
  {ko:'낯간지럽다',pt:'dar vergonha'},
  {ko:'다르다',pt:'ser diferente (descritivo)'},
  {ko:'없다',pt:'não haver'},
  {ko:'많다',pt:'ser muito (descritivo)'},
  {ko:'하다',pt:'fazer; dizer'},
  {ko:'새롭다',pt:'ser novo (descritivo)'},
  {ko:'뱉다',pt:'cuspir'},
  {ko:'배우다',pt:'aprender'},
  {ko:'채우다',pt:'encher'},
  {ko:'물어보다',pt:'perguntar'},
  {ko:'돌다',pt:'girar'},
  {ko:'기다',pt:'ser longo (descritivo)'}],
 nouns:[
  {ko:'어제',pt:'ontem'},
  {ko:'속',pt:'interior'},
  {ko:'숨',pt:'fôlego'},
  {ko:'날',pt:'dia'},
  {ko:'언제',pt:'quando'},
  {ko:'최고',pt:'melhor'},
  {ko:'이름',pt:'nome'},
  {ko:'노래',pt:'música'},
  {ko:'마음',pt:'coração'},
  {ko:'소년',pt:'menino'},
  {ko:'당신',pt:'você (formal)'},
  {ko:'길',pt:'caminho'},
  {ko:'끝',pt:'fim'},
  {ko:'무엇',pt:'o quê'},
  {ko:'밤',pt:'noite'},
  {ko:'발',pt:'pé'},
  {ko:'시작',pt:'começo'},
  {ko:'수식어',pt:'rótulo, modificador'},
  {ko:'말',pt:'palavra'},
  {ko:'변화',pt:'mudança'},
  {ko:'변함',pt:'essência imutável'},
  {ko:'순간',pt:'instante'},
  {ko:'최선',pt:'melhor esforço'},
  {ko:'살',pt:'ano de idade'},
  {ko:'인생',pt:'vida'},
  {ko:'이유',pt:'motivo'},
  {ko:'심장',pt:'coração'},
  {ko:'왕관',pt:'coroa'},
  {ko:'꽃',pt:'flor'},
  {ko:'트로피',pt:'troféu'},
  {ko:'꿈',pt:'sonho'},
  {ko:'희망',pt:'esperança (hope na letra)'},
  {ko:'원',pt:'círculo'},
  {ko:'제자리',pt:'lugar original'},
  {ko:'기억',pt:'memória'}]};