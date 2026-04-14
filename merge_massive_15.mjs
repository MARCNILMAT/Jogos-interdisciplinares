import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2619;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 15 (Arte e Educação Física) a partir do ID: ${startId}`);

const batch = [
  // --- ARTE (6º ao 9º Ano) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual das cores abaixo é uma cor Primária?", options: ["Verde", "Laranja", "Amarelo", "Roxo"], answer: "Amarelo", explanation: "As cores primárias são Amarelo, Azul e Vermelho.", skill: "Teoria das Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo artístico que utiliza formas geométricas e fragmentadas (como o de Pablo Picasso) é o:", options: ["Realismo", "Surrealismo", "Cubismo", "Impressionismo"], answer: "Cubismo", explanation: "O Cubismo rompeu com a perspectiva tradicional.", skill: "Vanguardas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A arte urbana feita através de desenhos e pinturas em muros públicos é o:", options: ["Mosaico", "Grafite", "Escultura", "Tapeçaria"], answer: "Grafite", explanation: "O grafite é uma expressão visual da cultura Hip Hop.", skill: "Arte Urbana" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A técnica de animação que utiliza desenhos feitos a mão, um a um, para criar movimento é a:", options: ["Stop Motion", "Animação 2D Tradicional", "Animação 3D", "Live Action"], answer: "Animação 2D Tradicional", explanation: "Clássico dos estúdios Disney antigos.", skill: "Cinema" },

  // --- EDUCAÇÃO FÍSICA (6º ao 9º Ano) ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Basquetebol, uma cesta feita de fora da linha de três pontos vale quantos pontos?", options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"], answer: "3 pontos", explanation: "Como o nome diz, vale 3 pontos.", skill: "Basquete" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Qual destes é um fundamento exclusivo do Voleibol?", options: ["Drible", "Manchete", "Passe de peito", "Chute"], answer: "Manchete", explanation: "A manchete é usada para recepção e defesa.", skill: "Vôlei" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O esporte praticado em uma mesa com raquetes e uma bola pequena e leve é o:", options: ["Tênis", "Tênis de Mesa", "Badminton", "Golfe"], answer: "Tênis de Mesa", explanation: "Também conhecido popularmente como Ping-Pong.", skill: "Esportes de Mesa" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "A prática regular de alongamento ajuda principalmente a melhorar a:", options: ["Força", "Velocidade", "Flexibilidade", "Potência"], answer: "Flexibilidade", explanation: "Alongar os músculos aumenta a amplitude de movimento.", skill: "Saúde" }
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
