//Mais de um tipo
export function add(x:number | string,y:number| string){
    if(typeof x === 'number' && typeof y ==='number')return x + y
    return `${x} ${y}`

}

console.log(add('DAVI ','SILVA'))
