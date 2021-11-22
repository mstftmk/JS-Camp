let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150}
]
console.log("<ul>")

cart.map(product=>{
    console.log("<li>"+product.productName + " : " 
    +product.unitPrice*product.quantity+"</li>")
}) //cart ı dolaş, her ürün için bu hareketi yap diyoruz.

console.log("</ul>")

let quantityOver2 = cart.filter(product=>product.quantity>2) //sepeti filtreler, adedi 2den fazla ise onu yeni bir array içine at diyoruz.
console.log(quantityOver2)

let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity, 0) //acc: accumulator demek. her bir ürün için yapıyoruz. sondaki acc in ilk değerini gösteriyor.
console.log(total)

//BURASI FARKLI---------

//SPA: single page application.
cart.push({id:cart.length+1, productName:"Ruhsat", quantity:1, unitPrice:20})
//bellekteki yeri değiştirmiyoruz yukarıdaki arrayin. ama es6 push edince sayfayı yeniliyor. normalde yenilemek için 
// referans değişmesi gerekiyordu. burada ref değişmiyor ama ekran da güncelleniyor.

//peki referansı değiştirmek için örnek yapalım:
function addToCart(sepet) {
    sepet.push({id:cart.length+1, productName:"Lego", quantity:1, unitPrice:2000})
}
addToCart(cart)
console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}
//bu neden? zira 10 değerine number'ı atadık ve sayı ile alakamız kalmadı. ama sayı 10 sayıyı değiştirmez.
//22:22

sayiTopla(sayi)
console.log(sayi)