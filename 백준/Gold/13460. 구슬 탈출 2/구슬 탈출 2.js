let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((x) => x * 1);
let R,
  B,
  map = [];

for (let i = 1; i <= N; i++) {
  map.push(
    input[i].split("").map((x, j) => {
      if (x === "R") R = { x: j, y: i - 1 };
      if (x === "B") B = { x: j, y: i - 1 };
      return x;
    })
  );
}

let min = 11;

const roll = (x, y, dir, map) => {
  const obby = ["#", "R", "B"];
  switch (dir) {
    case 0:
      while (!obby.includes(map[y][x - 1])) {
        x -= 1;
        if (map[y][x] === "O") return true;
      }
      break;
    case 1:
      while (!obby.includes(map[y + 1][x])) {
        y += 1;
        if (map[y][x] === "O") return true;
      }
      break;
    case 2:
      while (!obby.includes(map[y][x + 1])) {
        x += 1;
        if (map[y][x] === "O") return true;
      }
      break;
    case 3:
      while (!obby.includes(map[y - 1][x])) {
        y -= 1;
        if (map[y][x] === "O") return true;
      }
      break;
  }
  return { x: x, y: y };
};

const getCases = (prevDir, r, b, map) => {
  let newDir = [];
  const isOk = (dx, dy, map2) => {
    return (
      !(map2[r.y + dy][r.x + dx] === "#" && map2[b.y + dy][b.x + dx] === "#") &&
      !(
        ["R", "B"].includes(map2[r.y + dy][r.x + dx]) &&
        map2[r.y + 2 * dy][r.x + 2 * dx] === "#"
      )
    );
  };
  if (isOk(-1, 0, map) && ![0, 2].includes(prevDir)) newDir.push(0);
  if (isOk(0, 1, map) && ![1, 3].includes(prevDir)) newDir.push(1);
  if (isOk(1, 0, map) && ![0, 2].includes(prevDir)) newDir.push(2);
  if (isOk(0, -1, map) && ![1, 3].includes(prevDir)) newDir.push(3);
  return newDir;
};

const move = (r, b, dir, prevMap, count = 0, history = "") => {
  let map = JSON.parse(prevMap);
  let superB;
  switch (dir) {
    case 0:
      superB = b.x < r.x;
      break;
    case 1:
      superB = b.y > r.y;
      break;
    case 2:
      superB = b.x > r.x;
      break;
    case 3:
      superB = b.y < r.y;
      break;
  }
  let resB, resR;
  if (superB) {
    resB = roll(b.x, b.y, dir, map);
    map[b.y][b.x] = ".";
    if (resB !== true) map[resB.y][resB.x] = "B";
    resR = roll(r.x, r.y, dir, map);
    map[r.y][r.x] = ".";
    if (resR !== true) map[resR.y][resR.x] = "R";
  } else {
    resR = roll(r.x, r.y, dir, map);
    map[r.y][r.x] = ".";
    if (resR !== true) map[resR.y][resR.x] = "R";
    resB = roll(b.x, b.y, dir, map);
    map[b.y][b.x] = ".";
    if (resB !== true) map[resB.y][resB.x] = "B";
  }

  history += dir.toString();
  if (++count <= 10 && resB !== true) {
    // console.table(map);
    if (resR === true) {
      // console.log(history, "T");
      if (count < min) min = count;
    } else {
      let newDir = getCases(dir, resR, resB, map);
      for (let i = 0; i < newDir.length; i++) {
        move(resR, resB, newDir[i], JSON.stringify(map), count, history);
      }
    }
  } else {
    // if (history === "103212303") console.table(map);
    // console.log(history, "F");
  }
};

let dirCase = getCases(-1, R, B, map);
// console.log(dirCase);
for (let i = 0; i < dirCase.length; i++) {
  // console.log(dirCase[i], R, B);
  move(R, B, dirCase[i], JSON.stringify(map));
}
console.log(min === 11 ? -1 : min);
