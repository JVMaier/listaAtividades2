/*
    44. Escreva uma função que conte quantas propriedades do tipo string existem em um
    objeto e retorne esse número.
*/

const objectTest = {
  nome: "Alice",
  idade: 25,
  cidade: "São Paulo",
  cargo: "Desenvolvedor",
  email: "alice@example.com",
  numeros: [1, 2, 3],
  cores: ["vermelho", "verde", "azul"],
  lista: [10, 20, 30],
  status: "ativo",
};

function stringCounter(objeto) {
  let counter = 0;

  for (const key in objeto) {
    if (typeof objeto[key] === "string") {
      counter++;
    }
  }

  return counter;
}

console.log(
  "Número de propriedades do tipo string:",
  stringCounter(objectTest)
);
