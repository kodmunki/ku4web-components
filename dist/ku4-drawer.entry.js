import { r as registerInstance, h, e as Host } from './index-c6f39e4e.js';

const ku4DrawerCss = ":host{position:fixed;box-sizing:border-box;overflow:hidden;z-index:1}:host([top]),:host([bottom]){width:100%;height:0;transition:height 0.4s}:host([left]),:host([right]){width:0;height:100%;transition:width 0.4s}:host([top][open]),:host([bottom][open]){height:100%}:host([left][open]),:host([right][open]){width:100%}:host([top][open=false]),:host([bottom][open=false]){height:0}:host([left][open=false]),:host([right][open=false]){width:0}:host([top]),:host([left]){top:0;left:0}:host([bottom]){left:0;bottom:0}:host([right]){right:0;bottom:0}";

const Ku4Drawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Open size of this drawer (any valid CSS width or height value)
     */
    this.size = '20%';
  }
  /**
   * Toggle drawer
   */
  async toggle() {
    this.open = !this.open;
  }
  get sizeValue() {
    const { bottom, top, right, size } = this;
    switch (true) {
      case bottom: return { 'max-height': size };
      case top: return { 'max-height': size };
      case right: return { 'max-width': size };
      default: return { 'max-width': size };
    }
  }
  render() {
    const { sizeValue, open } = this;
    return (h(Host, { style: sizeValue, "aria-hidden": open ? 'false' : 'true' }, h("slot", null)));
  }
};
Ku4Drawer.style = ku4DrawerCss;

export { Ku4Drawer as ku4_drawer };
