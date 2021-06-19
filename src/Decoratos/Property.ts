function decorator(prototype:any,key:string){
    let newVariable:any
    return {
        get:()=>{
            return newVariable
        },
        set:(newValue:any)=>{
            console.log('Decorator ',newValue)
            newVariable=newValue.split('').reverse().join('')
            return
        }
    }
}
// export class OnePeople{
//     @decorator
//     public name:string
//     constructor(name:string){
//         this.name=name
//     }
//     showInfo():void{
//         console.log('My name is: '+this.name)
//     }
// }
// let p1=new OnePeople('DAVI')
// p1.showInfo()
