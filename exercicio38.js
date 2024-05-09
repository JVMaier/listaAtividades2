/*
    38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
    variável identificadora que calcule a operação conforme a informação contida nesta
    variável:
        1- soma dos elementos;
        2- produto dos elementos;
        3- média dos elementos;
        4- ordene os elementos em ordem crescente;
        5- mostre o vetor.
*/

const prompt = require("prompt-sync")();

function readVector() {
  const vector = [];
  for (let i = 0; i < 6; i++) {
    vector.push(parseInt(prompt(`Digite o valor para a posição ${i + 1}: `)));
  }
  return vector;
}

const createVector = readVector();

function calculateSum(vector) {
  let sumAll = 0;
  for (let i = 0; i < vector.length; i++) {
    sumAll += vector[i];
  }
  return sumAll;
}

function calculateProduct(vector) {
  let product = 1;
  for (let i = 0; i < vector.length; i++) {
    product *= vector[i];
  }
  return product;
}

function calcularMedia(vector) {
  const sum = calculateSum(vector);
  return sum / vector.length;
}

function ordenarCrescente(vector) {
  return vector.slice().sort((a, b) => a - b);
}

console.log("-------------------");
console.log(
  "Escolha uma operação:\n1 - Soma dos elementos\n2 - Produto dos elementos\n3 - Média dos elementos\n4 - Ordene os elementos em ordem crescente\n5 - Mostrar o vetor\n "
);
const operation = parseInt(prompt("Digite o numero: "));

switch (operation) {
  case 1:
    console.log("Soma dos elementos:", calculateSum(createVector));
    break;
  case 2:
    console.log("Produto dos elementos:", calculateProduct(createVector));
    break;
  case 3:
    console.log("Média dos elementos:", calcularMedia(createVector));
    break;
  case 4:
    console.log(
      "Vetor ordenado em ordem crescente:",
      ordenarCrescente(createVector)
    );
    break;
  case 5:
    console.log("Vetor:", createVector);
    break;
  default:
    console.log("Operação inválida.");
}
