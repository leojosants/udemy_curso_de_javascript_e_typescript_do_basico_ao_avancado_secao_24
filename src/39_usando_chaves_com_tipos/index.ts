/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
type Vehicle = {
  brand: string;
  year: string;
};

type Car = {
  brand: Vehicle['brand'];
  year: Vehicle['year'];
  name: string;
}

/*- - - - - - - - - - - - - - - - objects - - - - - - - - - - - - - - - -*/
const car: Car = {
  brand: 'Ford',
  year: '2024',
  name: 'Fusion',
};

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
console.log(car);
