function foldTo(distance) {

  var result = 0
  for (var paperThickness = 0.001; distance >= paperThickness; distance /= 2) {
    result += 1
  }
  return result
}

console.log(foldTo(384000000))