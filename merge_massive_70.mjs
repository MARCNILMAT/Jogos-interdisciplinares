import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3436;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 70 (História e Geografia - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Roma", "Grécia", "Egito", "Babilônia"], answer: "Egito", explanation: "As pirâmides serviam de túmulos para os faraós.", skill: "Egito Antigo" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa na Idade Média foi o:", options: ["Capitalismo", "Feudalismo", "Democracia", "Socialismo"], answer: "Feudalismo", explanation: "Baseado no suseranato e na vassalagem por terra.", skill: "Feudalismo" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que derrubou a monarquia em 1789 e criou o lema 'Liberdade, Igualdade e Fraternidade' foi a:", options: ["Revolução Industrial", "Revolução Francesa", "Revolução Americana", "Revolução Russa"], answer: "Revolução Francesa", explanation: "Marco fundamental do fim do Absolutismo.", skill: "Revolução Francesa" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O período da 'Guerra Fria' foi marcado pela disputa ideológica entre:", options: ["Alemanha e Japão", "Brasil e Argentina", "EUA e União Soviética", "França e Inglaterra"], answer: "EUA e União Soviética", explanation: "Capitalismo versus Socialismo.", skill: "Guerra Fria" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O movimento de contestação ao domínio português em Minas Gerais (1789) foi a:", options: ["Guerra dos Palmares", "Inconfidência Mineira", "Revolução Farroupilha", "Sabinada"], answer: "Inconfidência Mineira", explanation: "Teve Tiradentes como figura principal.", skill: "Brasil Colônia" },
  { grade: "8º", discipline: "História", type: "multiple", text: "Quem foi o pioneiro da Revolução Industrial?", options: ["França", "Alemanha", "Inglaterra", "EUA"], answer: "Inglaterra", explanation: "Devido ao acúmulo de capital e recursos minerais.", skill: "Industrialização" },
  { grade: "6º", discipline: "História", type: "multiple", text: "A escrita cuneiforme foi inventada por qual povo da Mesopotâmia?", options: ["Sumérios", "Egípcios", "Gregos", "Fenícios"], answer: "Sumérios", explanation: "Utilizavam argila e estilete.", skill: "Escrita" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A queda do Muro de Berlim ocorreu em qual ano?", options: ["1914", "1945", "1989", "2001"], answer: "1989", explanation: "Símbolo do fim da Guerra Fria.", skill: "Mundo Atual" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O navegador português que chegou oficialmente ao Brasil em 1500 foi:", options: ["Cristóvão Colombo", "Vasco da Gama", "Pedro Álvares Cabral", "Fernão de Magalhães"], answer: "Pedro Álvares Cabral", explanation: "Início da colonização portuguesa.", skill: "Navegações" },
  { grade: "6º", discipline: "História", type: "multiple", text: "O Código de Hamurábi ('Olho por olho, dente por dente') é de qual povo?", options: ["Egípcios", "Babilônios", "Persas", "Assírios"], answer: "Babilônios", explanation: "Primeiro conjunto de leis escritas.", skill: "Leis" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha imaginária que divide a Terra em hemisférios Norte e Sul?", options: ["Meridiano de Greenwich", "Linha do Equador", "Trópico de Câncer", "Círculo Polar"], answer: "Linha do Equador", explanation: "Divide a Terra horizontalmente ao meio.", skill: "Coordenadas" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual o maior país da América do Sul em extensão territorial?", options: ["Argentina", "Chile", "Brasil", "Peru"], answer: "Brasil", explanation: "O Brasil ocupa quase metade da massa sul-americana.", skill: "Localização" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural mundial é o de:", options: ["Urbanização", "Globalização", "Desertificação", "Erosão"], answer: "Globalização", explanation: "Facilita trocas e conexões globais.", skill: "Mundo Atual" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual bioma brasileiro é conhecido como 'Savana brasileira' e ocupa MG?", options: ["Mata Atlântica", "Caatinga", "Cerrado", "Pampas"], answer: "Cerrado", explanation: "Vegetação de árvores retorcidas e casca grossa.", skill: "Biomas" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de a Terra girar em torno de si mesma leva quanto tempo?", options: ["24 horas", "12 horas", "365 dias", "1 mês"], answer: "24 horas", explanation: "É o movimento de rotação.", skill: "Dinâmica" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Quantos estados compõem a região Sudeste do Brasil?", options: ["3", "4", "5", "10"], answer: "4", explanation: "MG, SP, RJ e ES.", skill: "Regiões" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O canal artificial que liga o Atlântico ao Pacífico na América Central é o:", options: ["Canal de Suez", "Oceano Índico", "Canal do Panamá", "Canal da Mancha"], answer: "Canal do Panamá", explanation: "Importante rota comercial marítima.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual país é o mais populoso do mundo?", options: ["China", "EUA", "Brasil", "Rússia"], answer: "China", explanation: "Embora a Índia esteja encostando/passando conforme a fonte.", skill: "População" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "A camada de gases que envolve a Terra chama-se:", options: ["Litosfera", "Hidrosfera", "Atmosfera", "Biosfera"], answer: "Atmosfera", explanation: "Composta principalmente de Nitrogênio e Oxigênio.", skill: "Meio Ambiente" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O bioma com clima semiárido e vegetação adaptada à seca no NE é a:", options: ["Floresta Amazônica", "Caatinga", "Pantanal", "Manguezal"], answer: "Caatinga", explanation: "Exclusivo do território brasileiro.", skill: "Clima" }
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
console.log(`Sucesso! Super Batch 70 de ${batch.length} questões de História/Geografia adicionado.`);
