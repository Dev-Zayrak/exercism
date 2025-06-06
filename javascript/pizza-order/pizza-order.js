/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  
  const price = {
    "Margherita": 7,
    "Caprese": 9,
    "Formaggio": 10,
    "ExtraSauce": 1,
    "ExtraToppings": 2
  }

  // @ts-ignore
  return extras.length > 0 ? price[pizza] + pizzaPrice(...extras) : price[pizza];
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export const orderPrice = pizzaOrders => pizzaOrders.reduce((price, order) => price + pizzaPrice(order.pizza, ...order.extras), 0);

/*
  recursive function version
  doesn't work for gigantic order test — results in "Maximum call stack size exceeded"
  
  pizzaOrders.length === 0 ? 0 : pizzaPrice(pizzaOrders[0].pizza, ...pizzaOrders[0].extras) + orderPrice(pizzaOrders.slice(1));
 */
