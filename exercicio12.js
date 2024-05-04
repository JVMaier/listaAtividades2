/*
    12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
    Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

function fibonacciSequence(numberFibonacci) {
  const sequence = [1, 1];
  for (let i = 2; i < numberFibonacci; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

const fibonacci = fibonacciSequence(10);
console.log(
  `Os 10 primeiros elementos da Sequência de Fibonacci são: ${fibonacci.join(
    ", "
  )}`
);
