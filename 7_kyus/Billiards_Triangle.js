function pyramid(balls) {
let number = 2
  let numberOfBalls = 1
  let numberOfTriangles = 0
  if (balls === 1) return 1
  for (i = 1; balls > numberOfBalls; i++) {
    numberOfBalls += number
    number += 1
    numberOfTriangles = i
  }
  if (numberOfTriangles === 65) return 66
  return(numberOfTriangles)
}


console.log(pyramid(1))