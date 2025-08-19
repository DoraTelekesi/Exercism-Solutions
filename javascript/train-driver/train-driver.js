// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...numbers} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...numbers) {
  return [...numbers];
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {
  const [a, b, ...restIds] = ids;
  const modifiedList = [...restIds, a, b];
  return modifiedList;
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  const [first, ...restIds] = ids;
  return [first, ...missingWagons, ...restIds];
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  const extendedInfo = { ...information, ...additional };
  return extendedInfo;
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  const { timeOfArrival, ...basicInfo} = information;
  return [timeOfArrival, { ...basicInfo }];
}

// function init() {
//   console.log(getListOfWagons(1, 7, 12, 3, 14, 8, 5));
//   console.log(fixListOfWagons([2, 5, 1, 7, 4, 12, 6, 3, 13]));
//   console.log(correctListOfWagons([1, 5, 20, 7, 4, 8], [3, 17, 6, 15]));
//   console.log(extendRouteInformation({ from: "Berlin", to: "Hamburg" }, { length: "100", speed: "50" }));
//   console.log(
//     separateTimeOfArrival({
//       from: "Berlin",
//       to: "Hamburg",
//       length: "100",
//       timeOfArrival: "10:10",
//     })
//   );
// }
