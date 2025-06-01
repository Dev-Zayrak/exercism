//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {

  #square;
  #sumSquare;
  #squareSum;

  constructor(square) {
    this.#square = square;
    this.#sumSquare = this.#square * (this.#square+1) * (2*this.#square+1)/6;
    this.#squareSum = (this.#square * (this.#square+1) /2) ** 2;
  }

  /*option 2
  constructor(square) {
    this.#square = square;
    this.#sumSquare = Array.from(Array(this.#square), (_, i) => i+1).reduce((acc, cv) => acc + cv**2);
    this.#squareSum = Array.from(Array(this.#square), (_, i) => i+1).reduce((acc, cv) => acc + cv) ** 2; 
  }
  */

  /*
  Option 3
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
