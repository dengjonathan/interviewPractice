function numberToEnglish (number) {
  if (numbersToWords.hasOwnProperty(number)) {
    return numbersToWords[number];
  }

  return number
    .toString()
    .split('')
    .reduce((memo, digit, index, digits) => {
      let place = digits.length - 1 - index;
      let tenBaseNum = parseInt(digit) * Math.pow(10, place);
      //FIXME: the numbersByPlace array doesn't have every single possible base 10 place in it
      let english = numbersToWords[tenBaseNum] && digit != '0'
        ? numbersToWords[tenBaseNum]
        : `${numbersToWords[+digit]} ${numbersByPlace[place]}`;
      return memo ? memo + ' ' + english : memo + english;
  }, '');
}

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

var numbersByPlace = (function() {
  let newArr = [''];
  for (var i in numbersToPlace) {
    newArr.push(numbersToPlace[i]);
  }
  return newArr;
})();

var a = numberToEnglish(17490);

console.log(a);
console.log(numbersByPlace)