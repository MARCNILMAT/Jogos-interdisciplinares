import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3042;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 48 (Exatas e Biológicas) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 50 x 8?", options: ["350", "400", "450", "500"], answer: "400", explanation: "50 x 8 = 400.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de x na equação 2x = 42?", options: ["20", "21", "22", "24"], answer: "21", explanation: "x = 42 / 2 = 21.", skill: "Equações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 144 é:", options: ["11", "12", "13", "14"], answer: "12", explanation: "12 x 12 = 144.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 10 elevado a 3 (10³)?", options: ["100", "300", "1000", "30"], answer: "1000", explanation: "10 x 10 x 10 = 1000.", skill: "Potenciação" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A área de um quadrado de lado 10cm é:", options: ["20cm²", "40cm²", "100cm²", "50cm²"], answer: "100cm²", explanation: "Área = Lado x Lado = 10 x 10 = 100.", skill: "Geometria" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME?", options: ["Ele", "Livro", "Mesa", "Lápis"], answer: "Ele", explanation: "Ele é um pronome pessoal do caso reto.", skill: "Classes de Palavras" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "A palavra 'Bexiga' se escreve com:", options: ["X", "CH", "S", "G"], answer: "X", explanation: "Ortografia correta com X.", skill: "Ortografia" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "No plural, 'Chapéu' fica:", options: ["Chapéis", "Chapéus", "Chapeles", "Chapeus"], answer: "Chapéus", explanation: "Oxítonas terminadas em -eu fazem plural em -eus.", skill: "Morfologia" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "O autor de 'Vidas Secas' é:", options: ["Machado de Assis", "Graciliano Ramos", "José de Alencar", "Clarice Lispector"], answer: "Graciliano Ramos", explanation: "Obra de destaque do regionalismo nordestino.", skill: "Literatura" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual planeta é conhecido como 'Planeta Vermelho'?", options: ["Vênus", "Terra", "Marte", "Júpiter"], answer: "Marte", explanation: "Devido à cor de sua superfície rica em óxido de ferro.", skill: "Sistema Solar" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual gás os humanos absorvem na respiração para as células?", options: ["Gás Carbônico", "Nitrogênio", "Oxigênio", "Hidrogênio"], answer: "Oxigênio", explanation: "O O2 é vital para a produção de energia nas células.", skill: "Respiração" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O centro de controle da célula vegetal, que contém o DNA, é o:", options: ["Mitocôndria", "Parede Celular", "Núcleo", "Cloroplasto"], answer: "Núcleo", explanation: "O DNA armazena a informação genética.", skill: "Biologia Celular" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "H2O é a fórmula química de qual substância?", options: ["Sal", "Açúcar", "Água", "Ferro"], answer: "Água", explanation: "Junção de dois Hidrogênios e um Oxigênio.", skill: "Química" }
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
console.log(`Sucesso! Lote 48 de ${batch.length} questões adicionado.`);
