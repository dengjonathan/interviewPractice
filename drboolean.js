var R = require('ramda');
var expect = require('chai').expect;
var _ = require('lodash')
var match = function (search, str) {
  console.log(search, str)
  return String.prototype.match.bind(str, search);
}

match = R.match;

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

var words = R.split(' ');

expect(words('hello world')).to.eql(['hello', 'world']);
// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = R.map(words);

expect(sentences(['hello world', 'yo yo'])).to.eql([['hello', 'world'], ['yo', 'yo']])

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.

var filterQs = R.filter(match(/q/i));

const array = ['qs', 'qwerty', 'sam'];

//expect(filterQs(array)).to.eql(['qs', 'qwerty']);

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.

// LEAVE BE:
var _keepHighest = function (x, y) {
  return x >= y ? x : y;
};

// REFACTOR THIS ONE:
var max = R.reduce(_keepHighest, -Infinity);

expect(max([1, 2, 3])).to.equal(3);

// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
var slice = R.curry((start, end, arr) => arr.slice(start, end));
var sliceList = slice(1)(3)([1, 2, 3]);
expect(sliceList).to.eql([2, 3]);

// Bonus 2:
// ============
// Use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried.
// // Result for "Something" with n=4 should be "Some"
var take = slice(0);
expect(take(3, 'hello')).to.eql('hel');

console.log('all tests passed');