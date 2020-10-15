/**
 * Business logic for form validation:
 * It tests against a list of regular expressions that all must pass for this
 * to return true. And IFF an element is passed it will also have to match this value.
 * @param {Array<RegExp>} expressions - List of regular expressions to test against.
 * @param {string} value - The value to test
 * @param {Array<string>} [options] - A list of valid options that this value must match if not null
 * @param {HTMLElement} [element] - An element to test if the value matches its value if not null.
 */
export default (expressions, value, options, element) => options
  ? options.some(v => v === value) && expressions.every(r => r.test(value))
  : element
    ? element.value === value && expressions.every(r => r.test(value))
    : expressions.every(r => r.test(value));
