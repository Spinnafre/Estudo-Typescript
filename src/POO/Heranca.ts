export class Pessoa{
    // Definindo os modificadores de acesso
    public name:string
    public age:number
    public sex:string
    private cpf:string
    constructor(name:string,age:number,sex:string,cpf:string){
        this.name=name
        this.age=age
        this.sex=sex
        this.cpf=cpf
    }

    public getInfo():string{
        return `Name: ${this.name} \n Sex: ${this.sex} \n Age: ${this.age} \n ${this.cpf}`
    }
    public getCpf():string{
        return `CPF: ${this.cpf}`
    }
}

export class Students extends Pessoa{
    private degree:string
    private room:string
    // Posso também criar os atributos diretamente do construtor sem
    // ter que ficar registrando cada um usando o this
    constructor(name:string,age:number,sex:string,cpf:string,degree:string,room:string) {
        super(name,age,sex,cpf)
        this.degree=degree
        this.room=room
    }
    public getStudentInfo():string{
        const peopleInfo=super.getInfo()
        return peopleInfo+`\nDegree: ${this.degree} \n Room: ${this.room}`
    }
}


const student1=new Students('Davi Silva da Penha',19,'Masculino','072.512.789-20','Graduação','A10')
const student2=new Students('Jonh Nash',45,'Masculino','072.512.789-20','PHD','A14')

student1.getStudentInfo()
student2.getStudentInfo()
console.log('Student 1 -> ',student1)
console.log('Student 2 -> ',student2)
