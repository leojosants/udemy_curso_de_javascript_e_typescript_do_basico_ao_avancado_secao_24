/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
// Tipo do construtor da classe
type Constructor = new (...args: any[]) => any;

/*- - - - - - - - - - - - - - - - decorators - - - - - - - - - - - - - - - -*/
// Classes
function classDecorator(construtor: Constructor): any {
  // Chamado na criação da classe
  console.log('\nCLASSE');
  console.log(construtor);
  console.log('###');

  // Retorno pode ser omitido
  return class extends construtor {
    // faça o que desejar
  };
}

// Método de instância (normal)
function methodDecorator(prototypeClass: any, methodName: string, propertyDescriptor: PropertyDescriptor): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('\nMÉTODO NORMAL');
  console.log(prototypeClass);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // value altera o retorno original:
    // value: (...args: any[]) => console.log(args),
    writable: true,
    enumerable: true,
    configurable: true,
  };
}

// Método estático
function decoratorStaticMethod(classConstructor: Constructor, methodName: string, propertyDescriptor: PropertyDescriptor): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('\nMÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Parâmetro de método
function decoratorMethodParameter(prototypeClass: any, methodName: string, indexProperty: number): any {
  // Chamado na criação do método
  console.log('\nPARÂMETRO DE MÉTODO');
  console.log(prototypeClass);
  console.log(methodName);
  console.log(indexProperty);
  console.log('###');

  // Retorno é ignorado
}

// Parâmetro de método estático
function decoratorMethodParameterStatic(classConstructor: Constructor, methodName: string, indexProperty: number): any {
  // Chamado na criação do parâmetro (não precisa chamar o método)
  console.log('\nPARÂMETRO DE MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(methodName);
  console.log(indexProperty);
  console.log('###');

  // Retorno é ignorado
}

// Propriedade
function propertyDecorator(prototypeClass: any, propertyName: string): any {
  // Chamado na criação da propriedade
  console.log('\nDECORADOR DE PROPRIEDADE');
  console.log(prototypeClass);
  console.log(propertyName);
  console.log('###');

  // Retorno pode ser omitido
  // Use get e set para manipular o valor da propriedade
  let propertyValue: any;
  return {
    enumerable: true,
    configurable: true,
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

// Propriedade estática
function decoratorPropertyStatic(classConstructor: any, propertyName: string): any {
  // Chamado na criação da propriedade estática
  console.log('\nDECORADOR DE PROPRIEDADE ESTÁTICA');
  console.log(classConstructor);
  console.log(propertyName);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter
function decoratorFromGetterAndSetterNormal(prototypeClass: any, propertyName: string, propertyDescriptor: PropertyDescriptor): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('\nGETTER/SETTER normal');
  console.log(prototypeClass);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter estático
function decoradorDeGetterESetterEstatico(classConstructor: Constructor, propertyName: string, propertyDescriptor: PropertyDescriptor): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('\nGETTER/SETTER estático');
  console.log(classConstructor);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
// A classe e o uso dos decorators
@classDecorator
export class Person {

  @propertyDecorator
  public name: string;

  public surname: string;
  public age: number;

  @decoratorPropertyStatic
  public static staticProperty = 'VALOR PROPRIEDADE ESTÁTICA';

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  @methodDecorator
  public method(@decoratorMethodParameter message: string): string {
    return `${this.name} ${this.surname}: ${message}`;
  }

  @decoratorStaticMethod
  public static staticMethod(@decoratorMethodParameterStatic message: string): string {
    return Person.staticProperty + ' - ' + message;
  }

  public get fullName(): string {
    return this.name + ' ' + this.surname;
  }

  @decoratorFromGetterAndSetterNormal
  public set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.surname = words.join(' ');
  }

  @decoradorDeGetterESetterEstatico
  public static get staticPropertyGetterSetter(): string {
    return Person.staticProperty;
  }

  public static set staticPropertyGetterSetter(value: string) {
    Person.staticProperty = value;
  }
}

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function instanceatePerson(name: string, surname: string, age: number): Person {
  return new Person(name, surname, age);
}

export function runMain(): void {
  const pessoa = instanceatePerson('Luiz', 'Otávio', 30);
  pessoa.fullName = 'João Silva Oliveira';

  const method = pessoa.method('Olá mundo!');
  const staticMethod = Person.staticMethod('Olá mundo!');

  console.log();
  console.log(pessoa);
  console.log(method);
  console.log(staticMethod);
  console.log(Person.staticProperty);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
