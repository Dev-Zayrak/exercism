//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, array) => {

  const targets = target.toLowerCase().split('').sort().join('');
 
  return array.filter(word => word.toLowerCase() !== target.toLowerCase() && word.toLowerCase().split('').sort().join('') === targets)
};
