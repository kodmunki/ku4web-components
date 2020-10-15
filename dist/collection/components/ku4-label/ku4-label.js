import { Component, Host, Prop, State, Element, h } from '@stencil/core';
import { Assert, wait } from 'ku4es-kernel';
/**
 * @description ku4-label
 */
export class Ku4Label {
  constructor() {
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleFocus() {
    wait(100).then(() => { this.empty = Assert.isNullOrEmpty(this.field.value); });
  }
  handleChange() {
    this.empty = Assert.isNullOrEmpty(this.field.value);
  }
  handleInput() {
    this.empty = Assert.isNullOrEmpty(this.field.value);
  }
  handleKeyUp() {
    this.empty = Assert.isNullOrEmpty(this.field.value);
  }
  handleReset() {
    this.empty = true;
  }
  componentWillLoad() {
    this.field = this.host.querySelector('input, select, textarea');
    this.empty = Assert.isNullOrEmpty(this.field.value);
    this.placeholder = this.field.getAttribute('placeholder');
    this.field.addEventListener('focus', this.handleFocus);
    this.field.addEventListener('change', this.handleChange);
    this.field.addEventListener('input', this.handleInput);
    this.field.addEventListener('keyup', this.handleKeyUp);
    if (Assert.isFunction(this.host.closest)) {
      this.form = this.host.closest('form');
      if (this.form && this.form.addEventListener) {
        this.form.addEventListener('reset', this.handleReset);
      }
    }
  }
  disconnectedCallback() {
    if (this.field && this.field.removeEventListener) {
      this.field.removeEventListener('focus', this.handleFocus);
      this.field.removeEventListener('change', this.handleChange);
      this.field.removeEventListener('input', this.handleInput);
      this.field.removeEventListener('keyup', this.handleKeyUp);
      if (this.form && this.form.removeEventListener) {
        this.form.removeEventListener('reset', this.handleReset);
      }
    }
  }
  render() {
    const { empty, value, placeholder } = this;
    return (h(Host, null,
      h("label", { htmlFor: this.for, class: `${empty ? 'empty' : ''}` }, value || placeholder),
      h("slot", null)));
  }
  static get is() { return "ku4-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-label.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-label.css"]
  }; }
  static get properties() { return {
    "for": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The value of the id attribute of the input that this\nis the label for."
      },
      "attribute": "for",
      "reflect": false
    },
    "value": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Optional Label value. This value is driven\nby the input placeholder attribute by default."
      },
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get states() { return {
    "empty": {}
  }; }
  static get elementRef() { return "host"; }
}
