/**
 * @param {string} s
 * @return {boolean}
 * Time O(n) iterate through everything in list
 * Space O(n) store 1/2 of all values
 */
var isValid = function(s) {
    const stack = [];
    const complements = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            const opener = stack.pop();
            console.log(opener, s[i], complements[s[i]])
            if (!opener || opener !== complements[s[i]]) {
                return false;
            }
        }
    }
    return stack.length ? false : true;
};