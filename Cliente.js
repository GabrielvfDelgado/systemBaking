export class Cliente {
  //publico
  nome;

  //privados
  #cpf;

  //pegar cpf
  get cpf() {
    return this.#cpf;
  }

  //construtor
  constructor(nome, cpf) {
    this.nome = nome;
    this.#cpf = cpf;
  }
}
