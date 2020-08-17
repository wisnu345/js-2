const getMonth = (callback) => {
    setTimeout(()=> {
        let error = true
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if (!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry data not found', []))
        }
    },4000)
}

const callback = (a,b) => {
    if (a === null ){
        const resultMap = b.map(e => console.log(e))
    } else {
        console.log(a.message)
    }
}

getMonth(callback)