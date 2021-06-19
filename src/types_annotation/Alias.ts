type Pessoa={
    name:string,
    age:number,
    color?:string
}
type CMYK='Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type RGB='Vermelho' | 'Verde'|'Azul'
type favoriteColor=CMYK | RGB

let pessoa:Pessoa={
    name:'Davi Silva',
    age:19
}

function setColor(pessoa:Pessoa,c:favoriteColor):Pessoa{
    return {...pessoa,color:c}
}

console.log(setColor(pessoa,'Azul'))

export default 1




