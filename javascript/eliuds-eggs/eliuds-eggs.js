//
// This is only a SKELETON file for the 'Eliud's Eggs' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*

Restrictions

Keep your hands off that bit-count functionality provided by your standard library!
Solve this one yourself using other basic tools instead.

*/

export const eggCount = (displayValue) => {

  const decimalToBinarys = (decimal, binarys = []) => decimal / 2 === 0 ? binarys : (binarys.push(decimal % 2), decimalToBinarys(Math.floor(decimal / 2), binarys)); 
    
  return decimalToBinarys(displayValue).reduce((acc, cv) => acc + cv, 0);  
};
