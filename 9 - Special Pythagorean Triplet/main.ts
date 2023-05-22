function specialPythagoreanTriplet(n: number): number {
  for (let a: number = 1; a < n; a++) {
    for (let b: number = a + 1; b < n; b++) {
      let c: number = n - a - b;
      if (a * a + b * b == c * c) {
        return a * b * c;
      }
    }
  }
  return -1;
}

specialPythagoreanTriplet(1000);
