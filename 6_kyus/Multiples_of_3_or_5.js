function solution(number) {
  let numbersArray = []
  let res = 0
    for (i = 0; i < number; i++) {
      numbersArray.push(i)
    }
  
  console.log(numbersArray)

  numbersArray.forEach(e => {
    if (e < number) {
      if (e != 0 && e % 3 === 0 || e != 0 && e % 5 === 0) {
        res += e
      }
    }
  })


  console.log(res)
}


solution(23)