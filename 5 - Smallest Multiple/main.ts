//LCM of two numbers
function lcm(a : number, b : number) : number {
  return (a * b) / gcd(a, b);
}

//GCD of two numbers
function gcd(a : number, b : number)  : number{
  if (b === 0) return a;
  return gcd(b, a % b);
}

function smallestMult(n : number) : number{
  let maxLCM : number = 1;

  //Getting the LCM in the range
  for (let i = 2; i <= n; i++) {
    maxLCM = lcm(maxLCM, i);
  }
  return maxLCM;
}
