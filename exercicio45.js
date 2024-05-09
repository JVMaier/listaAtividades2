/*
    45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
    o número de vezes que a string aparece no array.
*/
const stringArray = [
  "teste1",
  "teste2",
  "teste3",
  "teste4",
  "teste5",
  "teste1",
  "teste3",
];

function objectForString(stringArray) {
  const countObject = {};

  for (const string of stringArray) {
    if (countObject[string]) {
      countObject[string]++;
    } else {
      countObject[string] = 1;
    }
  }

  return countObject;
}

console.log(objectForString(stringArray));
