import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2969;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 43 (História e Geografia - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Roma", "Egito", "Grécia", "Mesopotâmia"], answer: "Egito", explanation: "As pirâmides eram túmulos monumentais para os faraós.", skill: "Egito Antigo" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa durante a Idade Médio foi o:", options: ["Capitalismo", "Socialismo", "Feudalismo", "Comunismo"], answer: "Feudalismo", explanation: "Baseado na relação entre suseranos e vassalos.", skill: "Feudalismo" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução que teve o lema 'Liberdade, Igualdade e Fraternidade' foi a:", options: ["Industrial", "Francesa", "Americana", "Russa"], answer: "Francesa", explanation: "Marco fundamental do fim do absolutismo (1789).", skill: "Revolução Francesa" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O período da 'Guerra Fria' foi marcado pela disputa entre quais duas potências?", options: ["Alemanha e Japão", "Brasil e Argentina", "EUA e União Soviética (URSS)", "França e Inglaterra"], answer: "EUA e União Soviética (URSS)", explanation: "Disputa ideológica entre Capitalismo e Socialismo.", skill: "Guerra Fria" },
  { grade: "6º", discipline: "História", type: "multiple", text: "A invenção da escrita marca o fim da pré-história e o início da:", options: ["Idade Antiga", "Idade Média", "Idade Moderna", "Idade Contemporânea"], answer: "Idade Antiga", explanation: "A escrita permite o registro histórico formal.", skill: "Introdução à História" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O navegador que chegou à América em 1492 foi:", options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Américo Vespúcio"], answer: "Cristóvão Colombo", explanation: "Colombo navegava pela Espanha quando chegou ao Caribe.", skill: "Grandes Navegações" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A mão de obra escravizada trazida da África foi a base de qual ciclo econômico no Brasil?", options: ["Cana-de-açúcar", "Café", "Ambos acima", "Nenhuma das anteriores"], answer: "Ambos acima", explanation: "A escravidão africana sustentou a economia brasileira por séculos.", skill: "Brasil Colônia/Império" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O presidente brasileiro que governou durante o 'Estado Novo' (1937-1945) foi:", options: ["Juscelino Kubitschek", "Getúlio Vargas", "Joãos Goulart", "Itamar Franco"], answer: "Getúlio Vargas", explanation: "Fase ditatorial da era Vargas.", skill: "Varguismo" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Qual a camada da Terra onde vivemos, composta por solo e rochas?", options: ["Núcleo", "Manto", "Litosfera (Crosta)", "Atmosfera"], answer: "Litosfera (Crosta)", explanation: "A crosta terrestre é a camada externa sólida.", skill: "Estrutura da Terra" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O Brasil está localizado em qual continente?", options: ["América do Norte", "África", "América do Sul", "Oceania"], answer: "América do Sul", explanation: "O Brasil ocupa quase metade da América do Sul.", skill: "Localização" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural entre os países no mundo é a:", options: ["Urbanização", "Globalização", "Colonização", "Industralização"], answer: "Globalização", explanation: "O mundo tornou-se mais conectado pós-anos 90.", skill: "Globalização" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O país mais desenvolvido economicamente da América Latina é o:", options: ["Brasil", "Chile", "México", "Argentina"], answer: "Brasil", explanation: "O Brasil possui o maior PIB da região.", skill: "América Latina" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama o movimento da Terra que gera as estações do ano?", options: ["Rotação", "Translação", "Nutação", "Circulação"], answer: "Translação", explanation: "Ocorre durante os 365 dias da volta ao sol.", skill: "Estações do Ano" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A região do Brasil que possui clima semiárido e vegetação de Caatinga é o:", options: ["Norte", "Sudeste", "Sul", "Nordeste"], answer: "Nordeste", explanation: "O sertão nordestino é característico por esse clima.", skill: "Climas do Brasil" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O canal artificial que liga o Atlântico ao Pacífico na América Central é o:", options: ["Canal de Suez", "Canal do Panamá", "Canal da Mancha", "Rio Amazonas"], answer: "Canal do Panamá", explanation: "Vital para o transporte comercial marítimo.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual fenômeno climático gera o aumento da temperatura média na Terra?", options: ["El Niño", "Aquecimento Global", "Inversão Térmica", "Chuva Ácida"], answer: "Aquecimento Global", explanation: "Relacionado à emissão de gases estufa.", skill: "Meio Ambiente" }
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
console.log(`Sucesso! Lote 43 de ${batch.length} questões adicionado.`);
