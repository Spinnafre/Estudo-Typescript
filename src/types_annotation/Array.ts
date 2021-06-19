// Array[T] ou T[]

function concatenaString(args:string[]):string{
    return args.reduce((ac,current)=>{
        return ac + current
    })
}

console.log(concatenaString(['a ',' b',' c']))
