type person={
    name?:string,
    age?:number,
    sex?:string
}
type student={
    name?:string,
    sex?:string,
    scholarity:string

}

// Irá remover do person o name
type PersonExclude=Exclude<keyof person,'name'>
// Transforma o person remover o ?, ou seja, gera uma nova tipagem com os campos obrigatórios
type PersonRequired=Required<person>
// Irá pegar a intersecção
type PersonExtract=Extract<keyof person,keyof student>
// Irá escolher um determinado tipo
type PersonPick=Pick<person,'name'>
// Transforma em readonly
type PersonReadOnly=Readonly<person>
