const largestProductOfThree = array => {
  let negatives = array.filter(num => num < 0);
  if (negatives.length > 1) {
    postives = negatives
      .sort((a, b) => a > b)
      .slice(0, 2)
      .map(x => -x);
    return Math.max(
      [Math.max(...array), ...positives].reduce((memo, curr) => memo * curr),
      array
      .sort((a, b) => a < b)
      .slice(0, 3)
      .reduce((memo, num) => memo * num)
    )
  }
  return array
    .sort((a, b) => a < b)
    .slice(0, 3)
    .reduce((memo, num) => memo * num)
};

console.log(largestProductOfThree([0, 2, 3]));

//find two most negative numbers and turn positive
// filter array to negative
// if there's more than 2, sort, slice of two lowest,
// make positivejkhl