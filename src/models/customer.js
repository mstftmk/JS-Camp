import User from "./user.js"

export default class Customer extends User{
    constructor(id,firstName,lastName,city,age,creditCardNumber){ //oluşturucu demek.
        super(id,firstName,lastName,city,age) //superin constructorını çalıştır demek. yani userın
        this.creditCardNumber = creditCardNumber
        //this demek şu class demek.
    }
}