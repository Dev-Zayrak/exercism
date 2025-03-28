//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'  

export const rotate = (cipherText, rot) => [...cipherText].reduce( (acc, char) => acc + (alphabet.indexOf(char) >= 0 ? alphabet[alphabet.indexOf(char) + rot] : char), '' )
