import { r as registerInstance, h, c as Host, g as getElement } from './index-dc6f4989.js';
import './index-aa88697c.js';
import { u as uid } from './uid-bae3cff6.js';

const ku4TabPanelCss = ":host{-webkit-backface-visibility:hidden;display:block;width:100%;max-height:0;padding:0 20px;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s;overflow:hidden}:host([selected]){max-height:100vh;padding:20px;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s}@media only screen and (min-width: 768px){:host{display:none;max-height:initial;padding:10px 20px;border-top:1px solid #ccc;border-bottom:1px solid #ccc;-webkit-transition:none;transition:none;-ms-flex-order:2;order:2}:host([selected]){display:block;max-height:initial;-webkit-transition:none;transition:none}}";

const Ku4TabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { role: "tabpanel", id: this.host.id || uid(), "aria-hidden": selected ? 'false' : 'true', "aria-labelledby": tab && tab.id, tabIndex: selected ? 0 : -1 }, h("slot", null)));
  }
  get host() { return getElement(this); }
};
Ku4TabPanel.style = ku4TabPanelCss;

export { Ku4TabPanel as ku4_tab_panel };
