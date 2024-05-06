/*
    30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
    contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
    e os vetores criados.
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

function sumColuns(M) {
  let SC = new Array(M[0].length).fill(0);

  for (let j = 0; j < M[0].length; j++) {
    for (let i = 0; i < M.length; i++) {
      SC[j] += M[i][j];
    }
  }
  return SC;
}

function sumLinhas(M) {
  let SL = new Array(M[0].length).fill(0);

  for (let j = 0; j < M[0].length; j++) {
    for (let i = 0; i < M.length; i++) {
      SL[j] += M[j][i];
    }
  }
  return SL;
}

const linesSum = sumLinhas(M);
console.log("Soma das linhas: ");
console.log(linesSum);

const columSum = sumColuns(M);
console.log("Soma das colunas: ");
console.log(columSum);
