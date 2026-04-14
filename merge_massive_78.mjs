import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3611;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 78 (Matemática e Português - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA (6º ao 9º) ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 10² + 10?", options: ["20", "100", "110", "1010"], answer: "110", explanation: "10² = 100. 100 + 10 = 110.", skill: "Potenciação" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 2/5 de 100?", options: ["20", "40", "50", "60"], answer: "40", explanation: "100 / 5 = 20. 20 x 2 = 40.", skill: "Frações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 2x = 48 é:", options: ["12", "24", "48", "96"], answer: "24", explanation: "x = 48 / 2 = 24.", skill: "Equações" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 169 é:", options: ["11", "12", "13", "14"], answer: "13", explanation: "13 x 13 = 169.", skill: "Radiciação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O perímetro de um quadrado de lado 5cm é:", options: ["10cm", "15cm", "20cm", "25cm"], answer: "20cm", explanation: "Soma dos lados: 5+5+5+5 = 20.", skill: "Geometria" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 30% de 150?", options: ["30", "45", "50", "60"], answer: "45", explanation: "30% de 150 = 0,3 x 150 = 45.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um triângulo que possui todos os lados iguais chama-se:", options: ["Equilátero", "Isósceles", "Escaleno", "Retângulo"], answer: "Equilátero", explanation: "Equi (igual) + látero (lado).", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a soma dos ângulos internos de um triângulo?", options: ["90º", "180º", "360º", "100º"], answer: "180º", explanation: "Sempre 180º na geometria plana.", skill: "Ângulos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 7 é primo?", options: ["Sim", "Não, é par", "Não, divide por 3", "Só nos domingos"], answer: "Sim", explanation: "Só possui como divisores o 1 e o próprio 7.", skill: "Números" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre 4 e 6?", options: ["4", "6", "12", "24"], answer: "12", explanation: "Menor múltiplo comum.", skill: "MMC" },

  // --- PORTUGUÊS (6º ao 9º) ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Na frase 'O menino correu', qual a classe gramatical de 'menino'?", options: ["Substantivo", "Verbo", "Adjetivo", "Pronome"], answer: "Substantivo", explanation: "Dá nome a um ser.", skill: "Classes de Palavras" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME POSSESSIVO?", options: ["Eu", "Aquele", "Meu", "Ninguém"], answer: "Meu", explanation: "Indica posse (primeira pessoa).", skill: "Pronomes" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Médico' é classificada como:", options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Proparoxítona", explanation: "Sílaba tônica é a antepenúltima.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'O Guarani'?", options: ["Machado de Assis", "José de Alencar", "Monteiro Lobato", "Clarice Lispector"], answer: "José de Alencar", explanation: "Figura central do Romantismo brasileiro.", skill: "Literatura" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "O coletivo de 'Peixes' é:", options: ["Matilha", "Bando", "Cardume", "Alcateia"], answer: "Cardume", explanation: "Conjunto de muitos peixes.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "A palavra 'Bexiga' se escreve corretamente com:", options: ["X", "CH", "S", "G"], answer: "X", explanation: "Grafia oficial.", skill: "Ortografia" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual figura de linguagem é uma comparação exagerada (ex: 'Morri de rir')?", options: ["Metáfora", "Hipérbole", "Ironia", "Onomatopeia"], answer: "Hipérbole", explanation: "Representa o exagero intencional.", skill: "Figuras de Linguagem" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Mas' indica uma ideia de:", options: ["Adição", "Oposição (Contraste)", "Causa", "Explicação"], answer: "Oposição (Contraste)", explanation: "É uma conjunção adversativa.", skill: "Conjunções" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o antônimo de 'Bom'?", options: ["Lindo", "Mau", "Grande", "Alegre"], answer: "Mau", explanation: "Oposição direta.", skill: "Semântica" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Ele viajou', qual o verbo?", options: ["Ele", "Viajou", "Não tem", "Ao"], answer: "Viajou", explanation: "Indica a ação.", skill: "Verbos" }
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
console.log(`Sucesso! Super Batch 78 de ${batch.length} questões de Português/Matemática adicionado.`);
