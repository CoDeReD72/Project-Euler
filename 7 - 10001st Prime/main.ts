function nthPrime(n : number) {
  let primes : number[] = [2];

  let i : number = 3;

  while (primes.length < n) {
      if (compareToPrimes(primes, i)) {
        primes.push(i);
      }
      i+=2;
    }

  return primes[primes.length - 1];
}

function compareToPrimes(primes : number[], n : number) : boolean {
  for (let i : number = 0; i < primes.length; i++) {
    if (n % primes[i] == 0) {
      return false;
    }
  }
  return true;
}
