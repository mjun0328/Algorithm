let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;
let arr = input[1].split(" ").map((x) => x * 1);
const T = input[2] * 1;
let cases = [];
for (let i = 3; i < 3 + T; i++) {
  cases.push(input[i].split(" ").map((x) => x * 1));
}

const invert = (index) => {
  arr[index] = arr[index] ? 0 : 1;
};

const boy = (num) => {
  for (let i = 1; i * num <= N; i++) {
    invert(i * num - 1);
  }
};

const girl = (num) => {
  num -= 1;
  let range = 1;
  invert(num);
  while (
    arr[num - range] === arr[num + range] &&
    num - range >= 0 &&
    num + range < N
  ) {
    invert(num - range);
    invert(num + range);
    range++;
  }
};

cases.map((val) => {
  if (val[0] === 1) {
    boy(val[1]);
  } else {
    girl(val[1]);
  }
});

let newArr = [];
for (let i = 0; i < arr.length; i += 20) {
  newArr.push(arr.slice(i, i + 20));
}

console.log(newArr.map((x) => x.join(" ")).join("\n"));
