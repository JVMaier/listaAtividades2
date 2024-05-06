/*
    34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
    cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
    multiplicações.
*/

function generateArrayRandom() {
  const rows = 50;
  const cols = 50;
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

function multValue(matriz) {
  const resultMatrix = [];

  const elementsMainDiagonal = [];

  for (let i = 0; i < matriz.length; i++) {
    elementsMainDiagonal.push(matriz[i][i]);
  }

  for (let i = 0; i < matriz.length; i++) {
    const row = [];
    for (let j = 0; j < matriz[i].length; j++) {
      row.push(matriz[i][j] * elementsMainDiagonal[i]);
    }
    resultMatrix.push(row)
  }

  return resultMatrix;
}

const product = multValue(matriz);
console.log(product);
