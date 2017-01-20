class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    return this.tail;
  }
  removeHead() {
    const head = this.head;
    if (this.head) {
      if (this.head.next) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else {
        this.head = this.tail = null;
      }
    }
    return head.val;
  }
  removeNode(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

const expect = require('chai').expect;

const ll = new LinkedList();

ll.addToTail(4);
ll.addToTail(5);
ll.addToTail(6);
ll.removeHead();

expect(ll.head.val).to.equal(5);
expect(ll.tail.val).to.equal(6);
expect(ll.tail.prev.val).to.equal(5);
expect(ll.head.prev).to.equal(null);

const seven = ll.addToTail(7);
ll.addToTail(8);

ll.removeNode(seven);

expect(ll.tail.val).to.equal(8)
expect(ll.tail.prev.val).to.equal(6);

const nine = ll.addToTail(9);
ll.removeNode(nine);
expect(ll.tail.val).to.equal(8)

module.exports = LinkedList;