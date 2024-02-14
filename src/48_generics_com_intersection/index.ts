/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function unionObjects<T, U>(object1: T, object2: U): T & U {
  return {
    ...object1,
    ...object2,
  };
}

export function runMain(): void {
  const object1 = {
    key1: 'valor 1',
  };

  const object2 = {
    key2: 'valor 2',
  };

  const union = unionObjects(object1, object2);

  console.log();
  console.log('Objeto 1:', object1);
  console.log('Objeto 2:', object2);
  console.log('União...:', union);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
