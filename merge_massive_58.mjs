import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3168;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 58 (Ciências, História e Geografia) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS (6º ao 9º) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual a função dos estômatos nas folhas das plantas?", options: ["Absorver água do solo", "Realizar trocas gasosas e transpiração", "Produzir sementes", "Sustentar a planta"], answer: "Realizar trocas gasosas e transpiração", explanation: "Os estômatos são pequenos poros que permitem a entrada de CO2 e saída de O2 e vapor de água.", skill: "Botânica" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes animais possui respiração cutânea (pela pele)?", options: ["Gato", "Peixe", "Minhoca", "Pássaro"], answer: "Minhoca", explanation: "Minhocas e alguns anfíbios absorvem oxigênio diretamente através de sua pele úmida.", skill: "Zoologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual o principal órgão do sistema circulatório que bombeia o sangue?", options: ["Pulmão", "Cérebro", "Coração", "Rim"], answer: "Coração", explanation: "O coração age como uma bomba muscular essencial para a vida.", skill: "Sistema Circulatório" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "H2O é a fórmula química de qual substância vital?", options: ["Sal", "Água", "Açúcar", "Oxigênio"], answer: "Água", explanation: "Indica duas moléculas de hidrogênio e uma de oxigênio.", skill: "Química" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A mistura de água e sal é considerada:", options: ["Uma substância pura", "Uma mistura homogênea", "Uma mistura heterogênea", "Um elemento químico"], answer: "Uma mistura homogênea", explanation: "As fases não podem ser distinguidas a olho nu após a dissolução.", skill: "Misturas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As briófitas (como os musgos) não possuem:", options: ["Clorofila", "Vasos condutores de seiva (são avasculares)", "Células", "Raízes"], answer: "Vasos condutores de seiva (são avasculares)", explanation: "Por isso são plantas de pequeno porte que vivem em ambientes úmidos.", skill: "Botânica" },

  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Roma", "Grécia", "Egito", "Mesopotâmia"], answer: "Egito", explanation: "As pirâmides serviam como túmulos monumentais para os faraós.", skill: "Egito Antigo" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa durante a Idade Médio foi o:", options: ["Capitalismo", "Feudalismo", "Democracia", "Socialismo"], answer: "Feudalismo", explanation: "Baseado na posse da terra e na relação suserano-vassalo.", skill: "Feudalismo" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que teve o lema 'Liberdade, Igualdade e Fraternidade' foi a:", options: ["Industrial", "Francesa", "Americana", "Russa"], answer: "Francesa", explanation: "Marco fundamental do fim do Absolutismo na Europa (1789).", skill: "Revolução Francesa" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A 'Guerra Fria' foi um conflito ideológico entre quais duas grandes potências?", options: ["Alemanha e Japão", "Brasil e Argentina", "EUA e União Soviética (URSS)", "França e Inglaterra"], answer: "EUA e União Soviética (URSS)", explanation: "Disputa liderada pelos blocos capitalista e socialista.", skill: "Guerra Fria" },
  { grade: "6º", discipline: "História", type: "multiple", text: "A escrita 'Cuneiforme', uma das mais antigas do mundo, foi criada por qual povo?", options: ["Egípcios", "Sumérios (Mesopotâmia)", "Fenícios", "Chineses"], answer: "Sumérios (Mesopotâmia)", explanation: "Utilizavam tabuletas de argila e estilete em cunha.", skill: "Antiguidade Oriental" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O navegador que descobriu o caminho marítimo para as Índias contornando a África foi:", options: ["Cristóvão Colombo", "Vasco da Gama", "Pedro Álvares Cabral", "Fernão de Magalhães"], answer: "Vasco da Gama", explanation: "Chegou a Calicute em 1498.", skill: "Grandes Navegações" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha imaginária que divide a Terra nos Hemisférios Norte e Sul?", options: ["Meridiano de Greenwich", "Linha do Equador", "Trópico de Câncer", "Círculo Polar"], answer: "Linha do Equador", explanation: "Divide a Terra horizontalmente ao meio.", skill: "Coordenadas" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual o bioma brasileiro conhecido por suas árvores retorcidas e casca grossa em MG?", options: ["Caatinga", "Pampas", "Cerrado", "Mata Atlântica"], answer: "Cerrado", explanation: "O Cerrado é o segundo maior bioma do Brasil.", skill: "Domínios Morfoclimáticos" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural mundial é chamado de:", options: ["Urbanização", "Globalização", "Erosão", "Desertificação"], answer: "Globalização", explanation: "Consiste na facilitação de trocas e conexões globais.", skill: "Espaço Mundial" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O arquipélago japonês é banhado por qual importante oceano?", options: ["Atlântico", "Índico", "Pacífico", "Ártico"], answer: "Pacífico", explanation: "O Japão está localizado no chamado Círculo de Fogo do Pacífico.", skill: "Geografia da Ásia" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de a Terra girar em torno de si mesma (eixo) chama-se:", options: ["Translação", "Rotação", "Oscilação", "Nutação"], answer: "Rotação", explanation: "Leva 24 horas e gera os dias e as noites.", skill: "Dinâmica Terrestre" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O estado de Minas Gerais pertence a qual região brasileira?", options: ["Nordeste", "Centro-Oeste", "Sudeste", "Sul"], answer: "Sudeste", explanation: "Minas Gerais compõe o Sudeste com SP, RJ e ES.", skill: "Regionalização" }
];

// IDs automáticos
const questionsWithIds = batch.map((q, index) => ({
    id: startId + index,
    ...q
}));

const newQuestionsStr = questionsWithIds.map(q => {
    return `  {\n    id: ${q.id},\n    grade: "${q.grade}",\n    discipline: "${q.discipline}",\n    type: "${q.type}",\n    text: "${q.text}",\n    options: ${JSON.stringify(q.options)},\n    answer: "${q.answer}",\n    explanation: "${q.explanation}",\n    skill: "${q.skill}"\n  }`;
}).join(',\n');

const content = fs.readFileSync(filePath, 'utf-8');
const updatedContent = content.replace(/\s*\];\s*$/, ',\n\n' + newQuestionsStr + '\n];\n');

fs.writeFileSync(filePath, updatedContent, 'utf-8');
console.log(`Sucesso! Lote 58 de ${batch.length} questões adicionado.`);
