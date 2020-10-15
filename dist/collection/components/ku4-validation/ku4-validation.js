import { Component, Host, Prop, State, Method, Element, h, Event } from '@stencil/core';
import { wait } from 'ku4es-kernel';
import validate from './validate';
import { Assert, uid } from 'ku4es-kernel';
/**
 * @description ku4-validation
 */
export class Ku4Validation {
  constructor() {
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
    this.validationMethod = Assert.isNullOrEmpty(this.method)
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
    Assert.isFalse(this.isValid) && this.assert();
  }
  handleChange() {
    Assert.isFalse(this.isValid) && this.assert();
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
    const { ele, validOptions, input, regex } = this;
    const previousIsValid = this.isValid;
    this.isValid = validate(regex, input.value, validOptions, ele) && this.validationMethod(input.value);
    this.invalid = !this.isValid;
    input.setAttribute('aria-invalid', this.invalid);
    if (Assert.isFalse(previousIsValid) && this.isValid) {
      this.validated.emit(this.isValid);
    }
    return this.isValid;
  }
  componentWillLoad() {
    this.input = document.getElementById(this.for);
    if (Assert.exists(this.input)) {
      this.ele = document.getElementById(this.element) || document.querySelector(this.element);
      this.validOptions = Assert.exists(this.values)
        ? this.values.split(',')
        : (this.ele && this.ele.nodeName === 'DATALIST' &&
          [].slice.call(this.ele.querySelectorAll('option'))
            .map(option => option.value));
      const describedby = this.input.getAttribute('aria-describedby');
      const id = this.host.getAttribute('id') || uid();
      this.host.setAttribute('id', id);
      if (Assert.isNullOrEmpty(describedby)) {
        this.input.setAttribute('aria-describedby', id);
      }
      /**
       * We "wait" to put this on the next event loop. This allows
       * ku4-mask to be placed anywhere in the dom and not affect
       * to workings of ku4-validation.
       */
      wait(0).then(() => {
        this.input.addEventListener('input', this.handleInput);
        this.input.addEventListener('change', this.handleChange);
        this.input.addEventListener('blur', this.handleBlur);
      });
      if (Assert.isFunction(this.host.closest)) {
        this.form = this.host.closest('form');
        if (this.form && this.form.addEventListener) {
          this.form.addEventListener('reset', this.handleReset);
        }
      }
    }
    else {
      // eslint-disable-next-line no-console
      console.error('ku4-validation must have a `for` attribute pointing to a target field `id`.');
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
    return h(Host, { role: "alert", "aria-live": "assertive" },
      h("slot", null));
  }
  static get is() { return "ku4-validation"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-validation.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-validation.css"]
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
        "text": "The value of the id attribute of the field that this\nis the validation for."
      },
      "attribute": "for",
      "reflect": false
    },
    "element": {
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
        "text": "querySelector for an element whose value this value should match.\nThis is excellent for creating confirmation type validations, e.g.\nemail confirmations or password confirmations. See the Preview\nin the ku4-form Docs and \"Show code\" for some examples of using\nthis attribute."
      },
      "attribute": "element",
      "reflect": false
    },
    "pattern": {
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
        "text": "Validation RegExp pattern that the target field must match to\nbe considered valid. Multiple patterns can be passed delimited\nby a `space` character. e.g. pattern1 pattern2 pattern3 etc.\nIf your target field is optional you can accomplish this with\nyour pattern using \"(^$)|(YOUR-PATTERN)\". This says that the\nfield must be empty (^$) OR (YOUR-PATTERN)."
      },
      "attribute": "pattern",
      "reflect": false,
      "defaultValue": "'.*'"
    },
    "flags": {
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
        "text": "Any RegExp flags that you want to include in your pattern. Multiple\npatterns can be passed delimited by a `space` character. e.g.\nusing the pattern1 pattern2 pattern3 example from the `pattern`\nproperty, you could pass \"gimsuy gim gi\". If you wanted to pass\nflags only for patterns 1 and 3 you will just skip flags for pattern2\nby typing nothing and instead typing another \"space\" e.g. \"gimsuy  gi\".\nIf you wanted to skip flags for pattern1 you could start flags with a\n\"space\" e.g. \" gim gi\"."
      },
      "attribute": "flags",
      "reflect": false,
      "defaultValue": "''"
    },
    "values": {
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
        "text": "Comma delimited string of valid values. This attribute is great\nif your validation rules require some very specific set of\nvalid values. An example may be if you have a select field where\nyou would like to show all possible values but some you still\nwant to be invalid."
      },
      "attribute": "values",
      "reflect": false
    },
    "method": {
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
        "text": "A reference to a named function or a function body that\ndefine a validation criteria and return `true` when the\ndefined validation criteria are satisfied.\nThe function will be called with one argument, `value`,\nthat will contain the current value of the target field.\nExample: method=\"return value === 'valid'\", or\nfunction validate(value) { return value === 'valid'; }\nmethod=\"validate(value)\""
      },
      "attribute": "method",
      "reflect": false,
      "defaultValue": "''"
    },
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
  static get states() { return {
    "isValid": {}
  }; }
  static get events() { return [{
      "method": "validated",
      "name": "ku4ValidationValidated",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event fired when this validation changes from\ninvalid to valid."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "validate": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "Call to explicitly validate this validation. This method\nis called internally on change and blur of the input internally.\nThere is no default need to call this method.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
