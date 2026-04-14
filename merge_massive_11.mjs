import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2569;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massivo 11 (Arte e EdFisica) a partir do ID: ${startId}`);

const batch = [
  // --- ARTE (6º ao 9º Ano) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual das cores abaixo é considerada Neutra na teoria das cores?", options: ["Vermelho", "Azul", "Branco", "Amarelo"], answer: "Branco", explanation: "Cores neutras (branco, preto, cinza) não possuem matiz definida.", skill: "Teoria das Cores" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A arte de dobrar papel para criar objetos ou animais é chamada de:", options: ["Kirigami", "Origami", "Mosaico", "Escultura"], answer: "Origami", explanation: "Origami é uma arte tradicional japonesa.", skill: "Técnicas Artísticas" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O cinema é conhecido como qual arte?", options: ["Sétima Arte", "Nona Arte", "Primeira Arte", "Terceira Arte"], answer: "Sétima Arte", explanation: "O termo foi cunhado por Ricciotto Canudo em 1912.", skill: "Cinema" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "A técnica de animação que utiliza bonecos ou objetos reais e os move quadro a quadro é o:", options: ["2D", "Stop Motion", "3D", "Live Action"], answer: "Stop Motion", explanation: "Exemplo: Pinóquio ou Fuga das Galinhas.", skill: "Cinema" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "As famosas estátuas dos 'Doze Profetas' de Congonhas (MG) foram feitas de:", options: ["Ouro", "Bronze", "Mármore", "Pedra-Sabão"], answer: "Pedra-Sabão", explanation: "Aleijadinho utilizou a maciez da pedra-sabão para esculpir seus detalhes.", skill: "Barroco Mineiro" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A arte contemporânea que utiliza o lixo ou materiais descartados para criar obras é chamada de:", options: ["Arte Acadêmica", "Assemblage", "Minimalismo", "Impressionismo"], answer: "Assemblage", explanation: "Montagem de objetos díspares em uma nova unidade.", skill: "Arte Contemporânea" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O uso de luzes e projeções em prédios de uma cidade é um exemplo de:", options: ["Pintura", "Video Mapping (Projeção Mapeada)", "Escultura", "Cenografia"], answer: "Video Mapping (Projeção Mapeada)", explanation: "Transforma superfícies arquitetônicas em telas dinâmicas.", skill: "Linguagem Audiovisual" },

  // --- EDUCAÇÃO FÍSICA (6º ao 9º Ano) ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Qual destes é um salto do Atletismo realizado para frente em uma caixa de areia?", options: ["Salto em Altura", "Salto em Distância", "Salto Triplo", "Salto com Vara"], answer: "Salto em Distância", explanation: "O atleta corre e salta o mais longe possível na areia.", skill: "Atletismo" },
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Voleibol, como se chama o ataque contundente feito de cima para baixo em direção à quadra adversária?", options: ["Bloqueio", "Levantamento", "Cortada", "Manchete"], answer: "Cortada", explanation: "É a principal forma de marcar pontos ofensivamente.", skill: "Voleibol" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O jogo de Xadrez é classificado como um:", options: ["Esporte de invasão", "Esporte de marca", "Esporte de mesa / Jogo de Tabuleiro", "Esporte de combate"], answer: "Esporte de mesa / Jogo de Tabuleiro", explanation: "Foca em estratégia e raciocínio lógico.", skill: "Jogos de Tabuleiro" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "A prática da caminhada é um exercício classificado como:", options: ["Anaeróbico", "Aeróbico", "Estático", "Musculação"], answer: "Aeróbico", explanation: "Usa oxigênio para produzir energia por um período prolongado.", skill: "Saúde" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O 'Handebol' é um esporte jogado com as mãos e o seu objetivo principal é fazer:", options: ["Cestas", "Gols", "Touchdowns", "Pontos de rede"], answer: "Gols", explanation: "O objetivo é colocar a bola dentro da meta (gol) adversária.", skill: "Handebol" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "A ginástica que envolve o uso de aparelhos como argolas, trave e barras é a:", options: ["Ginástica Rítmica", "Ginástica Artística", "Ginástica para Todos", "Ginástica de Academia"], answer: "Ginástica Artística", explanation: "Também conhecida como ginástica olímpica.", skill: "Ginástica" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "Qual é o principal benefício de manter uma rotina de alongamento?", options: ["Aumentar a força", "Ganhar peso", "Melhorar a flexibilidade e prevenir lesões", "Ficar mais rápido"], answer: "Melhorar a flexibilidade e prevenir lesões", explanation: "O alongamento mantém os músculos elásticos e as articulações saudáveis.", skill: "Saúde" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "O principal hormônio relaxante liberado após a atividade física, gerando bem-estar, é a:", options: ["Adrenalina", "Cortisol", "Endorfina", "Glicose"], answer: "Endorfina", explanation: "Funciona como um analgésico natural do corpo.", skill: "Qualidade de Vida" }
];

// Reuso da lógica de IDs automáticos
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
console.log(`Sucesso! ${batch.length} questões massivas (Lote 11) de Arte e EdFisica adicionadas.`);
