let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((x) => x * 1);
const cards = input[1].split(" ").map((x) => x * 1);

let gap = M;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= M && gap > M - sum) gap = M - sum;
    }
  }
}

console.log(M - gap);
