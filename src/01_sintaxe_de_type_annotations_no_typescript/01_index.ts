/*
  tipos basicos (aqui ocorre inferencia de tipos)
*/
let name: string = 'Leonardo';
let age: number = 30;
let adult: boolean = true;
let symbol: symbol = Symbol('qualquer symbol');
// let big: bigint = 10n;

/*
  arrays
*/
let arrayOfNumbers1: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings1: Array<string> = ['a', 'b', 'c'];
let arrayOfStrings2: string[] = ['a', 'b', 'c'];

/*
  objetos
*/
let person: {
  name: string,
  age: number,
  adult?: boolean,
} = {
  name: 'Leonardo',
  age: 39
};

/*
  funcoes
*/
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

export default name;
