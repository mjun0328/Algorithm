let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("input.txt").toString().split("\n");
const [N, K] = input[0].split(" ").map((x) => x * 1);

let nth = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    if (++nth === K) {
      console.log(i);
      break;
    }
  }
  if (i === N) console.log(0);
}
