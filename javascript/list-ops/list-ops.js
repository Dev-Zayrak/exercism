//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
 * Importante rule :

  Using core language features to build and deconstruct arrays via destructuring, 
  and using the array literal [] are allowed, but no functions from the Array.prototype should be used.
 */

export class List {

  #values;
  #size;
  #mapping;
  #filter;
  #reverse;

  constructor(items) {
    this.#values = items || [];
    this.#size = 0;
    this.#mapping = [];
    this.#filter = [];
    this.#reverse = [];
  }

  get values() {
    return this.#values;
  }


  append(list2) {
    this.#values = [...this.#values, ...list2.#values];
    return this;
  }

  concat(lists) {
    const [first, ...rest] = [...lists.#values];

    if (first){
      this.#values = [...this.#values, ...first.#values];
    }
    if (rest[0] === undefined){
      return this;
    }

    return this.concat(new List(rest));
  }

  filter(callbackFunction) {
    const [first, ...rest] = this.#values;

    if (callbackFunction(first)){
      this.#filter = [...this.#filter, first];
    }
    if (rest[0] === undefined){
      this.#values = [...this.#filter];
      return this;
    }

    this.#values = rest;
    return this.filter(callbackFunction);
  }

  map(callbackFunction) {
    const [first, ...rest] = this.#values;

    if (first){
      this.#mapping = [...this.#mapping, callbackFunction(first)];
    }
    if (rest[0] === undefined){
      this.#values = [...this.#mapping];
      return this;
    }
    
    this.#values = rest;
    return this.map(callbackFunction);
  }

  length() {
    if (this.#values[this.#size]){
      this.#size++;
      return this.length(this.#values);
    }
    return this.#size;
  }

  foldl(callbackFunction, initialAcc) {
    const [first, ...rest] = this.#values;

    if (first){
      initialAcc = callbackFunction(initialAcc, first);
    }
    if (rest[0] === undefined){
      return initialAcc;
    }

    this.#values = rest;
    return this.foldl(callbackFunction, initialAcc);
  }

  foldr(callbackFunction, initialAcc) {
    // return this.reverse().foldl(callbackFunction, initialAcc); => Cheat ?

    const [first, ...rest] = this.#values;

    if (first === undefined){
      return initialAcc;
    }
    if (rest[0] === undefined){
      return callbackFunction(initialAcc, first);
    }
    
    this.#values = rest;
    const resultFromRecursion = this.foldr(callbackFunction, initialAcc);

    return callbackFunction(resultFromRecursion, first);
  }

  reverse() {
    const [first, ...rest] = this.#values;

    if (first){
      this.#reverse = [first, ...this.#reverse];
    }
    if (rest[0] === undefined){
      this.#values = [...this.#reverse];
      return this;
    }

    this.#values = rest;
    return this.reverse();
  }
}
