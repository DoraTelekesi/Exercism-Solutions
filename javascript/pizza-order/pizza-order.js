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

  let pizzaBasePrice = 0;

  switch (pizza) {
    case "Margherita":
      pizzaBasePrice = 7;
      break;
    case "Caprese":
      pizzaBasePrice = 9;
      break;
    case "Formaggio":
      10;
      pizzaBasePrice = 10;
  }

  if (extras.length === 0) {
    return pizzaBasePrice;
  }
  let extraPrice = 0;
  if (extras[0] === "ExtraSauce") extraPrice = 1;
  if (extras[0] === "ExtraToppings") extraPrice = 2;
  const result = pizzaBasePrice + extraPrice + pizzaPrice("NoBase", ...extras.slice(1));
  // console.log("Returning from call:", pizza, "extras:", extras, "result:", result);
  return result;
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
export function orderPrice(pizzaOrders) {
  let sum = 0;
  for (let i = 0; i < pizzaOrders.length; i++) {
    // console.log(pizzaOrders[i]);
    let { pizza: pizza, extras: extras } = pizzaOrders[i];
    sum += pizzaPrice(pizza, ...extras);
  }
  return sum;
}

// function init() {
//   console.log(pizzaPrice("Caprese", "ExtraSauce", "ExtraToppings"));
//   const margherita = { pizza: "Margherita", extras: [] };
//   const caprese = { pizza: "Caprese", extras: ["ExtraToppings"] };
//   console.log(orderPrice([margherita, caprese]));
// }
