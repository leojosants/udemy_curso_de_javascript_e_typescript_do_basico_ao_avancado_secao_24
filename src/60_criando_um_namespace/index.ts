/* eslint-disable @typescript-eslint/no-namespace */
/*- - - - - - - - - - - - - - - - namespaces - - - - - - - - - - - - - - - -*/
namespace MyNamespace {
  /*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
  export class PersonNamespace {
    public name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  export const nameNamespace = 'Nome 1';

  const personNamespace = new PersonNamespace('Nome 2');
  console.log(personNamespace);

  /*- - - - - - - - - - - - - - - - namespaces - - - - - - - - - - - - - - - -*/
  export namespace AnotherNamespace {
    export const nameAnotherNamespace = 'Nome 3';

  }
}

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function runMain(): void {
  const personNamespace = new MyNamespace.PersonNamespace('Nome 4');
  console.log(personNamespace);
  console.log(MyNamespace.nameNamespace);
  console.log(MyNamespace.AnotherNamespace.nameAnotherNamespace);
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();

export default 1;
