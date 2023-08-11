let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((x) => x * 1);
let min = N * M;

for (let i = 1; i + 7 <= N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    let pos = [i, j];
    let count = 0;
    let shouldWhite = true;
    for (let k = 1; k <= 64; k++) {
      if ((input[pos[0]][pos[1]] === "W") !== (k % 2 === shouldWhite * 1))
        count++;

      if (k % 8 === 0) {
        pos = [pos[0] + 1, j];
        shouldWhite = !shouldWhite;
      } else {
        pos = [pos[0], pos[1] + 1];
      }
    }
    if (count < min) min = count;
    if (64 - count < min) min = 64 - count;
  }
}
console.log(min);
