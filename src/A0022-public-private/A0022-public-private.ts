export class Empresa {
  readonly nome: string = 'Luiz'; // atributo public é redundante
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  adicionaColaboradores(colaboradores: Colaborador[]): void {
    colaboradores.forEach((colaborador) =>
      this.colaboradores.push(colaborador),
    );
  }

  mostrarColaboradores(): void {
    this.colaboradores.forEach((colaborador) => console.log(colaborador));
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly salary: number,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const empresa2 = new Empresa('JStack', '11.111.111/0001-22');

const colaborador1 = new Colaborador('Luiz', 'Otávio', 3000);
const colaborador2 = new Colaborador('Paulo', 'Ricardo', 30000);
const colaborador3 = new Colaborador('Maria', 'Carmo', 100000);

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa2.adicionaColaboradores([colaborador1, colaborador2]);

empresa1.mostrarColaboradores();
empresa2.mostrarColaboradores();

console.log(empresa1);
console.log(empresa2);
