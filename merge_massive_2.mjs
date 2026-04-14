import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2437;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massivo de Humantidades e Exatas a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA 6º ANO ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Como se chama um polígono de 5 lados?", options: ["Triângulo", "Quadrilátero", "Pentágono", "Hexágono"], answer: "Pentágono", explanation: "Penta = 5.", skill: "Polígonos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 0,5 + 0,25?", options: ["0,30", "0,75", "0,50", "1,0"], answer: "0,75", explanation: "Soma de decimais: 0,50 + 0,25 = 0,75.", skill: "Números Decimais" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que é um número primo?", options: ["Apenas números pares", "Números divisíveis apenas por 1 e por eles mesmos", "Números maiores que 100", "Números negativos"], answer: "Números divisíveis apenas por 1 e por eles mesmos", explanation: "Exemplos: 2, 3, 5, 7, 11...", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O resultado da divisão de 100 por 4 é:", options: ["20", "25", "40", "50"], answer: "25", explanation: "100 dividido em 4 partes iguais resulta em 25.", skill: "Operações Fundamentais" },

  // --- MATEMÁTICA 7º ANO ---
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é (-5) x (-4)?", options: ["-20", "20", "-9", "9"], answer: "20", explanation: "Na multiplicação, menos com menos dá mais.", skill: "Números Inteiros" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 49 é:", options: ["6", "7", "8", "9"], answer: "7", explanation: "Pois 7 x 7 = 49.", skill: "Radiciação" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se um ângulo mede 90º, ele é chamado de:", options: ["Agudo", "Obtuso", "Raso", "Reto"], answer: "Reto", explanation: "Ângulo reto possui exatamente 90 graus.", skill: "Ângulos" },

  // --- MATEMÁTICA 8º ANO ---
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O triplo de um número 'x' somado com 5 é escrito como:", options: ["x + 3 + 5", "3x + 5", "3(x + 5)", "x³ + 5"], answer: "3x + 5", explanation: "Triplo = 3 vezes x.", skill: "Expressões Algébricas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 3x = 15 é:", options: ["3", "5", "10", "15"], answer: "5", explanation: "x = 15 / 3 = 5.", skill: "Equações" },

  // --- MATEMÁTICA 9º ANO ---
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A fórmula de Bhaskara é usada para resolver:", options: ["Equações de 1º Grau", "Equações de 2º Grau", "Soma de frações", "Cálculo de áreas"], answer: "Equações de 2º Grau", explanation: "Resolve equações do tipo ax² + bx + c = 0.", skill: "Equação do 2º Grau" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Num triângulo retângulo, o lado oposto ao ângulo reto é a:", options: ["Base", "Altura", "Hipotenusa", "Cateto"], answer: "Hipotenusa", explanation: "A hipotenusa é sempre o maior lado do triângulo retângulo.", skill: "Teorema de Pitágoras" },

  // --- PORTUGUÊS 6º ANO ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o antônimo da palavra 'Rápido'?", options: ["Veloz", "Ligeiro", "Devagar", "Apressado"], answer: "Devagar", explanation: "Antônimos são palavras com sentidos opostos.", skill: "Semântica" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um Substantivo Próprio?", options: ["Cidade", "Brasil", "País", "Continente"], answer: "Brasil", explanation: "Nomes de lugares específicos são substantivos próprios e começam com letra maiúscula.", skill: "Classes Gramaticais" },

  // --- PORTUGUÊS 7º ANO ---
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Eles jogam bola', qual é o Sujeito?", options: ["Jogam", "Bola", "Eles", "Não tem sujeito"], answer: "Eles", explanation: "Sujeito é quem realiza a ação do verbo.", skill: "Sintaxe" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "A palavra 'Felicidade' é um substantivo:", options: ["Concreto", "Abstrato", "Próprio", "Coletivo"], answer: "Abstrato", explanation: "Designa sentimentos ou estados, não tem existência física própria.", skill: "Substantivos" },

  // --- PORTUGUÊS 8º ANO ---
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual figura de linguagem é uma comparação exagerada (ex: 'Morri de rir')?", options: ["Metáfora", "Hipérbole", "Ironia", "Eufemismo"], answer: "Hipérbole", explanation: "Hipérbole é o uso do exagero para dar ênfase.", skill: "Figuras de Linguagem" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Voz Passiva é quando o sujeito:", options: ["Pratica a ação", "Sofre a ação", "Pratica e sofre a ação", "Nenhuma das anteriores"], answer: "Sofre a ação", explanation: "Ex: 'O bolo foi feito'.", skill: "Vozes Verbais" },

  // --- PORTUGUÊS 9º ANO ---
  { grade: "9º", discipline: "Português", type: "multiple", text: "As orações coordenadas ligadas por 'Mas, porém, contudo' são de tipo:", options: ["Aditivas", "Adversativas", "Explicativas", "Conclusivas"], answer: "Adversativas", explanation: "Indicam oposição ou contraste.", skill: "Conjunções" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Qual estilo literário brasileiro buscava a perfeição das formas e rimas no final do séc. XIX?", options: ["Romantismo", "Parnasianismo", "Modernismo", "Barroco"], answer: "Parnasianismo", explanation: "Focava na 'Arte pela Arte' e rigor formal.", skill: "Literatura" }
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
console.log(`Sucesso! ${batch.length} questões de exatas/humanas adicionadas.`);
