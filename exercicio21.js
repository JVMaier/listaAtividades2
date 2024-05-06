/*
    21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
    retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
    = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const prompt = require("prompt-sync")();

const height = parseFloat(prompt("Digite sua altura no formato (M.CC): "));
const sex = prompt("Digite o seu sexo (M) para mulher e (H) para homem: ").toUpperCase();

function idealWeight(height, sex) {
  let calculatedWeight = 0;
  if (sex === "M") {
    calculatedWeight = 62.1 * height - 44.7;
  } else if (sex === "H") {
    calculatedWeight = 72.7 * height - 58;
  } else {
    console.log("Valor invalido!");
  }
  console.log(`Seu peso ideal seria ${calculatedWeight.toFixed(2)}Kg`);
}

idealWeight(height, sex);
