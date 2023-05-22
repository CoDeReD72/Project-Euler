function squareOfSum(n : number) : number {
  let sum : number = 0;
  for (let i : number  = 1; i <= n; i++) {
    sum += i;
  }
  return sum ** 2;
}

function sumOfSquares(n : number) : number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }
  return sum;
}

function sumSquareDifference(n : number) : number {
  return squareOfSum(n) - sumOfSquares(n);
}

sumSquareDifference(100);
