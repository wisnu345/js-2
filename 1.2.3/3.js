// 1
let avenger = member => new Promise ((resolve, reject) => {
    let a = ['Spider Man','Iron Man','Hulk','Captain America','Thor']
    let cek = a.find (e => e === member)
    if (cek) {
        resolve (member)
    } reject (new Error(member))
})
.then ( f => console.log(`${f} adalah hero dari Avengers`))
.catch ( f => console.log(`${f.message} bukan Hero dari Avengers`))

avenger('Batman')

// 2

let cekUser = (username,password) => {
    return new Promise ((resolve,reject) => {
        let listUser = ['a','b','c','d']
        let listPwd = [1,2,3,4]
        cek = null
        if(listUser.find(e => e === username) && listPwd.find(e => e === password)){
            cek = true
        }
        if (cek){
            resolve ('Autentikasi Berhasil !')
        } reject ('Autentikasi Gagal')
    })
} 

let autentikasiUser = async(a,b) => {
    try {
        result = await cekUser(a,b)
        console.log (result)
    } catch (error){
        console.log(error)
    }
}

autentikasiUser('a',3)