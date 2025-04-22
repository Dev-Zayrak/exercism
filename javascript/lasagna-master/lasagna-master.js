/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft){
    return timeLeft === undefined ? 'You forgot to set the timer.' : timeLeft === 0 ? 'Lasagna is done.' : 'Not done, please wait.';
}

export function preparationTime(layers, timeByLayer = 2){
    return layers.length * timeByLayer;
}

export function quantities(layers){
    return {
        noodles: layers.filter(ingredient => ingredient === 'noodles').length * 50,
        sauce: layers.filter(ingredient => ingredient === 'sauce').length * 0.2,
    };
}

export function addSecretIngredient(friendRecipients, myRecipients){
    myRecipients.push(friendRecipients[friendRecipients.length-1]);
}

export function scaleRecipe(recipe, nbPortion){
    const newRecipe = structuredClone(recipe);
    for(const property in newRecipe){
        newRecipe[property] = (newRecipe[property]/2) * nbPortion;
    }
    return newRecipe;
}
