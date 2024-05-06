/*
    31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
    Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
    todos os elementos de V diferentes de A. Mostre os resultados.
*/
const prompt = require("prompt-sync")();

let valueA;

function generateArrayRandom() {
  const rows = 30;
  const cols = 30;
  const maxValue = 100;
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = Math.floor(Math.random() * maxValue);
    }
  }
  return matrix;
}

const V = generateArrayRandom();
console.log("Matriz gerada: ");
console.log(V);

function matrizX(V) {
  const X = [];
  let count = 0;

  valueA = parseInt(prompt("Digite o valor para procurar na matriz: "));

  for (let i = 0; i < V.length; i++) {
    for (let j = 0; j < V[i].length; j++) {
      if (V[i][j] === valueA) {
        count++;
      } else {
        X.push(V[i][j]);
      }
    }
  }
  console.log(`Quantidade de valores iguais a ${valueA} na matriz: ${count}`);
  console.log("Matriz X (sem os valores iguais a A): ");
  console.log(X);
}

matrizX(V);
