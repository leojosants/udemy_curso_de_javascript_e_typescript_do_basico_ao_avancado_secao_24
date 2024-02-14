let x = 10; // eslint-disable-line
x = 0b1010;

const y = 10;
const a = 100;

const person = {
  name: 'Leonardo' as const,
  lastName: 'Santos'
};

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log('\n', y);
console.log('\n', a);
console.log('\n', person);
console.log('\n', chooseColor('Red'));

// module mode
export default x;
