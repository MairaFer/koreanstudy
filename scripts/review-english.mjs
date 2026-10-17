import fs from 'node:fs';
const file='locales/en.json',dictionary=JSON.parse(fs.readFileSync(file,'utf8'));
const active=new Set(JSON.parse(fs.readFileSync('locales/source.json','utf8')));for(const key of Object.keys(dictionary))if(!active.has(key))delete dictionary[key];
const glossary={
 'meu':'my','minha':'my','você':'you','eu':'I','seu':'your','nosso':'our','nós':'we; us','objeto':'object marker','sujeito':'subject marker','tópico':'topic marker','de':'of','e':'and','entre':'among; between','um':'one','como':'like; as','mais':'more','tudo':'everything','apenas':'only','também':'also','só':'only','este':'this','aquele':'that','aquela':'that','esse':'that','essa':'that',
 'verbo descritivo':'descriptive verb','partícula de sujeito':'subject marker','partícula de objeto':'object marker','passado':'past tense','plural':'plural','relativo':'noun-modifying form','futuro':'future','cópula':'copula',
 'mundo':'world','quando':'when','sonho':'dream','interior':'inside','saber':'to know','coração':'heart; feelings','de novo':'again','mas':'but','parar':'to stop','querer':'to want','junto':'together','bem':'well','correr':'to run','existir':'to exist','ver':'to see','se':'if','agora':'now','amor':'love','conhecer':'to know; to get to know','ir':'to go','por quê':'why','um pouco':'a little','caminho':'path; way','cair':'to fall','dar':'to give','novamente':'again','destino':'fate','enlouquecer':'to go crazy','mão':'hand','não haver':'not to exist; not to have','o quê':'what','pessoa':'person','respiração':'breath; breathing','sempre':'always','simplesmente':'simply','parecer':'to seem','coisa':'thing','sem':'without','tentar':'to try','com':'with','dentro':'inside','não ser':'not to be','estar':'to be','amar':'to love','dança':'dance','realmente':'really','muito':'very; a lot','depois':'after; afterward','doer':'to hurt','existência':'existence','por favor':'please','girar':'to turn; to spin','gostar':'to like','lugar':'place','olho':'eye','talvez':'perhaps; maybe','repetidamente':'repeatedly','resposta':'answer','ser como':'to be like','ser estranho':'to be strange','ser fácil':'to be easy','todos':'everyone; all','todo':'all; every','lembrança':'memory','somente':'only','agarrar':'to grab; to hold on to','assim':'like this; that way','brilhar':'to shine','consolo':'comfort','encontrar':'to find; to meet','crescer':'to grow','haver':'to exist; there is','hoje':'today','tempo':'time','isto':'this','mudar':'to change','música':'music','olhar':'to look','perder':'to lose','receber':'to receive','andar':'to walk','para':'to; for','até':'until; even','ainda':'still; yet','fim':'end','voz':'voice','dia':'day','noite':'night','frente':'front','tornar-se':'to become','fazer':'to do; to make','falar':'to speak','lembrar':'to remember','abandonar':'to abandon','ter':'to have','ser':'to be','começar':'to begin','continuar':'to continue','ouvir':'to hear; to listen','fluir':'to flow','deixar':'to leave; to let','tirar':'to take off; to remove','esconder':'to hide','mentir':'to lie','esforçar-se':'to make an effort','chorar':'to cry','esquecer':'to forget','sorrir':'to smile','descansar':'to rest','esperar':'to wait','aproximar-se':'to approach','sentir':'to feel','procurar':'to look for','terminar':'to end','cabeça':'head','neve':'snow','luz':'light','amigo':'friend','primavera':'spring','inverno':'winter','mar':'sea','estrela':'star','lua':'moon','dor':'pain','morrer':'to die','passar':'to pass','deitar-se':'to lie down','levantar-se':'to get up','acordar':'to wake up','nascer':'to be born; to rise','soltar':'to let go','segurar':'to hold','proteger':'to protect','promessa':'promise','contar':'to count; to tell','abraçar':'to hug','mandar':'to tell someone to; to send','pegar':'to take; to catch','retornar':'to return'
};
const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
let repaired=0;
for(const [source,value] of Object.entries(dictionary)){
 let text=value;
 if(/letra enviada|letra fornecida|letra completa|letra da música|letra de uma música/.test(source))text=text.replace(/\bletters?\b/gi,'lyrics');
 if(/auxiliar de|como auxiliar|verbo auxiliar/.test(source))text=text.replace(/as an assistant/gi,'as an auxiliary verb').replace(/\bassistant\b/gi,'auxiliary');
 if(/portugu[eê]s|tradução portuguesa/i.test(source))text=text.replace(/Portuguese/g,'English').replace(/portuguese/g,'English');
 if(/consoantes/.test(source))text=text.replace(/simple, aspirated and tense/g,'plain, aspirated, and tense consonants');
 if(/cópula|copula/.test(source))text=text.replace(/\bcopulation\b/gi,'copula');
 if(/terminação|terminacoes|terminacao/.test(source))text=text.replace(/\btermination\b/gi,'ending');
 if(/base verbal/.test(source))text=text.replace(/\bverbal base\b/gi,'verb stem');
 if(/oração|orações/.test(source)&&!/기도|orar|Deus|prece/.test(source))text=text.replace(/\bprayers\b/gi,'clauses').replace(/\bprayer\b/gi,'clause');
 if(/nega|negativo|negação/.test(source))text=text.replace(/\bdenies\b/gi,'negates');
 for(const m of source.matchAll(/([가-힣ㄱ-ㅎㅏ-ㅣ]+)\s*=\s*([^;.]+)(?=;|\.|$)/gu)){
  const meaning=glossary[m[2].trim().toLowerCase()];if(!meaning)continue;
  text=text.replace(new RegExp('('+escape(m[1])+'\\s*=\\s*)[^;.]+','u'),(_,head)=>head+meaning.replaceAll(';',','));
 }
 if(Object.hasOwn(glossary,source.toLowerCase()))text=glossary[source.toLowerCase()];
 if(/^Escreva/i.test(source))text=text.replace(/^Write/i,'Choose');
 if(text!==value)repaired++;dictionary[source]=text.replace(/\u200b/g,'');
}
for(const [key,value] of Object.entries(dictionary))if(/Escreva/i.test(key))dictionary[key.replace(/Escreva/gi,'Escolha')]=value;
fs.writeFileSync(file,JSON.stringify(dictionary,null,2)+'\n');console.log('Reviewed grammar/lexical entries:',repaired);
