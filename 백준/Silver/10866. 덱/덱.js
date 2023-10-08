let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;

class Node {
  constructor(data) {
    this.data = data;
    this.front = null;
    this.back = null;
  }
}

class LinkedList {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0 ? 1 : 0;
  }

  push_front(data) {
    const node = new Node(data);
    node.back = this.front;
    if (!this.isEmpty()) this.front.front = node;
    this.front = node;
    if (this.isEmpty()) this.back = node;
    this.length++;
  }

  push_back(data) {
    const node = new Node(data);
    node.front = this.back;
    if (!this.isEmpty()) this.back.back = node;
    this.back = node;
    if (this.isEmpty()) this.front = node;
    this.length++;
  }

  pop_front() {
    if (this.isEmpty()) return -1;
    const data = this.front.data;
    this.front = this.front.back;
    this.length--;
    if (!this.isEmpty()) this.front.front = null;
    if (this.isEmpty()) this.back = null;
    return data;
  }

  pop_back() {
    if (this.isEmpty()) return -1;
    const data = this.back.data;
    this.back = this.back.front;
    this.length--;
    if (!this.isEmpty()) this.back.back = null;
    if (this.isEmpty()) this.front = null;
    return data;
  }

  getFront() {
    if (this.isEmpty()) return -1;
    return this.front.data;
  }

  getBack() {
    if (this.isEmpty()) return -1;
    return this.back.data;
  }
}

const queue = new LinkedList();
const answer = [];
for (let i = 1; i <= N; i++) {
  input[i] = input[i].split(" ");
  switch (input[i][0]) {
    case "push_front":
      queue.push_front(input[i][1] * 1);
      break;
    case "push_back":
      queue.push_back(input[i][1] * 1);
      break;
    case "pop_front":
      answer.push(queue.pop_front());
      break;
    case "pop_back":
      answer.push(queue.pop_back());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.isEmpty());
      break;
    case "front":
      answer.push(queue.getFront());
      break;
    case "back":
      answer.push(queue.getBack());
      break;
  }
}
console.log(answer.join("\n"));
