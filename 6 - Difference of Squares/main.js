function squareOfSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum ** 2;
}

function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }
  return sum;
}

function sumSquareDifference(n) {
  return squareOfSum(n) - sumOfSquares(n);
}

sumSquareDifference(100);
