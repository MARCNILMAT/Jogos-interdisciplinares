import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3843;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote de Refinamento 1 (Targeted Filling) a partir do ID: ${startId}`);

const batch = [
  // --- ARTES (9º) - Vanguardas (9 questions to reach 10) ---
  { grade: "9º", discipline: "Arte", type: "multiple", text: "Qual movimento artístico de vanguarda focava na representação de sonhos e do subconsciente?", options: ["Cubismo", "Surrealismo", "Futurismo", "Realismo"], answer: "Surrealismo", explanation: "Salvador Dalí e René Magritte são ícones deste movimento.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O 'Grito', de Edvard Munch, é uma das obras mais famosas de qual vanguarda?", options: ["Impressionismo", "Expressonismo", "Pop Art", "Dadaísmo"], answer: "Expressonismo", explanation: "O expressionismo foca na subjetividade e emoção intensa.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "Quem foi o principal precursor da vanguarda Cubista?", options: ["Van Gogh", "Claude Monet", "Pablo Picasso", "Andy Warhol"], answer: "Pablo Picasso", explanation: "O cubismo rompeu com a perspectiva tradicional.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "Qual vanguarda utilizava objetos do cotidiano para questionar o conceito de arte (Ready-made)?", options: ["Dadaísmo", "Futurismo", "Cubismo", "Realismo"], answer: "Dadaísmo", explanation: "Marcel Duchamp é o maior expoente com 'A Fonte'.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O Futurismo, surgido na Itália, tinha como tema central:", options: ["A vida no campo", "A velocidade e a tecnologia", "A religiosidade", "O passado clássico"], answer: "A velocidade e a tecnologia", explanation: "O movimento exaltava a máquina e o progresso industrial.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "Qual destas é uma característica marcante do Fauvismo?", options: ["Uso cores arbitrárias e vibrantes", "Uso de formas geométricas perfeitas", "Pintura realista e fotográfica", "Uso exclusivo de preto e branco"], answer: "Uso cores arbitrárias e vibrantes", explanation: "Henri Matisse foi um dos líderes dos 'feras' (fauves).", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A 'Semana de Arte Moderna' no Brasil (1922) foi influenciada pelas:", options: ["Tradições coloniais", "Vanguardas Europeias", "Artes tribais asiáticas", "Pinturas medievais"], answer: "Vanguardas Europeias", explanation: "Anita Malfatti trouxe influências expressionistas e cubistas.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O que caracteriza o estilo Abstracionismo?", options: ["Pintura exata da realidade", "Ausência de formas reconhecíveis da natureza", "Foco apenas em temas religiosos", "Pintura de retratos da nobreza"], answer: "Ausência de formas reconhecíveis da natureza", explanation: "Kandinsky é considerado um dos pioneiros da abstração.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "Qual vanguarda defendia a destruição das bibliotecas e museus para focar no novo?", options: ["Futurismo", "Surrealismo", "Impressionismo", "Cubismo"], answer: "Futurismo", explanation: "Foi um dos itens polêmicos do Manifesto Futurista de Marinetti.", skill: "Vanguardas" },

  // --- CIÊNCIAS (7º) - Ecossistemas (9 questions to reach 10) ---
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O conjunto de seres vivos de um local e os fatores físicos (sol, água) chama-se:", options: ["População", "Comunidade", "Ecossistema", "Biosfera"], answer: "Ecossistema", explanation: "Interação entre o meio biótico e abiótico.", skill: "Ecossistemas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes é um fator ABIÓTICO de um ecossistema?", options: ["Plantas", "Bactérias", "Luz Solar", "Peixes"], answer: "Luz Solar", explanation: "Fatores abióticos são os elementos não vivos (luz, água, solo).", skill: "Ecossistemas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Em uma cadeia alimentar, as plantas ocupam o papel de:", options: ["Consumidores", "Produtores", "Decompositores", "Predadores"], answer: "Produtores", explanation: "Produzem o próprio alimento via fotossíntese.", skill: "Ecossistemas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual o papel principal dos fungos e bactérias no ecossistema?", options: ["Produzir oxigênio", "Decompor matéria orgânica", "Consumir outros seres", "Servir de abrigo"], answer: "Decompor matéria orgânica", explanation: "Reciclam os nutrientes para o solo.", skill: "Ecossistemas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Como se chama o ecossistema brasileiro exclusivo, com clima semiárido?", options: ["Pampas", "Pantanal", "Caatinga", "Mata Atlântica"], answer: "Caatinga", explanation: "Vegetação adaptada à escassez de água.", skill: "Ecossistemas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "A relação harmônica onde ambos os seres se beneficiam é chamada de:", options: ["Parasitismo", "Mutualismo", "Predatismo", "Competição"], answer: "Mutualismo", explanation: "Exemplo: líquens (algas + fungos).", skill: "Ecossistemas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O bioma que possui a maior biodiversidade do mundo está no Brasil. É o:", options: ["Cerrado", "Caatinga", "Floresta Amazônica", "Pampas"], answer: "Floresta Amazônica", explanation: "Reserva vital para o equilíbrio global.", skill: "Ecossistemas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O acúmulo de poluentes ao longo da cadeia alimentar é conhecido como:", options: ["Efeito Estufa", "Magnificação Trófica", "Eutrofização", "Fotossíntese"], answer: "Magnificação Trófica", explanation: "Substâncias tóxicas aumentam nos níveis superiores da cadeia.", skill: "Ecossistemas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes ecossistemas é considerado uma floresta tropical costeira?", options: ["Pampas", "Mata Atlântica", "Caatinga", "Cerrado"], answer: "Mata Atlântica", explanation: "Originalmente cobria quase todo o litoral brasileiro.", skill: "Ecossistemas" },

  // --- EDUCAÇÃO FÍSICA (8º) - Ginástica (7 questions to reach 10) ---
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "Qual destas modalidades de ginástica utiliza aparelhos como bola e arco?", options: ["Ginástica Artística", "Ginástica Rítmica", "Ginástica Acrobática", "Ginástica de Solo"], answer: "Ginástica Rítmica", explanation: "Focada na fluidez, música e uso de aparelhos manuais.", skill: "Ginástica" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O 'Cavalo com Alças' e as 'Argolas' são aparelhos de qual ginástica?", options: ["Ginástica Rítmica", "Ginástica Artística Masculina", "Ginástica Laboral", "Trampolim"], answer: "Ginástica Artística Masculina", explanation: "Exige muita força e técnica em aparelhos específicos.", skill: "Ginástica" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "A ginástica praticada no local de trabalho para prevenir lesões é a:", options: ["Ginástica de Academia", "Ginástica Laboral", "Crossfit", "Yoga"], answer: "Ginástica Laboral", explanation: "Focada em alongamentos e correção postural no trabalho.", skill: "Ginástica" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "Qual capacidade física é mais solicitada em um exercício de alongamento?", options: ["Força Explosiva", "Flexibilidade", "Velocidade", "Resistência Anaeróbica"], answer: "Flexibilidade", explanation: "Ampliando a movimentação articular.", skill: "Ginástica" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "Na ginástica rítmica, qual aparelho NÃO é utilizado?", options: ["Bola", "Fita", "Bolas de Chumbo", "Maças"], answer: "Bolas de Chumbo", explanation: "Os aparelhos oficiais são corda, arco, bola, maças e fita.", skill: "Ginástica" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "Quem é a ginasta brasileira campeã mundial e olímpica no solo?", options: ["Daiane dos Santos", "Rebeca Andrade", "Daniele Hypolito", "Jade Barbosa"], answer: "Rebeca Andrade", explanation: "Grande ícone da ginástica artística atual do Brasil.", skill: "Ginástica" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O salto sobre o cavalo (mesa de salto) é comum na ginástica:", options: ["Rítmica", "Laboral", "Artística", "Condicionamento"], answer: "Artística", explanation: "Prova de explosão e potência.", skill: "Ginástica" },

  // --- INGLÊS (8º) - Adjectives (5 questions to reach 10) ---
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "The opposite of 'Difficult' is:", options: ["Hard", "Easy", "Smart", "Boring"], answer: "Easy", explanation: "Difficult (difícil) x Easy (fácil).", skill: "Adjectives" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Choose the adjective for someone who likes to study:", options: ["Lazy", "Strong", "Studious", "Old"], answer: "Studious", explanation: "Studious = estudioso.", skill: "Adjectives" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Which adjective means 'extremely good'?", options: ["Bad", "Wonderful", "Average", "Tiny"], answer: "Wonderful", explanation: "Wonderful = Maravilhoso.", skill: "Adjectives" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "The house is very ___. It has 10 bedrooms.", options: ["Small", "Tiny", "Large", "Cheap"], answer: "Large", explanation: "Large = Grande/Espaçosa.", skill: "Adjectives" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Today is a ___ day. I am going to the beach.", options: ["Sunny", "Cold", "Rainy", "Sad"], answer: "Sunny", explanation: "Sunny = Ensolarado.", skill: "Adjectives" },

  // --- GEOGRAFIA (7º) - Urbanização (9 questions to reach 10) ---
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O crescimento rápido e desordenado das cidades chama-se:", options: ["Industrialização", "Exurbanização", "Macrocefalia Urbana", "Gentrificação"], answer: "Macrocefalia Urbana", explanation: "Concentração excessiva de serviços e pessoas em uma só cidade.", skill: "Urbanização" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A migração do campo para a cidade é o:", options: ["Êxodo Rural", "Transumância", "Turismo", "Migração de Retorno"], answer: "Êxodo Rural", explanation: "Principal causa da urbanização brasileira acelerada.", skill: "Urbanização" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Quando duas ou mais cidades crescem e se emendam fisicamente, ocorre a:", options: ["Verticalização", "Conurbação", "Revitalização", "Periferização"], answer: "Conurbação", explanation: "Processo visual de união urbana.", skill: "Urbanização" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A cidade principal de uma rede urbana, com maior influência, é a:", options: ["Vila", "Cidade Satélite", "Metrópole", "Cidade Dormitório"], answer: "Metrópole", explanation: "Concentra o poder decisório e serviços complexos.", skill: "Urbanização" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "As 'Cidades Dormitório' são locais onde:", options: ["Ninguém vive", "As pessoas apenas trabalham", "As pessoas moram, mas trabalham fora", "Só existem hotéis"], answer: "As pessoas moram, mas trabalham fora", explanation: "Comuns em regiões metropolitanas.", skill: "Urbanização" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O processo de substituição de populações de baixa renda por de alta renda em bairros centrais é a:", options: ["Favelização", "Gentrificação", "Ruralização", "Globalização"], answer: "Gentrificação", explanation: "Gera elitização de bairros históricos.", skill: "Urbanização" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A 'Verticalização' urbana refere-se ao aumento de:", options: ["Parques públicos", "Prédios altos", "Autoestradas", "Casas térreas"], answer: "Prédios altos", explanation: "Otimização do espaço em centros valorizados.", skill: "Urbanização" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual destas é considerada uma Megalópole (união de metrópoles) nos EUA?", options: ["Amazonas", "Bos-Wash", "Pantanal", "Sahara"], answer: "Bos-Wash", explanation: "Vasta mancha urbana entre Boston e Washington.", skill: "Urbanização" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A carência de saneamento e serviços básicos em bairros periféricos caracteriza a:", options: ["Segregação Socioespacial", "Integração Global", "Urbanização Sustentável", "Revitalização Cultural"], answer: "Segregação Socioespacial", explanation: "Divisão clara entre áreas ricas e precárias na cidade.", skill: "Urbanização" },

  // --- HISTÓRIA (6º) - Egito Antigo (7 questions to reach 10) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Quem era considerado o deus vivo e governante máximo no Egito?", options: ["Sacerdote", "Faraó", "Vizir", "Escriba"], answer: "Faraó", explanation: "Teocracia: o rei era um deus.", skill: "Egito Antigo" },
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual rio foi fundamental para a agricultura e vida no Egito Antigo?", options: ["Rio Amazonas", "Rio Nilo", "Rio Tigre", "Rio Eufrates"], answer: "Rio Nilo", explanation: "O Egito é uma 'dádiva do Nilo'.", skill: "Egito Antigo" },
  { grade: "6º", discipline: "História", type: "multiple", text: "A técnica de preservar corpos na Antiguidade Egípcia era a:", options: ["Cremação", "Mumificação", "Mergulho em sal", "Embalsamamento em óleo"], answer: "Mumificação", explanation: "Ligada à crença na vida após a morte.", skill: "Egito Antigo" },
  { grade: "6º", discipline: "História", type: "multiple", text: "A escrita sagrada dos egípcios, feita de desenhos, chamava-se:", options: ["Hieróglifos", "Cuneiforme", "Alfabeto", "Fenícia"], answer: "Hieróglifos", explanation: "Usada em templos e pirâmides.", skill: "Egito Antigo" },
  { grade: "6º", discipline: "História", type: "multiple", text: "As grandes pirâmides de Gizé serviam como:", options: ["Templos de adoração", "Escolas", "Túmulos monumentais", "Bibliotecas"], answer: "Túmulos monumentais", explanation: "Para guardar o corpo do Faraó e suas riquezas.", skill: "Egito Antigo" },
  { grade: "6º", discipline: "História", type: "multiple", text: "A classe social egípcia responsável pela escrita e contabilidade era a dos:", options: ["Guerreiros", "Escribas", "Camponeses", "Comerciantes"], answer: "Escribas", explanation: "Possuíam alto prestígio por saberem ler e escrever.", skill: "Egito Antigo" },
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual destes era um importante papel na religião egípcia (deus dos mortos)?", options: ["Zeus", "Anúbis", "Thor", "Afrodite"], answer: "Anúbis", explanation: "Guiava as almas no julgamento do coração.", skill: "Egito Antigo" }
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
console.log(`Sucesso! Sprint de Refinamento 1 concluído com ${batch.length} questões direcionadas.`);
