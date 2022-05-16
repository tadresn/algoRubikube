import Cube from "./Cube";

const cube = new Cube(["WWWWWWWWW", "OOOOOOOOO", "GGGGGGGGG", "RRRRRRRRR", "BBBBBBBBB", "YYYYYYYYY"]);

console.table(cube.tableau);

cube.moveFront();
cube.moveFront();
cube.moveLeftPrime();
cube.moveUp();
cube.moveUp();
cube.moveBack();
cube.moveBack();

console.table(cube.tableau);

