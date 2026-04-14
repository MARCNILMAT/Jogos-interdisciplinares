import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 4017;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote de Refinamento 5 (Targeted Filling) a partir do ID: ${startId}`);

const batch = [
  // --- ARTES (8º) - Dança e Expressão Corporal (7 questions to reach 10) ---
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Qual destes elementos é considerado a 'unidade básica' da linguagem da dança?", options: ["O Som", "O Movimento", "A Roupa", "O Cenário"], answer: "O Movimento", explanation: "O corpo em movimento é o principal instrumento da dança.", skill: "Dança e Expressão Corporal" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A 'Kinesfera' (ou Cinesfera) na dança refere-se a:", options: ["O espaço que o corpo alcança sem se deslocar", "Uma bola usada nas coreografias", "O ritmo da música", "O peso do dançarino"], answer: "O espaço que o corpo alcança sem se deslocar", explanation: "Conceito criado por Rudolf Laban para delimitar o espaço pessoal.", skill: "Dança e Expressão Corporal" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A dança que surgiu nas ruas dos EUA como parte da cultura Hip Hop é o:", options: ["Ballet Clássico", "Dança Contemporânea", "Breaking (ou Break Dance)", "Samba de Roda"], answer: "Breaking (ou Break Dance)", explanation: "Involucra movimentos acrobáticos e de solo.", skill: "Dança e Expressão Corporal" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O profissional que cria e organiza as sequências de movimentos em uma dança é o:", options: ["Cenógrafo", "Coreógrafo", "Maestro", "Figurinista"], answer: "Coreógrafo", explanation: "A coreografia é a escrita da dança.", skill: "Dança e Expressão Corporal" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Qual destas é uma característica da Dança Contemporânea?", options: ["Uso obrigatório de sapatilhas de ponta", "Liberdade de movimentos e busca por novas linguagens", "Ausência total de música", "Pode ser feita apenas por crianças"], answer: "Liberdade de movimentos e busca por novas linguagens", explanation: "A dança contemporânea foca na expressão e no conceito, rompendo com o rigor do clássico.", skill: "Dança e Expressão Corporal" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A expressão corporal na dança envolve a combinação de:", options: ["Apenas as mãos", "Espaço, Tempo e Peso (ou Energia)", "Apenas a velocidade", "Apenas a cor do uniforme"], answer: "Espaço, Tempo e Peso (ou Energia)", explanation: "São os fatores do movimento propostos por Rudolf Laban.", skill: "Dança e Expressão Corporal" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O 'Improviso' na dança consiste em:", options: ["Copiar exatamente o colega", "Criar movimentos no momento em que se dança", "Parar de dançar quando a música acaba", "Fazer apenas o que o professor manda"], answer: "Criar movimentos no momento em que se dança", explanation: "Muitas vezes usado como ferramenta de criação coreográfica.", skill: "Dança e Expressão Corporal" },

  // --- CIÊNCIAS (9º) - Estrutura Atômica e Tabela Periódica (5 questions) ---
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual partícula atômica possui carga elétrica POSITIVA?", options: ["Elétron", "Próton", "Nêutron", "Fóton"], answer: "Próton", explanation: "Os prótons ficam no núcleo do átomo.", skill: "Estrutura Atômica" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A região do átomo onde se localizam os elétrons é a:", options: ["Núcleo", "Eletrosfera", "Crosta", "Vácuo"], answer: "Eletrosfera", explanation: "Os elétrons orbitam o núcleo nesta região.", skill: "Estrutura Atômica" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Como os elementos químicos estão organizados na Tabela Periódica moderna?", options: ["Por ordem alfabética", "Por ordem crescente de Número Atômico (Z)", "Por cor", "Por data de descoberta"], answer: "Por ordem crescente de Número Atômico (Z)", explanation: "O número atômico indica a quantidade de prótons.", skill: "Tabela Periódica" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual elemento químico possui o símbolo 'O' na Tabela Periódica?", options: ["Ouro", "Oxigênio", "Ósmio", "Oliva"], answer: "Oxigênio", explanation: "Elemento vital para a nossa respiração.", skill: "Tabela Periódica" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Os átomos de um mesmo elemento que possuem o mesmo número de prótons, mas diferentes números de nêutrons, são:", options: ["Isóbaros", "Isótopos", "Isótonos", "Alótropos"], answer: "Isótopos", explanation: "Exemplo: Carbono-12 e Carbono-14.", skill: "Estrutura Atômica" },

  // --- HISTÓRIA (7º) - Renascimento Cultural e Científico (6 questions) ---
  { grade: "7º", discipline: "História", type: "multiple", text: "O Renascimento teve seu início em qual país europeu?", options: ["França", "Alemanha", "Itália", "Inglaterra"], answer: "Itália", explanation: "Cidades como Florença e Veneza foram os berços do movimento.", skill: "Renascimento" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O pensamento renascentista que colocava o SER HUMANO no centro do universo é o:", options: ["Teocentrismo", "Antropocentrismo", "Geocentrismo", "Heliocentrismo"], answer: "Antropocentrismo", explanation: "Antropo (Homem) + Centrismo (Centro).", skill: "Renascimento" },
  { grade: "7º", discipline: "História", type: "multiple", text: "Quem pintou a 'Última Ceia' e a 'Monalisa'?", options: ["Michelangelo", "Rafael Sanzio", "Leonardo da Vinci", "Donatello"], answer: "Leonardo da Vinci", explanation: "Considerado o maior gênio polímata do Renascimento.", skill: "Renascimento" },
  { grade: "7º", discipline: "História", type: "multiple", text: "A teoria científica de que o SOL é o centro do sistema solar chama-se:", options: ["Geocentrismo", "Heliocentrismo", "Positivismo", "Humanismo"], answer: "Heliocentrismo", explanation: "Defendida por Copérnico e Galileu.", skill: "Renascimento" },
  { grade: "7º", discipline: "História", type: "multiple", text: "A invenção da IMPRENSA por Gutenberg ajudou o Renascimento ao:", options: ["Proibir os livros", "Acelerar a divulgação de ideias e conhecimentos", "Criar a internet", "Fazer apenas desenhos religiosos"], answer: "Acelerar a divulgação de ideias e conhecimentos", explanation: "Permitiu a produção de livros em escala.", skill: "Renascimento" },
  { grade: "7º", discipline: "História", type: "multiple", text: "Grandes patrocinadores das artes e ciências no Renascimento eram chamados de:", options: ["Senhores Feudais", "Mecenas", "Vassalos", "Bárbaros"], answer: "Mecenas", explanation: "Mecenato era a proteção e financiamento de artistas.", skill: "Renascimento" },

  // --- INGLÊS (9º) - Conditionals / If-clauses (9 questions) ---
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Which sentence expresses a general truth (Zero Conditional)?", options: ["If you freeze water, it turns to ice.", "If I win, I will buy a car.", "If I were you, I would go.", "If it rains, we stay home."], answer: "If you freeze water, it turns to ice.", explanation: "Zero conditional is used for facts.", skill: "Conditionals" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Complete: 'If it ___ tomorrow, I will stay at home.'", options: ["rain", "rains", "rained", "raining"], answer: "rains", explanation: "First conditional: If + present, will + verb.", skill: "Conditionals" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "What is the structure of the First Conditional?", options: ["If + past, would + verb", "If + present, will + verb", "If + past perfect, would have", "If + present, present"], answer: "If + present, will + verb", explanation: "Used for real possibilities in the future.", skill: "Conditionals" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Translate: 'Se eu tivesse dinheiro, eu viajaria.' (Second Conditional)", options: ["If I have money, I travel.", "If I had money, I would travel.", "If I will have money, I travel.", "If I having money, I traveling."], answer: "If I had money, I would travel.", explanation: "Second conditional: If + past simple, would + verb.", skill: "Conditionals" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "In the sentence 'If I were rich, I'd help the poor', what is 'd abbreviation of?", options: ["did", "had", "should", "would"], answer: "would", explanation: "Conditional abbreviation: I would -> I'd.", skill: "Conditionals" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Which conditional is used for HYPOTHETICAL or IMAGINARY situations?", options: ["Zero Conditional", "First Conditional", "Second Conditional", "None of them"], answer: "Second Conditional", explanation: "Used for 'what if' scenarios.", skill: "Conditionals" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Complete: 'Unless you ___ harder, you won't pass.'", options: ["study", "studies", "studied", "studying"], answer: "study", explanation: "Unless = If not.", skill: "Conditionals" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Check the correct sentence:", options: ["If I go now, I will be late.", "If I go now, I won't be late.", "If I goes now, I will be late.", "If I go now, I am late."], answer: "If I go now, I won't be late.", explanation: "Conditional with negative consequence.", skill: "Conditionals" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "If we ___ to the party, we will have fun.", options: ["go", "goes", "gone", "going"], answer: "go", explanation: "First conditional structure (possibility).", skill: "Conditionals" },

  // --- EDUCAÇÃO FÍSICA (6º) - Lutas e Capoeira (7 questions) ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "A luta brasileira que mistura esporte, arte marcial, música e dança é:", options: ["Judô", "Caratê", "Capoeira", "Boxe"], answer: "Capoeira", explanation: "Patrimônio cultural imaterial da humanidade.", skill: "Lutas e Capoeira" },
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Qual instrumento é considerado a 'alma' da roda de capoeira?", options: ["Violão", "Bateria", "Berimbau", "Flauta"], answer: "Berimbau", explanation: "O berimbau dita o ritmo (axé) da roda.", skill: "Lutas e Capoeira" },
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "O movimento básico da capoeira, que serve para defesa e deslocamento, chama-se:", options: ["Ginga", "Nocaute", "Ippon", "Rasteira"], answer: "Ginga", explanation: "A ginga é o movimento balançante constante.", skill: "Lutas e Capoeira" },
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Qual a principal diferença entre 'Briga' e 'Luta' na Educação Física?", options: ["Briga tem regras, luta não", "Luta tem regras, ética e respeito; Briga é violência sem regras", "São a mesma coisa", "Só o uniforme muda"], answer: "Luta tem regras, ética e respeito; Briga é violência sem regras", explanation: "Luta é uma prática esportiva estruturada.", skill: "Lutas e Capoeira" },
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Os golpes da capoeira são feitos predominantemente com:", options: ["As mãos e braços", "Os pés e pernas", "Bastões", "Espadas"], answer: "Os pés e pernas", explanation: "Devido à sua origem histórica de mãos presas.", skill: "Lutas e Capoeira" },
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Quem foi o criador da Capoeira Regional, que introduziu o ensino metódico?", options: ["Mestre Pastinha", "Mestre Bimba", "Besouro Mangangá", "Zumbi dos Palmares"], answer: "Mestre Bimba", explanation: "Ele sistematizou a capoeira como esporte.", skill: "Lutas e Capoeira" },
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Em qual local tradicionalmente acontece o jogo da capoeira?", options: ["No ringue", "No tatame", "Na Roda", "No campo"], answer: "Na Roda", explanation: "A roda simboliza o círculo de energia e comunidade.", skill: "Lutas e Capoeira" }
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
console.log(`Sucesso! Sprint de Refinamento 5 concluído com ${batch.length} questões direcionadas.`);
