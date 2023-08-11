let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// let map = [];
// for (let i = 0; i < 8; i++) {
//   let arr = [];
//   for (let j = 0; j < 8; j++) {
//     arr.push(".");
//   }
//   map.push(arr);
// }

const convertPos = (pos) => {
  const x = pos[0].charCodeAt() - 65;
  const y = 8 - pos[1] * 1;
  return { x: x, y: y };
};

let [king, stone, N] = input[0].split(" ");
king = convertPos(king);
stone = convertPos(stone);
// console.log(king, stone);
// map[king.y][king.x] = "K";
// map[stone.y][stone.x] = "S";
// console.table(map);

const move = (dx, dy) => {
  const isInrange = (x) => x >= 0 && x < 8;

  if (isInrange(king.x + dx) && isInrange(king.y + dy)) {
    if (
      !(king.x + dx === stone.x && king.y + dy === stone.y) ||
      (isInrange(stone.x + dx) && isInrange(stone.y + dy))
    ) {
      // map[king.y][king.x] = ".";
      // map[stone.y][stone.y] = ".";
      king = { x: king.x + dx, y: king.y + dy };
      if (king.x === stone.x && king.y === stone.y)
        stone = { x: stone.x + dx, y: stone.y + dy };
      // map[king.y][king.x] = "K";
      // map[stone.y][stone.x] = "S";
    }
  }
};

for (let i = 1; i <= N; i++) {
  switch (input[i]) {
    case "R":
      move(1, 0);
      break;
    case "L":
      move(-1, 0);
      break;
    case "B":
      move(0, 1);
      break;
    case "T":
      move(0, -1);
      break;
    case "RT":
      move(1, -1);
      break;
    case "LT":
      move(-1, -1);
      break;
    case "RB":
      move(1, 1);
      break;
    case "LB":
      move(-1, 1);
      break;
  }
}

const rollbackPos = (pos) => {
  const x = String.fromCharCode(pos.x + 65);
  const y = 8 - pos.y;
  return x + y;
};

// console.table(map);
console.log(rollbackPos(king) + "\n" + rollbackPos(stone));
