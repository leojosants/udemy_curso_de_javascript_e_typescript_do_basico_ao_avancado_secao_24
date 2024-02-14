/*- - - - - - - - - - - - - - - - decorators - - - - - - - - - - - - - - - -*/
function invertNameAndColor<T extends new (...args: any[]) => any>(target: T): T {
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
      return value.split('').reverse().join('');
    }
  };
}

/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
@invertNameAndColor
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
