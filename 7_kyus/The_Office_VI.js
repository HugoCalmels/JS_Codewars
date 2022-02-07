function sabb(s, val, happiness){

  let count = 0
  let test = s.split(' ')
  let sCount = 0

  for (i = 0; test.length > i; i++) {
    console.log('loop')
    if (test[i].includes("sabbatical")) {
      count += ('sabbatical'.split('').length)
    }
    if (test[i] === 'I') {
      sCount += 1
    }
  }

  if (sCount === 3) count += sCount

  let total = 0
  total = count + val + happiness

  if (total > 22) return 'Sabbatical! Boom!'
  else return 'Back to your desk, boy.'
  
}


console.log(sabb('Can I sabbatical sabbatical I have a I sabbatical?', 5, 5))