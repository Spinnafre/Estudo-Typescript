type typeP={
    name:string,
    age:number,
    parents:string[]
}
const ps:typeP={
    name:'DAVI SILVA DA PENHA',
    age:19,
    parents:['MR S','MARY']
}


export function dinamicType(obj:typeof ps,key:keyof typeP):typeP[keyof typeP]{
    return obj[key]
}

export function identidy<T>(v:T):T{
    return v
}

console.log(identidy([1,2,'asd']))
