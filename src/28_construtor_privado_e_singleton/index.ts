/*------------------------------------------------------------------------*/
export class Database {
  private static database: Database;
  private host: string;
  private user: string;
  private password: string;

  // singleton
  private constructor(host: string, user: string, password: string) {
    this.host = host;
    this.user = user;
    this.password = password;
  }

  public connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  // factory method
  public static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('\nRetornando instância já criada!');
      return Database.database;
    }

    console.log('\nCriando nova instância!');

    Database.database = new Database(host, user, password);

    return Database.database;
  }
}

/*------------------------------------------------------------------------*/
const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();
