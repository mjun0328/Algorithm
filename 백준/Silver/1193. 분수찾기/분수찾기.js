let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("input.txt").toString().split("\n");
input = input[0] * 1;

let i = 1;
let max;
while (true) {
  max = ((1 + i) * i) / 2;
  if (input <= max) break;
  i++;
}
const isAsc = i % 2 === 0;

const [a, b] = [max - input + 1, i - max + input];
console.log(isAsc ? `${b}/${a}` : `${a}/${b}`);
