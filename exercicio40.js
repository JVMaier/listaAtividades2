/*
    40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
    resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
    cada), representando as apostas feitas. Compare os números das apostas com o
    resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
    corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
    e quadras, apenas por quinas.)
*/

const prompt = require("prompt-sync")();

console.log(
  " - Digite os resultados em ordem crescente (Entre o numero 1 e o 25) - "
);

function readVector() {
  const vector = [];
  for (let i = 0; i < 5; i++) {
    vector.push(parseInt(prompt(`Digite o número ${i + 1}º: `)));
  }
  return vector;
}

const resultOfficial = readVector();
console.log("-------------------");
console.log("Os 5 numeros sorteados: ");
console.log(resultOfficial);

function generateBetsRandom() {
  const maxValue = 25;
  const bets = [];
  for (let i = 0; i < 50; i++) {
    const responses = new Set();
    while (responses.size < 5) {
      responses.add(Math.floor(Math.random() * maxValue) + 1);
    }
    const sortedResponses = Array.from(responses).sort((a, b) => a - b);
    bets.push(sortedResponses);
  }
  return bets;
}

const bets = generateBetsRandom();

function checkBetting(resultOfficial, bets) {
  let ganhadores = 0;
  for (let i = 0; i < bets.length; i++) {
    let acertos = 0;
    for (let j = 0; j < 5; j++) {
      if (resultOfficial.includes(bets[i][j])) {
        acertos++;
      }
    }
    console.log("-------------------");
    console.log(`Apostador ${i + 1}`);
    console.log("   Números:", bets[i]);
    console.log("   Acertos:", acertos);
    if (acertos === 5) {
      console.log("   Ganhador!");
      ganhadores++;
    }
  }
  console.log("-------------------");
  console.log(`Total de ganhadores: ${ganhadores}`);
}

checkBetting(resultOfficial, bets);