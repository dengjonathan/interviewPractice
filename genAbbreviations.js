// generateAbbreviations of all possible lengthes in word i.e. 'word' => ['word', '1ord', 'w1rd', 'w1r1', '2r1', ... '4']

/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    const results = [];
    const dfs = (ind, word) => {
      results.push(word);
      // for each possible value create a new path, only with values to the right (to not double count)
      for (let j = ind; j < word.length; j++) {
          for (let length = 1; length <= word.length - j; length++) {
            if (word.length - j >= length && j > 0 ? !word[j-1].match(/[1-9]/) : true) {
              dfs(j + 1, [word.slice(0, j), length, word.slice(j + length)].join(''));
            }
          }
      }
    };
    dfs(0, word); 
    return Array.from(new Set(results));
};
