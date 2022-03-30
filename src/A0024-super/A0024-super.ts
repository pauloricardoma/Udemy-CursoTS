export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    // sala: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    // this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' uepa!!';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Paulo', 'Ricardo', 32, '111.111.111-11');
const aluno = new Aluno('Paulo', 'Ricardo', 32, '111.111.111-11', '0001');
const cliente = new Cliente('Paulo', 'Ricardo', 32, '111.111.111-11');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
