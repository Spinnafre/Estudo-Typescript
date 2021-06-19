const objectA : { readonly name:string,age:number,sex?:string,[key:string]:unknown}={
    name:'Davi',
    age:19
}

console.log(objectA)


type MyType={
    id:number,
    name:string,
    age:number
}

const peoples:MyType[]=[{id:0,name:"Davi Silva da Penha",age:19},{id:1,name:"Mr X",age:9}]

