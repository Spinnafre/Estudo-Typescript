// PUBLIC - > Acessado em qualquer lugar
// READONNLY -> Somente leitura

export class Empresa {
    // Irá ser acessado nas instâncias só que somente leitura
    public readonly name: string
    private readonly cnpj: string
    // No Typescript uma classe pode ser um tipo
    protected readonly employees: Employees[] = []
    // Se colocar o readonly na tipagem no Array, irá significar que será imutável
    // protected readonly employees: readonly Employees[] = []


    // Inicializando o valor
    constructor(name: string, cnpj: string) {
        this.name = name
        this.cnpj = cnpj
    }

    public getEmployees():Employees[]{
        return this.employees
    }
    public addEmployees(emp:Employees):void{
        this.employees.push(emp)
    }

}
export class Employees {
    constructor(public readonly name: string, public readonly age: number, public readonly role: string) {
        this.name = name
        this.age = age
        this.role = role
    }
    public getInfo():string{
        return `Nome: ${this.name}, Age: ${this.age}, Role : ${this.role}`
    }
}
// const Embrace = new Empresa('3V3','111 111 111/0001-11')
// Embrace.addEmployees({name:'Davi Silva da Penha',age:19,role:'Emgenheiro de software'})
// const f2=new Employees('João Pereirão',26,'Analista de sistemas')
// Embrace.addEmployees(f2)
// console.log(Embrace.getEmployees())
