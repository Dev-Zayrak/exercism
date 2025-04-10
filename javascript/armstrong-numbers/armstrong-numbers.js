//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = int  =>{

  return Array.from(String(int)).reduce((acc, currentValue) => acc + (Number(currentValue) ** String(int).length),0) == int   

} 
