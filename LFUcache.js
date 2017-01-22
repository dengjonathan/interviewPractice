const PriorityQueue = require('./PriorityQueue');

class LFUCache {
  constructor(size) {
    this.cache = {};
    this.priorityQueue = new PriorityQueue();
    this.size = size;
    this.items = 0;
  }

  set(key, value) {
    if (this.cache[key]) {
      return this.cache[key] = value;
    }
    this.items++;
    if (this.items > this.size) {
      const evicted = this.priorityQueue.evict();
      delete this.cache[evicted];
      this.items--;
    }
    this.cache[key] = value;
    this.priorityQueue.add(key);
  }

  get(key) {
    if (typeof this.cache[key] === 'number') {
      this.priorityQueue.increment(key);
      return this.cache[key];
    }
    return -1;
  }
}

const expect = require('chai').expect;

const cache = new LFUCache(3);

cache.set('hello', 'world');
cache.set('good', 'bye');
cache.set('least', 'used');

expect(cache.get('hello')).to.equal('world');
expect(cache.get('good')).to.equal('bye');

cache.set('new', 'one');

expect(cache.get('least')).to.equal(-1);
expect(cache.items).to.equal(3);

expect(cache.get('new')).to.equal('one');

cache.set('last', 'one');
expect(cache.get('last')).to.equal('one');
expect(cache.get('hello')).to.equal(-1);

expect(cache.get('good')).to.equal('bye');


const cache2 = new LFUCache(2);
cache2.set(3,1)
console.log(cache2.cache);

cache2.set(2,1)
console.log(cache2.cache);

cache2.set(2,2)
console.log(cache2.cache);

cache2.set(4,4)
console.log(cache2.cache);