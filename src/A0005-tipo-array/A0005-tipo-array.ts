// Array<T> - T[]
function argsMultiple(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = argsMultiple(2, 10, 10);
const result2 = concatenaString('1', '2', '3');
const result3 = toUpperCase('Nu', 'Na', 'uooou');

console.log(result, typeof result);
console.log(result2, typeof result2);
console.log(result3, typeof result3);
