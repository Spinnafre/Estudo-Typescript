export class Database{
    private host:string
    private user:string
    private password:string

    private static database:Database

    // Não irá permitir criar uma instância fora da classe
    private constructor(host:string,user:string,password:string){
        this.host=host
        this.user=user
        this.password=password
    }
    static setDatabase(host:string,user:string,password:string):Database{
        if(!Database.database){
            console.log('CRIANDO DATABASE')
            Database.database=new Database(host,user,password)
            return Database.database
        }
        console.log('RETORNANDO DATABASE EXISTENTE')
        return Database.database
    }
    public connect():void{
       console.log(Database.database)
    }
}

const db=Database.setDatabase('localhost','root','1234')
const db1=Database.setDatabase('localhost','root','1234')
db.connect()
