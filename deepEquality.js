const sameProps = (a, b) => {
  for (let i in a) {
    if (!b.hasOwnProperty(i)) return false;
    if (Array.isArray(a[i]) !== Array.isArray(b[i])) return false;
    if (typeof a[i] !== 'object' && a[i] !== b[i]) return false;
  }
  return true;
}

deepEquals = function (a, b) {
  if (a === b) return true;
  if (!sameProps(a, b) || !sameProps(b, a)) return false;

  return Object.keys(a)
    .every(key => deepEquals(a[key], b[key]));
};

var a = {
  foo: [2, {
    bar: {}
  }]
}
var b = {
  foo: [2, {
    bar: []
  }]
}

console.log(deepEquals(a, b));