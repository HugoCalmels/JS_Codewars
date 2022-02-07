function bump(x){
  bumpCount = 0;

  for (let i = 0; x.split('').length > i; i++){
    console.log("index is : " + i);
    console.log("letter is : " + x.split('')[i])
    if (x.split('')[i] === 'n') bumpCount += 1
  }

  console.log(bumpCount)

  if (bumpCount > 15)
    return "Car Dead"
  else
    return "Woohoo!"
}


console.log(bump("__n_n_nnnn__nnn_______n__nnn_nn"))