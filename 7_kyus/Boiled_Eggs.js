function cookingTime(eggs) {
  let eggsPerPot = 8
  let totalMinutes = 0
  let minutes = 5
  if (eggs === 0)
    return 0
  if (eggs <= 8)
    return 5
  while (eggs > eggsPerPot) {
    console.log()
    eggsPerPot += 8
    minutes += 5
    totalMinutes = minutes
  }
  return totalMinutes
}


console.log(cookingTime(16))