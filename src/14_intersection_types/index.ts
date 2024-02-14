type HasName = {
  name: string,
};

type HasLastName = {
  lastName: string,
};

type HasAge = {
  age: number,
};

type Person = HasName & HasLastName & HasAge;

type AB = 'A' | 'B';

type AC = 'A' | 'C';

type AD = 'A' | 'D';

type intersection = AB & AC & AD;

const person: Person = {
  name: 'Leonardo',
  lastName: 'Santos',
  age: 39,
}

console.log('\n', person);

// module mode
export { person };
