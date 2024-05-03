/*
    4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
    comprimentos e diga se é possível formar um triângulo com essas retas.
    Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
    lado deve ser menor que a soma dos outros dois.
*/

const prompt = require("prompt-sync")();

function IsitTriangle() {
  console.log("Digite tamanho de três segmentos de reta!");

  let segment1 = parseFloat(prompt("Digite tamanho do primeiro segmento: "));
  let segment2 = parseFloat(prompt("Digite tamanho do segundo segmentos: "));
  let segment3 = parseFloat(prompt("Digite tamanho do terceiro segmentos: "));

  if (
    segment3 < segment1 + segment2 &&
    segment2 < segment1 + segment3 &&
    segment1 < segment2 + segment3 
  ) {
    console.log("É possivel formar um triangulo");
  } else {
    console.log("Não é possivel formar um triangulo");
  }
}

IsitTriangle();
