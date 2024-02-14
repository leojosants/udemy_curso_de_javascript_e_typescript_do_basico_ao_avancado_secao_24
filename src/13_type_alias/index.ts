type Age = number;

type Person = {
  name: string,
  lastName: string,
  age: Age,
  salary: number,
  favoriteColor?: string,
};

type ColorRGB = 'Red' | 'Green' | 'Blue';

type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';

type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Leonardo',
  lastName: 'Santos',
  age: 39,
  salary: 1_000,
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log('\n', person);
console.log('\n', setFavoriteColor(person, 'Blue'));
