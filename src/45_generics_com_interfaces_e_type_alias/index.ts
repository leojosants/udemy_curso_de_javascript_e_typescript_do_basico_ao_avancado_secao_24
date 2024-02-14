/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
type PersonProtocol2<T = string, U = number> = {
  name: T;
  surname: T;
  age: U;
}

/*- - - - - - - - - - - - - - - - interfaces - - - - - - - - - - - - - - - -*/
interface PersonProtocol1<T = string, U = number> {
  name: T;
  surname: T;
  age: U;
}

/*- - - - - - - - - - - - - - - - objects - - - - - - - - - - - - - - - -*/
const student1: PersonProtocol1<string, number> = {
  name: "Leonardo",
  surname: "Santos",
  age: 39,
};

const student2: PersonProtocol1<number, number> = {
  name: 1,
  surname: 2,
  age: 3,
};

const student3: PersonProtocol2 = {
  name: "Leonardo",
  surname: "Santos",
  age: 39,
};

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function runMain(): void {
  console.log(student1)
  console.log(student2)
  console.log(student3)
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
