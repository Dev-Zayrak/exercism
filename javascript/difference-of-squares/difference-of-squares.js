//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {

  #square;
  #sumSquare;
  #squareSum;

  //option 1
  constructor(square) {
    this.#square = square;
    this.#sumSquare = Array.from(Array(this.#square), (_, i) => i+1).reduce((acc, cv) => acc + cv**2);
    this.#squareSum = Array.from(Array(this.#square), (_, i) => i+1).reduce((acc, cv) => acc + cv) ** 2; 
  }

  /*
  Option 2
  constructor(square) {
    this.#square = square;
    this.#sumSquare = [...arrOfNumber(this.#square)].reduce((acc, cv) => acc + cv**2);
    this.#squareSum = [...arrOfNumber(this.#square)].reduce((acc, cv) => acc +cv) ** 2;
  }
  */

  get sumOfSquares() {
    return this.#sumSquare;
  }

  get squareOfSum() {
    return this.#squareSum;
  }

  get difference() {
    return this.#squareSum - this.#sumSquare;
  }
}

function* arrOfNumber(number){
  for (let i = 0; i<number; i++){
    yield i+1;
  }
}
