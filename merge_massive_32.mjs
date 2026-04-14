import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2812;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 32 (Multidisciplinar Premium) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS (Volume) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "O que é a 'Litosfera'?", options: ["A camada de água da Terra", "A camada sólida externa da Terra (solo e rochas)", "A camada de gases", "O núcleo de ferro"], answer: "A camada sólida externa da Terra (solo e rochas)", explanation: "Lito vem do grego 'pedra'.", skill: "Estrutura da Terra" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes animais é um hermafrodita (possui os dois sexos em um mesmo indivíduo)?", options: ["Cão", "Gato", "Minhoca", "Pássaro"], answer: "Minhoca", explanation: "Minhocas são anelídeos que possuem ambos os sistemas reprodutores.", skill: "Zoologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "A digestão mecânica que ocorre na boca é realizada por qual estrutura?", options: ["Língua", "Dentes", "Esôfago", "Estômago"], answer: "Dentes", explanation: "Os dentes trituram o alimento iniciando a digestão física.", skill: "Sistema Digestório" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A energia que um corpo possui devido ao seu movimento é chamada de:", options: ["Energia Potencial", "Energia Cinética", "Energia Química", "Energia Elétrica"], answer: "Energia Cinética", explanation: "Cinética vem do grego 'kinētikos' que significa movimento.", skill: "Energia" },

  // --- GEOGRAFIA (Volume) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Qual destes planetas é conhecido como o 'Planeta Vermelho'?", options: ["Vênus", "Marte", "Júpiter", "Saturno"], answer: "Marte", explanation: "Devido à presença de óxido de ferro em sua superfície.", skill: "Sistema Solar" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O estado da Bahia está localizado em qual região brasileira?", options: ["Norte", "Sudeste", "Centro-Oeste", "Nordeste"], answer: "Nordeste", explanation: "A Bahia é o estado mais populoso do Nordeste.", skill: "Regionalização" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O canal artificial que liga o Oceano Atlântico ao Pacífico na América Central é o:", options: ["Canal de Suez", "Canal do Panamá", "Estreito de Gibraltar", "Canal da Mancha"], answer: "Canal do Panamá", explanation: "Obra fundamental para o comércio marítimo global.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "A União Europeia é um exemplo de:", options: ["País", "Bloco Econômico", "Estado Federado", "Empresa Multinacional"], answer: "Bloco Econômico", explanation: "Promove a integração econômica e política entre países europeus.", skill: "Globalização" },

  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 3/4 de 100?", options: ["25", "50", "75", "80"], answer: "75", explanation: "100 dividido por 4 é 25; 25 multiplicado por 3 é 75.", skill: "Frações" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O resultado da expressão (-5) + (-12) é:", options: ["-7", "7", "17", "-17"], answer: "-17", explanation: "Soma de dois números negativos resulta em um negativo.", skill: "Números Inteiros" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O triplo de um número 'x' adicionado a 10 é representado por:", options: ["3x + 10", "x³ + 10", "3 + x + 10", "10x + 3"], answer: "3x + 10", explanation: "Triplo de x é 3x.", skill: "Álgebra" }
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
console.log(`Sucesso! ${batch.length} questões do Lote 32 adicionadas.`);
