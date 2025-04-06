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

export const decode = str => {

  if(str === '') return ''

  let output = ''
  let count = ''

  for(let i = 0; i<str.length; i++){

    if(Number.isInteger(parseInt(str.charAt(i))) && Number.isInteger(parseInt(str.charAt(i+1)))){
      count += str.charAt(i)
      continue
    }

    if(Number.isInteger(parseInt(str.charAt(i))) && !Number.isInteger(parseInt(str.charAt(i+1)))){
      count += str.charAt(i)
      output += str.charAt(i+1).repeat(count)
      count = ''
      i++
      continue
    }

    if(!Number.isInteger(parseInt(str.charAt(i)))){
      output += str.charAt(i)
    }
  }
  return output
};
