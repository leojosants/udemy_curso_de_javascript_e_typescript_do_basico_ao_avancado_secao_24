/*- - - - - - - - - - - - - - - - decorators - - - - - - - - - - - - - - - -*/
function decorator(classPrototype: any, methodName: string | symbol): any {
  let propertyValue: any;

  return {
    get: () => propertyValue,

    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  }
}

/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
export class Person {
  @decorator
  public name: string;

  @decorator
  public surname: string;

  @decorator
  public age: number;

  constructor(name: string, surname: string, age: number) {
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


  public method(message: string): string {
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
