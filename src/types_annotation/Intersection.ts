// Unir mais de um tipo

type Nome={name:string}
type Sobrenome={second_name:string}
type Idade={age:number}

type People=Nome & Sobrenome & Idade

const people: People={
    name:'DAVI',
    age:19,
    second_name:'SILVA'
}

console.log(people)
