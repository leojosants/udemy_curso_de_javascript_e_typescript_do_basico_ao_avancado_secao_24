/*------------------------------------------------------------------------*/
export class Writer {
  private _name: string;
  private _tool: Tool | null = null;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set tool(tool: Tool | null) {
    this._tool = tool;
  }

  public get tool(): Tool | null {
    return this._tool;
  }

  public write(): void {
    if (this._tool === null) {
      console.log('Escritor não possui ferramenta!');
      return;
    }
    this._tool.write();
  }
}

/*------------------------------------------------------------------------*/
export abstract class Tool {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public abstract write(): void;

  public get name(): string {
    return this._name;
  }
}

/*------------------------------------------------------------------------*/
export class Typewriter extends Tool {
  public write(): void {
    console.log(`Utilizando a ${this.name}!`);
  }
}

export class Pencil extends Tool {
  public write(): void {
    console.log(`Utilizando a ${this.name}!`);
  }
}

const writer = new Writer('Jose');
const typewriter = new Typewriter('Maquina de escrever');
const pencil = new Pencil('Bic');

console.log(`Nome do escritor: ${writer.name}`);
console.log(`Nome da caneta: ${pencil.name}`);
console.log(`Nome da máquina de escrever: ${typewriter.name}`);

writer.tool = pencil;
writer.tool = typewriter;
writer.tool = null;
writer.write();
