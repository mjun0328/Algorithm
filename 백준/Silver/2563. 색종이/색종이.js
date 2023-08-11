let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("input.txt").toString().split("\n");

let palette = [];
for (let i = 0; i < 100; i++) {
  palette.push(new Array(100).fill(0));
}

let count = input[0] * 1;
let overlap = 0;
for (let i = 1; i <= count; i++) {
  let [x, y] = input[i].split(" ").map((x) => x * 1);
  for (let i = y; i < y + 10; i++) {
    for (let j = x; j < x + 10; j++) {
      if (palette[j][i]++ > 0) overlap++;
    }
  }
}

console.log(count * 100 - overlap);
