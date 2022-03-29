export class Empresa {
  public readonly nome: string = 'Luiz'; // atributo public é redundante
  private readonly price: number = 200;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, price: number, cnpj: string) {
    this.nome = nome;
    this.price = price;
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

const empresa1 = new Empresa('Udemy', 20, '11.111.111/0001-11');
const empresa2 = new Empresa('JStack', 80, '11.111.111/0001-22');

const colaborador1 = new Colaborador('Luiz', 'Otávio', 3000);
const colaborador2 = new Colaborador('Paulo', 'Ricardo', 30000);
const colaborador3 = new Colaborador('Maria', 'Carmo', 100000);

console.log(empresa1);
console.log(empresa2);

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa2.adicionaColaboradores([colaborador1, colaborador2]);

empresa1.mostrarColaboradores();
empresa2.mostrarColaboradores();

console.log(empresa1);
console.log(empresa1.nome);
console.log(empresa1.price); // não acessível por ser private
console.log(empresa2);
