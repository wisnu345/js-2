//Date() untuk menampilkan tanggal dan waktu secara lengkap
let dt = Date()
console.log (dt);

//pop() mengambil array index terakhir dan mereturn kembali sebagai string
let sampleArr = ["Pineaple", "Banana", "Watermelon"]
// let pop = sampleArr.pop()
// console.log (pop)

//shift() mengambil elemen pertama array dan mereturn kembali sebagai string
// let shift = sampleArr.shift()
// console.log (shift);

//sort() mengurutkan elemen array
// let sorted=sampleArr.sort()
// console.log(sorted)

//splice(indexAwal, deletedIndex, newElement) fungsi yang bisa menghapus dan mengganti atau menambah suatu array
let removed = sampleArr.splice(2)
console.log (sampleArr)

//parseInt () untuk menghapus angka dibelakang koma
const sampleNumber = 23.8765
let parsin = parseInt(sampleNumber)
console.log(parsin)

//toFixed digunakan untuk membulatkan dan membatasi nilai dibelakang koma
let fixed = sampleNumber.toFixed()
console.log (fixed)

//toString digunakan untuk merubah tipe data menjadi string
console.log(sampleArr.toString())

//indexOf() berfungsi untuk menampilkan index data yang kita cari pertama kali
const sampleStr = "arkademy"
console.log (sampleStr.indexOf("a"))

//length fungsi yang mengembalikan jumlah karakter pada string 
console.log(sampleArr.length)
