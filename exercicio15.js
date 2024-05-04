/*
    15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    final, mostre quais são os números pares que foram digitados e em que posições eles
    estão armazenados.
*/

const prompt = require("prompt-sync")();

function read10Numbers() {
  const vector = [];

  for (let i = 0; i < 10; i++) {
    const userInput = parseInt(prompt(`Digite o ${i + 1}º número: `));
    vector.push(userInput);
  }

  const evenNumbers = [];
  const positions = [];

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 === 0) {
      evenNumbers.push(vector[i]);
      positions.push(i);
    }
  }

  console.log("Números pares digitados e suas posições:");
  for (let i = 0; i < evenNumbers.length; i++) {
    console.log(`Número ${evenNumbers[i]} na posição ${positions[i]}`);
  }
}

read10Numbers();
