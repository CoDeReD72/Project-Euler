function primeSummation(n: number): number {
  let sum: number = 0;

  for (let i: number = 0; i < n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

export function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }

  for (let i: number = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
