/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Returns the status of the lasagna in the hoven using a given timer parameter.
 * If no timer argument passed, the function will return a string indicating this.
 * @param {number} timeLeft = Parameter representing a timer object.
 * @returns {string} = String representing the state of the lasagna.
 */
export function cookingStatus(timeLeft){
    return timeLeft === undefined ? 'You forgot to set the timer.' : timeLeft === 0 ? 'Lasagna is done.' : 'Not done, please wait.';
}

/**
 * Determines the total preparation time needed with a given array of layers.
 * @param {Array.<string>} layers = Array of layers in the lasagna.
 * @param {number} timeByLayer = default value = 2 min. Time needed per layer.
 * @returns {number} Total number of minutes needed to prepare the lasagna.
 */
export function preparationTime(layers, timeByLayer = 2){
    return layers.length * timeByLayer;
}

/**
 * Determines the total amount of noodles (in grams) and sauce (in liters) needed based on an array
 * representing the planned layers for the lasagna.
 * @param {Array.<string>} layers 
 * @returns {{
 *  noodles: number,
 *  sauce: number
 * }}
 */
export function quantities(layers){
    return {
        noodles: layers.filter(ingredient => ingredient === 'noodles').length * 50,
        sauce: layers.filter(ingredient => ingredient === 'sauce').length * 0.2,
    };
}

/**
 * Adds the last ingredient from the first array to the end of the second array.
 * @param {Array.<string>} friendRecipients = Array of ingredients in friend's lasagna.
 * @param {Array.<string>} myRecipients = Array of ingredients in my lasagna.
 */
export function addSecretIngredient(friendRecipients, myRecipients){
    myRecipients.push(friendRecipients[friendRecipients.length-1]);
}

/**
 * Determine the ingredient quantities scaled for varying portion sizes.
 * @param {Object} recipe = Object representing the recipe. Each key is an ingredient, and its value the quantity.
 * @param {number} nbPortion = New number of portions to make.
 * @returns {Object} newRecipe = Object representing the recipe with the new portions sizes.
 */
export function scaleRecipe(recipe, nbPortion){
    const newRecipe = structuredClone(recipe);
    for(const property in newRecipe){
        newRecipe[property] = (newRecipe[property]/2) * nbPortion;
    };
    return newRecipe;
}
