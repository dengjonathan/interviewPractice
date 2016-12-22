console.log(primeTester(8828119010022395000)); // true

function primeTester(n) {
  let primes = [];
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
  return primeTester(n - 1);
}

// var lowers = Array.from(new Array(n - 1), (x, i) => i + 2);
// //if n % number === 0, then not prime
// return !lowers.some(each => n % each === 0 && n !== each);
// if (!Number.isInteger(n)) {
//   return false;
// }

// each recursive call should know return some list of primes
1
3
5
7
11
13
