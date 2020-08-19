//devidedandsort

let num = 5956560159466056

const devideAndSort = num => {
  if (typeof num !== 'number'){
    console.log('parameter bukan number')
  } else {
    const a = num.toString().split("0")
    let b = ''
    a.forEach(e=>b += e.split('').sort().join(''))
    return console.log(result = parseInt(b))
  }
}

devideAndSort(num)