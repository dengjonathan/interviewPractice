class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    constructor(initial) {
      if (initial) this.addToTail(initial);
    }

    addToTail(value) {
      const node = new Node(value);
      if (this.tail) { 
        this.tail.next = node;        
      }
      if (!this.head) {
        this.head = node;
      }
      this.tail = node;
    }

    removeHead() {
      if (this.head === this.tail) {
        this.tail = null;
        this.head = null;
        return;
      }
      this.head = this.head.next ? this.head.next : null;
    }

    contains(value, current=this.head) {
      // check if node.value === value
      if (current.value === value) {
        return true;
      }
      return current.next ? this.contains(value, current.next) : false;
    }
}

const list = new LinkedList(1);
list.tail.value