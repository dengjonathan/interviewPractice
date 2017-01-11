function findPrime(n) {
  if (n < 2) {
    return false
  }  
  if (n === 2) {
    return true;
  }
  const findPrimeInner = (n, i=n-1) => {
    if (n % i === 0) {
      return false;
    }
    if (i === 2) {
      return true;
    }
    return findPrimeInner(n, i-1);
  }
  return findPrimeInner(n);
}

const expect = require('chai').expect;

expect(findPrime(13)).to.equal(true);
expect(findPrime(12)).to.equal(false);