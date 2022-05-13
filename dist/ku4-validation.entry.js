import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-65e7ba77.js';
import { t, R, Y } from './index-5bc509ed.js';

/**
 * Business logic for form validation:
 * It tests against a list of regular expressions that all must pass for this
 * to return true. And IFF an element is passed it will also have to match this value.
 * @param {Array<RegExp>} expressions - List of regular expressions to test against.
 * @param {string} value - The value to test
 * @param {Array<string>} [options] - A list of valid options that this value must match if not null
 * @param {HTMLElement} [element] - An element to test if the value matches its value if not null.
 */
const validate = (expressions, value, options, element) => options
  ? options.some(v => v === value) && expressions.every(r => r.test(value))
  : element
    ? element.value === value && expressions.every(r => r.test(value))
    : expressions.every(r => r.test(value));

const ku4ValidationCss = ":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}:host([disabled]){visibility:hidden !important}:host([invalid][disabled]){visibility:hidden !important}:host([invalid][hidden]){visibility:hidden !important}";

const Ku4Validation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didValidate = createEvent(this, "validate", 7);
    /**
     * Validation RegExp pattern that the target field must match to
     * be considered valid. Multiple patterns can be passed delimited
     * by a `space` character. e.g. pattern1 pattern2 pattern3 etc.
     * If your target field is optional you can accomplish this with
     * your pattern using "(^$)|(YOUR-PATTERN)". This says that the
     * field must be empty (^$) OR (YOUR-PATTERN).
     */
    this.pattern = '.*';
    /**
     * Any RegExp flags that you want to include in your pattern. Multiple
     * patterns can be passed delimited by a `space` character. e.g.
     * using the pattern1 pattern2 pattern3 example from the `pattern`
     * property, you could pass "gimsuy gim gi". If you wanted to pass
     * flags only for patterns 1 and 3 you will just skip flags for pattern2
     * by typing nothing and instead typing another "space" e.g. "gimsuy  gi".
     * If you wanted to skip flags for pattern1 you could start flags with a
     * "space" e.g. " gim gi".
     */
    this.flags = '';
    /**
     * A reference to a named function or a function body that
     * define a validation criteria and return `true` when the
     * defined validation criteria are satisfied.
     * The function will be called with one argument, `value`,
     * that will contain the current value of the target field.
     * Example: method="return value === 'valid'", or
     * function validate(value) { return value === 'valid'; }
     * method="validate(value)"
     */
    this.method = '';
    const patterns = this.pattern.split(' ');
    const flags = this.flags.split(' ');
    const method = this.method.trim();
    this.regex = patterns.map((pattern, i) => new RegExp(pattern, flags[i]));
    this.validationMethod = t.isNullOrEmpty(method)
      ? () => true
      : new Function('value', (/^return/.test(method) ? method : `return ${method}`));
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  /**
   * Call to explicitly validate this validation. This method
   * is called internally on change and blur of the input internally.
   * There is no default need to call this method.
   */
  async validate() {
    return this.assert();
  }
  handleInput() {
    (this.input.type === 'file' || t.isFalse(this.isValid)) && this.assert();
  }
  handleChange() {
    (this.input.type === 'file' || t.isFalse(this.isValid)) && this.assert();
  }
  handleBlur() {
    this.assert();
  }
  handleReset() {
    this.isValid = true;
    this.invalid = !this.isValid;
    this.input.setAttribute('aria-invalid', this.invalid);
  }
  assert() {
    const { ele, validOptions, input, regex, checked } = this;
    if (input.type === 'file' && t.isNullOrEmpty(input.value)) {
      return;
    }
    const previousIsValid = this.isValid;
    this.isValid = this.disabled
      ? true
      : t.isBool(checked)
        ? input.checked === checked
        : validate(regex, input.value, validOptions, ele) && this.validationMethod(input.value);
    this.invalid = !this.isValid;
    input.setAttribute('aria-invalid', this.invalid);
    if (t.isFalse(previousIsValid) && this.isValid) {
      this.didValidate.emit(this.isValid);
    }
    return this.isValid;
  }
  componentWillLoad() {
    this.input = document.getElementById(this.for);
    if (t.exists(this.input)) {
      this.ele = document.getElementById(this.element) || document.querySelector(this.element);
      this.validOptions = t.exists(this.values)
        ? this.values.split(',')
        : (this.ele && this.ele.nodeName === 'DATALIST' &&
          [].slice.call(this.ele.querySelectorAll('option'))
            .map(option => option.value));
      const describedby = this.input.getAttribute('aria-describedby');
      const id = this.host.getAttribute('id') || R.uid();
      this.host.setAttribute('id', id);
      if (t.isNullOrEmpty(describedby)) {
        this.input.setAttribute('aria-describedby', id);
      }
      /**
       * We "wait" to put this on the next event loop. This allows
       * ku4-mask to be placed anywhere in the dom and not affect
       * to workings of ku4-validation.
       */
      Y(0).then(() => {
        this.input.addEventListener('input', this.handleInput);
        this.input.addEventListener('change', this.handleChange);
        this.input.addEventListener('blur', this.handleBlur);
      });
      if (t.isFunction(this.host.closest)) {
        this.form = this.host.closest('form');
        if (this.form && this.form.addEventListener) {
          this.form.addEventListener('reset', this.handleReset);
        }
      }
    }
    else {
      // eslint-disable-next-line no-console
      console.error('ku4-validation must have a valid `for` referencing target field `id`.');
    }
  }
  disconnectedCallback() {
    if (this.input && this.input.removeEventListener) {
      this.input.removeEventListener('input', this.handleInput);
      this.input.removeEventListener('change', this.handleChange);
      this.input.removeEventListener('blur', this.handleBlur);
    }
    if (this.form && this.form.removeEventListener) {
      this.form.removeEventListener('reset', this.handleReset);
    }
  }
  render() {
    return h(Host, { role: "alert", "aria-live": "assertive" }, h("slot", null));
  }
  get host() { return getElement(this); }
};
Ku4Validation.style = ku4ValidationCss;

export { Ku4Validation as ku4_validation };
