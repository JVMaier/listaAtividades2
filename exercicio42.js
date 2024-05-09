/*
    42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
    strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
    propriedades que são arrays.
*/

const dados = {
  numeros: [1, 2, 3],
  nome: "Alice",
  idade: 25,
  cores: ["vermelho", "verde", "azul"],
  lista: [10, 20, 30],
  status: "ativo",
};

console.log("Antes de Filtrar:", dados);

function filterArrays(dados) {
  const newObjectArrays = {};

  for (const key in dados) {
    if (Array.isArray(dados[key])) {
      newObjectArrays[key] = dados[key];
    }
  }

  return newObjectArrays;
}

console.log(
  "Novo objeto apenas com as propriedades que são arrays:",
  filterArrays(dados)
);
