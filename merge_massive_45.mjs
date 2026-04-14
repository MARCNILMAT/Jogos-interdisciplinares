import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3005;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 45 (Core Subjects - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 15 x 7?", options: ["95", "100", "105", "110"], answer: "105", explanation: "15 x 7 = 105.", skill: "Operações" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 2/5 de 100?", options: ["20", "40", "50", "60"], answer: "40", explanation: "100 / 5 = 20; 20 x 2 = 40.", skill: "Frações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 169 é:", options: ["11", "12", "13", "14"], answer: "13", explanation: "13 x 13 = 169.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 10x = 1000 é:", options: ["10", "100", "1000", "50"], answer: "100", explanation: "x = 1000 / 10 = 100.", skill: "Equações" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O perímetro de um triângulo com lados 5cm, 5cm e 5cm é:", options: ["10cm", "15cm", "20cm", "25cm"], answer: "15cm", explanation: "Soma dos lados: 5+5+5 = 15.", skill: "Perímetro" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 50% de 350?", options: ["150", "175", "180", "200"], answer: "175", explanation: "50% é a metade. 350 / 2 = 175.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um ângulo de 180 graus é chamado de:", options: ["Agudo", "Reto", "Obtuso", "Raso"], answer: "Raso", explanation: "Ângulos rasos formam uma linha reta.", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A soma dos ângulos internos de um triângulo é:", options: ["90º", "180º", "360º", "100º"], answer: "180º", explanation: "Sempre 180º na geometria plana.", skill: "Geometria" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME?", options: ["Ele", "Cadeira", "Mesa", "Livro"], answer: "Ele", explanation: "Ele é um pronome pessoal do caso reto.", skill: "Classes de Palavras" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O antônimo de 'Bom' é:", options: ["Lindo", "Mau", "Grande", "Feliz"], answer: "Mau", explanation: "Mau com U é o oposto de bom.", skill: "Semântica" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Papel' no plural é:", options: ["Papéis", "Papels", "Papeles", "Papeis"], answer: "Papéis", explanation: "Palavras em -el fazem o plural em -éis.", skill: "Plural" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'O Guarani'?", options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Monteiro Lobato"], answer: "José de Alencar", explanation: "Famoso romance do indianismo romântico.", skill: "Literatura" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "O substantivo coletivo de 'Estrelas' é:", options: ["Alcateia", "Cardume", "Constelação", "Matilha"], answer: "Constelação", explanation: "Conjunto de estrelas.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Ela é inteligente', qual o adjetivo?", options: ["Ela", "É", "Inteligente", "Não tem adjetivo"], answer: "Inteligente", explanation: "Atribui uma qualidade ao sujeito.", skill: "Adjetivos" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A regra de acentuação de 'Oxítona' se aplica a:", options: ["Sábado", "Café", "Mesa", "Caderno"], answer: "Café", explanation: "Café é oxítona terminada em E.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Porém' indica ideia de:", options: ["Adição", "Conclusão", "Oposição", "Causa"], answer: "Oposição", explanation: "Porém é uma conjunção adversativa.", skill: "Conjunções" }
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
console.log(`Sucesso! Super Batch 45 de ${batch.length} questões adicionado.`);
