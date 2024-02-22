/*- - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - -*/
import _ from './modulo';

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function generateRandomNumber(): number {
  const number = Math.floor(Math.random() * 100);
  return number;
}

export function runMain(): void {
  const array = [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()];
  console.log(`Soma total...: ${_.sum(array)}`);
  console.log(`Menor valor..: ${_.min(array)}`);
  console.log(`Maior valor..: ${_.max(array)}`);
  console.log(`Média total..: ${_.mean(array)}`);
  console.log(`Multiplicação: ${_.mul(array)}`);
  console.log(global.MYGLOBAL);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
