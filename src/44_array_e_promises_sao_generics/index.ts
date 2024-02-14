/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
type MyType = number;

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<MyType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

export function runMain(): void {
  const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(arrayOfNumbers);

  promiseAsync().then((result) => console.log(result + 1));

  myPromise().then((result) => console.log(result + 1));
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
