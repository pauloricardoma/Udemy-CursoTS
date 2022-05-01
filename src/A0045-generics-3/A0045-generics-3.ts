interface PersonProtocol<T, U> {
  name: T;
  lastName: T;
  age: U;
}

interface PersonProtocol2<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

type PersonProtocol3<T = string, U = number> = {
  name: T;
  lastName: T;
  age: U;
};

const student1: PersonProtocol<string, number> = {
  name: 'Luiz',
  lastName: 'Miranda',
  age: 30,
};

const student2: PersonProtocol<number, number> = {
  name: 123,
  lastName: 456,
  age: 30,
};

const student3: PersonProtocol2 = {
  name: 'Paul',
  lastName: 'Rick',
  age: 30,
};

const student4: PersonProtocol3 = {
  name: 'Rick',
  lastName: 'Jordan',
  age: 30,
};

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
