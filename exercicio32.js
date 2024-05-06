/*
    32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
    cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
    matriz lida e a modificada.
*/

function generateArrayRandom() {
  const rows = 12;
  const cols = 13;
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

function matizChange(M) {
  const bigElements = [];
  let bigerElement = 0;
  let elementRead = 0;

  for (let i = 0; i < M.length; i++) {
    bigerElement = Math.abs(M[i][0]);
    for (let j = 1; j < M[0].length; j++) {
      elementRead = Math.abs(M[i][j]);
      if (elementRead > bigerElement) {
        bigerElement = elementRead;
      }
    }
    bigElements.push(bigerElement);
  }

  for (let i = 0; i < M.length; i++) {
    const divider = bigElements[i];
    for (let j = 0; j < M[0].length; j++) {
      const result = (M[i][j] / divider).toFixed(3);
      M[i][j] = parseFloat(result);
    }
  }

  return M;
}
console.log("Maiores elementos de cada linha:");
console.log(matizChange(M));
