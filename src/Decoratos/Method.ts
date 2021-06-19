function enumerable(newPassword: string) {
    // Target -> Protótipo da classe alvo
    //  PropertyKey -> Nome do método
    //propertyDescriptor -> Propriedades que definem propriedades do objeto: configurable, enumerable, value , writable,get e set.
  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    propertyDescriptor.value=(v:string)=>{
        console.log('Impresso no decorator -> ',v)
    }
  };
}

export class People {
  public name: string;
  public password:string
  constructor(name: string,password:string) {
    this.name = name;
    this.password=password
  }
  @enumerable('12345')
  changePassword(newPassword: string) {
    this.password=newPassword
  }
}
const p1=new People('DAVI','123')
p1.changePassword('gta')
// console.log(p1.password)
