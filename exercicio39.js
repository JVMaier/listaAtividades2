/*
    39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
    vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

function generateVectorRandom() {
  const size = 100;
  let vectorA = [];
  for (let i = 0; i < size; i++) {
    vectorA.push(Math.floor(Math.random() * 21) - 10);
  }
  return vectorA;
}

const A = generateVectorRandom();

function compressVector(A) {
  let vectorB = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      vectorB.push(A[i]);
    }
  }
  return vectorB;
}

console.log("Vetor A gerado: ");
console.log(A);

const B = compressVector(A);
console.log("Vetor B (compactado):");
console.log(B);
