console.log('hello');

const bind = (func, context, ...args) => (...innerArgs) =>
  func.call(context, ...args, ...innerArgs);

Function.prototype.bind = function(...args) {
   return bind(this, ...args);
}

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'diet');
console.log(boundFunc);
console.log('hello');
console.log(boundFunc('coke')); //=> 'dietcoke'

  var func = function(arg1){ return arg1 };
    var context = null;
    var boundFunc = func.bind(context, "foobar");
    var result = boundFunc();

    console.log(result);