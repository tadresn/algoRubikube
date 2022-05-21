import Colors from "./Colors";
import Cube from "./Cube";
import Scramble from "./Scramble";
import { ThreeByThree } from "./ThreeByThree";

class Test {
   private _cube: Cube;
   private _scramble: Scramble;

   constructor() {
      const { White, Yellow, Blue, Green, Red, Orange } = Colors;

      this._cube = new ThreeByThree([
         Array(9).fill(White),
         Array(9).fill(Orange),
         Array(9).fill(Green),
         Array(9).fill(Red),
         Array(9).fill(Blue),
         Array(9).fill(Yellow),
      ]);

      this._scramble = new Scramble();
   }

   public get scramble(): Scramble {
      return this._scramble;
   }

   public set scramble(v: Scramble) {
      this.scramble = v;
   }

   public testScramble() {
      for (let i = 0; i < 100; i++) {
         let randomScramble = this.scramble.generateRandomScramble();
         if (
            this._cube.move(randomScramble) !==
            this._cube.move(this.scramble.inverseScramble(randomScramble))
         ) {
            return false;
         }
      }
      return true;
   }
}

export default Test;

