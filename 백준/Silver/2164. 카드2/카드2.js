let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (value) => {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    return ++this.length;
  };

  shift = () => {
    const node = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return node.value;
  };

  length = this.length;

  getHead = () => this.head.value;
}

const queue = new LinkedList();
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

while (queue.length > 1) {
  queue.shift();
  if (queue.length > 1) {
    queue.push(queue.shift());
  }
}

console.log(queue.getHead());
