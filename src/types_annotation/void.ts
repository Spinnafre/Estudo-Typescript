function showNames(x:number,y:number):void{
    console.log('X + Y = ',x+y)
}

// console.log(showNames(10,40))

function noReturn(args: string[]):string{
    // console.log(args.join(', '))
    return args.join(' e ')
}

console.log(noReturn(['DAVI SILVA','MARIA PEREIRA']))

