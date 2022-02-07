function cost (mins) { 
  if (mins <= 60)
    return 30
  if (mins > 60)
    var subResult = ((mins - 60) / 30)
  console.log(subResult)
  return (Math.round(subResult) *10 )+30
} 
  

console.log(cost(102))