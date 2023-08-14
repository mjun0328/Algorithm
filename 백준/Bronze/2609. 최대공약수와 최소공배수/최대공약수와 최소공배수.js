let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input[0].split(" ").map(Number);

const getGcd = (a, b) => {
  const r = a % b;
  if (r === 0) {
    return b;
  } else {
    return getGcd(b, r);
  }
};

const gcd = getGcd(a, b);
const lcm = (a * b) / gcd;
// gcd * (a / gcd) * (b / gcd);

console.log(gcd + "\n" + lcm);
