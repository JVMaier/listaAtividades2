/*
    26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
    P[1..3,1..5].
*/

function generateArrayRandomA() {
  const rows = 3;
  const cols = 5;
  const maxValue = 100;
  const A = [];
  for (let i = 0; i < rows; i++) {
    A.push([]);
    for (let j = 0; j < cols; j++) {
      A[i][j] = Math.floor(Math.random() * maxValue);
    }
  }
  return A;
}

function generateArrayRandomB() {
  const rows = 5;
  const cols = 3;
  const maxValue = 100;
  const B = [];
  for (let i = 0; i < rows; i++) {
    B.push([]);
    for (let j = 0; j < cols; j++) {
      B[i][j] = Math.floor(Math.random() * maxValue);
    }
  }
  return B;
}

const matricesA = generateArrayRandomA();
const matricesB = generateArrayRandomB();
console.log("Matrizes geradas: ");
console.log(matricesA);
console.log("----------------------");
console.log(matricesB);

function productMatrices(matricesA, matricesB) {
  const rowsA = matricesA.length;
  const colsA = matricesA[0].length;
  const colsB = matricesB[0].length;

  const P = [];

  for (let i = 0; i < rowsA; i++) {
    P.push([]);
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matricesA[i][k] * matricesB[k][j];
      }
      P[i][j] = sum;
    }
  }

  return P;
}

const product = productMatrices(matricesA, matricesB);
console.log("----------------------");
console.log("O produto das matrizes: ");
console.log(product);
