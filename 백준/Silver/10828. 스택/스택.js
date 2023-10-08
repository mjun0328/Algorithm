let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0 ? 1 : 0;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return -1;
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;
    return data;
  }

  top() {
    if (this.isEmpty()) return -1;
    return this.head.data;
  }
}

const stack = new LinkedList();
const answer = [];
for (let i = 1; i <= N; i++) {
  input[i] = input[i].split(" ");
  switch (input[i][0]) {
    case "push":
      stack.push(input[i][1] * 1);
      break;
    case "pop":
      answer.push(stack.pop());
      break;
    case "size":
      answer.push(stack.size());
      break;
    case "empty":
      answer.push(stack.isEmpty());
      break;
    case "top":
      answer.push(stack.top());
      break;
  }
}
console.log(answer.join("\n"));
