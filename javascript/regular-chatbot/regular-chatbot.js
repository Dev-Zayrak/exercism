// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export const isValidCommand = command => /^chatbot/i.test(command);

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  let regex = new RegExp('emoji[0-9]+', 'g'); 
  return message.replace(regex, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */

// '(+34) 659-771-594'

export function checkPhoneNumber(number) {
  let regex = new RegExp(/\(\+[0-9]{2}\)\s[0-9]{3}-[0-9]{3}-[0-9]{3}/, 'g');
  return regex.test(number) ? 'Thanks! You can now download me to your phone.' : "Oops, it seems like I can't reach out to " + number;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export const getURL= userInput => userInput.match(/[a-z]+\.[a-z]+/g);


/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  let greeting = 'Nice to meet you, firstName lastName';
  let fullNames = fullName.split(/,/);
  return greeting.replace(/firstName|lastName/g, match => match === 'firstName' ? fullNames[1].trimStart() : fullNames[0]);
}
