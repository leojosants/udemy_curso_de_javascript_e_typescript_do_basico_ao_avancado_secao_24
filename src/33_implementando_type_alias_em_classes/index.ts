/*------------------------------------------------------------------------*/
type TypeName = {
  name: string;
}

type TypeSurname = {
  surname: string;
}

type TypeFullName = {
  fullName(): string;
}

/*------------------------------------------------------------------------*/
export class Person implements TypeName, TypeSurname, TypeFullName {
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
const person = new Person('Leonardo', 'Santos');
person.showFullName();
