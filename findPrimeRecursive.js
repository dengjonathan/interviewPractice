function isPrime(n) {
  if (n < 2) {
    return false
  }  
  if (n === 2) {
    return true;
  }
  const isPrimeInner = (n, i=n-1) => {
    if (n % i === 0) {
      return false;
    }
    if (i === 2) {
      return true;
    }
    return isPrimeInner(n, i-1);
  }
  return isPrimeInner(n);
}

// optimize by looking just at square root

const isPrimeOptimize = n => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const expect = require('chai').expect;

expect(isPrime(13)).to.equal(true);
expect(isPrime(12)).to.equal(false);

expect(isPrimeOptimize(13)).to.equal(true);
expect(isPrimeOptimize(12)).to.equal(false);