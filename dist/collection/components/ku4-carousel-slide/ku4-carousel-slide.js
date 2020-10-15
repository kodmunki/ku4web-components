import { Component, Host, State, Method, h, } from '@stencil/core';
/**
 * @description ku4-carousel-slide
 */
export class Ku4CarouselSlide {
  constructor() {
    this.classList = '';
  }
  /**
   * Move this slide in to view.
   * @param {string} direction - Direction to move.
   */
  async slideIn(direction) {
    this.active = true;
    this.classList = `active ${direction}`;
  }
  /**
   * Move this slide out of view.
   * @param {string} direction - Direction to move.
   */
  async slideOut(direction) {
    this.active = false;
    this.classList = `inactive  ${direction}`;
  }
  /**
   * Set this slide to active.
   */
  async activate() {
    this.active = true;
    this.classList = 'active';
  }
  /**
   * Set this slide to inactive.
   */
  async deactivate() {
    this.active = false;
    this.classList = '';
  }
  render() {
    const { active, classList } = this;
    return (h(Host, { class: `${classList}`, "aria-hidden": active ? 'false' : 'true', "aria-roledescription": "slide" },
      h("slot", null)));
  }
  static get is() { return "ku4-carousel-slide"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-carousel-slide.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-carousel-slide.css"]
  }; }
  static get states() { return {
    "active": {},
    "classList": {}
  }; }
  static get methods() { return {
    "slideIn": {
      "complexType": {
        "signature": "(direction: 'prev' | 'next') => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "direction - Direction to move.",
                "name": "param"
              }],
            "text": "- Direction to move."
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Move this slide in to view.",
        "tags": [{
            "name": "param",
            "text": "direction - Direction to move."
          }]
      }
    },
    "slideOut": {
      "complexType": {
        "signature": "(direction: 'prev' | 'next') => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "direction - Direction to move.",
                "name": "param"
              }],
            "text": "- Direction to move."
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Move this slide out of view.",
        "tags": [{
            "name": "param",
            "text": "direction - Direction to move."
          }]
      }
    },
    "activate": {
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
        "text": "Set this slide to active.",
        "tags": []
      }
    },
    "deactivate": {
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
        "text": "Set this slide to inactive.",
        "tags": []
      }
    }
  }; }
}
