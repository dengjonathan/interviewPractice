const telephoneWords = digitString => {
  return digitString.length === 1
    ? letters[digitString[0]].map(e => e.toUpperCase())
    : letters[digitString[0]].reduce((memo, curr) => {
      let combos = telephoneWords(digitString.slice(1)).map(each => {
        return curr.toUpperCase() + each;
      });
      return  memo.concat(combos);
    },[]);
};

const letters = {
  '0': ['0'],
  '1': ['1'],
  '2': ['a','b','c'],
  '3': ['d','e','f'],
  '4': ['g','h','i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};


let a = telephoneWords('1123');
console.log(a);

// Jamie long's example
//
const telephoneWords = digits => [...digits].reduce(
  (words, next) => cProd(words, keypad[next]),
  ['']
);

const cProd = (ls, rs) =>
  concatMap(ls, l => rs.map(r => l + r));

const concatMap = (a, f) =>
  a.reduce((res, next) => [...res, ...f(next)], []);

const keypad = {
  0: ['0'],
  1: ['1'],
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z']
};