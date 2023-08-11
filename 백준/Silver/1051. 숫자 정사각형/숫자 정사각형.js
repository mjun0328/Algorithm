let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((x) => x * 1);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split("").map((x) => x * 1));
}

let max = 0;
for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < M - 1; j++) {
    for (let k = max + 1; i + k < N && j + k < M; k++) {
      if (
        arr[i][j] === arr[i + k][j] &&
        arr[i][j] === arr[i][j + k] &&
        arr[i][j] === arr[i + k][j + k]
      )
        max = k;
      // console.log(i, j, k);
    }
  }
}

console.log((max + 1) ** 2);
