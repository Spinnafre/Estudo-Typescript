function mapStrings(strings:string[],callback:(el:string)=>string){
    let newArray:string[]=[]

    strings.forEach((el:string):void => {
        let formated:string=callback(el)
        newArray.push(formated)
    });
    return newArray
}

const newStrings=mapStrings(['a','b','c'],function(element:string){
    return element.toUpperCase()
})

console.log(newStrings)
