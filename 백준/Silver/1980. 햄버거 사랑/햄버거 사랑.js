let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m, t] = input[0].split(" ").map((x) => x * 1);

let max = [0, t];

for (let i = 0; i * n <= t; i++) {
  for (let j = 0; i * n + j * m <= t; j++) {
    let cola = t - i * n - j * m;
    if (cola < max[1] || (cola === max[1] && i + j > max[0])) {
      max = [i + j, cola];
    }
  }
}

console.log(max.join(" "));
