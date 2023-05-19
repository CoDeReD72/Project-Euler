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
  
  function largestPrimeFactor(n) {
    let largestFactor = 2;
  
    for (let i = 2; i <= n; i++) {
      if (n % i === 0 && isPrime(i)) {
        largestFactor = i;
      }
    }
  
    return largestFactor;
  }
  
  largestPrimeFactor(600851475143)