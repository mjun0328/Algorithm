let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;

const getFactor = (factor) => {
  let count = 0;
  for (let i = 1; factor * i <= N; i++) {
    let num = factor * i;
    while (num / factor === Math.floor(num / factor)) {
      count++;
      num /= factor;
    }
  }
  return count;
};

const two = getFactor(2);
const five = getFactor(5);
console.log(Math.min(two, five));
