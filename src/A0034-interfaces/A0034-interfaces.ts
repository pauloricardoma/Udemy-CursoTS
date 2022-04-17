interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoNomeCompleto & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');

const pessoaObj: TipoPessoa2 = {
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Luiz2',
  sobrenome: 'Miranda2',
};

console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
