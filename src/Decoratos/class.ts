//Decorador é chamado na criação da classe People
// É chamado no tempo de execução do arquivo
// Decorator Factory -> Retorna uma função que irá ser executada
export function log (url:string,port:number,method:string){
    return (target:any)=>{
        return class extends target{
            url:string
            port:number
            method:string
            constructor(){
                super()
                this.url=url
                this.port=port
                this.method=method
            }
            getApiInfo():string{
                return `${this.url}-${this.port}-${this.method}`
            }
        }
    }
}
@log('http://localhost:3333',8080,'GET')
class Api{}
// console.log(new Api().getApiInfo())

// Recebe o protótipo da classe e não a instância
function analyse(protype:any,key:any){
    console.log('Property Decorator -> ','Target : ',protype,' key: ',key)
    const newKey=`_${key}`
    Object.defineProperty(protype,key,{
        get(){
            console.log('get -> ',this[newKey])
        },
        set(newV){
            this[newKey]=newV
            console.log('set -> ',this[newKey])
        },
        enumerable:true,
        configurable:true
    })
}

