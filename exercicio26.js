/*
    26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
    P[1..3,1..5].
*/

function gerarMatrizAleatoria() {
  const rows = 3;
  const cols = 5;
  const maxValue = 100;
  const A = [];
  const B = [];
  for (let i = 0; i < rows; i++) {
    A.push([]);
    B.push([]);
    for (let j = 0; j < cols; j++) {
      A[i][j] = Math.floor(Math.random() * maxValue);
      B[i][j] = Math.floor(Math.random() * maxValue);
    }
  }
  return { A, B };
}

const matrizes = gerarMatrizAleatoria();
const matrizA = matrizes.A;
const matrizB = matrizes.B;
console.log("Matrizes geradas: ");
console.log(matrizA);
console.log("----------------------");
console.log(matrizB);

function produtoMatrizes(matrizA, matrizB) {
  const P = [];

  for (let i = 0; i < matrizA.length; i++) {
    P.push([]);
    for (let j = 0; j < matrizA[i].length; j++) {
      P[i][j] = matrizA[i][j] * matrizB[i][j];
    }
  }

  return P;
}

const produto = produtoMatrizes(matrizA, matrizB);
console.log("----------------------");
console.log("As matrizes multiplicadas: ");
console.log(produto);
