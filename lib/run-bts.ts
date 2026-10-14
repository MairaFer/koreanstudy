// Run BTS — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — Nonhyeon e chamada da empresa.
const opening=[
 en('Yeah, yeah', 'É, é.'),
 en('Okay', 'Certo.'),
 en('Run, run (oh-oh-oh-oh)', 'Corra, corra.'),
 en('Okay, okay, let us go', 'Certo, certo, vamos.'),
 line('논현 100m 우리 자리', 'Nonhyeon 100m, nosso lugar.', [
  e('논현', 'Nonhyeon', ['Bairro em Seul, ponto de encontro']),
  e('100m', '100m em número na letra', ['Distância curta até o lugar']),
  e('우리 자리', 'nosso lugar', ['우리 = nós', '자리 = lugar'])]),
 line('학교 끝나면 회사 callin', 'Quando a escola acaba, a empresa ligando.', [
  e('학교 끝나면', 'quando a escola acaba', ['학교 = escola', '끝나다 = acabar', '면 = quando']),
  e('회사 callin', 'a empresa ligando', ['회사 = empresa', 'callin em inglês na letra'])]),
 line('아, 지금 바로 딱 갈게요', 'Ah, vou agora mesmo, na hora.', [
  e('아', 'ah', ['Interjeição de resposta rápida']),
  e('지금 바로 딱', 'agora mesmo, na hora', ['지금 = agora', '바로 = direto', '딱 = exatamente']),
  e('갈게요', 'vou', ['가다 = ir', 'ㄹ게요 = promessa educada'])]),
 line('제발 집엔 보내지 마세요', 'Por favor, não me mandem para casa.', [
  e('제발', 'por favor', ['Pedido insistente']),
  e('집엔', 'para casa', ['집 = casa', '엔 contrai 에는']),
  e('보내지 마세요', 'não mandem', ['보내다 = mandar', '지 마세요 = proibição educada'])]),
 en('I do not wanna go, go back again', 'Não quero ir, voltar de novo.'),
 en('Let us go, let us go, let us go', 'Vamos, vamos, vamos.'),
 line('10년을 wait, wait', '10 anos, espere, espere.', [
  e('10년을', '10 anos (objeto)', ['년 = ano', '을 = objeto']),
  e('wait, wait', 'espere, espere em inglês na letra', ['A espera longa'])]),
 en('We from the bottom', 'Viemos de baixo.'),
 en('I caught you bae, bae', 'Te peguei, querida.'),
 line('우린 좀 빠름', 'Nós somos meio rápidos.', [
  e('우린', 'nós (tópico)', ['Contração de 우리는']),
  e('좀 빠름', 'meio rápidos', ['좀 = um pouco', '빠르다 = ser rápido', 'ㅁ = nominalização'])]),
 en('We seven mate, mates', 'Nós sete colegas, colegas.'),
 line('잘 봐 we got us', 'Olhe bem, nós temos a nós.', [
  e('잘 봐', 'olhe bem', ['보다 = olhar', '봐 forma de pedido']),
  e('we got us', 'nós temos a nós em inglês na letra', ['União do grupo'])]),
 en('Tell me what you wanna', 'Diga o que você quer.'),
 en('Tell me what you wanna, whoa', 'Diga o que você quer, whoa.'),
 en('If we live fast, let us die young', 'Se vivemos rápido, morremos jovens.'),
 line('혼을 쏙 빼놓지', 'Tira o fôlego todo.', [
  e('혼을', 'o espírito (objeto)', ['혼 = espírito', '을 = objeto']),
  e('쏙 빼놓지', 'tira por completo', ['쏙 = por completo', '빼다 = tirar', '놓다 = deixar feito'])]),
 en('Make it move, left and right', 'Faça mexer, esquerda e direita.'),
 line('그게 누구든지', 'Quem quer que seja.', [
  e('그게', 'isso (sujeito)', ['그것 = isso', '게 contrai 것이']),
  e('누구든지', 'quem quer que seja', ['누구 = quem', '든지 = quer que seja'])]),
 en('Make it move, left and right', 'Faça mexer, esquerda e direita.'),
 line('두 맨발이 우리 가솔린 yeah, yeah', 'Os dois pés descalços são nossa gasolina.', [
  e('두 맨발이', 'os dois pés descalços (sujeito)', ['맨발 = pé descalço', '이 = sujeito']),
  e('우리 가솔린', 'nossa gasolina', ['가솔린 = gasolina, empréstimo'])]),
 line('이제 가자 are you ready? Yeah-yeah, yeah', 'Agora vamos, você está pronto.', [
  e('이제 가자', 'agora vamos', ['이제 = agora', '가자 = vamos']),
  e('are you ready', 'você está pronto em inglês na letra', ['Chamado final'])]),
 en('Okay, let us go', 'Certo, vamos.')];
// Refrão — correr à prova de balas.
const chorus=[
 en('Run bulletproof, run, yeah, you gotta run (run, run)', 'Corra à prova de balas, corra.'),
 en('Run bulletproof, run, yeah, you gotta run (run, run)', 'Corra à prova de balas, corra.'),
 en('Run bulletproof, run, yeah, you gotta run (run, run)', 'Corra à prova de balas, corra.'),
 en('Run bulletproof, run', 'Corra à prova de balas, corra.'),
 en('Okay, okay, let us go', 'Certo, certo, vamos.'),
 line('내가 맞았어, 논현동의 비가 새던 작업실에서', 'Acertei, no estúdio com goteira em Nonhyeon.', [
  e('내가 맞았어', 'eu acertei', ['맞다 = acertar', '었어 = passado']),
  e('논현동의', 'de Nonhyeon', ['동 = bairro', '의 = de']),
  e('비가 새던 작업실에서', 'no estúdio com goteira', ['비 = chuva', '새다 = vazar', '던 = lembrança', '작업실 = estúdio'])]),
 line('깡소주를 까며 신세타령이나 하며', 'Abrindo soju barato e lamentando a vida.', [
  e('깡소주를 까며', 'abrindo soju barato', ['깡소주 = soju barato', '까다 = abrir', '며 = e']),
  e('신세타령이나 하며', 'lamentando a vida', ['신세타령 = lamentação', '이나 = ou', '하며 = fazendo'])]),
 line('다짐했던 그 말, 성공하면 다들 뒤졌어', 'A promessa, se der certo todos se ferraram.', [
  e('다짐했던 그 말', 'a promessa feita', ['다짐하다 = prometer', '었던 = lembrança', '말 = palavra']),
  e('성공하면 다들 뒤졌어', 'se der certo todos se ferraram', ['성공 = sucesso', '하면 = se', '뒤지다 = ferrar-se'])]),
 line('방탄의 성공 이유? 나도 몰라, 그딴 게 어딨어', 'Motivo do sucesso? Nem sei, onde há isso.', [
  e('방탄의 성공 이유?', 'motivo do sucesso?', ['성공 = sucesso', '이유 = motivo']),
  e('나도 몰라', 'nem sei', ['모르다 = não saber', '라 forma informal']),
  e('그딴 게 어딨어', 'onde há isso', ['그딴 = esse aí', '게 contrai 것이', '어디 = onde'])]),
 line('우리들이 모두 새빠지게 달린 거지', 'Todos nós corremos até de madrugada.', [
  e('우리들이 모두', 'todos nós', ['우리 = nós', '들 = plural', '모두 = todos']),
  e('새빠지게 달린 거지', 'corremos até de madrugada', ['새빠지다 = virar a noite', '달리다 = correr', '거지 = né'])]),
 line('뭐라 하든 달린 거지', 'Diga o que disser, corremos.', [
  e('뭐라 하든', 'diga o que disser', ['뭐라 = algo', '하든 = quer que faça']),
  e('달린 거지', 'corremos, né', ['Reprise da corrida'])]),
 line('답은 여기 있어 (oh, yeah)', 'A resposta está aqui.', [
  e('답은 여기 있어', 'a resposta está aqui', ['답 = resposta', '여기 = aqui', '있다 = haver'])]),
 line('위로 got them (got them)', 'Consolo, consegui.', [
  e('위로', 'consolo', ['위 = cima, consolo']),
  e('got them', 'consegui em inglês na letra', ['Vitória'])]),
 line('지조 got them (got them)', 'Princípio, consegui.', [
  e('지조', 'princípio', ['Firmeza de caráter'])]),
 line('Good music, got them (got them)', 'Música boa, consegui.', []),
 line('Good team? Goddamn (oh, yeah)', 'Time bom? Caramba.', []),
 en('You said you hot (you hot)', 'Você disse que é quente.'),
 en('Oh man, you not (you not)', 'Cara, você não é.'),
 line('뛰는 놈 위에 나는 놈 위에', 'Acima de quem corre, quem voa.', [
  e('뛰는 놈 위에', 'acima de quem corre', ['뛰다 = correr', '놈 = cara', '위에 = acima']),
  e('나는 놈 위에', 'acima de quem voa', ['날다 = voar'])]),
 line('달리는 방탄 let us go', 'BTS correndo, vamos.', [
  e('달리는 방탄', 'BTS correndo', ['방탄 = BTS, à prova de balas', '는 = relativo'])])];
// Ponte — fé ignorante e nomes do grupo.
const bridge=[
 en('Skrt', 'Skrt.'),
 line('무식한 믿음으로', 'Com fé ignorante.', [
  e('무식한', 'ignorante', ['무식하다 = ser ignorante']),
  e('믿음으로', 'com fé', ['믿음 = fé', '으로 = com'])]),
 line('걍 달려, 두 다리로', 'Só corro, com duas pernas.', [
  e('걍 달려', 'só corro', ['걍 = só, forma de 그냥', '달리다 = correr', '려 forma de ordem']),
  e('두 다리로', 'com duas pernas', ['다리 = perna', '로 = com'])]),
 en('That is how we do it all (ayy, ayy)', 'É assim que fazemos tudo.'),
 line('그렇게 증명했어', 'Assim provamos.', [
  e('그렇게', 'assim', ['그렇다 = ser assim', '게 = modo']),
  e('증명했어', 'provamos', ['증명하다 = provar', '었어 = passado'])]),
 line('일곱 초원이들', 'Sete novatos do interior.', [
  e('일곱', 'sete', ['Numeral nativo']),
  e('초원이들', 'novatos do interior', ['초원 = campo', '이들 = plural'])]),
 line('백만 불짜리로 (ayy, ayy)', 'Que valem um milhão.', [
  e('백만 불짜리로', 'que valem um milhão', ['백만 = milhão', '불 = dólar', '짜리 = que vale', '로 = como'])]),
 line('지민이, 뷔, 고생s', 'Jimin, V, sofreram.', [
  e('지민이, 뷔', 'Jimin, V', ['Nomes dos membros']),
  e('고생s', 'sofrimentos', ['고생 = sofrimento', 's plural cantado'])]),
 line('남주니, 홉, 고생s', 'Namjoon, Hope, sofreram.', [
  e('고생s', 'sofrimentos', ['고생 = sofrimento','s plural cantado']),
  e('남주니, 홉', 'Namjoon, Hope', ['Apelidos dos membros'])]),
 line('윤기형, 찐, 고생s', 'Yoongi hyung, Jin, sofreram.', [
  e('고생s', 'sofrimentos', ['고생 = sofrimento','s plural cantado']),
  e('윤기형, 찐', 'Yoongi hyung, Jin', ['형 = irmão mais velho', '찐 apelido de Jin'])]),
 line('정국이, 모두 so thanks', 'Jungkook, todos, muito obrigado.', [
  e('정국이', 'Jungkook', ['막내 do grupo']),
  e('모두 so thanks', 'todos, muito obrigado', ['모두 = todos'])]),
 en('Get ready, get ready, get ready, get ready, get ready for more', 'Preparem-se mais e mais.'),
 en('Go get it, go get it, go get it, go get it, go get it, run run', 'Vão buscar, corram.'),
 en('Run beautiful, run, yeah, you gotta run (run)', 'Corra lindo, corra.'),
 en('Run beautiful, run, yeah, you gotta run (run)', 'Corra lindo, corra.'),
 en('Run beautiful, run, yeah, you gotta run (run)', 'Corra lindo, corra.'),
 en('Run beautiful, run', 'Corra lindo, corra.')];
export const runBtsSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Refrão',lines:chorus},
 {title:'Abertura',lines:opening},
 {title:'Refrão',lines:chorus},
 {title:'Ponte',lines:bridge},
 {title:'Refrão',lines:chorus}];
export const runBtsVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'끝나다',pt:'acabar'},
  {ko:'가다',pt:'ir'},
  {ko:'보내다',pt:'mandar'},
  {ko:'빠르다',pt:'ser rápido (descritivo)'},
  {ko:'보다',pt:'ver, olhar'},
  {ko:'빼다',pt:'tirar'},
  {ko:'놓다',pt:'deixar feito'},
  {ko:'맞다',pt:'acertar'},
  {ko:'새다',pt:'vazar'},
  {ko:'까다',pt:'abrir, descascar'},
  {ko:'다짐하다',pt:'prometer'},
  {ko:'뒤지다',pt:'ferrar-se (gíria)'},
  {ko:'모르다',pt:'não saber'},
  {ko:'달리다',pt:'correr'},
  {ko:'새빠지다',pt:'virar a noite'},
  {ko:'있다',pt:'haver, existir'},
  {ko:'뛰다',pt:'correr, pular'},
  {ko:'날다',pt:'voar'},
  {ko:'무식하다',pt:'ser ignorante (descritivo)'},
  {ko:'증명하다',pt:'provar'},
  {ko:'그렇다',pt:'ser assim'}],
 nouns:[
  {ko:'논현',pt:'Nonhyeon (bairro)'},
  {ko:'자리',pt:'lugar'},
  {ko:'학교',pt:'escola'},
  {ko:'회사',pt:'empresa'},
  {ko:'집',pt:'casa'},
  {ko:'년',pt:'ano'},
  {ko:'혼',pt:'espírito'},
  {ko:'맨발',pt:'pé descalço'},
  {ko:'가솔린',pt:'gasolina'},
  {ko:'동',pt:'bairro'},
  {ko:'비',pt:'chuva'},
  {ko:'작업실',pt:'estúdio'},
  {ko:'깡소주',pt:'soju barato'},
  {ko:'신세타령',pt:'lamentação'},
  {ko:'말',pt:'palavra'},
  {ko:'성공',pt:'sucesso'},
  {ko:'이유',pt:'motivo'},
  {ko:'답',pt:'resposta'},
  {ko:'위로',pt:'consolo'},
  {ko:'지조',pt:'princípio'},
  {ko:'놈',pt:'cara (informal)'},
  {ko:'위',pt:'cima'},
  {ko:'방탄',pt:'BTS; à prova de balas'},
  {ko:'믿음',pt:'fé'},
  {ko:'다리',pt:'perna'},
  {ko:'초원',pt:'campo'},
  {ko:'불',pt:'dólar; fogo'},
  {ko:'고생',pt:'sofrimento'},
  {ko:'형',pt:'irmão mais velho'},
  {ko:'모두',pt:'todos'}]};