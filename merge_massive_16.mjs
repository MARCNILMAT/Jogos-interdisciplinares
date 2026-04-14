import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2627;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 16 (Core Subjects) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 125 x 4?", options: ["400", "450", "500", "600"], answer: "500", explanation: "125 x 2 = 250; 250 x 2 = 500.", skill: "Operações Fundamentais" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um ângulo de 90 graus é chamado de:", options: ["Agudo", "Obtuso", "Reto", "Raso"], answer: "Reto", explanation: "Ângulos retos medem exatamente 90º.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 144 é:", options: ["11", "12", "13", "14"], answer: "12", explanation: "12 x 12 = 144.", skill: "Radiciação" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Como se chama um polígono com 5 lados?", options: ["Hexágono", "Quadrilátero", "Pentágono", "Eneágono"], answer: "Pentágono", explanation: "Penta = 5.", skill: "Polígonos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 5 elevado ao cubo (5³)?", options: ["15", "25", "125", "625"], answer: "125", explanation: "5 x 5 x 5 = 125.", skill: "Potenciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A fórmula de Bhaskara é usada para resolver qual tipo de equação?", options: ["Equações de 1º Grau", "Equações de 2º Grau", "Divisão de frações", "Cálculo de áreas"], answer: "Equações de 2º Grau", explanation: "Resolve equações do tipo ax² + bx + c = 0.", skill: "Equações de 2º Grau" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o coletivo de 'Livros'?", options: ["Alcateia", "Biblioteca", "Constelação", "Enxame"], answer: "Biblioteca", explanation: "Conjunto organizado de livros.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Eu e ele subimos', o sujeito é:", options: ["Simples", "Composto", "Oculto", "Inexistente"], answer: "Composto", explanation: "Possui dois núcleos: 'Eu' e 'ele'.", skill: "Sintaxe" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual figura de linguagem é uma comparação exagerada (ex: 'Morri de rir')?", options: ["Metáfora", "Hipérbole", "Ironia", "Eufemismo"], answer: "Hipérbole", explanation: "A hipérbole dá ênfase através do exagero.", skill: "Figuras de Linguagem" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis", "José de Alencar", "Monteiro Lobato", "Clarice Lispector"], answer: "Machado de Assis", explanation: "Obra prima do realismo brasileiro.", skill: "Literatura" }
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
