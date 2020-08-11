
function SeleksiNilai (firstNumber,lastNumber,typeArray){
    if(typeof firstNumber !== 'number' && typeof lastNumber !== 'number') {
        `parameter a, dan b harus number`
    } else {
        if (firstNumber < lastNumber) {
            if (typeArray.length > 5) {
                let filt = typeArray.filter(e => e > firstNumber && e < lastNumber)
                filt.sort((a,b)=> a-b)
                console.log (filt)
            } else {
                console.log (`jumlah angka dalam dataArray tidak ada`)
            }
        } else {
            console.log (`nilai akhir harus lebih besar dari nilai awal`)
        }
    }
}


SeleksiNilai (3,30,[2,25,4,14,17,30,8]);