export class Company {
  private readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

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

export class Collaborator {
  constructor(public readonly name: string, public lastName: string) { }
}

const company = new Company('Udemy', 'XX. XXX. XXX/0001-XX');
const collaborator1 = new Collaborator('Leonardo', 'Santos');
const collaborator2 = new Collaborator('João', 'Santos');
const collaborator3 = new Collaborator('José', 'Santos');

company.addCollaborator(collaborator1);
company.addCollaborator(collaborator2);
company.addCollaborator(collaborator3);
company.showCollaboratores();
company.showCompanyData();
company.getName();
