function spinWords(string) {
  let array = string.split(' ')
  let newArray = []
  array.forEach((e) => {
    if (e.length >= 5) {
      res = e.split('').reverse().join('')
      newArray.push(res)
    } 
    else
    newArray.push(e)
  })
  return newArray.join(' ')
}

spinWords("Hey fellow warriors")