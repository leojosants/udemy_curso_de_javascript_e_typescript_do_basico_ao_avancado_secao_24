/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
@decorator
export class Animal {
  public color: string;
  public name: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
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

export function runMain(): void {
  const animal = new Animal('Bento', 'Preto');
  console.log(animal);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
