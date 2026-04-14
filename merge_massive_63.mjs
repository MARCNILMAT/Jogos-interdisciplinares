import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3281;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 63 (História, Geo e Ciências - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Roma", "Grécia", "Egito", "Babilônia"], answer: "Egito", explanation: "As pirâmides eram monumentos funerários para faraós.", skill: "Egito" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O período 'Feudalismo' é caracterizado pela relação entre:", options: ["Burgueses e Proletários", "Suseranos e Vassalos", "Imperadores e Escravos", "Reis e Presidentes"], answer: "Suseranos e Vassalos", explanation: "Base do sistema social medieval.", skill: "Feudalismo" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que marcou o fim do Antigo Regime na França em 1789 foi a:", options: ["Francesa", "Industrial", "Americana", "Russa"], answer: "Francesa", explanation: "Lema: Liberdade, Igualdade e Fraternidade.", skill: "Revoluções" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A 'Guerra Fria' foi um conflito ideológico liderado por quais países?", options: ["Alemanha e Japão", "EUA e União Soviética", "Reino Unido e França", "China e Índia"], answer: "EUA e União Soviética", explanation: "Dividiu o mundo em blocos capitalista e socialista.", skill: "Guerra Fria" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O navegador que chegou à América em 1492 navegando pela Espanha foi:", options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Américo Vespúcio"], answer: "Cristóvão Colombo", explanation: "Colombo buscava as Índias e chegou ao Caribe.", skill: "Navegações" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha que divide a Terra em hemisférios Norte e Sul?", options: ["Meridiano de Greenwich", "Linha do Equador", "Trópico de Capricórnio", "Círculo Polar"], answer: "Linha do Equador", explanation: "Referência horizontal principal na cartografia.", skill: "Cartografia" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O Brasil está localizado em qual continente?", options: ["América do Norte", "África", "América do Sul", "Europa"], answer: "América do Sul", explanation: "O Brasil ocupa quase metade da América do Sul.", skill: "Continentes" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e comunicacional mundial chama-se:", options: ["Erosão", "Globalização", "Urbanização", "Desertificação"], answer: "Globalização", explanation: "Conecta os mercados e culturas globalmente.", skill: "Globalização" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual o maior país do mundo em extensão territorial?", options: ["China", "Canadá", "Rússia", "EUA"], answer: "Rússia", explanation: "A Rússia se estende pela Europa e Ásia.", skill: "Geopolítica" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de a Terra girar em torno de si mesma leva quanto tempo?", options: ["1 hora", "12 horas", "24 horas", "365 dias"], answer: "24 horas", explanation: "Este movimento gera o dia e a noite.", skill: "Dinâmica" },

  // --- CIÊNCIAS (6º ao 9º) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual planeta é conhecido como 'Planeta Vermelho'?", options: ["Vênus", "Marte", "Júpiter", "Saturno"], answer: "Marte", explanation: "Devido ao solo rico em óxido de ferro.", skill: "Sistema Solar" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Os seres que produzem o próprio alimento são chamados de:", options: ["Consumidores", "Hervíboros", "Produtores", "Decompositores"], answer: "Produtores", explanation: "São os seres autótrofos (ex: plantas).", skill: "Ecologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual a função básica das mitocôndrias na célula?", options: ["Digestão", "Respiração Celular (Energia)", "Armazenar água", "Síntese de proteínas"], answer: "Respiração Celular (Energia)", explanation: "São as casas de força das células.", skill: "Citologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "H2O é a fórmula de qual substância essencial?", options: ["Sal", "Açúcar", "Água", "Oxigênio"], answer: "Água", explanation: "Junção de 2 Hidrogênios e 1 Oxigênio.", skill: "Química" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "O que descreve a 'Litosfera'?", options: ["Camada de ar", "Camada de água", "Camada sólida externa da Terra", "Núcleo quente"], answer: "Camada sólida externa da Terra", explanation: "Inclui a crosta e os solos.", skill: "Terra" },

  // --- MATEMÁTICA (Volume) ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 10 x 10?", options: ["20", "50", "100", "1000"], answer: "100", explanation: "Operação básica de multiplicação.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 20% de 500?", options: ["50", "100", "150", "200"], answer: "100", explanation: "20/100 * 500 = 100.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação x + 10 = 30 é:", options: ["5", "15", "20", "40"], answer: "20", explanation: "x = 30 - 10 = 20.", skill: "Equações" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Um ângulo reto mede exatamente quantos graus?", options: ["45º", "90º", "180º", "360º"], answer: "90º", explanation: "Padrão da geometria euclidiana.", skill: "Geometria" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a área de um quadrado de lado 5cm?", options: ["10cm²", "15cm²", "20cm²", "25cm²"], answer: "25cm²", explanation: "Lado x Lado = 5 x 5 = 25.", skill: "Áreas" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O número -5 é maior ou menor que 0?", options: ["Maior", "Menor", "Igual", "Nenhuma das anteriores"], answer: "Menor", explanation: "Números negativos ficam à esquerda do zero.", skill: "Inteiros" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre 2 e 3?", options: ["2", "3", "6", "12"], answer: "6", explanation: "Menor múltiplo comum.", skill: "MMC" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 144 é:", options: ["10", "11", "12", "14"], answer: "12", explanation: "12 x 12 = 144.", skill: "Radiciação" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Uma pizza dividida em 4 partes iguais. Cada parte representa:", options: ["1/2", "1/4", "1/8", "4/1"], answer: "1/4", explanation: "Divisão fracionária.", skill: "Frações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Quantos graus mede um ângulo raso?", options: ["90º", "180º", "270º", "360º"], answer: "180º", explanation: "Metade de uma volta completa.", skill: "Geometria" }
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
console.log(`Sucesso! Super Batch 63 de ${batch.length} questões multidisciplinares adicionado.`);
