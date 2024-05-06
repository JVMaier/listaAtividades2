/*
    33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
    elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

function generateArrayRandom() {
  const rows = 3;
  const cols = 3;
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

function MultplieDiag(M) {
  const elementsMainDiagonal = [];
  const elementsSecondaryDiagonal = [];
  let counter = 0
  let sumNumDiag = 0

  for (let i = 0; i < M.length; i++) {
    elementsMainDiagonal.push(M[i][i]);
  }

  for (let i = 0; i < M.length; i++) {
    elementsSecondaryDiagonal.push(M[i][M.length - i - 1]);
    counter ++
    sumNumDiag += M[i][M.length - i - 1]
  }

  let averageSecDiag = sumNumDiag/counter 

  const multipliedMainDiagonal = [];

  for (let i = 0; i < elementsMainDiagonal.length; i++) {
    multipliedMainDiagonal.push((elementsMainDiagonal[i]*averageSecDiag).toFixed(2))
  }
  console.log("Elementos da diagonal principal com a média dos elementos da diagonal secundária:")
  console.log(multipliedMainDiagonal)
}

MultplieDiag(M);
