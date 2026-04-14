import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2667;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 20 (Ciências e Geografia) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS 6º ao 9º Ano ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual destes é um exemplo de animal vertebrado?", options: ["Minhoca", "Caranguejo", "Peixe", "Aranha"], answer: "Peixe", explanation: "Vertebrados possuem coluna vertebral e crânio.", skill: "Zoologia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As plantas que não possuem sementes nem vasos condutores são as:", options: ["Briófitas (Musgos)", "Pteridófitas (Samambaias)", "Angiospermas", "Gimnospermas"], answer: "Briófitas (Musgos)", explanation: "Briófitas são plantas avasculares de pequeno porte.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema respiratório realiza a troca de oxigênio por qual gás?", options: ["Nitrogênio", "Gás Carbônico", "Hidrogênio", "Ozônio"], answer: "Gás Carbônico", explanation: "O CO2 é o subproduto que expiramos.", skill: "Fisiologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual a principal fonte de energia para o ciclo da água na Terra?", options: ["Lua", "Vento", "Sol", "Núcleo da Terra"], answer: "Sol", explanation: "O sol evapora a água, iniciando o ciclo.", skill: "Ecologia" },

  // --- GEOGRAFIA 6º ao 9º Ano ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de translação da Terra leva aproximadamente:", options: ["24 horas", "30 dias", "365 dias e 6 horas", "10 anos"], answer: "365 dias e 6 horas", explanation: "É o tempo para uma volta completa ao redor do Sol.", skill: "Movimentos da Terra" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A região Nordeste do Brasil é marcada pela presença da vegetação de:", options: ["Pampa", "Caatinga", "Mata Atlântica", "Pantanal"], answer: "Caatinga", explanation: "Bioma exclusivo do semiárido nordestino.", skill: "Biomas" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural entre os países no mundo moderno é a:", options: ["Globalização", "Urbanização", "Colonização", "Industralização"], answer: "Globalização", explanation: "A globalização conecta o mundo através do comércio e tecnologia.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual país é conhecido como a maior potência econômica do mundo?", options: ["Alemanha", "Japão", "Estados Unidos (EUA)", "China"], answer: "Estados Unidos (EUA)", explanation: "Os EUA detêm o maior PIB global.", skill: "Geografia Geral" }
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
console.log(`Sucesso! ${batch.length} questões de Ciências e Geografia adicionadas.`);
