const PriorityQueue = require('./PriorityQueue');

class LFUCache {
  constructor(size) {
    this.cache = {};
    this.priorityQueue = new PriorityQueue();
    this.size = size;
    this.items = 0;
  }

  set(key, value) {
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
    if (this.cache[key]) {
      this.priorityQueue.increment(key);
    }
    return this.cache[key];
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

expect(cache.get('least')).to.equal(undefined);
expect(cache.items).to.equal(3);

expect(cache.get('new')).to.equal('one');

cache.set('last', 'one');
expect(cache.get('last')).to.equal('one');
expect(cache.get('hello')).to.equal(undefined);