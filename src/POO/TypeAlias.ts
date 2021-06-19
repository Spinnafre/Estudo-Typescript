type TypeName={
    name:string
}
type TypeAge={
    age:number
}
type TypeSex={
    sex:string
}
type TypeFullInfo={
    fullInfo:()=>void
}
export class Pessoa implements TypeName,TypeAge,TypeSex,TypeFullInfo{
    constructor(public name:string,public age:number,public sex:string){

    }
    fullInfo(){
        console.log(`My name is ${this.name}, i have ${this.age} years old. I'm of the sex ${this.sex}`)
    }
}

const P1=new Pessoa('Davi Silva da Penha',19,'Masculino')
P1.fullInfo()
