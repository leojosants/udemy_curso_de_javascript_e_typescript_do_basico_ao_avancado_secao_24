/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
type ColorsObject = typeof colorsObject;
type ColorsKeys = keyof ColorsObject;

/*- - - - - - - - - - - - - - - - objects - - - - - - - - - - - - - - - -*/
const colorsObject = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo',
};

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
function translateColor(color: ColorsKeys, colors: ColorsObject) {
  return colors[color];
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
console.log(translateColor('red', colorsObject));
console.log(translateColor('green', colorsObject));
console.log(translateColor('blue', colorsObject));
console.log(translateColor('purple', colorsObject));
