function fiboEvenSum(n: number) {
  if (n <= 1) {
    return 0;
  } else {
    let evenSum: number = 0;
    let prevFibNum: number = 1;
    let fibNum: number = 2;
    for (let i = 2; fibNum <= n; i++) {
      if (fibNum % 2 === 0) {
        evenSum += fibNum;
      }
      [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    }
    return evenSum;
  }
}
