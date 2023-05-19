function primeSummation(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
