/* eslint-disable*/
// Tipe Annotation
let nome:string='Davi'
let idade:number=0b100 //10,12.2,0xf00d,0o7744...
let isStudent:boolean=false
// let big:bigint=10n

// Arrays

let users : Array<number>=[1,2,3,4,5,6,7,8,9,10]
let users2 : number[]=[1,2,3,4,5,6,7,8,9,10]
let strings:Array<string>=['Davi','Paulo','Jonh']
let strings2:string[]=['Davi','Paulo','Jonh']


// Objetos

let p:{name:string,age:number,adult?:boolean}={
    name:'Davi',
    age:10
}

// Funções
function add(x:number,y:number):number{
    return x+y
}

const soma2:(x:number,y:number)=>number=(x,y)=>x+y



function addUser(name:string,age:number):string{
    return `Name: ${name}, Age: ${age}`
}

console.log(addUser('Davi Silva da Penha',12))

