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

  constructor(items) {
    this.values = items || [];
  }

  

  append(list2) {
    this.values = [...this.values, ...list2.values];
    return this;
  }

  concat() {
    throw new Error('Remove this statement and implement this function');
  }

  filter() {
    throw new Error('Remove this statement and implement this function');
  }

  map() {
    throw new Error('Remove this statement and implement this function');
  }

  length() {
    throw new Error('Remove this statement and implement this function');
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
