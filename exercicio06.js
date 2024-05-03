/*
    6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    tentar descobrir qual foi o valor sorteado.
*/

const prompt = require("prompt-sync")();

function luckNumbers() {
  const luckNumber = [1, 2, 3, 4, 5];
  const bot = luckNumber[Math.floor(Math.random() * luckNumber.length)];
  let userGuess = parseInt(prompt("Tente descobrir o numero entre 1 e 5:"));

  while (userGuess !== bot) {
    if (userGuess > bot) {
      userGuess = parseInt(prompt("Muito alto, tente de novo:"));
    } else {
      userGuess = parseInt(prompt("Muito baixo, tente de novo:"));
    }
  }

  console.log(`Parabéns, você acertou o numero era o numero ${bot}.`);
}

luckNumbers();
