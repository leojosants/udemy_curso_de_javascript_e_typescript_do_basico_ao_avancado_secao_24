let x;

if (typeof x === 'undefined') x = 20;

console.log('\n', x * 2);

export function createPerson(firstName: string, lastName?: string): {
  firstName: string,
  lastName?: string,
} {
  return {
    firstName, lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOftwoNumber = squareOf(2);
const squareOftwoString = squareOf('2');

if (typeof squareOftwoNumber === null) {
  console.log('Inválido');
}
else {
  console.log(squareOftwoNumber);
}
