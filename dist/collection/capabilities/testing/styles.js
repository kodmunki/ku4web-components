/**
 * Returns an object literal of the style property values
 * for the requested selector and property array
 *
 * @param {string} selector - a valid query selector string
 * @param {string[]} properties - an array of valid style property values to return
 * @returns {string}
 */
export default (selector, properties) => properties.reduce((acc, property) => {
  acc[property] = window
    .getComputedStyle(document.querySelector(selector))
    .getPropertyValue(property);
  return acc;
}, {});
