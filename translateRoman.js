const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral (romanNumeral) {
  if (romanNumeral === '') {
    return 0;
  }
  if (!isValid(romanNumeral)) {
    return 'null';
  }
  const digits = romanNumeral.split('')
    .map(roman => DIGIT_VALUES[roman]);
  console.log(digits);
  const predecessors = findPredecessors(digits);
  return convertToNegatives(digits, predecessors)
    .reduce((memo, curr) => memo + curr);
}

const isValid = (roman) => {
  return roman.split('').reduce((_, numeral) => {
    if (DIGIT_VALUES[numeral] === undefined) {
      return false;
    }
    return true;
  }, true);
};

// return all indexes where I precedes another digit
const findPredecessors = digits => {
  return digits.reduce((memo, digit, index, digits) =>  {
    const precedes = isATen(digit) && digits[index + 1] && digit < digits[index + 1];
    return precedes ? memo.concat([index]) : memo;
  },[]);
};

const isATen = digit => {
  return digit / 10 % 10 === 0 || digit / 10 === 1 || digit / 10 === 0.1;
}

const baseTen = number => {
  let ten = 1;
  while (number > ten * 10) {
    ten *= 10;
  }
  return ten;
};

//convert case where I precedes into value;
const convertToNegatives = (digits, indices) => {
  return digits.map((digit, index) => {
    if (indices.indexOf(index) > - 1) {
      digit = -1 * baseTen(digits[index + 1]);
    }
    return digit;
  });
};

let a = findPredecessors([1, 5])
console.log(isATen(50));
console.log(translateRomanNumeral('XV'));
