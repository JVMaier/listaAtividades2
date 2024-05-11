/*
    46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
    com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
    de vendas por vendedor.
*/
const arrayObjects = [
  { vendedor: "Ailton", valor: 350 },
  { vendedor: "Gisele", valor: 750 },
  { vendedor: "Guilherme", valor: 1000 },
  { vendedor: "Ailton", valor: 400 },
  { vendedor: "Marcio", valor: 350 },
  { vendedor: "Guilherme", valor: 150 },
];

function summary(array) {
  const summaryObject = {};

  array.forEach((sale) => {
    if (summaryObject[sale.vendedor]) {
      summaryObject[sale.vendedor].total += sale.valor;
      summaryObject[sale.vendedor].vendas += 1;
    } else {
      summaryObject[sale.vendedor] = {
        total: sale.valor,
        vendas: 1,
      };
    }
  });

  return summaryObject;
}

console.log(summary(arrayObjects));
