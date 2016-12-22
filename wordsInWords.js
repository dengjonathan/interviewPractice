const nestedWordCount = list => {
  let word = null;
  let max = 0;
  // for each value in the list
  list.forEach((targetWord, index, list) => {
    let innerMax = 0;
    const sansList = list.slice(0, index).concat(list.slice(index + 1, list.length));
    sansList.forEach((word) => {
      if (targetWord.indexOf(word) > -1) {
        innerMax++;
      }
    });
    word = innerMax > max ? targetWord : word;
    max = innerMax > max ? innerMax : max;
  });
  return word;
};

let a = nestedWordCount([ 'gray', 'grays', 'ray', 'rays', 'strays' ]);
console.log(a);