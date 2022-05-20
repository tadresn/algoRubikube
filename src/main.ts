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

for(let i=0; i<100000; i++){
   const a = cube.randomMove();
   if (cube.move(a)!== cube.move(cube.inverseScramble(a))){
      console.log(false);
   }
   else{console.log(true)}
}


//console.table(cube.tableau);

//const a = cube.randomMove();

//console.log(a);

//cube.move(a);

//console.table(cube.tableau);

//const b = cube.inverseScramble(a)

//console.log(b)

//cube.move(b);

//console.table(cube.tableau);






