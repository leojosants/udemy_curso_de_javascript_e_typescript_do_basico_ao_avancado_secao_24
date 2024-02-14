/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
type VotationOption = {
  numberOfVotes: number;
  option: string;
};

type NumberOfVotes = number;

/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
export class Votation {
  private _votationOptions: VotationOption[] = [];
  public details: string;

  constructor(details: string) {
    this.details = details;
  }

  public get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }

  public addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  public vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) {
      return;
    }
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

}

export class VotationApp {
  private votations: Votation[] = [];

  constructor() {
    //
  }

  public addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  public showVotes(): void {
    let totalVotes = 0;
    for (const votation of this.votations) {
      console.log(`\n${votation.details}`);
      for (const votationOption of votation.votationOptions) {
        totalVotes += votationOption.numberOfVotes
        console.log(`${votationOption.option}: ${votationOption.numberOfVotes}`);
      }
      console.log('- - - - - - - - - - - - - - - - - - - - - - - -');
    }
    console.log(`\n-> Total de votos: ${totalVotes}`)
  }
}

/*- - - - - - - - - - - - - - - - objects - - - - - - - - - - - - - - - -*/
const languages = {
  javaScript: 'JavaScript',
  typeScript: 'TypeScript',
  python: 'Python',
};

const colors = {
  vermelho: 'Vermelho',
  verde: 'Verde',
  azul: 'Azul',
};

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/

export function instanceateVotation(phase: string): Votation {
  return new Votation(phase);
}

export function instanceateVotationApp(): VotationApp {
  return new VotationApp();
}

export function runMain(): void {
  const numberOfVotes: NumberOfVotes = 0;

  const questionFavoriteLanguage = `Qual a sua linguagem de programação favorita?
  [0] - JavaScript
  [1] - TypeScript
  [2] - Python`;

  const questionFavoriteColor = `Qual a sua cor favorita?
  [0] - Vermelho
  [1] - Verde
  [2] - Azul`;

  const voteFavoriteLanguage = instanceateVotation(questionFavoriteLanguage);
  voteFavoriteLanguage.addVotationOption({ option: languages.javaScript, numberOfVotes: numberOfVotes });
  voteFavoriteLanguage.addVotationOption({ option: languages.typeScript, numberOfVotes: numberOfVotes });
  voteFavoriteLanguage.addVotationOption({ option: languages.python, numberOfVotes: numberOfVotes });
  voteFavoriteLanguage.vote(0);
  voteFavoriteLanguage.vote(1);
  voteFavoriteLanguage.vote(2);
  voteFavoriteLanguage.vote(1);
  voteFavoriteLanguage.vote(2);

  const voteFavoriteColor = instanceateVotation(questionFavoriteColor);
  voteFavoriteColor.addVotationOption({ option: colors.vermelho, numberOfVotes: numberOfVotes });
  voteFavoriteColor.addVotationOption({ option: colors.verde, numberOfVotes: numberOfVotes });
  voteFavoriteColor.addVotationOption({ option: colors.azul, numberOfVotes: numberOfVotes });
  voteFavoriteColor.vote(0);
  voteFavoriteColor.vote(0);
  voteFavoriteColor.vote(1);
  voteFavoriteColor.vote(0);
  voteFavoriteColor.vote(1);
  voteFavoriteColor.vote(2);

  const votationApp = instanceateVotationApp();
  votationApp.addVotation(voteFavoriteLanguage);
  votationApp.addVotation(voteFavoriteColor);
  votationApp.showVotes();
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
