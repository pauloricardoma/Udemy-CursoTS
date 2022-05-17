@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// new antes pra falar que é um constuctor de class
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor0: string;
    cor1: string;
    cor2: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor0 = args[1];
      this.cor1 = args[1].split('').reverse().join('');
      this.cor2 = 'Qualquer coisa';
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

// const AnimalDecorated = decorator(Animal);
// console.log(AnimalDecorated);
// const animal = new Animal('roxo');
const animal = new Animal('Luiz', 'roxo');
console.log(animal);
