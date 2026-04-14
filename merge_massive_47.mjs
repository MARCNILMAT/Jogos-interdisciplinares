import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3032;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 47 (História e Geografia) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Roma", "Grécia", "Egito", "Babilônia"], answer: "Egito", explanation: "As pirâmides serviam de túmulos para os faraós.", skill: "Egito Antigo" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa durante a Idade Média foi o:", options: ["Capitalismo", "Feudalismo", "Democracia", "Socialismo"], answer: "Feudalismo", explanation: "Baseado na vassalagem e na economia agrária.", skill: "Idade Média" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que derrubou a monarquia em 1789 e criou o lema 'Liberdade, Igualdade e Fraternidade' foi a:", options: ["Revolução Industrial", "Revolução Francesa", "Revolução Americana", "Revolução Russa"], answer: "Revolução Francesa", explanation: "Marco fundamental do fim do Absolutismo.", skill: "Revolução Francesa" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O período da 'Guerra Fria' foi marcado pela disputa ideológica entre:", options: ["Alemanha e Japão", "Brasil e Argentina", "EUA e União Soviética", "França e Inglaterra"], answer: "EUA e União Soviética", explanation: "Capitalismo versus Socialismo.", skill: "Guerra Fria" },
  { grade: "7º", discipline: "História", type: "multiple", text: "A principal mão de obra utilizada no Brasil Colonial para o plantio de cana-de-açúcar foi:", options: ["Assalariada europeia", "Imigrante japonesa", "Pessoas escravizadas trazidas da África", "Senhores de Engenho"], answer: "Pessoas escravizadas trazidas da África", explanation: "Base de sustentação degradante da economia colonial.", skill: "Brasil Colônia" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de translação da Terra leva aproximadamente:", options: ["24 horas", "30 dias", "365 dias e 6 horas", "10 anos"], answer: "365 dias e 6 horas", explanation: "É a volta completa em torno do Sol.", skill: "Movimentos da Terra" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O Brasil está localizado em qual continente?", options: ["América do Norte", "África", "América do Sul", "Oceania"], answer: "América do Sul", explanation: "O Brasil ocupa grande parte da massa sul-americana.", skill: "Localização" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural entre os países no mundo moderno é a:", options: ["Urbanização", "Globalização", "Erosão", "Desertificação"], answer: "Globalização", explanation: "Promove a rapidez na troca de mercadorias e informações.", skill: "Globalização" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O país com a maior extensão territorial do mundo é a:", options: ["China", "Rússia", "Canadá", "EUA"], answer: "Rússia", explanation: "A Rússia se estende pela Europa e Ásia.", skill: "Extensões Territoriais" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O canal artificial que liga o Oceano Atlântico ao Pacífico na América Central é o:", options: ["Canal de Suez", "Estreito de Gibraltar", "Canal do Panamá", "Canal da Mancha"], answer: "Canal do Panamá", explanation: "Obra fundamental para o comércio marítimo global.", skill: "Geopolítica" }
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
console.log(`Sucesso! Lote 47 de ${batch.length} questões de História/Geografia adicionado.`);
