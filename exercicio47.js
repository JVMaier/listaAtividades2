/*
    47. Crie uma função que transforme um objeto de entrada aplicando uma função
    fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
    resultados.
*/

const inputObject = { a: 1, b: 2, c: 3, d: 10 };

function transformObject(obj, transformFunction) {
  const transformedObject = {};

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      transformedObject[key] = transformFunction(obj[key]);
    }
  }

  return transformedObject;
}

function double(x) {
  return x * 2;
}

const outputObject = transformObject(inputObject, double);

console.log(outputObject);
