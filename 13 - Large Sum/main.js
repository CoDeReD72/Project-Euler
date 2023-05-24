function largeSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }

  let strSum = sum.toString().split("e")[0];

  return 1e9 * strSum.slice(0, 11);
}

const testNums = [
  "37107287533902102798797998220837590246510135740250",
  "46376937677490009712648124896970078050417018260538",
];

console.log(largeSum(testNums));
