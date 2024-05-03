/*
    8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
    podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
    sistema funciona assim:
    - até 10 h de atividade no mês: ganha 2 pontos por hora
    - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
    - acima de 20 h de atividade no mês: ganha 10 pontos por hora
    - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
    Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
    Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/
// Forma 1
// const prompt = require("prompt-sync")();

// console.log("Programa de Pontos e Dinheiro por Atividades Físicas");
// const activityHours = parseFloat(
//   prompt("Quantas horas de atividade física foram realizadas este mês? ")
// );

// function calcularPontosEValor(activityHours) {
//   let points = 0;
//   let moneyEarned = 0;

//   if (activityHours <= 10) {
//     points = activityHours * 2;
//   } else if (activityHours <= 20) {
//     points = activityHours * 5;
//   } else {
//     points = activityHours * 10;
//   }

//   moneyEarned = points * 0.05;

//   return [points, moneyEarned];
// }

// const [points, moneyEarned] = calcularPontosEValor(activityHours);
// console.log(`Você ganhou ${points} pontos este mês.`);
// console.log(`E faturou R$ ${moneyEarned.toFixed(2)} este mês.`);

const prompt = require("prompt-sync")();

console.log("Programa de Pontos e Dinheiro por Atividades Físicas");

const ACTIVITY_HOUR_THRESHOLDS = [10, 20];
const POINTS_PER_HOUR = [2, 5, 10];
const MONEY_PER_POINT = 0.05;

const activityHours = parseFloat(prompt("Quantas horas de atividade física foram realizadas este mês? "));

if (isNaN(activityHours) || activityHours < 0) {
  console.error("Valor invalido!");
  process.exit(1);
}

function calculatePointsAndEarnings(activityHours) {
  let points = 0;

  if (activityHours <= ACTIVITY_HOUR_THRESHOLDS[0]) {
    points = activityHours * POINTS_PER_HOUR[0];
  } else if (activityHours <= ACTIVITY_HOUR_THRESHOLDS[1]) {
    points = activityHours * POINTS_PER_HOUR[1];
  } else {
    points = activityHours * POINTS_PER_HOUR[2];
  }

  const moneyEarned = points * MONEY_PER_POINT;

  return [points, moneyEarned];
}

const [points, moneyEarned] = calculatePointsAndEarnings(activityHours);
console.log(`Você ganhou ${points} pontos este mês.`);
console.log(`E faturou R$ ${moneyEarned.toFixed(2)} este mês.`);
