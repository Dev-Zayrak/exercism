//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input, int) => {

  let converts = Array.from({length: int}, () => ['']);
  let rail = 0
  let sens = 'monter'


  for(let i = 0, y = 0; i<input.length; i++){

   // console.log('y = '+ y + ' '+ sens)
    
    converts[y][0] += input.charAt(i)

    //console.log(converts)


    if(sens === 'monter') {
      y++
      if(y === int-1) sens = 'descendre'
    }
    else if(sens === 'descendre'){
      y--
      if(y === 0) sens = 'monter'
    }



    //console.log('y = '+ y  + ' '+ sens)
    //console.log('-----------')
  }

  return converts.flat(int).join('').toString()

};

export const decode = (string, int) => {
  throw new Error('Remove this statement and implement this function');
};
