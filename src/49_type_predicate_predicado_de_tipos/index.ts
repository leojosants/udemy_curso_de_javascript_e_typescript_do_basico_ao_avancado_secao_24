/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const returns = args.reduce((accumulator, value) => {
    if (isNumber(accumulator) && isNumber(value)) {
      return accumulator + value;
    }
    return accumulator;
  }, 0);
  return returns;
}

export function runMain(): void {
  console.log(sum(1, 2, 3));
  console.log(sum(...[1, 2, 3, 'a', 'b', 'c', 1]));
  console.log(sum('a', 'b', 'c'));
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
