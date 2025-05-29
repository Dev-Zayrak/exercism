//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {

  #slices = [];
  #series;

  constructor(series) {
    if (!series){
      throw new Error('series cannot be empty');
    }
    this.#series = series;
    this.#slices;
  }

  slices(sliceLength) {
    if (sliceLength === 0){
      throw new Error('slice length cannot be zero');
    }
    if (sliceLength < 0){
      throw new Error('slice length cannot be negative');
    }
    if (sliceLength > this.#series.length){
      throw new Error('slice length cannot be greater than series length');
    }

    // option 1
    return Array.from(this.#series).map(Number).map((_, i, digits) => digits.slice(i, sliceLength+i)).filter(elem => elem.length === sliceLength);


    /*
    Option 2
    
    Array.from(this.#series).forEach((_, i, digits) =>{
      let pieces = digits.slice(i, sliceLength+i).map(Number);
      if (pieces.length === sliceLength){
        this.#slices.push(pieces);
      }
    })

    return this.#slices
    */

    /*
    Option 3
    Array.from(this.#series).forEach((_, i, digits) =>{
          this.#slices.push(digits.slice(i, sliceLength+i).map(Number));
    })

    return this.#slices.filter(elem => elem.length === sliceLength);
    */

    /*
    Option 4

    for (let i = 0; i<this.#series.length; i++){
      let pieces = this.#series.slice(i, sliceLength+i).split('').map(Number);
      if (pieces.length === sliceLength){
        this.#slices.push(pieces);
      }
    }

    return this.#slices;
    */
  }
}
