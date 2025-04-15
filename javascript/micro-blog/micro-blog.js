//
// This is only a SKELETON file for the 'Micro-blog' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const truncate = (input) => {
  let output = []

  for(let i=0, y=0; i<input.length; i++, y++){

    if(input.codePointAt(i) > 65535){
      output[y] = input.charAt(i) + input.charAt(i+1)
      i++
    }else output[y]= input.charAt(i)
  }

  return output.slice(0,5).join("")
};
