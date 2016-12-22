const _switch = (arr, a, b) => {
  const memo = arr[a];
  arr[a] = arr[b];
  arr[b] = memo;
  return arr;
};

// fisher yates cool shuffle!
const shuffleDeck = function(deck) {
  for (i = deck.length - 1; i >= 0; i--) {
    _switch(arr, i, Math.floor(Math.random() * i));
  }
  return deck;
}

// my bad naive shuffle! it becomes more biased the more you shuffle!
// var shuffleDeck = function(deck) {
//   deck.forEach((_, ind, arr) => _switch(arr, ind, Math.floor(Math.random() * arr.length)));
//   return deck;
// }