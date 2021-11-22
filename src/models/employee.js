import User from "./user.js"

export default class Employee extends User{
    constructor(id,firstName,lastName,city,age,salary){ //oluşturucu demek.
        super(id,firstName,lastName,city,age) //superin constructorını çalıştır demek. yani userın
        this.salary = salary
        //this demek şu class demek.
    }
}