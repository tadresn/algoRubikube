import Colors from "./Colors";
import Cube from "./Cube";

export class ThreeByThree extends Cube {
   public override rotationFace(face: Colors[]) {
      return [
         face[6],
         face[3],
         face[0],
         face[7],
         face[4],
         face[1],
         face[8],
         face[5],
         face[2],
      ];
   }

   public override rotationFacePrime(face: Colors[]) {
      return [
         face[2],
         face[5],
         face[8],
         face[1],
         face[4],
         face[7],
         face[0],
         face[3],
         face[6],
      ];
   }

   private elementsToMoveRight(currentCube: Colors[][]) {
      const whiteFace = currentCube[0].filter(
         (_element, i) => i === 2 || i === 5 || i === 8
      );
      const greenFace = currentCube[2].filter(
         (_element, i) => i === 2 || i === 5 || i === 8
      );
      const blueFace = currentCube[4].filter(
         (_element, i) => i === 0 || i === 3 || i === 6
      );
      const yellowFace = currentCube[5].filter(
         (_element, i) => i === 2 || i === 5 || i === 8
      );

      return {
         whiteFace,
         greenFace,
         blueFace,
         yellowFace,
      };
   }

   public override moveRight() {
      const currentCube = [...this.cubeArray];

      const { whiteFace, greenFace, blueFace, yellowFace } =
         this.elementsToMoveRight(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[0].splice(i * 3 + 2, 1, greenFace[i]);
         currentCube[2].splice(i * 3 + 2, 1, yellowFace[i]);
         currentCube[4].splice(i * 3, 1, whiteFace[2 - i]);
         currentCube[5].splice(i * 3 + 2, 1, blueFace[2 - i]);
      }

      currentCube[3] = this.rotationFace(currentCube[3]);

      this.cubeArray = currentCube;
   }

   public override moveRightPrime() {
      const currentCube = [...this.cubeArray];

      const { whiteFace, greenFace, blueFace, yellowFace } =
         this.elementsToMoveRight(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[0].splice(i * 3 + 2, 1, blueFace[2 - i]);
         currentCube[2].splice(i * 3 + 2, 1, whiteFace[i]);
         currentCube[4].splice(i * 3, 1, yellowFace[2 - i]);
         currentCube[5].splice(i * 3 + 2, 1, greenFace[i]);
      }

      currentCube[3] = this.rotationFacePrime(currentCube[3]);

      this.cubeArray = currentCube;
   }

   private elementsToMoveLeft(currentCube: Colors[][]) {
      const whiteFace = currentCube[0].filter(
         (_element, i) => i === 0 || i === 3 || i === 6
      );
      const greenFace = currentCube[2].filter(
         (_element, i) => i === 0 || i === 3 || i === 6
      );
      const blueFace = currentCube[4].filter(
         (_element, i) => i === 2 || i === 5 || i === 8
      );
      const yellowFace = currentCube[5].filter(
         (_element, i) => i === 0 || i === 3 || i === 6
      );

      return {
         whiteFace,
         greenFace,
         blueFace,
         yellowFace,
      };
   }

   public override moveLeft() {
      const currentCube = [...this.cubeArray];

      const { whiteFace, greenFace, blueFace, yellowFace } =
         this.elementsToMoveLeft(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[0].splice(i * 3, 1, blueFace[2 - i]);
         currentCube[2].splice(i * 3, 1, whiteFace[i]);
         currentCube[4].splice(i * 3 + 2, 1, yellowFace[2 - i]);
         currentCube[5].splice(i * 3, 1, greenFace[i]);
      }

      currentCube[1] = this.rotationFace(currentCube[1]);

      this.cubeArray = currentCube;
   }

   public override moveLeftPrime() {
      const currentCube = [...this.cubeArray];

      const { whiteFace, greenFace, blueFace, yellowFace } =
         this.elementsToMoveLeft(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[0].splice(i * 3, 1, greenFace[i]);
         currentCube[2].splice(i * 3, 1, yellowFace[i]);
         currentCube[4].splice(i * 3 + 2, 1, whiteFace[2 - i]);
         currentCube[5].splice(i * 3, 1, blueFace[2 - i]);
      }

      currentCube[1] = this.rotationFacePrime(currentCube[1]);

      this.cubeArray = currentCube;
   }

   public elementsToMoveFront(currentCube: Colors[][]) {
      const whiteFace = currentCube[0].filter(
         (_element, i) => i === 6 || i === 7 || i === 8
      );
      const orangeFace = currentCube[1].filter(
         (_element, i) => i === 2 || i === 5 || i === 8
      );
      const redFace = currentCube[3].filter(
         (_element, i) => i === 0 || i === 3 || i === 6
      );
      const yellowFace = currentCube[5].filter(
         (_element, i) => i === 0 || i === 1 || i === 2
      );

      return {
         whiteFace,
         orangeFace,
         redFace,
         yellowFace,
      };
   }

   public override moveFront() {
      const currentCube = [...this.cubeArray];

      const { whiteFace, orangeFace, redFace, yellowFace } =
         this.elementsToMoveFront(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[0].splice(6 + i, 1, orangeFace[2 - i]);
         currentCube[1].splice(i * 3 + 2, 1, yellowFace[i]);
         currentCube[3].splice(i * 3, 1, whiteFace[i]);
         currentCube[5].splice(i, 1, redFace[2 - i]);
      }

      currentCube[2] = this.rotationFace(currentCube[2]);

      this.cubeArray = currentCube;
   }

   public override moveFrontPrime() {
      const currentCube = [...this.cubeArray];

      const { whiteFace, orangeFace, redFace, yellowFace } =
         this.elementsToMoveFront(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[0].splice(6 + i, 1, redFace[i]);
         currentCube[1].splice(i * 3 + 2, 1, whiteFace[2 - i]);
         currentCube[3].splice(i * 3, 1, yellowFace[2 - i]);
         currentCube[5].splice(i, 1, orangeFace[i]);
      }

      currentCube[2] = this.rotationFacePrime(currentCube[2]);

      this.cubeArray = currentCube;
   }

   private elementsToMoveBack(currentCube: Colors[][]) {
      const whiteFace = currentCube[0].filter(
         (_element, i) => i === 0 || i === 1 || i === 2
      );
      const orangeFace = currentCube[1].filter(
         (_element, i) => i === 0 || i === 3 || i === 6
      );
      const redFace = currentCube[3].filter(
         (_element, i) => i === 2 || i === 5 || i === 8
      );
      const yellowFace = currentCube[5].filter(
         (_element, i) => i === 6 || i === 7 || i === 8
      );

      return {
         whiteFace,
         orangeFace,
         redFace,
         yellowFace,
      };
   }

   public override moveBack() {
      const currentCube = [...this.cubeArray];

      const { whiteFace, orangeFace, redFace, yellowFace } =
         this.elementsToMoveBack(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[0].splice(i, 1, redFace[i]);
         currentCube[1].splice(i * 3, 1, whiteFace[2 - i]);
         currentCube[3].splice(i * 3 + 2, 1, yellowFace[2 - i]);
         currentCube[5].splice(6 + i, 1, orangeFace[i]);
      }

      currentCube[4] = this.rotationFace(currentCube[4]);

      this.cubeArray = currentCube;
   }

   public override moveBackPrime() {
      const currentCube = [...this.cubeArray];

      const { whiteFace, orangeFace, redFace, yellowFace } =
         this.elementsToMoveBack(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[0].splice(i, 1, orangeFace[2 - i]);
         currentCube[1].splice(i * 3, 1, yellowFace[i]);
         currentCube[3].splice(i * 3 + 2, 1, whiteFace[i]);
         currentCube[5].splice(6 + i, 1, redFace[2 - i]);
      }

      currentCube[4] = this.rotationFacePrime(currentCube[4]);

      this.cubeArray = currentCube;
   }

   private elementsToMoveUp(currentCube: Colors[][]) {
      const orangeFace = currentCube[1].filter(
         (_element, i) => i === 0 || i === 1 || i === 2
      );
      const greenFace = currentCube[2].filter(
         (_element, i) => i === 0 || i === 1 || i === 2
      );
      const redFace = currentCube[3].filter(
         (_element, i) => i === 0 || i === 1 || i === 2
      );
      const blueFace = currentCube[4].filter(
         (_element, i) => i === 0 || i === 1 || i === 2
      );

      return {
         orangeFace,
         greenFace,
         redFace,
         blueFace,
      };
   }

   public override moveUp() {
      const currentCube = [...this.cubeArray];

      const { orangeFace, greenFace, redFace, blueFace } =
         this.elementsToMoveUp(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[1].splice(i, 1, greenFace[i]);
         currentCube[2].splice(i, 1, redFace[i]);
         currentCube[3].splice(i, 1, blueFace[i]);
         currentCube[4].splice(i, 1, orangeFace[i]);
      }

      currentCube[0] = this.rotationFace(currentCube[0]);

      this.cubeArray = currentCube;
   }

   public override moveUpPrime() {
      const currentCube = [...this.cubeArray];

      const { orangeFace, greenFace, redFace, blueFace } =
         this.elementsToMoveUp(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[1].splice(i, 1, blueFace[i]);
         currentCube[2].splice(i, 1, orangeFace[i]);
         currentCube[3].splice(i, 1, greenFace[i]);
         currentCube[4].splice(i, 1, redFace[i]);
      }

      currentCube[0] = this.rotationFacePrime(currentCube[0]);

      this.cubeArray = currentCube;
   }

   private elementsToMoveDown(currentCube: Colors[][]) {
      const orangeFace = currentCube[1].filter(
         (_element, i) => i === 6 || i === 7 || i === 8
      );
      const greenFace = currentCube[2].filter(
         (_element, i) => i === 6 || i === 7 || i === 8
      );
      const redFace = currentCube[3].filter(
         (_element, i) => i === 6 || i === 7 || i === 8
      );
      const blueFace = currentCube[4].filter(
         (_element, i) => i === 6 || i === 7 || i === 8
      );

      return {
         orangeFace,
         greenFace,
         redFace,
         blueFace,
      };
   }

   public override moveDown() {
      const currentCube = [...this.cubeArray];

      const { orangeFace, greenFace, redFace, blueFace } =
         this.elementsToMoveDown(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[1].splice(6 + i, 1, blueFace[i]);
         currentCube[2].splice(6 + i, 1, orangeFace[i]);
         currentCube[3].splice(6 + i, 1, greenFace[i]);
         currentCube[4].splice(6 + i, 1, redFace[i]);
      }

      currentCube[5] = this.rotationFace(currentCube[5]);

      this.cubeArray = currentCube;
   }

   public override moveDownPrime() {
      const currentCube = [...this.cubeArray];

      const { orangeFace, greenFace, redFace, blueFace } =
         this.elementsToMoveDown(currentCube);

      for (let i = 0; i < 3; i++) {
         currentCube[1].splice(6 + i, 1, greenFace[i]);
         currentCube[2].splice(6 + i, 1, redFace[i]);
         currentCube[3].splice(6 + i, 1, blueFace[i]);
         currentCube[4].splice(6 + i, 1, orangeFace[i]);
      }

      currentCube[5] = this.rotationFacePrime(currentCube[5]);

      this.cubeArray = currentCube;
   }

   public getScore(currentCube : ThreeByThree) {
      let correctScore = 0;
      let maxScore = 54;
      let solution = new ThreeByThree([
        Array(9).fill('W'), 
        Array(9).fill('O'), 
        Array(9).fill('G'),
        Array(9).fill('R'), 
        Array(9).fill('B'),
        Array(9).fill('Y'),
      ]);
    
      for (let face = 0; face < 6; face++) {
        for (let piece = 0; piece < 9; piece++) {
          if (solution.cubeArray[face][piece] === currentCube.cubeArray[face][piece]) {
            correctScore += 1;
          }
        }
      }
      return correctScore/maxScore*100;
    }
}
