/*
  utilize o tipo 'any' apenas em ultimo caso
*/

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Teste'));
console.log(showMessage(1));
