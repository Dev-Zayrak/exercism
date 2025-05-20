//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {

  #isEquilateral;
  #isIsosceles;
  #isScalene;

  constructor(...sides) {
    const uniqueSides = new Set(sides);
    const [side1, side2, side3] = sides.sort((a, b) => a - b);
    
    this.#isEquilateral = uniqueSides.size === 1 && side1 !== 0;
    this.#isIsosceles = uniqueSides.size <= 2 && side1 + side2 > side3;
    this.#isScalene = uniqueSides.size === 3 && side1 + side2 > side3;
  }


  get isEquilateral() {
    return this.#isEquilateral;
  }

  get isIsosceles() {
    return this.#isIsosceles;
  }

  get isScalene() {
    return this.#isScalene;
  }
}
