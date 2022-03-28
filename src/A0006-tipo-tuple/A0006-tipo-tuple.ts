const dataClient: readonly [number, string] = [1, 'Luiz'];
const dataClient1: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dataClient2: [number, string, string?] = [1, 'Luiz', 'Miranda'];
const dataClient3: [number, string, ...string[]] = [
  1,
  'Luiz',
  'Uai',
  'Eita',
  'Mais',
  'Novas',
];

// dataClient[0] = 2;
// dataClient[1] = 'Nãm';
dataClient1[2] = 'Nãm';

dataClient3.push('Mais Um');

console.log(dataClient);
console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);

const array: readonly string[] = ['aaa', 'bbb', 'ccc'];
const array1: ReadonlyArray<string> = ['aaa', 'bbb', 'ccc'];

console.log(array);
console.log(array1);
