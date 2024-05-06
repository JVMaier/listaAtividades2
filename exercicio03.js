/*
    3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
    Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    R$ 0.45 para viagens mais longas.
*/

const prompt = require("prompt-sync")();

function ticketPrices() {
  let distanceToTravel = parseFloat(
    prompt("Qual distância deseja percorrer em Km: ")
  );

  let ticketPrice;

  if (distanceToTravel <= 200) {
    ticketPrice = distanceToTravel * 0.5;
  } else {
    ticketPrice = distanceToTravel * 0.45;
  }

  console.log(
    `Você quer percorrer uma distância de ${distanceToTravel}Km. O preço da sua passagem será de R$ ${ticketPrice.toFixed(2)}.`
  );
}

ticketPrices();
