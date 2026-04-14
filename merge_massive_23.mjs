import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2707;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 23 (Multidisciplinar Premium) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS (Volume) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "O que é a 'Troposfera'?", options: ["A camada mais externa da Terra", "A camada da atmosfera onde vivemos e ocorrem os fenômenos meteorológicos", "O núcleo da Terra", "A camada de água do planeta"], answer: "A camada da atmosfera onde vivemos e ocorrem os fenômenos meteorológicos", explanation: "É a camada mais próxima da superfície terrestre.", skill: "Atmosfera" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes é um animal Invertebrado?", options: ["Cachorro", "Peixe", "Borboleta", "Sapo"], answer: "Borboleta", explanation: "Invertebrados não possuem coluna vertebral.", skill: "Zoologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual o principal órgão do sistema excretor responsável por filtrar o sangue?", options: ["Coração", "Fígado", "Rins", "Pulmões"], answer: "Rins", explanation: "Os rins produzem a urina a partir da filtragem do sangue.", skill: "Corpo Humano" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A primeira lei de Newton é também conhecida como a Lei da:", options: ["Ação e Reação", "Inércia", "Gravidade", "Termodinâmica"], answer: "Inércia", explanation: "Diz que um corpo tende a manter seu estado de repouso ou movimento.", skill: "Leis de Newton" },

  // --- GEOGRAFIA (Volume) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O que descreve a 'Escala' em um mapa?", options: ["A cor do mapa", "A relação entre a distância no mapa e a distância real no terreno", "A altitude das montanhas", "O nome da cidade"], answer: "A relação entre a distância no mapa e a distância real no terreno", explanation: "Essencial para calcular distâncias reais.", skill: "Cartografia" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O Distrito Federal, onde fica Brasília, está localizado em qual região?", options: ["Sudeste", "Nordeste", "Centro-Oeste", "Sul"], answer: "Centro-Oeste", explanation: "O DF é uma unidade federativa no coração do Brasil.", skill: "Regiões" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "Qual país é o maior produtor mundial de café?", options: ["Colômbia", "Vietnã", "Brasil", "Etiópia"], answer: "Brasil", explanation: "O Brasil lidera a produção mundial de café há décadas.", skill: "Economia" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O Japão é um país composto por:", options: ["Um grande continente", "Um arquipélago (várias ilhas)", "Uma península conectada à China", "Apenas uma ilha"], answer: "Um arquipélago (várias ilhas)", explanation: "As principais ilhas são Honshu, Hokkaido, Kyushu e Shikoku.", skill: "Geografia da Ásia" },

  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MDC (Máximo Divisor Comum) entre 12 e 18?", options: ["2", "3", "6", "12"], answer: "6", explanation: "6 é o maior número que divide ambos exatamente.", skill: "Números" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Como se chama um triângulo que possui todos os lados iguais?", options: ["Isósceles", "Escaleno", "Equilátero", "Retângulo"], answer: "Equilátero", explanation: "Equi = igual, látero = lado.", skill: "Geometria" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 10 elevado a zero (10⁰)?", options: ["0", "1", "10", "100"], answer: "1", explanation: "Qualquer número (exceto zero) elevado a zero é igual a 1.", skill: "Potenciação" }
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
console.log(`Sucesso! ${batch.length} questões do Lote 23 adicionadas.`);
