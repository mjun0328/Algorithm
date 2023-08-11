let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("input.txt").toString().split("\n");
input = input[0];

let arr = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

for (let i = 0; i < input.length; i++) {
  let char = input[i].toLowerCase();
  arr[char]++;
}

let result = {
  char: null,
  count: 0,
};

for (const key in arr) {
  if (arr[key] > result.count) {
    result = {
      char: key,
      count: arr[key],
    };
  } else if (arr[key] === result.count) {
    result.char = null;
  }
}

console.log(result.char === null ? "?" : result.char.toUpperCase());
