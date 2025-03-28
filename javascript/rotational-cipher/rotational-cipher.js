/**
 * 
 * Writing the function in two different ways, the execution time is similar between the two.
 * They take about 0.4... to execute all the tests.
 * 
 */

const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const rotate = (cipherText, rot) => cipherText.replace(/[a-zA-Z]/g, char => alphabet[alphabet.indexOf(char) + rot])
// export const rotate = (cipherText, rot) => [...cipherText].reduce( (acc, char) => acc + (alphabet.indexOf(char) >= 0 ? alphabet[alphabet.indexOf(char) + rot] : char), '' )
