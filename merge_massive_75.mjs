import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3534;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 75 (Multidisciplinar - Volume Premium) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 40 x 5?", options: ["150", "200", "250", "300"], answer: "200", explanation: "40 x 5 = 200.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de x na equação 3x = 45?", options: ["10", "15", "20", "25"], answer: "15", explanation: "x = 45 / 3 = 15.", skill: "Equações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 225 é:", options: ["12", "14", "15", "25"], answer: "15", explanation: "15 x 15 = 225.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a soma dos ângulos internos de um quadrilátero?", options: ["180º", "270º", "360º", "540º"], answer: "360º", explanation: "Todo quadrilátero pode ser dividido em dois triângulos (180+180).", skill: "Geometria" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 49 é um número primo?", options: ["Sim", "Não, divide por 7", "Não, é par", "Sim, só divide por 1"], answer: "Não, divide por 7", explanation: "7 x 7 = 49.", skill: "Números" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se um produto de R$ 100 tem 15% de desconto, o novo preço é:", options: ["R$ 15", "R$ 85", "R$ 90", "R$ 115"], answer: "R$ 85", explanation: "100 - 15 = 85.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um triângulo retângulo possui um ângulo de:", options: ["45º", "60º", "90º", "180º"], answer: "90º", explanation: "Ângulo reto mede exatamente 90º.", skill: "Geometria" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O valor de π (Pi) aproximado é:", options: ["2,14", "3,14", "4,14", "5,14"], answer: "3,14", explanation: "Constante fundamental da circunferência.", skill: "Círculo" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o antônimo de 'Orgulho'?", options: ["Modéstia", "Vaidade", "Arrogância", "Prepotência"], answer: "Modéstia", explanation: "Modéstia é o oposto moral de orgulho.", skill: "Semântica" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME POSSESSIVO?", options: ["Eu", "Aquele", "Nosso", "Quem"], answer: "Nosso", explanation: "Nosso indica posse.", skill: "Pronomes" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Pincel' é acentuada?", options: ["Sim", "Não", "Só no plural", "Só no diminutivo"], answer: "Não", explanation: "Oxítonas terminadas em -el não levam acento.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'Grande Sertão: Veredas'?", options: ["Machado de Assis", "Guimarães Rosa", "José de Alencar", "Clarice Lispector"], answer: "Guimarães Rosa", explanation: "Obra prima do modernismo brasileiro.", skill: "Literatura" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "O coletivo de 'Peixes' é:", options: ["Matilha", "Bando", "Cardume", "Alcateia"], answer: "Cardume", explanation: "Conjunto de peixes.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual figura de linguagem é uma comparação exagerada?", options: ["Metáfora", "Hipérbole", "Ironia", "Paradoxo"], answer: "Hipérbole", explanation: "Como em 'vou morrer de rir'.", skill: "Figuras" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual o sujeito na frase 'Viajaram os amigos'?", options: ["Oculto", "Inexistente", "Os amigos", "Viajaram"], answer: "Os amigos", explanation: "Sujeito posposto ao verbo.", skill: "Sintaxe" },

  // --- HISTÓRIA ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Egito", "Roma", "Grécia", "Mesopotâmia"], answer: "Egito", explanation: "Túmulos monumentais para faraós.", skill: "Egito" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O período colonial brasileiro durou aproximadamente quanto tempo?", options: ["100 anos", "200 anos", "300 anos", "500 anos"], answer: "300 anos", explanation: "De 1500 até a Independência em 1822.", skill: "Brasil" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução Francesa começou em qual ano?", options: ["1500", "1789", "1889", "1914"], answer: "1789", explanation: "Marco fundamental da Idade Contemporânea.", skill: "Revoluções" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A queda do Muro de Berlim ocorreu em qual ano?", options: ["1945", "1960", "1989", "2000"], answer: "1989", explanation: "Símbolo do fim da Guerra Fria.", skill: "Mundo Atual" },

  // --- GEOGRAFIA ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Qual o maior oceano do mundo?", options: ["Atlântico", "Pacífico", "Índico", "Ártico"], answer: "Pacífico", explanation: "Ocupa a maior área de massa d'água.", skill: "Oceanos" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Quantas regiões tem o Brasil segundo o IBGE?", options: ["3", "4", "5", "6"], answer: "5", explanation: "Norte, Nordeste, Centro-Oeste, Sudeste e Sul.", skill: "Brasil" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O BRICS é um grupo de países que inclui:", options: ["EUA", "Brasil", "Japão", "Austrália"], answer: "Brasil", explanation: "B-R-I-C-S (Brasil, Rússia, Índia, China, África do Sul).", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica mundial chama-se:", options: ["Globalização", "Urbanização", "Desertificação", "Erosão"], answer: "Globalização", explanation: "Conexão mundial pós-Guerra Fria.", skill: "Economia" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual planeta é o mais próximo do Sol?", options: ["Terra", "Vênus", "Mercúrio", "Marte"], answer: "Mercúrio", explanation: "Primeiro planeta do sistema solar.", skill: "Planetas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Os seres vivos que produzem o próprio alimento são:", options: ["Consumidores", "Decompositores", "Produtores", "Parasitas"], answer: "Produtores", explanation: "Como plantas (autótrofos).", skill: "Ecologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema que bombeia o sangue é o:", options: ["Digestório", "Respiratório", "Circulatório", "Nervoso"], answer: "Circulatório", explanation: "Liderado pelo coração.", skill: "Corpo Humano" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual a fórmula química da água?", options: ["CO2", "H2O", "O2", "NaCl"], answer: "H2O", explanation: "2 Hidrogênios e 1 Oxigênio.", skill: "Química" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A camada de ar que envolve a Terra é a:", options: ["Litosfera", "Hidrosfera", "Atmosfera", "Biosfera"], answer: "Atmosfera", explanation: "Contém o oxigênio que respiramos.", skill: "Ar" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual gás os humanos absorvem na respiração?", options: ["Gás Carbônico", "Oxigênio", "Nitrogênio", "Hidrogênio"], answer: "Oxigênio", explanation: "Vital para as células.", skill: "Fisiologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "As briófitas (musgos) vivem em ambientes:", options: ["Desérticos", "Úmidos e sombreados", "Gelados", "Salinos"], answer: "Úmidos e sombreados", explanation: "Não possuem vasos condutores.", skill: "Botânica" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A primeira lei de Newton é a lei da:", options: ["Ação e Reação", "Inércia", "Gravidade", "Força"], answer: "Inércia", explanation: "Tendência de manter o estado de repouso ou movimento.", skill: "Física" }
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
console.log(`Sucesso! Super Batch 75 de ${batch.length} questões multidisciplinares adicionado.`);
