export class Pessoa{
    // Definindo os modificadores de acesso
    public name:string
    public age:number
    public sex:string
    private _cpf:string

    static altura="0.00"
    static peso:"0.00"
    constructor(name:string,age:number,sex:string,cpf:string){
        this.name=name
        this.age=age
        this.sex=sex
        this._cpf=cpf
    }


    static createInstance(name:string,age:number,sex:string,cpf:string):Pessoa{
        return new Pessoa(name,age,sex,cpf)
    }

}


const p1=new Pessoa('DAVI SILVA',19,'MASCULINO','040.554.741-50')
const p2=Pessoa.createInstance('JONH LENNON',50,'MASCULINO','000.000.000-50')
console.log(p2)

