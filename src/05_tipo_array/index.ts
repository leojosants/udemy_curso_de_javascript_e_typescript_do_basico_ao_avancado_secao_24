/*
  array<T> - T[]
*/

export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((accumulator, value) => accumulator * value, 1);
}

export function concatenateString(...args: string[]): string {
  return args.reduce((accumulator, value) => accumulator + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const concatenate = concatenateString('a', 'b', 'c');
const upperCase = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenate);
console.log(upperCase);
