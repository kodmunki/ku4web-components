import { Component, Prop, Host, Watch, Listen, Method, Event, Element, h } from '@stencil/core';
import { Assert } from 'ku4es-kernel';
import { Document, Key } from 'ku4es-ui-kernel';
/**
 * @description ku4-modal
 */
export class Ku4Modal {
  constructor() {
    /**
     * Visible when true
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.visible = false;
  }
  handleVisibility(value) {
    if (value) {
      Document.preventScroll();
      if (Assert.exists(this.trap)) {
        this.trap.activate();
      }
    }
    else {
      Document.resumeScroll();
      if (Assert.exists(this.trap)) {
        this.trap.deactivate();
      }
    }
  }
  handleKeyUp(e) {
    if (this.visible && Key.esc.didFire(e)) {
      this.dismiss();
    }
  }
  /**
   * Display modal
   */
  async display() {
    this.visible = true;
    this.displayed.emit(this);
  }
  /**
   * Dismiss modal
   */
  async dismiss() {
    this.visible = false;
    this.dismissed.emit(this);
  }
  componentDidLoad() {
    try {
      this.trap = this.host.querySelector('ku4-focus-trap') ||
        (document.querySelector(this.focusTrap));
    }
    catch (e) {
      throw new Error(`Cannot connect ku4-focus-trap: ${e.messsage}`);
    }
  }
  render() {
    return (h(Host, { "aria-modal": "true" },
      h("section", { class: "ku4-modal-content" },
        h("slot", null)),
      h("section", { class: "ku4-modal-overlay", onClick: () => this.dismiss(), "aria-hidden": "true" })));
  }
  static get is() { return "ku4-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-modal.css"]
  }; }
  static get properties() { return {
    "visible": {
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
        "text": "Visible when true"
      },
      "attribute": "visible",
      "reflect": true,
      "defaultValue": "false"
    },
    "focusTrap": {
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
        "text": "An optional querySelector of an associated ku4-focus-trap that should\nbe activated when this ku4-modal is displayed and deactivated when\nthis ku4-modal is dismissed."
      },
      "attribute": "focus-trap",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "displayed",
      "name": "ku4ModalDisplay",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event fired when modal is displayed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "dismissed",
      "name": "ku4ModalDismiss",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event fired when modal is dismissed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "display": {
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
        "text": "Display modal",
        "tags": []
      }
    },
    "dismiss": {
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
        "text": "Dismiss modal",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "visible",
      "methodName": "handleVisibility"
    }]; }
  static get listeners() { return [{
      "name": "keyup",
      "method": "handleKeyUp",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
