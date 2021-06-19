export abstract class Personagem{
    protected nome:string
    protected ataque:number
    protected vida:number
    protected poder:string
    constructor(nome:string,ataque:number,vida:number,poder:string){
        this.nome=nome
        this.ataque=ataque
        this.vida=vida
        this.poder=poder
    }
    public atacar(personagem:Personagem):void{
        this.bordao(`${'\u{1F620}'} - ${this.poder}`)
        console.log(`O ${this.nome} está atacando o ${personagem.nome}.`)
        personagem.perderVida(this.ataque)
    }
    public perderVida(forca:number):void{
        this.vida-=forca
        console.log(`${this.nome} está sofrendo ataque de ${forca}.`)
        console.log(`A vida de ${this.nome} agora é ${this.vida}.`)
    }
    abstract bordao(msg:string):void
}

export class Heroi extends Personagem{
    bordao(msg:string):void{
        console.log(msg)
    }
}
export class Inimigo extends Personagem{
    // `${'\u{1F608}'} - Haaaaaaaaaaaaaaa`
    bordao(msg:string):void{
        console.log(msg)
    }
}

const goku=new Heroi('Goku',200,4000,'KAMEHAMEHA')
const broly=new Inimigo('Broly',450,10000,'MEGA EXPLOSIÓN')

goku.atacar(broly)
goku.atacar(broly)
goku.atacar(broly)
