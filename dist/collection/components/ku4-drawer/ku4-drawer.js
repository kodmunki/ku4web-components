import { Component, Prop, Method, Host, h } from '@stencil/core';
/**
 * @description ku4-drawer
 */
export class Ku4Drawer {
  constructor() {
    /**
     * Open size of this drawer (any valid CSS width or height value)
     */
    this.size = '20%';
  }
  /**
   * Toggle drawer
   */
  async toggle() {
    this.open = !this.open;
  }
  get sizeValue() {
    const { bottom, top, right, size } = this;
    switch (true) {
      case bottom: return { 'max-height': size };
      case top: return { 'max-height': size };
      case right: return { 'max-width': size };
      default: return { 'max-width': size };
    }
  }
  render() {
    const { sizeValue, open } = this;
    return (h(Host, { style: sizeValue, "aria-hidden": open ? 'false' : 'true' },
      h("slot", null)));
  }
  static get is() { return "ku4-drawer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-drawer.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-drawer.css"]
  }; }
  static get properties() { return {
    "bottom": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pin drawer to bottom"
      },
      "attribute": "bottom",
      "reflect": false
    },
    "left": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pin drawer to left"
      },
      "attribute": "left",
      "reflect": false
    },
    "right": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pin drawer to right"
      },
      "attribute": "right",
      "reflect": false
    },
    "top": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pin drawer to top"
      },
      "attribute": "top",
      "reflect": false
    },
    "size": {
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
        "text": "Open size of this drawer (any valid CSS width or height value)"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'20%'"
    },
    "open": {
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
        "text": "Display drawer"
      },
      "attribute": "open",
      "reflect": true
    }
  }; }
  static get methods() { return {
    "toggle": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Toggle drawer",
        "tags": []
      }
    }
  }; }
}
