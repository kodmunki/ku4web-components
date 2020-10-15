import { Component, Method, Element, h, Prop } from '@stencil/core';
import { Assert } from 'ku4es-kernel';
import { form } from 'ku4es-ui-kernel';
/**
 * @description ku4-form
 */
export class Ku4Form {
  constructor() {
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
    if (Assert.isArray(name)) {
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
    return form.read(this.form);
  }
  /**
   * Writes data to the associated form
   */
  async write(data) {
    form.write(this.form, data);
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
    if (Assert.exists(form)) {
      const onsubmit = form.onsubmit || (() => { });
      form.onsubmit = (e) => {
        e.preventDefault();
        this.validate()
          .then(valid => valid && onsubmit.call(form, e))
          .then(returnValue => !Assert.isFalse(returnValue) && form.submit());
        return false;
      };
      form.addEventListener('reset', this.handleReset);
      this.fields.forEach(field => field.addEventListener('ku4ValidationValidated', this.validate));
    }
  }
  disconnectedCallback() {
    const { form } = this;
    if (Assert.exists(form)) {
      form.removeEventListener('reset', this.handleReset);
      this.fields.forEach(field => field.removeEventListener('ku4ValidationValidated', this.validate));
    }
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "ku4-form"; }
  static get properties() { return {
    "invalid": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set to true to display as invalid"
      },
      "attribute": "invalid",
      "reflect": true
    }
  }; }
  static get methods() { return {
    "validate": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Validates this form. This method is automatically called\ninternally on submit of the form only allowing a successful\nsubmit if the form  is valid.",
        "tags": []
      }
    },
    "invalidate": {
      "complexType": {
        "signature": "(name: any) => Promise<this>",
        "parameters": [{
            "tags": [{
                "text": "name",
                "name": "param"
              }],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "A string of the name of the field to invalidate",
        "tags": [{
            "name": "param",
            "text": "name"
          }]
      }
    },
    "read": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Reads data from the associated form",
        "tags": []
      }
    },
    "write": {
      "complexType": {
        "signature": "(data: any) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "Writes data to the associated form",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
