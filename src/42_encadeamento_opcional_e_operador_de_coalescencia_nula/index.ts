/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
type Document = {
  title: string;
  text: string;
  date?: Date;
};

/*- - - - - - - - - - - - - - - - objects - - - - - - - - - - - - - - - -*/
const document: Document = {
  title: 'Título',
  text: 'Texto',
  // date: new Date(),
};

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function runMain(): void {
  console.log(document.date?.toDateString() ?? 'Data inexistente');
  console.log(undefined ?? 'Data inexistente');
  console.log(null ?? 'Data inexistente');
  console.log(false ?? 'Data inexistente');
  console.log(0 ?? 'Data inexistente');
  console.log('' ?? 'Data inexistente');
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
