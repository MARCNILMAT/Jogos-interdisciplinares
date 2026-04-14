import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3732;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 82 (Humandades e Volume) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "As famosas Pirâmides de Gizé foram construídas por qual civilização?", options: ["Roma", "Grécia", "Egito", "Babilônia"], answer: "Egito", explanation: "Eram monumentos funerários para os faraós.", skill: "Egito" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O período 'Feudalismo' é caracterizado pela relação entre:", options: ["Burgueses e Operários", "Suseranos e Vassalos", "Imperadores e Escravos", "Reis e Presidentes"], answer: "Suseranos e Vassalos", explanation: "Base do sistema social medieval.", skill: "Feudalismo" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que marcou o fim do Antigo Regime na França (1789) foi a:", options: ["Inglesa", "Francesa", "Americana", "Russa"], answer: "Francesa", explanation: "Início da Idade Contemporânea.", skill: "Revolução" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A 'Guerra Fria' foi um conflito ideológico entre quais países?", options: ["Brasil e Chile", "EUA e União Soviética", "Inglaterra e França", "China e Índia"], answer: "EUA e União Soviética", explanation: "Disputa entre Capitalismo e Socialismo.", skill: "Guerra Fria" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O navegador que chegou à América em 1492 navegando pela Espanha foi:", options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Américo Vespúcio"], answer: "Cristóvão Colombo", explanation: "Colombo buscava as Índias.", skill: "Navegações" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha que divide a Terra em Norte e Sul?", options: ["Greenwich", "Equador", "Câncer", "Capricórnio"], answer: "Equador", explanation: "Referência horizontal principal.", skill: "Cartografia" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O Brasil está localizado em qual continente?", options: ["América do Norte", "Europa", "América do Sul", "África"], answer: "América do Sul", explanation: "O Brasil ocupa a maior parte do sul do continente.", skill: "Localização" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e comunicacional mundial chama-se:", options: ["Globalização", "Urbanização", "Erosão", "Desertificação"], answer: "Globalização", explanation: "Conecta os mercados globais.", skill: "Mundo Atual" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual fonte de energia é considerada RENOVAVEL?", options: ["Petróleo", "Carvão Mineral", "Energia Solar", "Gás Natural"], answer: "Energia Solar", explanation: "Vem de fontes que não se esgotam.", skill: "Energia" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de a Terra girar em torno de si mesma é a:", options: ["Translação", "Rotação", "Oscilação", "Precessão"], answer: "Rotação", explanation: "Leva 24h e gera o dia/noite.", skill: "Dinâmica" },

  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 15 x 6?", options: ["80", "90", "100", "110"], answer: "90", explanation: "15 x 6 = 90.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 50% de 500?", options: ["100", "200", "250", "300"], answer: "250", explanation: "Metade de 500.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 10x = 300 é:", options: ["10", "15", "30", "100"], answer: "30", explanation: "x = 300 / 10 = 30.", skill: "Equações" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 144 é:", options: ["10", "11", "12", "14"], answer: "12", explanation: "12 x 12 = 144.", skill: "Raiz" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um ângulo de 90 graus chama-se:", options: ["Agudo", "Obtuso", "Reto", "Raso"], answer: "Reto", explanation: "Definição de ângulo reto.", skill: "Geometria" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME?", options: ["Ele", "Cadeira", "Mesa", "Livro"], answer: "Ele", explanation: "Pronome pessoal do caso reto.", skill: "Classes" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O antônimo de 'Feliz' é:", options: ["Contente", "Triste", "Alegre", "Satisfeito"], answer: "Triste", explanation: "Sentido oposto.", skill: "Semântica" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Papel' no plural é:", options: ["Papels", "Papéis", "Papeles", "Papeis"], answer: "Papéis", explanation: "Regra do -el.", skill: "Plural" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A figura de linguagem que usa o exagero é a:", options: ["Metáfora", "Hipérbole", "Ironia", "Paradoxo"], answer: "Hipérbole", explanation: "Exagero intencional.", skill: "Figuras" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "O coletivo de 'Peixes' é:", options: ["Matilha", "Bando", "Cardume", "Alcateia"], answer: "Cardume", explanation: "Conjunto de peixes.", skill: "Substantivos" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual planeta é o mais próximo do Sol?", options: ["Terra", "Vênus", "Mercúrio", "Marte"], answer: "Mercúrio", explanation: "Primeiro planeta.", skill: "Planetas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As plantas geram alimento pela:", options: ["Digestão", "Respiração", "Fotossíntese", "Transpiração"], answer: "Fotossíntese", explanation: "Usam luz solar.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O órgão que bombeia o sangue é o:", options: ["Pulmão", "Cérebro", "Coração", "Fígado"], answer: "Coração", explanation: "Principal motor circulatório.", skill: "Fisiologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A fórmula H2O representa a:", options: ["Água", "Ar", "Sal", "Açúcar"], answer: "Água", explanation: "2 Hidrogênios e 1 Oxigênio.", skill: "Química" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual camada da Terra é a parte sólida externa?", options: ["Crosta", "Manto", "Núcleo", "Atmosfera"], answer: "Crosta", explanation: "Onde vivemos.", skill: "Geologia" }
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
console.log(`Sucesso! Super Batch 82 de ${batch.length} questões multidisciplinares adicionado.`);
