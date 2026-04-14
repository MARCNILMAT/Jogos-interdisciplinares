import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3106;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 53 (Matemática, Ciências e História) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 25 x 4?", options: ["80", "90", "100", "120"], answer: "100", explanation: "25 x 4 = 100.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de x na equação x + 12 = 30?", options: ["15", "18", "20", "22"], answer: "18", explanation: "x = 30 - 12 = 18.", skill: "Equações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 121 é:", options: ["9", "10", "11", "12"], answer: "11", explanation: "11 x 11 = 121.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Um ângulo reto mede quantos graus?", options: ["45º", "90º", "180º", "360º"], answer: "90º", explanation: "Ângulos retos medem exatamente 90 graus.", skill: "Geometria" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual destes é um exemplo de animal vertebrado?", options: ["Minhoca", "Peixe", "Borboleta", "Aranha"], answer: "Peixe", explanation: "Vertebrados possuem coluna vertebral.", skill: "Zoologia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As briófitas (musgos) são caracterizadas por serem:", options: ["Plantas gigantes", "Vasculares", "Avasculares (sem vasos condutores)", "Plantas com flores"], answer: "Avasculares (sem vasos condutores)", explanation: "Por isso são pequenas e vivem em locais úmidos.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema do corpo humano que bombeia o sangue é o:", options: ["Respiratório", "Digestório", "Circulatório", "Nervoso"], answer: "Circulatório", explanation: "O coração é o centro deste sistema.", skill: "Corpo Humano" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A primeira lei de Newton é também conhecida como lei da:", options: ["Ação e Reação", "Inércia", "Gravidade", "Força"], answer: "Inércia", explanation: "Diz que objetos em repouso tendem a ficar em repouso.", skill: "Física" },

  // --- HISTÓRIA ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Roma", "Grécia", "Egito", "Babilônia"], answer: "Egito", explanation: "As pirâmides serviam de túmulos para os faraós.", skill: "Egito Antigo" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa durante a Idade Média foi o:", options: ["Capitalismo", "Feudalismo", "Democracia", "Socialismo"], answer: "Feudalismo", explanation: "Baseado na vassalagem e na economia agrária.", skill: "Idade Média" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que derrubou a monarquia em 1789 e criou o lema 'Liberdade, Igualdade e Fraternidade' foi a:", options: ["Revolução Industrial", "Revolução Francesa", "Revolução Americana", "Revolução Russa"], answer: "Revolução Francesa", explanation: "Marco fundamental do fim do Absolutismo.", skill: "Revolução Francesa" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O período da 'Guerra Fria' foi marcado pela disputa ideológica entre:", options: ["Alemanha e Japão", "Brasil e Argentina", "EUA e União Soviética", "França e Inglaterra"], answer: "EUA e União Soviética", explanation: "Capitalismo versus Socialismo.", skill: "Guerra Fria" }
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
console.log(`Sucesso! Lote 53 de ${batch.length} questões multidisciplinares adicionado.`);
