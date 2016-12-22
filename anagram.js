// permutate('bc', a)
// permutate('ac', b)
// permutate('ab', c)

const permutate = (original, newStr) => {
  return original.split('')
    .reduce((total, letter) => total.concat(newStr + letter), []);
};

// changes the arguments to permutate to remove the letters already used
const leftovers = (original, str) => {
  return str.split('')
    .reduce((leftovers, letter) => {
      return leftovers.replace(letter, '');
    }, original);
}

const permutateArray = (original, combos) => {
  return combos.reduce((total, str) => {
    const left = leftovers(original, str);
    return total.concat(permutate(left, str))
  }, []);
};

const allAnagrams = (str, combos=[]) => {
  if (!combos.length) {
    return allAnagrams(str, permutate(str, ''));
  }
  if (combos[0].length === str.length) {
    return combos;
  }
  combos = permutateArray(str, combos);
  return Array.from(new Set(allAnagrams(str, combos)));
};


//console.log(permutateArray('abc', ['ab', 'ac']));
console.log(allAnagrams('apps'));
// console.log(allAnagramsS('apps'));
//console.log(leftovers('abc', 'a'));