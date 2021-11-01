function addToCart(quantity, productName = "Elma") { // elmayı default değer olarak verdik. Bişey verilmezse bunu ver. mantıken default değerli olan parametreleri sona yazmalıyız.
    console.log(productName + " Sepete Eklendi." + quantity + " adet.")
}

//addToCart("iPhone")
//addToCart() //bu undefined veriyo. yani bellekte bununla ilgili bişey oluşturmuyo ve öyle gönderiyor. default değer yok ise.
//addToCart("Yumurta", 10)

addToCart(10) //burada 10 sepete eklendi. undefined adet. verir. zira ilk parametreyi ilk yere koyar. Sırası ile.
//default değerleri sona yazarak, yukarıdaki hatayı elimine edebiliriz. zira tek değer verdik, default yerine saymadı.

//addToCart("Karpuz")
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello world")
} //sen onksiyonsun ve bunu yaparsın diyoruz. arrow func. değişken tanımladık ve sen bir fonsiyonsun dedik.
sayHello()

let sayHello2 = function () { //bu şekilde de func oluşturabiliriz.
    console.log("Hello world 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) { //ama böyle yapmamalıyız. parametreler kısmını. bunu düzeltmek için objeler oluştururuz.
//neden böyle yapmayız? mesela aşağıda çağırırken ilk parametre neydi hangisiydi diye düşünürüz.
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

function addToCart3(product){
    console.log("Ürün: "+product.productName)
    //bana bir veri gelecek bunun da productName i olacak diyoruz üstte.
    console.log("Adet: "+product.quantity)
    console.log("Fiyat: "+product.unitPrice)
}
let product1 =  {productName:"Elma", unitPrice: 10, quantity: 5} //obje tanımlıyoruz. obje notasyonu süslü parantez. bu bir obje ve içerisinde özellikler var.
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice: 10, quantity: 5}
let product3 = {productName:"Elma", unitPrice: 10, quantity: 5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName) //sonuç karpuz olur. Zira bu, referans tiptir. obje tipler referans tiptir. arrayler de öyle.

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1) //cevap 20. zira, burda ise değer tiptir. özellikle sayısal veriler(basit tipler), değer tiptir. referans tip değildir.
//sayı1 in değeri = sayi2nin değeri dedik ondan. sadece değer atadık. JAvada da pythonda da js de de böyle nerdeyse hepsinde.

function addToCart4(products) {
    console.log(products)
}
let products = [ //buradaki products ile bi üstteki products farklı. karıştırma. yukarıdakine x de diyebilirdik.
    {productName:"Elma", unitPrice: 10, quantity: 5}, //birinci obje
    {productName:"Armut", unitPrice: 10, quantity: 5}, //ikinci obje
    {productName:"Karpuz", unitPrice: 10, quantity: 5}
]
addToCart4(products) //yukarıdaki fonksiyona onun referansını gönderiyorsun demek.
//scope nedir? func da blok önemlidir. func da yazan concole.log(products) da products var mı bakar. yoksa bir üst scope a bakar. yani dışarı çıkıp bakar.

//REST operatörü
//resti her zaman fonksiyonun sonuna bırakın eğer sonda olmazsa, restten sonra bir parametre koyarsak kabul etmez. zira ilk rest i verdik ve verdiği tüm parametreleri üstüne aldı.
// başka parametre varsa onu başa yaz. ilk değeri o alsın, geri kalanı da rest alsın.
function add(...numbers) { //birden çok parametre alabilir ama net sayıyı bilmiyoruz. bunarest operatörü diyoruz "..."
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add(20,30) //array olarak döndürüyor. toplamada for döngüsü yapabiliriz demek.
add(20,30,40) //rest, burdaki parametreyi array yapıp döndürüyor.
add(20,30,40,50)

let numbers = [30,10,500,600,120]
console.log(...numbers) //arrayden çıkarttı burada

//react
let [icAnadolu,marmara] = ["İç Anadolu", "Marmara", "Karadeniz"] //let sonrası parantez kullanmamız gerek yoksa undefined olur.
//3 adet değişken tanımlamamıza gerek yok js çalıştırır.
console.log(marmara)

let [icAnadolu2,marmara2, karadeniz2, [icAnadolu2Sehirleri,marmara2Sehirleri,karadeniz2Sehirleri]] = [
    {name: "İç Anadolu", population:"20M"},
    {name: "Marmara", population:"30M"},
    {name: "Karadeniz", population:"10M"},
    [ //buradaki değerleri, oluşturduğumuz değişken isimlerine sırayla veriyor o yüzden bir array verip onun içinde sırayla verdi.
        //javascriptin güzel özelliklerinden birisi
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
console.log(icAnadolu2.population)
console.log(marmara2.name)
console.log(icAnadolu2Sehirleri)

let product5 = {productName:"Elma", unitPrice: 10, quantity: 5}
//objenin de elemanlarını değişkenlere atamak istiyoruz.
console.log(product5)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName:"Elma", unitPrice: 10, quantity: 5}) //parantez kullanıyoruz çünkü sen bir kod bloğu değilsin demek için.

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)