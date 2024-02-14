/*------------------------------------------------------------------------*/
export abstract class Character {
  protected name: string;
  protected attack: number;
  protected life: number;
  protected abstract emoji: string;

  constructor(name: string, attack: number, life: number) {
    this.name = name;
    this.attack = attack;
    this.life = life;
  }

  public attackOpponent(character: Character): void {
    this.warCry();
    console.log(`\t${this.emoji}${this.name} está atacando!`);
    character.loseLife(this.attack);
  }

  public loseLife(attackForce: number): void {
    console.log(`\t${this.emoji}${this.name} está sendo atacado!`);
    console.log(`\t${this.emoji}Vida antes  do ataque: ${this.life}`);
    this.life -= attackForce;
    console.log(`\t${this.emoji}Vida depois do ataque: ${this.life}\n`);
  }

  public abstract warCry(): void;
}

/*------------------------------------------------------------------------*/
export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  public warCry(): void {
    console.log(`${this.emoji}Guerreraaaaaaa...`);
  }
}

/*------------------------------------------------------------------------*/
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  public warCry(): void {
    console.log(`${this.emoji}Monstroooooooooo...`);
  }
}

/*------------------------------------------------------------------------*/
const warrior = new Warrior('Guerreira', 100, 1000);
const monster = new Monster('Monstro', 87, 1000);

warrior.attackOpponent(monster);
monster.attackOpponent(warrior);
