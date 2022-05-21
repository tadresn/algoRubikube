class Scramble{

    scramble : string;

    constructor(pScramble : string){
        this.scramble = pScramble;
    }

    public randomScramble(){
        let move = "";
        const allMove = ["R", "R'", "R2", "L", "L'", "L2", "F", "F'", "F2", "B", "B'", "B2", "U", "U'", "U2", "D", "D'", "D2"];
        const nb = Math.floor(Math.random()*(Math.floor(30) - Math.ceil(20) + 1) + Math.ceil(20));
        for(let i=0; i<nb; i++){
           const a = Math.floor(Math.random()*18);
           move = move.concat(allMove[a], ' ');
        }
        return move;
     }

     public inverseScramble(pScramble: string){
        const currentScramble = pScramble.split(" ");
  
        for (let i=0; i<currentScramble.length; i++){
           switch(currentScramble[i]){
              case "R":
                 currentScramble[i] = "R'";
                 break;
              case "R'":
                 currentScramble[i] = "R";
                 break;
              case "L":
                 currentScramble[i] = "L'";
                 break;
              case "L'":
                 currentScramble[i] = "L";
                 break;
              case "F":
                 currentScramble[i] = "F'";
                 break;
              case "F'":
                 currentScramble[i] = "F";
                 break;
              case "B":
                 currentScramble[i] = "B'";
                 break;
              case "B'":
                 currentScramble[i] = "B";
                 break;
              case "U":
                 currentScramble[i] = "U'";
                 break;
              case "U'":
                 currentScramble[i] = "U";
                 break;
              case "D":
                 currentScramble[i] = "D'";
                 break;
              case "D'":
                 currentScramble[i] = "D";
                 break;
           }
        }
        const reverseScramble = currentScramble.reverse();
        pScramble = reverseScramble.join(' ');
  
        return pScramble;
     }
}

export default Scramble