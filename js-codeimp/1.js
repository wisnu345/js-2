//deteksi palindrom

const check = (text) => {
    if (typeof text !== 'string') {
        console.log('text harus berisi string')
    } else {
        let reverse = ""
        for (i=text.length-1; i >= 0; i-- ){
            reverse += text[i];
        }
        if (text === reverse){
            console.log ("Palindrom");
        } else {
            console.log ("Bukan palindrom")
        }
        
    }
}

check('makam')