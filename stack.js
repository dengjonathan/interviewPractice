/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const node = {
      val: x,
      min: this.min
  };
  this.stack.push(node);
  if (this.min > x || this.min === null) {
      this.min = x;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const node = this.stack.pop();
    this.min = node.min;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */