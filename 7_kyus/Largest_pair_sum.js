function largestPairSum (numbers) {
  var result = 0
  for (i = 1; i <= 2; i++) {
    var max = Math.max(...numbers)
    var index = numbers.indexOf(max)
    var test = parseInt((numbers.splice(index, 1)))
    console.log(test)
    result += test
  }
  return result
}


console.log(largestPairSum([-100,-29,-24,-19,19]))