/*
    18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
    um funcionário e ao final escreva o conteúdo do registro.
*/

//Falta validador*

const prompt = require("prompt-sync")();

const employeeName = prompt("Digite o nome do empregado: ");
const employeeRole = prompt("Digite o cargo do empregado: ");
const employeeWage = parseInt(prompt("Digite o salário do empregado: "));

function createRegis(employeeName, employeeRole, employeeWage) {
    const Employee = {
        name: employeeName,
        role: employeeRole,
        wage: employeeWage
    }
    console.log(Employee)
}

createRegis(employeeName, employeeRole, employeeWage);
