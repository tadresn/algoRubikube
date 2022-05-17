import Cube from "./Cube";
import Colors from "./Colors";

const { White, Yellow, Blue, Green, Red, Orange } = Colors;

const cube = new Cube([
   Array(9).fill(White),
   Array(9).fill(Orange),
   Array(9).fill(Green),
   Array(9).fill(Red),
   Array(9).fill(Blue),
   Array(9).fill(Yellow),
]);

console.table(cube.tableau);

const a = cube.randomMove();

console.log(a);

cube.move(a);

console.table(cube.tableau);



