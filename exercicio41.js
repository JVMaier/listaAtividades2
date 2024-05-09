/*
    41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
    idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
    nome e idade.
*/
const pessoa = {
  nome: "João",
  idade: 30,
};

console.log("Antes de adicionar o email:", pessoa);
console.log("Somente idade:", pessoa.idade);

function addEmail(pessoa, email) {
  pessoa.email = email;
  return pessoa;
}

const pessoaComEmail = addEmail(pessoa, "joao@example.com");

console.log("Depois de adicionar o email:", pessoaComEmail);
