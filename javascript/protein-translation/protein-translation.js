//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const proteins = new Map(Object.entries({
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP'
}));



//const getProteins = arr => arr.reduce((acc, value) => acc + (proteins.get(value) !== 'STOP' ? proteins.get(value) : ''), '')

export const translate = (sequence) => {
  
  if(sequence === undefined) return []
  /*
    decouper la sequence par bloc de 3 caracteres
    comparer les blocs avec les cles de PROTEIN
    if value = stop -> break
    mettre la valeur dans un tableau.
    retourner le tableau
  */

    
    
    let sequences = sequence.match(/.{1,3}/g)
    let output = []

    for(let i = 0; i<sequences.length; i++){

      let character = sequences[i]
      if(proteins.get(character) === undefined) throw new Error('Invalid codon')
      else if(proteins.get(character) === 'STOP') break
      else output.push(proteins.get(character))
    }

    //console.log(output)
    return output

    
    

    // export const rotate = (cipherText, rot) => [...cipherText].reduce( (acc, char) => acc + (alphabet.indexOf(char) >= 0 ? alphabet[alphabet.indexOf(char) + rot] : char), '' )



    // export const rotate = (cipherText, rot) => cipherText.replace(/[a-zA-Z]/g, char => alphabet[alphabet.indexOf(char) + rot])

};
