import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2856;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 36 (História e Geografia - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga desenvolveu a democracia na cidade de Atenas?", options: ["Roma", "Grécia", "Egito", "Fenícia"], answer: "Grécia", explanation: "Atenas é o berço da democracia ocidental.", skill: "Antiguidade" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O Renascimento Artístico e Cultural teve início em qual país europeu?", options: ["França", "Inglaterra", "Itália", "Espanha"], answer: "Itália", explanation: "Cidades como Florença e Roma foram centros renascentistas.", skill: "Renascimento" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução Industrial teve início na:", options: ["Alemanha", "França", "Inglaterra", "EUA"], answer: "Inglaterra", explanation: "A Inglaterra possuía carvão, ferro e capital para as fábricas.", skill: "Revolução Industrial" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A queda do Muro de Berlim em 1989 simbolizou o fim da:", options: ["1ª Guerra Mundial", "Era Vargas", "Guerra Fria", "Escravidão"], answer: "Guerra Fria", explanation: "Marcou o colapso do bloco socialista europeu.", skill: "Século XX" },
  { grade: "6º", discipline: "História", type: "multiple", text: "O código de leis escrito mais antigo que se conhece (Olho por olho, dente por dente) é o:", options: ["Código Civil", "Código de Hamurábi", "Bíblia", "Alcorão"], answer: "Código de Hamurábi", explanation: "Criado na Mesopotâmia antiga.", skill: "Mesopotâmia" },
  { grade: "7º", discipline: "História", type: "multiple", text: "A principal atividade econômica do Brasil Colônia no século XVI era o cultivo de:", options: ["Café", "Cana-de-açúcar", "Milho", "Soja"], answer: "Cana-de-açúcar", explanation: "O açúcar era o principal produto de exportação.", skill: "Brasil Colônia" },
  { grade: "8º", discipline: "História", type: "multiple", text: "O movimento que buscava a independência de Minas Gerais em 1789 foi a:", options: ["Cabanagem", "Guerra dos Farrapos", "Inconfidência Mineira", "Revolta da Vacina"], answer: "Inconfidência Mineira", explanation: "Liderada por figuras como Tiradentes.", skill: "Ciclo do Ouro" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O presidente brasileiro que construiu Brasília foi:", options: ["Getúlio Vargas", "Juscelino Kubitschek (JK)", "Jânio Quadros", "Tancredo Neves"], answer: "Juscelino Kubitschek (JK)", explanation: "Brasília foi inaugurada em 1960 durante o governo JK.", skill: "Era JK" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Qual é o maior oceano do planeta Terra?", options: ["Atlântico", "Pacífico", "Índico", "Ártico"], answer: "Pacífico", explanation: "O Oceano Pacífico cobre cerca de um terço da superfície terrestre.", skill: "Hidrografia" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O Brasil é dividido oficialmente pelo IBGE em quantas grandes regiões?", options: ["3", "4", "5", "6"], answer: "5", explanation: "Norte, Nordeste, Centro-Oeste, Sudeste e Sul.", skill: "Brasil" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "Qual destes países faz parte do BRICS?", options: ["Canadá", "Japão", "Índia", "Alemanha"], answer: "Índia", explanation: "Brasil, Rússia, Índia, China e África do Sul.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O aumento do efeito estufa causado pela poluição gera o fenômeno do:", options: ["Aquecimento Global", "El Niño", "Maremotismo", "Tsunami"], answer: "Aquecimento Global", explanation: "Aumento da temperatura média do planeta.", skill: "Meio Ambiente" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha imaginária que divide a Terra em hemisférios Norte e Sul?", options: ["Meridiano de Greenwich", "Círculo Polar", "Trópico de Câncer", "Linha do Equador"], answer: "Linha do Equador", explanation: "Divide a Terra horizontalmente ao meio.", skill: "Coordenadas" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O bioma caracterizado por árvores retorcidas e casca grossa em MG é o:", options: ["Cerrado", "Caatinga", "Pampas", "Pantanal"], answer: "Cerrado", explanation: "O Cerrado é o segundo maior bioma do Brasil.", skill: "Cerrado" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "A principal língua falada na maioria dos países da América Latina é o:", options: ["Inglês", "Francês", "Espanhol", "Português"], answer: "Espanhol", explanation: "Devido à colonização espanhola em grande parte do continente.", skill: "América" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual país europeu é o maior do mundo em extensão territorial?", options: ["Rússia", "China", "Canadá", "EUA"], answer: "Rússia", explanation: "A Rússia se estende pela Europa e Ásia.", skill: "Extensão Territorial" }
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
console.log(`Sucesso! ${batch.length} questões (Lote 36) adicionadas.`);
