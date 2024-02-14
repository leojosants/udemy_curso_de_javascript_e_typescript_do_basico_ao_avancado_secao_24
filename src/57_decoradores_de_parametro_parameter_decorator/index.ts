/*- - - - - - - - - - - - - - - - decorators - - - - - - - - - - - - - - - -*/
function decorator(classPrototype: any, methodName: string | symbol, index: number): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
export class Person {
  public name: string;
  public surname: string;
  public age: number;

  constructor(@decorator name: string, @decorator surname: string, @decorator age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  public get fullName(): string {
    return `${this.name} ${this.surname}`;
  }

  public set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();

    if (!firstName) {
      return;
    }

    this.name = firstName;
    this.surname = words.join(' ');
  }


  public method(@decorator message: string): string {
    return `${this.name} ${this.surname}: ${message}`;
  }
}

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function instanceatePerson(name: string, surname: string, age: number): Person {
  return new Person(name, surname, age);
}

export function runMain(): void {
  const person = instanceatePerson('Leonardo', 'Santos', 39);
  const method = person.method('Olá, Mundo!');

  console.log(method);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
