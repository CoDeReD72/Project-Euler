// Solution 1

function nthPrime(n) {
  let primes = [2];

  let i = 3;

  while (primes.length < n) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }

  return primes[primes.length - 1];
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(nthPrime(6));

// Solution 2

function nthPrime(n) {
  let primes = [2];

  let i = 3;

  while (primes.length < n) {
      if (compareToPrimes(primes, i)) {
        primes.push(i);
      }
      i+=2;
    }

  return primes[primes.length - 1];
}

function compareToPrimes(primes, n) {
  for (let i = 0; i < primes.length; i++) {
    if (n % primes[i] == 0) {
      return false;
    }
  }
  return true;
}
