const fetch = require('node-fetch');
const express = require('express')
const app = express()
const port = 3000
// let url = 'https://jsonplaceholder.typicode.com/users'
// let set = {method: "Get"}

app.get('/', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
        .then(resp => {
            res.send(resp.map(e => e.name))
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// fetch('https://jsonplaceholder.typicode.com/users')

// .then(result => result.json())
// .then(json => {
//     json.map(e=>{
//     let {name}=e
//     console.log(name)
//     })
// })
