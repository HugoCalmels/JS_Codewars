function alternateCase(s) {
  result = []
  s.split('').forEach(el => {
    if (el == el.toUpperCase()) {
      result.push(el.toLowerCase())
    } else { 
    result.push(el.toUpperCase())
    }
  })
  return result.join('')
}

console.log(alternateCase("Hello World"))