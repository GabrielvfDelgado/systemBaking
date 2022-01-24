export class ContaCorrente {
  agencia;
  #saldo = 0; //pode ser usado o _saldo

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

  retornarSaldo() {
    const valor = this.#saldo;
    return valor;
  }
}
