import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 6400;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Sprint 33: Injeção de 90 questões de Matemática a partir do ID: ${startId}`);

const batch = [
  // 8º Matemática - Teorema de Pitágoras (10)
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O Teorema de Pitágoras afirma que, em um triângulo retângulo:", options: ["O quadrado da hipotenusa é igual à soma dos quadrados dos catetos", "A soma dos lados é igual a 180", "O maior lado é a média dos outros dois", "A área é o dobro da base"], answer: "O quadrado da hipotenusa é igual à soma dos quadrados dos catetos", explanation: "Representado pela fórmula a² = b² + c².", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Em um triângulo retângulo com catetos de 3 cm e 4 cm, qual o valor da hipotenusa?", options: ["5 cm", "7 cm", "12 cm", "25 cm"], answer: "5 cm", explanation: "3² + 4² = 9 + 16 = 25. √25 = 5.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual o nome do lado oposto ao ângulo reto no triângulo retângulo?", options: ["Hipotenusa", "Cateto Adjacente", "Cateto Oposto", "Bissetriz"], answer: "Hipotenusa", explanation: "É sempre o maior lado do triângulo retângulo.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um triângulo possui lados medindo 6, 8 e 10. Ele é um triângulo retângulo?", options: ["Sim, pois 6² + 8² = 10²", "Não, os lados são todos diferentes", "Apenas se tiver um ângulo de 45°", "Sim, pois a soma é 24"], answer: "Sim, pois 6² + 8² = 10²", explanation: "Obedece ao teorema: 36 + 64 = 100.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Se a hipotenusa de um triângulo é 13 e um dos catetos é 5, qual o valor do outro cateto?", options: ["12", "8", "18", "10"], answer: "12", explanation: "13² - 5² = 169 - 25 = 144. √144 = 12.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a diagonal de um quadrado de lado 1? (Dica: utilize Pitágoras)", options: ["√2", "2", "1", "1,5"], answer: "√2", explanation: "1² + 1² = d². d² = 2. d = √2.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O Teorema de Pitágoras só pode ser aplicado em triângulos:", options: ["Retângulos", "Equiláteros", "Isósceles", "Escalenos"], answer: "Retângulos", explanation: "Necessita obrigatoriamente de um ângulo de 90°.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um terno pitagórico é um conjunto de três números inteiros que satisfazem o teorema. Qual destes é um?", options: ["(5, 12, 13)", "(1, 2, 3)", "(10, 11, 12)", "(4, 5, 6)"], answer: "(5, 12, 13)", explanation: "25 + 144 = 169.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Quem foi Pitágoras?", options: ["Um matemático e filósofo da Grécia Antiga", "Um navegador português", "O inventor do computador", "Um imperador romano"], answer: "Um matemático e filósofo da Grécia Antiga", explanation: "Famoso por suas contribuições à geometria e aritmética.", skill: "Teorema de Pitágoras" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a altura de um triângulo equilátero de lado 2? (Dica: Pitágoras no triângulo retângulo interno)", options: ["√3", "1", "2", "√2"], answer: "√3", explanation: "h² + 1² = 2². h² = 3. h = √3.", skill: "Teorema de Pitágoras" },

  // 7º Matemática - Regra de Três (9)
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se 3 cadernos custam R$ 15,00, quanto custarão 7 cadernos do mesmo tipo?", options: ["R$ 35,00", "R$ 30,00", "R$ 45,00", "R$ 21,00"], answer: "R$ 35,00", explanation: "3/15 = 7/x => 3x = 105 => x = 35.", skill: "Regra de Três" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Um carro percorre 120 km em 2 horas. Em quanto tempo percorrerá 300 km na mesma velocidade?", options: ["5 horas", "4 horas", "6 horas", "3 horas"], answer: "5 horas", explanation: "Proporção direta: 120/2 = 300/x => 120x = 600 => x = 5.", skill: "Regra de Três" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Uma torneira enche um tanque em 6 horas. Três torneiras iguais encherão em:", options: ["2 horas", "18 horas", "12 horas", "3 horas"], answer: "2 horas", explanation: "Proporção inversa: mais torneiras, menos tempo. 6 / 3 = 2.", skill: "Regra de Três" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se 10 operários levam 12 dias para fazer um muro, 15 operários levarão quanto tempo?", options: ["8 dias", "18 dias", "10 dias", "6 dias"], answer: "8 dias", explanation: "Prop. Inversa: 10 * 12 = 15 * x => 120 = 15x => x = 8.", skill: "Regra de Três" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Para saber se a regra de três é inversamente proporcional, verificamos se:", options: ["Ao aumentar uma grandeza, a outra diminui", "As duas aumentam juntas", "Os números são primos", "O resultado é negativo"], answer: "Ao aumentar uma grandeza, a outra diminui", explanation: "Ex: Velocidade vs Tempo.", skill: "Regra de Três" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Uma receita usa 2 ovos para cada 500g de farinha. Para 2kg de farinha, quantos ovos serão necessários?", options: ["8 ovos", "4 ovos", "10 ovos", "6 ovos"], answer: "8 ovos", explanation: "2kg = 2000g. 2/500 = x/2000 => x = 8.", skill: "Regra de Três" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Em um mapa, 1cm representa 50km. Qual a distância real entre duas cidades separadas por 4cm no mapa?", options: ["200 km", "100 km", "150 km", "250 km"], answer: "200 km", explanation: "1/50 = 4/x => x = 200.", skill: "Regra de Três" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se 8 kg de carne alimentam 20 pessoas, quantos kg são necessários para 50 pessoas?", options: ["20 kg", "15 kg", "25 kg", "10 kg"], answer: "20 kg", explanation: "8/20 = x/50 => 20x = 400 => x = 20.", skill: "Regra de Três" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual a primeira etapa para resolver uma Regra de Três?", options: ["Montar a tabela e verificar a proporcionalidade", "Multiplicar logo os números maiores", "Inverter sempre a segunda coluna", "Pedir ajuda ao colega"], answer: "Montar a tabela e verificar a proporcionalidade", explanation: "Fundamental para não errar a lógica do cálculo.", skill: "Regra de Três" },

  // 7º Matemática - Ângulos (9)
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual instrumento é usado para medir ângulos?", options: ["Transferidor", "Compasso", "Régua", "Esquadro"], answer: "Transferidor", explanation: "Possui marcações de 0 a 180 ou 360 graus.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Dois ângulos que somados resultam em 90° são chamados de:", options: ["Complementares", "Suplementares", "Opostos pelo vértice", "Adjacentes"], answer: "Complementares", explanation: "Eles completam o ângulo reto.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto mede um ângulo raso (meia-volta)?", options: ["180°", "90°", "360°", "270°"], answer: "180°", explanation: "Forma uma linha reta.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Um ângulo agudo é aquele cuja medida é:", options: ["Menor que 90°", "Entre 90° e 180°", "Exatamente 90°", "Maior que 180°"], answer: "Menor que 90°", explanation: "É um ângulo 'fechado'.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se dois ângulos são suplementares e um mede 110°, quanto mede o outro?", options: ["70°", "90°", "80°", "110°"], answer: "70°", explanation: "180 - 110 = 70.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O que são ângulos 'Adjacentes'?", options: ["Possuem o mesmo vértice e um lado em comum, sem pontos internos comuns", "Estão um de frente para o outro", "Somam sempre 360 graus", "São ângulos de cores diferentes"], answer: "Possuem o mesmo vértice e um lado em comum, sem pontos internos comuns", explanation: "Ângulos vizinhos.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A bissetriz de um ângulo de 60° o divide em dois ângulos de:", options: ["30°", "60°", "120°", "15°"], answer: "30°", explanation: "Bissetriz divide o ângulo ao meio.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Como se chama o ângulo maior que 90° e menor que 180°?", options: ["Obtuso", "Reto", "Agudo", "Pleno"], answer: "Obtuso", explanation: "É um ângulo 'aberto'.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quantos ângulos retos formam uma volta completa de 360°?", options: ["4", "2", "3", "1"], answer: "4", explanation: "4 * 90 = 360.", skill: "Ângulos" },

  // 6º Matemática - Divisão (9)
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Na divisão 45 / 9 = 5, o número 9 é o:", options: ["Divisor", "Dividendo", "Quociente", "Resto"], answer: "Divisor", explanation: "O número pelo qual dividimos.", skill: "Divisão" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 155 / 5?", options: ["31", "35", "25", "30"], answer: "31", explanation: "155 / 5 = 31.", skill: "Divisão" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Uma divisão é considerada 'Exata' quando:", options: ["O resto é zero", "O quociente é zero", "O divisor é maior que o dividendo", "Os números são pares"], answer: "O resto é zero", explanation: "Não há sobras na operação.", skill: "Divisão" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 0 dividido por qualquer número (diferente de zero)?", options: ["0", "1", "Inexistente", "O próprio número"], answer: "0", explanation: "Se eu tenho nada para dividir, ninguém ganha nada.", skill: "Divisão" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resto da divisão de 23 por 4?", options: ["3", "1", "2", "0"], answer: "3", explanation: "4 * 5 = 20. 23 - 20 = 3.", skill: "Divisão" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Uma caixa tem 48 bombons para 6 crianças. Quantos cada uma recebe?", options: ["8", "6", "7", "9"], answer: "8", explanation: "48 / 6 = 8.", skill: "Divisão" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que acontece ao dividir um número por 1?", options: ["O resultado é o próprio número", "O resultado é 1", "O resultado é 0", "O número fica dobrado"], answer: "O resultado é o próprio número", explanation: "1 é o elemento neutro da divisão.", skill: "Divisão" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Dividir por 0,5 é o mesmo que calcular o:", options: ["Dobro", "Metade", "Quádruplo", "Triplo"], answer: "Dobro", explanation: "Divisão por meio equivale a multiplicação por 2.", skill: "Divisão" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o quociente de 1000 / 8?", options: ["125", "250", "150", "80"], answer: "125", explanation: "1000 / 8 = 125.", skill: "Divisão" },

  // 7º Matemática - Polígonos (9)
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o polígono que possui o menor número de lados?", options: ["Triângulo", "Quadrado", "Círculo", "Ponto"], answer: "Triângulo", explanation: "São necessários no mínimo 3 lados para fechar a figura.", skill: "Polígonos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Um polígono de 6 lados é chamado de:", options: ["Hexágono", "Heptágono", "Pentágono", "Octógono"], answer: "Hexágono", explanation: "Hexa = seis.", skill: "Polígonos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O que são 'Vértices' de um polígono?", options: ["O ponto de encontro de dois lados", "As linhas da figura", "O espaço interno", "As diagonais"], answer: "O ponto de encontro de dois lados", explanation: "São as 'quinas' da figura.", skill: "Polígonos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Um polígono 'Regular' é aquele que tem:", options: ["Todos os lados e ângulos iguais", "Lados retos mas de tamanhos diferentes", "Apenas ângulos de 90°", "Formas arredondadas"], answer: "Todos os lados e ângulos iguais", explanation: "Exemplo: Quadrado.", skill: "Polígonos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Como se chama o polígono de 7 lados?", options: ["Heptágono", "Hexágono", "Eneágono", "Decágono"], answer: "Heptágono", explanation: "Hepta = sete.", skill: "Polígonos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O 'Octógono' possui quantas diagonais que partem de um único vértice?", options: ["5", "8", "4", "3"], answer: "5", explanation: "Fórmula: n - 3. 8 - 3 = 5.", skill: "Polígonos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual a soma dos ângulos internos de um triângulo?", options: ["180°", "360°", "90°", "270°"], answer: "180°", explanation: "Base para o cálculo de outros polígonos.", skill: "Polígonos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Como chamamos um polígono de 4 lados?", options: ["Quadrilátero", "Quadrado", "Cubo", "Trapézio"], answer: "Quadrilátero", explanation: "Família que inclui retângulos, losangos, etc.", skill: "Polígonos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O polígono que possui 10 lados chama-se:", options: ["Decágono", "Dodecágono", "Eneágono", "Octógono"], answer: "Decágono", explanation: "Deca = dez.", skill: "Polígonos" },

  // 8º Matemática - Ângulos (9)
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O que são ângulos 'Opostos pelo Vértice' (OPV)?", options: ["Ângulos formados por duas retas que se cruzam, tendo medidas iguais", "Ângulos que somam 180°", "Ângulos que ficam um do lado do outro", "Ângulos retos"], answer: "Ângulos formados por duas retas que se cruzam, tendo medidas iguais", explanation: "Eles compartilham o mesmo vértice e as retas são suportes.", skill: "Ângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Ângulos 'Alternos Internos' entre paralelas cortadas por uma transversal são:", options: ["Congruentes (iguais)", "Suplementares", "Complementares", "Adjacentes"], answer: "Congruentes (iguais)", explanation: "Estão em lados opostos da transversal mas dentro das paralelas.", skill: "Ângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Sendo duas paralelas cortadas por uma transversal, os ângulos 'Correspondentes' são:", options: ["Iguais", "Diferentes", "Somam 90°", "Somam 360°"], answer: "Iguais", explanation: "Ocupam a mesma posição relativa em cada paralela.", skill: "Ângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Ângulos 'Colaterais Internos' são suplementares, o que significa que somam:", options: ["180°", "90°", "360°", "0°"], answer: "180°", explanation: "Estão do mesmo lado da transversal.", skill: "Ângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a soma dos ângulos internos de um hexágono regular?", options: ["720°", "180°", "360°", "540°"], answer: "720°", explanation: "Fórmula: (n-2)*180. (6-2)*180 = 720.", skill: "Ângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Se um ângulo mede x, seu suplemento mede:", options: ["180 - x", "90 - x", "x + 90", "2x"], answer: "180 - x", explanation: "Definição de ângulos suplementares.", skill: "Ângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O que é um ângulo 'Raso'?", options: ["Ângulo de 180°", "Ângulo de 90°", "Ângulo de 0°", "Ângulo menor que 10°"], answer: "Ângulo de 180°", explanation: "Forma uma reta.", skill: "Ângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Ângulos colaterais externos somam:", options: ["180°", "360°", "90°", "45°"], answer: "180°", explanation: "Mesma regra dos colaterais internos.", skill: "Ângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Na figura de retas paralelas, se um ângulo agudo mede 40°, o ângulo obtuso correspondente medirá:", options: ["140°", "40°", "90°", "100°"], answer: "140°", explanation: "180 - 40 = 140 (suplementares).", skill: "Ângulos" },

  // 8º Matemática - Triângulos (9)
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O 'Incentro' de um triângulo é o ponto de encontro das:", options: ["Bissetrizes", "Medianas", "Alturas", "Mediatrizes"], answer: "Bissetrizes", explanation: "É o centro da circunferência inscrita.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O 'Baricentro' é o ponto de equilíbrio de um triângulo e é o encontro das:", options: ["Medianas", "Alturas", "Diagonais", "Bissetrizes"], answer: "Medianas", explanation: "Divide a mediana na razão 2:1.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O 'Ortocentro' é o ponto de encontro das:", options: ["Alturas", "Mediatrizes", "Bissetrizes", "Lados"], answer: "Alturas", explanation: "Pode ficar dentro, fora ou no vértice do triângulo.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um triângulo que possui um ângulo maior que 90° é chamado de:", options: ["Obtusângulo", "Acutângulo", "Retângulo", "Isósceles apenas"], answer: "Obtusângulo", explanation: "Tem um ângulo obtuso.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A soma de dois lados de um triângulo deve ser sempre:", options: ["Maior que o terceiro lado", "Igual ao terceiro lado", "Menor que o terceiro lado", "O dobro do terceiro lado"], answer: "Maior que o terceiro lado", explanation: "Condição de existência de um triângulo (Desigualdade Triangular).", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual triângulo possui 3 ângulos internos de 60°?", options: ["Equilátero", "Isósceles", "Escaleno", "Retângulo"], answer: "Equilátero", explanation: "Soma 180. 180 / 3 = 60.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O 'Circuncentro' é o centro da circunferência que passa pelos vértices e é o encontro das:", options: ["Mediatrizes", "Medianas", "Bissetrizes", "Alturas"], answer: "Mediatrizes", explanation: "Equidistante dos vértices.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Em um triângulo Isósceles, a altura relativa à base também é:", options: ["Mediana e Bissetriz", "Hipotenusa", "Raio", "Lado maior"], answer: "Mediana e Bissetriz", explanation: "Propriedade de simetria do triângulo isósceles.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Como se chama o lado maior de um triângulo retângulo?", options: ["Hipotenusa", "Cateto", "Base", "Diagonal"], answer: "Hipotenusa", explanation: "Oposto ao ângulo de 90°.", skill: "Triângulos" },

  // 6º Matemática - MMC (9)
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que significa a sigla 'MMC'?", options: ["Mínimo Múltiplo Comum", "Máximo Múltiplo Coletivo", "Multiplicação Mútua Completa", "Menor Medida Comum"], answer: "Mínimo Múltiplo Comum", explanation: "Menor número positivo que é múltiplo de dois ou mais números.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre 4 e 6?", options: ["12", "24", "2", "10"], answer: "12", explanation: "Múltiplos de 4: {4,8,12,16...}. Múltiplos de 6: {6,12,18...}. O menor comum é 12.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre 10 e 20?", options: ["20", "10", "40", "200"], answer: "20", explanation: "Como 20 já é múltiplo de 10, ele é o próprio MMC.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Se dois números são primos (ex: 3 e 5), seu MMC será:", options: ["O produto deles (15)", "1", "A soma deles (8)", "Não existe"], answer: "O produto deles (15)", explanation: "Não possuem fatores comuns.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Para que serve o MMC em frações?", options: ["Para encontrar um denominador comum para somar ou subtrair", "Para multiplicar os numeradores", "Para simplificar a fração", "Para apagar a fração"], answer: "Para encontrar um denominador comum para somar ou subtrair", explanation: "Permite trabalhar com partes do mesmo tamanho.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre 8 e 12?", options: ["24", "48", "4", "20"], answer: "24", explanation: "Múltiplos: 8, 16, 24... e 12, 24... Menor comum: 24.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Eventos que ocorrem em ciclos (ex: ônibus a cada 20 min e outro a cada 30 min) coincidem conforme o:", options: ["MMC", "MDC", "Peso", "Média"], answer: "MMC", explanation: "MMC determina o próximo ponto de encontro dos ciclos.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC de 3, 4 e 6?", options: ["12", "24", "18", "36"], answer: "12", explanation: "Múltiplos comuns: 12, 24... O menor é 12.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O MMC de dois números pares é sempre par?", options: ["Sim", "Não, pode ser ímpar", "Apenas se os números forem primos", "Depende da Lua"], answer: "Sim", explanation: "Múltiplos de pares são sempre pares.", skill: "MMC" },

  // 7º Matemática - Tabuada (9)
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 12 x 8?", options: ["96", "86", "106", "84"], answer: "96", explanation: "8 * 10 = 80. 8 * 2 = 16. 80 + 16 = 96.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 15 x 4?", options: ["60", "45", "75", "50"], answer: "60", explanation: "Cálculo mental comum (quatro moedas de 15).", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 9 x 8?", options: ["72", "64", "81", "73"], answer: "72", explanation: "9 * 8 = 72.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 6 x 11?", options: ["66", "61", "11", "55"], answer: "66", explanation: "Tabuada do 11.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Multiplicar por 0,1 é o mesmo que:", options: ["Dividir por 10", "Multiplicar por 10", "Dividir por 2", "Somar 0,1"], answer: "Dividir por 10", explanation: "0,1 = 1/10.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 13 x 3?", options: ["39", "33", "26", "43"], answer: "39", explanation: "13 * 3 = 39.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 25 x 3?", options: ["75", "100", "50", "125"], answer: "75", explanation: "25 * 3 = 75.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O dobro de 150 é:", options: ["300", "250", "200", "450"], answer: "300", explanation: "150 * 2 = 300.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o quíntuplo de 20?", options: ["100", "80", "120", "50"], answer: "100", explanation: "20 * 5 = 100.", skill: "Tabuada" },

  // 6º Matemática - Números Primos (8)
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que torna um número 'Primo'?", options: ["Ele tem apenas dois divisores: o 1 e ele mesmo", "Ele é um número ímpar", "Ele termina sempre em 1, 3 ou 7", "Ele não pode ser dividido por 2"], answer: "Ele tem apenas dois divisores: o 1 e ele mesmo", explanation: "Definição de primalidade.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual destes números é Primo?", options: ["13", "15", "21", "25"], answer: "13", explanation: "13 só divide por 1 e 13.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O único número par que é Primo é o:", options: ["2", "0", "4", "10"], answer: "2", explanation: "Todos os outros pares são divisíveis por 2.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 1 é considerado um número Primo?", options: ["Não, porque só tem um divisor", "Sim, porque divide todos", "Apenas em sextas-feiras", "Depende do país"], answer: "Não, porque só tem um divisor", explanation: "Primos devem ter exatamente dois divisores distintos.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que é um número 'Composto'?", options: ["Um número que tem mais de dois divisores", "Um número formado por letras", "Um número sempre negativo", "A soma de dois primos"], answer: "Um número que tem mais de dois divisores", explanation: "Pode ser fatorado em primos.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quais são os primeiros cinco números primos?", options: ["2, 3, 5, 7, 11", "1, 2, 3, 4, 5", "3, 5, 7, 9, 11", "2, 4, 6, 8, 10"], answer: "2, 3, 5, 7, 11", explanation: "Sequência inicial correta.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 51 é Primo?", options: ["Não, ele é divisível por 3 (17x3)", "Sim, termina em 1", "Não, ele é par", "Sim, é maior que 50"], answer: "Não, ele é divisível por 3 (17x3)", explanation: "Soma dos algarismos: 5+1=6 (divisível por 3).", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O processo de decompor um número em fatores primos chama-se:", options: ["Fatoração", "Radiciação", "Adição", "Potenciação"], answer: "Fatoração", explanation: "Escrever o número como produto de primos.", skill: "Números Primos" }
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
console.log(`Sucesso! Sprint 33 com ${batch.length} questões de Matemática adicionado.`);
