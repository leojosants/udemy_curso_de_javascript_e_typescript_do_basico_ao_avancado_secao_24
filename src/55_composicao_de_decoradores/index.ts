/*- - - - - - - - - - - - - - - - interfaces - - - - - - - - - - - - - - - -*/
interface Constructor {
  new(...args: any[]): any;
}
/*- - - - - - - - - - - - - - - - decorators - - - - - - - - - - - - - - - -*/
function anotherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador', param1);
    return target;
  }
}

function invertNameAndColor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('Sou a função decorator, recebi a classe', target);

    return class extends target {
      public name: string;
      public color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      public reverse(value: string): string {
        return `${value.split('').reverse().join('')} ${param1} ${param2} `;
      }
    }
  }
}

/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
@anotherDecorator('teste')
@invertNameAndColor('valor 1', 'valor 2')
export class Animal {
  public color: string;
  public name: string;

  constructor(name: string, color: string) {
    console.log('Sou o construtor da classe Animal');
    this.name = name;
    this.color = color;
  }
}

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
function instanceateAnimal(name: string, color: string): Animal {
  return new Animal(name, color);
}

export function runMain(): void {
  const animal = instanceateAnimal('Bento', 'Preto');
  console.log(animal);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
