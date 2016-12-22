const onlyUnique = str => {
  const isBracket = str[0] === '['
  const isPeriod = str[str.length - 1] = '.';
  const uniqs = Array.from(new Set([...str.replace(/[\[\].]/g, '')]))
  const times = uniqs.map(char => str.match(new RegExp(`${char}`, 'g')).length);
  let newStr = uniqs.filter((char, index) => times[index] === 1).join('');
  if (isPeriod) newStr += '.';
  return isBracket ? `[${newStr}]` : newStr;
};

console.log(onlyUnique('hello there.'));