const giveProp = (propName, prop, obj) => Object.assign({}, obj, {[propName]: prop});

const curry = (func, arg) => {
  return (...args) => func(arg, ...args);
};

const giveName = curry(giveProp, 'name');
const giveJob = curry(giveProp, 'job');
const giveHero = curry(giveProp, 'hero');

const solo = giveJob(
  'smuggler',
  giveName('Han', {})
);
//{ name: 'Han', job: 'smuggler' }

const ren = giveHero(
  'Darth Vader',
  giveName('Kylo', {})
)
//{ name: 'Kylo', hero: 'Darth Vader' }