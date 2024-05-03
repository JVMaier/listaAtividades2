/*
    10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
    cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
    a) O somatório entre todos os valores;
    b) Qual foi o menor valor digitado;
    c) A média entre todos os valores;
    d) Quantos valores são pares.
*/
const prompt = require("prompt-sync")();

function calculateStatistics() {
  let totalSum = 0;
  let lowerValue;
  let allEvens = 0;
  let average = 0;
  let numbersCounter = 0;

  do {
    const showNumber = parseInt(prompt("Digite um numero: "));
    if (isNaN(showNumber) || typeof showNumber !== "number") {
      console.error("Invalid input. Please enter a valid number.");
      continue;
    }

    totalSum += showNumber;

    if (lowerValue === undefined || showNumber < lowerValue) {
      lowerValue = showNumber;
    }

    if (showNumber % 2 === 0) {
      allEvens++;
    }

    numbersCounter++;

    const continueCalculate = prompt("Deseja continuar? (S/N): ").toUpperCase();

    if (continueCalculate !== 'S' && continueCalculate !== 'N') {
        console.error("Entrada inválida. Por favor, responda com 'S' para sim ou 'N' para não.");
        continue;
      }
  
      if (continueCalculate === 'N') {
        break;
      }

    average = totalSum / numbersCounter;
  } while (true);

  console.log(`A soma de todos os numero digitados ${totalSum}`);
  console.log(`O menor numero digitado foi ${lowerValue}`);
  console.log(`A média de todos os valore é ${average}`);
  console.log(`Tiver ${allEvens} numeros pares`);
}

calculateStatistics();
