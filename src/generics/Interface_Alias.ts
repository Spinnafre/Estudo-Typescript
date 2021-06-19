type Person<S,N>={
    name:S,
    age:N,
    sex:S
}
const person:Person<string,number>={
    name:'Davi',
    age:19,
    sex:'Male'
}

console.log(person)
