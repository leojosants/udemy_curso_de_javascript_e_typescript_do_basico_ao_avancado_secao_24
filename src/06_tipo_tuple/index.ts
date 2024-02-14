// tuple
const customerData1: [number, string] = [39, 'Leonardo'];
const customerData2: [number, string, string] = [39, 'Leonardo', 'Santos'];
const customerData3: [number, string, string?] = [39, 'Leonardo'];
const customerData4: [number, string, ...string[]] = [39, 'Leonardo', 'Santos', 'Cidade', 'Bairro', 'Estado'];

// readonly
const array1: readonly string[] = ['Leonardo', 'Santos'];
const array2: ReadonlyArray<string> = ['Leonardo', 'Santos']; // generics

console.log('\n', customerData1);
console.log('\n', customerData2);
console.log('\n', customerData3);
console.log('\n', customerData4);
console.log('\n', array1);
console.log('\n', array2);
