import { r as registerInstance, e as createEvent, h, c as Host, g as getElement } from './index-dc6f4989.js';
import './index-aa88697c.js';
import { u as uid } from './uid-bae3cff6.js';

const ku4TabCss = "button{margin:0;padding:0;border:none;background:transparent;-webkit-appearance:none}:host{position:relative;display:block;width:100%;padding:20px 30px;background-color:#eee;text-align:center;color:#aaa;cursor:pointer}:host(:focus){background-color:#eee;color:#666;z-index:2}:host(:hover){background-color:#eee;color:#666}:host(:active){background-color:#fff;color:#333}:host([selected]){border-top:1px solid #ccc;border-bottom:1px solid #ccc;background-color:#fff;color:#444}button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}@media only screen and (min-width: 768px){:host{width:auto;border-top:1px solid #ccc;border-right:1px solid #ccc;border-top-left-radius:4px;border-top-right-radius:4px;background-color:#eee}:host(:first-of-type){border-left:1px solid #ccc}:host([selected]){padding-bottom:1px;border-top:1px solid #ccc;border-bottom:none}:host([selected]):after{content:\" \";position:absolute;display:block;left:0;bottom:-1px;width:100%;height:1px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:inherit}}";

const Ku4Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabClick = createEvent(this, "ku4TabClick", 7);
    this.tabKeyUp = createEvent(this, "ku4TabKeyup", 7);
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
    return (h(Host, { id: this.host.id || uid(), role: "tab", type: "button", tabIndex: selected ? 0 : -1, "aria-controls": panel && panel.id, "aria-selected": selected ? 'true' : 'false' }, h("slot", null)));
  }
  get host() { return getElement(this); }
};
Ku4Tab.style = ku4TabCss;

export { Ku4Tab as ku4_tab };
