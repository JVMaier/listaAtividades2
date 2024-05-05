/*
    25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
    de cada coluna separadamente.
*/

function gerarMatrizAleatoria() {
  const rows = 15;
  const cols = 20;
  const maxValue = 100;
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < cols; j++) {
      // Gera um valor aleatório entre 0 e o maxValue, inclusive
      matrix[i][j] = Math.floor(Math.random() * maxValue);
    }
  }
  return matrix;
}

// Exemplo de utilização:
// Valor máximo dos elementos

const matriz = gerarMatrizAleatoria();
console.log("Matriz aleatória:");
console.log(matriz);
