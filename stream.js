const fs = require('fs');
const highland = require('highland');

highland(fs.createReadStream('customer.csv', 'utf8'))
  .split()
  .map(line => line.split(', '))
  .map(array => ({ name: array[0], orders: array[1] }))
  .filter(customer => customer.orders > 0)
  .map(customer => customer.name)
  .each(console.log);
// modelling data as streams allow us to do all these composition methods with simple functions
//
//
