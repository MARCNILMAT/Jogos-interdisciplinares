import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2601;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 13 (History and Geography) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º Ano) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Como se chama o período da história da humanidade anterior à invenção da escrita?", options: ["Idade Média", "Pré-História", "Idade Antiga", "Idade Moderna"], answer: "Pré-História", explanation: "A Pré-História abrange milhões de anos antes do surgimento da escrita.", skill: "Pré-História" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa durante a Idade Média foi o:", options: ["Capitalismo", "Socialismo", "Feudalismo", "Comunismo"], answer: "Feudalismo", explanation: "O feudalismo era baseado na relação entre suseranos e vassalos.", skill: "Idade Média" },
  { grade: "8º", discipline: "História", type: "multiple", text: "O processo que levou ao fim da escravidão no Brasil em 1888 foi a:", options: ["Lei Áurea", "Lei do Ventre Livre", "Lei dos Sexagenários", "Lei Eusébio de Queirós"], answer: "Lei Áurea", explanation: "Assinada pela Princesa Isabel, aboliu a escravidão oficialmente.", skill: "Brasil Império" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A 'Guerra Fria' foi um conflito ideológico entre quais duas superpotências?", options: ["Alemanha e França", "EUA e União Soviética (URSS)", "China e Japão", "Brasil e Argentina"], answer: "EUA e União Soviética (URSS)", explanation: "Marcou a divisão do mundo entre capitalismo e socialismo por décadas.", skill: "Guerra Fria" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O regime político de Getúlio Vargas entre 1937 e 1945 foi o:", options: ["Estado Novo", "Era da Democracia", "Império Brasileiro", "Brasil Colônia"], answer: "Estado Novo", explanation: "Um período de ditadura varguista com foco no nacionalismo.", skill: "Era Vargas" },

  // --- GEOGRAFIA (6º ao 9º Ano) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Qual camada da Terra é composta por rochas sólidas e é onde vivemos?", options: ["Núcleo", "Manto", "Crosta Terrestre", "Atmosfera"], answer: "Crosta Terrestre", explanation: "A crosta é a camada mais superficial do planeta.", skill: "Estrutura da Terra" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O Brasil está localizado em qual continente?", options: ["América do Norte", "África", "América do Sul", "Europa"], answer: "América do Sul", explanation: "O Brasil é o maior país da América do Sul.", skill: "Geografia do Brasil" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural entre os países no mundo moderno é a:", options: ["Industrialização", "Globalização", "Urbanização", "Colonização"], answer: "Globalização", explanation: "A globalização conecta o mundo através da tecnologia e do comércio.", skill: "Globalização" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O BRICS é um agrupamento composto por quais países emergentes?", options: ["Brasil, Rússia, Índia, China e África do Sul", "EUA, China e Japão", "Brasil e Portugal", "Alemanha e Reino Unido"], answer: "Brasil, Rússia, Índia, China e África do Sul", explanation: "Países com economias crescentes e influência global.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O fenômeno do aquecimento global é causado principalmente pelo aumento de:", options: ["Gás Oxigênio", "Nitrogênio", "Gases de efeito estufa (como CO2)", "Vapor de água"], answer: "Gases de efeito estufa (como CO2)", explanation: "A poluição intensifica a retenção de calor na atmosfera.", skill: "Meio Ambiente" }
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
console.log(`Sucesso! ${batch.length} questões de História e Geografia adicionadas.`);
