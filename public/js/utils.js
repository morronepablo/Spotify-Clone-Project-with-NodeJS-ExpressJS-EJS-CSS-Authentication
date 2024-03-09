/**
 * @license Apache-2.0
 * @copyright morronepablo 2024
 */

"use strict";

/**
 * Add events on elements
 */
const addEventOnElems = function (elements, eventType, callback) {
  elements.forEach((element) => element.addEventListener(eventType, callback));
};

export { addEventOnElems };
