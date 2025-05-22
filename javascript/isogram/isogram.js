//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
Option 1 - with regex
*/
export const isIsogram = string => !/([a-zA-Z]).*\1/i.test(string);



/*
Option 2 - without regex

export const isIsogram = string => {
  const newS = string.toLowerCase().replaceAll(/[\s-]/g, '');
  return newS.length === new Set(newS).size;
}
*/
