class Cube {
    tableau : string[];
  
    constructor(ptab: string[]) {
      this.tableau = ptab; 
    }

    private rotationFace(face:string[])
    {
        return [face[6], face[3], face[0], face[7], face[4], face[1], face[8], face[5], face[2]];
    }

    private rotationFacePrime(face:string[])
    {
        return [face[2], face[5], face[8], face[1], face[4], face[7], face[0], face[3], face[6]]
    }

    private elementsToMoveRight(currentCube:string[][])
    {
        const whiteFace = currentCube[0].filter((_element, i)=>i===2 || i===5 || i===8);
        const greenFace = currentCube[2].filter((_element, i)=>i===2 || i===5 || i===8);
        const blueFace = currentCube[4].filter((_element, i)=>i===0 || i===3 || i===6);
        const yellowFace = currentCube[5].filter((_element, i)=>i===2 || i===5 || i===8);

        return {
            whiteFace, greenFace, blueFace, yellowFace
        }
    }

    public moveRight()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {whiteFace, greenFace, blueFace, yellowFace} = this.elementsToMoveRight(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[0].splice(i*3 +2 ,1,greenFace[i]);
            currentCube[2].splice(i*3 +2 ,1,yellowFace[i]);
            currentCube[4].splice(i*3 ,1,whiteFace[2-i]);
            currentCube[5].splice(i*3 +2 ,1,blueFace[2-i]);
        }

        currentCube[3] = this.rotationFace(currentCube[3]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    public moveRightPrime()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {whiteFace, greenFace, blueFace, yellowFace} = this.elementsToMoveRight(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[0].splice(i*3 +2 ,1,blueFace[2-i]);
            currentCube[2].splice(i*3 +2 ,1,whiteFace[i]);
            currentCube[4].splice(i*3 ,1,yellowFace[2-i]);
            currentCube[5].splice(i*3 +2 ,1,greenFace[i]);
        }

        currentCube[3] = this.rotationFacePrime(currentCube[3]);

        this.tableau = currentCube.map(face => face.join(""));

    }

    private elementsToMoveLeft(currentCube:string[][])
    {
        const whiteFace = currentCube[0].filter((_element, i)=>i===0 || i===3 || i===6);
        const greenFace = currentCube[2].filter((_element, i)=>i===0 || i===3 || i===6);
        const blueFace = currentCube[4].filter((_element, i)=>i===2 || i===5 || i===8);
        const yellowFace = currentCube[5].filter((_element, i)=>i===0 || i===3 || i===6);

        return {
            whiteFace, greenFace, blueFace, yellowFace
        }
    }

    public moveLeft()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {whiteFace, greenFace, blueFace, yellowFace} = this.elementsToMoveLeft(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[0].splice(i*3, 1, blueFace[2-i]);
            currentCube[2].splice(i*3, 1, whiteFace[i]);
            currentCube[4].splice(i*3 + 2, 1, yellowFace[2-i]);
            currentCube[5].splice(i*3, 1, greenFace[i]);
        }

        currentCube[1] = this.rotationFace(currentCube[1]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    public moveLeftPrime()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {whiteFace, greenFace, blueFace, yellowFace} = this.elementsToMoveLeft(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[0].splice(i*3, 1, greenFace[i]);
            currentCube[2].splice(i*3, 1, yellowFace[i]);
            currentCube[4].splice(i*3 + 2, 1, whiteFace[2-i]);
            currentCube[5].splice(i*3, 1, blueFace[2-i]);
        }

        currentCube[1] = this.rotationFacePrime(currentCube[1]);

        this.tableau = currentCube.map(face => face.join(""));
    }


    private elementsToMoveFront(currentCube:string[][])
    {
        const whiteFace = currentCube[0].filter((_element, i)=>i===6 || i===7 || i===8);
        const orangeFace = currentCube[1].filter((_element, i)=>i===2 || i===5 || i===8);
        const redFace = currentCube[3].filter((_element, i)=>i===0 || i===3 || i===6);
        const yellowFace = currentCube[5].filter((_element, i)=>i===0 || i===1 || i===2);

        return {
            whiteFace, orangeFace, redFace, yellowFace
        }
    }

    public moveFront()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {whiteFace, orangeFace, redFace, yellowFace} = this.elementsToMoveFront(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[0].splice(6+i, 1, orangeFace[2-i]);
            currentCube[1].splice(i*3 + 2, 1, yellowFace[i]);
            currentCube[3].splice(i*3, 1, whiteFace[i]);
            currentCube[5].splice(i, 1, redFace[2-i]);
        }

        currentCube[2] = this.rotationFace(currentCube[2]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    public moveFrontPrime()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {whiteFace, orangeFace, redFace, yellowFace} = this.elementsToMoveFront(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[0].splice(6+i, 1, redFace[i]);
            currentCube[1].splice(i*3 + 2, 1, whiteFace[2-i]);
            currentCube[3].splice(i*3, 1, yellowFace[2-i]);
            currentCube[5].splice(i, 1, orangeFace[i]);
        }

        currentCube[2] = this.rotationFacePrime(currentCube[2]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    private elementsToMoveBack(currentCube:string[][])
    {
        const whiteFace = currentCube[0].filter((_element, i)=>i===0 || i===1 || i===2);
        const orangeFace = currentCube[1].filter((_element, i)=>i===0 || i===3 || i===6);
        const redFace = currentCube[3].filter((_element, i)=>i===2 || i===5 || i===8);
        const yellowFace = currentCube[5].filter((_element, i)=>i===6 || i===7 || i===8);

        return {
            whiteFace, orangeFace, redFace, yellowFace
        }
    }

    public moveBack()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {whiteFace, orangeFace, redFace, yellowFace} = this.elementsToMoveBack(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[0].splice(i, 1, redFace[i]);
            currentCube[1].splice(i*3, 1, whiteFace[2-i]);
            currentCube[3].splice(i*3 + 2, 1, yellowFace[2-i]);
            currentCube[5].splice(6+i, 1, orangeFace[i]);
        }

        currentCube[4] = this.rotationFace(currentCube[4]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    public moveBackPrime()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {whiteFace, orangeFace, redFace, yellowFace} = this.elementsToMoveBack(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[0].splice(i, 1, orangeFace[2-i]);
            currentCube[1].splice(i*3, 1, yellowFace[i]);
            currentCube[3].splice(i*3+2, 1, whiteFace[i]);
            currentCube[5].splice(6+i, 1, redFace[2-i]);
        }

        currentCube[4] = this.rotationFacePrime(currentCube[4]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    private elementsToMoveUp(currentCube:string[][])
    {
        const orangeFace = currentCube[1].filter((_element, i)=>i===0 || i===1 || i===2);
        const greenFace = currentCube[2].filter((_element, i)=>i===0 || i===1 || i===2);
        const redFace = currentCube[3].filter((_element, i)=>i===0 || i===1 || i===2);
        const blueFace = currentCube[4].filter((_element, i)=>i===0 || i===1 || i===2);

        return {
            orangeFace, greenFace, redFace, blueFace
        }
    }

    public moveUp()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {orangeFace, greenFace, redFace, blueFace} = this.elementsToMoveUp(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[1].splice(i, 1, greenFace[i]);
            currentCube[2].splice(i, 1, redFace[i]);
            currentCube[3].splice(i, 1, blueFace[i]);
            currentCube[4].splice(i, 1, orangeFace[i]);
        }

        currentCube[0] = this.rotationFace(currentCube[0]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    public moveUpPrime()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {orangeFace, greenFace, redFace, blueFace} = this.elementsToMoveUp(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[1].splice(i, 1, blueFace[i]);
            currentCube[2].splice(i, 1, orangeFace[i]);
            currentCube[3].splice(i, 1, greenFace[i]);
            currentCube[4].splice(i, 1, redFace[i]);
        }

        currentCube[0] = this.rotationFacePrime(currentCube[0]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    private elementsToMoveDown(currentCube:string[][])
    {
        const orangeFace = currentCube[1].filter((_element, i)=>i===6 || i===7 || i===8);
        const greenFace = currentCube[2].filter((_element, i)=>i===6 || i===7 || i===8);
        const redFace = currentCube[3].filter((_element, i)=>i===6 || i===7 || i===8);
        const blueFace = currentCube[4].filter((_element, i)=>i===6 || i===7 || i===8);

        return {
            orangeFace, greenFace, redFace, blueFace
        }
    }

    public moveDown()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {orangeFace, greenFace, redFace, blueFace} = this.elementsToMoveDown(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[1].splice(6+i, 1, blueFace[i]);
            currentCube[2].splice(6+i, 1, orangeFace[i]);
            currentCube[3].splice(6+i, 1, greenFace[i]);
            currentCube[4].splice(6+i, 1, redFace[i]);
        }

        currentCube[5] = this.rotationFace(currentCube[5]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    public moveDownPrime()
    {
        const currentCube = this.tableau.map(face => face.split(""));

        const {orangeFace, greenFace, redFace, blueFace} = this.elementsToMoveDown(currentCube);

        for(let i=0; i<3;i++)
        {
            currentCube[1].splice(6+i, 1, greenFace[i]);
            currentCube[2].splice(6+i, 1, redFace[i]);
            currentCube[3].splice(6+i, 1, blueFace[i]);
            currentCube[4].splice(6+i, 1, orangeFace[i]);
        }

        currentCube[5] = this.rotationFacePrime(currentCube[5]);

        this.tableau = currentCube.map(face => face.join(""));
    }

    public move(scramble:string)
    {
        const currentScramble = scramble.split(" ");

        for (const element of currentScramble)
        {
            switch (element){

                case "R":
                    this.moveRight();
                    break;
                case "R2":
                    this.moveRight();
                    this.moveRight();
                    break;
                case "R'":
                    this.moveRightPrime();
                    break;

                case "L":
                    this.moveLeft();
                    break;
                case "L2":
                    this.moveLeft();
                    this.moveLeft();
                    break;
                case "L'":
                    this.moveLeftPrime();
                    break;

                case "F":
                    this.moveFront();
                    break;
                case "F2":
                    this.moveFront();
                    this.moveFront();
                    break;
                case "F'":
                    this.moveFrontPrime();
                    break;
                
                case "B":
                    this.moveBack();
                    break;
                case "B2":
                    this.moveBack();
                    this.moveBack();
                    break;
                case "B'":
                    this.moveBackPrime();
                    break;

                case "U":
                    this.moveUp();
                    break;
                case "U2":
                    this.moveUp();
                    this.moveUp();
                    break;
                case "U'":
                    this.moveUpPrime();
                    break;

                case "D":
                    this.moveDown();
                    break;
                case "D2":
                    this.moveDown();
                    this.moveDown();
                    break;
                case "D'":
                    this.moveDownPrime();
                    break; 
            }
        }
    }
  

  }
  
  export default Cube