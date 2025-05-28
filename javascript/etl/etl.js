//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = old => {
  let keys = Object.keys(old)
  let values = Object.values(old)
  let result = {};

  values.forEach((letters, i) =>{
    letters.forEach(letter =>{
      result[letter.toLowerCase()] = parseInt(keys[i]);
    })
  })

  return result;
};
