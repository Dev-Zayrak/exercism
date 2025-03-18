const calcHypotenuse = (a, b) => Math.sqrt(a ** 2 + b ** 2)

export const score = (number1, number2) => {
  
  const position = calcHypotenuse(Math.abs(number1), Math.abs(number2))
  
  return position > 10 ? 0 : position > 5 ? 1 : position > 1 ? 5 : 10
};