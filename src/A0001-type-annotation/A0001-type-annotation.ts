/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d(hexadecimal), 0b1010(binario), 0o7744(octagonal)
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayNumbers: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b'];
let arrayStrings: string[] = ['a', 'b'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Luiz',
  idade: 25,
  adulto: true ?? undefined
}

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
