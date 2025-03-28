//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
const getNewLetter = (str, int) => alphabet.indexOf(str) >= 0 ? alphabet[alphabet.indexOf(str) + int] : str

export const rotate = (cipherText, rot) => {
  
  if(rot === 0 || rot === 26) return cipherText

  let output = ''
  for(let i = 0; i < cipherText.length; i++){
    output += getNewLetter(cipherText.charAt(i), rot)
  }
  return output
};
