/*------------------------------------------------------------------------*/
export class Person {
  private _name: string;
  private _lastName: string;
  private _age: number;
  private _cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this._name = name;
    this._lastName = lastName;
    this._age = age;
    this._cpf = cpf;
  }

  public get name(): string {
    return `Nome: ${this._name}`;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get lastName(): string {
    return `Sobrenome: ${this._lastName}`;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }

  public get age(): number {
    return this._age;
  }

  public set age(age: number) {
    this._age = age;
  }

  public get cpf(): string {
    return `CPF: ${this._cpf.replace(/\D/g, '')}`;
  }

  public set cpf(cpf: string) {
    this._cpf = cpf;
  }

  public getFullName(): string {
    return `Nome completo: ${this._name} ${this._lastName}`;
  }
}

/*------------------------------------------------------------------------*/
const person = new Person('Leonardo', 'Santos', 39, '000.000.000-00');
console.log('\n', person);

person.name = 'teste';
console.log('\n', person);
