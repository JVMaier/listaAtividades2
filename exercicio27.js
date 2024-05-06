/*
    27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
    multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    um vetor V(36). Escrever o vetor V no final.
*/

const prompt = require("prompt-sync")();

let valueA;

function generateArrayRandom() {
  const rows = 6;
  const cols = 6;
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

const matriz = generateArrayRandom();
console.log("Matriz gerada: ");
console.log(matriz);

function multValue(matriz) {
  const V = [];

  valueA = parseInt(prompt("Digite o valor para multiplicar a matriz: "));

  for (let i = 0; i < matriz.length; i++) {
    V.push([]);
    for (let j = 0; j < matriz[i].length; j++) {
      V[i][j] = matriz[i][j] * valueA;
    }
  }

  return V;
}

const product = multValue(matriz);
// console.log(produto);

function matrizToVetor(product) {
  const vector = [];

  for (let i = 0; i < product.length; i++) {
    for (let j = 0; j < product[i].length; j++) {
      vector.push(product[i][j]);
    }
  }

  return vector;
}

const produt = matrizToVetor(product);
console.log("----------------------");
console.log(`Matriz multiplicada por ${valueA} e transformada em Vetor`);
console.log(produt);
