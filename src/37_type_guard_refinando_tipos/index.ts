/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
type Person = {
  type: 'person',
  name: string,
}

type Animal = {
  type: 'animal',
  color: string,
}

type PersonOrAnimal = Person | Animal;

/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
export class Student implements Person {
  public type: 'person' = 'person';
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function sumOrConcate(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return `${a}${b}`;

}

export function showName(object: PersonOrAnimal): void {
  /* 1ª - forma de checar
    if ('name' in object) {
      console.log(object.name);
    }
    */

  /* 2ª - forma de checar
    if (object instanceof Student) {
      console.log(object.name);
    }
  */

  /* 3ª - forma de checar */
  switch (object.type) {
    case 'person':
      console.log(object.name);
      return;

    case 'animal':
      console.log(object.color);
      return;
  }
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
showName(new Student('Leo'));

showName({
  type: 'animal',
  color: 'black'
});

console.log(sumOrConcate(1, 2));
console.log(sumOrConcate('a', 'b'));
