// for an array, find an array of exactly 4 numbers that equal to the target

const find4 = (arr, target) => {
  const hash = hashPairs(arr);
  return find2Pair(hash);
};

const hashPairs = arr => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = hash[arr[i] + arr[j]];
      if (!hash[sum]) {
        hash[sum] = [];
      }
      hash[sum].push([i, j]);
    }
  }
  return hash;
};

const find2Pair = hash => {
  for (let key in hash) {

  }
};