import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2675;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 21 (Multidisciplinar) a partir do ID: ${startId}`);

const batch = [
  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "As cores laranja, verde e roxo são classificadas como:", options: ["Primárias", "Secundárias", "Terciárias", "Neutras"], answer: "Secundárias", explanation: "São obtidas pela mistura de duas cores primárias.", skill: "Teoria das Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Quem pintou a 'Monalisa'?", options: ["Michelangelo", "Leonardo da Vinci", "Donatello", "Raphael"], answer: "Leonardo da Vinci", explanation: "Ícone do Renascimento italiano.", skill: "Renascimento" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O estilo artístico caracterizado por formas geométricas (como o de Picasso) é o:", options: ["Cubismo", "Surrealismo", "Realismo", "Impressionismo"], answer: "Cubismo", explanation: "O Cubismo rompeu com a perspectiva tradicional.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A arte que utiliza o próprio corpo do artista como meio de expressão é a:", options: ["Instalação", "Performance", "Cenografia", "Gravura"], answer: "Performance", explanation: "A obra acontece através da ação do artista.", skill: "Performance" },

  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'maçã' in English?", options: ["Grape", "Orange", "Apple", "Banana"], answer: "Apple", explanation: "Fruta comum.", skill: "Vocabulary" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "I ___ happy today.", options: ["am", "is", "are", "be"], answer: "am", explanation: "Verb to be: I am.", skill: "To Be" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Yesterday, I ___ to the park.", options: ["go", "goes", "went", "gone"], answer: "went", explanation: "Simple Past of go is went.", skill: "Past Simple" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "If I ___ rich, I would travel.", options: ["am", "is", "was", "were"], answer: "were", explanation: "Second Conditional uses were for all persons.", skill: "Conditionals" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, o jogador que pode usar as mãos na área é o:", options: ["Fixo", "Ala", "Goleiro", "Pivô"], answer: "Goleiro", explanation: "O goleiro defende com as mãos dentro da sua área.", skill: "Futsal" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Quantos jogadores titulares tem uma equipe de Voleibol?", options: ["5", "6", "11", "7"], answer: "6", explanation: "Seis atletas por time em quadra.", skill: "Voleibol" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "No Basquetebol, uma cesta de lance livre vale:", options: ["1 ponto", "2 pontos", "3 pontos", "5 pontos"], answer: "1 ponto", explanation: "Lance livre após faltas vale 1 ponto.", skill: "Basquete" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "Qual destes indica uma prática de atividade aeróbica?", options: ["Levantamento de peso", "Caminhada rápida", "Yoga", "Pilates"], answer: "Caminhada rápida", explanation: "Envolve oxigenação contínua por longo período.", skill: "Saúde" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um símbolo universal da paz?", options: ["Caveira", "Pomba Branca", "Raio", "Espada"], answer: "Pomba Branca", explanation: "A pomba com ramo de oliveira simboliza a paz.", skill: "Símbolos" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito às crenças alheias é chamado de:", options: ["Intolerância", "Tolerância Religiosa", "Ódio", "Individualismo"], answer: "Tolerância Religiosa", explanation: "Básico para convivência democrática.", skill: "Diversidade" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "Ética é o estudo filosófico da:", options: ["Culinária", "Moral e conduta humana", "Astronomia", "Geologia"], answer: "Moral e conduta humana", explanation: "Estuda o que é certo e errado.", skill: "Ética" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade religiosa no Brasil é garantida pela:", options: ["Televisão", "Constituição Federal", "Internet", "Empresa"], answer: "Constituição Federal", explanation: "Nossa lei maior garante livre culto.", skill: "Direitos" }
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
console.log(`Sucesso! ${batch.length} questões do Lote 21 adicionadas.`);
