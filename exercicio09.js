/*
    9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
    mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
    perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
    funcionário.
*/

const prompt = require("prompt-sync")();

function getTotalSalary() {
  let manSalary = 0;
  let womenSalary = 0;
  let counterMans = 0;
  let countersWomens = 0;

  console.log("Programa de calculo total de salario!");

  while (true) {
    const salary = parseFloat(prompt("Digite o salário do funcionário: "));
    if (isNaN(salary) || salary < 0) {
      throw new Error("Valor invalido!");
    }

    const maleorFemale = prompt(
      "Digite o sexo do funcionário (HOMEM ou MULHER): "
    ).toUpperCase();
    if (maleorFemale !== "HOMEM" && maleorFemale !== "MULHER") {
      throw new Error("Valor invalido!");
    }

    if (maleorFemale === "HOMEM") {
      manSalary += salary;
      counterMans++;
    } else {
      womenSalary += salary;
      countersWomens++;
    }

    const continueProgram = prompt("Deseja continuar? (S/N): ").toUpperCase();
    if (continueProgram !== "S") {
      break;
    }
  }

  return [manSalary, womenSalary, counterMans, countersWomens];
}

const [manSalary, womenSalary, counterMans, countersWomens] = getTotalSalary();
console.log("");
console.log("Resultado do programa de calculo total de salario!");
console.log(
  `Foram cadastrados um total de ${counterMans} Homens. E o salario dos homem deu um total de R$${manSalary}`
);
console.log(
  `Foram cadastrados um total de ${countersWomens} Mulheres. E o salario das mulheres deu um total de R$${womenSalary}`
);