/*- - - - - - - - - - - - - - - - type - - - - - - - - - - - - - - - -*/
type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

/*- - - - - - - - - - - - - - - - objects - - - - - - - - - - - - - - - -*/
const animal = {
  age: 10,
  color: 'Branco',
  vaccines: ['Vacina A', 'Vacina B'],
};

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
const getKey: GetKeyFn = (object, key) => object[key];

export function runMain(): void {
  const age = getKey(animal, 'age');
  const color = getKey(animal, 'color');
  const vaccines = getKey(animal, 'vaccines');

  console.log(`Idade.....: ${age}`);
  console.log(`Cor.......: ${color}`);
  console.log(`Vacinas...: ${vaccines}`);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
