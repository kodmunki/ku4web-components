import { Component, Prop, Element, Method, Host, h } from '@stencil/core';
import { debounce, Rectangle, Timeout } from 'ku4es-kernel';
/**
 * @description ku4-tooltip
 */
export class Ku4Tooltip {
  constructor() {
    this.isShowing = false;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
    this._toggle = this._toggle.bind(this);
    this.hideTimeout = new Timeout(200).onTimeout(this._hide);
  }
  /**
   * Show tooltip on target element.
   * @param {HTMLElement} element - Element to show tooltip on
   */
  async show(element) {
    this.hideTimeout.clear();
    if (this.host.contains(element)) {
      return;
    }
    else {
      this.isShowing = true;
      this.host.setAttribute('visible', 'true');
      this.calcualtePosition(element);
      this.scrollListener = debounce(() => this.calcualtePosition(element));
      window.addEventListener('scroll', this.scrollListener);
    }
  }
  /**
   * Hide tool tip.
   */
  async hide() {
    this.hideTimeout.clear().start();
  }
  _show(e) {
    this.show(e.target);
  }
  _hide() {
    window.removeEventListener('scroll', this.scrollListener);
    this.host.removeAttribute('visible');
    this.isShowing = false;
  }
  _toggle(e) {
    this.isShowing ? this._hide() : this._show(e);
  }
  calcualtePosition(target) {
    const { left, top, width, height } = target.getBoundingClientRect();
    const { left: hleft, top: htop, width: hwidth, height: hheight } = this.host.getBoundingClientRect();
    const targetBox = new Rectangle(left, top, width, height);
    const hostBox = new Rectangle(hleft, htop, hwidth, hheight);
    /**
     * The measurements aren't quite lining up with center. They are off by a small bit
     * Need to figure out why.
     * Also the Arrow is not lining up. Looks like some small margin mistakes fix.
     * Could also stand to figure out a way to support an arrow that is white with a border.
     */
    if (this.top) {
      this.host.style.left = `${targetBox.origin.x + targetBox.dimensions.x / 2 - hostBox.dimensions.x / 2}px`;
      this.host.style.top = `${targetBox.origin.y - hostBox.dimensions.y - 15}px`;
    }
    else if (this.left) {
      this.host.style.left = `${targetBox.origin.x - hostBox.dimensions.x - 15}px`;
      this.host.style.top = `${targetBox.origin.y + targetBox.dimensions.y / 2 - hostBox.dimensions.y / 2}px`;
    }
    else if (this.bottom) {
      this.host.style.left = `${targetBox.origin.x + targetBox.dimensions.x / 2 - hostBox.dimensions.x / 2}px`;
      this.host.style.top = `${targetBox.origin.y + targetBox.dimensions.y + 15}px`;
    }
    else if (this.right) {
      this.host.style.left = `${targetBox.origin.x + targetBox.dimensions.x + 15}px`;
      this.host.style.top = `${targetBox.origin.y + targetBox.dimensions.y / 2 - hostBox.dimensions.y / 2}px`;
    }
    else {
      this.host.style.left = `${targetBox.origin.x + targetBox.dimensions.x / 2 - hostBox.dimensions.x / 2}px`;
      this.host.style.top = `${targetBox.origin.y + targetBox.dimensions.y + 15}px`;
    }
  }
  componentWillLoad() {
    document.querySelectorAll(this.element).forEach((element) => {
      this.host.addEventListener('mouseover', this._show);
      this.host.addEventListener('mouseout', this.hide);
      element.addEventListener('mouseover', this._show);
      element.addEventListener('mouseout', this.hide);
      element.addEventListener('touchstart', this._toggle);
    });
  }
  disconnectedCallback() {
    this.hideTimeout.clear();
    document.querySelectorAll(this.element).forEach((element) => {
      this.host.removeEventListener('mouseover', this._show);
      this.host.removeEventListener('mouseout', this.hide);
      element.removeEventListener('mouseover', this._show);
      element.removeEventListener('mouseout', this.hide);
      element.removeEventListener('touchstart', this._toggle);
    });
  }
  render() {
    return (h(Host, null,
      h("div", { class: "arrow" }),
      h("div", { class: "content" },
        h("slot", null))));
  }
  static get is() { return "ku4-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-tooltip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-tooltip.css"]
  }; }
  static get properties() { return {
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
        "text": "Query selector of element(s) to tie to\nthis tooltip."
      },
      "attribute": "element",
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
        "text": "Pin tooltip to top of target element"
      },
      "attribute": "top",
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
        "text": "Pin tooltip to left of target element"
      },
      "attribute": "left",
      "reflect": false
    },
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
        "text": "Pin tooltip to bottom of target element"
      },
      "attribute": "bottom",
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
        "text": "Pin tooltip to right of target element"
      },
      "attribute": "right",
      "reflect": false
    }
  }; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "(element: any) => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "element - Element to show tooltip on",
                "name": "param"
              }],
            "text": "- Element to show tooltip on"
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Show tooltip on target element.",
        "tags": [{
            "name": "param",
            "text": "element - Element to show tooltip on"
          }]
      }
    },
    "hide": {
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
        "text": "Hide tool tip.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
