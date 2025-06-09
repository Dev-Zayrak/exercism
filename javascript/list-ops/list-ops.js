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

  values;
  #size = 0;
  #mapping = [];

  constructor(items) {
    this.values = items || [];
    this.#size;
    this.#mapping;
  }

  

  append(list2) {
    this.values = [...this.values, ...list2.values];
    return this;
  }

  concat(lists) {
    const [first, ...rest] = [...lists.values];

    if (first){
      this.values = [...this.values, ...first.values];
    }
    if (rest[0] === undefined){
      return this;
    }

    return this.concat(new List(rest));
  }

  filter() {
    throw new Error('Remove this statement and implement this function');
  }

  map(callbackFunction) {
    const [first, ...rest] = this.values;

    if (first){
      this.#mapping = [...this.#mapping, callbackFunction(first)];
    }
    if (rest[0] === undefined){
      this.values = [...this.#mapping];
      return this;
    }
    
    
    this.values = rest;
    return this.map(callbackFunction);
  }

  length() {
    if (this.values[this.#size]){
      this.#size++;
      return this.length(this.values);
    }
    return this.#size;

  }

  foldl() {
    throw new Error('Remove this statement and implement this function');
  }

  foldr() {
    throw new Error('Remove this statement and implement this function');
  }

  reverse() {
    throw new Error('Remove this statement and implement this function');
  }
}
