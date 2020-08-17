const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
.then(result => result.json())
.then(json => {
    json.map(e=>{
    let {name}=e
    console.log(name)
    })
})
