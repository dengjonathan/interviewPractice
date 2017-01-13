// 3 data structures
// hash with doubly linked list on each frequency
// hash with reference to value and memory node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    return node;
  }
  splice(node) {
    if (this.head === node) {
      this.head = node.next // can be null
    }
    if (this.tail === node) {
      this.tail = node.prev; // can be null
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node.prev) {
      node.prev.Next = node.next;
    }
    return node;
  }
  toArray() {
    if (!this.head) {
      return [];
    }
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
}

// class LinkedHashMap {
//   constructor() {
//     this.storage = {};
//     this.size = 0;
//   }
//   addBucket(index) {
//     if (!this.storage[bucket]) {
//       this.storage[bucket] = [];
//     }
//   }
//   addValue(key) {

//   }
// }

// TESTS
const expect = require('chai').expect;
const list = new LinkedList();

const refs = [];

[1, 2, 3, 4, 5].forEach(num => {
  refs.push(list.addToTail(new Node(num)));
});

list.splice(refs[3]);
list.splice(refs[0]);
list.splice(refs[refs.length - 1]);

expect(list.toArray()).to.eql([2, 4]);
console.log('all tests passed!!!!');