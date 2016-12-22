const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const completesSolution = (total, coin) => {
  return total === coin;
}

const canLeadToXSolutions = (total, index) => {
  let coin = coins[index];
  let howManyFit = Math.floor(total / coin);
  //console.log('coin', coin, 'howmanyfit', howManyFit);

  if (completesSolution(total, coin)) {
    return 1;
  }

  if (coin === 2) {
    return howManyFit;
  }
  let sum = 0;
  for (let i = howManyFit; i >= 0; i--) {
    let called = total - i * coin;
    console.log(coin, called, index - 1);
    sum += canLeadToXSolutions(total - i * coin, index - 1)
  }
  return sum;
}

const findLargestCoinThatFits = (total) => {
  let coinsThatFit = coins.filter(coin => coin <= total);
  return coins.indexOf(Math.max(...coinsThatFit));
}


const coinSums = (total) => {

  let largest = findLargestCoinThatFits(total);

  return total === 1 ? 1 : canLeadToXSolutions(total, largest) + 1; //adding one to account for solution of all 1 pence coins
};

console.log(coinSums(17));
