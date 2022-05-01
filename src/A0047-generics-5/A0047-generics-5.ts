export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}
// const person1 = new Person('Luiz', 30);
// const person2 = new Person(['Luiz'], 30);
// const person3 = new Person(['Luiz'], { age: 30 });
// const person4 = new Person<string, number>('Luiz', 30);

export class Pile<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  lenght(): number {
    return this.counter;
  }

  showPile(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const pile1 = new Pile<number | string>();
pile1.push(1);
pile1.push(2);
pile1.push(3);
pile1.push(4);
pile1.push('string');
const element1 = pile1.pop();
console.log(element1);
pile1.showPile();

while (!pile1.isEmpty()) {
  console.log(pile1.pop());
}
