import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2510;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 8 (Core Subjects) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 15% de 200?", options: ["20", "30", "40", "50"], answer: "30", explanation: "15/100 * 200 = 30.", skill: "Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O resultado de 3/4 + 1/4 é:", options: ["4/8", "1", "1/2", "2/4"], answer: "1", explanation: "3/4 + 1/4 = 4/4 = 1 inteiro.", skill: "Frações" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Se um triângulo tem lados de 3cm, 4cm e 5cm, qual o seu perímetro?", options: ["7cm", "12cm", "15cm", "20cm"], answer: "12cm", explanation: "Perímetro é a soma dos lados: 3+4+5=12.", skill: "Geometria" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de (-12) + (-8)?", options: ["-4", "4", "20", "-20"], answer: "-20", explanation: "Soma de débitos continua sendo um débito.", skill: "Números Inteiros" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se 3 cadernos custam R$ 15, quanto custam 10 cadernos?", options: ["R$ 30", "R$ 45", "R$ 50", "R$ 60"], answer: "R$ 50", explanation: "Cada um custa 5. 10 x 5 = 50.", skill: "Regra de Três" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual o valor da raiz quadrada de 144?", options: ["10", "11", "12", "13"], answer: "12", explanation: "12 x 12 = 144.", skill: "Radiciação" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Como se chama um polígono de 6 lados?", options: ["Pentágono", "Hexágono", "Heptágono", "Octógono"], answer: "Hexágono", explanation: "Hexa = 6.", skill: "Polígonos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A soma dos ângulos internos de um triângulo é sempre:", options: ["90º", "180º", "360º", "45º"], answer: "180º", explanation: "Princípio fundamental da geometria plana.", skill: "Geometria" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Na equação x² = 16, os valores possíveis para x são:", options: ["Apenas 4", "Apenas -4", "4 e -4", "16 e -16"], answer: "4 e -4", explanation: "Ambos elevados ao quadrado resultam em 16.", skill: "Equações de 2º Grau" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual palavra está escrita corretamente?", options: ["Chuchu", "Xuxu", "Chuxu", "Xuchu"], answer: "Chuchu", explanation: "Grafia correta segundo o dicionário.", skill: "Ortografia" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um ADJETIVO?", options: ["Correr", "Bonito", "Casa", "Ontem"], answer: "Bonito", explanation: "Indica uma característica/qualidade.", skill: "Classes de Palavras" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O coletivo de 'Lobos' é:", options: ["Enxame", "Alcateia", "Cardume", "Bando"], answer: "Alcateia", explanation: "Termo usado para grupo de lobos.", skill: "Substantivos Coletivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual o plural de 'Cidadão'?", options: ["Cidadãos", "Cidadões", "Cidadães", "Cidadõeses"], answer: "Cidadãos", explanation: "Plural correto e mais comum.", skill: "Flexão de Número" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Na frase 'Talvez eu vá', a palavra 'Talvez' indica:", options: ["Afirmação", "Dúvida", "Tempo", "Lugar"], answer: "Dúvida", explanation: "Advérbio de dúvida.", skill: "Advérbios" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A frase 'O menino feriu-se' está na voz:", options: ["Ativa", "Passiva", "Reflexiva", "Indeterminada"], answer: "Reflexiva", explanation: "O sujeito pratica e sofre a ação.", skill: "Vozes Verbais" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'Quincas Borba'?", options: ["Machado de Assis", "José de Alencar", "Monteiro Lobato", "Jorge Amado"], answer: "Machado de Assis", explanation: "Obra clássica do realismo machadiano.", skill: "Literatura" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Entretanto' indica:", options: ["Adição", "Conclusão", "Explicação", "Adversidade (Oposição)"], answer: "Adversidade (Oposição)", explanation: "Usada para contrastar ideias.", skill: "Conjunções" }
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
