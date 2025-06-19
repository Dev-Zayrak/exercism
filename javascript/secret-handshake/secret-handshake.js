//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ACTIONS = ['wink', 'double blink', 'close your eyes', 'jump'];

export const commands = number => {
  const binary = intToBinary(number);

  let response = ACTIONS.filter((_, i) => binary[i]);

  return binary[4] === 1 ? response.reverse() : response;
};

const intToBinary = (int, binary = []) => {
  const quotient = Math.floor(int / 2);
  binary.push(int%2);
  return quotient < 1 ?  binary : intToBinary(quotient, binary);
};


/*
Option 2 

export function commands(n) {
  const result = ACTIONS.filter((_, i) => (1 << i) & n);
  return n & 16 ? result.reverse() : result;
}

*/