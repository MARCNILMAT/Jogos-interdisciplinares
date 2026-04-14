import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2691;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 22 (Exatas e Humanas) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 15 x 6?", options: ["80", "90", "100", "75"], answer: "90", explanation: "15 x 2 = 30; 30 x 3 = 90.", skill: "Operações" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A soma -8 + 15 resulta em:", options: ["-7", "7", "23", "-23"], answer: "7", explanation: "15 - 8 = 7.", skill: "Números Inteiros" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a área de um quadrado com lado de 5cm?", options: ["20cm²", "25cm²", "10cm²", "30cm²"], answer: "25cm²", explanation: "Lado x Lado = 5 x 5 = 25.", skill: "Geometria" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A hipotenusa é o lado oposto ao ângulo:", options: ["Agudo", "Obtuso", "Reto", "Raso"], answer: "Reto", explanation: "No triângulo retângulo, a hipotenusa opõe-se ao ângulo de 90º.", skill: "Pitágoras" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o plural de 'Pão'?", options: ["Pãos", "Pães", "Pãis", "Pãoes"], answer: "Pães", explanation: "Plural clássico de pão.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual o antônimo de 'Orgulho'?", options: ["Vaidade", "Modéstia", "Arrogância", "Honra"], answer: "Modéstia", explanation: "Modéstia é o oposto de orgulho.", skill: "Semântica" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Na frase 'Eu viarei', o verbo está no:", options: ["Presente", "Pretérito", "Futuro", "Imperfeito"], answer: "Futuro", explanation: "Indica algo que ainda ocorrerá.", skill: "Verbos" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'Iracema'?", options: ["Machado de Assis", "José de Alencar", "Monteiro Lobato", "Jorge Amado"], answer: "José de Alencar", explanation: "Obra prima do Romantismo indigenista.", skill: "Literatura" },

  // --- HISTÓRIA ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as Pirâmides de Gizé?", options: ["Grécia", "Roma", "Egito", "Mesopotâmia"], answer: "Egito", explanation: "As pirâmides eram túmulos de faraós.", skill: "Antiguidade" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema onde o poder pertencia aos donos de terras (senhores) era o:", options: ["Capitalismo", "Feudalismo", "Democracia", "Socialismo"], answer: "Feudalismo", explanation: "Base da Idade Média europeia.", skill: "Idade Média" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que usou a guilhotina e lema 'Liberdade, Igualdade, Fraternidade' foi a:", options: ["Americana", "Francesa", "Industrial", "Russa"], answer: "Francesa", explanation: "Marco do fim do Absolutismo em 1789.", skill: "Revolução Francesa" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O conflito mundial entre 1939 e 1945 foi a:", options: ["1ª Guerra Mundial", "Guerra Fria", "2ª Guerra Mundial", "Guerra do Vietnã"], answer: "2ª Guerra Mundial", explanation: "Envolveu potências do Eixo e Aliados.", skill: "Século XX" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual destes é um animal Mamífero?", options: ["Jacaré", "Baleia", "Galinha", "Sapo"], answer: "Baleia", explanation: "A baleia mama e possui pulmões.", skill: "Zoologia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O órgão responsável pela fotossíntese nas plantas é geralmente a:", options: ["Raiz", "Flor", "Folha", "Tronco"], answer: "Folha", explanation: "Contém clorofila e captura luz solar.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual gás é essencial para a nossa respiração?", options: ["Oxigênio", "Gás Carbônico", "Nitrogênio", "Hélio"], answer: "Oxigênio", explanation: "Nossas células usam O2 para produzir energia.", skill: "Corpo Humano" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual o planeta mais próximo do Sol?", options: ["Vênus", "Marte", "Mercúrio", "Terra"], answer: "Mercúrio", explanation: "Menor planeta e o mais interno do sistema solar.", skill: "Astronomia" }
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
console.log(`Sucesso! ${batch.length} questões variadas adicionadas.`);
