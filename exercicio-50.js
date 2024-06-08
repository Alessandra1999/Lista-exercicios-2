const prompt = require('prompt-sync')();

let hoteis = [];
let reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

sistema();

function adicionarHotel(nome, cidade, quartosTotais, quartosDisponiveis) {
  let hotel = {
    id: proximoIdHotel++,
    nome: nome,
    cidade: cidade,
    quartosTotais: quartosTotais,
    quartosDisponiveis: quartosDisponiveis,
    avaliacoes: []
  }
  hoteis.push(hotel);
  console.log("Hotel adicionado com sucesso!");
}

function fazerReserva() {
  let idHotel = parseInt(prompt("Digite o ID do hotel para a reserva: "));
  let nomeCliente = prompt("Digite o nome do cliente: ");

  let hotel = hoteis.find(h => h.id === idHotel);
  if (hotel) {
    if (hotel.quartosDisponiveis > 0) {
      let reserva = {
        idReserva: proximoIdReserva++,
        idHotel: idHotel,
        nomeCliente: nomeCliente
      };
      reservas.push(reserva);
      hotel.quartosDisponiveis--;
      console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`);
    } else {
      console.log(`Não há quartos disponíveis nesse hotel`);
    }
  } else {
    console.log("Não existe hotel com esse ID!");
  }
}

function hoteisPorCidade(cidade) {
  let hoteisEncontrados = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
  if (hoteisEncontrados.length > 0) {
    console.log(`Hotéis disponíveis em ${cidade}:`);
    hoteisEncontrados.forEach(hotel => console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`));
  } else {
    console.log(`Nenhum hotel foi encontrado nessa cidade!`);
  }
}

function cancelarReserva() {
  let idReserva = parseInt(prompt("Digite o ID da reserva a ser cancelada: "));

  let reservaIndex = reservas.findIndex(r => r.idReserva === idReserva);
  if (reservaIndex !== -1) {
    let reserva = reservas[reservaIndex];
    let hotel = hoteis.find(h => h.id === reserva.idHotel);
    hotel.quartosDisponiveis++;
    reservas.splice(reservaIndex, 1);
    console.log(`Reserva de ID ${idReserva} cancelada com sucesso.`);
  } else {
    console.log(`Reserva de ID ${idReserva} não encontrada.`);
  }
}

function listarReservas() {
  if (reservas.length > 0) {
    console.log(`Lista de Reservas:`);
    reservas.forEach(reserva => {
      let hotel = hoteis.find(h => h.id === reserva.idHotel);
      console.log(`ID Reserva: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}, Check-in: ${reserva.checkIn}`);
    });
  } else {
    console.log(`Nenhuma reserva encontrada.`);
  }
}

function checkIn() {
  let idReserva = parseInt(prompt("Digite o ID da reserva para check-in: "));

  let reserva = reservas.find(r => r.idReserva === idReserva);
  if (reserva) {
    if (!reserva.checkIn) {
      reserva.checkIn = true;
      console.log(`Check-in realizado com sucesso para a reserva de ID ${idReserva}.`);
    } else {
      console.log(`Check-in já foi realizado para a reserva de ID ${idReserva}.`);
    }
  } else {
    console.log(`Reserva de ID ${idReserva} não encontrada.`);
  }
}

function checkOut() {
  let idReserva = parseInt(prompt("Digite o ID da reserva para check-out: "));

  let reservaIndex = reservas.findIndex(r => r.idReserva === idReserva);
  if (reservaIndex !== -1) {
    let reserva = reservas[reservaIndex];
    let hotel = hoteis.find(h => h.id === reserva.idHotel);

    if (reserva.checkIn) {
      hotel.quartosDisponiveis++;
      reservas.splice(reservaIndex, 1);
      console.log(`Check-out realizado com sucesso para a reserva de ID ${idReserva}.`);
      let avaliacao = parseFloat(prompt(`Por favor, avalie sua estadia no hotel ${hotel.nome} (0-5):`));
      if (!isNaN(avaliacao) && avaliacao >= 0 && avaliacao <= 5) {
        hotel.avaliacoes.push(avaliacao);
        console.log(`Obrigado pela sua avaliação!`);
      } else {
        console.log(`Avaliação inválida.`);
      }
    } else {
      console.log(`Check-in não foi realizado para a reserva de ID ${idReserva}.`);
    }
  } else {
    console.log(`Reserva de ID ${idReserva} não encontrada.`);
  }
}

function relatorio() {
  let idHotel = parseInt(prompt("Digite o ID do hotel para gerar o relatório de ocupação:"), 10);

  let hotel = hoteis.find(h => h.id === idHotel);
  if (hotel) {
    let totalReservas = reservas.filter(r => r.idHotel === idHotel).length;
    console.log(`Relatório de Ocupação para o hotel ${hotel.nome}:`);
    console.log(`Total de Quartos: ${hotel.quartosTotais}`);
    console.log(`Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
    console.log(`Total de Reservas: ${totalReservas}`);
    if (hotel.avaliacoes.length > 0) {
      let mediaAvaliacao = hotel.avaliacoes.reduce((acc, val) => acc + val, 0) / hotel.avaliacoes.length;
      console.log(`Média das Avaliações: ${mediaAvaliacao.toFixed(2)}`);
    } else {
      console.log(`Ainda não há avaliações para este hotel.`);
    }
  } else {
    console.log(`Hotel com ID ${idHotel} não encontrado.`);
  }
}

function sistema() {
  while (true) {
    console.log("1. Adicionar Hotel\n2. Buscar Hotéis por Cidade\n3. Fazer Reserva\n4. Cancelar Reserva\n5. Listar Reservas\n6. Check-in\n7. Check-out\n8. Relatório de Ocupação\n9. Sair ");
    let opcao = prompt("Escolha uma opção: ");
    if (opcao === '1') {
      let nome = prompt("Digite o nome do hotel: ");
      let cidade = prompt("Digite a cidade do hotel: ");
      let quartosTotais = parseInt(prompt("Digite o número total de quartos: "));
      let quartosDisponiveis = parseInt(prompt("Digite a quantidade de quartos disponíveis para reserva: "))
      adicionarHotel(nome, cidade, quartosTotais, quartosDisponiveis);
    } else if (opcao === '2') {
      let cidade = prompt("Digite a cidade para buscar hotéis: ");
      hoteisPorCidade(cidade);
    } else if (opcao === '3') {
      fazerReserva();
    } else if (opcao === '4') {
      cancelarReserva();
    } else if (opcao === '5') {
      listarReservas();
    } else if (opcao === '6') {
      checkIn();
    } else if (opcao === '7') {
      checkOut();
    } else if (opcao === '8') {
      relatorio();
    } else if (opcao === '9') {
      console.log("Você saiu do sistema.");
      break;
    } else {
      console.log("Opção inválida. Tente novamente.");
    }
  }
}



/* Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
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
avaliações dentro do objeto do hotel. */