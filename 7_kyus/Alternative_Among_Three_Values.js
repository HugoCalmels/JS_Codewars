// Suppose a variable x can have only three possible different values a, b and c,
// and you wish to assign to x the value other than its current one,
// and you wish your code to be independent of the values of a, b and c.
function f(x, cc) { 
  if (cc.a === x) {
    return cc.b
  } else if (cc.b === x) {
    return cc.c
  } else if (cc.c === x) {
    return cc.a
}
}


console.log(f( 5, { a:3, b:4, c:5 } ))