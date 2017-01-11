/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const sieve = createSieve(n);
    return sieve.filter(val => val).length;
};

const createSieve = n => {
    const sieve = [];
    sieve[0] = false;
    sieve[1] = false;
    for (let i=2; i < n; i++) {
        sieve[i] = true;
    }
    for (let j = 2; j < sieve.length; j++) {
      if (sieve[j]) {
          for (let k = 2 * j; k < sieve.length; k += j) {
              sieve[k] = false;
          }
      }  
    }
    return sieve;
};