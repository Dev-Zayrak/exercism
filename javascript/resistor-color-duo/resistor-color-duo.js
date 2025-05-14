//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

//delete the 1 or 2 after the name of the function you want to test
//option 1
export const decodedValue1 = colors => COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1]);

//option 2
export const decodedValue2 = colors => parseInt(`${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`);

