export const convert = (value) => {
  let raindropSound = ''
  if (value % 3 === 0) raindropSound += "Pling" 
  if (value % 5 === 0) raindropSound += "Plang"
  if (value % 7 === 0) raindropSound += "Plong"
  
  return raindropSound ? raindropSound : value.toString()
};