//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const encode = str => {
  
  if(str === '') return ''

  let output = ''
  let count = 1

  for(let i = 0; i<str.length; i++){

    if(count === 1 && str.charAt(i) !== str.charAt(i+1)) {
      output += str.charAt(i)
      continue
    }
    if(str.charAt(i) === str.charAt(i+1)){
      count++
      continue
    }
    if(str.charAt(i) !== str.charAt(i+1)){
      output += count + str.charAt(i)
      count = 1
    }
  }
  return output
};

const convertToArray = str => str.match(/\d+|[^\d]/g).map(element => Number.isInteger(parseInt(element)) ? parseInt(element) : element)
const convert = (arr, str) => {
  arr.forEach((element, i, arr) => Number.isInteger(element) ? str += arr[i+1].repeat(element-1) : str += element);
  return str
}

export const decode = str => {
  if(str === '') return ''
  return convert(convertToArray(str), '')
};
