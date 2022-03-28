type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa1 = TemNome | TemSobrenome | TemIdade;
type Pessoa2 = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type IntersectionABC = AB & AC; // 'A'
const intersectionABC: IntersectionABC = 'A';
// const intersectionABC2: IntersectionABC = 'B';

const pessoa1: Pessoa1 = {
  idade: 30,
  nome: 'Luiz',
};

const pessoa2: Pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(pessoa1);
console.log(pessoa2);
