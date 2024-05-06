/*
    22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
    dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    número não determinado de pessoas e retorne a média de salário da população, a
    média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
    350,00.
*/

const prompt = require("prompt-sync")();

function calculateStatistics() {
  let totalSalary = 0;
  let totalSons = 0;
  let bigSalary = 0;
  let perssonCounter = 0;
  let perssonLowSalary = 0;

  console.log("Insira dados para a pesquisa (Digite 0 nos dois campos para sair do programa)")

  while (true) {
    const salaryAll = parseFloat(prompt("Digite o salário da pessoa (R$): "));
    const numSons = parseInt(prompt("Digite o número de filhos da pessoa: "));

    if (salaryAll === 0 && numSons === 0) {
      break;
    }

    totalSalary += salaryAll;
    totalSons += numSons;
    perssonCounter++;

    if (salaryAll > bigSalary) {
      bigSalary = salaryAll;
    }

    if (salaryAll <= 350) {
      perssonLowSalary++;
    }
  }

  const medSalary = totalSalary / perssonCounter;
  const medSons = totalSons / perssonCounter;

  const percentualLowSalary = (perssonLowSalary / perssonCounter) * 100;

  console.log("Resultados da Pesquisa:");
  console.log(`Média de salário da população: R$${medSalary.toFixed(2)}`);
  console.log(`Média do número de filhos: ${medSons.toFixed(2)}`);
  console.log(`Maior salário: R$ ${bigSalary.toFixed(2)}`);
  console.log(
    `Percentual de pessoas com salário até R$ 350,00: ${percentualLowSalary.toFixed(
      2
    )}%`
  );
}

calculateStatistics();
