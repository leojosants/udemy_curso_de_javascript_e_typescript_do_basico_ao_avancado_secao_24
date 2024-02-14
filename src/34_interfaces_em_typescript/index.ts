/*------------------------------------------------------------------------*/
interface TypeName {
  name: string;
}

interface TypeSurname {
  surname: string;
}

interface TypeFullName {
  fullName(): string;
}

interface IPerson extends TypeName, TypeSurname, TypeFullName { }

/*------------------------------------------------------------------------*/
type TypePerson = TypeName & TypeSurname & TypeFullName;

/*------------------------------------------------------------------------*/
export class Person implements IPerson {
  public name: string;
  public surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public fullName(): string {
    return `\nNome completo: ${this.name} ${this.surname}`;
  }

  public showFullName(): void {
    console.log(`${this.fullName()}`);
  }
}

/*------------------------------------------------------------------------*/
const person1: IPerson = {
  name: "Leonardo",
  surname: "Santos",

  fullName: function (): string {
    return `\nNome completo: ${this.name} ${this.surname}`;
  }
};
console.log();
console.log(person1);

const person2 = new Person('Leonardo', 'Santos');
person2.showFullName();
