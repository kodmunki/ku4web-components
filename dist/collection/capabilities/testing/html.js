/**
 * Removes all extraneous whitespace from an HTML string so that well-formatted HTML
 * can be used without consequence in Stenciljs end-to-end testing \.
 *
 * @param {string} value - a valid html string to 'trim'
 * @returns {string}
 */
export default value => value
  .replace(/<!--.*?-->/g, '')
  .replace(/[\n\s]+/g, ' ')
  .replace(/[\n\s]>/g, '>')
  .replace(/[\n\s]+</g, '<')
  .replace(/>[\n\s]+/g, '>')
  .trim();
