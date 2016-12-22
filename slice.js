// Use Array.slice() to clone an array.

// Example:
let x = [1, 2, 3];
let y = x;

console.log(x === y); // --> true

y = x.slice();
console.log(y); // [1, 2, 3]
console.log(x === y); // --> false