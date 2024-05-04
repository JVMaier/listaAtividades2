/*
    11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.
*/

const prompt = require("prompt-sync")();

let firstTerm = parseInt(prompt("Digite o primeiro termo da PA: "));
let rate = parseInt(prompt("Digite a razão da PA: "));

if (isNaN(firstTerm) || isNaN(rate)) {
  console.error("Valores invalidos");
} else {
    calculateAP(firstTerm, rate);
}

function calculateAP(firstTerm, rate) {
  let apElements = [];
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    let term = firstTerm + i * rate;
    apElements.push(term);
    sum += term;
  }
  console.log("Os 10 primeiros termos da PA são: " + apElements.join(", "));
  console.log("A soma dos termos da PA é: " + sum);
}
