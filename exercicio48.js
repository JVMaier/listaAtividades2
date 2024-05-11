/*
    48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
    inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
    item em estoque. Escreva uma função que combine os inventários em um único objeto.
    Se um item aparecer em ambas as lojas, some as quantidades.
*/
const inventarioLojaA = { camisetas: 50, calcas: 30, sapatos: 20 };
const inventarioLojaB = { camisetas: 20, meias: 40, sapatos: 10 };

function combineInventories(inventarioLojaA, inventarioLojaB) {
  const inventoryCombined = {};

  for (const key in inventarioLojaA) {
    inventoryCombined[key] = inventarioLojaA[key];
  }

  for (const key in inventarioLojaB) {
    if (key in inventoryCombined) {
      inventoryCombined[key] += inventarioLojaB[key];
    } else {
      inventoryCombined[key] = inventarioLojaB[key];
    }
  }

  return inventoryCombined;
}

const inventoryCombined = combineInventories(inventarioLojaA, inventarioLojaB);
console.log("Inventário combinado:", inventoryCombined);
