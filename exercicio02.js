/*
    2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
    h-¹, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
    multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require("prompt-sync")();

function speedingFine() {
  let carSpeed = parseFloat(
    prompt("Digite a velociade que o carro passou em Km/h: ")
  );

  if (carSpeed <= 80) {
    console.log("O carro estava a baixo de 80km/h. \n Não recebera multa!");
  } else {
    const fineCalculation = (carSpeed - 80) * 5;
    console.log("Você foi multado");
    console.log(
      "Para cada Km acima da velocidade permitida será cobrando R$ 5,00"
    );
    console.log(
      `Você passou a ${carSpeed} Sua multa ficou em ${fineCalculation} Reais`
    );
  }
}

speedingFine();
