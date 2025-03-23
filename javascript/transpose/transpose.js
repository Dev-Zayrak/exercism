//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = input => {
  
  //if(input.length === 0) return [];

  //if(input.length === 1) return input[0].split('')
  
  const maxLength = input.reduce((max, str) => Math.max(max, str.length), 0)
  const inputModified = new Array(input.length)
  const output = new Array(maxLength)

  inputModified[input.length-1] = input[input.length-1]

  for(let i = input.length-1; i>0; i--){
    if(input[i-1] != undefined && input[i-1].length < inputModified[i].length){
      inputModified[i-1] = input[i-1].padEnd(inputModified[i].length);
    }else inputModified[i-1] = input[i-1]
  }
  
  for(let i = 0; i<output.length; i++){
    for(let y = 0; y<inputModified.length; y++){
      if(output[i] === undefined){
        output[i] = inputModified[y].charAt(i)
      }else output[i] += inputModified[y].charAt(i)
    }
  }
  return output
};



/* 

Meilleure solution trouver sur le site :


const getMaxLength = input => input.reduce((maxLength, { length }) => Math.max(maxLength, length), 0)


export const transpose = input => Array.from(Array(getMaxLength(input)),
  (_, i) => input.reduce((transposedText, text, j) =>
    transposedText + (text[i]?.padStart(j - transposedText.length + 1, ' ') || ''), '')
);


explication :

> Array() permet de creer un array avec une taille predefinie
> Array.from permet de remplir le tableau creer par Array() en appliquant la fonction .reduce a chaque indice
> .reduce permet de parcoucrir le tableau 'input'
> .padStart permet de rajouter des espaces devant le string si text[i] est defini pour pour aligner les caractères de manière correcte
*/