/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  const [first] = deck;
  return first;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  const [first, second] = deck;
  return second;
}

/**
 * Switch the position of the two cards
 *
 * @param {[Card, Card]} deck
 *
 * @returns {[Card, Card]} new deck with the 2 cards swapped
 */
export function swapTwoCards(deck) {
  let [a, b] = deck;
  [a, b] = [b, a];
  return [a, b];
}

/**
 * Rotate (shift) the position of the three cards (by one place)
 *
 * @param {[Card, Card, Card]} deck
 *
 * @returns {[Card, Card, Card]} new deck with the 3 cards shifted by one position
 */
export function shiftThreeCardsAround(deck) {
  let [a, b, c] = deck;
  [a, b, c] = [b, c, a];
  return [a, b, c];
}

/**
 * Grab the chosen pile from the available piles
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 *
 * @returns {Card[]} the pile named chosen
 */
export function pickNamedPile(piles) {
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
  let { chosen, disregarded } = piles;
  return chosen;
}

/**
 * Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 * @returns {{ chosen: Card[], disregarded: Card[] }} new piles where the two piles are swapped
 */
export function swapNamedPile(piles) {
  let { chosen:disregarded, disregarded:chosen } = piles;
  // 🪄 Don't break the magic.
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
  // 🚨 Do NOT touch the next line or Elyse will accidentally reveal the trick.
  return { chosen, disregarded };
}

// function init() {
//   console.log(getFirstCard([5, 9, 7, 1, 8]));
//   console.log(getSecondCard([5, 9, 7, 1, 8]));
//   console.log(swapTwoCards([10, 7]));
//   console.log(shiftThreeCardsAround([2, 6, 10]));
//   console.log(pickNamedPile({ chosen: [5, 4], disregarded: [7, 10] }));
//   console.log(swapNamedPile({ chosen: [5, 4], disregarded: [7, 10] }));
// }
