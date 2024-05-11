/*
    49. Você recebe um array de objetos representando transações financeiras. Cada
    transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
    onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
    essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/
const transacoes = [
  { id: 1, valor: 100, data: "2024-05-10", categoria: "Alimentacao" },
  { id: 2, valor: 50, data: "2024-05-11", categoria: "Transporte" },
  { id: 3, valor: 200, data: "2024-05-12", categoria: "Alimentacao" },
  { id: 4, valor: 150, data: "2024-05-13", categoria: "Lazer" },
  { id: 5, valor: 80, data: "2024-05-14", categoria: "Transporte" },
];

function organizeTransactions(transacoes) {
  const transactionsByCategory = {};

  // Itera sobre cada transação
  transacoes.forEach(transacao => {
    const { categoria, valor } = transacao;

    if (!transactionsByCategory[categoria]) {
      transactionsByCategory[categoria] = {
        transacoes: [],
        subtotal: 0
      };
    }

    transactionsByCategory[categoria].transacoes.push(`{ id: ${transacao.id}, valor: ${transacao.valor}, data: "${transacao.data}", categoria: "${transacao.categoria}" }`);
    transactionsByCategory[categoria].subtotal += valor;
  });

  return transactionsByCategory;
}

const transactionsByCategory = organizeTransactions(transacoes);
console.log(transactionsByCategory);

