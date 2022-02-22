function findSquares(x, y) {
  let totalRectangles = 0
  // checking if there is squares of 1x1
  const area = x * y

  valueForX = 1
  valueForY = 1


  let squareAreaCheck = 1
  for (i = 0; i < area; i++) {

    let countedRectangles = area / (valueForX * valueForY)
    totalRectangles += countedRectangles

    squareAreaCheck = valueForX * valueForY

    console.log(`counting type of squares ${squareAreaCheck} area`)
    console.log(`counted rectangles : ${countedRectangles}`)
    console.log(`total rectangles : ${totalRectangles}`)
    console.log(`current index index ${i}`)
    console.log('--------------------')
    valueForX += 1
    valueForY += 1

    // loop 2 should be checking 2x2 squares 
  }
  const rects = x * y
  
  console.log(totalRectangles)

  // checking if there is squares of 2x2
  
  
  // result 

}



console.log(findSquares(4,3))