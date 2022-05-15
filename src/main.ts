import Cube from "./Cube";

const cube = new Cube(["WWWWWWWWW", "OOOOOOOOO", "GGGGGGGGG", "RRRRRRRRR", "BBBBBBBBB", "YYYYYYYYY"]);

console.table(cube.tableau);

cube.moveLeftPrime();
cube.moveLeftPrime();
cube.moveLeftPrime();
cube.moveLeftPrime();

console.table(cube.tableau);

