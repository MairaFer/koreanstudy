// Letra enviada pela usuária. Grafias suspeitas preservadas e identificadas nas notas.
import type {StudyLine} from './spring-day';
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const l=(text:string,translation:string,words:string):StudyLine=>({text,translation,entries:words.trim().split('\n').map(row=>{const [term,meaning,...notes]=row.split('|');return {term,meaning,notes};})});
const chorus=(first=false):StudyLine[]=>[
 l("I'm a born singer, 좀 늦어버린 고백, I swear",'Sou um cantor de nascença; uma confissão que acabou vindo um pouco tarde, eu juro.',`
좀|um pouco|Redução coloquial de 조금. Suaviza a avaliação de estar atrasado.
늦어버린|que acabou chegando tarde|늦다 + -어 버리다; 버린 modifica 고백. O auxiliar destaca que a situação se consumou e pode transmitir pesar; não é literalmente jogar fora.
고백|confissão; declaração íntima|Nome modificado por 늦어버린. A declaração é sobre a identidade de cantor, não necessariamente uma confissão amorosa.`),
 l('언제나 멀기만 했었던 신기루가 눈 앞에 있어 (여기 있어)','A miragem que sempre parecia tão distante está diante dos meus olhos (está aqui).',`
언제나|sempre|Advérbio de frequência que abrange o período lembrado.
멀기만|apenas distante|멀다 + nominalizador -기 + partícula 만. Na construção -기만 하다, enfatiza que a situação se restringia a estar longe.
했었던|que tinha sido|하다 recebe passado e -던 de recordação: 했었던. Completa 멀기만 했었던 e modifica 신기루, retomando uma condição anterior em contraste com o presente.
신기루가|a miragem (sujeito)|신기루 + 가. A miragem funciona como imagem de um sonho antes aparentemente inalcançável.
눈|olhos|Aqui compõe 눈앞, diante dos olhos. A letra separa 눈 앞, mas a grafia lexical de referência é 눈앞.
앞에|diante de|앞 + 에 localiza a miragem. Não é uma direção de movimento nesta frase.
있어|está; existe|Forma informal de 있다. Contrasta a presença atual com a distância passada.
여기|aqui|Advérbio de lugar repetido entre parênteses para reafirmar a presença.`),
 l("I'm a born singer, 어쩌면 이른 고백 (이른 고백)",'Sou um cantor de nascença; talvez uma confissão precoce (uma confissão precoce).',`
어쩌면|talvez|Advérbio de possibilidade; apresenta a avaliação como incerta.
이른|precoce; cedo|이르다, ser cedo, recebe -ㄴ para modificar 고백. Não é 잃은, perdido.
고백|confissão|A oposição entre 늦어버린 e 이른 cria uma tensão: a declaração pode parecer tardia e ainda assim prematura.`),
 l("그래도 너무 행복해, I'm good, whoa, whoa, yeah, yeah, yeah"+(first?' (SUGA)':''),'Mesmo assim, estou muito feliz; estou bem, whoa, whoa, yeah, yeah, yeah'+(first?' (SUGA).':'.'),`
그래도|mesmo assim|Conector que mantém a felicidade apesar da dúvida sobre o momento da confissão.
너무|muito; demais|Aqui intensifica uma emoção positiva; não exige uma leitura negativa de excesso.
행복해|estou feliz|행복하다 → 행복해, forma informal. O coreano não marca a pessoa no verbo; a primeira pessoa vem do contexto.`)
];
const verse1:StudyLine[]=[
 l('난생 처음 방탄이란 이름으로 선 무대','O palco em que subi pela primeira vez na vida com o nome Bangtan.',`
난생|na vida; desde que nasci|Com 처음 forma 난생처음, pela primeira vez na vida. A grafia de referência é junta.
처음|primeira vez|Marca a estreia nessa experiência, não necessariamente a primeira apresentação de toda a carreira.
방탄이란|chamado Bangtan|방탄 + (이)란, redução de (이)라고 하는. Modifica 이름.
이름으로|com o nome|이름 + 으로 indica a identidade ou denominação sob a qual se apresenta.
선|em que esteve de pé|서다 + -ㄴ → 선. Modifica 무대; subir/estar no palco é a tradução contextual.
무대|palco|O verso inteiro é um grupo nominal, sem verbo final explícito.`),
 l('삼년 전 첫 무대의 마음을 다시 검문해','Reexamino o que sentia no primeiro palco, três anos atrás.',`
삼년|três anos|삼 + 년. Em escrita usual, 삼 년; a letra enviada mantém as palavras juntas.
전|atrás; antes|삼 년 전 situa a lembrança no passado.
첫|primeiro|Determinante que modifica 무대, diferente do substantivo 처음.
무대의|do palco|무대 + 의 liga essa experiência ao estado emocional.
마음을|o coração; o sentimento (objeto)|마음 + 을, objeto de 검문하다. Aqui é o estado interior daquela estreia.
다시|de novo|Indica retorno à memória e reavaliação.
검문해|examino; interrogo|검문하다 costuma ser interrogar/inspecionar para verificar algo. Seu uso com 마음 é metafórico: submeter os próprios sentimentos a exame.`),
 l('여전히 대구 촌놈 랩퍼와 다를게 없었지','Eu continuava igual ao rapper do interior de Daegu.',`
여전히|ainda; como antes|Advérbio de continuidade.
대구|Daegu|Nome da cidade que qualifica a origem da pessoa descrita.
촌놈|cara do interior; caipira|Expressão informal e potencialmente depreciativa, aqui usada sobre si mesmo.
랩퍼와|com o rapper; em relação ao rapper|와 introduz o termo da comparação. A grafia padrão do empréstimo é 래퍼; 랩퍼 foi preservado da letra.
다를게|algo em que fosse diferente|Leitura contextual de 다를 게: 다르다 + -ㄹ + 게, contração de 것이. O espaço antes de 게 é necessário nessa construção.
없었지|não havia, né|없다 no passado com -지. 다를 게 없다 significa não haver diferença.`),
 l('But 아마추어란 단어 위에 프로란 단어를 덧 썼지','Mas escrevi “profissional” por cima da palavra “amador”.',`
아마추어란|chamado amador|아마추어 + 란 qualifica 단어: a palavra amador.
단어|palavra|Primeira ocorrência sem partícula, ligada à expressão 위에.
위에|por cima de|위 + 에 localiza a inscrição de uma palavra sobre a outra.
프로란|chamado profissional|프로 é redução de profissional; 란 introduz o nome pelo qual a palavra é chamada.
단어를|a palavra (objeto)|단어 + 를, objeto da ação de escrever por cima.
덧|por cima; adicionalmente|Na forma de referência 덧쓰다, 덧- é prefixo e fica junto ao verbo. A separação da letra foi preservada.
썼지|escrevi|쓰다 perde ㅡ diante de -었-: 썼다; -지 acrescenta constatação. 덧썼지 seria a grafia conjunta.`),
 l('그토록 원하던 무대 랩을 하며 춤 출때','No palco que eu tanto queria, enquanto faço rap e danço…',`
그토록|tanto; a tal ponto|Advérbio que intensifica o desejo lembrado.
원하던|que desejava|원하다 + -던 recorda uma vontade mantida no passado e modifica 무대.
무대|palco|O lugar da ação; a partícula locativa fica implícita na letra.
랩을|rap (objeto)|랩 + 을 na expressão 랩을 하다, fazer rap.
하며|fazendo; enquanto faz|하다 + -며 conecta ações simultâneas.
춤|dança|Integra 춤을 추다. A partícula 을 está omitida aqui.
출때|quando danço|Grafia de referência: 출 때, de 추다 + -ㄹ + 때. Não é uma só palavra na escrita padrão.`),
 l('아직 살아 있음을 느껴 피곤하고 고된 출퇴근','Sinto que ainda estou vivo; o trajeto cansativo e penoso de ir e voltar do trabalho…',`
아직|ainda|Marca a continuidade da experiência de se sentir vivo.
살아|vivo; vivendo|살다 + -아; em 살아 있다 apresenta o estado de estar vivo.
있음을|o fato de estar (objeto)|있다 + nominalizador -음 + 을. 살아 있음을 é o objeto de 느껴.
느껴|sinto|느끼다 + -어 → 느껴, forma informal.
피곤하고|cansativo e; estando cansado|피곤하다 + -고 coordena a descrição com 고된.
고된|árduo; penoso|고되다 + -ㄴ modifica 출퇴근.
출퇴근|ida e volta do trabalho|Substantivo que une os deslocamentos de entrada e saída. A frase continua no verso seguinte.`),
 l('따위는 견딜만해, 내 사람들이 지켜보니까','Coisas assim dá para suportar, porque as pessoas do meu lado estão assistindo.',`
따위는|quanto a coisas desse tipo|따위 relativiza a importância do desgaste; 는 marca tópico. Retoma 출퇴근 da linha anterior.
견딜만해|é suportável|견디다 + -ㄹ 만하다: merece/é possível suportar. A separação de referência é 견딜 만해.
내|meu; minha|Contração de 나의; modifica 사람들.
사람들이|as pessoas (sujeito)|사람 + 들 + 이. 내 사람들 sugere pessoas próximas ou apoiadores, sem identificar indivíduos.
지켜보니까|porque acompanham/observam|지켜보다 + -니까 dá a razão de conseguir suportar. Aqui é assistir com atenção, não apenas proteger.`),
 l('몸이 아파도 버틸만해, 함성들이 밀려 오니까','Mesmo com o corpo doendo, dá para aguentar, porque os gritos de apoio chegam como uma onda.',`
몸이|o corpo (sujeito)|몸 + 이; sujeito de 아프다.
아파도|mesmo que doa|아프다 + -아도 → 아파도. A concessão admite a dor sem impedir a resistência.
버틸만해|dá para aguentar|버티다 + -ㄹ 만하다; grafia de referência 버틸 만해. Expressa suportabilidade.
함성들이|os clamores/gritos (sujeito)|함성 + 들 + 이. Gritos de apoio é leitura contextual do público.
밀려|avançando em massa|Forma ligada a 밀리다; com 오다 descreve chegada em fluxo.
오니까|porque vêm|오다 + -니까. 밀려오다 é chegar em onda; a letra separa 밀려 오니까.`),
 l('데뷔 전후의 차의점 아이돌과 랩퍼 사이 경계에','A diferença entre antes e depois da estreia; na fronteira entre idol e rapper…',`
데뷔|estreia|Empréstimo usado para a entrada profissional na carreira.
전후의|de antes e depois|전후 + 의 modifica a palavra seguinte.
차의점|provavelmente: diferença|A grafia enviada não é a forma usual 차이점. A tradução adota essa leitura provável e não ensina 차의점 como vocabulário correto.
아이돌과|idol e|아이돌 + 과 coordena os dois papéis.
랩퍼|rapper|Grafia enviada; a forma padrão é 래퍼.
사이|entre|Situa a fronteira entre as duas identidades profissionais.
경계에|na fronteira|경계 + 에 localiza a experiência. A oração prossegue em 살아도.`),
 l('살아도 여전히 내 공책엔 라임이 차 있어','Mesmo vivendo ali, meu caderno continua cheio de rimas.',`
살아도|mesmo vivendo|살다 + -아도; a concessão retoma 경계에 do verso anterior.
여전히|ainda; como antes|A continuidade do rap é o ponto central do contraste.
내|meu|minha posse: contração de 나의.
공책엔|no caderno|공책 + 에는 → 공책엔. Localização com destaque de tópico.
라임이|as rimas (sujeito)|라임 + 이. Empréstimo de rhyme, usado no rap.
차|cheio; tendo enchido|차다 + -아 → 차; não é o substantivo carro ou chá nesta construção.
있어|estão; permanecem|차 있다 descreve o estado resultante de estar cheio.`),
 l('대기실과 무대 사이에선 펜을 들고 가사를 써','Entre o camarim e o palco, pego a caneta e escrevo letras.',`
대기실과|a sala de espera/o camarim e|대기실 + 과. Em shows, pode ser o espaço onde os artistas aguardam.
무대|palco|Segundo lugar da comparação espacial com 사이.
사이에선|no intervalo entre|사이 + 에서는 → 사이에선. Situa a ação entre esses espaços ou momentos.
펜을|a caneta (objeto)|펜 + 을, objeto de 들다.
들고|segurando e; pegando e|들다 + -고. A caneta é o instrumento que se pega para escrever.
가사를|letras de música (objeto)|가사 + 를. Não confundir com 가수, cantor.
써|escrevo|Forma informal de 쓰다; aqui é escrever, não usar um chapéu ou ser amargo.`),
 l('이런 내가 니들 눈에는 뭐가 달라졌어?','Para vocês, o que mudou em mim, que continuo assim?',`
이런|assim; deste tipo|Caracteriza o narrador pelos hábitos descritos nas linhas anteriores.
내가|eu (sujeito)|Forma de 나 + 가. O verso coloca o eu descrito como referência da pergunta.
니들|vocês (coloquial)|Forma informal e potencialmente agressiva, relacionada a 너희들. Não é tratamento educado.
눈에는|aos olhos de|눈 + 에 + 는. Expressa ponto de vista, não só localização física.
뭐가|o que (sujeito)|뭐 + 가; aquilo que teria mudado.
달라졌어|mudou; ficou diferente|다르다 → 달라지다, tornar-se diferente; passado informal 달라졌어. A entonação e o ponto de interrogação marcam a pergunta.`),
 l('Damn, shit, 난 여전해','Droga, porra, continuo o mesmo.',`난|eu (tópico)|Contração de 나는.
여전해|continuo igual|Forma informal de 여전하다, permanecer como antes. Não equivale a uma negação verbal.`),
 l('내가 변했다고? (What?) 가서 전해','Disseram que eu mudei? (O quê?) Vá lá e diga a eles.',`내가|eu (sujeito)|나 com 가 aparece como 내가.
변했다고|que mudei?|변하다 + passado -였- + -다고, citação indireta. A pergunta repete com surpresa uma afirmação atribuída aos outros.
가서|vá e; depois de ir|가다 + -아서. Conecta o deslocamento à ação de transmitir.
전해|transmita; diga|전하다 → 전해. Aqui é pedido/ordem informal para levar uma mensagem.`),
 l("변함없이 본질을 지켜, I'm still rapper, man",'Preservo minha essência sem mudar; continuo rapper, cara.',`변함없이|sem mudança|Advérbio que apresenta constância; não é uma forma conjugada de passado.
본질을|a essência (objeto)|본질 + 을, aquilo que se preserva.
지켜|preservo; mantenho|지키다 → 지켜. Com 본질, a leitura é manter a essência; o inglês reforça a declaração pessoal.`),
 l("삼년 전과 다름없이 랩하고 노래해, I'm out",'Faço rap e canto como três anos atrás; fui.',`삼년|três anos|Grafia de referência 삼 년; a contagem é a enviada na letra.
전과|com antes; em relação ao passado|전 + 과 introduz a comparação temporal.
다름없이|sem diferença|Advérbio: igual ao período anterior. Não quer dizer que nenhuma circunstância externa mudou.
랩하고|faço rap e|랩하다 + -고 conecta duas atividades.
노래해|canto|노래하다 → 노래해, forma informal declarativa neste contexto.`)
];
const verse2:StudyLine[]=[
 l('솔직해 두려웠었어 큰 소린 쳐놨는데 날 증명한다는 게','Sinceramente, eu tinha medo; tinha falado alto, mas provar quem eu era…',`
솔직해|seja honesto / é honesto; possível erro de transcrição|솔직해 vem de 솔직하다. Para o advérbio sinceramente, a forma esperada seria 솔직히; a tradução usa essa leitura provável, sem afirmar que 해 significa 히.
두려웠었어|eu tinha sentido medo|두렵다 tem alternância ㅂ: 두려워; a sequência de passado 두려웠었어 olha para o medo de antes.
큰|grande; alto|크다 + -ㄴ modifica 소리. Na expressão 큰소리치다, o sentido pode ser falar com grande confiança ou se gabar.
소린|quanto à fala/voz|Contração de 소리는. Em escrita lexical, 큰소리치다 costuma ser unido; a letra separa a expressão.
쳐놨는데|tinha falado com confiança, mas|치다 + -어 놓다 → 쳐 놓다 → 쳐놨다; -는데 fornece contexto ou contraste. A ação de falar alto já tinha sido feita.
날|a mim (objeto)|Contração de 나를, objeto da ação de provar.
증명한다는|o fato de provar|증명하다 + -ㄴ다는, forma que apresenta o conteúdo da ação e modifica 게. Não é passado.
게|o fato; a coisa (sujeito)|Contração de 것이. O verso deixa suspensa a ideia do que significava provar a si mesmo.`),
 l('펜과 책만 알던 애가 이제 세상을 놀래킨다는게','Um garoto que só conhecia caneta e livros agora surpreender o mundo…',`
펜과|a caneta e|펜 + 과 coordena os objetos conhecidos.
책만|só livros|책 + 만; no conjunto 펜과 책만, restringe a experiência a caneta e livros.
알던|que conhecia|알다 + -던 modifica 애, retomando uma situação habitual no passado.
애가|o garoto/a criança (sujeito)|애 é redução coloquial de 아이; 가 marca sujeito.
이제|agora|Marca a mudança em relação ao passado.
세상을|o mundo (objeto)|세상 + 을, alvo da surpresa.
놀래킨다는게|o fato de surpreender (grafia enviada)|A forma de referência é 놀라게 한다는 게 ou 놀래 준다는 게, conforme a intenção. 놀래키다 é frequente na fala, mas não deve ser apresentado como padrão; 게 fica separado. A tradução adota o sentido contextual de causar surpresa.`),
 l("I don't know, 세상의 기대치와 너무 비대칭 할까봐 두려웠어",'Não sei; eu tinha medo de ficar tão aquém das expectativas do mundo.',`
세상의|do mundo|세상 + 의 modifica 기대치.
기대치와|com as expectativas|기대치 é o nível esperado; 와 introduz comparação com esse nível.
너무|demais; muito|Intensifica o desequilíbrio temido.
비대칭|assimetria; desequilíbrio|Substantivo que contrasta dois lados desiguais. “Ficar aquém” é uma leitura contextual do medo, não o significado literal obrigatório de assimetria.
할까봐|por receio de que aconteça|Leitura de 할까 봐, com espaço. -(으)ㄹ까 봐 aqui exprime preocupação, não intenção de fazer algo. 비대칭 할 é uma formulação pouco usual; uma construção mais neutra seria 비대칭일까 봐.
두려웠어|tive medo|Passado informal de 두렵다. Explicita que a possibilidade anterior era motivo de receio.`),
 l('나를 믿어줬던 모든 사람들을 배신하게 될까 봐','Por medo de acabar traindo todas as pessoas que acreditaram em mim.',`
나를|em mim; a mim (objeto)|나 + 를, objeto de 믿다. O português exige “acreditar em”, mas a construção coreana usa objeto direto.
믿어줬던|que tinham acreditado por mim|믿다 + -어 주다 + passado/recordação -었던. O auxiliar 주다 mostra a confiança como apoio recebido.
모든|todas|Determinante que modifica 사람들.
사람들을|as pessoas (objeto)|사람 + 들 + 을, objeto de 배신하다.
배신하게|a trair|배신하다 + -게 inicia -게 되다: acabar numa situação ou passar a agir assim.
될까|se acabaria; será que se tornará|되다 + -ㄹ까. Com 봐, introduz a possibilidade temida.
봐|por receio|Forma de 보다 dentro de -(으)ㄹ까 봐. Não significa literalmente olhar neste conjunto.`),
 l('무건운 어께를 펴고 첫 무대에 올라 (올라)','Endireito os ombros pesados e subo ao primeiro palco (subo).',`
무건운|provavelmente: pesados|A grafia enviada é suspeita. A forma esperada para pesado modificando um nome é 무거운, de 무겁다. Não se deve memorizar 무건운 como conjugação.
어께를|provavelmente: os ombros (objeto)|A forma padrão é 어깨를, 어깨 + 를. A tradução segue essa leitura provável.
펴고|estendendo/endireitando e|펴다 + -고. 어깨를 펴다 é endireitar ou abrir os ombros.
첫|primeiro|Determinante que modifica 무대.
무대에|ao palco|무대 + 에, destino de 오르다.
올라|subo|오르다 tem alternância 르: 올라. A repetição entre parênteses retoma a mesma ação.`),
 l('차나의 짧은 정적 숨을 골라','Num breve instante de silêncio, recupero o fôlego.',`
차나의|provavelmente: de um instante|A grafia parece corresponder a 찰나의, 찰나 + 의. A leitura é incerta e não foi confirmada como transcrição oficial.
짧은|breve; curto|짧다 + -은 modifica 정적.
정적|silêncio; quietude|Aqui é silêncio, não o homônimo adversário político. O fragmento inicial situa o momento da respiração.
숨을|a respiração (objeto)|숨 + 을 na expressão 숨을 고르다, regular/recuperar o fôlego.
골라|regulo; recupero|고르다 tem alternância 르: 골라. Com 숨, não significa escolher alguma coisa.`),
 l('내가 지켜봤던 사람들이 이젠 날 지켜보고 있네','As pessoas que eu acompanhava agora estão me assistindo.',`
내가|eu (sujeito)|나 + 가, sujeito da oração relativa anterior.
지켜봤던|que eu tinha observado|지켜보다 + passado e -던 recordativo modifica 사람들.
사람들이|as pessoas (sujeito)|사람 + 들 + 이. Agora elas são o sujeito da oração principal.
이젠|agora (em contraste)|Contração de 이제는, marcando a inversão dos papéis.
날|a mim (objeto)|Contração de 나를; passa de observador a observado.
지켜보고|observando; assistindo|지켜보다 + -고 inicia -고 있다, ação em curso.
있네|estão, percebo|있다 + -네 transmite constatação ou descoberta. O narrador nota a mudança de perspectiva.`),
 l('항상 올려봤던 TV속 그들이 지금은 내 밑에','Aqueles que eu sempre olhava lá em cima na TV agora estão abaixo de mim.',`
항상|sempre|Indica a frequência de acompanhar essas pessoas antes.
올려봤던|que eu olhava para cima|올려보다 + passado e -던. Pode combinar a posição da tela com admiração; a segunda leitura é interpretativa.
속|dentro; no interior|Em TV속, a grafia de referência é TV 속. Situa as pessoas na televisão.
그들이|eles (sujeito)|그들 + 이, retomando as pessoas vistas na TV.
지금은|agora (tópico)|지금 + 은 contrasta passado e presente.
내|meu; de mim|Contração de 나의; modifica 밑.
밑에|abaixo|밑 + 에. No contexto de palco, pode indicar o público numa posição inferior ao palco; não obriga uma afirmação de superioridade pessoal.`),
 l('Uh, 주마등처럼 스칠 틈도 없이 한 번뿐인 연극은 시작 돼버렸지','Uh, sem sequer tempo para as lembranças passarem num lampejo, a peça de uma única apresentação já tinha começado.',`
주마등처럼|como imagens que passam rapidamente|주마등 é uma lanterna giratória e, figuradamente, uma sucessão rápida de lembranças; 처럼 marca comparação.
스칠|passar de relance|스치다 + -ㄹ modifica 틈, o tempo para passar de modo breve.
틈도|nem uma brecha|틈 é intervalo/oportunidade; 도, com 없이, enfatiza que nem isso existe.
없이|sem|Forma adverbial de ausência, negando o espaço temporal para a lembrança.
한|uma|Forma adnominal de 하나; modifica 번.
번뿐인|que ocorre só uma vez|번 é contador de vezes; 뿐 limita e 인, da cópula, modifica 연극.
연극은|a peça (tópico)|연극 + 은. A apresentação é comparada a uma peça sem repetição.
시작|início|Integra 시작되다, começar. A separação na letra é preservada.
돼버렸지|acabou começando|되다 + -어 버리다 no passado; 되어 → 돼. O auxiliar destaca o acontecimento já consumado, possivelmente rápido demais para processar.`),
 l('삼번 만에 증발한, 내 삼년의 피땀, 피 터지는 마이크와의 기 싸움','Em três vezes, evaporou o suor e o sangue dos meus três anos: uma disputa feroz com o microfone.',`
삼번|três vezes (como enviado)|O texto diz 삼번, não uma duração em minutos. A contagem usual de repetições é 세 번; não alteramos isso para outra palavra sem confirmação.
만에|em; depois de|Marca o intervalo ou número de tentativas até um resultado. A leitura depende da contagem anterior, que é incomum neste verso enviado.
증발한|que evaporou|증발하다 + -ㄴ, modificação nominal. O esforço é representado como se se dissipasse rapidamente.
내|meu|Contração possessiva de 나의.
삼년의|de três anos|삼 년 + 의; o período acumulado de esforço.
피땀|sangue e suor; esforço intenso|Substantivo composto que evoca esforço, sem necessariamente descrever sangue literal.
피|sangue|Na expressão seguinte, intensifica a imagem de uma disputa dura.
터지는|que explode; que arrebenta|터지다 + -는 modifica a imagem da disputa. A leitura é figurada no contexto da apresentação.
마이크와의|com o microfone|마이크 + 와 + 의 liga a relação com o microfone à disputa.
기|energia; força de vontade|Em 기싸움, refere-se a disputa de nervos ou domínio psicológico, não a uma luta física obrigatória.
싸움|disputa; luta|A grafia lexical de referência é 기싸움, unida. O verso apresenta o desafio do palco por essa imagem.`),
 l("몇십초일 뿐이었지만 똑똑히 쏟아내, I'm f-king real",'Foram só algumas dezenas de segundos, mas expresso tudo claramente: sou real pra c-r-lho.',`
몇십초일|ser algumas dezenas de segundos|몇십 초 + 이다 + -ㄹ antes de 뿐. A grafia de referência separa 초; a quantidade é aproximada, não um número exato.
뿐이었지만|era apenas, mas|뿐 + cópula no passado + -지만, contraste. A curta duração contrasta com a força da expressão.
똑똑히|claramente; de modo nítido|Advérbio de clareza; não significa aqui de forma inteligente.
쏟아내|despejo; ponho para fora|쏟아내다 descreve derramar/despejar para fora e, figuradamente, expressar com intensidade. A tradução respeita a autocensura enviada no inglês.`),
 l("야, 인마, 니 꿈은 뭐야? 나는 랩스타가 되는 거야, can't you feel?",'Ei, cara, qual é o seu sonho? O meu é me tornar uma estrela do rap, você não sente?',`
야|ei|Chamado informal; pode soar ríspido conforme a relação e a entonação.
인마|cara (tratamento rude)|Redução informal de 이놈아. Não é tratamento educado ou adequado a qualquer interlocutor.
니|seu (coloquial)|Forma coloquial usada por 네/너의. A nota distingue a fala da escrita padrão.
꿈은|o sonho (tópico)|꿈 + 은, assunto da pergunta.
뭐야|o que é?|뭐 + cópula informal 야, pergunta sobre identidade ou conteúdo.
나는|eu (tópico)|나 + 는. Introduz a resposta, com “meu sonho” recuperado do contexto.
랩스타가|uma estrela do rap|랩스타 + 가 marca o estado que se alcança com 되다.
되는|tornar-se|되다 + -는 modifica 거, de 것.
거야|é o fato de; é…|것이야 → 거야. A ideia é que o sonho consiste em tornar-se rapper de destaque, não um futuro expresso apenas por 거야.`),
 l('그리고 내려온 순간, 그 함성, yeah, I could read your mind (uh, yeah)','E, quando desci, aqueles gritos de apoio… sim, eu conseguia ler sua mente (uh, yeah).',`
그리고|e; então|Conecta o momento depois da apresentação ao que ocorreu no palco.
내려온|em que desci|내려오다 + -ㄴ modifica 순간. O movimento é de descer/voltar para baixo.
순간|momento|Substantivo que situa o instante da reação do público.
그|aqueles|Determinante demonstrativo, remetendo a gritos reconhecíveis na lembrança.
함성|clamor; gritos coletivos|A leitura de apoio vem do contexto; o substantivo em si designa uma voz coletiva forte.`),
 l('I could read your mind, 물음표 내신 미소만 (uh, yeah)','Eu conseguia ler sua mente; em vez de interrogações, só sorrisos (uh, yeah).',`
물음표|ponto de interrogação|Imagem de dúvidas ou questionamentos anteriores.
내신|provavelmente: em vez de|내신 existe como palavra ligada a avaliação escolar, mas não combina com este contexto. A leitura provável é 대신, em vez de; a tradução depende dessa hipótese, sem corrigir silenciosamente a letra.
미소만|apenas sorrisos|미소 + 만 restringe a reação observada. O fragmento não tem verbo final explícito.`),
 l('말없이 멤버들은 그저 내 어깨를 두드렸줬어','Sem palavras, os integrantes só deram tapinhas no meu ombro.',`
말없이|sem dizer nada|Advérbio de 말, palavra/fala, com ausência de expressão verbal.
멤버들은|os integrantes (tópico)|멤버 + 들 + 은, o grupo que oferece apoio.
그저|simplesmente; só|Destaca o gesto discreto.
내|meu|Contração possessiva de 나의.
어깨를|o ombro/os ombros (objeto)|어깨 + 를. A forma aqui está escrita de modo padrão, diferente de 어께를 em outro verso enviado.
두드렸줬어|provavelmente: deram tapinhas por mim|A sequência enviada mistura formas de passado. A construção esperada é 두드려 줬어/두드려줬어, 두드리다 + -어 주다 no passado. A tradução segue essa leitura provável.`),
 l('꼭 엊그제 같은데, 스무 밤이 흘러가 버렸어','Parece que foi anteontem, mas vinte noites já se passaram.',`
꼭|bem; exatamente|Intensifica a semelhança da lembrança com algo muito recente.
엊그제|anteontem; outro dia|Pode ser um dia específico ou, figuradamente, um passado recente. Aqui comunica a sensação de proximidade.
같은데|parece, mas|같다 + -은데 contrasta a sensação com o tempo decorrido.
스무|vinte|Forma de 스물 antes de um nome contado.
밤이|noites (sujeito)|밤 + 이. A letra conta vinte noites, sem especificar um evento histórico no próprio verso.
흘러가|passando; fluindo|흘러가다, fluir para adiante, aplicado ao tempo.
버렸어|acabaram passando|버리다 como auxiliar no passado destaca a passagem consumada e uma possível sensação de rapidez ou perda; não é jogar fora noites literalmente.`),
 l('And let the haters hate on me, 걔네가 늘상 해온 일','E deixem os críticos me odiar: é o que eles sempre fizeram.',`
걔네가|eles (sujeito)|걔네 + 가, referência coloquial a um grupo, aqui os críticos mencionados no inglês.
늘상|sempre; habitualmente|Advérbio de frequência usado na fala. A forma neutra 늘 também expressa sempre.
해온|que vêm fazendo|하다 + -아/어 오다 no modificador 해 온/해온. O auxiliar mostra continuidade do passado até o presente.
일|coisa; atividade|Nome modificado por 해온: aquilo que costumam fazer.`),
 l('니네가 키보드 놀릴 동안 난 내 꿈들을 채웠지','Enquanto vocês mexiam no teclado, eu realizava meus sonhos.',`
니네가|vocês (coloquial, sujeito)|니네 + 가; registro informal dirigido ao grupo criticado.
키보드|teclado|Objeto da ação, com partícula omitida.
놀릴|mexer; manusear|놀리다 + -ㄹ modifica 동안. Com teclado, é movimentar os dedos/manusear; não o sentido de provocar uma pessoa.
동안|enquanto; durante|Substantivo dependente que estabelece simultaneidade ou intervalo temporal.
난|eu (tópico)|Contração de 나는, em contraste com vocês.
내|meus|Contração de 나의.
꿈들을|os sonhos (objeto)|꿈 + 들 + 을, o alvo da realização.
채웠지|preenchi; realizei|채우다 no passado 채웠다 + -지. Realizar sonhos é uma tradução contextual da imagem de preencher/completar.`),
 l('썬글라스, hairstyle, 뭘 욕하는지 알아','Óculos escuros, penteado… sei o que vocês criticam.',`
썬글라스|óculos escuros (grafia enviada)|A grafia padrão do empréstimo é 선글라스. A forma da letra foi preservada para consulta, não recomendada como padrão.
뭘|o que (objeto)|Contração de 무엇을.
욕하는지|o que criticam/insultam|욕하다 + -는지 transforma a pergunta em conteúdo de 알아, saber. Não é aqui -지 de negação.
알아|sei|Forma informal de 알다. O sujeito é recuperado do contexto.`),
 l('어쨌든 스무 살에 너보다 잘나가는 나야, 하하','De qualquer modo, aos vinte anos sou eu quem está se saindo melhor que você, haha.',`
어쨌든|de qualquer modo|Advérbio que retoma o ponto principal apesar das críticas.
스무|vinte|Forma de 스물 antes de 살 para contar idade.
살에|aos… anos|살 é o contador nativo de idade; 에 situa a fase da vida.
너보다|do que você|너 + 보다, partícula de comparação. Não é o verbo 보다, ver.
잘나가는|que está fazendo sucesso|잘나가다 + -는 modifica 나. A leitura é prosperar/se destacar, não apenas sair bem de um lugar.
나야|sou eu|나 + cópula informal 야, afirmação de identidade.
하하|haha; risada|Representação escrita do riso, não uma terminação gramatical.`)
];
const ending:StudyLine[]=[
 l('우리가 뛰었던 날, 우리 같이 겪었던 날','Os dias em que corremos, os dias que atravessamos juntos.',`우리가|nós (sujeito)|우리 + 가; sujeito de 뛰었던.
뛰었던|em que corremos|뛰다 + passado e -던 recordativo modifica 날. Pode evocar esforço e movimento; não especifica uma competição literal.
날|dias; dia|Substantivo temporal que pode ter leitura plural pelo contexto, sem 들.
우리|nós|Pronome sem partícula expressa na segunda oração.
같이|juntos|Advérbio de companhia, não o adjetivo 같다 conjugado.
겪었던|que vivenciamos|겪다 + -었던 retoma experiências passadas, frequentemente dificuldades.`),
 l('삼년 이란 시간 모두 하나가 됐던 마음','O período de três anos, os corações que se tornaram um só.',`삼년|três anos|Grafia de referência 삼 년.
이란|chamado; que é|Partícula ligada ao nome anterior: 삼 년이란 시간, o período chamado três anos. A separação enviada foi preservada.
시간|tempo; período|Nome modificado pelo período de três anos.
모두|todos|Indica a totalidade do grupo ou dos corações mencionados.
하나가|um só|하나 + 가 marca o estado resultante com 되다.
됐던|que tinham se tornado|되다 → 됐다 no passado; -던 recorda o estado compartilhado.
마음|coração; sentimento|Substantivo sem plural obrigatório. A tradução plural recupera a imagem de união do grupo.`),
 l('그렇게 흘린 피땀이 날 적시네 (적시네)','O sangue e o suor derramados assim me encharcam (me encharcam).',`그렇게|assim; desse modo|Retoma o esforço descrito nos versos anteriores.
흘린|derramado|흘리다 + -ㄴ modifica 피땀. É o ato de deixar correr/derramar, distinto de 흐르다, fluir.
피땀이|sangue e suor (sujeito)|피땀 + 이; imagem do esforço acumulado.
날|a mim (objeto)|Aqui é contração de 나를, não 날, dia, usado na linha anterior.
적시네|molha; encharca|적시다 + -네, constatação sentida no presente. A repetição reforça a mesma ação.`),
 l('무대가 끝난 뒤 눈물이 번지네 (번지네)','Depois que a apresentação termina, as lágrimas se espalham (se espalham).',`무대가|o palco/a apresentação (sujeito)|무대 + 가; palco é usado metonimicamente para a apresentação.
끝난|que terminou|끝나다 + -ㄴ modifica 뒤.
뒤|depois|Substantivo temporal: 끝난 뒤, depois de terminar.
눈물이|as lágrimas (sujeito)|눈물 + 이; sujeito da oração principal.
번지네|se espalham|번지다 + -네 indica a percepção da emoção se manifestando. Não significa aqui chorar como verbo literal.`),
 l('매순간 마다 자신에게 다짐해 초심을 잃지 않게','A cada momento, prometo a mim mesmo não perder o espírito do começo.',`매순간|cada momento|Forma de referência 매 순간. 매 caracteriza a repetição em todos os momentos.
마다|a cada|Partícula distributiva que se liga ao nome: 순간마다. A separação enviada não é o modelo de escrita.
자신에게|a si mesmo|자신 + 에게, destinatário do compromisso.
다짐해|prometo; reafirmo a decisão|다짐하다 → 다짐해. Expressa um compromisso assumido consigo mesmo.
초심을|a intenção inicial (objeto)|초심 + 을. Aqui é o espírito ou propósito com que começou, não o primeiro grau de um processo judicial.
잃지|perder, antes da negação|잃다 + -지 inicia -지 않다.
않게|para não|않다 + -게 apresenta o objetivo ou resultado desejado: não perder a disposição inicial.`),
 l('한상 나답게 처음의 나에게 부끄럽지 않게','Sempre fiel a mim mesmo, para não envergonhar o eu do começo.',`한상|provavelmente: sempre|A forma enviada parece ser erro por 항상. 한상 não deve ser aprendido como sempre; a tradução está condicionada a essa leitura provável.
나답게|como eu mesmo; fiel a mim|나 + -답다 + -게. Expressa agir de modo compatível com a própria identidade.
처음의|do começo|처음 + 의 modifica 나.
나에게|ao eu; a mim|나 + 에게. O narrador toma o próprio eu inicial como referência moral.
부끄럽지|ter vergonha, antes da negação|부끄럽다 + -지. O ㅂ se mantém antes da consoante da terminação.
않게|para não|않다 + -게 completa 부끄럽지 않게, de forma a não sentir vergonha diante daquele eu.`),
 en('So we go, we go, we go','Então seguimos, seguimos, seguimos.'),
 l('더 위로, 위로, 위로','Mais para cima, para cima, para cima.',`더|mais|Advérbio de acréscimo: continuar avançando além do ponto atual.
위로|para cima|위 + 로 marca direção. Não é aqui o substantivo 위로, consolo; a repetição destaca a ascensão.`)
];
export const bornSingerSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Refrão inicial · cantor de nascença',lines:chorus(true)},
 {title:'Primeira parte · do primeiro palco à identidade',lines:verse1},
 {title:'Refrão · a miragem está aqui',lines:chorus()},
 {title:'Segunda parte · medo, estreia e reconhecimento',lines:verse2},
 {title:'Refrão · felicidade apesar da dúvida',lines:chorus()},
 {title:'Parte final · preservar o começo',lines:ending},
 {title:'Refrão final',lines:chorus()}
];
export const bornSingerVocabulary={verbs:[
 {ko:'늦다',pt:'ser tarde; atrasar-se (descritivo)'},{ko:'멀다',pt:'ser distante (descritivo)'},{ko:'이르다',pt:'ser cedo (descritivo)'},{ko:'행복하다',pt:'ser feliz (descritivo)'},{ko:'서다',pt:'ficar de pé; estar no palco'},{ko:'검문하다',pt:'interrogar; inspecionar'},{ko:'다르다',pt:'ser diferente (descritivo)'},{ko:'덧쓰다',pt:'escrever por cima'},{ko:'원하다',pt:'querer'},{ko:'추다',pt:'dançar, em 춤을 추다'},{ko:'살다',pt:'viver'},{ko:'느끼다',pt:'sentir'},{ko:'견디다',pt:'suportar'},{ko:'지켜보다',pt:'observar; acompanhar'},{ko:'버티다',pt:'aguentar; resistir'},{ko:'밀려오다',pt:'chegar em onda'},{ko:'들다',pt:'segurar; pegar'},{ko:'쓰다',pt:'escrever'},{ko:'달라지다',pt:'mudar; ficar diferente'},{ko:'변하다',pt:'mudar'},{ko:'전하다',pt:'transmitir'},{ko:'지키다',pt:'preservar; proteger'},{ko:'노래하다',pt:'cantar'},{ko:'두렵다',pt:'ter medo; ser temível (descritivo)'},{ko:'증명하다',pt:'provar; demonstrar'},{ko:'믿다',pt:'acreditar; confiar'},{ko:'배신하다',pt:'trair'},{ko:'펴다',pt:'abrir; estender; endireitar'},{ko:'오르다',pt:'subir'},{ko:'고르다',pt:'regular o fôlego, em 숨을 고르다'},{ko:'시작되다',pt:'começar'},{ko:'쏟아내다',pt:'despejar; expressar intensamente'},{ko:'두드리다',pt:'bater levemente; dar tapinhas'},{ko:'흘러가다',pt:'fluir; passar (tempo)'},{ko:'채우다',pt:'preencher; completar'},{ko:'겪다',pt:'vivenciar; passar por'},{ko:'흘리다',pt:'derramar'},{ko:'적시다',pt:'molhar; encharcar'},{ko:'끝나다',pt:'terminar'},{ko:'번지다',pt:'espalhar-se'},{ko:'다짐하다',pt:'prometer; reafirmar uma decisão'},{ko:'잃다',pt:'perder'},{ko:'부끄럽다',pt:'sentir vergonha (descritivo)'}
 ],nouns:[{ko:'고백',pt:'confissão'},{ko:'신기루',pt:'miragem'},{ko:'무대',pt:'palco; apresentação'},{ko:'마음',pt:'coração; sentimento'},{ko:'촌놈',pt:'cara do interior (pode ser depreciativo)'},{ko:'래퍼',pt:'rapper (grafia padrão)'},{ko:'단어',pt:'palavra'},{ko:'출퇴근',pt:'deslocamento de ida e volta do trabalho'},{ko:'함성',pt:'clamor; gritos coletivos'},{ko:'데뷔',pt:'estreia'},{ko:'차이점',pt:'diferença (forma provável de 차의점 no texto)'},{ko:'경계',pt:'fronteira; limite'},{ko:'공책',pt:'caderno'},{ko:'라임',pt:'rima'},{ko:'대기실',pt:'sala de espera; camarim'},{ko:'펜',pt:'caneta'},{ko:'가사',pt:'letra de música'},{ko:'본질',pt:'essência'},{ko:'기대치',pt:'nível de expectativa'},{ko:'어깨',pt:'ombro (grafia padrão)'},{ko:'찰나',pt:'instante (leitura provável de 차나)'},{ko:'정적',pt:'silêncio; quietude'},{ko:'숨',pt:'respiração; fôlego'},{ko:'주마등',pt:'lanterna giratória; sucessão rápida de lembranças (figurado)'},{ko:'연극',pt:'peça de teatro'},{ko:'피땀',pt:'sangue e suor; esforço'},{ko:'마이크',pt:'microfone'},{ko:'기싸움',pt:'disputa de nervos; confronto psicológico'},{ko:'꿈',pt:'sonho'},{ko:'물음표',pt:'ponto de interrogação'},{ko:'미소',pt:'sorriso'},{ko:'눈물',pt:'lágrima'},{ko:'초심',pt:'propósito ou disposição inicial'}]};
