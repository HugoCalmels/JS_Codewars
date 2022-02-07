function duplicateElements(m, n) {
  for (i = 0; m.length > i; i++){
    for (z = 0; n.length > z; z++) {
      if (m[i] === n[z])
        return true
      else return false
    }
  }
}
   
console.log(duplicateElements([10, 2, 3, 4, 5], [1, 6, 7, 8, 9]))