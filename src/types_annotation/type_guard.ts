type TypePessoa={
    _name:string,
    _age:number,
    getInfo():string
}
type Animal={
    raca:string,
    cor:string
}

type PessoaOrAnimal=Animal | TypePessoa

export class Pessoa implements TypePessoa{
    public _name:string
    public _age:number
    constructor(name:string,age:number){
        this._age=age
        this._name=name
    }
    getInfo():string{
        return `Olá, meu nome é ${this._name}, tenho ${this._age} anos.`
    }

}
const p1=new Pessoa('Davi Silva da Penha',19)
export function showInfo(obj:PessoaOrAnimal):void{
    // Verificando se uma chave existe no array

    // if('_name' in obj){
    //     console.log(obj.getInfo())
    // }else{
    //     console.log(obj.raca)
    // }

    // Checar se é instância de uma classe
    if(obj instanceof Pessoa){
        console.log(obj.getInfo())
    }

}

showInfo(p1)
