import { r as registerInstance, h, f as Host, g as getElement } from './index-65e7ba77.js';
import { u as uid } from './uid-08001296.js';
import './index-5bc509ed.js';

const ku4TabPanelCss = ":host{-webkit-backface-visibility:hidden;display:block;width:100%;height:auto;max-height:0;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s;overflow:auto}@media only screen and (min-width: 768px){:host{display:none;border-top:1px solid #ccc;border-bottom:1px solid #ccc;max-height:initial !important;-webkit-transition:none;transition:none;-ms-flex-order:2;order:2}:host([selected]){display:block;max-height:initial !important;-webkit-transition:none;transition:none}}";

const Ku4TabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Set true to display panel
     */
    this.selected = false;
    this.maxHeight = this.selected ? 'none' : '0px';
  }
  handleTransitionEnd() {
    this.maxHeight = this.selected ? 'none' : '0px';
  }
  /**
   * Set this panel as selected.
   */
  async select() {
    if (this.selected) {
      return;
    }
    this.selected = true;
    if (this.hasTransition) {
      this.maxHeight = `${this.host.scrollHeight}px`;
    }
    else {
      this.handleTransitionEnd();
    }
  }
  /**
   * Unset this panel as selected.
   */
  async deselect() {
    if (!this.selected) {
      return;
    }
    this.selected = false;
    this.host.style.maxHeight = `${this.host.scrollHeight}px`;
    if (this.hasTransition) {
      this.maxHeight = '0px';
    }
    else {
      this.handleTransitionEnd();
    }
  }
  /**
   * Connect this panel to a tab.
   * @param {Ku4Tab} tab - Tab to connect to this panel
   */
  async connect(tab) {
    tab.$assignPanel(this);
    this.tab = tab;
  }
  get hasTransition() {
    const transition = window
      .getComputedStyle(this.host)
      .getPropertyValue('transition');
    return !/none/.test(transition);
  }
  render() {
    const { selected, tab, maxHeight } = this;
    return (h(Host, { role: "tabpanel", id: this.host.id || uid(), "aria-hidden": selected ? 'false' : 'true', "aria-labelledby": tab && tab.id, tabIndex: selected ? 0 : -1, style: { maxHeight } }, h("slot", null)));
  }
  get host() { return getElement(this); }
};
Ku4TabPanel.style = ku4TabPanelCss;

export { Ku4TabPanel as ku4_tab_panel };
