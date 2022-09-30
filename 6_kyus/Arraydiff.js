function arrayDiff(a, b) {
  if (a.length === 0 || b.length === 0) {
    return a
  }

  let result = []

  for (index = 0; index < a.length; index++) {
    if (!b.includes(a[index]))
      result.push(a[index])
  }
  
  return result
}



console.log(arrayDiff([1,2,2,2,3],[2]))