import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3306;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 64 e 65 (Final Super Round) a partir do ID: ${startId}`);

const batch = [
  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME?", options: ["Ele", "Cadeira", "Mesa", "Livro"], answer: "Ele", explanation: "Ele é um pronome pessoal do caso reto.", skill: "Classes" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O antônimo de 'Bom' é:", options: ["Lindo", "Mau", "Grande", "Feliz"], answer: "Mau", explanation: "Mau com U é o oposto de bom.", skill: "Semântica" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Papel' no plural é:", options: ["Papéis", "Papels", "Papeles", "Papeis"], answer: "Papéis", explanation: "Palavras em -el fazem o plural em -éis.", skill: "Plural" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'O Guarani'?", options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Monteiro Lobato"], answer: "José de Alencar", explanation: "Famoso romance do indianismo romântico.", skill: "Literatura" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "O substantivo coletivo de 'Estrelas' é:", options: ["Alcateia", "Cardume", "Constelação", "Matilha"], answer: "Constelação", explanation: "Conjunto de estrelas.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Ela é inteligente', qual o adjetivo?", options: ["Ela", "É", "Inteligente", "Não tem adjetivo"], answer: "Inteligente", explanation: "Atribui uma qualidade ao sujeito.", skill: "Adjetivos" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A regra de acentuação de 'Oxítona' se aplica a:", options: ["Sábado", "Café", "Mesa", "Caderno"], answer: "Café", explanation: "Café é oxítona terminada em E.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Porém' indica ideia de:", options: ["Adição", "Conclusão", "Oposição", "Causa"], answer: "Oposição", explanation: "Porém é uma conjunção adversativa.", skill: "Conjunções" },

  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'cachorro' in English?", options: ["Cat", "Dog", "Bird", "Fish"], answer: "Dog", explanation: "Dog = Cachorro.", skill: "Animals" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The pronoun for a boy is:", options: ["She", "He", "It", "They"], answer: "He", explanation: "He = Ele.", skill: "Pronouns" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Yesterday, I ___ to the beach.", options: ["go", "goes", "went", "going"], answer: "went", explanation: "Past of to go.", skill: "Past Tense" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choose the correct: '___ are you?' 'I am fine, thanks.'", options: ["What", "Where", "How", "Why"], answer: "How", explanation: "How are you? question.", skill: "Questions" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Which color is the result of Blue + Yellow?", options: ["Purple", "Orange", "Green", "Red"], answer: "Green", explanation: "Basic color mix.", skill: "Colors" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The plural of 'Child' is:", options: ["Childs", "Children", "Childes", "Childrens"], answer: "Children", explanation: "Irregular plural.", skill: "Nouns" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "What is the capital of the USA?", options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"], answer: "Washington, D.C.", explanation: "Capital city.", skill: "Culture" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "I ___ English now.", options: ["study", "am studying", "studied", "studies"], answer: "am studying", explanation: "Present continuous.", skill: "Verbs" },

  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual destas é uma cor secundária?", options: ["Vermelho", "Verde", "Azul", "Amarelo"], answer: "Verde", explanation: "Verde surge da mistura de azul e amarelo.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo artístico com formas geométricas e fragmentadas é o:", options: ["Impressionismo", "Cubismo", "Surrealismo", "Realismo"], answer: "Cubismo", explanation: "Exemplo famoso: Pablo Picasso.", skill: "Vanguardas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Quem pintou a 'Monalisa'?", options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Dalí"], answer: "Leonardo da Vinci", explanation: "Mestre do Renascimento.", skill: "História da Arte" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A arte urbana feita em muros públicos é o:", options: ["Mosaico", "Escultura", "Grafite", "Performance"], answer: "Grafite", explanation: "O grafite é uma expressão visual urbana.", skill: "Arte Urbana" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O desenho feito em cavernas na pré-história chama-se:", options: ["Pintura Rupestre", "Afresco", "Mosaico", "Óleo"], answer: "Pintura Rupestre", explanation: "Primeiros registros da humanidade.", skill: "História" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "A técnica de colar recortes é o:", options: ["Grafite", "Colagem", "Escultura", "Pintura"], answer: "Colagem", explanation: "Uso de diversos materiais.", skill: "Técnicas" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, o jogador que pode usar as mãos na área é o:", options: ["Ala", "Pivô", "Goleiro", "Fixo"], answer: "Goleiro", explanation: "Regra básica de goleiro.", skill: "Esportes Coletivos" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Quantas pessoas compõem uma equipe de Vôlei em quadra?", options: ["5", "6", "11", "7"], answer: "6", explanation: "Titulares por time.", skill: "Vôlei" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O Basquetebol é jogado com:", options: ["As mãos", "Os pés", "Uma raquete", "Tacos"], answer: "As mãos", explanation: "Drible e arremesso manual.", skill: "Basquete" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "A prática regular de exercício previne qual destas doenças?", options: ["Gripe", "Cárie", "Obesidade", "Miopia"], answer: "Obesidade", explanation: "Ajuda no controle do peso e metabolismo.", skill: "Saúde" },
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "O esporte de rede onde se usa uma raquete e uma peteca é o:", options: ["Tênis", "Ping-Pong", "Badminton", "Vôlei"], answer: "Badminton", explanation: "Esporte muito ágil com peteca.", skill: "Esportes" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um símbolo da paz?", options: ["Caveira", "Pomba Branca", "Raio", "Espada"], answer: "Pomba Branca", explanation: "Símbolo universal de paz.", skill: "Símbolos" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito às diferenças é fundamental para a:", options: ["Intolerância", "Convivência Social", "Desigualdade", "Discriminação"], answer: "Convivência Social", explanation: "A tolerância é base da paz.", skill: "Valores" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade de religião no Brasil é garantida pela:", options: ["Televisão", "Constituição", "Empresa", "Internet"], answer: "Constituição", explanation: "Nossa lei maior garante liberdade de culto.", skill: "Direitos" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "O conjunto de regras morais de uma religião chama-se:", options: ["Esporte", "Dogma/Ética", "Moda", "Negócio"], answer: "Dogma/Ética", explanation: "Orientações de conduta.", skill: "Ética" },
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Narrativas sagradas que explicam a origem do mundo são os:", options: ["Noticiários", "Mitos", "Contos", "Estatutos"], answer: "Mitos", explanation: "Mitos de criação.", skill: "Mitos" },

  // --- CIÊNCIAS/GEO EXTRA (Para fechar o volume) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual destes é um animal vertebrado?", options: ["Minhoca", "Peixe", "Borboleta", "Aranha"], answer: "Peixe", explanation: "Possui coluna vertebral.", skill: "Zoologia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As briófitas (musgos) são:", options: ["Árvores grandes", "Plantas rasteiras sem vasos", "Plantas com flores", "Cactos"], answer: "Plantas rasteiras sem vasos", explanation: "Avasculares.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema que bombeia o sangue é o:", options: ["Digestório", "Circulatório", "Nervoso", "Respiratório"], answer: "Circulatório", explanation: "Liderado pelo coração.", skill: "Fisiologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual a 1ª Lei de Newton?", options: ["Ação e Reação", "Inércia", "Gravidade", "Força"], answer: "Inércia", explanation: "Tendência de manter o estado.", skill: "Física" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O maior oceano é o:", options: ["Atlântico", "Pacífico", "Índico", "Ártico"], answer: "Pacífico", explanation: "Maior massa de água.", skill: "Hidrografia" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Quantas regiões tem o Brasil?", options: ["3", "4", "5", "6"], answer: "5", explanation: "IBGE divide em 5.", skill: "Brasil" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O BRICS inclui:", options: ["EUA", "Japão", "Índia", "França"], answer: "Índia", explanation: "B-R-I-C-S.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O aquecimento global é causado por gases:", options: ["Nobres", "Estufa (CO2)", "Líquidos", "Sólidos"], answer: "Estufa (CO2)", explanation: "Efeito estufa agravado.", skill: "Clima" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual o país mais populoso do mundo?", options: ["Brasil", "EUA", "Índia/China", "Rússia"], answer: "Índia/China", explanation: "Ambos brigam pelo topo.", skill: "População" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 50% de 200?", options: ["50", "100", "150", "200"], answer: "100", explanation: "Metade.", skill: "Cálculo" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz de 64 é:", options: ["6", "7", "8", "9"], answer: "8", explanation: "8x8=64.", skill: "Raiz" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Triângulo com 3 lados iguais chama-se:", options: ["Isósceles", "Escaleno", "Equilátero", "Reto"], answer: "Equilátero", explanation: "Lados iguais.", skill: "Geometria" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "MDC de 10 e 15?", options: ["2", "5", "10", "15"], answer: "5", explanation: "Maior divisor comum.", skill: "Divisores" },
  { grade: "7º", discipline: "História", type: "multiple", text: "Líder da Inconfidência Mineira?", options: ["D. Pedro I", "Tiradentes", "Zumbi", "Cabral"], answer: "Tiradentes", explanation: "Joaquim José da Silva Xavier.", skill: "Brasil" },
  { grade: "8º", discipline: "História", type: "multiple", text: "Descobrimento do Brasil?", options: ["1492", "1500", "1822", "1889"], answer: "1500", explanation: "Chegada dos portugueses.", skill: "Brasil" },
  { grade: "9º", discipline: "História", type: "multiple", text: "Presidente que construiu Brasília?", options: ["Vargas", "JK", "Sarney", "Lula"], answer: "JK", explanation: "Juscelino Kubitschek.", skill: "República" },
  { grade: "6º", discipline: "História", type: "multiple", text: "Quem descobriu o fogo?", options: ["Gregos", "Romanos", "Humanos Primitivos", "Alienígenas"], answer: "Humanos Primitivos", explanation: "Grande avanço da pré-história.", skill: "Origens" }
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
console.log(`Sucesso! Super Batch Final de ${batch.length} questões adicionado.`);
