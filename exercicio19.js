/*
    19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require("prompt-sync")();

function validateTime(numero) {
  let horario;
  let hora, minuto, segundo;
  
  do {
    horario = prompt(`Digite o ${numero + 1}º horário (HH:MM:SS): `);
    [hora, minuto, segundo] = horario.split(":").map(Number);

    if (!(isValidTime(hora, minuto, segundo))
    ) {
      console.log("Horário inválido. Por favor, tente novamente.");
    }
  } while (!(isValidTime(hora, minuto, segundo)));

  return horario;
}

function isValidTime(hora, minuto, segundo) {
    return (
      hora >= 0 &&
      hora <= 23 &&
      minuto >= 0 &&
      minuto <= 59 &&
      segundo >= 0 &&
      segundo <= 59
    );
  }

function main() {
  const hours = [];
  for (let i = 0; i < 5; i++) {
    const hour = validateTime(i);
    hours.push(hour);
  }

  hours.forEach((hour) => {
    console.log(hour);
  });
}

main();
