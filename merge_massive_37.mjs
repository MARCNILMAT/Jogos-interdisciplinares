import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2872;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 37 (Matemática e Português - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 10²?", options: ["20", "50", "100", "200"], answer: "100", explanation: "10 x 10 = 100.", skill: "Potenciação" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 30% de 200?", options: ["30", "60", "90", "120"], answer: "60", explanation: "30% de 200 = 0,30 x 200 = 60.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 5x = 40 é:", options: ["5", "6", "7", "8"], answer: "8", explanation: "x = 40 / 5 = 8.", skill: "Equações" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a soma dos ângulos internos de um triângulo qualquer?", options: ["90º", "180º", "270º", "360º"], answer: "180º", explanation: "Sempre 180º na geometria plana.", skill: "Geometria" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MDC entre 15 e 20?", options: ["1", "5", "10", "15"], answer: "5", explanation: "5 é o maior divisor comum.", skill: "MDC" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 81 é:", options: ["7", "8", "9", "10"], answer: "9", explanation: "9 x 9 = 81.", skill: "Radiciação" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um polígono de 5 lados chama-se:", options: ["Hexágono", "Pentágono", "Heptágono", "Quadrilátero"], answer: "Pentágono", explanation: "Penta significa cinco.", skill: "Polígonos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O teorema de Pitágoras afirma que a² + b² = ", options: ["c", "2c", "c²", "√c"], answer: "c²", explanation: "Onde c é a hipotenusa.", skill: "Teorema de Pitágoras" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o coletivo de 'Peixes'?", options: ["Bando", "Cardume", "Alcateia", "Enxame"], answer: "Cardume", explanation: "Cardume é o grupo de peixes.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Eu e ele subimos', o sujeito é:", options: ["Simples", "Composto", "Oculto", "Inexistente"], answer: "Composto", explanation: "Possui dois núcleos: Eu e ele.", skill: "Sintaxe" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Pincel' é acentuada?", options: ["Sim", "Não", "Apenas no plural", "Apenas no diminutivo"], answer: "Não", explanation: "Oxítonas terminadas em 'el' não levam acento.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'Bento Santiago' (Dom Casmurro)?", options: ["José de Alencar", "Monteiro Lobato", "Machado de Assis", "Guimarães Rosa"], answer: "Machado de Assis", explanation: "Machado de Assis criou o Bentinho.", skill: "Literatura" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "O antônimo de 'Orgulho' é:", options: ["Modéstia", "Vaidade", "Arrogância", "Honra"], answer: "Modéstia", explanation: "Modéstia é o oposto de orgulho.", skill: "Vocabulário" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um ADJETIVO?", options: ["Correr", "Bonita", "Cadeira", "Eles"], answer: "Bonita", explanation: "Bonita indica uma característica (qualidade).", skill: "Classes de Palavras" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A figura de linguagem que compara dois seres diretamente (ex: 'Ele é um leão') é a:", options: ["Metonímia", "Metáfora", "Hipérbole", "Ironia"], answer: "Metáfora", explanation: "Comparação implícita.", skill: "Figuras de Linguagem" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Mas' indica ideia de:", options: ["Adição", "Conclusão", "Explicação", "Adversidade (Oposição)"], answer: "Adversidade (Oposição)", explanation: "Indica contraste entre ideias.", skill: "Conjunções" }
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
console.log(`Sucesso! ${batch.length} questões (Lote 37) adicionadas.`);
