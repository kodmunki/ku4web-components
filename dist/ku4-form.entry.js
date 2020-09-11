import { r as registerInstance, h, g as getElement } from './index-c6f39e4e.js';
import { t } from './index-4718bc14.js';

const Ku4Form = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Validates this form. This method is automatically called
   * internally on submit of the form only allowing a successful
   * submit if the form  is valid.
   */
  async validate() {
    const { fields } = this;
    const methods = fields.map(field => field.validate());
    // eslint-disable-next-line no-undef
    return Promise.all(methods).then(values => !values.some(v => v === false));
  }
  get form() {
    return this.host.querySelector('form');
  }
  get fields() {
    return [].slice.call(this.form.querySelectorAll('ku4-validation'));
  }
  componentWillLoad() {
    const { form } = this;
    if (t.exists(form)) {
      const onsubmit = form.onsubmit || (() => { });
      form.onsubmit = (e) => {
        e.preventDefault();
        this.validate()
          .then(valid => valid && onsubmit.call(form, e))
          .then(returnValue => !t.isFalse(returnValue) && form.submit());
        return false;
      };
    }
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
};

export { Ku4Form as ku4_form };
