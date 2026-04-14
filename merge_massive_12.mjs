import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2584;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 12 (Core Subjects) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA (Volume Acelerado) ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 25% de 400?", options: ["50", "100", "150", "200"], answer: "100", explanation: "25% é o mesmo que dividir por 4. 400 / 4 = 100.", skill: "Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O resultado da soma 1/2 + 1/2 é:", options: ["1/4", "1", "2/2", "0,5"], answer: "1", explanation: "Meio mais meio é igual a um inteiro.", skill: "Frações" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Se um quadrado tem lado de 10 cm, qual o seu perímetro?", options: ["20 cm", "40 cm", "100 cm", "50 cm"], answer: "40 cm", explanation: "Soma de todos os lados: 10+10+10+10=40.", skill: "Geometria" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de (-10) x (-5)?", options: ["-50", "50", "15", "-15"], answer: "50", explanation: "Na multiplicação, menos com menos dá mais.", skill: "Números Inteiros" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 100 é:", options: ["10", "20", "50", "100"], answer: "10", explanation: "Pois 10 x 10 = 100.", skill: "Radiciação" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 2x + 10 = 30 é:", options: ["5", "10", "15", "20"], answer: "10", explanation: "2x = 20 => x = 10.", skill: "Equações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um polígono com 8 lados é chamado de:", options: ["Heptágono", "Octógono", "Eneágono", "Decágono"], answer: "Octógono", explanation: "Octo = 8.", skill: "Polígonos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Em um triângulo retângulo, a soma dos quadrados dos catetos é igual ao:", options: ["Dobro da hipotenusa", "Quadrado da hipotenusa", "Triplo da base", "Volume"], answer: "Quadrado da hipotenusa", explanation: "Teorema de Pitágoras: a² + b² = c².", skill: "Teorema de Pitágoras" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a soma dos ângulos internos de um triângulo?", options: ["90º", "180º", "360º", "270º"], answer: "180º", explanation: "Princípio fundamental da geometria plana.", skill: "Geometria" },

  // --- PORTUGUÊS (Volume Acelerado) ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um SUBSTANTIVO COLETIVO de pássaros?", options: ["Alcateia", "Bando", "Cardume", "Enxame"], answer: "Bando", explanation: "Bando é o coletivo de pássaros.", skill: "Substantivos" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual a escrita correta da palavra?", options: ["Excessão", "Exceção", "Esceção", "Exseção"], answer: "Exceção", explanation: "Escrita com X e Ç.", skill: "Ortografia" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Ela viajou para o Rio', qual é o Verbo?", options: ["Ela", "Viajou", "Para", "Rio"], answer: "Viajou", explanation: "O verbo indica a ação realizada.", skill: "Verbos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual o antônimo de 'Felicidade'?", options: ["Tristeza", "Alegria", "Sorte", "Amor"], answer: "Tristeza", explanation: "Oposto de felicidade.", skill: "Semântica" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual figura de linguagem é uma comparação exagerada (ex: 'Morri de rir')?", options: ["Metáfora", "Hipérbole", "Ironia", "Pleonasmo"], answer: "Hipérbole", explanation: "Hipérbole é exagero intencional.", skill: "Figuras de Linguagem" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Quem escreveu 'O Guarani'?", options: ["Machado de Assis", "José de Alencar", "Monteiro Lobato", "Jorge Amado"], answer: "José de Alencar", explanation: "Obra prima do Romantismo brasileiro.", skill: "Literatura" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Entretanto' liga ideias de:", options: ["Adição", "Oposição (Adversidade)", "Conclusão", "Explicação"], answer: "Oposição (Adversidade)", explanation: "Indica contraste entre ideias.", skill: "Conjunções" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "O uso da vírgula é obrigatório em qual destes casos?", options: ["Separar o sujeito do verbo", "Isolar um vocativo", "Antes de qualquer ponto final", "No meio de uma palavra"], answer: "Isolar um vocativo", explanation: "Ex: 'Marcos, venha aqui'.", skill: "Pontuação" }
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
