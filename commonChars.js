const shorter = (a, b) => (a.length <= b.length ? a : b);

const commonCharacters = function (string1, string2) {
  const short = shorter(string1, string2);
  const long = short === string1 ? string2 : string1;
  const set = [...short]
    .reduce((memo, curr) => {
      if (long.indexOf(curr) > -1) memo.add(curr);
      return memo;
    }, new Set())
  return Array.from(set).join('').replace(/\s/g, '');
};


console.log(commonCharacters('abczz', 'aabcde'))
console.log('all done')