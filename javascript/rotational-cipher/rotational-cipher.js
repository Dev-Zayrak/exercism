//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isUppercase = str => /[A-Z]/.test(str);
const isLetter = str => /[a-zA-Z]/.test(str);
const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
const getNewLetter = (str, int) => alphabet[alphabet.indexOf(str) + int]

// operateur ternaire si valeur indexOf === -1 ? output += character : getNewLetter

export const rotate = (cipherText, rot) => {

  let tester1 = "'"
  console.log(alphabet.indexOf(tester1))
  console.log(getNewLetter(tester1, 13))
  
  if(rot === 0 || rot === 26) return cipherText


  /*
  
  recuperer un caractere
  verifier si c'est une lettre de l'alphabet
      si ce n'est pas une lettre on n'y touche pas et on la met dans le string d'ouput
      si c'est une lettre
          on va verifier si elle est uppercase ou non

      calculer la position de sa remplacante avec ROT
            on va parcourir un switch case pour recuperer sa remplacante et on la met dans le string d'ouput
  */

  let output = ""
  let transformToUppercase = true

  //tester si c'est une lettre de l'alphabet
  for(let i = 0; i < cipherText.length; i++){

    let character = cipherText.charAt(i)

    if(!isLetter(character)) {
      output += character
      continue
    }

    if(isUppercase(character)) {
      transformToUppercase = true
      character = character.toLowerCase()
    }
    else transformToUppercase = false

    let newLetter = getNewLetter(character, rot)

    if(transformToUppercase) newLetter = newLetter.toUpperCase()

    output += newLetter
  }

  return output

};
