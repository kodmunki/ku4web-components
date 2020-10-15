'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-15d4a570.js');
require('./index-d80b2fdd.js');
const index$1 = require('./index-3e6df2cb.js');
const uid = require('./uid-f37cb48a.js');

const ku4TabListCss = ":host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}";

const Ku4TabList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  handleHpTabClick({ target }) {
    this.tabs.includes(target) && this.open(target);
  }
  handleHpTabKeyUp({ target, detail: e }) {
    if (!(this.tabs.includes(target))) {
      return;
    }
    if (index$1.l.left.didFire(e)) {
      this.open(this.previous(target));
    }
    if (index$1.l.right.didFire(e)) {
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
    return (index.h(index.Host, { id: this.host.id || uid.uid(), role: "tablist", "aria-owns": this.host.id || uid.uid() }, index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
Ku4TabList.style = ku4TabListCss;

exports.ku4_tab_list = Ku4TabList;
