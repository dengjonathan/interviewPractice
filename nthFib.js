const nthFibonacci = function (n) {
  return n < 1 ?
    0 : [...Array(n - 1).keys()].reduce((acc, n) => {
      return {
        total: acc.total + acc.pregnant,
        pregnant: acc.total
      }
    }, {
      total: 1,
      pregnant: 0
    })['total'];
};

console.log(nthFibonacci(0));
console.log(nthFibonacci(1)) // 1
console.log(nthFibonacci(2));
console.log(nthFibonacci(4)) //3
console.log(nthFibonacci(5)) //5