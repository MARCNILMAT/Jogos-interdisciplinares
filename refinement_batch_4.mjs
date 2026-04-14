import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3961;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote de Refinamento 4 (Targeted Filling) a partir do ID: ${startId}`);

const batch = [
  // --- ARTES (6º) - Mosaico e Colagem (9 questions to reach 10) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A técnica do mosaico consiste em formar imagens utilizando pequenos pedaços de:", options: ["Tinta guache", "Papel, vidro ou pedras (tésseras)", "Apenas arame", "Luz e sombra"], answer: "Papel, vidro ou pedras (tésseras)", explanation: "Esses pequenos fragmentos são colados em uma superfície para formar o desenho.", skill: "Mosaico e Colagem" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual civilização antiga ficou famosa pelos seus grandiosos mosaicos em templos e palácios?", options: ["Astecas", "Romanos", "Vikings", "Incas"], answer: "Romanos", explanation: "Os romanos aperfeiçoaram a técnica do mosaico decorativo.", skill: "Mosaico e Colagem" },
  { grade: "6o", discipline: "Arte", type: "multiple", text: "A técnica da 'Colagem' permite ao artista utilizar:", options: ["Apenas uma cor de tinta", "Diversos materiais sobrepostos em um suporte", "Apenas uma pedra de mármore", "Luz solar direta"], answer: "Diversos materiais sobrepostos em um suporte", explanation: "Permite misturar fotos, tecidos e objetos.", skill: "Mosaico e Colagem" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A palavra 'Mosaico' tem origem em qual termo grego relacionado às divindades das artes?", options: ["Museion (Musa)", "Zêus", "Apolo", "Atena"], answer: "Museion (Musa)", explanation: "Considerada uma obra das musas.", skill: "Mosaico e Colagem" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual artista é conhecido por suas colagens e uso de formas orgânicas e recortes de papel?", options: ["Leonardo da Vinci", "Henri Matisse", "Michelangelo", "Van Gogh"], answer: "Henri Matisse", explanation: "Em sua fase final, Matisse criou obras incríveis com recortes de papel colorido.", skill: "Mosaico e Colagem" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A técnica de colagem que utiliza apenas fotografias ou recortes de revistas chama-se:", options: ["Fotomatéria", "Fotomontagem", "Fotoescultura", "Fotopintura"], answer: "Fotomontagem", explanation: "Criação de novas imagens a partir de recortes fotográficos.", skill: "Mosaico e Colagem" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Para fixar as peças de um mosaico de pedra em uma parede, utiliza-se normalmente:", options: ["Fita adesiva", "Argamassa ou cimento", "Clipes de papel", "Apenas água"], answer: "Argamassa ou cimento", explanation: "Garante a durabilidade e fixação das peças.", skill: "Mosaico e Colagem" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O 'Patchwork' é uma forma de colagem feita com qual material?", options: ["Plástico", "Tecido", "Vidro", "Madeira"], answer: "Tecido", explanation: "União de pedaços de tecidos de diferentes padrões.", skill: "Mosaico e Colagem" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A colagem como técnica de vanguarda foi introduzida no início do século XX pelo:", options: ["Realismo", "Cubismo", "Barroco", "Renascimento"], answer: "Cubismo", explanation: "Picasso e Braque foram pioneiros no uso de materiais externos na tela.", skill: "Mosaico e Colagem" },

  // --- EDUCAÇÃO FÍSICA (7º) - Esportes de Marca (7 questions) ---
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Esportes de marca são aqueles em que o resultado é definido por:", options: ["Número de gols", "Tempo, distância ou peso", "Estética do movimento", "Votação do público"], answer: "Tempo, distância ou peso", explanation: "Exemplos: Atletismo, Natação e Levantamento de Peso.", skill: "Esportes de Marca" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Qual destas provas do atletismo é um esporte de marca baseado em DISTÂNCIA?", options: ["Maratona", "Salto em distância", "100 metros rasos", "Revezamento 4x100"], answer: "Salto em distância", explanation: "Vence quem saltar a maior distância medida.", skill: "Esportes de Marca" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "A prova de 100 metros rasos no atletismo é um esporte de marca baseado em:", options: ["Peso", "Distância", "Tempo (velocidade)", "Altura"], answer: "Tempo (velocidade)", explanation: "O objetivo é percorrer o espaço no menor tempo possível.", skill: "Esportes de Marca" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O 'Levantamento de Peso' é um esporte de marca onde a marca é medida em:", options: ["Quilogramas (Peso)", "Segundos", "Metros", "Pontos"], answer: "Quilogramas (Peso)", explanation: "Ganha quem levanta a maior carga.", skill: "Esportes de Marca" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Qual destes esportes NÃO é considerado um esporte de marca?", options: ["Natação", "Ciclismo de pista", "Futebol", "Remo"], answer: "Futebol", explanation: "Futebol é um esporte de invasão.", skill: "Esportes de Marca" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "No atletismo, o lançamento de dardo é um exemplo de esporte de marca focado em:", options: ["Alvo", "Distância", "Agilidade", "Equilíbrio"], answer: "Distância", explanation: "Vence o atleta que arremessa o dardo o mais longe possível.", skill: "Esportes de Marca" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O recorde mundial do jamaicano Usain Bolt foi estabelecido em qual categoria de esporte de marca?", options: ["Salto em altura", "Natação 50m", "Corrida de 100m e 200m", "Arremesso de peso"], answer: "Corrida de 100m e 200m", explanation: "Bolt é o homem mais rápido da história nestas distâncias.", skill: "Esportes de Marca" },

  // --- MATEMÁTICA (7º) - Números Inteiros e Racionais (6 questions) ---
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado da operação (-5) + (-8)?", options: ["-3", "3", "-13", "13"], answer: "-13", explanation: "Soma de dois números negativos resulta em um negativo maior.", skill: "Números Inteiros e Racionais" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O conjunto dos Números Inteiros (Z) compreende:", options: ["Apenas números positivos", "Apenas números negativos", "Números positivos, negativos e o zero", "Apenas frações"], answer: "Números positivos, negativos e o zero", explanation: "Definição do conjunto Z.", skill: "Números Inteiros e Racionais" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Na reta numérica, qual número está mais próximo de zero?", options: ["-10", "5", "-2", "8"], answer: "-2", explanation: "O valor absoluto de -2 é 2, que é a menor distância entre as opções.", skill: "Números Inteiros e Racionais" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de (-4) x (-3)?", options: ["-12", "12", "-7", "7"], answer: "12", explanation: "Menos com menos na multiplicação resulta em mais.", skill: "Números Inteiros e Racionais" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O número -15 é MAIOR ou MENOR que -5?", options: ["Maior", "Menor", "Igual", "Nenhuma das anteriores"], answer: "Menor", explanation: "Quanto mais longe do zero à esquerda, menor o número.", skill: "Números Inteiros e Racionais" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual dessas opções representa um Número Racional?", options: ["Apenas o 10", "Apenas o -5", "Qualquer número que pode ser escrito como fração (a/b)", "Apenas o número zero"], answer: "Qualquer número que pode ser escrito como fração (a/b)", explanation: "Definição de números racionais (Q).", skill: "Números Inteiros e Racionais" },

  // --- HISTÓRIA (8º) - Independência dos EUA (8 questions) ---
  { grade: "8º", discipline: "História", type: "multiple", text: "A Independência dos Estados Unidos (1776) foi um conflito contra qual país?", options: ["França", "Espanha", "Inglaterra", "Portugal"], answer: "Inglaterra", explanation: "As 13 colônias lutaram contra o domínio britânico.", skill: "Independência dos EUA" },
  { grade: "8º", discipline: "História", type: "multiple", text: "Qual o nome do documento assinado em 4 de julho de 1776 que oficializou a separação?", options: ["Tratado de Tordesilhas", "Declaração de Independência", "Constituição Imperial", "Carta Magna"], answer: "Declaração de Independência", explanation: "Principal marco da fundação dos EUA.", skill: "Independência dos EUA" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A principal causa econômica da revolta das 13 colônias foi:", options: ["A baixa dos preços do açúcar", "O aumento abusivo de impostos pela Inglaterra (como o selo e o chá)", "A falta de ouro nas colônias", "O desejo de migrar para a Ásia"], answer: "O aumento abusivo de impostos pela Inglaterra (como o selo e o chá)", explanation: "Insuflou o lema 'No taxation without representation'.", skill: "Independência dos EUA" },
  { grade: "8º", discipline: "História", type: "multiple", text: "O episódio em que colonos jogaram carregamentos de chá no mar em protesto chamou-se:", options: ["Boston Tea Party (Festa do Chá de Boston)", "Guerra do Café", "Invasão de Nova York", "Carnaval Americano"], answer: "Boston Tea Party (Festa do Chá de Boston)", explanation: "Gritante ato de resistência fiscal.", skill: "Independência dos EUA" },
  { grade: "8º", discipline: "História", type: "multiple", text: "Qual país europeu ajudou militarmente os colonos americanos contra a Inglaterra?", options: ["França", "Alemanha", "Itália", "Rússia"], answer: "França", explanation: "A França viu uma oportunidade de enfraquecer sua rival Inglaterra.", skill: "Independência dos EUA" },
  { grade: "8º", discipline: "História", type: "multiple", text: "Quem foi o principal autor da Declaração de Independência dos EUA?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Barack Obama"], answer: "Thomas Jefferson", explanation: "Jefferson foi o redator principal do texto.", skill: "Independência dos EUA" },
  { grade: "8º", discipline: "História", type: "multiple", text: "O modelo de governo adotado após a independência dos EUA foi a:", options: ["Monarquia Absoluta", "Ditadura Militar", "República Federativa Presidencialista", "Teocracia"], answer: "República Federativa Presidencialista", explanation: "Baseada na divisão de três poderes.", skill: "Independência dos EUA" },
  { grade: "8º", discipline: "História", type: "multiple", text: "As ideias que fundamentaram a Independência dos EUA vieram do movimento europeu chamado:", options: ["Renascimento", "Iluminismo", "Positivismo", "Modernismo"], answer: "Iluminismo", explanation: "Foco na liberdade individual e razão.", skill: "Independência dos EUA" },

  // --- GEOGRAFIA (9º) - Globalização e Blocos Econômicos (6 questions) ---
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O que é Globalização?", options: ["O isolamento total dos países", "O processo de integração econômica, social e cultural mundial", "A criação de novos continentes", "O fim da internet"], answer: "O processo de integração econômica, social e cultural mundial", explanation: "Facilitado pelo avanço dos transportes e comunicações.", skill: "Globalização e Blocos Econômicos" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "A União Europeia (UE) é um exemplo de:", options: ["Agência de turismo", "Bloco Econômico e Político", "Equipe de futebol", "Religião mundial"], answer: "Bloco Econômico e Político", explanation: "O mais avançado estágio de integração entre países.", skill: "Globalização e Blocos Econômicos" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O bloco econômico formado por Brasil, Argentina, Uruguai e Paraguai chama-se:", options: ["NAFTA", "União Africana", "Mercosul", "Apec"], answer: "Mercosul", explanation: "Mercado Comum do Sul.", skill: "Globalização e Blocos Econômicos" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual a principal moeda utilizada no bloco da União Europeia?", options: ["Dólar", "Libra", "Euro", "Real"], answer: "Euro", explanation: "Moeda única adotada pela maioria dos países do bloco.", skill: "Globalização e Blocos Econômicos" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Uma das desvantagens da globalização para países em desenvolvimento pode ser:", options: ["Aumento da conexão mundial", "Aprofundamento da desigualdade social e perda de indústrias locais", "Melhoria dos transportes", "Acesso a novos filmes"], answer: "Aprofundamento da desigualdade social e perda de indústrias locais", explanation: "A competição desigual afeta economias menores.", skill: "Globalização e Blocos Econômicos" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O grupo de países emergentes formado por Brasil, Rússia, Índia, China e África do Sul é o:", options: ["G7", "Onu", "Brics", "Otan"], answer: "Brics", explanation: "Associação que busca maior peso na governança global.", skill: "Globalização e Blocos Econômicos" }
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
console.log(`Sucesso! Sprint de Refinamento 4 concluído com ${batch.length} questões direcionadas.`);
