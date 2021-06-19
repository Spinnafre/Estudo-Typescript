export class Carro {
    private Motor: Motor
    private model: string
    constructor(model: string) {
        this.model = model
        // O carro precisa do Motor
        this.Motor = new Motor(model)
    }
    public ligarCarro(): void {
        this.Motor.ligar()
    }
    public DesligarCarro(): void {
        this.Motor.Desligar()
    }
    public AcelerarCarro(): void {
        this.Motor.Acelerar()
    }
    public PararCarro(): void {
        this.Motor.Parar()
    }
}
export class Motor {
    private modelCar: string
    constructor(model: string) {
        this.modelCar = model
    }
    get car(): string {
        return this.modelCar
    }
    public ligar(): void {
        console.log(`Ligando o motor do ${this.car}`)
    }
    public Desligar(): void {
        console.log(`Desligando o motor do ${this.car}`)
    }
    public Acelerar(): void {
        console.log(`Acelerando o motor do ${this.car}`)
    }
    public Parar(): void {
        console.log(`Parando o motor do ${this.car}`)
    }
}

const carro=new Carro('BMW')
carro.AcelerarCarro()
