import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//criar clientes
const cliente1 = new Cliente("Fulano", 77784865133);
const cliente2 = new Cliente("Gabriel", 894874987897);

//criar contas
const ContaCorrenteGabriel = new ContaCorrente(1001, cliente2);
ContaCorrenteGabriel.depositar(600);
const ContaCorrenteFulano = new ContaCorrente(1001, cliente1);

//exibir contas
ContaCorrenteGabriel.exibir();
ContaCorrenteFulano.exibir();

//transferencia
ContaCorrenteGabriel.transferir(100, ContaCorrenteFulano);

//exibir pos transferencia
ContaCorrenteGabriel.exibir();
ContaCorrenteFulano.exibir();

console.log(
  `Numero de contas no sistema sao de: ${ContaCorrente.numeroContas}`
);
