import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3186;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 59 (Português e Matemática - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA (Volume) ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 10² + 2²?", options: ["14", "104", "100", "20"], answer: "104", explanation: "100 + 4 = 104.", skill: "Potenciação" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 3/4 de 80?", options: ["20", "40", "60", "70"], answer: "60", explanation: "80 / 4 = 20; 20 * 3 = 60.", skill: "Frações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor numérico da expressão x² + 5 para x = -2 é:", options: ["1", "3", "7", "9"], answer: "9", explanation: "(-2)² + 5 = 4 + 5 = 9.", skill: "Álgebra" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a soma dos ângulos internos de um quadrilátero?", options: ["90º", "180º", "270º", "360º"], answer: "360º", explanation: "Dividindo-o em dois triângulos (180+180).", skill: "Geometria" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 25 é um número primo?", options: ["Sim", "Não, é divisível por 5", "Sim, só divide por 1", "Não, é par"], answer: "Não, é divisível por 5", explanation: "Números primos só são divisíveis por 1 e por eles mesmos.", skill: "Números" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se um produto custa R$ 200,00 e tem 15% de desconto, o novo preço é:", options: ["R$ 170,00", "R$ 185,00", "R$ 150,00", "R$ 190,00"], answer: "R$ 170,00", explanation: "15% de 200 = 30. 200 - 30 = 170.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um triângulo que possui todos os lados diferentes chama-se:", options: ["Equilátero", "Isósceles", "Escaleno", "Retângulo"], answer: "Escaleno", explanation: "Escaleno = 3 lados diferentes.", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 225 é:", options: ["12", "13", "14", "15"], answer: "15", explanation: "15 * 15 = 225.", skill: "Radiciação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre 4 e 6?", options: ["4", "6", "12", "24"], answer: "12", explanation: "12 é o menor múltiplo comum.", skill: "MMC" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O resultado da operação (-5) + (+12) é:", options: ["-7", "7", "17", "-17"], answer: "7", explanation: "Sinais diferentes: subtrai e dá o sinal do maior.", skill: "Inteiros" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O triplo de um número mais 10 é 40. Esse número é:", options: ["5", "10", "15", "20"], answer: "10", explanation: "3x + 10 = 40 -> 3x = 30 -> x = 10.", skill: "Equações" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Em um triângulo retângulo, o lado oposto ao ângulo de 90º é a:", options: ["Cateto oposto", "Cateto adjacente", "Hipotenusa", "Bissetriz"], answer: "Hipotenusa", explanation: "Definição técnica da hipotenusa.", skill: "Pitágoras" },

  // --- PORTUGUÊS (Volume) ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Na frase 'O gato subiu no telhado', qual a classe gramatical de 'gato'?", options: ["Substantivo", "Verbo", "Adjetivo", "Pronome"], answer: "Substantivo", explanation: "Gato dá nome a um ser.", skill: "Classes" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME POSSESSIVO?", options: ["Eu", "Aquele", "Nosso", "Quem"], answer: "Nosso", explanation: "Nosso indica posse.", skill: "Pronomes" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Pincel' é acentuada?", options: ["Sim", "Não", "Só no plural", "Só se for nome próprio"], answer: "Não", explanation: "Oxítonas terminadas em -el não levam acento.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'Bento Santiago' (Dom Casmurro)?", options: ["Machado de Assis", "José de Alencar", "Monteiro Lobato", "Clarice Lispector"], answer: "Machado de Assis", explanation: "Machado é o criador do Bentinho.", skill: "Literatura" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o antônimo de 'Orgulho'?", options: ["Vaidade", "Arrogância", "Modéstia", "Honra"], answer: "Modéstia", explanation: "Modéstia é o oposto de orgulho.", skill: "Vocabulário" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na voz passiva de 'O menino leu o livro', temos:", options: ["O livro foi lido pelo menino", "O menino lê o livro", "O livro lê o menino", "O livro fora lido"], answer: "O livro foi lido pelo menino", explanation: "O objeto direto vira sujeito paciente.", skill: "Vozes" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A conjunção 'Porém' indica ideia de:", options: ["Adição", "Causa", "Oposição (Adversidade)", "Explicação"], answer: "Oposição (Adversidade)", explanation: "Indica contraste entre ideias.", skill: "Sintaxe" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Qual figura de linguagem é uma comparação implícita (sem o 'como')?", options: ["Metáfora", "Hipérbole", "Ironia", "Eufemismo"], answer: "Metáfora", explanation: "Ex: 'Sua boca é um cadeado'.", skill: "Figuras" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "O coletivo de 'Peixes' é:", options: ["Bando", "Cardume", "Alcateia", "Enxame"], answer: "Cardume", explanation: "Conjunto de peixes.", skill: "Coletivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "A palavra 'Médico' é classificada como:", options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Proparoxítona", explanation: "Antepenúltima sílaba tônica.", skill: "Acentuação" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um ADJETIVO?", options: ["Correr", "Bonita", "Cadeira", "Sempre"], answer: "Bonita", explanation: "Indica característica.", skill: "Classes" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "O conectivo 'Mas' pode ser substituído sem perda de sentido por:", options: ["Entretanto", "Pois", "E", "Portanto"], answer: "Entretanto", explanation: "Ambas sugerem oposição.", skill: "Conectivos" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "A palavra 'Flor' é um substantivo:", options: ["Simples", "Composto", "Próprio", "Abstrato"], answer: "Simples", explanation: "Formada por apenas um radical.", skill: "Substantivos" }
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
console.log(`Sucesso! Super Batch 59 de ${batch.length} questões de Português/Matemática adicionado.`);
