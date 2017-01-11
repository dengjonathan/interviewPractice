/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x); 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[0];
};

const expect = require('chai').expect;

const stack = new MinStack();

[1,2,3,4].forEach(stack.push.bind(stack));
expect(stack.getMin()).to.equal(1);
expect(stack.pop()).to.equal(4);
expect(stack.getMin()).to.equal(1);
expect(stack.pop()).to.equal(3);

expect(stack.top()).to.equal(2);
expect(stack.getMin()).to.equal(1);