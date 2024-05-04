/*
    14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
    mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
    que eles foram informados.
*/

const prompt = require("prompt-sync")();

function personsNames() {
  let counter = 7;
  let namesList = [];
  while (counter !== 0) {
    const digitedNames = prompt("Digite um nome: ");
    counter--;
    namesList.push(digitedNames);
  }

  console.log("Listagem dos nomes informados (ordem inversa):");
  console.log(namesList.reverse().join(", "));
  //   for (let i = namesList.length - 1; i >= 0; i--) {
  //     console.log(namesList[i]);
  //   }
}

personsNames();
