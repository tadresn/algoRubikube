import { ThreeByThree } from './ThreeByThree';
import Test from "./Test";

const test = new Test();

//console.log(test.testScramble());

const cube = new ThreeByThree([
    Array(9).fill('W'), 
    Array(9).fill('O'), 
    Array(9).fill('G'),
    Array(9).fill('R'), 
    Array(9).fill('B'),
    Array(9).fill('Y'),
  ])

cube.move("U");

console.log(cube.getScore(cube));
