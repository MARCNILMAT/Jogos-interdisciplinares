import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3476;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 72 (Matemática, Português e Ciências - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA (6º ao 9º) ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 15 x 6?", options: ["80", "90", "100", "110"], answer: "90", explanation: "15 x 6 = 90.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 50% de 350?", options: ["150", "175", "180", "200"], answer: "175", explanation: "50% é a metade (350 / 2 = 175).", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 144 é:", options: ["11", "12", "13", "14"], answer: "12", explanation: "12 x 12 = 144.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 10x = 1000 é:", options: ["10", "100", "1000", "50"], answer: "100", explanation: "x = 1000 / 10 = 100.", skill: "Equações" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O perímetro de um triângulo equilátero com lado 7cm é:", options: ["14cm", "21cm", "28cm", "35cm"], answer: "21cm", explanation: "Lado x 3 = 7 x 3 = 21.", skill: "Perímetro" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O número -8 é maior ou menor que -3?", options: ["Maior", "Menor", "Igual", "Nenhuma"], answer: "Menor", explanation: "Na reta numérica, -8 está mais à esquerda que -3.", skill: "Inteiros" },

  // --- PORTUGUÊS (6º ao 9º) ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um ADJETIVO?", options: ["Correr", "Bonita", "Cadeira", "Sempre"], answer: "Bonita", explanation: "Indica uma característica.", skill: "Classes de Palavras" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O antônimo de 'Orgulho' é:", options: ["Modéstia", "Vaidade", "Arrogância", "Prepotência"], answer: "Modéstia", explanation: "Modéstia é o oposto de orgulho.", skill: "Semântica" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Na frase 'Eu e ele fomos ao cinema', o sujeito é:", options: ["Simples", "Composto", "Oculto", "Inexistente"], answer: "Composto", explanation: "Possui dois núcleos: Eu e ele.", skill: "Sintaxe" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'O Guarani'?", options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Monteiro Lobato"], answer: "José de Alencar", explanation: "Obra fundamental do Romantismo brasileiro.", skill: "Literatura" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o coletivo de 'Estrelas'?", options: ["Cardume", "Constelação", "Alcateia", "Matilha"], answer: "Constelação", explanation: "Conjunto de estrelas no céu.", skill: "Substantivos" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Médico' é classificada como:", options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Proparoxítona", explanation: "A antepenúltima sílaba é tônica.", skill: "Acentuação" },

  // --- CIÊNCIAS (6º ao 9º) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual é o maior planeta do Sistema Solar?", options: ["Terra", "Marte", "Júpiter", "Saturno"], answer: "Júpiter", explanation: "Júpiter é um gigante gasoso muito maior que a Terra.", skill: "Astronomia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes animais faz parte do grupo dos Anfíbios?", options: ["Cobra", "Sapo", "Peixe", "Pássaro"], answer: "Sapo", explanation: "Anfíbios têm pele úmida e ciclo de vida duplo.", skill: "Zoologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O principal órgão do sistema circulatório que bombeia sangue é o:", options: ["Pulmão", "Cérebro", "Coração", "Fígado"], answer: "Coração", explanation: "O coração age como uma bomba muscular.", skill: "Fisiologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A primeira lei de Newton é também conhecida como lei da:", options: ["Inércia", "Ação e Reação", "Gravidade", "Força"], answer: "Inércia", explanation: "Indica a tendência de um corpo manter seu estado inicial.", skill: "Física" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A mistura de água e sal totalmente dissolvido é:", options: ["Substância Pura", "Mistura Homogênea", "Mistura Heterogênea", "Elemento"], answer: "Mistura Homogênea", explanation: "Não se distinguem as fases.", skill: "Química" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O processo em que a planta produz oxigênio e glicose usando luz é a:", options: ["Respiração", "Digestão", "Fotossíntese", "Transpiração"], answer: "Fotossíntese", explanation: "Conversão de energia solar em química.", skill: "Botânica" }
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
console.log(`Sucesso! Lote 72 de ${batch.length} questões multidisciplinares adicionado.`);
