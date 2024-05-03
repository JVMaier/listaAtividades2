/* 
    1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    vida um fumante perderá e exiba o total em dias.
*/

const prompt = require("prompt-sync")();

function calculateLifeReduction() {
  let dailyCigarettes = parseInt(
    prompt("Quantos cigarros você fuma por dia: ")
  );

  let yearsSmoking = parseInt(prompt("Quantos anos você já fumou: "));

  const totalCigarettes = dailyCigarettes * 365 * yearsSmoking;

  const lifeReductionMin = totalCigarettes * 10;

  const lifeReductionDays = lifeReductionMin / 1440;

  console.log(
    `Você perderá aproximadamente ${lifeReductionDays.toFixed(2)} dias de vida.`
  );
}
calculateLifeReduction();
