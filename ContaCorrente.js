import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  //publico
  static numeroContas = 0;
  agencia;

  //privado
  #cliente;
  #saldo = 0; //pode ser usado o _saldo

  //setters e getters
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.#cliente = novoValor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  get saldo() {
    return this.#saldo;
  }

  //construtor
  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroContas++;
  }

  //metodos
  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this.#saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacar = this.sacar(valor);
    conta.depositar(valorSacar);
  }

  exibir() {
    console.log(`Conta ${this.cliente.nome}`);
    console.log(
      `
      Agencia: ${this.agencia};
      Nome: ${this.cliente.nome};
      CPF: ${this.cliente.cpf};
      Saldo: ${this.saldo};
      `
    );
  }
}
