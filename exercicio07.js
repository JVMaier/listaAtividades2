/*
    7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
    carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
    cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
    (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
    mostre o preço a ser pago de acordo com os dados a seguir:
    Carros populares
    - Até 100 Km percorridos: R$ 0,20 por Km
    - Acima de 100 Km percorridos: R$ 0,10 por Km
    Carros de luxo
    - Até 200 Km percorridos: R$ 0,30 por Km
    - Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require("prompt-sync")();

console.log("Coloque a insformações para fazer o calculo do aluguel do carro:");
const carType = prompt(
  "Qual o tipo do carro (POPULAR ou LUXO): "
).toUpperCase();
const carDays = parseInt(prompt("Quantos dias de aluguel: "));
const carKm = parseFloat(prompt("Quantos Km foram percorridos: "));

function rentalPrice(carType, carDays, carKm) {
  let priceDay = 0;
  let priceKm = 0;
  let priceCalculate = 0;

  if (carType === "POPULAR") {
    priceDay = 90;
    if (carKm <= 100) {
      priceKm = 0.2;
    } else {
      priceKm = 0.1;
    }
    priceCalculate = priceDay * carDays + priceKm * carKm;

    console.log(`Você deverá pagar ${priceCalculate.toFixed(2)} Reais `);
  } else if (carType === "LUXO") {
    priceDay = 150;
    priceKm = carKm <= 200 ? 0.3 : 0.25;
    priceCalculate = priceDay * carDays + priceKm * carKm;

    console.log(`Você deverá pagar ${priceCalculate.toFixed(2)} Reais `);
  } else {
    console.log("Tipo de carro inválido");
  }
}

rentalPrice(carType, carDays, carKm);
