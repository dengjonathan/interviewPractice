//new Regex((.)\1+).match('aabbbcc');
const longestRun = str => {
  const repeats = str.match(/([a-zA-Z])\1+/g);
  if (!repeats.length) {
    return [0,0]
  }
  const longest = repeats.sort((a,b) => a.length < b.length ? 1 : -1)[0];
  const start = str.indexOf(longest);
  return [start, start + longest.length - 1];
}

console.log(longestRun('abbbcc'));
