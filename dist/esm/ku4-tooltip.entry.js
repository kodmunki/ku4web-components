import { r as registerInstance, h, c as Host, g as getElement } from './index-dc6f4989.js';
import { Y, L, B } from './index-aa88697c.js';

const ku4TooltipCss = ":host{position:fixed;display:none;opacity:0;z-index:2;background-color:#fff;border:solid 1px #ccc}:host([visible]){display:block;opacity:1;-webkit-transition:opacity 0.4s;transition:opacity 0.4s}:host .arrow{position:absolute;width:var(--ku4-tooltip-arrow-size, 14px);height:var(--ku4-tooltip-arrow-size, 14px);background-color:inherit;-webkit-transform:rotate(45deg);transform:rotate(45deg);border:inherit}:host .content{position:relative}:host([top]) .arrow{top:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));left:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));border-top:none !important;border-left:none !important}:host([left]) .arrow{top:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));left:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));border-left:none !important;border-bottom:none !important}:host([bottom]) .arrow{left:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));bottom:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));border-bottom:none !important;border-right:none !important}:host([right]) .arrow{top:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));right:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));border-top:none !important;border-right:none !important}";

const Ku4Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isShowing = false;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
    this._toggle = this._toggle.bind(this);
    this.hideTimeout = new Y(200).onTimeout(this._hide);
  }
  /**
   * Show tooltip on target element.
   * @param {HTMLElement} element - Element to show tooltip on
   */
  async show(element) {
    this.hideTimeout.clear();
    if (this.host.contains(element)) {
      return;
    }
    else {
      this.isShowing = true;
      this.host.setAttribute('visible', 'true');
      this.calcualtePosition(element);
      this.scrollListener = L(() => this.calcualtePosition(element));
      window.addEventListener('scroll', this.scrollListener);
    }
  }
  /**
   * Hide tool tip.
   */
  async hide() {
    this.hideTimeout.clear().start();
  }
  _show(e) {
    this.show(e.target);
  }
  _hide() {
    window.removeEventListener('scroll', this.scrollListener);
    this.host.removeAttribute('visible');
    this.isShowing = false;
  }
  _toggle(e) {
    this.isShowing ? this._hide() : this._show(e);
  }
  calcualtePosition(target) {
    const { left, top, width, height } = target.getBoundingClientRect();
    const { left: hleft, top: htop, width: hwidth, height: hheight } = this.host.getBoundingClientRect();
    const targetBox = new B(left, top, width, height);
    const hostBox = new B(hleft, htop, hwidth, hheight);
    /**
     * The measurements aren't quite lining up with center. They are off by a small bit
     * Need to figure out why.
     * Also the Arrow is not lining up. Looks like some small margin mistakes fix.
     * Could also stand to figure out a way to support an arrow that is white with a border.
     */
    if (this.top) {
      this.host.style.left = `${targetBox.origin.x + targetBox.dimensions.x / 2 - hostBox.dimensions.x / 2}px`;
      this.host.style.top = `${targetBox.origin.y - hostBox.dimensions.y - 15}px`;
    }
    else if (this.left) {
      this.host.style.left = `${targetBox.origin.x - hostBox.dimensions.x - 15}px`;
      this.host.style.top = `${targetBox.origin.y + targetBox.dimensions.y / 2 - hostBox.dimensions.y / 2}px`;
    }
    else if (this.bottom) {
      this.host.style.left = `${targetBox.origin.x + targetBox.dimensions.x / 2 - hostBox.dimensions.x / 2}px`;
      this.host.style.top = `${targetBox.origin.y + targetBox.dimensions.y + 15}px`;
    }
    else if (this.right) {
      this.host.style.left = `${targetBox.origin.x + targetBox.dimensions.x + 15}px`;
      this.host.style.top = `${targetBox.origin.y + targetBox.dimensions.y / 2 - hostBox.dimensions.y / 2}px`;
    }
    else {
      this.host.style.left = `${targetBox.origin.x + targetBox.dimensions.x / 2 - hostBox.dimensions.x / 2}px`;
      this.host.style.top = `${targetBox.origin.y + targetBox.dimensions.y + 15}px`;
    }
  }
  componentWillLoad() {
    document.querySelectorAll(this.element).forEach((element) => {
      this.host.addEventListener('mouseover', this._show);
      this.host.addEventListener('mouseout', this.hide);
      element.addEventListener('mouseover', this._show);
      element.addEventListener('mouseout', this.hide);
      element.addEventListener('touchstart', this._toggle);
    });
  }
  disconnectedCallback() {
    this.hideTimeout.clear();
    document.querySelectorAll(this.element).forEach((element) => {
      this.host.removeEventListener('mouseover', this._show);
      this.host.removeEventListener('mouseout', this.hide);
      element.removeEventListener('mouseover', this._show);
      element.removeEventListener('mouseout', this.hide);
      element.removeEventListener('touchstart', this._toggle);
    });
  }
  render() {
    return (h(Host, null, h("div", { class: "arrow" }), h("div", { class: "content" }, h("slot", null))));
  }
  get host() { return getElement(this); }
};
Ku4Tooltip.style = ku4TooltipCss;

export { Ku4Tooltip as ku4_tooltip };
