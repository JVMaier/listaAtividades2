/*
    25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
    de cada coluna separadamente.
*/

function generateArrayRandom() {
  const rows = 15;
  const cols = 20;
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

function sumColuns(matriz) {
  let sumColun = new Array(matriz[0].length).fill(0);

  for (let j = 0; j < matriz[0].length; j++) {
    for (let i = 0; i < matriz.length; i++) {
      sumColun[j] += matriz[i][j];
    }
  }

  return sumColun;
}

const colunsSum = sumColuns(matriz);
console.log("A soma de cada uma das colunas: ")
console.log(colunsSum);
