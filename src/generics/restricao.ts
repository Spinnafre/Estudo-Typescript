type typeOBJ={name:string,games:Array<string>}
// Não precisa passar o arqumento, o próprio type irá entender
// Com o extends eu restringo o tipo
type typeOBJ2=<O,K extends keyof O>(obj:O,Key:K)=>O[K]
// Quando for usar o typeOBJ terá que informar o argumento typeOBJ3<string,number>
type typeOBJ3<O,K extends keyof O>=(obj:O,Key:K)=>O[K]
// key só poderá ser name ou games
export function obterChaveValor(obj:typeOBJ,key:keyof typeOBJ):Array<string> | string{
    return obj[key]
}
export function obterChaveValor2(obj:typeOBJ,key:keyof typeOBJ):Array<string> | string{
    return obj[key]
}
export const obterChaveValor3:typeOBJ2=(obj,Key)=>{
    return obj[Key]
}


console.log(obterChaveValor3({name:'Davi Silva',games:['GTA V','PES 2010']},'games'))
