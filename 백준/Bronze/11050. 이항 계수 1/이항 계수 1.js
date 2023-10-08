let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map((x) => x * 1);

const cache = new Array(N + 1)
  .fill(false)
  .map(() => new Array(K + 1).fill(null));
for (let i = 0; i <= N; i++) {
  cache[i][0] = 1;
}

for (let i = 1; i <= N && i <= K; i++) {
  cache[i][i] = 1;
}

const bino_coef = (n, k) => {
  const memo = cache[n][k];
  if (memo === null) {
    bino_coef(n - 1, k);
    bino_coef(n - 1, k - 1);
    cache[n][k] = cache[n - 1][k] + cache[n - 1][k - 1];
  } else {
    return memo;
  }
};

bino_coef(N, K);

console.log(cache[N][K]);
