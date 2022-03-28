export function funcao(this: Date, argumento1: string, age: number): void {
  console.log(this);
  console.log(argumento1, age);
}

// primeiro argumento é o this dentro da funcao, chamando com call
funcao.call(new Date(), 'Luiz', 30);
funcao.apply(new Date(), ['Luiz', 30]);
