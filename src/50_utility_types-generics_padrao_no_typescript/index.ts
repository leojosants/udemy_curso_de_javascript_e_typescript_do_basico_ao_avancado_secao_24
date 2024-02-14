// utility types - https://www.typescriptlang.org/docs/handbook/utility-types.html

/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
type PersonProtocol = {
  name?: string;
  surname?: string;
  age?: number;
};

// required
type PersonRequired = Required<PersonProtocol>;

// partial
type PersonPartial = Partial<PersonRequired>;

// readonly
type PersonReadonly = Readonly<PersonRequired>;

// pick
type PersonPick = Pick<PersonRequired, 'name' | 'surname'>;

// extract e exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  name: string;
  surname: string;
  age: number;
};

type AccountMongoAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string,
};


/*- - - - - - - - - - - - - - - - objects - - - - - - - - - - - - - - - -*/
// record
const object1: Record<string, string | number> = {
  name: 'Leonardo',
  surname: 'Santos',
  age: 39,
};

const object2: PersonRequired = {
  name: 'Leonardo',
  surname: 'Santos',
  age: 39,
};

const accountMongo: AccountMongo = {
  _id: 'ajhafjhgryfg38tf837f9f8f',
  name: 'Leonardo',
  surname: 'Santos',
  age: 39,
};

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
function mapAccount(accountMongo: AccountMongo): AccountMongoAPI {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

export function runMain(): void {
  const accountAPI = mapAccount(accountMongo);
  console.log('Dados da API:', accountAPI);
  console.log('Objeto 1....:', object1);
  console.log('Objeto 2....:', object2);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();

export default 1;
