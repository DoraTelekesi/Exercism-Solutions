// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
      break;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let count = 0;
  let wedges = 0;
  while (limes[i]) {
    let limeCut = limes.shift();
    switch (limeCut) {
      case "small":
        wedges += 6;

        break;
      case "medium":
        wedges += 8;

        break;
      case "large":
        wedges += 10;

        break;
    }
    if (wedgesNeeded > 0) {
      count++;
    }

    if (wedges >= wedgesNeeded) {
      break;
    }
  }
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    let drinkDone = orders.shift();
    if (drinkDone) {
      timeLeft -= timeToMixJuice(drinkDone);
    }
    if(orders.length == 0){
      break;
    }
  } while (timeToMixJuice(orders[0]) <= timeLeft || (timeToMixJuice(orders[0]) >= timeLeft && timeLeft > 0));

  return orders;
}

// function init() {
//   console.log(limesToCut(0, ["small", "small", "large", "medium", "small"]));
//   console.log(remainingOrders(7, ["Tropical Island", "Energizer", "Limetime", "All or Nothing", "Pure Strawberry Joy"]));
//   console.log(
//     remainingOrders(13, [
//       "Pure Strawberry Joy",
//       "Pure Strawberry Joy",
//       "Vitality",
//       "Tropical Island",
//       "All or Nothing",
//       "All or Nothing",
//       "All or Nothing",
//       "Green Garden",
//       "Limetime",
//     ])
//   );
//   console.log(remainingOrders(0.2, ["Bananas Gone Wild", "Pure Strawberry Joy"]));
//   console.log(remainingOrders(12, ["Energizer", "Green Garden", "Ruby Glow", "Pure Strawberry Joy", "Tropical Island", "Limetime"]));
// }
