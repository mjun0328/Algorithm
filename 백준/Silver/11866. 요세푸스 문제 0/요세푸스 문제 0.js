let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map((x) => x * 1);

const people = new Array(N).fill(0).map((x, i) => i + 1);
const answer = [];

let number = 0;
while (people.length > 0) {
  number += K - 1;
  while (number >= people.length) {
    number -= people.length;
  }
  answer.push(people[number]);
  people.splice(number, 1);
}
console.log("<" + answer.join(", ") + ">");
