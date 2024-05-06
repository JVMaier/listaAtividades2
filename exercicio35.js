/*
    35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
    conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
    estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
    vetor pode ser preenchido quantas vezes forem necessárias.
*/
const prompt = require("prompt-sync")();

function vectorOddOrEven() {
    let vectorOdd = new Array(5).fill(0);
    let vectorEven = new Array(5).fill(0);
    let oddIndex = 0;
    let evenIndex = 0;

    for (let i = 0; i < 30; i++) {
        const user = parseInt(prompt("Digite um numero: "));
        
        if (user % 2 === 0) {
            vectorEven[evenIndex++] = user;
            if (evenIndex === 5) {
                console.log("Vetor de números pares cheio:", vectorEven);
                evenIndex = 0;
            }
        } else {
            vectorOdd[oddIndex++] = user;
            if (oddIndex === 5) {
                console.log("Vetor de números ímpares cheio:", vectorOdd);
                oddIndex = 0;
            }
        }
    }

    console.log("Conteúdo FINAL do vetor de números pares:", vectorEven);
    console.log("Conteúdo FINAL do vetor de números ímpares:", vectorOdd);
}

vectorOddOrEven();