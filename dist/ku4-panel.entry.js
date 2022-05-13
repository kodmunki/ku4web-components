import { r as registerInstance, h, f as Host, g as getElement } from './index-65e7ba77.js';

const ku4PanelCss = ":host{-webkit-backface-visibility:hidden;display:block;width:100%;height:auto;max-height:0;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s;overflow:hidden}:host([open]){padding-top:inherit;padding-bottom:inherit}";

const Ku4Panel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Set true to display panel
     */
    this.open = false;
    this.maxHeight = this.open ? 'none' : '0px';
  }
  openHandler(value) {
    if (value) {
      this.maxHeight = `${this.host.scrollHeight}px`;
    }
    else {
      this.host.style.maxHeight = `${this.host.scrollHeight}px`;
      this.maxHeight = '0px';
    }
  }
  handleTransitionEnd() {
    this.maxHeight = this.open ? 'none' : '0px';
  }
  /**
   * Toggle panel state
   */
  async toggle() {
    this.open = !this.open;
  }
  /**
   * Close panel
   */
  async close() {
    this.open = false;
  }
  render() {
    const { open, maxHeight } = this;
    return (h(Host, { "aria-hidden": open ? 'false' : 'true', tabIndex: open ? 0 : -1, style: { maxHeight } }, h("slot", null)));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "open": ["openHandler"]
  }; }
};
Ku4Panel.style = ku4PanelCss;

export { Ku4Panel as ku4_panel };
