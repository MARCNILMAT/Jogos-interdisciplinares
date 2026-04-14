import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3589;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 77 (História, Geo e Ciências - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Roma", "Grécia", "Egito", "Babilônia"], answer: "Egito", explanation: "As pirâmides eram túmulos monumentais para os faraós.", skill: "Egito" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa na Idade Média foi o:", options: ["Capitalismo", "Feudalismo", "Democracia", "Socialismo"], answer: "Feudalismo", explanation: "Baseado no suseranato e na vassalagem por terra.", skill: "Feudalismo" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que marcou o fim do Antigo Regime na França (1789) foi a:", options: ["Industrial", "Francesa", "Americana", "Russa"], answer: "Francesa", explanation: "Lema: Liberdade, Igualdade e Fraternidade.", skill: "Revolução Francesa" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O período da 'Guerra Fria' foi marcado pela disputa ideológica entre:", options: ["Alemanha e Japão", "Brasil e Argentina", "EUA e União Soviética", "França e Inglaterra"], answer: "EUA e União Soviética", explanation: "Capitalismo versus Socialismo.", skill: "Guerra Fria" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O movimento de contestação ao domínio português em Minas Gerais (1789) foi a:", options: ["Inconfidência Mineira", "Sabinada", "Guerra dos Farrapos", "Revolta da Vacina"], answer: "Inconfidência Mineira", explanation: "Liderada por figuras como Tiradentes.", skill: "Brasil Colônia" },
  { grade: "8º", discipline: "História", type: "multiple", text: "Quem foi o pioneiro na Revolução Industrial?", options: ["França", "Alemanha", "Inglaterra", "EUA"], answer: "Inglaterra", explanation: "Devido aos recursos minerais e acúmulo de capital.", skill: "Industrialização" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha imaginária que divide a Terra em hemisférios Norte e Sul?", options: ["Linha do Equador", "Meridiano de Greenwich", "Trópico de Câncer", "Círculo Polar"], answer: "Linha do Equador", explanation: "Referência horizontal na cartografia.", skill: "Coordenadas" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual o maior país da América do Sul em extensão territorial?", options: ["Argentina", "Chile", "Brasil", "Peru"], answer: "Brasil", explanation: "O Brasil ocupa quase metade da massa sul-americana.", skill: "Território" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e comunicacional mundial chama-se:", options: ["Globalização", "Urbanização", "Desertificação", "Erosão"], answer: "Globalização", explanation: "Aceleração das trocas internacionais.", skill: "Mundo Atual" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual fonte de energia é considerada renovável?", options: ["Petróleo", "Carvão Mineral", "Energia Solar", "Gás Natural"], answer: "Energia Solar", explanation: "Vem de fontes que não se esgotam na escala humana.", skill: "Energia" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de a Terra girar em torno do Sol chama-se:", options: ["Rotação", "Translação", "Nutação", "Oscilação"], answer: "Translação", explanation: "Leva aproximadamente 365 dias.", skill: "Movimentos" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual região brasileira possui a maior parte da Floresta Amazônica?", options: ["Sul", "Nordeste", "Centro-Oeste", "Norte"], answer: "Norte", explanation: "A bacia amazônica concentra-se na região Norte.", skill: "Regiões" },

  // --- CIÊNCIAS (6º ao 9º) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual planeta é conhecido como 'Planeta Vermelho'?", options: ["Vênus", "Marte", "Júpiter", "Saturno"], answer: "Marte", explanation: "Devido ao solo rico em óxido de ferro.", skill: "Sistema Solar" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Os seres vivos que produzem o próprio alimento são os:", options: ["Consumers", "Decompositores", "Produtores", "Parasitas"], answer: "Produtores", explanation: "Autótrofos como as plantas.", skill: "Ecologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual o principal órgão do sistema circulatório que bombeia o sangue?", options: ["Pulmão", "Cérebro", "Coração", "Fígado"], answer: "Coração", explanation: "O coração age como uma bomba muscular.", skill: "Corpo Humano" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "H2O é a fórmula química da:", options: ["Água", "Sal", "Açúcar", "Gasolina"], answer: "Água", explanation: "Junção de 2 hidrogênios e 1 oxigênio.", skill: "Química" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual camada da Terra é a mais interna e quente?", options: ["Crosta", "Manto", "Núcleo", "Atmosfera"], answer: "Núcleo", explanation: "O núcleo terrestre é composto de metais pesados.", skill: "Geologia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O processo onde as plantas utilizam luz solar para gerar energia é a:", options: ["Respiração", "Digestão", "Fotossíntese", "Transpiração"], answer: "Fotossíntese", explanation: "Base da cadeia alimentar terrestre.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema responsável pela defesa do organismo contra doenças é o:", options: ["Digestório", "Imunológico", "Respiratório", "Sustentação"], answer: "Imunológico", explanation: "Inclui anticorpos e leucócitos.", skill: "Imunologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A primeira lei de Newton é também conhecida como lei da:", options: ["Gravidade", "Inércia", "Ação e Reação", "Força"], answer: "Inércia", explanation: "Tendência de manter repouso ou movimento constante.", skill: "Física" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A mistura de água e óleo é considerada:", options: ["Mistura Homogênea", "Mistura Heterogênea", "Substância Pura", "Gás"], answer: "Mistura Heterogênea", explanation: "É possível distinguir as duas fases.", skill: "Matéria" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As briófitas (musgos) vivem em ambientes úmidos porque não têm:", options: ["Células", "Vasos condutores de seiva", "Clorofila", "Raízes"], answer: "Vasos condutores de seiva", explanation: "São plantas avasculares.", skill: "Botânica" }
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
console.log(`Sucesso! Super Batch 77 de ${batch.length} questões adicionado.`);
