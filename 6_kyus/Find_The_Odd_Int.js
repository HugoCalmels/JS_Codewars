function findOdd(A) { 
  var res = 0
  A.forEach((e) => {
    var countOccurencesInt = 0;
    A.forEach((z) => {
      if (z === e) 
        countOccurencesInt++;
    })
    console.log('====================')
    console.log(e)
    console.log(countOccurencesInt)
    if (countOccurencesInt % 2 !== 0) {
      console.log('alo?')
      res = e
    }
  })
  return res
}

console.log(findOdd([0,1,0,1,0]))