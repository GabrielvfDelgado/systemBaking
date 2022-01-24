import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const client1 = new Cliente();

client1.nome = "Gabriel";
client1.cpf = "5464878665";

const ContaCorrenteGabriel = new ContaCorrente();

ContaCorrenteGabriel.agencia = 1001;
ContaCorrenteGabriel.depositar(100);

const valorSacado = ContaCorrenteGabriel.sacar(20);

console.log(valorSacado);
console.log(ContaCorrenteGabriel);
let valor = ContaCorrenteGabriel.retornarSaldo();
console.log(`Seu saldo é de ${valor}`);
