export class Pessoa{
    // Definindo os modificadores de acesso
    public name:string
    public age:number
    public sex:string
    private _cpf:string
    constructor(name:string,age:number,sex:string,cpf:string){
        this.name=name
        this.age=age
        this.sex=sex
        this._cpf=cpf
    }

    get cpf():string{
        return `CPF: ${this._cpf}`
    }

    set cpf(cpf:string){
        this._cpf=cpf
    }

}


const p1=new Pessoa('DAVI SILVA',19,'MASCULINO','040.554.741-50')
p1.cpf="123.455.789-50"
console.log(p1.cpf)
