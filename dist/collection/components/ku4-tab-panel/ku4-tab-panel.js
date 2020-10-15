import { Component, Element, Host, Prop, State, Method, h } from '@stencil/core';
import uid from '../../capabilities/identity/uid';
/**
 * @description ku4-tab-panel
 */
export class Ku4TabPanel {
  constructor() {
    /**
     * Set true to display panel
     */
    this.selected = false;
  }
  /**
   * Set this panel as selected.
   */
  async select() {
    this.selected = true;
  }
  /**
   * Unset this panel as selected.
   */
  async deselect() {
    this.selected = false;
  }
  /**
   * Connect this panel to a tab.
   * @param {Ku4Tab} tab - Tab to connect to this panel
   */
  async connect(tab) {
    tab.$assignPanel(this);
    this.tab = tab;
  }
  render() {
    const { selected, tab } = this;
    return (h(Host, { role: "tabpanel", id: this.host.id || uid(), "aria-hidden": selected ? 'false' : 'true', "aria-labelledby": tab && tab.id, tabIndex: selected ? 0 : -1 },
      h("slot", null)));
  }
  static get is() { return "ku4-tab-panel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-tab-panel.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-tab-panel.css"]
  }; }
  static get properties() { return {
    "selected": {
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
        "text": "Set true to display panel"
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "tab": {}
  }; }
  static get methods() { return {
    "select": {
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
        "text": "Set this panel as selected.",
        "tags": []
      }
    },
    "deselect": {
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
        "text": "Unset this panel as selected.",
        "tags": []
      }
    },
    "connect": {
      "complexType": {
        "signature": "(tab: any) => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "tab - Tab to connect to this panel",
                "name": "param"
              }],
            "text": "- Tab to connect to this panel"
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Connect this panel to a tab.",
        "tags": [{
            "name": "param",
            "text": "tab - Tab to connect to this panel"
          }]
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
