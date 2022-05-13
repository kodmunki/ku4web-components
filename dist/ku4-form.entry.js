import { r as registerInstance, e as createEvent, h, g as getElement } from './index-65e7ba77.js';
import { Y, t } from './index-5bc509ed.js';
import { i as index } from './index-4eb619fd.js';

const Ku4Form = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didValidate = createEvent(this, "validate", 7);
    this.validate = this.validate.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  /**
   * Returns a list of the names of all of the fields
   * associated with this form.
   */
  async listFieldNames() {
    return index.readFieldNames(this.form);
  }
  /**
   * Validates this form. This method is automatically called
   * internally on submit of the form only allowing a successful
   * submit if the form is valid.
   */
  async validate() {
    const { fields } = this;
    const methods = fields.map(field => field.validate());
    this.isValid = await Promise.all(methods).then(values => !values.some(v => v === false));
    this.valid = this.isValid;
    this.invalid = !this.isValid;
    await Y(100)
      .then(() => this.host.querySelectorAll('ku4-validation[invalid]'))
      .then(invalid => this.didValidate.emit({ invalid }));
    return this.isValid;
  }
  /**
   * A string of the name of the field to invalidate
   * @param {string} name
   */
  async invalidate(name) {
    if (t.isArray(name)) {
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
    this.isValid = false;
    this.valid = this.isValid;
    this.invalid = !this.isValid;
    return this;
  }
  /**
   * Reads data from the associated form
   */
  async read() {
    return index.read(this.form);
  }
  /**
   * Writes data to the associated form
   */
  async write(data) {
    index.write(this.form, data);
    Object.keys(data).forEach((name) => {
      try {
        this.form.querySelector(`[name="${name}"]`)
          .dispatchEvent(new window.Event('change'));
      }
      catch (e) {
        /* Fail silently */
      }
    });
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
    this.valid = this.isValid;
    this.invalid = !this.isValid;
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
      form.addEventListener('reset', this.handleReset);
      this.fields.forEach(field => field.addEventListener('validated', this.validate));
    }
  }
  disconnectedCallback() {
    const { form } = this;
    if (t.exists(form)) {
      form.removeEventListener('reset', this.handleReset);
      this.fields.forEach(field => field.removeEventListener('validated', this.validate));
    }
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
};

export { Ku4Form as ku4_form };
