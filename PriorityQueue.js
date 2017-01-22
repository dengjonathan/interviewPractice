const LinkedList = require('./doublyLL');

class PriorityQueue {
  constructor() {
    this.buckets = [];
    this.hash = {};
  }
  add(key) {
    if (!this.buckets[0]) {
      this.buckets[0] = new LinkedList();
    }
    // store queue node and frequency accessed in hash
    this.hash[key] = [this.buckets[0].addToTail(key), 0]; 
  }
  increment(key) {
    const [node, freq] = this.hash[key];
    this.buckets[freq].removeNode(node);
    if (!this.buckets[freq + 1]) {
      this.buckets[freq + 1] = new LinkedList();
    }
    const newNode = this.buckets[freq + 1].addToTail(node.val);
    this.hash[key] = [newNode, freq + 1];
  }
  evict() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].head) {
        const key = this.buckets[i].removeHead();
        delete this.hash[key];
        return key;
      }
    }
  }
};

module.exports = PriorityQueue;

const expect = require('chai').expect;

const queue = new PriorityQueue();

queue.add('a');
queue.add('b');
queue.add('c');
queue.add('d');
queue.add('e');

queue.increment('a');
queue.increment('a');
queue.increment('a');
queue.increment('b');
queue.increment('c');
queue.increment('e');

expect(queue.buckets[3].head.val).to.equal('a');
queue.evict();

expect(queue.hash['d']).to.equal(undefined);
expect(queue.buckets[0].head).to.equal(null);

queue.evict();
expect(queue.hash['b']).to.equal(undefined);
expect(queue.buckets[1].head.val).to.equal('c');
