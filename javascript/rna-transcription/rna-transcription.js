//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// option 1 - with object
const DnaToRna = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export const toRna = dnaSequence => {
  return dnaSequence.replace(/./g, letter => DnaToRna[letter] || letter)
}

/*
option 2 - with switch case

export const toRna = dnaSequence => {
  return dnaSequence.replace(/[A-Z]/g, letter => {
    switch (letter) {
      case 'G': return 'C';
      break;
      case 'C': return 'G';
      break;
      case 'T': return 'A';
      break;
      case 'A': return 'U';
      default: return letter;
    }
  } )
};

*/
