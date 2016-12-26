// 3 data structures
// hash with doubly linked list on each frequency
// hash with reference to value and memory node
class Node {
  constructor(key) {
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
    if (node.next && node.prev){}

    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node;
  }
}

class LinkedHashMap {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  addBucket(index) {
    if (!this.storage[bucket]) {
      this.storage[bucket] = [];
    }
  }
  addValue(key) {

  }
}