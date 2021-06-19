export abstract class Ferramenta {
  private _nome: string;
  constructor(nome: string) {
    this._nome = nome;
  }
  get nome(): string {
    return this._nome;
  }

  abstract usar(escritor:Escritor): void;
}
export class Caneta extends Ferramenta {
  usar(escritor:Escritor): void {
    console.log(`${escritor.nome} está escrevendo usando um lápis...`);
  }
}

export class Maquina extends Ferramenta {
  usar(escritor:Escritor): void {
    console.log(`${escritor.nome} está escrevendo usando uma máquina...`);
  }
}
export class Escritor {
  private _nome: string;
  private _ferramenta: Ferramenta | null = null;
  constructor(nome: string, ferramenta: Ferramenta) {
    this._nome = nome;
    this._ferramenta = ferramenta;
  }
  get nome(): string {
    return this._nome;
  }
  set nome(nome: string) {
    this._nome = nome;
  }
  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }
  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }
  escrever(): void {
    if (this._ferramenta) {
      this._ferramenta.usar(this);
    } else {
      console.log('OPS, não foi definido nenhuma ferramenta.');
    }
  }
}




const caneta=new Caneta('bic')
const tablet=new Maquina('tablet a7')

const p1=new Escritor('Davi Silva',tablet)

p1.escrever()
