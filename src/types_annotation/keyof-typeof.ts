type Cores=typeof rgb
type cor= keyof Cores
const rgb={
    vermelho:"red",
    green:"green",
    azul:"blue"
}

function translateRGB(cor:cor,cores:Cores):string{
    return cores[cor]
}

console.log(translateRGB('vermelho',rgb))
