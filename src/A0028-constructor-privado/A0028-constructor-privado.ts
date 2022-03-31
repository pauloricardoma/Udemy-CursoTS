// Singleton - GoF | Factory Method - GoF
export class Database {
  private static database: Database;

  // Singleton
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  // Factory Method
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Instância já criada');
      return Database.database;
    }
    console.log('Instância sendo criada');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

const db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect();

console.log(db1 === db2);
