//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const steps = (number, step = 0) => {

  if (!Number.isInteger(number) || number <= 0){
    throw new Error('Only positive integers are allowed');
  }

  if (number === 1){
    return step;
  }

  step++;

  if (number/2 === 1){
    return step;
  }

  return number % 2 === 0 ? steps(number/2, step) : steps(number*3+1, step);

};
