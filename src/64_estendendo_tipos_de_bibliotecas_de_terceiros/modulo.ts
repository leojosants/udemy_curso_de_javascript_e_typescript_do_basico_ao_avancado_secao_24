/*- - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - -*/
import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, currentValue) => total * currentValue, 1);
};


global.MYGLOBAL = 'VALOR DA GLOBAL"';

export default _;
