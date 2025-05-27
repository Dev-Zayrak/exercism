//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const VALID_NUMBER_LENGTH = 10;
const MAX_NUMBER_LENGTH = 11;
const VALID_COUNTRY_CODE = '1';
const COUNTRY_CODE_INDEX = 0;
const AREA_CODE_INDEX = 0;
const EXCHANGE_CODE_INDEX = 3;

export const clean = phone => {

  if (/[@!:]/.test(phone)){
    throw new Error('Punctuations not permitted');
  }
  if (/[a-zA-Z]/.test(phone)){
    throw new Error('Letters not permitted');
  }

  let cleanedNumber = phone.match(/[0-9]/g).join('');

  if (cleanedNumber.length < VALID_NUMBER_LENGTH){
    throw new Error('Incorrect number of digits');
  }
  if (cleanedNumber.length > MAX_NUMBER_LENGTH){
    throw new Error(`More than ${MAX_NUMBER_LENGTH} digits`);
  }
  if (cleanedNumber.length === MAX_NUMBER_LENGTH && cleanedNumber.charAt(COUNTRY_CODE_INDEX) != '1'){
    throw new Error(`${MAX_NUMBER_LENGTH} digits must start with ${VALID_COUNTRY_CODE}`);
  }

  let cleanedNumber10 = cleanedNumber.slice(-VALID_NUMBER_LENGTH);

  if (cleanedNumber10.charAt(AREA_CODE_INDEX) === '0'){
    throw new Error('Area code cannot start with zero');
  }
  if (cleanedNumber10.charAt(AREA_CODE_INDEX) === '1'){
    throw new Error('Area code cannot start with one');
  }
  if (cleanedNumber10.charAt(EXCHANGE_CODE_INDEX) === '1'){
    throw new Error('Exchange code cannot start with one');
  }
  if (cleanedNumber10.charAt(EXCHANGE_CODE_INDEX) === '0'){
    throw new Error('Exchange code cannot start with zero');
  }

  return cleanedNumber10;
};
