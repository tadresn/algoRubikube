class Cube {
    tableau : string[];
  
    constructor(ptab: string[]) {
      this.tableau = ptab; 
    }

    private elementsToMoveRight(currentCube:string[][])
    {
        const whiteFace = currentCube[0].filter((element, i)=>i===2 || i===5 || i===8);
        const greenFace = currentCube[2].filter((element, i)=>i===2 || i===5 || i===8);
        const blueFace = currentCube[4].filter((element, i)=>i===0 || i===3 || i===6);
        const yellowFace = currentCube[5].filter((element, i)=>i===2 || i===5 || i===8);

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
            currentCube[4].splice(i*3 ,1,whiteFace[i]);
            currentCube[5].splice(i*3 +2 ,1,blueFace[i]);
        }

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
            currentCube[4].splice(i*3 ,1,yellowFace[i]);
            currentCube[5].splice(i*3 +2 ,1,greenFace[i]);
        }

        this.tableau = currentCube.map(face => face.join(""));

    }

    private elementsToMoveLeft(currentCube:string[][])
    {
        const whiteFace = currentCube[0].filter((element, i)=>i===0 || i===3 || i===6);
        const greenFace = currentCube[2].filter((element, i)=>i===0 || i===3 || i===6);
        const blueFace = currentCube[4].filter((element, i)=>i===2 || i===5 || i===8);
        const yellowFace = currentCube[5].filter((element, i)=>i===0 || i===3 || i===6);

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
            currentCube[0].splice(i*3, 1, blueFace[i]);
            currentCube[2].splice(i*3, 1, whiteFace[i]);
            currentCube[4].splice(i*3 + 2, 1, yellowFace[i]);
            currentCube[5].splice(i*3, 1, greenFace[i]);
        }

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
            currentCube[4].splice(i*3 + 2, 1, whiteFace[i]);
            currentCube[5].splice(i*3, 1, blueFace[i]);
        }

        this.tableau = currentCube.map(face => face.join(""));
    }


    private elementsToMoveFront(currentCube:string[][])
    {
        const whiteFace = currentCube[0].filter((element, i)=>i===0 || i===3 || i===6);
        const greenFace = currentCube[2].filter((element, i)=>i===0 || i===3 || i===6);
        const blueFace = currentCube[4].filter((element, i)=>i===2 || i===5 || i===8);
        const yellowFace = currentCube[5].filter((element, i)=>i===0 || i===3 || i===6);

        return {
            whiteFace, greenFace, blueFace, yellowFace
        }
    }




  
  }
  
  export default Cube