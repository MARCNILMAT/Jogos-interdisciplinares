import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2657;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 19 (Português e Matemática) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 13 x 5?", options: ["55", "60", "65", "70"], answer: "65", explanation: "13 x 5 = 65.", skill: "Operações Fundamentais" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um ângulo de 180 graus é chamado de:", options: ["Agudo", "Reto", "Obtuso", "Raso"], answer: "Raso", explanation: "Ângulos rasos medem exatamente 180º.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 121 é:", options: ["9", "10", "11", "12"], answer: "11", explanation: "11 x 11 = 121.", skill: "Radiciação" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Como se chama um polígono com 6 lados?", options: ["Pentágono", "Hexágono", "Heptágono", "Octógono"], answer: "Hexágono", explanation: "Hexa = 6.", skill: "Polígonos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Quanto é 5 elevado ao quadrado (5²)?", options: ["10", "20", "25", "30"], answer: "25", explanation: "5 x 5 = 25.", skill: "Potenciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual é o valor de x na equação 2x = 10?", options: ["2", "5", "8", "10"], answer: "5", explanation: "x = 10 / 2 = 5.", skill: "Equações de 1º Grau" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o antônimo da palavra 'Longe'?", options: ["Perto", "Distante", "Afastado", "Longo"], answer: "Perto", explanation: "Perto é o oposto de longe.", skill: "Antônimos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Eles correm muito', qual é o Verbo?", options: ["Eles", "Correm", "Muito", "Não tem verbo"], answer: "Correm", explanation: "Correr indica uma ação.", skill: "Sintaxe" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Café' é acentuada por ser:", options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Oxítona", explanation: "As oxítonas terminadas em 'e' são acentuadas.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Porém' indica uma ideia de:", options: ["Adição", "Conclusão", "Explicação", "Adversidade"], answer: "Adversidade", explanation: "Porém indica uma oposição ou contraste.", skill: "Conjunções" }
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
console.log(`Sucesso! ${batch.length} questões de Core Subjects adicionadas.`);
