type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
  color: 'Preto',
  vaciny: ['Vaciny 1', 'Vaciny 2'],
  age: 10,
};

const vacinys = getKey(animal, 'vaciny');
const color = getKey(animal, 'color');

console.log(vacinys, color, getKey(animal, 'age'));
