import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2637;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 17 (Ciências e Geografia) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS 6º ao 9º Ano ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Como se chama o processo de transformação da água do estado gasoso para o líquido?", options: ["Fusão", "Condensação", "Vaporização", "Solidificação"], answer: "Condensação", explanation: "Ocorre quando o vapor de água esfria.", skill: "Estados da Matéria" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As plantas angiospermas são caracterizadas pela presença de:", options: ["Apenas sementes", "Apenas flores", "Flores e Frutos", "Nenhuma das anteriores"], answer: "Flores e Frutos", explanation: "Angiospermas são o grupo mais diversificado de plantas.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema respiratório tem como principal função a troca de quais gases?", options: ["Oxigênio e Nitrogênio", "Oxigênio e Gás Carbônico", "Gás Carbônico e Hidrogênio", "Ozônio e Oxigênio"], answer: "Oxigênio e Gás Carbônico", explanation: "Entrada de O2 e saída de CO2.", skill: "Fisiologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual a principal fonte de energia que mantém o ciclo da água na Terra?", options: ["O Vento", "O Calor do Sol", "O Núcleo da Terra", "A Eletricidade"], answer: "O Calor do Sol", explanation: "O sol evapora a água, iniciando o ciclo.", skill: "Ecologia" },

  // --- GEOGRAFIA 6º ao 9º Ano ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de rotação da Terra dura aproximadamente:", options: ["12 horas", "24 horas", "365 dias", "30 dias"], answer: "24 horas", explanation: "É o tempo que a Terra leva para girar em torno de si mesma.", skill: "Movimentos da Terra" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A região Norte do Brasil é marcada pela presença da:", options: ["Mata Atlântica", "Floresta Amazônica", "Caatinga", "Pampa"], answer: "Floresta Amazônica", explanation: "A maior floresta tropical do mundo fica no Norte.", skill: "Biomas" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural entre os países no mundo moderno é a:", options: ["Globalização", "Colonização", "Urbanização", "Indústria"], answer: "Globalização", explanation: "A globalização conecta o mundo através do comércio e tecnologia.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual país é conhecido como a 'Gigante da Ásia' e possui a maior população do mundo?", options: ["Japão", "China", "Índia", "Rússia"], answer: "China", explanation: "A China é uma das maiores potências globais.", skill: "Geografia da Ásia" }
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
