/*- - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - -*/
// import validator from 'validator'; // error TS2686: 'validator' refers to a UMD global, but the current file is a module. Consider adding an import instead.
import validator = require('validator');

import _ from 'lodash';

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function generateRandomNumber(): number {
  return Math.floor(Math.random() * 100);
}

export function runMain(): void {
  const email = 'leo@gmail.com';
  console.log(`\nO email '${email}' é válido? ${validator.isEmail(email)}`);
  console.log(_.clone([generateRandomNumber(), generateRandomNumber(), generateRandomNumber()]));
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
