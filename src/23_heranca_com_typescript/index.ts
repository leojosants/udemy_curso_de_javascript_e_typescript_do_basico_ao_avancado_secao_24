/*------------------------------------------------------------------------*/
export class Person {
  public name: string;
  public lastName: string;
  private age: number;
  protected cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.cpf = cpf;
  }

  public getfullName(): string {
    return `Nome completo da pessoa: ${this.name} ${this.lastName}`;
  }

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }
}

/*------------------------------------------------------------------------*/
export class Student extends Person {
  public getfullName(): string {
    return `Nome completo do aluno: ${this.name} ${this.lastName}`;
  }
}

/*------------------------------------------------------------------------*/
export class Client extends Person {
  public getfullName(): string {
    return `Nome completo do cliente: ${this.name} ${this.lastName}`;
  }
}

/*------------------------------------------------------------------------*/
const person = new Person('Leonardo', 'Santos', 39, '000.000.000-00');
const student = new Student('Mara', 'Santos', 39, '000.000.000-00');
const client = new Client('João', 'Santos', 39, '000.000.000-00');

console.log('\n', person.getfullName());
console.log('\n', student.getfullName());
console.log('\n', client.getfullName());
