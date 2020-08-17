let name = ['Abigail', 'Alexandra', 'Alison','Amanda', 'Angela', 'Bella','Carol', 'Caroline', 'Carolyn','Deirdre', 'Diana', 'Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope'];

const searchName = ( an, limit, callback ) => {
    let newName = name.filter( a => a.toLowerCase().includes(an.toLowerCase()))
    callback( newName, limit)
}

function callback(an, limit) {
    let result = an
    // console.log(result)
    result.splice(limit)
    console.log(result)
}

searchName("Carol",3, callback );
