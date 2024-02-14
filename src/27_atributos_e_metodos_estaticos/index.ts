/*------------------------------------------------------------------------*/
export class Person {
  private static defaultAge = 0;
  private static defaultCPF = 'xxx.xxx.xxx-xx';
  public name: string;
  public lastName: string;
  public age: number;
  public cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.cpf = cpf;
  }

  public showStaticClassAttributes(): void {
    console.log('\nAtributos estáticos padrão:');
    console.log(`Idade; ${Person.defaultAge}`);
    console.log(`CPF: ${Person.defaultCPF}`);
  }

  public static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.defaultAge, Person.defaultCPF);
  }
}

/*------------------------------------------------------------------------*/
const person = Person.createPerson('Jose', 'Santos');

console.log('\n', person);

person.showStaticClassAttributes();
