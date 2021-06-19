export class Lutador {
  private _name: string;
  private _nationality: string;
  private _age: number;
  private _height: number;
  private _weight: number;
  private _category = '';
  private _victories: number;
  private _defeats: number;
  private _tie: number;

  constructor(
    name: string,
    nationality: string,
    age: number,
    height: number,
    weight: number,
    victories: number,
    defeats: number,
    tie:number
  ) {
    this._nationality = nationality;
    this._age = age;
    this._height = height;
    this._weight = weight;
    this.setWeight(weight);
    this._victories = victories;
    this._defeats = defeats;
    this._tie = tie;
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
  get tie(): number {
    return this._tie;
  }

  set tie(tie: number) {
    this._tie = tie;
  }

  get age(): number {
    return this._age;
  }
  set age(age: number) {
    this._age = age;
  }

  get nationality(): string {
    return this._nationality;
  }
  set nationality(nationality: string) {
    this._nationality = nationality;
  }

  get height(): number {
    return this._height;
  }
  set height(height: number) {
    this._height = height;
  }

  get weight(): number {
    return this._weight;
  }
  setWeight(weight: number): void {
    this._weight = weight;
    this.setCategory();
  }

  get category(): string {
    return this._category;
  }
  setCategory(): void {
    if (this.weight > 60.0 && this.weight < 80.0) {
      this._category = 'Leve';
    } else if (this.weight > 80.0) {
      this._category = 'Pesado';
    }
  }

  get victories(): number {
    return this._victories;
  }
  set victories(victories: number) {
    this._victories = victories;
  }

  get defeats(): number {
    return this._defeats;
  }
  set defeats(defeats: number) {
    this._defeats = defeats;
  }

  public apresentar(): void {
    console.log(
      `Esse é o ${this.name} do ${this._nationality}, tem ${this.victories} vitórias e ${this._defeats} derrotas. Da categoria ${this.category} ,possuindo ${this.weight} kg`,
    );
  }
  public status(): void {
    console.log(`---------- \n Nome: ${this.name}, Categoria: ${this.category}, Vitórias: ${this.victories}, Derrotas: ${this.defeats}, Empates: ${this.tie}`);
  }
  public ganharLuta(): void {
    this._victories += 1;
  }
  public perderLuta(): void {
    this._defeats += 1;
  }
  public empatarLuta(): void {
    this._tie += 1;
  }
}
// Relacionamento por Agregação -> Uma luta tem um ou mais Lutador
export class Luta {
  // Atributo abstrato - Instância da Classe Lutador
  private _l1: Lutador | null;
  // Instância da Classe Lutador
  private _l2: Lutador | null;
  private readonly _Fighters: Lutador[] = [];
  private rounds: number;
  private _ok: boolean;

  constructor(rounds: number) {
    this.rounds = rounds;
    this._ok = false;
    this._l1 = null;
    this._l2 = null;
  }
  public set ok(cond: boolean) {
    this._ok = cond;
  }
  public get ok(): boolean {
    return this._ok;
  }
  // O ludador passado no parâmetro é o tipo abstrato
  public set l1(lutador: Lutador | null) {
    this._l1 = lutador;
  }
  public get l1(): Lutador | null {
    return this._l1;
  }
  public get l2(): Lutador | null {
    return this._l2;
  }
  public set l2(lutador: Lutador | null) {
    this._l2 = lutador;
  }
  get Fighters(): Lutador[] {
    return this._Fighters;
  }
  addFighter(l1: Lutador, l2: Lutador): void {
    this._Fighters.push(l1, l2);
  }

  public scheduleFight(l1: Lutador, l2: Lutador): void {
    if (l1.category === l1.category && l1 !== l2) {
      this.ok = true;
      this.l1 = l1;
      this.l2 = l2;
    } else {
      this.ok = false;
      this.l1 = null;
      this.l2 = null;
    }
  }
  public Fight(): void {
    //Luta aprovada
    if (this.ok) {
      this.l1?.apresentar()
      this.l2?.apresentar()
      const randomFighter:number = Math.floor(Math.random() * 2);
      switch (randomFighter) {
        case 0: // Empate
          if (this.l1 && this.l2) {
            this.l1.empatarLuta();
            this.l2.empatarLuta();
            console.log(`O ${this.l1.name} empatou a luta com o ${this.l2.name}.`)
        }
        break;
        case 1: // l1 ganha
        if (this.l1 && this.l2) {
            this.l1.ganharLuta()
            this.l2.perderLuta();
            console.log(`O campeão é o ${this.l1.name}, venceu o ${this.l2.name}.`)
        }
        break;
        case 2: // l1 perder
        if (this.l1 && this.l2) {
            this.l1.perderLuta()
            this.l2.ganharLuta();
            console.log(`O campeão é o ${this.l2.name}, venceu o ${this.l1.name}.`)
              }
            break;
      }
      this.l1?.status()
      this.l2?.status()
    } else {
      console.log('Lamento mas a luta não foi aprovada.');
    }
  }
}

const l1 = new Lutador('Maik', 'Brazil', 19, 1.7, 82, 8, 1,1);
const l2 = new Lutador('Brandon', 'England', 24, 1.7, 82, 8, 1,5);

// l1.apresentar()
// l2.apresentar()
const fight = new Luta(2);
fight.scheduleFight(l1,l2)
fight.Fight()
