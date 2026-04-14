import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3256;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 62 (Multidisciplinar Premium) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Roma", "Grécia", "Egito", "Mesopotâmia"], answer: "Egito", explanation: "As pirâmides eram túmulos monumentais para os faraós.", skill: "Egito" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa na Idade Média foi o:", options: ["Capitalismo", "Feudalismo", "Democracia", "Socialismo"], answer: "Feudalismo", explanation: "Baseado no suseranato e na vassalagem por terra.", skill: "Feudalismo" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que derrubou a monarquia absoluta francesa em 1789 foi a:", options: ["Industrial", "Francesa", "Americana", "Russa"], answer: "Francesa", explanation: "Marco fundamental da Idade Contemporânea.", skill: "Revolução Francesa" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O período da 'Guerra Fria' foi marcado pela disputa ideológica entre:", options: ["EUA e União Soviética", "Brasil e Argentina", "Alemanha e Japão", "França e Inglaterra"], answer: "EUA e União Soviética", explanation: "Capitalismo versus Socialismo.", skill: "Guerra Fria" },
  { grade: "7º", discipline: "História", type: "multiple", text: "A principal mão de obra utilizada no Brasil Colonial açucareiro foi a de pessoas:", options: ["Assalariadas", "Imigrantes", "Escravizadas trazidas da África", "Servos feudais"], answer: "Escravizadas trazidas da África", explanation: "Sustentou a economia colonial por séculos.", skill: "Brasil Colônia" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha imaginária que divide a Terra em hemisférios Norte e Sul?", options: ["Meridiano de Greenwich", "Linha do Equador", "Trópico de Câncer", "Círculo Polar"], answer: "Linha do Equador", explanation: "Divide a Terra horizontalmente ao meio.", skill: "Coordenadas" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual o maior país em extensão territorial da América do Sul?", options: ["Argentina", "Brasil", "Chile", "Peru"], answer: "Brasil", explanation: "O Brasil ocupa quase metade da América do Sul.", skill: "Localização" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural mundial é o de:", options: ["Globalização", "Urbanização", "Desertificação", "Erosão"], answer: "Globalização", explanation: "Aceleração das conexões pós-anos 90.", skill: "Mundo Atual" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O fenômeno do buraco na camada de ozônio é agravado pelo gás:", options: ["Oxigênio", "CFC (Clorofluorcarboneto)", "Nitrogênio", "He"], answer: "CFC (Clorofluorcarboneto)", explanation: "O CFC rompe moléculas de ozônio na estratosfera.", skill: "Meio Ambiente" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de a Terra girar em torno de si mesma (eixo) chama-se:", options: ["Translação", "Rotação", "Oscilação", "Nutação"], answer: "Rotação", explanation: "Leva 24 horas e gera dias e noites.", skill: "Movimentos" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um livro sagrado para o Islamismo?", options: ["Bíblia", "Alcorão", "Torá", "Vedas"], answer: "Alcorão", explanation: "Contém as revelações de Alá ao profeta Maomé.", skill: "Livros" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito às diferentes crenças é fundamental para a:", options: ["Intolerância", "Convivência Social", "Desigualdade", "Discriminação"], answer: "Convivência Social", explanation: "Garante a paz em sociedades diversas.", skill: "Valores" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade de crença no Brasil é garantida pela:", options: ["Televisão", "Constituição Federal", "Igreja Local", "Internet"], answer: "Constituição Federal", explanation: "Nossa lei maior assegura o Estado Laico.", skill: "Direitos" },

  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual destas é uma cor primária?", options: ["Verde", "Vermelho", "Laranja", "Roxo"], answer: "Vermelho", explanation: "As cores primárias são Vermelho, Amarelo e Azul.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo que utiliza formatos geométricos e fragmentados é o:", options: ["Cubismo", "Realismo", "Barroco", "Pop Art"], answer: "Cubismo", explanation: "Principal expoente: Pablo Picasso.", skill: "Vanguardas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A técnica de dobrar papel para criar objetos chama-se:", options: ["Mosaico", "Escultura", "Origami", "Grafite"], answer: "Origami", explanation: "Tradição milenar japonesa.", skill: "Expressão" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O cinema é conhecido como qual das artes?", options: ["3ª Arte", "7ª Arte", "9ª Arte", "1ª Arte"], answer: "7ª Arte", explanation: "Classificação acadêmica para as linguagens artísticas.", skill: "Audiovisual" },

  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Qual a tradução para 'Blue'?", options: ["Vermelho", "Verde", "Azul", "Branco"], answer: "Azul", explanation: "Blue = Azul.", skill: "Colors" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "Como se diz 'Pai' em Inglês?", options: ["Mother", "Brother", "Father", "Sister"], answer: "Father", explanation: "Father = Pai.", skill: "Family" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "The opposite of 'Fast' is:", options: ["Slow", "Quick", "Strong", "Big"], answer: "Slow", explanation: "Fast (rápido) x Slow (lento).", skill: "Adjectives" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Yesterday, I ___ to the beach.", options: ["go", "goes", "went", "going"], answer: "went", explanation: "Went é o passado simples de go.", skill: "Simple Past" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, quantos jogadores cada equipe tem em quadra?", options: ["5", "6", "11", "7"], answer: "5", explanation: "O futsal é jogado com 5 titulares por time.", skill: "Futsal" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O saque inicia a disputa de pontos em qual esporte?", options: ["Futebol", "Vôlei", "Basquete", "Handebol"], answer: "Vôlei", explanation: "Inicia com o saque por cima ou sob a mão.", skill: "Vôlei" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "A prática de exercícios físicos ajuda a prevenir a:", options: ["Miopia", "Obesidade", "Cárie", "Gripe"], answer: "Obesidade", explanation: "Promove queima calórica e saúde.", skill: "Bem-estar" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "As Olimpíadas da Era Moderna começaram em Atenas em qual ano?", options: ["1500", "1896", "1950", "2000"], answer: "1896", explanation: "As primeiras ocorreram na capital da Grécia.", skill: "História" }
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
console.log(`Sucesso! Lote 62 de ${batch.length} questões adicionado.`);
