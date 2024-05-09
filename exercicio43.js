/*
    43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
    combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
    sobre as do obj1 em caso de conflitos.
*/
const obj1 = {
  numeros: [1, 2, 3],
  nome: "Alice",
  idade: 25,
  cores: ["vermelho", "verde", "azul"],
  lista: [10, 20, 30],
  status: "ativo",
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  numeros: [10, 2, 3],
  nome: "José",
  idade: 25,
  cores: ["vermelho", "verde", "azul"],
  lista: [10, 20, 30],
  status: "ativo",
  b: 4,
  c: 5,
  d: 6,
};

function combineObject(obj1, obj2) {
  const obj3 = { ...obj1, ...obj2 };
  return obj3;
}

const obj3Combined = combineObject(obj1, obj2);
console.log("Objeto combinado:", obj3Combined);
