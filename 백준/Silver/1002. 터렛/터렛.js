let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input[0] * 1;
for (let i = 1; i <= T; i++) {
  const val = input[i].split(" ").map((x) => x * 1);

  const A = {
    x: val[0],
    y: val[1],
    r: val[2],
  };
  const B = {
    x: val[3],
    y: val[4],
    r: val[5],
  };
  d = Math.sqrt((A.x - B.x) ** 2 + (A.y - B.y) ** 2);

  const [big, small] = A.r > B.r ? [A, B] : [B, A];
  if (d === 0) {
    if (big.r === small.r) {
      console.log(-1);
    } else {
      console.log(0);
    }
  } else if (d < big.r) {
    if (d + small.r < big.r) {
      console.log(0);
    } else if (d + small.r === big.r) {
      console.log(1);
    } else {
      console.log(2);
    }
  } else if (d === big.r) {
    console.log(2);
  } else if (d - small.r > big.r) {
    console.log(0);
  } else if (d - small.r === big.r) {
    console.log(1);
  } else {
    console.log(2);
  }
}
