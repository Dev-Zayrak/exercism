export const toRoman = (numberToConvert, letterValue = 1000, roman = '') => {
  let modulo;
  let numberOfLetter;

  if (numberToConvert % letterValue !== numberToConvert) {
    modulo = numberToConvert % letterValue;
    let rest = numberToConvert - modulo;
    numberOfLetter = rest / letterValue;
  } else {
    modulo = numberToConvert;
  }

  let currentRoman = roman;

  switch (letterValue) {
    case 1000:
      currentRoman = currentRoman + 'M'.repeat(numberOfLetter);
      letterValue = 500;
      break;
    case 500:
      numberOfLetter === 4 ? currentRoman = currentRoman + 'CM' : currentRoman = currentRoman + 'D'.repeat(numberOfLetter);
      letterValue = 100;
      break;
    case 100:
      numberOfLetter === 4 ? currentRoman = currentRoman + 'CD' : currentRoman = currentRoman + 'C'.repeat(numberOfLetter);
      letterValue = 50;
      break;
    case 50:
      numberOfLetter === 4 ? currentRoman = currentRoman + 'XC' : currentRoman = currentRoman + 'L'.repeat(numberOfLetter);
      letterValue = 10;
      break;
    case 10:
      numberOfLetter === 4 ? currentRoman = currentRoman + 'XL' : currentRoman = currentRoman + 'X'.repeat(numberOfLetter);
      letterValue = 5;
      break;
    case 5:
      numberOfLetter === 4 ? currentRoman = currentRoman + 'IX' : currentRoman = currentRoman + 'V'.repeat(numberOfLetter);
      letterValue = 1;
      break;
    case 1:
      numberOfLetter === 4 ? currentRoman = currentRoman + 'IV' : currentRoman = currentRoman + 'I'.repeat(numberOfLetter);
      letterValue = 0;
  }

  if (letterValue === 0) {
    const mapNumber = {
      VIV: 'IX',
      LXL: 'XC',
      DCD: 'CM'
    };
    currentRoman = currentRoman.replace(/VIV|LXL|DCD/g, function (matched) {
      return mapNumber[matched];
    });
    return currentRoman;
  } else {
    return toRoman(modulo, letterValue, currentRoman);
  }
};
