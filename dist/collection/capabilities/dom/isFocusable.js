const focusableTags = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
export default (element) => {
  const tabindex = element.getAttribute('tabindex');
  return (focusableTags.includes(element.tagName.toUpperCase()) ||
    element.getAttribute('href')) &&
    (!tabindex || isNaN(tabindex) || parseInt(tabindex) > -1);
};
