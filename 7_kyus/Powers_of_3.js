// Given a positive integer N, return the largest integer k such that 3^k < N.

function largestPower(n) {
  k = 0
  while (Math.pow(3, k) < n) {
    k += 1
  }
  return k - 1
}


