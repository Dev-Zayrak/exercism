//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const proteins = {
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
}

export const translate = (sequence) => {
  
  if(sequence === undefined) return []
    
  let sequences = sequence.match(/.{1,3}/g)
  let output = []

  for(let i = 0; i<sequences.length; i++){
    let character = sequences[i]
    if(!proteins[character]) throw new Error('Invalid codon')
    else if(proteins[character] === 'STOP') return output
    else output.push(proteins[character])
  }
  return output
};
