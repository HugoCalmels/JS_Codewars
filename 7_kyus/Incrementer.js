function incrementer(nums) { 
  let result = []
  nums.map(function (el, index) {
    index += 1
    let subResult = el + index
    if (subResult >= 10) {
      let multipleOfTen = subResult.toString().split('')
      subResult = parseInt(multipleOfTen[1])
    }
    result.push(subResult)
  });
  console.log(result)
}


console.log(incrementer([3, 6, 9, 8, 9]))