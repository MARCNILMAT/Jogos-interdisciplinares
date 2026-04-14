import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3138;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 56 (Religioso e Ed. Física - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "O que significa 'Alteridade' no contexto das relações humanas?", options: ["Pensar apenas em si mesmo", "Reconhecer e respeitar o outro como diferente de si", "Tentar mudar a opinião dos outros", "Ignorar as diferenças"], answer: "Reconhecer e respeitar o outro como diferente de si", explanation: "Alteridade é a base da convivência respeitosa.", skill: "Valores" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um rito de passagem comum em muitas religiões cristãs para bebês?", options: ["Casamento", "Batismo", "Unção dos Enfermos", "Ordenação"], answer: "Batismo", explanation: "O batismo marca a entrada na comunidade de fé.", skill: "Ritos" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "O princípio da 'Não-Violência' (Ahimsa) foi amplamente divulgado por qual líder indiano?", options: ["Nelson Mandela", "Mahatma Gandhi", "Martin Luther King", "Dalai Lama"], answer: "Mahatma Gandhi", explanation: "Gandhi usou a resistência pacífica para a independência da Índia.", skill: "Líderes Religiosos" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade religiosa é um direito que protege:", options: ["Apenas as religiões maiores", "Apenas quem não tem religião", "Toda e qualquer forma de crença ou descrença", "Apenas as religiões oficiais do governo"], answer: "Toda e qualquer forma de crença ou descrença", explanation: "Garante a diversidade de pensamento e fé.", skill: "Direitos Humanos" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Qual destes é um esporte de marca (onde o resultado é medido por tempo, distância ou peso)?", options: ["Futebol", "Atletismo (Salto em distância)", "Basquete", "Vôlei"], answer: "Atletismo (Salto em distância)", explanation: "O resultado é a distância exata alcançada.", skill: "Esportes" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "No Voleibol, qual o número máximo de toques que uma equipe pode dar antes de passar a bola?", options: ["1", "2", "3", "4"], answer: "3", explanation: "A equipe tem até 3 toques (exceto o bloqueio).", skill: "Vôlei" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O índice de Massa Corporal (IMC) é uma medida usada para avaliar:", options: ["A força muscular", "A velocidade", "A relação entre peso e altura (estado nutricional)", "A flexibilidade"], answer: "A relação entre peso e altura (estado nutricional)", explanation: "Ajuda a identificar baixo peso, peso normal ou obesidade.", skill: "Saúde" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "As Olimpíadas da Era Moderna tiveram sua primeira edição em qual cidade?", options: ["Paris", "Londres", "Atenas", "Roma"], answer: "Atenas", explanation: "Em 1896, honrando a tradição da Grécia Antiga.", skill: "História do Esporte" },

  // --- HISTÓRIA/GEO EXTRA ---
  { grade: "6º", discipline: "História", type: "multiple", text: "O período 'Neolítico' é também conhecido como a Idade da:", options: ["Pedra Lascada", "Pedra Polida", "Metais", "Informática"], answer: "Pedra Polida", explanation: "Marcado pelo surgimento da agricultura e domesticação de animais.", skill: "Pré-História" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O bioma que ocupa a maior parte da região Sul do Brasil é:", options: ["Cerrado", "Caatinga", "Pampas", "Pantanal"], answer: "Pampas", explanation: "Caracterizado por campos naturais e clima temperado.", skill: "Biomas" }
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
console.log(`Sucesso! Lote 56 de ${batch.length} questões multidisciplinares adicionado.`);
