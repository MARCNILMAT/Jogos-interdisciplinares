import fs from 'fs';
const filePath = 'questions.js';
function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const ids = content.match(/id:\s*(\d+)/g).map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}
const startId = getNextId();
console.log(`Sprint 7 a partir do ID: ${startId}`);
const batch = [
  // ARTES (6º) - Dança e Contextos Sociais (7)
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O Frevo é uma dança típica de qual região do Brasil?", options: ["Sul", "Nordeste (Pernambuco)", "Sudeste", "Norte"], answer: "Nordeste (Pernambuco)", explanation: "Dança acrobática e energética do carnaval de Recife e Olinda.", skill: "Dança e Contextos Sociais" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual dança folclórica brasileira é dançada em pares com passos arrastados ao som de sanfona?", options: ["Samba", "Forró", "Funk", "Valsa"], answer: "Forró", explanation: "Originário do Nordeste, é patrimônio cultural.", skill: "Dança e Contextos Sociais" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A dança pode ser usada para expressar:", options: ["Apenas alegria", "Sentimentos, histórias e protestos", "Apenas exercícios físicos", "Apenas religiosidade"], answer: "Sentimentos, histórias e protestos", explanation: "A dança é uma linguagem artística completa.", skill: "Dança e Contextos Sociais" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O Bumba Meu Boi é uma manifestação cultural que mistura dança, teatro e música. É típico de qual estado?", options: ["São Paulo", "Maranhão", "Paraná", "Goiás"], answer: "Maranhão", explanation: "Patrimônio imaterial da humanidade pela UNESCO.", skill: "Dança e Contextos Sociais" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "As danças indígenas brasileiras geralmente têm ligação com:", options: ["Shows de TV", "Rituais sagrados e celebrações da natureza", "Competições esportivas", "Desfiles de moda"], answer: "Rituais sagrados e celebrações da natureza", explanation: "A dança indígena conecta o povo à espiritualidade.", skill: "Dança e Contextos Sociais" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O Maracatu é uma dança de origem africana muito presente no carnaval de:", options: ["Salvador", "Recife", "Rio de Janeiro", "Belo Horizonte"], answer: "Recife", explanation: "Mistura ritmo, dança e herança afro-brasileira.", skill: "Dança e Contextos Sociais" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A Quadrilha Junina é uma dança típica das festas de:", options: ["Natal", "Páscoa", "São João (Festas Juninas)", "Carnaval"], answer: "São João (Festas Juninas)", explanation: "Simula um casamento caipira com passos coreografados.", skill: "Dança e Contextos Sociais" },

  // ED. FÍSICA (7º) - Lutas do Brasil (5)
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Qual luta brasileira foi criada pelos escravizados como forma de resistência e disfarçada de dança?", options: ["Judô", "Capoeira", "Muay Thai", "Kung Fu"], answer: "Capoeira", explanation: "O disfarce em dança evitava a repressão dos senhores.", skill: "Lutas do Brasil" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O Huka-Huka é uma luta corporal praticada por qual povo?", options: ["Japoneses", "Indígenas brasileiros (Xingu)", "Chineses", "Gregos"], answer: "Indígenas brasileiros (Xingu)", explanation: "Praticada durante o ritual do Kuarup.", skill: "Lutas do Brasil" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "A Luta Marajoara tem origem em qual região do Brasil?", options: ["Sul", "Centro-Oeste", "Norte (Ilha de Marajó, PA)", "Sudeste"], answer: "Norte (Ilha de Marajó, PA)", explanation: "Luta de agarramento com técnicas de solo.", skill: "Lutas do Brasil" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "No contexto escolar, as lutas devem ser ensinadas com foco em:", options: ["Violência e agressão", "Respeito, técnica e autocontrole", "Apenas força bruta", "Competição a qualquer custo"], answer: "Respeito, técnica e autocontrole", explanation: "As lutas educam valores como disciplina e cidadania.", skill: "Lutas do Brasil" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Qual destas NÃO é uma luta de origem brasileira?", options: ["Capoeira", "Luta Marajoara", "Judô", "Huka-Huka"], answer: "Judô", explanation: "O Judô tem origem no Japão.", skill: "Lutas do Brasil" },

  // MATEMÁTICA (9º) - Teorema de Tales (8)
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O Teorema de Tales afirma que retas paralelas cortadas por transversais determinam segmentos:", options: ["Iguais", "Proporcionais", "Perpendiculares", "Aleatórios"], answer: "Proporcionais", explanation: "Base da proporcionalidade em geometria.", skill: "Teorema de Tales" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se uma reta paralela a um dos lados de um triângulo corta os outros dois lados, ela os divide em segmentos:", options: ["Iguais sempre", "Proporcionais", "Desiguais sempre", "Nenhuma relação"], answer: "Proporcionais", explanation: "Aplicação direta do Teorema de Tales.", skill: "Teorema de Tales" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Dois triângulos são semelhantes quando possuem:", options: ["Lados iguais", "Ângulos correspondentes iguais e lados proporcionais", "Apenas mesma área", "Apenas mesmo perímetro"], answer: "Ângulos correspondentes iguais e lados proporcionais", explanation: "Critério AA (Ângulo-Ângulo) de semelhança.", skill: "Teorema de Tales" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se AB/DE = BC/EF = AC/DF, então os triângulos ABC e DEF são:", options: ["Congruentes", "Semelhantes", "Opostos", "Complementares"], answer: "Semelhantes", explanation: "Razão de semelhança constante.", skill: "Teorema de Tales" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Tales de Mileto usou seu teorema para medir a altura de qual monumento?", options: ["Torre Eiffel", "Coliseu", "Pirâmide de Queóps", "Muralha da China"], answer: "Pirâmide de Queóps", explanation: "Usando sombras proporcionais.", skill: "Teorema de Tales" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se num feixe de paralelas os segmentos em uma transversal medem 2 e 4, e na outra o primeiro mede 3, quanto mede o segundo?", options: ["3", "6", "5", "8"], answer: "6", explanation: "2/4 = 3/x => x = 6.", skill: "Teorema de Tales" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A razão de semelhança entre dois triângulos semelhantes é 1/3. Se o lado do maior mede 12cm, o correspondente do menor mede:", options: ["3cm", "4cm", "6cm", "9cm"], answer: "4cm", explanation: "12 x (1/3) = 4cm.", skill: "Teorema de Tales" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual condição NÃO garante a semelhança de triângulos?", options: ["Dois ângulos iguais (AA)", "Três lados proporcionais (LLL)", "Um ângulo igual e lados adjacentes proporcionais (LAL)", "Apenas um lado igual"], answer: "Apenas um lado igual", explanation: "Um lado igual sozinho não prova semelhança.", skill: "Teorema de Tales" },

  // HISTÓRIA (6º) - Mesopotâmia (7)
  { grade: "6º", discipline: "História", type: "multiple", text: "A Mesopotâmia localizava-se entre quais dois rios?", options: ["Nilo e Amazonas", "Tigre e Eufrates", "Ganges e Indo", "Reno e Danúbio"], answer: "Tigre e Eufrates", explanation: "Mesopotâmia significa 'terra entre rios'.", skill: "Mesopotâmia" },
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual povo mesopotâmico inventou a escrita cuneiforme?", options: ["Egípcios", "Sumérios", "Romanos", "Gregos"], answer: "Sumérios", explanation: "Escrita em tabuletas de argila com formato de cunha.", skill: "Mesopotâmia" },
  { grade: "6º", discipline: "História", type: "multiple", text: "O Código de Hamurábi é considerado um dos primeiros conjuntos de:", options: ["Receitas culinárias", "Leis escritas da história", "Mapas geográficos", "Poemas épicos"], answer: "Leis escritas da história", explanation: "Princípio do 'olho por olho, dente por dente'.", skill: "Mesopotâmia" },
  { grade: "6º", discipline: "História", type: "multiple", text: "Os Jardins Suspensos da Babilônia eram considerados uma das:", options: ["Oito maravilhas modernas", "Sete maravilhas do mundo antigo", "Cinco leis de Newton", "Três pirâmides de Gizé"], answer: "Sete maravilhas do mundo antigo", explanation: "Atribuídos ao rei Nabucodonosor II.", skill: "Mesopotâmia" },
  { grade: "6º", discipline: "História", type: "multiple", text: "O Zigurate era uma construção mesopotâmica que servia como:", options: ["Estádio esportivo", "Templo religioso escalonado", "Residência de escravos", "Porto marítimo"], answer: "Templo religioso escalonado", explanation: "Torres em degraus dedicadas aos deuses.", skill: "Mesopotâmia" },
  { grade: "6º", discipline: "História", type: "multiple", text: "A região do Crescente Fértil recebeu esse nome devido:", options: ["À sua forma e fertilidade do solo", "Ao formato da lua", "Ao nome de um rei", "À cor das montanhas"], answer: "À sua forma e fertilidade do solo", explanation: "Formato de lua crescente com terras irrigadas e férteis.", skill: "Mesopotâmia" },
  { grade: "6º", discipline: "História", type: "multiple", text: "Qual império mesopotâmico era conhecido por seu poderoso exército e crueldade com inimigos?", options: ["Sumério", "Assírio", "Babilônico", "Persa"], answer: "Assírio", explanation: "Os assírios dominaram pela força militar.", skill: "Mesopotâmia" },

  // CIÊNCIAS (7º) - Reino Animal / Invertebrados (6)
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual a principal característica que diferencia invertebrados de vertebrados?", options: ["Tamanho do corpo", "Ausência de coluna vertebral", "Cor da pele", "Tipo de alimentação"], answer: "Ausência de coluna vertebral", explanation: "Invertebrados não possuem esqueleto interno.", skill: "Reino Animal" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Os insetos possuem quantas patas?", options: ["4", "6", "8", "10"], answer: "6", explanation: "Três pares de patas articuladas.", skill: "Reino Animal" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As aranhas pertencem ao grupo dos:", options: ["Insetos", "Aracnídeos", "Crustáceos", "Moluscos"], answer: "Aracnídeos", explanation: "Possuem 8 patas, diferente dos insetos.", skill: "Reino Animal" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "A água-viva e o coral pertencem ao grupo dos:", options: ["Moluscos", "Cnidários", "Anelídeos", "Equinodermos"], answer: "Cnidários", explanation: "Possuem células urticantes (cnidócitos).", skill: "Reino Animal" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "A minhoca é um exemplo de qual grupo de invertebrados?", options: ["Moluscos", "Artrópodes", "Anelídeos", "Poríferos"], answer: "Anelídeos", explanation: "Corpo segmentado em anéis.", skill: "Reino Animal" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As esponjas do mar são animais do grupo:", options: ["Cnidários", "Poríferos", "Moluscos", "Platelmintos"], answer: "Poríferos", explanation: "São os animais mais simples, sem tecidos organizados.", skill: "Reino Animal" }
];

const questionsWithIds = batch.map((q, i) => ({ id: startId + i, ...q }));
const str = questionsWithIds.map(q =>
  `  {\n    id: ${q.id},\n    grade: "${q.grade}",\n    discipline: "${q.discipline}",\n    type: "${q.type}",\n    text: "${q.text}",\n    options: ${JSON.stringify(q.options)},\n    answer: "${q.answer}",\n    explanation: "${q.explanation}",\n    skill: "${q.skill}"\n  }`
).join(',\n');
const content = fs.readFileSync(filePath, 'utf-8');
fs.writeFileSync(filePath, content.replace(/\s*\];\s*$/, ',\n\n' + str + '\n];\n'), 'utf-8');
console.log(`Sucesso! Sprint 7: ${batch.length} questões adicionadas.`);
