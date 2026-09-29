// Letra fornecida pela usuária; repetições preservadas e análise contextual preparada.
import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,a:string,b:string):StudyEntry=>({term,meaning,notes:[a,b]});
const l=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const intro:StudyLine[]=Array.from({length:4},()=>({text:'You in danger',translation:'Você está em perigo.',english:true,entries:[]}));
const verse1=[
l('맨날 이런 식','Todo dia é desse jeito.',[
e('맨날','todo dia','Forma coloquial equivalente a 매일.','A repetição cotidiana transmite a frustração do narrador.'),e('이런 식','desse jeito','이런 = deste tipo; 식 = maneira, modo.','A frase omite o verbo: literalmente, todo dia, este jeito.')]),
l('너는 너 나는 나 너의 공식','Você é você, eu sou eu: essa é a sua fórmula.',[
e('너는 너','você é você','너 = você; 는 marca o tópico.','A cópula é omitida na sequência rítmica.'),e('나는 나','eu sou eu','나 = eu; 는 marca um tópico em contraste.','O paralelismo sugere que cada um vive separado.'),e('너의 공식','sua fórmula','의 marca posse; 공식 significa fórmula.','Fórmula é a metáfora para a regra de relacionamento atribuída à outra pessoa.')]),
l('핸드폰은 장식','O celular é só enfeite.',[
e('핸드폰은','o celular','핸드폰 é celular, empréstimo corrente no coreano.','은 estabelece o celular como tópico.'),e('장식','enfeite','Substantivo: decoração, ornamento.','A cópula foi omitida; sugere que o aparelho não é usado para responder.')]),
l("나 남친이 맞긴 하니? I'm sick",'Eu sou mesmo seu namorado? Estou farto.',[
e('나','eu','Pronome informal de primeira pessoa.','A partícula foi omitida na fala coloquial.'),e('남친이','namorado','남친 abrevia 남자 친구.','이 marca o sujeito da avaliação com 맞다.'),e('맞긴 하니','é mesmo?','맞다 = estar certo; -긴 하다 reduz -기는 하다 e põe a afirmação em questão.','-니 termina uma pergunta informal; o tom aqui é de incredulidade.')]),
l('왜 숙제처럼 표현들을 미뤄','Por que você adia as demonstrações de afeto como se fossem dever de casa?',[
e('왜','por quê','Advérbio interrogativo de causa.','Introduz uma cobrança direta.'),e('숙제처럼','como dever de casa','숙제 = tarefa escolar; 처럼 = como.','A comparação apresenta o afeto como uma obrigação adiada.'),e('표현들을','as demonstrações','표현 = expressão; 들 = plural; 을 = objeto.','No contexto, são manifestações de sentimento.'),e('미뤄','adia','미루다 + 어 → 미뤄.','Forma informal: deixar uma ação para depois.')]),
l('우리 무슨 Business? 아님 내가 싫어?','O que somos, algum negócio? Ou você não gosta de mim?',[
e('우리 무슨','nós, que tipo de','우리 = nós; 무슨 pergunta o tipo de algo.','O termo inglês completa a pergunta com o sentido de relação comercial.'),e('아님','ou então','Redução coloquial de 아니면.','Introduz uma explicação alternativa.'),e('내가 싫어','não gosta de mim?','내가 = 나 + 가; 싫다 = ser desagradável, não gostar.','Literalmente, eu sou desagradável para você? O experienciador fica implícito.')]),
l('덩 덩 디기 덩 덩','Deong, deong, digi, deong, deong — batida rítmica.',[
e('덩 덩 디기 덩 덩','sons da batida','Sílabas usadas como vocalização rítmica.','Não formam uma oração lexical; não há tradução literal palavra por palavra.')]),
l('좀 살가워져라 오늘도 또 주문을 빌어','Seja um pouco mais carinhosa; hoje, de novo, faço essa súplica como um feitiço.',[
e('좀','um pouco','Redução de 조금.','Pode atenuar um pedido, embora o tom permaneça insistente.'),e('살가워져라','torne-se mais afetuosa','살갑다 = ser caloroso; -아/어지다 indica mudança de estado.','살갑다 → 살가워지다; -어라 é uma ordem informal direta.'),e('오늘도 또','hoje também, de novo','오늘 = hoje; 도 = também; 또 = novamente.','Os dois marcadores reforçam a repetição da súplica.'),e('주문을 빌어','peço como quem recita um feitiço','주문 = fórmula mágica; 을 marca objeto; 빌다 = suplicar, desejar.','Combinação poética: a tradução contextual não apresenta isso como uma expressão fixa cotidiana.')])];
const verse2=[
l('우린 평행선','Somos linhas paralelas.',[
e('우린','nós','Contração de 우리는.','는 coloca o casal como tópico.'),e('평행선','linhas paralelas','평행 = paralelismo; 선 = linha.','Metáfora de duas pessoas que seguem lado a lado sem se encontrar.')]),
l('같은 곳을 보지만 넘 다르지','Olhamos para o mesmo lugar, mas somos tão diferentes.',[
e('같은','mesmo, igual','같다 + -은 modifica o substantivo seguinte.','Aqui descreve 곳, lugar.'),e('곳을','o lugar','곳 = lugar; 을 = objeto.','É o alvo do olhar.'),e('보지만','olhamos, mas','보다 = ver; -지만 = mas, embora.','Conecta uma semelhança inicial ao contraste seguinte.'),e('넘 다르지','somos tão diferentes','넘 é redução informal de 너무; 다르다 = ser diferente.','-지 dá tom de constatação ou de busca de concordância.')]),
l('난 너밖에 없는데','Eu só tenho você, mas...',[
e('난','eu','Contração de 나는.','O tópico destaca a situação do narrador.'),e('너밖에','ninguém além de você','너 = você; 밖에 com negação restringe a você somente.','Diferente do substantivo 밖, lado de fora, usado na próxima linha.'),e('없는데','não tenho, mas','없다 = não existir, não ter.','-는데 apresenta o contexto para uma queixa ou contraste.')]),
l('왜 너 밖에 있는 것만 같은지','Por que parece que estou sempre do lado de fora do seu mundo?',[
e('왜','por quê','Pergunta pela razão.','A dúvida é emocional, ligada à distância entre os dois.'),e('너 밖에','fora de você','밖 é o substantivo exterior; 에 marca posição.','O espaço separa 너 de 밖에: jogo de palavras com 너밖에 da linha anterior.'),e('있는 것만 같은지','por que só parece que estou','있다 + -는 것 nominaliza estar/existir; 만 = só.','것 같다 indica aparência; -는지 marca a dúvida deixada em suspenso.')]),
l('꽁하면 넌 물어 “삐쳤니?”','Quando fico emburrado, você pergunta: “Ficou magoado?”',[
e('꽁하면','quando fico fechado, emburrado','꽁하다 descreve guardar ressentimento ou ficar amuado.','-면 é condicional: se ou quando.'),e('넌 물어','você pergunta','넌 = 너는; 물어 vem de 묻다, perguntar.','Aqui há a alternância irregular ㄷ → ㄹ, diferente de 묻다, enterrar.'),e('삐쳤니','ficou ressentido?','삐치다 = amuar, ficar ofendido; -었- indica passado.','-니 é interrogativo informal, usado na citação da fala dela.')]),
l('날 삐치게 했던 적이나 있었니?','Alguma vez você sequer fez algo que me desse motivo para ficar magoado?',[
e('날','a mim','Contração de 나를.','Marca a pessoa afetada.'),e('삐치게 했던','que me fez ficar ressentido','-게 하다 é causativo: fazer alguém ficar de certo modo.','-던 retoma uma situação passada, modificando 적.'),e('적이나 있었니','houve sequer alguma vez?','적 = ocasião/experiência; 이나 enfatiza o mínimo: sequer uma.','있었니 pergunta pela existência passada; a ironia depende do contexto de indiferença, não de falta de sofrimento.')]),
l('넌 귀요미 난 지못미','Você é a fofinha; eu sou o coitado digno de pena.',[
e('넌 귀요미','você é a fofinha','넌 = 너는; 귀요미 é uma forma brincalhona para alguém fofo.','A cópula é omitida.'),e('난 지못미','eu sou o coitado','난 = 나는; 지못미 abrevia 지켜 주지 못해 미안해: desculpe por não ter conseguido proteger você.','Na gíria, pode expressar pena por alguém numa situação constrangedora; aqui a tradução é contextual.')]),
l('생기길 니가 더 사랑하는 기적이','Que aconteça o milagre de você me amar mais.',[
e('생기길','que aconteça','생기다 = surgir; -길 reduz -기를.','O desejo fica implícito: espero/desejo que aconteça.'),e('니가 더 사랑하는','de você amar mais','니가 é forma coloquial de 네가; 더 = mais; 사랑하다 = amar.','-는 transforma a ação em modificador do nome seguinte; o objeto me é implícito.'),e('기적이','o milagre','기적 = milagre; 이 = sujeito.','O sujeito aparece depois do verbo numa inversão poética.')])];
const pre=[
l('넌 내가 없는데 난 너로 가득해','Em você não há lugar para mim, mas eu estou cheio de você.',[
e('넌 내가 없는데','em você não há eu, mas','넌 = 너는; 내가 = 나 + 가; 없다 = não haver.','-는데 liga a ausência de reciprocidade ao contraste seguinte.'),e('난 너로 가득해','estou cheio de você','난 = 나는; 너로 indica aquilo que preenche.','가득하다 = estar cheio; 가득해 é a forma informal.')]),
l('미칠 것 같아 Whoa whoa','Acho que vou enlouquecer, whoa, whoa.',[
e('미칠 것 같아','parece que vou enlouquecer','미치다 = enlouquecer; -(으)ㄹ 것 같다 expressa suposição ou impressão.','Aqui é uma hipérbole de intensidade emocional, não uma avaliação clínica.')]),
l('근데 왜 이러는데 왜 바볼 만들어','Mas por que age assim? Por que me faz de bobo?',[
e('근데','mas, só que','Contração coloquial de 그런데.','Introduz a objeção do narrador.'),e('왜 이러는데','por que faz isso?','왜 = por quê; 이러다 = agir assim.','-는데 no fim da fala pede explicação com tom de cobrança.'),e('왜 바볼 만들어','por que me faz de bobo?','바볼 reduz 바보를: bobo + objeto; 만들다 = fazer.','O objeto me é inferido do contexto; 만들어 é informal.')]),
l('나 이제 경고해 헷갈리게 하지 마','Agora eu aviso: não me deixe confuso.',[
e('나 이제 경고해','eu aviso agora','나 = eu; 이제 = agora; 경고하다 = advertir.','경고해 é uma declaração informal.'),e('헷갈리게 하지 마','não me confunda','헷갈리다 = ficar confuso; -게 하다 = fazer ficar.','-지 마 proíbe a ação: não faça. O objeto me está implícito.')])];
const chorus=[
l('장난해 너? 도대체 내가 뭐야?','Você está brincando? Afinal, o que eu sou para você?',[
e('장난해 너','está brincando, você?','장난하다 = brincar, fazer graça; 너 = você.','A ordem verbo-pronome reforça a reação indignada.'),e('도대체','afinal, de uma vez por todas','Advérbio de ênfase em perguntas.','Expressa incompreensão ou irritação.'),e('내가 뭐야','o que eu sou?','내가 = 나 + 가; 뭐 = o quê; 야 é cópula informal.','A relação para você é inferida do contexto.')]),
l('만만해 Uh? 날 갖고 노는 거야?','Sou tão fácil de manipular? Você está brincando comigo?',[
e('만만해','sou fácil de lidar/manipular?','만만하다 descreve alguém ou algo considerado fácil de enfrentar.','Na pergunta, o narrador contesta estar sendo menosprezado.'),e('날 갖고','comigo','날 = 나를; 갖고 reduz 가지고, de 가지다.','Junto de 놀다, trata a pessoa como objeto de diversão.'),e('노는 거야','está brincando?','놀다 + -는 → 노는, com queda de ㄹ; 거 = 것.','-는 거야 pede confirmação/explicação em registro informal.')]),
l('너 지금 위험해 왜 나를 시험해?','Você está em perigo agora. Por que me põe à prova?',[
e('너 지금 위험해','você está em perigo agora','너 = você; 지금 = agora; 위험하다 = ser perigoso/estar em perigo.','O tom da letra é de advertência na discussão.'),e('왜 나를 시험해','por que me testa?','왜 = por quê; 나를 = eu como objeto; 시험하다 = testar.','Não é uma prova escolar literal: refere-se aos limites emocionais.')]),
l('왜 나를 시험해? 헷갈리게 하지 마','Por que me põe à prova? Não me deixe confuso.',[
e('왜 나를 시험해','por que me testa?','나 + 를 marca quem recebe a ação de 시험하다.','A pergunta repete a cobrança anterior.'),e('헷갈리게 하지 마','não me confunda','헷갈리다 + -게 하다 exprime causar confusão.','-지 마 é uma proibição informal; não significa uma previsão.')])];
const hurt=l('너 땜에 너무 아파','Por sua causa, sofro tanto.',[
e('너 땜에','por sua causa','땜에 reduz 때문에, marcador de causa.','너 identifica a pessoa à qual o sofrimento é atribuído.'),e('너무 아파','dói muito','너무 = muito/demais; 아프다 → 아파.','O contexto dá a dor um sentido emocional.')]);
const bad=l('너 내게 너무 나빠','Você é tão cruel comigo.',[
e('너 내게','você, para mim','너 = você; 내게 contrai 나에게.','에게 marca a pessoa a quem se dirige a atitude.'),e('너무 나빠','é tão ruim/cruel','너무 intensifica 나쁘다; 나쁘다 → 나빠, com queda de ㅡ.','Cruel é uma tradução contextual do julgamento emocional.')]);
const stop=l('헷갈리게 하지 마','Não me deixe confuso.',[e('헷갈리게','de modo a ficar confuso','헷갈리다 significa confundir-se.','-게 prepara o complemento de 하다 na construção causativa.'),e('하지 마','não faça','하다 = fazer; -지 마 é imperativo negativo informal.','Em conjunto, proíbe causar confusão.')]);
const post=[hurt,hurt,hurt,stop,bad,bad,bad,stop];
const verse3=[
l('연락 부재중 Unlock 수배 중','Contato ausente; desbloqueio, busca em andamento.',[
e('연락 부재중','sem contato, ausente','연락 = contato; 부재중 = ausente, também usado no aviso de chamada perdida.','A sequência imita termos da tela do telefone.'),e('수배 중','em busca','수배 é a procura policial por uma pessoa; 중 = em andamento.','Metáfora de investigar o paradeiro dela, em paralelo a 부재중.')]),
l('너란 여자 본심을 수색 중','Procurando a verdadeira intenção da mulher que é você.',[
e('너란 여자','a mulher que é você','너란 reduz 너라는; 여자 = mulher.','-라는 identifica ou caracteriza o substantivo seguinte.'),e('본심을','a verdadeira intenção','본심 = sentimento/intenção verdadeira; 을 = objeto.','É o alvo da busca figurativa.'),e('수색 중','em busca, investigando','수색 = busca minuciosa; 중 = no processo de.','A cópula é omitida no estilo telegráfico do rap.')]),
l('고작 보내 준 게 문자 두세 줄','Tudo o que você me mandou foram duas ou três linhas de mensagem.',[
e('고작','apenas, meramente','Advérbio que apresenta a quantidade como insuficiente.','Carrega decepção, além da ideia numérica de pouco.'),e('보내 준 게','o que me enviou','보내다 = enviar; -아/어 주다 = fazer para alguém.','준 modifica 것; 게 contrai 것이, o que como sujeito.'),e('문자 두세 줄','duas ou três linhas de texto','문자 = mensagem; 두세 = dois ou três.','줄 conta linhas de texto; não significa duas ou três mensagens.')]),
l('이게 내가 바랬던 연애 꿈?','É esse o sonho de romance que eu desejava?',[
e('이게','isto','Contração de 이것이.','이것 = isto; 이 marca o sujeito.'),e('내가 바랬던','que eu desejava','내가 = eu como sujeito; a letra traz 바랬던.','Para desejar, a forma padrão é 바랐던, de 바라다; preservamos a grafia enviada e distinguimos 바래다, desbotar.'),e('연애 꿈','sonho de romance','연애 = relacionamento amoroso; 꿈 = sonho.','A cópula interrogativa fica implícita no fragmento.')]),
l('파란만장 Love story 다 어디 갔나?','Para onde foi toda aquela história de amor cheia de reviravoltas?',[
e('파란만장','cheio de altos e baixos','Expressão sino-coreana para muitas vicissitudes.','Caracteriza a história amorosa esperada.'),e('다 어디 갔나','para onde foi tudo?','다 = tudo; 어디 = onde; 가다 + -았- → 갔-.','-나 dá tom interrogativo/reflexivo; a pergunta indica o desaparecimento da expectativa.')]),
l('Drama에 나온 주인공들 다 저리 가라','Protagonistas dos dramas, todos vocês podem sair de cena.',[
e('에 나온','que apareceram em','에 liga o termo inglês ao lugar da aparição; 나오다 = aparecer/sair.','나온 é o modificador passado que qualifica 주인공들.'),e('주인공들','os protagonistas','주인공 = personagem principal; 들 = plural.','O narrador compara sua situação aos dramas.'),e('다 저리 가라','todos, vão para lá','다 = todos; 저리 = naquela direção; 가라 = vá, imperativo direto.','A expressão pode sugerir que ele supera até os protagonistas no drama vivido.')]),
l('너 때문에 수백 번 쥐어 잡는 머리카락','Por sua causa, agarro os cabelos centenas de vezes.',[
e('너 때문에','por sua causa','때문에 apresenta a causa.','Forma completa correspondente a 땜에 do refrão.'),e('수백 번','centenas de vezes','수백 = várias centenas; 번 = contador de ocorrências.','Hipérbole que intensifica a frustração.'),e('쥐어 잡는','que agarro com força','쥐다 = apertar na mão; 잡다 = agarrar.','-는 modifica o substantivo seguinte; a sequência enfatiza o gesto.'),e('머리카락','cabelos','Substantivo para os fios de cabelo.','A linha é nominal; a tradução portuguesa explicita a ação implícita.')]),
l('너 담담 그저 당당 날 차 빵빵','Você, impassível, toda confiante, me dispensa: bi-bi!',[
e('너 담담','você, impassível','담담 evoca 담담하다, ser calmo/contido.','A terminação verbal foi omitida para manter o ritmo.'),e('그저 당당','simplesmente confiante','그저 = apenas, simplesmente; 당당 evoca 당당하다.','O paralelismo 담담/당당 cria efeito sonoro.'),e('날 차','me dispensa','날 = 나를; 차 vem de 차다, chutar, também dar um fora.','차 também significa carro como substantivo: o som seguinte cria um jogo de palavras.'),e('빵빵','bi-bi','Onomatopeia de buzina neste contexto.','Reforça o duplo sentido de 차 sem significar literalmente uma ação amorosa.')])];
const verse4=[
l('뭐니 뭐니 난 네게 뭐니?','O que, o que eu sou para você?',[
e('뭐니 뭐니','o que, o que é?','뭐 = o quê; -니 é pergunta informal com cópula reduzida.','A repetição dá insistência à pergunta.'),e('난 네게 뭐니','o que sou para você?','난 = 나는; 네게 = 너에게.','네게 significa para você, enquanto 내게 significa para mim.')]),
l('너보다 니 친구에게 전해 듣는 소식','Recebo notícias suas pelos seus amigos, mais do que por você.',[
e('너보다','mais do que de você','너 = você; 보다 estabelece comparação.','Aqui compara as fontes de informação, não a intensidade do afeto.'),e('니 친구에게','dos seus amigos','니 é forma coloquial de 네, seu; 친구 = amigo.','에게 marca a fonte humana da informação recebida.'),e('전해 듣는','que fico sabendo por intermédio de alguém','전하다 = transmitir; 듣다 = ouvir.','-는 modifica 소식 e destaca que a notícia chega indiretamente.'),e('소식','notícias','Informação sobre como alguém está ou o que ocorreu.','O plural português é natural, mas não há 들 na palavra coreana.')]),
l('원해 원해 Huh 너를 원해','Quero, quero, huh, quero você.',[
e('원해 원해','quero, quero','원하다 = querer; 원해 é informal.','A repetição enfatiza o desejo.'),e('너를 원해','quero você','너 + 를 marca o objeto.','원하다 recebe o objeto desejado; o sujeito eu fica implícito.')]),
l('너란 여잔 사기꾼 내 맘을 흔든 범인','A mulher que é você é uma golpista, a culpada por abalar meu coração.',[
e('너란 여잔','a mulher que é você','너란 = 너라는; 여잔 = 여자는.','는 estabelece o tópico de uma acusação figurada.'),e('사기꾼','golpista','사기 = fraude; 꾼 indica pessoa ligada à atividade.','Acusação metafórica do narrador, não uma descrição factual de crime.'),e('내 맘을','meu coração','내 = 나의; 맘 = 마음; 을 = objeto.','A forma reduzida combina com o registro informal.'),e('흔든 범인','a culpada que abalou','흔들다 + -ㄴ → 흔든; 범인 = autor de um crime, culpado.','O modificador passado liga a ação de abalar à pessoa acusada.')]),
l('불이 붙기 전부터 내 맘 다 쓰고','Antes mesmo de a chama acender, já gastei todo o meu coração.',[
e('불이 붙기 전부터','desde antes de a chama acender','불 = fogo; 이 = sujeito; 붙다 = pegar, acender.','-기 nominaliza; 전 = antes; 부터 marca o ponto de início.'),e('내 맘 다 쓰고','gastando todo o meu coração','내 = meu; 맘 = coração; 다 = tudo; 쓰다 = usar/gastar.','-고 conecta esta imagem ao esforço unilateral da linha seguinte.')]),
l('일방적인 구애들 해 봤자 헛수고','Por mais que eu tente conquistar você sozinho, é esforço em vão.',[
e('일방적인 구애들','tentativas unilaterais de conquista','일방적 = unilateral; 인 liga a qualidade ao nome; 구애 = cortejo.','들 marca a pluralidade dessas demonstrações.'),e('해 봤자','mesmo que eu tente','하다 + -아/어 보다 indica tentar fazer.','-아/어 봤자 apresenta uma tentativa como incapaz de mudar o resultado.'),e('헛수고','esforço em vão','헛- expressa inutilidade; 수고 = esforço/trabalho.','Resume a avaliação pessimista das tentativas.')]),
l('너에게 난 그저 연인이 아닌 우정이','Para você, talvez, em vez de sermos namorados, a amizade...',[
e('너에게 난 그저','para você, eu apenas','너에게 = para você; 난 = 나는; 그저 = apenas.','Abre uma interpretação da preferência dela.'),e('연인이 아닌','que não é de amantes','연인 = parceiro amoroso; 아니다 = não ser.','아닌 modifica o termo seguinte; a construção é elíptica e contrasta namoro e amizade.'),e('우정이','a amizade','우정 = amizade; 이 = sujeito.','A oração continua na linha seguinte, com 편했을지도 몰라.')]),
l("편했을지도 몰라 I'm a love loser",'...fosse mais confortável. Sou um perdedor no amor.',[
e('편했을지도 몰라','talvez fosse mais confortável','편하다 = ser confortável; -했- situa a avaliação no passado.','-(으)ㄹ지도 모르다 indica possibilidade incerta: talvez. Completa a frase sobre amizade da linha anterior.')])];
export const dangerSections=[
{title:'Abertura · Advertência',lines:intro},{title:'Verso 1 · Afeto adiado',lines:verse1},{title:'Verso 2 · Linhas paralelas',lines:verse2},
{title:'Pré-refrão · Falta de reciprocidade',lines:pre},{title:'Refrão',lines:chorus},{title:'Refrão · repetição',lines:chorus},{title:'Pós-refrão · Dor e confusão',lines:post},
{title:'Verso 3 · Em busca de uma resposta',lines:verse3},{title:'Verso 4 · Esforço unilateral',lines:verse4},{title:'Pré-refrão · retomada',lines:pre},
{title:'Refrão · retomada',lines:chorus},{title:'Refrão · repetição final',lines:chorus},{title:'Pós-refrão · final',lines:post}];
export const dangerVocabulary={verbs:[
{ko:'미루다',pt:'adiar'},{ko:'살갑다',pt:'ser afetuoso'},{ko:'빌다',pt:'suplicar, desejar'},{ko:'다르다',pt:'ser diferente'},{ko:'묻다',pt:'perguntar'},{ko:'삐치다',pt:'ficar amuado/ofendido'},{ko:'생기다',pt:'surgir'},{ko:'사랑하다',pt:'amar'},{ko:'가득하다',pt:'estar cheio'},{ko:'미치다',pt:'enlouquecer'},{ko:'경고하다',pt:'advertir'},{ko:'헷갈리다',pt:'ficar confuso'},{ko:'만만하다',pt:'ser fácil de enfrentar'},{ko:'놀다',pt:'brincar'},{ko:'위험하다',pt:'ser perigoso/estar em perigo'},{ko:'시험하다',pt:'testar'},{ko:'아프다',pt:'doer'},{ko:'나쁘다',pt:'ser ruim'},{ko:'보내다',pt:'enviar'},{ko:'바라다',pt:'desejar'},{ko:'쥐다',pt:'apertar na mão'},{ko:'잡다',pt:'agarrar'},{ko:'차다',pt:'chutar; dar um fora'},{ko:'전하다',pt:'transmitir'},{ko:'듣다',pt:'ouvir'},{ko:'원하다',pt:'querer'},{ko:'흔들다',pt:'abalar, sacudir'},{ko:'붙다',pt:'pegar, acender (fogo)'},{ko:'쓰다',pt:'usar, gastar'},{ko:'편하다',pt:'ser confortável'}
],nouns:[{ko:'공식',pt:'fórmula'},{ko:'핸드폰',pt:'celular'},{ko:'장식',pt:'enfeite'},{ko:'남친',pt:'namorado (abreviação)'},{ko:'숙제',pt:'dever de casa'},{ko:'표현',pt:'expressão, demonstração'},{ko:'주문',pt:'feitiço, fórmula mágica'},{ko:'평행선',pt:'linhas paralelas'},{ko:'기적',pt:'milagre'},{ko:'바보',pt:'bobo'},{ko:'연락',pt:'contato'},{ko:'본심',pt:'intenção verdadeira'},{ko:'문자',pt:'mensagem de texto'},{ko:'연애',pt:'relacionamento amoroso'},{ko:'꿈',pt:'sonho'},{ko:'주인공',pt:'protagonista'},{ko:'머리카락',pt:'cabelo'},{ko:'친구',pt:'amigo'},{ko:'소식',pt:'notícias'},{ko:'사기꾼',pt:'golpista'},{ko:'마음',pt:'coração, sentimento'},{ko:'범인',pt:'culpado, autor de crime'},{ko:'불',pt:'fogo'},{ko:'구애',pt:'cortejo'},{ko:'헛수고',pt:'esforço em vão'},{ko:'연인',pt:'parceiro amoroso'},{ko:'우정',pt:'amizade'}]};
