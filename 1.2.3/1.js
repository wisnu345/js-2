const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["senin","selasa", "rabu", "kamis","jumat"]
            let cek = dataDay.find (item => item === day)
            if (cek){
                resolve(cek)
            }else {
                reject(new Error('bukan hari kerja'))
            }
        }, 3000);
    })
}

////then catch//
// cekHariKerja("senin")
// .then(result=>{
//     console.log(result)
// })
// .catch(err=> {
//     console.log(err.message)
// })

//constructor Promise menrima argument yang berupa fungsi yang menerima dua parameter yang biasa disebut dengan resolve dan reject 
//method/fungsi then dan catch masing-masing memilki fungsi untuk memngolah hasil sukses atau gagal

//////try catch//
const hasil = async(hari) => {
    try {
        result = await cekHariKerja(hari)
        console.log (result)
    } catch (er) {
        console.log(er.message)
    }
}

hasil('sabtu')

//penggunaan try dan catch untuk penanganan error pada program Javascript,  try memungkinkan untuk menentukan blok kode yang akan diuji untuk kesalahan ketika sedang dieksekusi,catch memungkinkan untuk menentukan blok kode yang akan dieksekusi jika kesalahan terjadi pada blok try