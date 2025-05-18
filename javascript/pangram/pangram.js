//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = input => {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  Array.from(input.toLowerCase()).forEach(character => {
    if (alphabet.includes(character)){  
      alphabet.splice(alphabet.indexOf(character), 1);
    }
  });

  return alphabet.length === 0;
};
