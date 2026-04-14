import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3066;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 50 (Multidiscip. - Volume Acelerado) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Roma", "Grécia", "Egito", "Fenícia"], answer: "Egito", explanation: "As pirâmides serviam como túmulos para os faraós.", skill: "Egito Antigo" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa durante a Idade Médio foi o:", options: ["Capitalismo", "Feudalismo", "Democracia", "Socialismo"], answer: "Feudalismo", explanation: "Baseado na vassalagem e na economia agrária.", skill: "Idade Média" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que derrubou a monarquia em 1789 e criou o lema 'Liberdade, Igualdade e Fraternidade' foi a:", options: ["Industrial", "Francesa", "Americana", "Russa"], answer: "Francesa", explanation: "Marco fundamental do fim do absolutismo.", skill: "Revolução Francesa" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O período da 'Guerra Fria' foi marcado pela disputa ideológica entre:", options: ["Alemanha e Japão", "Brasil e Argentina", "EUA e União Soviética", "França e Inglaterra"], answer: "EUA e União Soviética", explanation: "Capitalismo versus Socialismo.", skill: "Guerra Fria" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha imaginária que divide a Terra em hemisférios Norte e Sul?", options: ["Meridiano de Greenwich", "Linha do Equador", "Trópico de Câncer", "Círculo Polar"], answer: "Linha do Equador", explanation: "Divide a Terra horizontalmente ao meio.", skill: "Coordenadas" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O Brasil está localizado em qual continente?", options: ["América do Norte", "África", "América do Sul", "Oceania"], answer: "América do Sul", explanation: "O Brasil ocupa grande parte da massa sul-americana.", skill: "Localização" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural entre os países no mundo é a:", options: ["Urbanização", "Globalização", "Colonização", "Industralização"], answer: "Globalização", explanation: "O mundo tornou-se mais conectado pós-anos 90.", skill: "Globalização" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual fenômeno climático gera o aumento da temperatura média na Terra?", options: ["El Niño", "Aquecimento Global", "Inversão Térmica", "Chuva Ácida"], answer: "Aquecimento Global", explanation: "Relacionado à emissão de gases estufa.", skill: "Meio Ambiente" },

  // --- CIÊNCIAS (6º ao 9º) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual é o maior planeta do Sistema Solar?", options: ["Terra", "Marte", "Júpiter", "Saturno"], answer: "Júpiter", explanation: "Júpiter é um gigante gasoso.", skill: "Planetas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes animais faz parte do grupo dos Anfíbios?", options: ["Cobra", "Sapo", "Peixe", "Pássaro"], answer: "Sapo", explanation: "Os anfíbios têm pele úmida e ciclo de vida duplo.", skill: "Zoologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual o principal órgão do sistema circulatório que bombeia o sangue?", options: ["Pulmão", "Cérebro", "Coração", "Fígado"], answer: "Coração", explanation: "O coração funciona como uma bomba muscular.", skill: "Corpo Humano" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A primeira lei de Newton também é conhecida como Lei da:", options: ["Gravidade", "Inércia", "Ação e Reação", "Força"], answer: "Inércia", explanation: "Diz que um corpo mantém seu estado até que uma força atue sobre ele.", skill: "Física" },

  // --- PORTUGUÊS (6º ao 9º) ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um Substantivo Próprio?", options: ["Menino", "Cidade", "Brasil", "Papel"], answer: "Brasil", explanation: "Nomes de países são substantivos próprios.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual o antônimo de 'Orgulho'?", options: ["Modéstia", "Vaidade", "Arrogância", "Prepotência"], answer: "Modéstia", explanation: "Modéstia é o oposto de orgulho.", skill: "Antônimos" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Na frase 'Eu viarei amanhã', o verbo está no:", options: ["Presente", "Pretérito", "Futuro", "Imperfeito"], answer: "Futuro", explanation: "Indica uma ação que ainda ocorrerá.", skill: "Verbos" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A figura de linguagem que consiste em uma comparação exagerada (ex: 'Morri de rir') é a:", options: ["Metáfora", "Hipérbole", "Ironia", "Ironia"], answer: "Hipérbole", explanation: "Hipérbole é o exagero intencional.", skill: "Figuras de Linguagem" }
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
console.log(`Sucesso! Lote 50 de ${batch.length} questões multidisciplinares adicionado.`);
