//reverse words
const words = `Saya Belajar Javascript`

const reverseWords = () => {
    if (typeof words !== 'string') {
        console.log(`kalimat harus diisi string`)
    } else {
        let x = words.split(" ").reverse().join(" ")
        console.log (x)
    }
}

reverseWords()