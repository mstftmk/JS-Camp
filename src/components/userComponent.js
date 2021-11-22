import BaseLogger, { MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component loaded.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Mustafa", "Tomak", "İzmir")
let user2 = new User(2, "Engin", "Demiroğ", "Ankara")
userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

//00:12 den devam et

//userService.getById(1)
//userService.list()

let customer = {id:1, firstName:"Mustafa"}
//buna prototyping deniypr. sonradan ekleyebiliyoruz böyle değişkenler.
customer.lastName = "Tomak"

console.log(customer.lastName)

console.log("-----------------------------------")
userService.load()


let customerToAdd = new Customer(1, "Seda", "Yılmaz", "Ankara", "adasd")
customerToAdd.type = "customer" //prototyping yaptık.
userService.add(customerToAdd)

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
