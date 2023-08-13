let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let result = [];

const N = input.shift() * 1;
input = input.map(Number).sort((a, b) => a - b);

const sum = input.reduce((a, b) => a + b, 0);
let aver = Math.round(sum / N);
result.push(aver === 0 ? 0 : aver);

result.push(input[(N - 1) / 2]);

let map = new Map();
let max = 1;
input.map((x) => {
  if (map.has(x)) {
    max = Math.max(max, map.get(x) + 1);
    map.set(x, map.get(x) + 1);
  } else {
    map.set(x, 1);
  }
});

let index = 0;
let frequency;
for (let [key, value] of map) {
  if (value === max) {
    frequency = key;
    if (index === 0) {
      index++;
    } else if (index === 1) {
      break;
    }
  }
}
result.push(frequency);

result.push(input[N - 1] - input[0]);

console.log(result.join("\n"));
