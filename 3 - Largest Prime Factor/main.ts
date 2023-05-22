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

function largestPrimeFactor(n: number): number {
  let largestFactor: number = 2;

  for (let i: number = 2; i <= n; i++) {
    if (n % i == 0 && isPrime(i)) {
      largestFactor = i;
    }
  }

  return largestFactor;
}

largestPrimeFactor(600851475143);
