/*
    36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
    um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
    do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
    número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
    o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
    mensagem "Parabéns, tu foi o GANHADOR".
*/

function generateRandomResponses() {
  const maxValue = 100;
  const responses = new Set();
  while (responses.size < 13) {
    responses.add(Math.floor(Math.random() * maxValue));
  }
  const sortedResponses = Array.from(responses).sort((a, b) => a - b);
  return sortedResponses;
}

function checkAccuracies(template, answers) {
  let hits = 0;
  for (let i = 0; i < template.length; i++) {
    if (template[i] === answers[i]) {
      hits++;
    }
  }
  return hits;
}

const templateFixed = generateRandomResponses();
console.log("Gabarito:");
console.log(templateFixed);

for (let bettors = 1; bettors <= 100; bettors++) {
  const answers = generateRandomResponses();

  const numHits = checkAccuracies(templateFixed, answers);

  console.log(`Apostador ${bettors}:`);
  console.log(`Número de acertos do Apostador ${bettors}: ${numHits}`);

  if (numHits === 13) {
    console.log("Parabéns, você foi o GANHADOR!");
  }
}

// Teste verificador de Ganhador
/*
    const templateFixed2 = [9, 29, 32, 40, 43, 44, 45, 63, 67, 70, 72, 89, 94];

    const answers2 = [9, 29, 32, 40, 43, 44, 45, 63, 67, 70, 72, 89, 94];

    const numHits2 = checkAccuracies(templateFixed2, answers2);

    console.log(`Apostador x:`);
    console.log(`Número de acertos do Apostador x: ${numHits2}`);

    if (numHits2 === 13) {
    console.log("Parabéns, você foi o GANHADOR!");
    }
*/
