//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (cipherText, rails) => {

  let converts = Array.from({length: rails}, () => ['']);
  let sens = 'monter'

  for(let i = 0, y = 0; i<cipherText.length; i++){
    
    converts[y][0] += cipherText.charAt(i)

    if(sens === 'monter') {
      y++
      if(y === rails-1) sens = 'descendre'
    }
    else if(sens === 'descendre'){
      y--
      if(y === 0) sens = 'monter'
    }
  }
  return converts.flat(rails).join('').toString()
};



export const decode = (cipherText, rails) => {

  if (rails === 1) return cipherText;
    
  const cycleLength = 2 * (rails - 1);
  let railLengths = new Array(rails).fill(0);
  let pos = 0, step = 1;
  
  for (let char of cipherText) {
      railLengths[pos]++;
      if (pos === 0) step = 1;
      else if (pos === rails - 1) step = -1;
      pos += step;
  }
  
  let railsArray = new Array(rails).fill(null).map(() => []);
  let index = 0;
  for (let i = 0; i < rails; i++) {
      railsArray[i] = cipherText.slice(index, index + railLengths[i]).split('');
      index += railLengths[i];
  }
  
  let result = '';
  pos = 0;
  step = 1;
  for (let i = 0; i < cipherText.length; i++) {
      result += railsArray[pos].shift();
      if (pos === 0) step = 1;
      else if (pos === rails - 1) step = -1;
      pos += step;
  }
  
  return result;
};
