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
    this.foot = null;
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
    if (!this.isEmpty()) this.foot.next = node;
    this.foot = node;
    if (this.isEmpty()) this.head = node;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return -1;
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;
    if (this.isEmpty()) this.foot = null;
    return data;
  }

  front() {
    if (this.isEmpty()) return -1;
    return this.head.data;
  }

  back() {
    if (this.isEmpty()) return -1;
    return this.foot.data;
  }
}

const queue = new LinkedList();
const answer = [];
for (let i = 1; i <= N; i++) {
  input[i] = input[i].split(" ");
  switch (input[i][0]) {
    case "push":
      queue.push(input[i][1] * 1);
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.isEmpty());
      break;
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
  }
}
console.log(answer.join("\n"));
