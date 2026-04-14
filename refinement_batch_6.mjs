import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 4051;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote de Refinamento 6 (Targeted Filling) a partir do ID: ${startId}`);

const batch = [
  // --- ARTES (7º) - Patrimônio Cultural e Museus (7 questions to reach 10) ---
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O que é considerado 'Patrimônio Cultural Imaterial'?", options: ["Prédios históricos", "Estátuas de bronze", "Saberes, festas, danças e tradições", "Cidades inteiras"], answer: "Saberes, festas, danças e tradições", explanation: "Refere-se a práticas que não são objetos físicos, mas vivem na cultura de um povo.", skill: "Patrimônio Cultural e Museus" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Qual destes é um exemplo de Patrimônio Material no Brasil?", options: ["O Frevo", "A Capoeira", "O Cristo Redentor", "O Círio de Nazaré"], answer: "O Cristo Redentor", explanation: "Patrimônios materiais são bens físicos, como monumentos e prédios.", skill: "Patrimônio Cultural e Museus" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Como se chama o profissional responsável por cuidar, organizar e preservar as obras de um museu?", options: ["Pintor", "Curador", "Maestro", "Roteirista"], answer: "Curador", explanation: "O curador organiza as exposições e define a narrativa do museu.", skill: "Patrimônio Cultural e Museus" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O museu que possui a maior e mais famosa coleção de arte do mundo, localizado em Paris, é o:", options: ["Museu do Ipiranga", "Museu do Prado", "Louvre", "British Museum"], answer: "Louvre", explanation: "Onde se encontra a Monalisa, de Da Vinci.", skill: "Patrimônio Cultural e Museus" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Qual cidade de Minas Gerais é reconhecida como Patrimônio Mundial pela UNESCO devido ao seu conjunto arquitetônico barroco?", options: ["Belo Horizonte", "Ouro Preto", "Uberlândia", "Contagem"], answer: "Ouro Preto", explanation: "Famosa pelas esculturas de Aleijadinho e igrejas históricas.", skill: "Patrimônio Cultural e Museus" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O processo de restaurar uma obra de arte antiga busca:", options: ["Mudar as cores originais", "Preservar a obra mantendo suas características originais", "Apagar o nome do autor", "Pintar por cima de tudo"], answer: "Preservar a obra mantendo suas características originais", explanation: "A restauração visa manter o patrimônio para o futuro.", skill: "Patrimônio Cultural e Museus" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Qual a importância de um Museu para a sociedade?", options: ["Serve apenas como depósito de coisas velhas", "Preserva a história e a memória coletiva da humanidade", "É um lugar proibido para crianças", "Serve apenas para vender quadros"], answer: "Preserva a história e a memória coletiva da humanidade", explanation: "Museus são espaços de educação e preservação da cultura.", skill: "Patrimônio Cultural e Museus" },

  // --- EDUCAÇÃO FÍSICA (9º) - Esportes de Invasão (6 questions) ---
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "Nos esportes de invasão, qual o objetivo principal da equipe ofensiva?", options: ["Sair da quadra", "Entrar e pontuar no campo/alvo do adversário", "Apenas tocar a bola", "Ficar parado no meio do campo"], answer: "Entrar e pontuar no campo/alvo do adversário", explanation: "Exemplos: Futebol, Basquete, Handebol e Rugby.", skill: "Esportes de Invasão" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "Qual estratégia defensiva foca em marcar um jogador específico do outro time?", options: ["Marcação por zona", "Marcação individual", "Marcação mista", "Nenhuma das anteriores"], answer: "Marcação individual", explanation: "Cada defensor é responsável por um atacante.", skill: "Esportes de Invasão" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "O 'Pick and Roll' é uma tática ofensiva clássica de qual esporte de invasão?", options: ["Futebol", "Basquetebol", "Futsal", "Voleibol"], answer: "Basquetebol", explanation: "Envolve um bloqueio e um giro para receber a bola.", skill: "Esportes de Invasão" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "Em um contra-ataque rápido no Futebol, o objetivo é:", options: ["Aproximar o goleiro da bola", "Aproveitar o desequilíbrio da defesa adversária em alta velocidade", "Fazer passes para trás", "Esperar o time adversário se organizar"], answer: "Aproveitar o desequilíbrio da defesa adversária em alta velocidade", explanation: "O contra-ataque busca a superioridade numérica momentânea.", skill: "Esportes de Invasão" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "No Handebol, o que acontece se um jogador de linha entrar na área do goleiro com a bola?", options: ["É marcado um gol", "É marcada uma falta (infração à regra)", "O jogo continua normalmente", "O jogador é expulso para sempre"], answer: "É marcada uma falta (infração à regra)", explanation: "A área do goleiro é exclusiva para o mesmo.", skill: "Esportes de Invasão" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "A 'Transição Defensiva' de uma equipe ocorre quando ela:", options: ["Está com a bola e vai atacar", "Perde o controle da bola e precisa voltar para defender rapidamente", "Marca um ponto", "Sai para o intervalo"], answer: "Perde o controle da bola e precisa voltar para defender rapidamente", explanation: "É um momento crítico para evitar gols do adversário.", skill: "Esportes de Invasão" },

  // --- MATEMÁTICA (8º) - Teorema de Pitágoras (10 questions) ---
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O Teorema de Pitágoras diz que, em um triângulo retângulo, o quadrado da hipotenusa é igual a:", options: ["A soma dos catetos", "A diferença dos catetos", "A soma dos quadrados dos catetos", "O dobro da área"], answer: "A soma dos quadrados dos catetos", explanation: "a² = b² + c².", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Como se chama o maior lado de um triângulo retângulo, oposto ao ângulo de 90 graus?", options: ["Cateto oposto", "Cateto adjacente", "Hipotenusa", "Vértice"], answer: "Hipotenusa", explanation: "A hipotenusa é sempre o lado mais longo.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Em um triângulo retângulo com catetos de 3cm e 4cm, qual a medida da hipotenusa?", options: ["5cm", "7cm", "12cm", "25cm"], answer: "5cm", explanation: "3² + 4² = 9 + 16 = 25. Raiz de 25 é 5.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Se a hipotenusa de um triângulo mede 10cm e um dos catetos mede 6cm, quanto mede o outro cateto?", options: ["4cm", "8cm", "16cm", "12cm"], answer: "8cm", explanation: "10² = 6² + b² => 100 = 36 + b² => b² = 64 => b = 8.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O Teorema de Pitágoras pode ser aplicado em qual tipo de triângulo?", options: ["Equilátero", "Escaleno", "Triângulo Retângulo", "Acutângulo"], answer: "Triângulo Retângulo", explanation: "Só funciona em triângulos com um ângulo de 90º.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um triângulo de lados 5, 12 e 13 é um triângulo retângulo?", options: ["Sim, pois 25 + 144 = 169", "Não, as medidas não batem", "Só se os catetos forem 5 e 13", "Sim, pois 5 + 12 = 17"], answer: "Sim, pois 25 + 144 = 169", explanation: "5² + 12² = 13². (Triângulo Pitagórico).", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Ao calcular a diagonal de um quadrado de lado 1, usamos Pitágoras e chegamos em:", options: ["1", "2", "Raiz quadrada de 2", "Raiz quadrada de 3"], answer: "Raiz quadrada de 2", explanation: "1² + 1² = 2. Diagonal = raiz(2).", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Pitágoras foi um importante matemático e filósofo de qual civilização?", options: ["Egípcia", "Romana", "Grega", "Chinesa"], answer: "Grega", explanation: "Mestre da escola pitagórica na Grécia Antiga.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual destas ternas de números NÃO forma um triângulo retângulo?", options: ["3, 4, 5", "6, 8, 10", "1, 2, 3", "5, 12, 13"], answer: "1, 2, 3", explanation: "1² + 2² = 5, que é diferente de 3² (9).", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A hipotenusa é sempre menor que a soma dos dois catetos?", options: ["Sim, por causa da desigualdade triangular", "Não, é sempre maior", "Depende do tamanho do triângulo", "Sim, é igual"], answer: "Sim, por causa da desigualdade triangular", explanation: "Em qualquer triângulo, um lado é sempre menor que a soma dos outros dois.", skill: "Teorema de Pitágoras" },

  // --- HISTÓRIA (9º) - Era Vargas e Populismo (8 questions) ---
  { grade: "9º", discipline: "História", type: "multiple", text: "Qual governante brasileiro ficou no poder entre 1930 e 1945 e é conhecido como 'O Pai dos Pobres'?", options: ["Juscelino Kubitschek", "Getúlio Vargas", "João Goulart", "D. Pedro II"], answer: "Getúlio Vargas", explanation: "Vargas liderou a Revolução de 30 e governou por 15 anos seguidos.", skill: "Era Vargas e Populismo" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A CLT (Consolidação das Leis do Trabalho), que garantiu direitos como o salário mínimo, foi criada por:", options: ["Deodoro da Fonseca", "Prudente de Morais", "Getúlio Vargas", "Fernando Henrique"], answer: "Getúlio Vargas", explanation: "Marco fundamental dos direitos trabalhistas no Brasil.", skill: "Era Vargas e Populismo" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O período da Era Vargas em que o congresso foi fechado e houve uma ditadura (1937-1945) chama-se:", options: ["República Velha", "Estado Novo", "Anos de Chumbo", "Milagre Econômico"], answer: "Estado Novo", explanation: "Período autoritário com forte censura (DIP).", skill: "Era Vargas e Populismo" },
  { grade: "9º", discipline: "História", type: "multiple", text: "Qual destas indústrias de base foi criada por Vargas para modernizar o Brasil?", options: ["Microsoft Brasil", "Companhia Siderúrgica Nacional (CSN)", "Netflix", "Volkswagen"], answer: "Companhia Siderúrgica Nacional (CSN)", explanation: "Foi um passo para a industrialização nacional.", skill: "Era Vargas e Populismo" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O 'Trabalhismo' de Vargas buscava uma aliança entre:", options: ["Fazendeiros e Escravos", "Estado e Trabalhadores Urbanos", "Brasil e Argentina apenas", "Igreja e Exército"], answer: "Estado e Trabalhadores Urbanos", explanation: "Vargas usava os direitos sociais como forma de controle e apoio político.", skill: "Era Vargas e Populismo" },
  { grade: "9º", discipline: "História", type: "multiple", text: "Getúlio Vargas voltou à presidência em 1951 através de:", options: ["Um novo golpe", "Eleições diretas e voto popular", "Nomeação do rei", "Sorteio"], answer: "Eleições diretas e voto popular", explanation: "Vargas voltou 'nos braços do povo'.", skill: "Era Vargas e Populismo" },
  { grade: "9º", discipline: "História", type: "multiple", text: "O suicídio de Getúlio Vargas, em 1954, ocorreu em meio a uma forte crise e deixou uma famosa:", options: ["Carta-Testamento", "Lista de compras", "Declaração de amor", "Lei seca"], answer: "Carta-Testamento", explanation: "Frase célebre: 'Sair da vida para entrar na história'.", skill: "Era Vargas e Populismo" },
  { grade: "9º", discipline: "História", type: "multiple", text: "Qual foi o órgão de censura e propaganda criado por Vargas no Estado Novo?", options: ["Globo", "DIP (Departamento de Imprensa e Propaganda)", "IBGE", "CNPQ"], answer: "DIP (Departamento de Imprensa e Propaganda)", explanation: "Controlava a imagem do governo e o rádio.", skill: "Era Vargas e Populismo" },

  // --- CIÊNCIAS (8º) - Sistema Endócrino e Hormônios (7 questions) ---
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "As substâncias químicas produzidas pelas glândulas que coordenam o corpo são os:", options: ["Antibióticos", "Hormônios", "Vírus", "Sais Minerais"], answer: "Hormônios", explanation: "Hormônios são mensageiros químicos lançados no sangue.", skill: "Sistema Endócrino" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual glândula é conhecida como 'Glândula Mestra' por controlar outras glândulas?", options: ["Tireoide", "Pâncreas", "Hipófise", "Suprarrenais"], answer: "Hipófise", explanation: "Localizada na base do cérebro.", skill: "Sistema Endócrino" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O hormônio produzido pelo Pâncreas que controla os níveis de açúcar no sangue é a:", options: ["Adrenalina", "Insulina", "Melatonina", "Prolactina"], answer: "Insulina", explanation: "A falta dela causa diabetes.", skill: "Sistema Endócrino" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual hormônio é liberado pelas glândulas suprarrenais em situações de perigo ou susto?", options: ["Insulina", "Ocitocina", "Adrenalina", "Hormônio do Crescimento"], answer: "Adrenalina", explanation: "Prepara o corpo para luta ou fuga.", skill: "Sistema Endócrino" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "A Tireoide, localizada no pescoço, produz hormônios que regulam o:", options: ["Batimento do coração apenas", "Metabolismo corporal", "Crescimento dos cabelos apenas", "Tamanho dos pés"], answer: "Metabolismo corporal", explanation: "Atua na velocidade com que as células funcionam.", skill: "Sistema Endócrino" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Os hormônios sexuais masculinos (testosterona) são produzidos nos:", options: ["Ovários", "Testículos", "Fígado", "Rins"], answer: "Testículos", explanation: "Atuam no desenvolvimento de características masculinas.", skill: "Sistema Endócrino" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O hormônio responsável pela regulação do ciclo do sono é a:", options: ["Dopamina", "Melatonina", "Tiroxina", "Glucagon"], answer: "Melatonina", explanation: "Produzida na glândula pineal em ambientes escuros.", skill: "Sistema Endócrino" }
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
console.log(`Sucesso! Sprint de Refinamento 6 concluído com ${batch.length} questões direcionadas.`);
