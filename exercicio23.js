/*
    23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
    diagonal principal são iguais a 1 e os demais são nulos.
*/

function createIdentityMatrix() {
  const matrix = [];
  const size = 7;
  for (let i = 0; i < size; i++) {
    matrix.push([]);
    for (let j = 0; j < size; j++) {
      matrix[i][j] = i === j ? 1 : 0;
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
}

createIdentityMatrix();
