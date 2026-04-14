import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2381;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Inserindo a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS: MISTURAS E TRANSFORMAÇÕES (6º ANO) ---
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é uma 'Mistura Homogênea'?",
    options: ["Aquela onde vemos duas ou mais fases", "Aquela onde vemos apenas uma fase uniforme", "Onde as substâncias não se misturam", "Onde há apenas óleo e água"],
    answer: "Aquela onde vemos apenas uma fase uniforme",
    explanation: "Exemplo: Água com sal totalmente dissolvido.",
    skill: "Misturas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual método é usado para separar areia de água?",
    options: ["Destilação", "Filtração", "Evaporação", "Decantação"],
    answer: "Filtração",
    explanation: "O filtro retém o sólido (areia) e deixa o líquido (água) passar.",
    skill: "Separação de Misturas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual destes é um exemplo de 'Transformação Química'?",
    options: ["Papel rasgado", "Gelo derretendo", "Ferro enferrujando", "Água fervendo"],
    answer: "Ferro enferrujando",
    explanation: "Na ferrugem, surge uma nova substância (óxido de ferro).",
    skill: "Transformações Químicas"
  },

  // --- CIÊNCIAS: CÉLULAS (6º ANO) ---
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Como se chama a parte da célula que controla todas as suas funções e contém o material genético?",
    options: ["Membrana", "Citoplasma", "Núcleo", "Vacúolo"],
    answer: "Núcleo",
    explanation: "O núcleo funciona como o 'cérebro' da célula.",
    skill: "Citologia"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual organela é exclusiva das células vegetais e realiza a fotossíntese?",
    options: ["Ribossomo", "Lisossomo", "Cloroplasto", "Mitochôndria"],
    answer: "Cloroplasto",
    explanation: "O cloroplasto contém clorofila e captura a luz solar.",
    skill: "Citologia"
  },

  // --- GEOGRAFIA: ORIENTAÇÃO E LOCALIZAÇÃO (6º ANO) ---
  {
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual instrumento usa uma agulha imantada para apontar sempre para o Norte?",
    options: ["Termômetro", "Bússola", "Cronômetro", "Régua"],
    answer: "Bússola",
    explanation: "A bússola se alinha ao campo magnético da Terra.",
    skill: "Orientação"
  },
  {
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Como chamamos a distância em graus de qualquer ponto da Terra até a Linha do Equador?",
    options: ["Longitude", "Latitude", "Altitude", "Amplitude"],
    answer: "Latitude",
    explanation: "As latitudes vão de 0º a 90º Norte ou Sul.",
    skill: "Coordenadas Geográficas"
  },
  {
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Os meridianos, que dividem a Terra verticalmente, definem a:",
    options: ["Latitude", "Longitude", "Temperatura", "Umidade"],
    answer: "Longitude",
    explanation: "A longitude tem como referência o Meridiano de Greenwich (0º).",
    skill: "Coordenadas Geográficas"
  },

  // --- GEOGRAFIA: FUSOS HORÁRIOS (6º ANO) ---
  {
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Quantos fusos horários teóricos a Terra possui ao todo?",
    options: ["12", "24", "48", "60"],
    answer: "24",
    explanation: "A Terra gira 360º em 24h, resultando em 24 fusos de 15º cada.",
    skill: "Fusos Horários"
  },
  {
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Se viajamos de Leste para Oeste, o que acontece com as horas?",
    options: ["As horas aumentam", "As horas diminuem (ficam mais cedo)", "As horas ficam iguais", "O tempo para"],
    answer: "As horas diminuem (ficam mais cedo)",
    explanation: "O sol nasce primeiro no Leste, então quem está no Oeste está 'atrás' no tempo.",
    skill: "Fusos Horários"
  }
];

// Atribuir IDs sequenciais
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
console.log(`Sucesso! ${batch.length} questões adicionadas (Total final aprox: ${startId + batch.length - 1} IDs).`);
