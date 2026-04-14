import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2740;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 26 (Volume Acelerado) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 50 x 8?", options: ["350", "400", "450", "500"], answer: "400", explanation: "50 x 8 = 400.", skill: "Operações" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de x na equação 3x = 21?", options: ["3", "7", "10", "15"], answer: "7", explanation: "x = 21 / 3 = 7.", skill: "Equações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 64 é:", options: ["6", "7", "8", "9"], answer: "8", explanation: "8 x 8 = 64.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Como se chama um polígono de 4 lados com todos os lados iguais e ângulos retos?", options: ["Retângulo", "Losango", "Quadrado", "Trapézio"], answer: "Quadrado", explanation: "O quadrado é o quadrilátero regular.", skill: "Geometria" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o coletivo de 'Peixes'?", options: ["Cardume", "Alcateia", "Enxame", "Batalhão"], answer: "Cardume", explanation: "Cardume é o grupo de peixes.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual o sinônimo de 'Rápido'?", options: ["Lento", "Vagaroso", "Veloz", "Parado"], answer: "Veloz", explanation: "Sinônimos têm significados semelhantes.", skill: "Semântica" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Pincel' no plural fica:", options: ["Pincéis", "Pincels", "Pinceles", "Pinceis"], answer: "Pincéis", explanation: "Palavras em -el fazem o plural em -éis.", skill: "Plural" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "O autor de 'Vidas Secas' é:", options: ["Machado de Assis", "Graciliano Ramos", "Jorge Amado", "Guimarães Rosa"], answer: "Graciliano Ramos", explanation: "Graciliano Ramos é o autor deste clássico regionalista.", skill: "Literatura" },

  // --- HISTÓRIA ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga vivia às margens do Rio Nilo?", options: ["Grécia", "Roma", "Egito", "Mesopotâmia"], answer: "Egito", explanation: "O Rio Nilo era vital para a agricultura egípcia.", skill: "Antiguidade" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O período da história européia marcado pela cavalaria e castelos foi a:", options: ["Idade Antiga", "Idade Média", "Idade Moderna", "Idade Contemporânea"], answer: "Idade Média", explanation: "A Idade Média durou cerca de mil anos.", skill: "Idade Média" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A independência do Brasil ocorreu em qual ano?", options: ["1500", "1822", "1889", "1964"], answer: "1822", explanation: "Proclamada por Dom Pedro I em 7 de setembro.", skill: "Brasil Império" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O primeiro presidente civil após a Ditadura Militar foi:", options: ["Getúlio Vargas", "Tancredo Neves", "José Sarney", "Fernando Collor"], answer: "José Sarney", explanation: "Assumiu após a morte de Tancredo Neves.", skill: "Redemocratização" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Quantos planetas existem no Sistema Solar oficial atualmente?", options: ["7", "8", "9", "10"], answer: "8", explanation: "Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.", skill: "Astronomia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual gás os humanos precisam para respirar?", options: ["Gás Carbônico", "Oxigênio", "Nitrogênio", "Hidrogênio"], answer: "Oxigênio", explanation: "O oxigênio é essencial para a vida celular.", skill: "Respiração" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "A parte da célula que contém o DNA é o:", options: ["Membrana", "Citoplasma", "Núcleo", "Mitocôndria"], answer: "Núcleo", explanation: "O núcleo guarda as informações genéticas.", skill: "Citologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "H2O é a fórmula química de qual substância?", options: ["Sal", "Áçucar", "Água", "Ar"], answer: "Água", explanation: "Dois átomos de hidrogênio e um de oxigênio.", skill: "Química" }
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
console.log(`Sucesso! ${batch.length} questões do Lote 26 adicionadas.`);
