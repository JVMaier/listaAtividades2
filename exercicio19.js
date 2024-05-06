/*
    19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require("prompt-sync")();

function isValidTime(hour, min, sec) {
  return (
    hour >= 0 &&
    hour <= 23 &&
    min >= 0 &&
    min <= 59 &&
    sec >= 0 &&
    sec <= 59
  );
}


function validateTime(num) {
  let time;
  let hour, min, sec;
  
  do {
    time = prompt(`Digite o ${num + 1}º horário (HH:MM:SS): `);
    [hour, min, sec] = time.split(":").map(Number);

    if (!(isValidTime(hour, min, sec))
    ) {
      console.log("Horário inválido. Por favor, tente novamente.");
    }
  } while (!(isValidTime(hour, min, sec)));

  return time;
}


function main() {
  const times = [];
  for (let i = 0; i < 5; i++) {
    const hours = validateTime(i);
    times.push(hours);
  }

  times.forEach((hours) => {
    console.log(hours);
  });
}

main();
