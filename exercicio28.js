/*
    28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
    item:
    a) a soma dos elementos acima da diagonal principal;
    b) a soma dos elementos abaixo da diagonal principal;
*/

function generateArrayRandom() {
  const rows = 10;
  const cols = 10;
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

function sumDiagonalUp(matriz) {
  let sumUp = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (j > i) {
        sumUp += matriz[i][j];
      }
    }
  }

  return sumUp;
}

function sumDiagonalLow(matriz) {
  let sumLow = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i > j) {
        sumLow += matriz[i][j];
      }
    }
  }

  return sumLow;
}

const sumAboveDiagonal = sumDiagonalUp(matriz);
console.log(
  "Soma dos elementos acima da diagonal principal: ",
  sumAboveDiagonal
);

const sumBelowDiagonal = sumDiagonalLow(matriz);
console.log(
  "Soma dos elementos abaixo da diagonal principal: ",
  sumBelowDiagonal
);
