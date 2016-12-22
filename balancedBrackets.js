function isBalanced(str) {
  const tallies = [...str]
    .reduce((memo, char) => {
      // openers
      if (char === '[') {
        return Object.assign({}, memo, {
          ob: memo.ob + 1,
          lastOpen: [...memo.lastOpen, 'b']
        });
      }
      if (char === '{') {
        return Object.assign({}, memo, {
          oc: memo.oc + 1,
          lastOpen: [...memo.lastOpen, 'c']
        });
      }
      if (char === '(') {
        return Object.assign({}, memo, {
          op: memo.op + 1,
          lastOpen: [...memo.lastOpen, 'p']
        });
      }
      //closers
      if (char === ')') {
        console.log(memo.lastOpen[memo.lastOpen.length -1])
        return Object.assign({}, memo, {
          cp: memo.cp + 1,
          lastOpen: memo.lastOpen.slice(0, memo.lastOpen.length - 1),
          ordered: memo.ordered ? memo.lastOpen[memo.lastOpen.length - 1] === 'p' : false
        });
      }
      if (char === ']') {
        return Object.assign({}, memo, {
          cb: memo.cb + 1,
          lastOpen: memo.lastOpen.slice(0, memo.lastOpen.length - 1),
          ordered: memo.ordered ? memo.lastOpen[memo.lastOpen.length - 1] === 'b' : false
        });
      }
      if (char === '}') {
        return Object.assign({}, memo, {
          cc: memo.cc + 1,
          lastOpen: memo.lastOpen.slice(0, memo.lastOpen.length - 1),
          ordered: memo.ordered ? memo.lastOpen[memo.lastOpen.length - 1] === 'c': false
        });
      }
      return memo;
    }, {
      op: 0,
      ob: 0,
      oc: 0,
      cp: 0,
      cb: 0,
      cc: 0,
      lastOpen: [],
      ordered: true
    });
  return !!tallies.ordered &&
    tallies.op === tallies.cp &&
    tallies.oc === tallies.cc &&
    tallies.ob === tallies.cb;
}

console.log(isBalanced('[{()}]'));