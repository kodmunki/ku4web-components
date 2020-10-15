import { Component, Element, Host, Prop, State, Method, Listen, Event, h, } from '@stencil/core';
import uid from '../../capabilities/identity/uid';
/**
 * @description ku4-tab
 */
export class Ku4Tab {
  constructor() {
    /**
     * Active when true
     */
    this.selected = false;
  }
  handleClick(e) {
    this.tabClick.emit(e);
  }
  handleKeyUp(e) {
    this.tabKeyUp.emit(e);
  }
  /**
   * Set this tab as selected.
   */
  async select() {
    this.selected = true;
    this.panel.select();
    this.host.focus();
  }
  /**
   * Unset this tab as selected
   */
  async deselect() {
    this.selected = false;
    this.panel.deselect();
  }
  /**
   * Connect this tab to a panel
   * @param {HTMLElement} panel - The target ku4-tab-panel HTMLElement
   */
  async connect(panel) {
    panel.connect(this);
  }
  get id() {
    return this.host.id || uid();
  }
  /**
   * @param {Ku4TabPanel} panel - panel to assign to this tab
   * @internal
   */
  $assignPanel(panel) {
    this.panel = panel;
  }
  render() {
    const { selected, panel } = this;
    return (h(Host, { id: this.host.id || uid(), role: "tab", type: "button", tabIndex: selected ? 0 : -1, "aria-controls": panel && panel.id, "aria-selected": selected ? 'true' : 'false' },
      h("slot", null)));
  }
  static get is() { return "ku4-tab"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-tab.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-tab.css"]
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
        "text": "Active when true"
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "panel": {}
  }; }
  static get events() { return [{
      "method": "tabClick",
      "name": "ku4TabClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event fired when this tab is clicked."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "tabKeyUp",
      "name": "ku4TabKeyup",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event fired when this tab is keyup."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
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
        "text": "Set this tab as selected.",
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
        "text": "Unset this tab as selected",
        "tags": []
      }
    },
    "connect": {
      "complexType": {
        "signature": "(panel: any) => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "panel - The target ku4-tab-panel HTMLElement",
                "name": "param"
              }],
            "text": "- The target ku4-tab-panel HTMLElement"
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Connect this tab to a panel",
        "tags": [{
            "name": "param",
            "text": "panel - The target ku4-tab-panel HTMLElement"
          }]
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keyup",
      "method": "handleKeyUp",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
