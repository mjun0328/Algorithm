let input = require("fs").readFileSync("/dev/stdin").toString().split("\n")[0];
// let input = require("fs").readFileSync("input.txt").toString().split("\n")[0];

let decimal = 0;
const [char, sys] = input.split(" ").map((x, i) => (i === 1 ? x * 1 : x));

const charToNum = (char) => (!isNaN(char) ? char * 1 : char.charCodeAt() - 55);

for (let i = 0; i < char.length; i++) {
  decimal += charToNum(char[i]) * Math.pow(sys, char.length - i - 1);
}
console.log(decimal);
