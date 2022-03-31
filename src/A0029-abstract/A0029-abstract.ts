export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected atk: number,
    protected hp: number,
  ) {}

  toAtk(character: Character): void {
    this.bordao();
    character.lostLife(this.atk);
  }

  lostLife(powerAtk: number): void {
    this.hp -= powerAtk;
    console.log(`${this.emoji} ${this.name} agora tem ${this.hp} de vida...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Character {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' GUEREEIRRAAAA AOOOOO ATAQUEEE!!!');
  }
}
export class Monstro extends Character {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + ' MONSTER!!!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const mosntro = new Monstro('Guerreira', 87, 1000);

guerreira.toAtk(mosntro);
guerreira.toAtk(mosntro);
guerreira.toAtk(mosntro);
mosntro.toAtk(guerreira);
mosntro.toAtk(guerreira);
mosntro.toAtk(guerreira);
