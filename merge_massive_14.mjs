import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2611;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 14 (Ciências e Geografia) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS 7º ANO ---
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes é um exemplo de animal vertebrado classificado como Anfíbio?", options: ["Sapo", "Jacaré", "Tubarão", "Tartaruga"], answer: "Sapo", explanation: "Anfíbios têm pele úmida e passam parte da vida na água.", skill: "Biodiversidade" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O processo pelo qual as plantas utilizam a luz solar para produzir seu próprio alimento é a:", options: ["Respiração", "Transpiração", "Fotossíntese", "Digestão"], answer: "Fotossíntese", explanation: "Ocorre nos cloroplastos com água e gás carbônico.", skill: "Reino Vegetal" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema do corpo humano responsável por bombear o sangue para todos os órgãos é o:", options: ["Sistema Respiratório", "Sistema Cardiovascular", "Sistema Digestório", "Sistema Nervoso"], answer: "Sistema Cardiovascular", explanation: "O coração é o motor desse sistema.", skill: "Fisiologia Humana" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "A vacina é uma forma de prevenção que estimula o corpo a produzir:", options: ["Bactérias", "Anticorpos", "Gordura", "Energia extra"], answer: "Anticorpos", explanation: "O sistema imunológico cria defesa contra patógenos.", skill: "Saúde Pública" },

  // --- GEOGRAFIA 7º ANO ---
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual bioma brasileiro é caracterizado por ser uma 'floresta tropical de altitude'?", options: ["Caatinga", "Mata de Araucária", "Pampas", "Cerrado"], answer: "Mata de Araucária", explanation: "Típica do Sul do Brasil em regiões frias.", skill: "Biomas" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O estado de Minas Gerais pertence a qual região do Brasil?", options: ["Sul", "Centro-Oeste", "Sudeste", "Norte"], answer: "Sudeste", explanation: "Minas é um dos quatro estados do Sudeste.", skill: "Divisão Regional" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "Como se chama o país que exerce grande influência econômica e cultural no continente americano?", options: ["Canadá", "México", "Estados Unidos (EUA)", "Brasil"], answer: "Estados Unidos (EUA)", explanation: "Principal potência econômica da América e do mundo.", skill: "Geopolítica" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "A migração de pessoas que saem do campo para viver nas cidades é o:", options: ["Êxodo Rural", "Transumância", "Turismo", "Imigração"], answer: "Êxodo Rural", explanation: "Fenômeno comum durante a industrialização.", skill: "Urbanização" }
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
console.log(`Sucesso! ${batch.length} questões adicionadas ao banco.`);
