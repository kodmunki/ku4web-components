import { Component, Host, Element, Listen, Method, h } from '@stencil/core';
import { Key } from 'ku4es-ui-kernel';
import uid from '../../capabilities/identity/uid';
/**
 * @description ku4-tab-list
 */
export class Ku4TabList {
  handleHpTabClick({ target }) {
    this.tabs.includes(target) && this.open(target);
  }
  handleHpTabKeyUp({ target, detail: e }) {
    if (!(this.tabs.includes(target))) {
      return;
    }
    if (Key.left.didFire(e)) {
      this.open(this.previous(target));
    }
    if (Key.right.didFire(e)) {
      this.open(this.next(target));
    }
  }
  /**
   * Open a ku4-tab in this ku4-tab-list.
   * @param {Ku4Tab} tab - ku4-tab target to open.
   */
  async open(tab) {
    return this.reset().select(tab);
  }
  select(tab) {
    tab.select();
    return this;
  }
  deselect(tab) {
    tab.deselect();
    return this;
  }
  reset() {
    this.tabs.forEach(tab => this.deselect(tab));
    return this;
  }
  previous(tab) {
    const { tabs, tabs: { length } } = this;
    const index = tabs.indexOf(tab) - 1;
    return tabs[index > -1 ? index : length - 1];
  }
  next(tab) {
    const { tabs, tabs: { length } } = this;
    const index = tabs.indexOf(tab) + 1;
    return tabs[index < length ? index : 0];
  }
  componentDidRender() {
    const tabs = [];
    const panels = [];
    [].slice.call(this.host.children).forEach((child) => {
      if (child.tagName === 'KU4-TAB') {
        tabs.push(child);
      }
      if (child.tagName === 'KU4-TAB-PANEL') {
        panels.push(child);
      }
    });
    this.tabs = tabs;
    this.tabs.forEach((tab, index) => tab.connect(panels[index]));
  }
  render() {
    return (h(Host, { id: this.host.id || uid(), role: "tablist", "aria-owns": this.host.id || uid() },
      h("slot", null)));
  }
  static get is() { return "ku4-tab-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-tab-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-tab-list.css"]
  }; }
  static get methods() { return {
    "open": {
      "complexType": {
        "signature": "(tab: any) => Promise<this>",
        "parameters": [{
            "tags": [{
                "text": "tab - ku4-tab target to open.",
                "name": "param"
              }],
            "text": "- ku4-tab target to open."
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "Open a ku4-tab in this ku4-tab-list.",
        "tags": [{
            "name": "param",
            "text": "tab - ku4-tab target to open."
          }]
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "ku4TabClick",
      "method": "handleHpTabClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ku4TabKeyup",
      "method": "handleHpTabKeyUp",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
