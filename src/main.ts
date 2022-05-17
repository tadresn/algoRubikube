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

//cube.moveFront();
//cube.moveFront();
//cube.moveLeftPrime();
//cube.moveUp();
//cube.moveUp();
//cube.moveBack();
//cube.moveBack();

cube.move("F2 L' U2 B2");

console.table(cube.tableau);

