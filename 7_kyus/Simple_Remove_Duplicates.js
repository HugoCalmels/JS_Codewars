function solve(arr) {
  console.log(arr)
  var result = []
  new Set(arr).forEach(el => {
    console.log(el)
    result.push(el)
  })
  return result
  
}

console.log(solve([3,4,4,3,6,3]))