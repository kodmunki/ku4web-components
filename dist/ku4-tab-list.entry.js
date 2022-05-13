import { r as registerInstance, h, f as Host, g as getElement } from './index-65e7ba77.js';
import { K as Key } from './index-4eb619fd.js';
import { u as uid } from './uid-08001296.js';
import './index-5bc509ed.js';

const ku4TabListCss = ":host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}";

const Ku4TabList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  handleTabClick({ target }) {
    this.tabs.includes(target) && this.open(target);
  }
  handleTabKeyUp({ target, detail: e }) {
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
    return (h(Host, { id: this.host.id || uid(), role: "tablist", "aria-owns": this.host.id || uid() }, h("slot", null)));
  }
  get host() { return getElement(this); }
};
Ku4TabList.style = ku4TabListCss;

export { Ku4TabList as ku4_tab_list };
