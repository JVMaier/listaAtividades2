/*
    29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    a) da linha 4 de M;
    b) da coluna 2 de M;
    c) da diagonal principal;
    d) todos os elementos da matriz M.
    Escrever essas somas e a matriz.
*/

function generateArrayRandom() {
  const rows = 5;
  const cols = 5;
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

const M = generateArrayRandom();
console.log("Matriz gerada: ");
console.log(M);

function sumLine4(M) {
  let sumLine = 0;
  for (let j = 0; j < M[4].length; j++) {
    sumLine += M[4][j];
  }
  return sumLine;
}

function sumColun2(M) {
  let sumColun = 0;
  for (let i = 0; i < M.length; i++) {
    sumColun += M[i][1];
  }
  return sumColun;
}

function sumMainDiagonal(M) {
  let sumDiag = 0;
  for (let i = 0; i < M.length; i++) {
    sumDiag += M[i][i];
  }
  return sumDiag;
}

function sumAllElements(M) {
  let sumAll = 0;
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      sumAll += M[i][j];
    }
  }
  return sumAll;
}

console.log("Resultados:")
console.log("Soma da linha 4:", sumLine4(M));
console.log("Soma da coluna 2:", sumColun2(M));
console.log("Soma da diagonal principal:", sumMainDiagonal(M));
console.log("Soma de todos os elementos:", sumAllElements(M));
