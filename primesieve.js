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

function genSieve(start = 2, end) {
  let sieve = [];
  for (var i = 2 * start; i <= end; i++) {
    sieve.push(i);
    i += start;
  }
  // find new start by finding first number in sieve that is not marked
  let newStart = ;
  return sieve.concat(genSieve(newStart, end));
}

function primeSieve(start, end) {
  // create an array from the start of the list
  let numbers = (Array.from(Array(end + 1 - start), (_, index) => index + start));

  // find first prime number
}

primeSieve(2, 6)
