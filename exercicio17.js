/*
    17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    os dados das pessoas menores de idade.
*/

const prompt = require("prompt-sync")();

function lowAge() {
  const vectorName = [];
  const vectorAge = [];

  for (let i = 0; i < 9; i++) {
    const readName = prompt(`Digite o  ${i + 1}º nome: `);
    const readAge = parseInt(prompt(`Digite a ${i + 1}º idade: `));
    vectorName.push(readName);
    vectorAge.push(readAge);
  }

  console.log("Pessoas menores de idade:");
  for (let i = 0; i <= vectorName.length; i++) {
    if (vectorAge[i] < 18) {
      console.log(`Nome: ${vectorName[i]}, Idade: ${vectorAge[i]}`);
    }
  }
  //Para ver completo
  //   console.log(vectorAge);
  //   console.log(vectorName);
}

lowAge();
