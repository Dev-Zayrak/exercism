//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Option 1
export const classify = number => {
  if (number <= 0){
    throw new Error('Classification is only possible for natural numbers.');
  }

  let aliquot = [];
  
  for (let i = number/2; i > 0; i--){
    if (number % i === 0){
      aliquot.push(i);
    }
  }

  let sumAliquot = aliquot.reduce((acc, cv) => acc + cv ,0);

  return number === sumAliquot ? 'perfect' : number > sumAliquot ? 'deficient' : 'abundant';
};


/*
Option 2 (slower) 

export const classify = number => {
  if (number <= 0){
    throw new Error('Classification is only possible for natural numbers.');
  }

  let sumAliquot = Array.from({length: Math.floor(number/2)}, (_, i) => i + 1).reduce((acc, i) => number % i === 0 ? acc + i : acc, 0);
  return number === sumAliquot ? 'perfect' : number > sumAliquot ? 'deficient' : 'abundant';
};

*/
