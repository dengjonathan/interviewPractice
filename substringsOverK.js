/**
 * Find the longest substring of s where each character appears at least k times
 * recursively break down the problem into find the smaller version of substrings
 * Time complexity Max of s.lenght or O(number of substrings ^ number of infrequent numbers)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const tallies = hash(s);
    if (s.length < k) {
      return 0;
    }
    for (let i in tallies) {
        if (tallies[i] < k) {
            return Math.max(...s.split(i).map(sub => longestSubstring(sub, k)));
        }
    }
    return s.length;
};

const hash = function(s) {
    const result = {};
    for (let i = 0; i < s.length; i++) {
        if (!result[s[i]]) {
            result[s[i]] = 0;
        }
        result[s[i]]++;
    }
    return result;
};


longestSubstring('abbbac', 2);