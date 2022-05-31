import { ThreeByThree } from './ThreeByThree';
import Test from "./Test";
import Scramble from './Scramble';

const test = new Test();

const scramble = new Scramble();

//console.log(test.testScramble());

const cube = new ThreeByThree([
    Array(9).fill('W'), 
    Array(9).fill('O'), 
    Array(9).fill('G'),
    Array(9).fill('R'), 
    Array(9).fill('B'),
    Array(9).fill('Y'),
  ])

const a = scramble.generateRandomScramble()

console.log(a)

cube.move("R U B L");

console.table(cube);
