'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-15d4a570.js');
require('./index-d80b2fdd.js');
const uid = require('./uid-f37cb48a.js');

const ku4TabPanelCss = ":host{-webkit-backface-visibility:hidden;display:block;width:100%;max-height:0;padding:0 20px;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s;overflow:hidden}:host([selected]){max-height:100vh;padding:20px;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s}@media only screen and (min-width: 768px){:host{display:none;max-height:initial;padding:10px 20px;border-top:1px solid #ccc;border-bottom:1px solid #ccc;-webkit-transition:none;transition:none;-ms-flex-order:2;order:2}:host([selected]){display:block;max-height:initial;-webkit-transition:none;transition:none}}";

const Ku4TabPanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { role: "tabpanel", id: this.host.id || uid.uid(), "aria-hidden": selected ? 'false' : 'true', "aria-labelledby": tab && tab.id, tabIndex: selected ? 0 : -1 }, index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
Ku4TabPanel.style = ku4TabPanelCss;

exports.ku4_tab_panel = Ku4TabPanel;
