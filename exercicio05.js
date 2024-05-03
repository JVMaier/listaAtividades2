/*
    5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). 
*/

const prompt = require("prompt-sync")();

function JoKenPo() {
  const choices = ["PEDRA", "PAPEL", "TESOURA"];
  const bot = choices[Math.floor(Math.random() * choices.length)];
  const player = prompt(
    "Escolha entre (PEDRA, PAPEL E TESOURA): "
  ).toUpperCase();

  if (!choices.includes(player)) {
    console.log(
      "Opção inválida. Por favor, escolha entre PEDRA, PAPEL e TESOURA."
    );
    return;
  }

  if (player === bot) {
    console.log("Empate!");
  } else if (
    (player === "PEDRA" && bot === "TESOURA") ||
    (player === "PAPEL" && bot === "PEDRA") ||
    (player === "TESOURA" && bot === "PAPEL")
  ) {
    console.log("Você ganhou!");
  } else {
    console.log("Você perdeu!");
  }

  console.log(`Você escolheu ${player} e o bot escolheu ${bot}.`);
}

JoKenPo();
