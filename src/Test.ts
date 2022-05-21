import Cube from "./Cube";
import Colors from "./Colors";
import Scramble from "./Scramble";

class Test {

    cube : Cube;
    scramble : Scramble;

    constructor(){
        const { White, Yellow, Blue, Green, Red, Orange } = Colors;

        this.cube = new Cube([
            Array(9).fill(White),
            Array(9).fill(Orange),
            Array(9).fill(Green),
            Array(9).fill(Red),
            Array(9).fill(Blue),
            Array(9).fill(Yellow),
         ]);

        this.scramble = new Scramble("");
    }

    public testScramble(){
        for (let i=0; i<100000; i++){
            let randomScramble = this.scramble.randomScramble();
            if (this.cube.move(randomScramble)!== this.cube.move(this.scramble.inverseScramble(randomScramble))){
                return false;
             }
        }
        return true;
    }

}

export default Test