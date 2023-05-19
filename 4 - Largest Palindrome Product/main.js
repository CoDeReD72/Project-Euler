function largestPalindromeProduct(n) {
  let upperBound = Math.pow(10, n); // Set the upper bound for the numbers to consider
  let largestPalindrome = 0; // Variable to store the largest palindrome product

  for (let i = 1; i < upperBound; i++) {
    for (let j = 1; j <= i; j++) {
      let product = i * j; // Calculate the product of the two factors

      // Check if the product is a palindrome and greater than the largest palindrome found so far
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product; // Update the largest palindrome product
      }
    }
  }

  return largestPalindrome; // Return the largest palindrome product
}

function isPalindrome(n) {
  const str = n.toString(); // Convert the number to a string
  const length = str.length; // Get the length of the string

  for (let i = 0; i < length / 2; i++) {
    // Compare characters from both ends of the string
    if (str[i] !== str[length - 1 - i]) {
      return false; // If a mismatch is found, it's not a palindrome
    }
  }

  return true; // If the loop completes without finding a mismatch, it's a palindrome
}

console.log(largestPalindromeProduct(3)); // Output the largest palindrome product of two 3-digit numbers
