/*
    29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    a) da linha 4 de M;
    b) da coluna 2 de M;
    c) da diagonal principal;
    d) todos os elementos da matriz M.
    Escrever essas somas e a matriz.
*/

function gerarMatrizAleatoria() {
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

const matriz = gerarMatrizAleatoria();
console.log("Matriz gerada: ");
console.log(matriz);

function somaLinha4(matriz) {
  let somaLine = 0;
  for (let j = 0; j < matriz[4].length; j++) {
    somaLine += matriz[4][j];
  }
  return somaLine;
}

function somaColuna2(matriz) {
  let somaColun = 0;
  for (let i = 0; i < matriz.length; i++) {
    somaColun += matriz[i][1];
  }
  return somaColun;
}

function somaDiagonalPrincipal(matriz) {
  let somaDig = 0;
  for (let i = 0; i < matriz.length; i++) {
    somaDig += matriz[i][i];
  }
  return somaDig;
}

function somaTodosElementos(matriz) {
  let somaAll = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      somaAll += matriz[i][j];
    }
  }
  return somaAll;
}

console.log("Soma da linha 4:", somaLinha4(matriz));
console.log("Soma da coluna 2:", somaColuna2(matriz));
console.log("Soma da diagonal principal:", somaDiagonalPrincipal(matriz));
console.log("Soma de todos os elementos:", somaTodosElementos(matriz));
