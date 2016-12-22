const powerSet = str => {
  // flawed approach use perumtations
  const combos = Array.from(new Set(str))
    .reduce((set, letter, ind, letters) => {
      for (let i = ind + 1; i <= letters.length; i++) {
        for (let j = i + 1; j <= letters.length + 1; j++)
          set.add([letter, ...letters.slice(i, j)].sort().join(''));
      }
      return set;
    }, new Set())
  return [
    '',
    ...Array.from(combos).sort()
  ];
};

console.log(powerSet('horse'));