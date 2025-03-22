//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, array) => {

  const words = word.toLowerCase().split('').sort().join('');
 
  for(let i = 0; i<array.length; i++){    
    let wordFromArray = array[i].toLowerCase().split('').sort().join('');

    if(array[i].toLowerCase() === word.toLowerCase() ||
      wordFromArray !== words
    ){
      array.splice(i, 1);
      i--;
    }
  }
  return array
};
