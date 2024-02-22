/*- - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - -*/
import { sum } from './moduloJS';

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function generateRandomNumber(): number {
  return Math.floor(Math.random() * 10);
}

export function runMain(): void {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const result = sum(firstNumber, secondNumber) as number;
  console.log(`\nSoma de ${firstNumber} + ${secondNumber} = ${result}`);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
