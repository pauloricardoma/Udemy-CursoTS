export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  getNome(): string {
    return this.nome;
  }

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  setCpf(valor: string) {
    this._cpf = valor;
  }

  getCpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
console.log(pessoa);

console.log(pessoa.getNome());
console.log(pessoa.cpf);

pessoa.cpf = 'Joana';

console.log(pessoa);
