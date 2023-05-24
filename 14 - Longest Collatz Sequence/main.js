function longestCollatzSequence(limit) {
  let length = 0, longestChain = 0, longestLength = 0;
  for (let i = Math.floor(limit / 2); i < limit; i++) {
    length = calculateSequenceLength(i);

    if (length > longestLength) {
      longestLength = length, longestChain = i;
    }
  }
  return longestChain;
}

function calculateSequenceLength(n) {
  let count = 0;
  let original = n;

  while (true) {
    if (n == 1) {
      break;
    } else if (n % 2 == 0) {
      n = n / 2;
      count++;
    } else {
      n = 3 * n + 1;
      count++;
    }
  }
  console.log(original, "-", count);
  return count;
}

longestCollatzSequence(46500);
