/*
    50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
    deverá ser capaz de interagir com o usuário através do console do navegador e manter
    um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
    informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
        1. Estrutura de Dados:
            ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
            cidade, quartos totais e quartos disponiveis.
            ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
            nomeCliente.
        2. Funcionalidades:
            ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
            ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
            disponíveis em uma cidade específica.
            ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
            deve diminuir o número de quartos disponiveis do hotel.
            ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
            aumentar o número de quartos disponiveis no hotel correspondente.
            ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
            cliente.
        3. Regras de Negócio:
            ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
            ○ As reservas devem ser identificadas por um ID único e associadas a um
            único hotel.

        4. Desafios Adicionais (Opcionais):
            ○ Implementar uma função de check-in e check-out que atualize a
            disponibilidade de quartos.
            ○ Gerar relatórios de ocupação para um hotel.
            ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
            avaliações dentro do objeto do hotel.
*/

const prompt = require("prompt-sync")();

let hoteis = [];

let reservas = [];

function adicionarHotel() {
  console.log("-----------------------");
  const id = prompt("Digite o ID do hotel: ");
  const nome = prompt("Digite o nome do hotel: ");
  const cidade = prompt("Digite a cidade do hotel: ");
  const quartosTotais = parseInt(
    prompt("Digite o número total de quartos do hotel: ")
  );

  const hotel = {
    id: id,
    nome: nome,
    cidade: cidade,
    quartosTotais: quartosTotais,
    quartosDisponiveis: quartosTotais,
  };
  hoteis.push(hotel);

  console.log("-----------------------");
  console.log(`Hotel ${nome} adicionado com sucesso!`);
}

function buscarHoteisPorCidade() {
  console.log("-----------------------");
  const cidade = prompt("Digite a cidade para buscar hotéis: ");
  const hoteisNaCidade = hoteis.filter((hotel) => hotel.cidade === cidade);
  if (hoteisNaCidade.length === 0) {
    console.log("-----------------------");
    console.log(`Não há hotéis disponíveis em ${cidade}.`);
  } else {
    console.log("-----------------------");
    console.log(`Hotéis disponíveis em ${cidade}:`);
    hoteisNaCidade.forEach((hotel) => {
      console.log(
        `${hotel.nome} - Quartos disponíveis: ${hotel.quartosDisponiveis}`
      );
    });
  }
}

function fazerReserva() {
  console.log("-----------------------");
  const idReserva = prompt("Digite o ID da reserva: ");
  const idHotel = prompt("Digite o ID do hotel: ");
  const nomeCliente = prompt("Digite o nome do cliente: ");

  const hotel = hoteis.find((hotel) => hotel.id === idHotel);
  if (!hotel) {
    console.log("-----------------------");
    console.log(`Hotel com ID ${idHotel} não encontrado.`);
    return;
  }
  if (hotel.quartosDisponiveis === 0) {
    console.log("-----------------------");
    console.log(`Desculpe, não há quartos disponíveis no hotel ${hotel.nome}.`);
    return;
  }
  reservas.push({
    idReserva: idReserva,
    idHotel: idHotel,
    nomeCliente: nomeCliente,
  });
  hotel.quartosDisponiveis--;
  console.log("-----------------------");
  console.log(
    `Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`
  );
}

function cancelarReserva() {
  console.log("-----------------------");
  const idReserva = prompt("Digite o ID da reserva a ser cancelada: ");
  const reserva = reservas.find((reserva) => reserva.idReserva === idReserva);
  if (!reserva) {
    console.log("-----------------------");
    console.log(`Reserva com ID ${idReserva} não encontrada.`);
    return;
  }
  const hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
  if (!hotel) {
    console.log("-----------------------");
    console.log(`Hotel associado à reserva não encontrado.`);
    return;
  }
  reservas = reservas.filter((reserva) => reserva.idReserva !== idReserva);
  hotel.quartosDisponiveis++;
  console.log("-----------------------");
  console.log(`Reserva com ID ${idReserva} cancelada com sucesso.`);
}

function listarReservas() {
  console.log("-----------------------");
  console.log("Lista de reservas: ");
  reservas.forEach((reserva) => {
    const hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
    console.log(
      `Reserva ID: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}`
    );
  });
}

while (true) {
  console.log("-----------------------");
  console.log(`Opções de funções!
    1. Adicionar hotel
    2. Buscar hotéis por cidade
    3. Fazer reserva
    4. Cancelar reserva
    5. Listar reservas
    6. Sair`);
  const opcao = prompt(`Escolha uma opção digitando seu numero: `);

  switch (opcao) {
    case "1":
      adicionarHotel();
      break;
    case "2":
      buscarHoteisPorCidade();
      break;
    case "3":
      fazerReserva();
      break;
    case "4":
      cancelarReserva();
      break;
    case "5":
      listarReservas();
      break;
    case "6":
      console.log("Saindo do sistema...");
      break;
    default:
      console.log("Opção inválida.");
  }

  if (opcao === "6") {
    break;
  }
}
