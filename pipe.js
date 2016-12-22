const _ = require('underscore');

const add1 = num => num + 1;

const multiply5 = num => num * 5;

var both = x => {
  return _.chain(x)
    .map(add1)
    .value();
}

console.log(both(5));
