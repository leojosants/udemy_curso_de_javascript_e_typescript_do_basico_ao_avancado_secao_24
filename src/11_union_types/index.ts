function addOrConcate(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  return `${a}${b}`;
}

console.log('\n', typeof addOrConcate(10, 20), addOrConcate(10, 20));
console.log('\n', typeof addOrConcate('10', '20'), addOrConcate('10', '20'));
console.log('\n', typeof addOrConcate('10', 20), addOrConcate('10', 20));
console.log('\n', typeof addOrConcate(10, '20'), addOrConcate(10, '20'));
