/*
    27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
    multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    um vetor V(36). Escrever o vetor V no final.
*/

const prompt = require("prompt-sync")();

let valorA;

function gerarMatrizAleatoria() {
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

const matriz = gerarMatrizAleatoria();
console.log("Matriz gerada: ");
console.log(matriz);

function multValor(matriz) {
  const V = [];

  valorA = parseInt(prompt("Digite o valor para multiplicar a matriz: "));

  for (let i = 0; i < matriz.length; i++) {
    V.push([]);
    for (let j = 0; j < matriz[i].length; j++) {
      V[i][j] = matriz[i][j] * valorA;
    }
  }

  return V;
}

const produto = multValor(matriz);
// console.log(produto);

function matrizToVetor(produto) {
  const vetor = [];

  for (let i = 0; i < produto.length; i++) {
    for (let j = 0; j < produto[i].length; j++) {
      vetor.push(produto[i][j]);
    }
  }

  return vetor;
}

const produt = matrizToVetor(produto);
console.log("----------------------");
console.log(`Matriz multiplicada por ${valorA} e transformada em Vetor`);
console.log(produt);
