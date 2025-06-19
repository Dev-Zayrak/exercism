//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const actions = [
  'wink',
  'double blink',
  'close your eyes',
  'jump'
];

export const commands = number => {
  const binary = intToBinary(number);
  let response = [];

  for (let i = 0; i < 4; i++){
    if (binary[i] === 1){
      response.push(actions[i]);
    }
  };

  return binary[4] === 1 ? response.reverse() : response;
};

const intToBinary = (int, binary = []) => {
  const quotient = Math.floor(int / 2);
  binary.push(int%2);
  return quotient < 1 ?  binary : intToBinary(quotient, binary);
};
