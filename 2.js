let name = ['Abigail', 'Alexandra', 'Alison','Amanda', 'Angela', 'Bella','Carol', 'Caroline', 'Carolyn','Deirdre', 'Diana', 'Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope'];

const searchName = ( an, limit, callback ) => {
    let newName = name.filter( a => a.toLowerCase().includes(an))
    // console.log ((newName))
    return callback( newName, limit)
}

function callback (an, limit) {
    let result = an
    console.log(result)
    result.splice (limit)
    console.log(result)
}
searchName("an",2, callback );
