console.log("Merhaba!")

//JS type safe değildir. Başta ne tanımladıysan öyle gideceksin değildir.

var dolarDun = 9.20 //mesela bu console.log dan sonra tanımlanmış olsaydı, undefined olarak gözükürdü sayfada
var dolarBugun = 9.30 //ya da var dolarDun yazıp yanına değer vermeseydik, yine undefined

let euroDun = 10.20
let euroBugun = 10.30

{
    let euroDun = 9.0 //bunu yazdırmak için bu block içinde log yapmamız lazımdı.
    var dolarDun = 8.90 //ama var burada global değişken gibi çalışıyor. Yani bundan sonra var ile değişken yazmıcaz.
}

console.log(euroDun)
console.log(dolarDun)

const sterlinDun = 11.2 //constant sadece read only'dir. değiştiremeyiz.
//sterlinDun = 11
console.log(sterlinDun)

//arrayler-diziler
//isimlendimelerde camelCasing yapıyoruz değişken tanımlamalarında.
//PascalCasing kelimelerin ilk harfleri büyük demek. Ama camelCase kullanıyoruz JSde.
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]
//let konutKredileri = [12, "Konut Kredisi", ["a","b","c"]] //böyle de olabilir. illa hepsi aynı tür olabilir değil
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    const kredi = konutKredileri[i]
    console.log("<li>"+kredi+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)