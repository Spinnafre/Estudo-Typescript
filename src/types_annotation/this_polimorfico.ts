// BUILDER
export class Calculator{
    private _number:number
    constructor(number:number){
        this._number=number
    }
    get number():number{
        return this._number
    }

    // Retorna o próprio objeto com o number alterado
    public add(n:number):this{
        this._number+=n
        return this
    }
    public sub(n:number):this{
        this._number-=n
        return this
    }
    public mul(n:number):this{
        this._number*=n
        return this
    }
    public div(n:number):this{
        this._number/=n
        return this
    }
}

const Calc=new Calculator(10)
// Calc.add(10).mul(2).sub(20).div(2)

// console.log(Calc.number)


export class Request{
    private method:'get'|'post'|null=null
    private url:string|null=null
    private data:Calculator | null=null

    // Tenho que especificar os métodos pois se colocar
    // só como string o ts não irá reconhecer pois
    // string pode ser qualquer coisa entre '' ou " " e como foi especificado
    // que no method só teria 2 valores e um nulo então sou obrigado a informar também
    // Nos parâmetros
    public setMethod(method:'get'|'post'):this{
        this.method=method
        return this
    }
    public setUrl(url:string):this{
        this.url=url
        return this
    }
    public send():this{
        console.log(`Enviando o dado: ${this.data?.number} para ${this.url}, método: ${this.method}`)
        const timeout=setTimeout(()=>{
            console.log(`Dado enviado com sucesso`)
            clearTimeout(timeout)
        },2000)
        return this
    }
}

const req=new Request()
req.setUrl('http://localhost:3333').setMethod('post').send()
