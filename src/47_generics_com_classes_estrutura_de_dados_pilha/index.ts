/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
export class Person<T, U> {
  public name: T;
  public age: U;

  constructor(name: T, age: U) {
    this.name = name;
    this.age = age;
  }
}

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  public pushElement(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  private isEmpty(): boolean {
    return this.counter === 0;
  }

  public popElement(): T | void {
    if (this.isEmpty()) {
      return undefined;
    }
    this.counter--;
    const elements = this.elements[this.counter];
    delete this.elements[this.counter];
    return elements;
  }

  public objectSize(): void {
    console.log(`-> Total de elementos na pilha: ${this.counter}`);
  }

  public emptyStack(): void {
    console.log('\nEsvaziar  pilha:');

    if (this.isEmpty()) {
      console.log('-> Pilha vazia!');
      this.objectSize();
      return;
    }

    while (!this.isEmpty()) {
      this.objectSize();
      console.log(`Elemento removido: ${this.popElement()}`);
    }

    this.objectSize();
  }

  public showStack(): void {
    console.log('\nExibir pilha:');

    if (this.isEmpty()) {
      console.log('-> Pilha vazia!');
      this.objectSize();
      return;
    }

    for (const key in this.elements) {
      console.log(`Posição ${key} - ${this.elements[key]}`);
    }

    this.objectSize();
  }
}

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
function instanceateStack(): Stack<number | string> {
  return new Stack();
}

export function runMain(): void {
  const stack = instanceateStack();
  stack.pushElement(1);
  stack.pushElement(2);
  stack.pushElement(3);
  stack.pushElement(4);
  stack.pushElement('string');
  stack.showStack();

  const elementRemoved = stack.popElement();
  console.log(`\nElemento removido: ${elementRemoved}`);

  stack.showStack();
  stack.emptyStack();
  stack.showStack();
  stack.emptyStack();
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
