interface Person {
  name: string;
}

interface Person {
  readonly surname: string;
}

interface Person {
  readonly address: readonly string[];
}

interface Person {
  readonly age?: number;
}

export const person: Person = {
  name: 'Leonardo',
  surname: 'Santos',
  address: ['Rua A'],
};

console.log();
console.log(person);
