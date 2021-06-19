//Criar um componente que pode funcionar em vários tipos, em vez de em um único.
// Ou seja, criar um componente genérico que possa ser reutilizável

//Tipo simples
type typeCallback<C>=(v:C,index?:number,array?:C[])=>boolean

export function myFilter<T>(array:T[],callback:typeCallback<T>):T[]{
    const newArray=[]
    for(let i=0;i<array.length;i++){
        if(callback(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray
}
const arrayOriginal=[1,2,3,4,5,6,7,8,9,10,11,12]
const newArray=myFilter(arrayOriginal,(v)=>v<5)

console.log(newArray)
