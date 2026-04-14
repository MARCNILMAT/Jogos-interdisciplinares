import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3376;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 67 (Português, História e Geografia - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- PORTUGUÊS (6º ao 9º) ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME?", options: ["Ele", "Livro", "Mesa", "Lápis"], answer: "Ele", explanation: "Ele é um pronome pessoal do caso reto.", skill: "Classes de Palavras" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O plural da palavra 'Papel' é:", options: ["Papéis", "Papels", "Papeles", "Papeis"], answer: "Papéis", explanation: "Palavras terminadas em -el fazem o plural em -éis.", skill: "Morfologia" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Médico' é classificada como:", options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Proparoxítona", explanation: "A sílaba tônica é a antepenúltima.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A figura de linguagem que utiliza o exagero intencional (ex: 'Morri de rir') é a:", options: ["Metáfora", "Hipérbole", "Ironia", "Eufemismo"], answer: "Hipérbole", explanation: "A hipérbole enfatiza uma ideia através do excesso.", skill: "Figuras de Linguagem" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o substantivo coletivo de 'Peixes'?", options: ["Cardume", "Alcateia", "Enxame", "Bando"], answer: "Cardume", explanation: "Cardume é o conjunto de peixes.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "A palavra 'Bexiga' se escreve corretamente com:", options: ["X", "CH", "S", "G"], answer: "X", explanation: "Regras de ortografia da língua portuguesa.", skill: "Ortografia" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "No verso 'O sol sorriu para mim', temos qual figura de linguagem?", options: ["Metáfora", "Personificação (Prosopopeia)", "Hipérbole", "Aliteração"], answer: "Personificação (Prosopopeia)", explanation: "Atribui ações humanas a seres inanimados.", skill: "Figuras de Linguagem" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Mas' indica uma ideia de:", options: ["Adição", "Oposição (Contraste)", "Causa", "Explicação"], answer: "Oposição (Contraste)", explanation: "É uma conjunção adversativa.", skill: "Conjunções" },

  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "A invenção da escrita marca o início de qual período histórico?", options: ["Pré-História", "Idade Antiga", "Idade Média", "Idade Moderna"], answer: "Idade Antiga", explanation: "O registro escrito diferencia a história da pré-história.", skill: "Conceitos" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa medieval foi o:", options: ["Capitalismo", "Feudalismo", "Socialismo", "Mercantilismo"], answer: "Feudalismo", explanation: "Baseado na posse da terra e vassalagem.", skill: "Idade Média" },
  { grade: "8º", discipline: "História", type: "multiple", text: "Qual país foi o pioneiro na Revolução Industrial?", options: ["França", "EUA", "Inglaterra", "Alemanha"], answer: "Inglaterra", explanation: "A Inglaterra possuía carvão, ferro e capital acumulado.", skill: "Revolução Industrial" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A 'Guerra Fria' foi um conflito ideológico entre quais duas potências?", options: ["Brasil e Portugal", "Alemanha e Japão", "EUA e União Soviética (URSS)", "França e Inglaterra"], answer: "EUA e União Soviética (URSS)", explanation: "Disputa entre Capitalismo e Socialismo.", skill: "Guerra Fria" },
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Grega", "Romana", "Egípcia", "Fenícia"], answer: "Egípcia", explanation: "Serviam como túmulos para os faraós.", skill: "Antiguidade" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O movimento que buscava separar o Brasil de Portugal em 1789, em Minas Gerais, foi a:", options: ["Guerra dos Farrapos", "Inconfidência Mineira", "Revolta da Chibata", "Sabinada"], answer: "Inconfidência Mineira", explanation: "Liderada por figuras como Tiradentes.", skill: "Brasil Colônia" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha imaginária que divide a Terra em Leste e Oeste?", options: ["Linha do Equador", "Meridiano de Greenwich", "Trópico de Câncer", "Círculo Polar"], answer: "Meridiano de Greenwich", explanation: "É o meridiano de referência (0º).", skill: "Cartografia" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual o maior país da América do Sul em extensão territorial?", options: ["Argentina", "Chile", "Brasil", "Colômbia"], answer: "Brasil", explanation: "O Brasil ocupa quase metade da massa sul-americana.", skill: "Brasil" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural entre os países do mundo é a:", options: ["Globalização", "Urbanização", "Desertificação", "Erosão"], answer: "Globalização", explanation: "Facilita trocas comerciais e informação global.", skill: "Mundo Atual" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual fenômeno climático gera o aumento da temperatura média na Terra?", options: ["El Niño", "Aquecimento Global", "Inversão Térmica", "Chuva Ácida"], answer: "Aquecimento Global", explanation: "Relacionado à emissão de gases estufa.", skill: "Meio Ambiente" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de a Terra girar em torno de si mesma chama-se:", options: ["Translação", "Rotação", "Oscilação", "Nutação"], answer: "Rotação", explanation: "Leva 24 horas e gera dias e noites.", skill: "Terra" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual bioma brasileiro é conhecido por sua vegetação de árvores retorcidas em MG?", options: ["Amazônia", "Cerrado", "Caatinga", "Pampas"], answer: "Cerrado", explanation: "O Cerrado é o segundo maior bioma do Brasil.", skill: "Biomas" }
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
console.log(`Sucesso! Super Batch 67 de ${batch.length} questões adicionado.`);
