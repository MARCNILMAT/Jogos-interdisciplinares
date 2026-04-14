import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2501;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive Arte e EdFisica a partir do ID: ${startId}`);

const batch = [
  // --- ARTE 6º ANO ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A técnica de criar imagens a partir de pequenos pedaços de vidro, pedra ou cerâmica é o:", options: ["Grafite", "Mosaico", "Escultura", "Pintura a óleo"], answer: "Mosaico", explanation: "O mosaico é uma arte decorativa muito antiga.", skill: "Técnicas Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual destes materiais é mais usado para fazer uma Gravura em relevo chamada Xilogravura?", options: ["Pedra", "Metal", "Madeira", "Plástico"], answer: "Madeira", explanation: "Xilo significa madeira em grego.", skill: "Gravura" },

  // --- ARTE 7º ANO ---
  { grade: "7º", discipline: "Arte", type: "multiple", text: "A arte de contar histórias através da encenação e interpretação de atores em um palco é o:", options: ["Cinema", "Teatro", "Circo", "Literatura"], answer: "Teatro", explanation: "O teatro nasceu na Grécia Antiga.", skill: "Teatro" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Quem é o profissional responsável por organizar e dirigir as cenas em uma peça de teatro ou filme?", options: ["Ator", "Diretor (Encenador)", "Figurinista", "Cenógrafo"], answer: "Diretor (Encenador)", explanation: "O diretor coordena toda a visão artística da obra.", skill: "Linguagem Teatral" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "A técnica de capturar imagens pela luz em um meio sensível é a:", options: ["Pintura", "Fotografia", "Escultura", "Xilogravura"], answer: "Fotografia", explanation: "Foto (luz) + grafia (escrita).", skill: "Fotografia" },

  // --- ARTE 8º ANO ---
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Qual estilo artístico marcou as igrejas históricas de Minas Gerais, com Aleijadinho como grande expoente?", options: ["Gótico", "Renascimento", "Barroco Mineiro", "Modernismo"], answer: "Barroco Mineiro", explanation: "Caracterizado pelo uso de pedra-sabão e riqueza de detalhes.", skill: "Barroco" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O movimento de 1922 que buscou criar uma arte verdadeiramente brasileira foi a:", options: ["Revolução Industrial", "Semana de Arte Moderna", "Independência do Brasil", "Inconfidência Mineira"], answer: "Semana de Arte Moderna", explanation: "Ocorreu no Teatro Municipal de São Paulo.", skill: "Modernismo" },

  // --- ARTE 9º ANO ---
  { grade: "9º", discipline: "Arte", type: "multiple", text: "Na arte contemporânea, quando o próprio corpo do artista é o meio principal da obra, chamamos de:", options: ["Pintura", "Performance", "Cenografia", "Arquitetura"], answer: "Performance", explanation: "A obra acontece através da ação do artista.", skill: "Performance" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O uso de tecnologias como vídeo e som para criar uma experiência sensorial em um espaço é a Arte:", options: ["Audiovisual", "Acadêmica", "Clássica", "Primitiva"], answer: "Audiovisual", explanation: "Combina som e imagem.", skill: "Linguagem Audiovisual" },

  // --- EDUCAÇÃO FÍSICA 6º ANO ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "A prova de corrida mais rápida do Atletismo é a de:", options: ["100 metros rasos", "400 metros", "Maratona", "Salto em distância"], answer: "100 metros rasos", explanation: "É a prova máxima de velocidade pura.", skill: "Atletismo" },
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, o jogador que pode usar as mãos dentro de sua área é o:", options: ["Fixo", "Ala", "Pivô", "Goleiro"], answer: "Goleiro", explanation: "O goleiro defende o gol e é o único que pode tocar a bola com as mãos.", skill: "Futsal" },

  // --- EDUCAÇÃO FÍSICA 7º ANO ---
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Qual é o principal objetivo do jogo de queimada?", options: ["Fazer gols", "Acertar a bola nos adversários para eliminá-los", "Marcar pontos com cesta", "Correr mais rápido"], answer: "Acertar a bola nos adversários para eliminá-los", explanation: "É um jogo popular de esquiva e mira.", skill: "Jogos e Brincadeiras" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "No Voleibol, como se chama o toque feito com os braços unidos para defender um saque?", options: ["Saque", "Manchete", "Levantamento", "Bloqueio"], answer: "Manchete", explanation: "A manchete é a base da defesa no vôlei.", skill: "Voleibol" },

  // --- EDUCAÇÃO FÍSICA 8º ANO ---
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "Os exercícios de flexibilidade ajudam a:", options: ["Aumentar a força", "Melhorar a amplitude dos movimentos das articulações", "Correr mais rápido", "Emagrecer rápido"], answer: "Melhorar a amplitude dos movimentos das articulações", explanation: "Alongamento é essencial para evitar lesões.", skill: "Ginástica" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O Basquetebol foi criado em qual país?", options: ["Brasil", "Inglaterra", "Estados Unidos", "França"], answer: "Estados Unidos", explanation: "Criado por James Naismith em 1891.", skill: "Basquetebol" },

  // --- EDUCAÇÃO FÍSICA 9º ANO ---
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "O uso de substâncias proibidas para aumentar o desempenho esportivo é chamado de:", options: ["Aquecimento", "Doping", "Treinamento", "Hidratação"], answer: "Doping", explanation: "O doping é ilegal e perigoso para a saúde.", skill: "Saúde" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "A Maratona tem um percurso oficial de quantos quilômetros aproximadamente?", options: ["10 km", "21 km", "42 km", "100 km"], answer: "42 km", explanation: "Precisamente 42,195 km.", skill: "Atletismo" }
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
console.log(`Sucesso! ${batch.length} questões de Arte e EdFisica adicionadas.`);
