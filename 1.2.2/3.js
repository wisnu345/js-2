function SeleksiNilai(firstNumber, lastNumber, typeArray) {
  if (typeof firstNumber !== "number" && typeof lastNumber !== "number") {
    `parameter a, dan b harus number`;
  } else {
    if (firstNumber < lastNumber) {
      if (typeArray.length > 5) {
        let filt = typeArray.filter((e) => e > firstNumber && e < lastNumber);
        console.log(filt.sort((a, b) => a - b));
      } else {
        console.log(`jumlah angka dalam dataArray tidak ada`);
      }
    } else {
      console.log(`nilai akhir harus lebih besar dari nilai awal`);
    }
  }
}

SeleksiNilai(3, 30, [2, 25, 4, 14]);

