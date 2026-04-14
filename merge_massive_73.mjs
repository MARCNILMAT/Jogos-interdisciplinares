import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3494;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 73 (Humandas, Inglês e Artes - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- HISTÓRIA (6º ao 9º) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "A invenção da escrita marca a transição de qual período para a Antiguidade?", options: ["Mesolítico", "Neolítico", "Pré-História", "Idade Média"], answer: "Pré-História", explanation: "O registro escrito é o marco tradicional desta divisão.", skill: "Conceitos" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico e social dominante na Europa Medieval foi o:", options: ["Feudalismo", "Capitalismo", "Cidades-Estado", "Industrialismo"], answer: "Feudalismo", explanation: "Baseado na posse da terra e vassalagem.", skill: "Idade Média" },
  { grade: "8º", discipline: "História", type: "multiple", text: "Qual país foi o berço da Revolução Industrial no século XVIII?", options: ["França", "Alemanha", "Inglaterra", "Itália"], answer: "Inglaterra", explanation: "A Inglaterra possuía acúmulo de capital e recursos minerais.", skill: "Revolução Industrial" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A 'Guerra Fria' foi um conflito ideológico entre quais potências?", options: ["Alemanha e Japão", "Brasil e Argentina", "EUA e União Soviética (URSS)", "França e Inglaterra"], answer: "EUA e União Soviética (URSS)", explanation: "Disputa liderada pelos blocos capitalista e socialista.", skill: "Guerra Fria" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O movimento de contestação ao domínio português em Minas Gerais (1789) foi a:", options: ["Sabidana", "Inconfidência Mineira", "Revolta de Beckman", "Guerra dos Farrapos"], answer: "Inconfidência Mineira", explanation: "Liderada por figuras como Tiradentes.", skill: "Brasil Colônia" },

  // --- GEOGRAFIA (6º ao 9º) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O Meridiano de Greenwich divide a Terra em quais hemisférios?", options: ["Norte e Sul", "Leste e Oeste", "Ocidental e Meridional", "Frio e Quente"], answer: "Leste e Oeste", explanation: "É a referência vertical (longitude 0º).", skill: "Cartografia" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual o maior país da América do Sul em extensão territorial?", options: ["Argentina", "Chile", "Brasil", "Peru"], answer: "Brasil", explanation: "O Brasil ocupa quase metade da massa sul-americana.", skill: "Território" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica e cultural mundial chama-se:", options: ["Urbanização", "Globalização", "Erosão", "Desertificação"], answer: "Globalização", explanation: "Aceleração das trocas globais.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual país é o mais populoso do continente africano?", options: ["Egito", "Nigéria", "África do Sul", "Marrocos"], answer: "Nigéria", explanation: "A Nigéria possui a maior população da África.", skill: "Continentes" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O Canal do Panamá liga quais dois importantes oceanos?", options: ["Atlântico e Índico", "Atlântico e Pacífico", "Índico e Pacífico", "Ártico e Atlântico"], answer: "Atlântico e Pacífico", explanation: "Destaque estratégico para o comércio mundial.", skill: "Economia" },

  // --- INGLÊS (6º ao 9º) ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Qual a tradução para a cor 'Red'?", options: ["Azul", "Verde", "Vermelho", "Preto"], answer: "Vermelho", explanation: "Red = Vermelho.", skill: "Colors" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "How do you say 'cachorro' in English?", options: ["Cat", "Dog", "Bird", "Horse"], answer: "Dog", explanation: "Dog = Cachorro.", skill: "Vocabulary" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "What is the opposite of 'Happy'?", options: ["Glad", "Sad", "Fast", "Strong"], answer: "Sad", explanation: "Happy (feliz) x Sad (triste).", skill: "Adjectives" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "The capital of the United Kingdom is:", options: ["New York", "London", "Paris", "Berlin"], answer: "London", explanation: "Londres é a capital do Reino Unido.", skill: "Culture" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Which number is 'Five'?", options: ["2", "4", "5", "10"], answer: "5", explanation: "Five = 5.", skill: "Numbers" },

  // --- ARTE (6º ao 9º) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Quais são as cores primárias?", options: ["Vermelho, Azul e Amarelo", "Verde, Roxo e Laranja", "Preto e Branco", "Azul e Verde"], answer: "Vermelho, Azul e Amarelo", explanation: "Delas surgem as demais cores.", skill: "Teoria das Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo que utiliza formas geométricas e fragmentadas é o:", options: ["Realismo", "Barroco", "Cubismo", "Impressionismo"], answer: "Cubismo", explanation: "Exemplo: Pablo Picasso.", skill: "Vanguardas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Quem pintou o teto da Capela Sistina?", options: ["Leonardo da Vinci", "Michelangelo", "Donatello", "Raphael"], answer: "Michelangelo", explanation: "Mestre do Renascimento italiano.", skill: "História da Arte" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A arte que utiliza o próprio corpo do artista como obra é a:", options: ["Escultura", "Pintura", "Performance", "Gravura"], answer: "Performance", explanation: "Interação direta com o espaço.", skill: "Linguagens" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O cinema é classificado como qual arte?", options: ["3ª Arte", "7ª Arte", "9ª Arte", "1ª Arte"], answer: "7ª Arte", explanation: "Termo de 1912.", skill: "Audiovisual" }
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
console.log(`Sucesso! Lote 73 de ${batch.length} questões multidisciplinares adicionado.`);
