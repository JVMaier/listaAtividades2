/*
    13. Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci.
*/

function fibonacciSequence(numberFibonacci) {
  const sequence = [1, 1];
  for (let i = 2; i < numberFibonacci; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

const fibonacci = fibonacciSequence(15);
console.log(`Os 15 primeiros elementos da Sequência de Fibonacci são:`);
console.log(fibonacci);
