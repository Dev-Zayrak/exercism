//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {

  #matrix;

  constructor(input) {
    this.#matrix = input.split('\n').map(element => element.split(' ').map(number => parseInt(number)));
  }

  get rows() {
   return this.#matrix;
  }

  get columns() {
    return Array.from(this.#matrix[0], (_, i) => this.#matrix.map(tableau => tableau[i]));
  }

}
