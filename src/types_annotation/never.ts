// Função ou método nunca irá retornar algo

export function createError():never{
    throw new Error('My error')
}

