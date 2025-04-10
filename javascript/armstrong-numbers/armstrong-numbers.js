//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = int =>{

 if(typeof int === 'bigint'){
  return Array.from(String(int)).reduce((acc, currentValue) => acc + (BigInt(currentValue) ** BigInt(String(int).length)),0n) === int  
 }

  return Array.from(String(int)).reduce((acc, currentValue) => acc + (Number(currentValue) ** String(int).length),0) === int  
} 
