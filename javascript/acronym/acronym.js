//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = sentence =>  sentence.toUpperCase().split(/[\s-]+/).reduce((acc, word) => acc + word.match(/[A-Z]/), '');
