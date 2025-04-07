//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = str => {
  if(str === '') return ''

  return str.match(/(.)\1*/g).map(element => element.length === 1 ? element : element.length + element.charAt(0)).join('')
};

export const decode = str => {
  if(str === '') return ''

  return str.match(/\d+|[^\d]/g).map((element, i, arr) => Number.isInteger(parseInt(element)) ? arr[i+1].repeat(element-1) : element).join('')
};


/*
  BETTER SOLUTION

  export const encode = string => string.replace(/(.)\1+/g, ({ length }, char) => length + char);

  export const decode = string => string.replace(/(\d+)(.)/g, (_, length, char) => char.repeat(length));

*/