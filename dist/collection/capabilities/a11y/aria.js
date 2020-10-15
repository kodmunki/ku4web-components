/**
* Sets aria-hidden attribute for passed elements
* @param {Array} elements - List of elements to set aria-hidden on
* @param {boolean} [value] - Optional value for aria-hidden.
* No value will set to previous value if available.
*/
export const ariaHidden = (elements, value) => {
  if (!value) {
    // eslint-disable-next-line @stencil/ban-side-effects
    elements.forEach((element) => {
      if (!element.currentAriaHidden) {
        element.removeAttribute('aria-hidden');
      }
      else {
        element.setAttribute('aria-hidden', element.currentAriaHidden);
      }
    });
  }
  else {
    // eslint-disable-next-line @stencil/ban-side-effects
    elements.forEach((element) => {
      element.currentAriaHidden = element.getAttribute('aria-hidden');
      element.setAttribute('aria-hidden', value);
    });
  }
};
