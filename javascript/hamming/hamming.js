//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna1, dna2) => {

  if (dna1.length != dna2.length){
    throw new Error('strands must be of equal length');
  }



  //option 1
  return dna1.split('').reduce((acc, cv, index) => cv != dna2.charAt(index) ? acc+1 : acc ,0);

  //option 2
  //return dna1.split('').reduce((acc, _, index) => dna1.charAt(index) != dna2.charAt(index) ? acc+1 : acc ,0);

  //option 3
  // let diff = 0;

  // for (let i = 0; i < dna1.length; i++){
  //   if (dna1.charAt(i) != dna2.charAt(i)){
  //     diff++;
  //   }
  // }

  // return diff;
};
