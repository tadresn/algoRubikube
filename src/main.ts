import Cube from "./Cube";
import Colors from "./Colors";

console.log(Colors.G);

const cube = new Cube(["WWWWWWWWW", "OOOOOOOOO", "GGGGGGGGG", "RRRRRRRRR", "BBBBBBBBB", "YYYYYYYYY"]);

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

