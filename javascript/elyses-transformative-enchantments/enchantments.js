// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export const seeingDouble = deck => deck.map(card => card * 2);


/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export const threeOfEachThree = deck => deck.flatMap(card => card === 3 ? [3, 3, 3] : card);


/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export const middleTwo = deck => deck.slice(4,6);


/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */
// @ts-ignore
export const sandwichTrick = deck => deck.toSpliced(deck.length/2, 0, deck[deck.length-1], deck[0]).slice(1, deck.length+1);


/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export const twoIsSpecial = deck => deck.filter(card => card === 2);


/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export const perfectlyOrdered = deck => deck.sort((num1, num2) =>  num1 < num2 ? -1 : 1);


/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export const reorder = deck => deck.reverse();
