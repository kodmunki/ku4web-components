'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-15d4a570.js');
const index$1 = require('./index-d80b2fdd.js');
const index$2 = require('./index-3e6df2cb.js');

const Ku4Form = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.validate = this.validate.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  /**
   * Validates this form. This method is automatically called
   * internally on submit of the form only allowing a successful
   * submit if the form  is valid.
   */
  async validate() {
    const { fields } = this;
    const methods = fields.map(field => field.validate());
    this.isValid = await Promise.all(methods).then(values => !values.some(v => v === false));
    this.invalid = !this.isValid;
    return this.isValid;
  }
  /**
   * A string of the name of the field to invalidate
   * @param {string} name
   */
  async invalidate(name) {
    if (index$1.t.isArray(name)) {
      name.forEach((name) => {
        const field = this.fields.find(field => field.for === name);
        if (field) {
          field.invalid = true;
        }
      });
    }
    else {
      const field = this.fields.find(field => field.for === name);
      if (field) {
        field.invalid = true;
      }
    }
    this.invalid = true;
    return this;
  }
  /**
   * Reads data from the associated form
   */
  async read() {
    return index$2.u.read(this.form);
  }
  /**
   * Writes data to the associated form
   */
  async write(data) {
    index$2.u.write(this.form, data);
    Object.keys(data).forEach(name => this.form.querySelector(`[name="${name}"]`).dispatchEvent(new Event('change')));
    return this;
  }
  get form() {
    return this.host.querySelector('form');
  }
  get fields() {
    return [].slice.call(this.form.querySelectorAll('ku4-validation'));
  }
  handleReset() {
    this.isValid = true;
    this.invalid = !this.isValid;
  }
  componentWillLoad() {
    const { form } = this;
    if (index$1.t.exists(form)) {
      const onsubmit = form.onsubmit || (() => { });
      form.onsubmit = (e) => {
        e.preventDefault();
        this.validate()
          .then(valid => valid && onsubmit.call(form, e))
          .then(returnValue => !index$1.t.isFalse(returnValue) && form.submit());
        return false;
      };
      form.addEventListener('reset', this.handleReset);
      this.fields.forEach(field => field.addEventListener('ku4ValidationValidated', this.validate));
    }
  }
  disconnectedCallback() {
    const { form } = this;
    if (index$1.t.exists(form)) {
      form.removeEventListener('reset', this.handleReset);
      this.fields.forEach(field => field.removeEventListener('ku4ValidationValidated', this.validate));
    }
  }
  render() {
    return index.h("slot", null);
  }
  get host() { return index.getElement(this); }
};

exports.ku4_form = Ku4Form;
