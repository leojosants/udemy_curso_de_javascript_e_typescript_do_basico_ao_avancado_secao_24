/*-----------------------------------------------------------------*/
export class Company {
  public readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public getName(): void {
    console.log(`Nome: ${this.name}`);
  }

  public getCNPJ(): void {
    console.log(`CNPJ: ${this.cnpj}`);
  }

  public addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  public showCompanyData(): void {
    console.log('\nDados da Empresa');
    this.getName();
    this.getCNPJ();
  }

  public showCollaboratores(): void {
    console.log('\nColaboradores');
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

/*-----------------------------------------------------------------*/
export class Udemy extends Company {
  constructor() {
    super('Udemy', 'XX. XXX. XXX/0001-XX');
  }

  public popCollaborator(): Collaborator | null {
    const collaborateRemoved = this.collaborators.pop();

    if (collaborateRemoved) {
      return collaborateRemoved;
    }

    return null;
  }
}

/*-----------------------------------------------------------------*/
export class Collaborator {
  constructor(public readonly name: string, public lastName: string) { }
}

/*-----------------------------------------------------------------*/
const udemyCompany = new Udemy();
const collaborator1 = new Collaborator('Leonardo', 'Santos');
const collaborator2 = new Collaborator('João', 'Santos');
const collaborator3 = new Collaborator('José', 'Santos');

udemyCompany.addCollaborator(collaborator1);
udemyCompany.addCollaborator(collaborator2);
udemyCompany.addCollaborator(collaborator3);
udemyCompany.showCollaboratores();

const collaborateRemoved = udemyCompany.popCollaborator();
console.log('\nColaborador removido:', collaborateRemoved);

udemyCompany.showCollaboratores();
udemyCompany.showCompanyData();
