import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2953;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 42 (Core Subjects - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 125 x 4?", options: ["400", "450", "500", "600"], answer: "500", explanation: "125 x 2 = 250; 250 x 2 = 500.", skill: "Operações" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 1/2 + 1/4?", options: ["1/6", "2/6", "3/4", "1/2"], answer: "3/4", explanation: "1/2 = 2/4. 2/4 + 1/4 = 3/4.", skill: "Frações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 144 é:", options: ["10", "11", "12", "14"], answer: "12", explanation: "12 x 12 = 144.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o valor de x na equação x² = 25 (considerando x > 0)?", options: ["2", "5", "8", "10"], answer: "5", explanation: "A raiz quadrada positiva de 25 é 5.", skill: "Equações de 2º Grau" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um ângulo reto mede quantos graus?", options: ["45º", "90º", "180º", "360º"], answer: "90º", explanation: "Ângulos retos medem exatamente 90 graus.", skill: "Geometria" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se um produto custa 100 reais e tem 15% de desconto, qual o novo preço?", options: ["85", "90", "95", "115"], answer: "85", explanation: "100 - 15 = 85 reais.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor numérico da expressão 2a + 3b quando a=2 e b=3 é:", options: ["10", "11", "12", "13"], answer: "13", explanation: "(2x2) + (3x3) = 4 + 9 = 13.", skill: "Álgebra" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a soma dos ângulos internos de um triângulo?", options: ["90º", "180º", "270º", "360º"], answer: "180º", explanation: "Sempre 180º na geometria plana.", skill: "Geometria" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o coletivo de 'Livros'?", options: ["Alcateia", "Biblioteca", "Constelação", "Enxame"], answer: "Biblioteca", explanation: "Biblioteca é o conjunto de livros.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Eles correm muito', qual o verbo?", options: ["Eles", "Correm", "Muito", "Não tem verbo"], answer: "Correm", explanation: "Correr indica a ação do sujeito.", skill: "Verbos" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual a forma correta do plural de 'Pão'?", options: ["Pãos", "Pães", "Pãis", "Pãoles"], answer: "Pães", explanation: "Plural africado de pão.", skill: "Morfologia" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis", "José de Alencar", "Monteiro Lobato", "Clarice Lispector"], answer: "Machado de Assis", explanation: "Considerado um dos maiores clássicos brasileiros.", skill: "Literatura" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um ADJETIVO?", options: ["Cadeira", "Azul", "Mesa", "Lápis"], answer: "Azul", explanation: "Azul é uma característica ou qualidade.", skill: "Adjetivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Vou à escola', o sinal indicativo de crase em 'à' ocorre pois:", options: ["Vou (verbo de movimento) exige 'a' + 'a' artigo", "É uma exceção", "Sempre tem crase antes de escola", "Nenhuma das anteriores"], answer: "Vou (verbo de movimento) exige 'a' + 'a' artigo", explanation: "Junção da preposição com o artigo feminino.", skill: "Crase" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Café' é acentuada por ser:", options: ["Oxítona terminada em E", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Oxítona terminada em E", explanation: "Regra básica de acentuação.", skill: "Ortografia" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Entretanto' indica ideia de:", options: ["Adição", "Conclusão", "Oposição (Adversidade)", "Explicação"], answer: "Oposição (Adversidade)", explanation: "Indica contraste entre as orações.", skill: "Sintaxe" }
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
console.log(`Sucesso! Lote 42 de ${batch.length} questões adicionado.`);
