function divisibleTriangleNumber(n) {
    let number = 1; // First triangular number
    let index = 2; // Index of next triangular number
  
    while (countDivisors(number) <= n) {
      number += index; // Increase number by next index
      index++;
    }
  
    return number;
  }

  // Function to count divisors of a number
  // Compare this snippet from 5 - Smallest Multiple/main.js:
  
  function countDivisors(n) {
    let count = 0;
    let sqrt = Math.floor(Math.sqrt(n)); 
  
    for (let i = 1; i <= sqrt; i++) {
      if (n % i == 0) {
        count += 2; // Increase count for both factors: i and n/i
      }
    }
  
    // If n is a perfect square, subtract one divisor
    if (sqrt * sqrt === n) {
      count--;
    }
  
    return count;
  }