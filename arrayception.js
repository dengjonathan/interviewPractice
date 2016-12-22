const arrayception = array => {
  if (!array.some(Array.isArray)) {
    return array.length ? 1 : 0;
  }
  let levels = array.filter(Array.isArray)
    .map(each => arrayception(each));
  let max = Math.max(...levels, 0) > 0 ? 1 + Math.max(...levels, 0) : 0;
  return !array.every(Array.isArray) && !max ? 1 : max;
}

console.log(arrayception([
  [
    [1]
  ]
]));

//console.log(Math.max(, false))
//console.log(1 * false);
