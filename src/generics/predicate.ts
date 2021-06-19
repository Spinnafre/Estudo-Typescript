function isString(v:unknown):v is string{
    return typeof v === 'string'
}
function showMessage(v:unknown){
    // Como a checagem se é ou não string está
    // feora do escopo do showMessage, então o typescript
    // não irá entender que se isString for true o v irá
    // ser uma string, pois a função isString irá retornar
    // só um boolean. Para o Typescript entender que função
    // isString é true significando que v é uma string, é só usar o
    // v is string, fazendo que o typescript entender que se a condição
    // for verdadeira (typeof v === 'string') o v irá ser string.
    if(isString(v)){
        console.log(`Atenção, v é do tipo String`)
        console.log('STRING LENGTH: '+v.length)
    }
}

showMessage('OLÁ')


function isString2(v:unknown):boolean{
    return typeof v === 'string'
}
function showMessage2(v:unknown){
    // Nesse caso o typescript irá entender
    // que o v será uma string e con isso consigo
    // usar métodos da string.
    if(typeof v === 'string'){
        console.log(`Atenção, v é do tipo String`)
        console.log('STRING LENGTH: '+v.length)
    }
}
showMessage2('OLÁ 2')
