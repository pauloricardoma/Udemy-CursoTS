export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: 'valor1' };
const obj2 = { key2: 'valor2' };
const join = joinObjects(obj1, obj2);
console.log(join);
