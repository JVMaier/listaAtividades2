/*
    24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    quantidade de elementos negativos da linha correspondente de M.
*/

function createIdentityMatrix() {
  const M = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ];
  const C = [];

  for (let i = 0; i < M.length; i++) {
    let countNegative = 0;

    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] < 0) {
        countNegative++;
      }
    }

    C.push(countNegative);
  }
  

  console.log(C);
}

createIdentityMatrix();
